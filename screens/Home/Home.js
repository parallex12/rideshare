import { useEffect, useState } from "react";
import {
  Text,
  View,
  useWindowDimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Home/main";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import Homeheader from "./components/Homeheader";
import Bottommenu from "../../globalComponents/Bottommenu";
import Locationsearch from "./components/Locationsearch";
import Selectaddressmodel from "./components/Selectaddressmodel";
import Sidemenu from "./components/Sidemenu";
import { Quikify } from "quikify";
import { getAuth } from "firebase/auth";

const Home = (props) => {
  let {} = props;

  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState(null);
  const [ismodelvisible, setIsmodelvisible] = useState(false);
  const [issidemodelvisible, setIssidemodelvisible] = useState(false);

  const [choosePickup, setChoosePickup] = useState(false);
  const [chooseDrop, setChooseDrop] = useState(false);
  const [locationInWords, setLocationInWords] = useState(null);
  const [selectedCoordinate, setSelectedCoordinate] = useState(null);

  const [postData, setPostData] = useState({
    pickup: "",
    drop: "",
    pickupCoords: {},
    dropCoords: {},
  });

  const user_id = getAuth()?.currentUser?.uid;

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Location permission denied.");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  useEffect(() => {
    Quikify.get(`/journey/joined_by/${user_id}`)
      .then((res) => {
        let running = res?.filter(
          (item) => item?.status === "running" || item?.status === "picked"
        );
        if (running?.length) {
          props?.navigation.reset({
            index: 0,
            routes: [{ name: "Locationscreen", params: { data: running } }],
          });
        }
      })
      .catch((e) => {
        console.log("ggggg", e);
      });
  }, [props?.get_all_journeys]);

  const handleMapPress = async (event, current) => {
    const { coordinate } = event.nativeEvent;
    try {
      const locationDetails = await Location.reverseGeocodeAsync({
        latitude: coordinate.latitude,
        longitude: coordinate.longitude,
      });
      let inWord = "";
      let arr = [
        locationDetails[0]?.street,
        locationDetails[0]?.streetNumber,
        locationDetails[0]?.district,
        locationDetails[0]?.city,
        locationDetails[0]?.region,
        locationDetails[0]?.country,
      ];
      arr?.map((item) => {
        if (item !== null && item !== "Unnamed Road") {
          inWord = inWord + (item + ", ");
        }
      });
      setLocationInWords(inWord);
      setSelectedCoordinate(coordinate);
      if (choosePickup) {
        setPostData({
          ...postData,
          pickup: inWord,
          pickupCoords: coordinate,
        });
      }
      if (chooseDrop) {
        setPostData({
          ...postData,
          drop: inWord,
          dropCoords: coordinate,
        });
      }
    } catch (error) {
      console.error("Error fetching location details:", error);
    }
  };

  const handlePickup = () => {
    if (selectedCoordinate) {
      setSelectedCoordinate(null);
      setLocationInWords(null);
      setChoosePickup(false);
      setChooseDrop(false);
    } else {
      Alert.alert("Error", "Please select a location on the map.");
    }
  };

  const onConfirmLocation = () => {
    if (!postData?.pickup || !postData?.drop) {
      alert("Please Select Locations");
      return;
    }
    props?.navigation?.navigate("Transport", { data: postData });
    setIsmodelvisible(false);
  };

  const handleChange = (text) => {
    setLocationInWords(text);
  };

  return (
    <View style={styles.container}>
      <Homeheader
        onBellPress={() => props?.navigation?.navigate("Notifications")}
        onMenuPress={() => setIssidemodelvisible(true)}
      />
      {location && (
        <View style={styles.mapwrapper}>
          {choosePickup && (
            <TouchableOpacity onPress={handlePickup} style={styles.pickWrppr}>
              <Text style={styles.pickupTxt}>Confirm Pickup Location</Text>
            </TouchableOpacity>
          )}
          {chooseDrop && (
            <TouchableOpacity onPress={handlePickup} style={styles.pickWrppr}>
              <Text style={styles.pickupTxt}>Confirm Drop Location</Text>
            </TouchableOpacity>
          )}
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            onPress={handleMapPress}
          >
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
              title="My Location"
            />
            {postData?.pickup && (
              <Marker
                coordinate={{
                  latitude: postData?.pickupCoords?.latitude,
                  longitude: postData?.pickupCoords?.longitude,
                }}
                pinColor={"green"}
                title="Pickup Location"
              />
            )}
            {postData?.drop && (
              <Marker
                coordinate={{
                  latitude: postData?.dropCoords?.latitude,
                  longitude: postData?.dropCoords?.longitude,
                }}
                title="Drop Location"
                pinColor={"orange"}
              />
            )}
          </MapView>
        </View>
      )}
      <Bottommenu active={"Home"} navigation={props?.navigation} />
      {!choosePickup && !chooseDrop && (
        <Locationsearch
          onNextpress={() => setIsmodelvisible(true)}
          // onNextpress={() => props?.navigation?.navigate("Transport")}
          onPress={() => setIsmodelvisible(true)}
        />
      )}

      {ismodelvisible && !choosePickup && !chooseDrop && (
        <Selectaddressmodel
          onclosepress={() => setIsmodelvisible(false)}
          onBtnPress={onConfirmLocation}
          setChoosePickup={setChoosePickup}
          setChooseDrop={setChooseDrop}
          postData={postData}
          handleChange={handleChange}
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
  get_all_journeys: state.main.get_all_journeys,
  get_user_details: state.main.get_user_details,
});
export default connect(mapStateToProps, {})(Home);
