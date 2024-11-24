import { useEffect, useState } from "react";
import {
  Text,
  View,
  useWindowDimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../../styles/Home/Selectaddressmodel";
import { AntDesign } from "@expo/vector-icons";
import { light } from "../../../scheme";
import Globalicons from "../../../globalComponents/Globalicons";
import StandardButton from "../../../globalComponents/StandardButton";
import * as Location from "expo-location";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const Selectaddressmodel = (props) => {
  let {
    onPress,
    onclosepress,
    onBtnPress,
    setChoosePickup,
    postData,
    handleChange,
    setChooseDrop,
  } = props;

  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedLocationWords, setSelectedLocationWords] = useState("");
  const [city, setCity] = useState(null);

  let recent = [
    {
      icon: require("../../../assets/icons/11.png"),
      lable: "Office",
      address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
      km: "2.7 km",
    },
    {
      icon: require("../../../assets/icons/11.png"),
      lable: "Office",
      address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
      km: "2.7 km",
    },
  ];

  const reverseLocation = async (res) => {
    const reversedLocation = await Location.reverseGeocodeAsync(res);
    setSelectedLocationWords(reversedLocation);
    setCity(reversedLocation[0]?.city);
    setSelectedLocation(res);
  };

  return (
    <Modal transparent animationType="slide">
      <View style={{ flex: 1, backgroundColor: "#00000aaa" }}></View>
      <View style={styles.container}>
        <TouchableOpacity onPress={onclosepress} style={styles.closeiconbody}>
          <AntDesign name="close" size={20} color={light?.standardtext} />
        </TouchableOpacity>
        <Text style={styles.selecttext}>Select address</Text>
        <TouchableOpacity onPress={() => setChoosePickup(true)} style={styles.pickuplocationbody}>
          <Globalicons
            // onPress={() => setChoosePickup(true)}
            image={require("../../../assets/icons/pick.png")}
          />
          <TextInput
            placeholder={postData?.pickup || "From"}
            placeholderTextColor={light?.fieldbody}

            multiline={false}
            // value={postData?.pickup}
            editable={false}

          // onChangeText={(val) => handleChange(val)}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setChooseDrop(true)} style={styles.pickuplocationbody}>
          <Globalicons
            image={require("../../../assets/icons/drop.png")}
          />

          <TextInput
            placeholder={postData?.drop || "To"}
            placeholderTextColor={light?.fieldbody}
            multiline={false}
            // value={postData?.drop}
            editable={false}

          // onChangeText={(val) => handleChange(val)}
          />

        </TouchableOpacity>
        <Text style={styles.recenttext}>Recent Search</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {recent?.map((item, index) => {
            return (
              <View key={index} style={styles.recentbody}>
                <Globalicons image={item?.icon} />
                <View style={styles.textbody}>
                  <Text style={styles.recentlocationstext}>{item?.lable}</Text>
                  <Text style={styles.recentaddresstext}>{item?.address}</Text>
                </View>
                <Text style={styles.kmtext}>{item?.km}</Text>
              </View>
            );
          })}
          <View style={styles.btnwrappr}>
            <StandardButton onPress={onBtnPress} title={"Confirm Location"} />
          </View>
        </ScrollView>
      </View>
    </Modal >
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Selectaddressmodel);
