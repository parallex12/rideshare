import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";
import { light } from "../../scheme";

//Styles Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      height: getPercent(20, height),
      width: getPercent(90, width),
      borderRadius: 10,
      borderWidth: 1,
      borderColor: light?.btnbody,
      alignSelf: "center",
      marginVertical: 5,
      padding: 10,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    carnamedetailswrapper: {
      justifyContent: "space-between",
    },
    nametext: {
      fontFamily: "Medium",
      fontSize: rf(13),
      color: light?.standardtext,
    },
    automatictext: {
      fontFamily: "Regular",
      fontSize: rf(11),
      color: light?.fieldtext,
    },
    timebody: {
      flexDirection: "row",
      alignItems: "center",
    },
    meterstext: {
      fontFamily: "Regular",
      fontSize: rf(11),
      color: light?.standardtext,
      marginLeft: 5,
    },
    btnwrapper: {
      justifyContent: "space-between",
    },
    imagebody: {
      height: getPercent(9, height),
      width: getPercent(12, height),
      overflow: "hidden",
      alignSelf: "center",
    },
    btnbody: {
      height: getPercent(6, height),
      width: getPercent(30, width),
      borderRadius: 10,
      backgroundColor: light?.btnbody,
      justifyContent: "center",
      alignItems: "center",
    },
    btntext: {
      fontFamily: "Medium",
      fontSize: rf(14),
      color: light?.BtnText,
    },
  });
