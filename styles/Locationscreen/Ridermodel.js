import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";
import { light } from "../../scheme";

//Styles Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      minHeight: getPercent(50, height),
      width: getPercent(100, width),
      alignSelf: "center",
      position: "absolute",
      bottom: 0,
      borderTopRightRadius: 20,
      justifyContent: "space-around",
      borderTopLeftRadius: 20,
      backgroundColor: light?.background,
      padding: 10,
    },

    actionBtn: {
      position: "absolute",
      backgroundColor: light?.btnbody,
      width: getPercent(22, width),
      alignSelf: "center",
      top: getPercent(2, height),
      padding: getPercent(0.7, height),
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
    },

    actionBtnTxt: {
      color: light?.background,
      fontFamily: "Regular",
    },
    closeiconbody: {
      alignSelf: "flex-end",
    },
    paymentWrapper: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 10,
      justifyContent: "space-between",
    },
    recenttext: {
      fontFamily: "Medium",
      fontSize: rf(14),
      color: light?.standardtext,
    },
    recentbody: {
      flexDirection: "row",
      alignItems: "center",
      height: getPercent(8, height),
      width: getPercent(90, width),
      borderWidth: 1,
      borderColor: light.btnbody,
      borderRadius: 10,
      alignSelf: "center",
      paddingHorizontal: 10,
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

    price: {
      fontFamily: "Medium",
      fontSize: rf(16),
      color: light?.standardtext,
    },
    btnwrappr: {
      alignItems: "center",
    },
    cardpicturebody: {
      height: getPercent(5, height),
      width: getPercent(8, width),
      overflow: "hidden",
    },
    profilepic: {
      height: getPercent(6, height),
      width: getPercent(6, height),
      overflow: "hidden",
      borderRadius: 100,
    },
    carpic: {
      height: getPercent(6, height),
      width: getPercent(12, height),
      overflow: "hidden",
      borderRadius: 10,
    },
    userdetailswrapper: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginVertical: 10,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: light?.fieldtext,
      paddingVertical: 10,
    },
    nametext: {
      fontFamily: "Medium",
      fontSize: rf(13),
      color: light?.standardtext,
    },
    meterstext: {
      fontFamily: "Medium",
      fontSize: rf(9),
      color: light?.fieldtext,
      marginLeft: 5,
    },
  });
