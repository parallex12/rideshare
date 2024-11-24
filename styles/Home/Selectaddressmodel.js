import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";
import { light } from "../../scheme";

//Styles Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    wrapper: {
      height: getPercent(100, height),
      width: getPercent(100, width),
      alignSelf: "center",
      position: "absolute",
      backgroundColor: "#000",
      zIndex: 99,
      justifyContent: "Flex-end",
    },
    container: {
      height: getPercent(60, height),
      width: getPercent(100, width),
      alignSelf: "center",
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      backgroundColor: light?.background,
      padding: 10,
    },
    closeiconbody: {
      alignSelf: "flex-end",
    },
    selecttext: {
      fontFamily: "Medium",
      fontSize: rf(18),
      color: light?.standardtext,
      textAlign: "center",
    },
    pickuplocationbody: {
      height: getPercent(6.5, height),
      width: getPercent(90, width),
      borderColor: light?.fieldbody,
      borderRadius: 5,
      borderWidth: 1,
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 10,
      marginVertical: 5,
      alignSelf: "center",
    },
    inputstyles: {
      // height: "100%",
      justifyContent: "center",
      fontFamily: "Medium",
      fontSize: rf(12),
      color: light?.standardtext,
      // width: "100%",
      paddingLeft: 10,
    },

    recenttext: {
      fontFamily: "Medium",
      fontSize: rf(14),
      color: light?.standardtext,
      marginTop: 10,

    },
    recentbody: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 5,
    },
    textbody: {
      flex: 1,
      paddingLeft: 10,
    },
    recentlocationstext: {
      fontFamily: "Medium",
      fontSize: rf(14),
      color: light?.standardtext,

    },
    recentaddresstext: {
      fontFamily: "Regular",
      fontSize: rf(11),
      color: light?.fieldtext,

    },
    kmtext: {
      fontFamily: "Regular",
      fontSize: rf(11),
      color: light?.standardtext,

    },
    btnwrappr: {
      alignItems: "center",
      marginTop: 10,
    },
  });
