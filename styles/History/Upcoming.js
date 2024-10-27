import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";
import { light } from "../../scheme";

//Styles Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      paddingVertical: getPercent(1, height),
      // height: getPercent(9, height),
      width: getPercent(90, width),
      borderWidth: 1,
      borderColor: light?.btnbody,
      borderRadius: 10,
      alignSelf: "center",
      flexDirection: "row",
      paddingHorizontal: 10,
      justifyContent: "space-between",
      marginVertical: 5,
    },
    namewrapper: {
      flex: 1,
    },
    nametext: {
      fontFamily: "SemiBold",
      fontSize: rf(12),
      color: light?.standardtext,
    },
    detailsTxt: {
      fontFamily: "Regular",
      fontSize: rf(12),
      color: light?.standardtext,
    },
    mustandtext: {
      fontFamily: "SemiBold",
      fontSize: rf(12),
      color: light?.fieldtext,
    },
    sideWrapper: {
      justifyContent: "space-between",
    },
    timetext: {
      fontFamily: "SemiBold",
      fontSize: rf(12),
      color: light?.standardtext,
    },
    smallBtn: {
      padding: getPercent(0.5, height),
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: light.btnbody,
      borderRadius: 5,
    },
    btnTxt: {
      fontFamily: "SemiBold",
      fontSize: rf(12),
      color: light?.BtnText,
    },
  });
