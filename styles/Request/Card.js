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
      justifyContent: "space-around",
    },
    userdetailswrapper: {
      flexDirection: "row",
      alignItems: "center",
    },

    btnbody: {
      height: getPercent(6, height),
      width: getPercent(35, width),
      borderRadius: 10,
      backgroundColor: light?.btnbody,
      justifyContent: "center",
      alignItems: "center",
    },
    cancelbtn: {
      height: getPercent(6, height),
      width: getPercent(35, width),
      borderRadius: 10,
      borderColor: light?.btnbody,
      borderWidth: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    btntext: {
      fontFamily: "Medium",
      fontSize: rf(14),
      color: light?.BtnText,
    },
    picbody: {
      height: getPercent(5, height),
      width: getPercent(5, height),
      borderRadius: 100,
      overflow: "hidden",
      alignSelf: "center",
    },
    namewrapper: {
      flex: 1,
      paddingLeft: 10,
    },
    nametext: {
      fontFamily: "Medium",
      fontSize: rf(13),
      color: light?.standardtext,
    },
    meters: {
      fontFamily: "Regular",
      fontSize: rf(11),
      color: light?.standardtext,
    },
    btnwrapper: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
  });
