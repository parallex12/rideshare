import { useEffect, useState } from "react";
import {
  Text,
  View,
  useWindowDimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Locationscreen/main";
import MapView, { Marker, Polyline } from "react-native-maps";
import * as Location from "expo-location";
import Homeheader from "../Home/components/Homeheader";
import Sidemenu from "../Home/components/Sidemenu";
import Ridemodel from "./components/Ridemodel";
import { getDistance } from "geolib";

const Locationscreen = (props) => {
  let {} = props;

  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });
  let data = props?.route?.params?.data[0];
  let phoneNumber = "+1-222-333-4444";

  const [location, setLocation] = useState(null);
  const [ismodelvisible, setIsmodelvisible] = useState(true);
  const [issidemodelvisible, setIssidemodelvisible] = useState(false);
  const [distance, setDistance] = useState("");
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

  // useEffect(() => {
  //   let locations = Location.watchPositionAsync(
  //     {
  //       accuracy: Location.Accuracy.Balanced,
  //       timeInterval: 10000,
  //       distanceInterval: 1,
  //     },
  //     (loc) => setLocation(loc)
  //   );
  // }, []);

  return (
    <View style={styles.container}>
      {/* <Homeheader
        onBellPress={() => props?.navigation?.navigate("Notifications")}
        onMenuPress={() => setIssidemodelvisible(true)}
      /> */}
      {location && (
        <View style={styles.mapwrapper}>
          <TouchableOpacity
            onPress={() => Linking.openURL(`tel:${phoneNumber}`)}
            style={styles.emergencyBtnWrap}
          >
            <Image
              source={require("../../assets/icons/call.png")}
              resizeMode="contain"
              style={{ height: "70%", width: "70%" }}
            />
          </TouchableOpacity>
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
          onBtnPress={() => {
            props?.navigation?.navigate("Chat", {
              data: journey?.riderDetails,
            }),
              setIsmodelvisible(false);
          }}
          data={journey}
          distance={distance}
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
});
export default connect(mapStateToProps, {})(Locationscreen);
