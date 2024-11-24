import { useEffect, useState } from "react";
import {
  Text,
  View,
  useWindowDimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  Pressable,
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
import Selecttimemodel from "./components/Selecttimemodel";
import DatePicker, { getFormatedDate } from "react-native-modern-datepicker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import { getTimeOnly } from "../../middleware";
import { Quikify } from "quikify";

const Home = (props) => {
  let { } = props;

  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });
  const [location, setLocation] = useState(null);
  const [ismodelvisible, setIsmodelvisible] = useState(false);
  const [issidemodelvisible, setIssidemodelvisible] = useState(false);
  const [istimevisible, setIstimevisible] = useState(false);

  // Location States
  const [choosePickup, setChoosePickup] = useState(false);
  const [chooseDrop, setChooseDrop] = useState(false);
  const [locationInWords, setLocationInWords] = useState(null);
  const [selectedCoordinate, setSelectedCoordinate] = useState(null);

  // Date Time States
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [datePickerMode, setDatePickerMode] = useState("time");
  const [fulldate, setFullDate] = useState(null);

  const [postData, setPostData] = useState({
    pickup: "",
    drop: "",
    pickupCoords: {},
    dropCoords: {},
    date: "",
  });

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
    Quikify.get(`/journey/created_by/${props?.get_user_details?.id}`)
      .then((res) => {
        let running = res?.filter(
          (item) => item?.status === "running" || item?.status === "picked"
        );
        if (running?.length) {
          props?.navigation.reset({
            index: 0,
            routes: [
              { name: "LocationScreenRider", params: { data: running } },
            ],
          });
          // props?.navigation?.navigate("Locationscreen", { data: res });
        }
        // setUserDetails(res);
      })
      .catch((e) => {
        console.log("ffff", e);
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
  const handleSearchLocation = async (text) => {
    try {
      const result = await Location.geocodeAsync(text);
      if (result?.length > 0) {
        const firstResult = result[0];
        const selectedCoordinates = {
          latitude: firstResult?.latitude,
          longitude: firstResult?.longitude,
        };

        console.log("Selected Coordinates from search:", selectedCoordinates);

        setSelectedCoordinate(selectedCoordinates);
      } else {
        Alert.alert("Location not found", "Please try another location.");
        setSelectedCoordinate(null);
      }
    } catch (error) {
      console.error("Error fetching coordinates from location name:", error);
      setSelectedCoordinate(null);
    }
  };

  const handleChange = (text) => {
    setLocationInWords(text);
    setTimeout(() => {
      handleSearchLocation(text);
    }, 2000);
  };

  const onConfirmLocation = () => {
    if (!postData?.pickup || !postData?.drop) {
      alert("Please Select Locations");
      return;
    }
    setIsmodelvisible(false);
    setIstimevisible(true);
  };
  console.log(istimevisible)
  const showDatePicker = () => {
    // setDatePickerMode(type);
    setDatePickerVisibility(true);
    setIstimevisible(false);
  };

  const handleConfirm = (res) => {
    setDatePickerVisibility(false);
    setIstimevisible(true);
    let date = new Date(res);
    let d =
      eval(date?.getMonth() + 1) +
      "-" +
      date?.getDate() +
      "-" +
      date?.getFullYear();
    // let time = date?.getHours() + ":" + date?.getMinutes();
    let time = getTimeOnly(date);
    setFullDate(d + "  " + time + " UTC");
    setPostData({ ...postData, date });
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
          // onBtnPress={() => props?.navigation?.navigate("Request")}
          onPress={() => setIsmodelvisible(true)}
          onBtnPress={() => setIsmodelvisible(true)}
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
          OnModelpress={() => setIssidemodelvisible(false)}
          setIssidemodelvisible={setIssidemodelvisible}
          onBackPress={() => setIssidemodelvisible(false)}
          navigation={props?.navigation}
          userDetails={props?.get_user_details}
        />
      )}

      {istimevisible && (
        <Selecttimemodel
          onclosepress={() => setIstimevisible(false)}
          onConfirmPress={() => {
            setIstimevisible(false);
            props?.navigation?.navigate("Addcar", postData);
          }}
          showDatePicker={showDatePicker}
          fulldate={fulldate}
        />
      )}
      {isDatePickerVisible && (
        <Pressable
          onPress={() => {
            setDatePickerVisibility(false);
            setIstimevisible(true);
          }}
          style={styles.pickerLayer}
        ></Pressable>
      )}
      {isDatePickerVisible && (
        <View style={styles.datePickerModal}>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            // mode={datePickerMode}
            mode={"datetime"}
            onConfirm={(date) => handleConfirm(date)}
            onCancel={() => setDatePickerVisibility(!isDatePickerVisible)}
            isDarkModeEnabled={true}
          // onSelectedChange={() => console.log("hello")}
          // onCancel={hideDatePicker}
          />
        </View>
      )}
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
  get_user_details: state.main.get_user_details,
  get_all_journeys: state.main.get_all_journeys,
});
export default connect(mapStateToProps, {})(Home);
