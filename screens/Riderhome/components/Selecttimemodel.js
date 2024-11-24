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

const selecttitmemodel = (props) => {
  let {
    onPress,
    onclosepress,
    onConfirmPress,
    setIstimevisible,
    showDatePicker,
    fulldate,
  } = props;

  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  let recent = [
    {
      icon: require("../../../assets/icons/15.png"),
      lable: "5:00",
      km: "PM",
    },
    {
      icon: require("../../../assets/icons/15.png"),
      lable: "5:00",
      km: "PM",
    },
    {
      icon: require("../../../assets/icons/15.png"),
      lable: "5:00",
      km: "PM",
    },
    {
      icon: require("../../../assets/icons/15.png"),
      lable: "5:00",
      km: "PM",
    },
  ];

  return (
    <View style={styles.wrapper} >
      <TouchableOpacity style={{ flex: 1, backgroundColor: "#00000aaa" }}></TouchableOpacity>
      <View style={styles.container}>
        <TouchableOpacity onPress={onclosepress} style={styles.closeiconbody}>
          <AntDesign name="close" size={20} color={light?.standardtext} />
        </TouchableOpacity>
        <Text style={styles.selecttext}>Select time</Text>
        <TouchableOpacity onPress={() => showDatePicker()} style={styles.pickuplocationbody}>
          <Globalicons

            image={require("../../../assets/icons/15.png")}
          />
          <Text style={styles.inputstyles}>{fulldate}</Text>
          {/* <TextInput
            placeholder="6:50"
            placeholderTextColor={light?.fieldbody}
            style={styles.inputstyles}
            multiline
          /> */}
        </TouchableOpacity>

        <Text style={styles.recenttext}>Related times</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {recent?.map((item, index) => {
            return (
              <View key={index} style={styles.recentbody}>
                <Globalicons image={item?.icon} />
                <View style={styles.textbody}>
                  <Text style={styles.recentlocationstext}>{item?.lable} {item?.km}</Text>
                </View>
              </View>
            );
          })}
          <View style={styles.btnwrappr}>
            <StandardButton onPress={onConfirmPress} title={"Confirm Time"} />
          </View>
        </ScrollView>
      </View></View >
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(selecttitmemodel);
