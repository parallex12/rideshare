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
import * as ImagePicker from "expo-image-picker";

import { styles as _styles } from "../../styles/Addcar/main";
import Notificationsheader from "../Notifications/components/Notificationsheader";
import Cardetailspicker from "./components/Cardetailspicker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import StandardButton from "../../globalComponents/StandardButton";
import { carsData, firebaseImageUpload } from "../../middleware";
import { Quikify } from "quikify";
import { ActivityIndicator } from "react-native";
import { GET_USER_DETAILS } from "../../state-management/types/types";

const Addcar = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });
  let postData = props?.route?.params;

  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [carDetails, setCarDetails] = useState({
    make: "",
    model: "",
    year: "",
    assembly: "",
    variant: "",
    type: "",
    transmission: "",
    engineCapacity: "",
    engineType: "",
    color: "",
    seatingCapacity: "",
    registrationCity: "",
    carImage: "",
  });

  const handleChange = (key, val) => {
    setCarDetails((prev) => ({ ...prev, [key]: val }));
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.photo,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      handleChange("carImage", result.assets[0].uri);
    }
  };

  const onSubmit = async () => {
    // isNullish;
    const isFilled = Object.values(carDetails).every((v) => v !== "");
    if (!isFilled) {
      alert("Fill all Details");
      return;
    }
    const data = {
      ...postData,
      status: "available",
      created_by: props?.get_user_details?.id,
    };
    setLoading(true);
    await firebaseImageUpload(carDetails?.carImage).then((res) => {
      Quikify.create(`/journey`, {
        ...data,
        carDetails: { ...carDetails, carImage: res?.url },
        riderDetails: {
          id: props?.get_user_details?.id,
          name: props?.get_user_details?.name,
          profile: props?.get_user_details?.profile,
        },
      })
        .then((response) => {
          Quikify.get("/users", GET_USER_DETAILS)
            .then((res) => {
              props?.navigation?.navigate("Riderhome");
              setLoading(false);
            })
            .catch((e) => {
              console.log("errorUpdate", e);
              alert("Something Went Wrong");
              setLoading(false);
            });
        })
        .catch((error) => {
          console.error("GET Error:", error);
          alert("Something Went Wrong");
          setLoading(false);
        });
    });
  };

  return (
    <View style={styles.container}>
      <Notificationsheader title={"Add Car"} navigation={props?.navigation} />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profilepicwrapper}>
          <View style={styles.framewrapper}>
            {image ? (
              <Image
                source={{ uri: image }}
                style={{ height: "100%", width: "100%" }}
                resizeMode="contain"
              />
            ) : null}
          </View>
          <TouchableOpacity onPress={pickImage} style={styles.uploadiconbody}>
            <Image
              source={require("../../assets/icons/edit.png")}
              style={{ height: "50%", width: "50%" }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.pickerwrapper}>
          <Cardetailspicker
            title={"Car Make"}
            options={carsData?.make}
            onChange={(val) => handleChange("make", val)}
          />
          <Cardetailspicker
            title={"Car Model"}
            onChange={(val) => handleChange("model", val)}
            options={carsData?.model}
          />
          <Cardetailspicker
            title={"Transport Type"}
            onChange={(val) => handleChange("transportType", val)}
            options={carsData?.transportType}
          />
          <Cardetailspicker
            title={"Model year"}
            onChange={(val) => handleChange("year", val)}
          />
          <Cardetailspicker
            title={"Car Assembly"}
            onChange={(val) => handleChange("assembly", val)}
          />
          <Cardetailspicker
            title={"Car Variant"}
            options={carsData.variant}
            onChange={(val) => handleChange("variant", val)}
          />
          <Cardetailspicker
            title={"Car Type"}
            options={carsData.type}
            onChange={(val) => handleChange("type", val)}
          />
          <Cardetailspicker
            title={"Car Transmission"}
            onChange={(val) => handleChange("transmission", val)}
            options={carsData.transmission}
          />
          <Cardetailspicker
            title={"Engine Capacity"}
            onChange={(val) => handleChange("engineCapacity", val)}
          />
          <Cardetailspicker
            title={"Engine Type"}
            onChange={(val) => handleChange("engineType", val)}
          />

          <Cardetailspicker
            title={"Body Color"}
            onChange={(val) => handleChange("color", val)}
          />
          <Cardetailspicker
            title={"Seating Capacity"}
            options={carsData.seatingCapacity}
            onChange={(val) => handleChange("seatingCapacity", val)}
          />
          <Cardetailspicker
            title={"Registration City"}
            onChange={(val) => handleChange("registrationCity", val)}
          />
          {/* <Cardetailspicker title={"Pickup City"} /> */}
        </View>
        <View style={styles.buttonWrapper}>
          <StandardButton
            disabled={loading}
            title={
              loading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                "Submit"
              )
            }
            onPress={onSubmit}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.Addcar,
  get_user_details: state.main.get_user_details,
});
export default connect(mapStateToProps, {})(Addcar);
