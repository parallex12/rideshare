import { useEffect, useState } from "react";
import {
  Text,
  View,
  useWindowDimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Locationscreen/main";
import MapView, { Marker, Polyline } from "react-native-maps";
import * as Location from "expo-location";
import Homeheader from "../Home/components/Homeheader";
import Sidemenu from "../Home/components/Sidemenu";
import Ridemodel from "./components/Ridemodel";
import { getDistance } from "geolib";
import { Quikify } from "quikify";
import {
  GET_ALL_JOURNEYS,
  GET_CURRENT_JOURNEY,
} from "../../state-management/types/types";

const LocationScreenRider = (props) => {
  let {} = props;

  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [location, setLocation] = useState(null);
  const [ismodelvisible, setIsmodelvisible] = useState(true);
  const [issidemodelvisible, setIssidemodelvisible] = useState(false);
  const [distance, setDistance] = useState("");
  const [loading, setLoading] = useState(false);
  const [journey, setJourney] = useState(props?.route?.params?.data[0]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Location permission denied.");
        return;
      }
      let locations = await Location.getCurrentPositionAsync({});
      setLocation(locations);
      let distance = getDistance(journey?.pickupCoords, locations?.coords);
      setDistance(distance);
    })();
  }, []);

  // console.log(location);

  const onReach = () => {
    let updatedData =
      journey?.status === "running"
        ? "picked"
        : journey?.status === "picked"
        ? "completed"
        : null;

    setLoading(true);
    Quikify.update(`/journey/${journey?.id}`, {
      ...journey,
      status: updatedData,
    })
      .then((response) => {
        Quikify.get(`/journey/status/${updatedData}`, GET_CURRENT_JOURNEY)
          .then((res) => {
            setJourney(res[0]);
            setLoading(false);
            if (res[0]?.status === "completed") {
              Quikify.get(
                `/journey/created_by/${props?.get_user_details?.id}`,
                GET_ALL_JOURNEYS
              )
                .then((res) => {
                  setLoading(false);
                  props?.navigation?.navigate("Riderhome");

                  return;
                })
                .catch((e) => {
                  console.log("heress", e);
                  setLoading(false);
                  return;
                });
            }
            return;
          })
          .catch((e) => {
            console.log("heress", e);
            setLoading(false);
            return;
          });
      })
      .catch((error) => {
        console.error("Update Journey Error:", error);
        alert("Something Went Wrong");
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      {/* <Homeheader
        onBellPress={() => props?.navigation?.navigate("Notifications")}
        onMenuPress={() => setIssidemodelvisible(true)}
      /> */}
      {location && (
        <View style={styles.mapwrapper}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            onPress={() => setIsmodelvisible(true)}
          >
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
              title="My Location"
            />
            <Polyline
              coordinates={[
                {
                  latitude: location?.coords?.latitude,
                  longitude: location?.coords?.longitude,
                },
              ]}
              strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
              strokeWidth={6}
              style={{}}
              lineDashPattern={[1]}
            />
          </MapView>
        </View>
      )}

      {ismodelvisible && (
        <Ridemodel
          onclosepress={() => setIsmodelvisible(false)}
          onBtnPress={() => props?.navigation?.navigate("Chat")}
          data={journey}
          distance={distance}
          onReach={onReach}
          loading={loading}
        />
      )}
      {issidemodelvisible && (
        <Sidemenu
          onModelpress={() => setIssidemodelvisible(false)}
          setIssidemodelvisible={setIssidemodelvisible}
          onBackPress={() => setIssidemodelvisible(false)}
          navigation={props?.navigation}
          userDetails={props?.get_user_details}
        />
      )}
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
  get_user_details: state.main.get_user_details,
  get_current_journey: state.main.get_current_journey,
});
export default connect(mapStateToProps, {})(LocationScreenRider);
