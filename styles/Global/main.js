import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";
import { light } from "../../scheme";

export const Bottommenustyles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: getPercent(5, width),
      height: getPercent(9, height),
      width: getPercent(90, width),
      borderRadius: 100,
      alignSelf: "center",
      flexDirection: "row",
      alignItems: "center",
      position: "absolute",
      zIndex: 9,
      justifyContent: "space-between",
      bottom: 15,
      backgroundColor: light?.btnbody,
      paddingHorizontal: getPercent(5, width),
    },
    iconbody: {
      height: getPercent(2.5, height),
      width: getPercent(2.5, height),
      overflow: "hidden",
    },
  });

export const Homeheaderstyles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: getPercent(5, width),
      height: getPercent(10, height),
      width: getPercent(100, width),
      flexDirection: "row",
      alignItems: "center",
      position: "absolute",
      zIndex: 9,
      justifyContent: "space-between",
    },
    menubaricon: {
      height: getPercent(4, height),
      width: getPercent(4, height),
      overflow: "hidden",
      borderRadius: 5,
    },
    bellicon: {
      height: getPercent(4, height),
      width: getPercent(4, height),
      overflow: "hidden",
      borderRadius: 5,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: light?.background,
    },
  });

export const Commonheaderstyles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: getPercent(5, width),
      height: getPercent(12, height),
      flexDirection: "row",
      alignItems: "center",
    },
    textbody: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    titletext: {
      fontFamily: "Medium",
      fontSize: rf(18),
      color: light?.LableText,
    },
  });

export const Gloabliconstyles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      height: getPercent(2.5, height),
      width: getPercent(2.5, height),
      overflow: "hidden",
    },
  });

export const Globalfieldsstyles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      height: getPercent(6.5, height),
      width: getPercent(90, width),
      alignSelf: "center",
      borderRadius: 5,
      borderWidth: 1,
      borderColor: light?.fieldbody,
      justifyContent: "center",
      paddingHorizontal: 10,
      marginVertical: 10,
    },
    inputstyles: {
      fontFamily: "Medium",
      fontSize: rf(14),
      color: light?.standardtext,
    },
  });

export const Globalheaderstyles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: getPercent(5, width),
      height: getPercent(10, height),
      justifyContent: "center",
    },
    backbtnbody: {
      flexDirection: "row",
      alignItems: "center",
    },
    backtext: {
      fontFamily: "Regular",
      fontSize: rf(14),
      color: light?.LableText,
    },
  });
export const Notificationsheaderstyles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: getPercent(5, width),
      height: getPercent(12, height),
      width: getPercent(100, width),
      flexDirection: "row",
      alignItems: "center",
    },
    backbtnbody: {
      flexDirection: "row",
      alignItems: "center",
    },
    backtext: {
      fontFamily: "Regular",
      fontSize: rf(12),
      color: light?.LableText,
    },
    title: {
      fontFamily: "Medium",
      fontSize: rf(18),
      color: light?.LableText,
    },
  });

//standardButton Styles starts here
export const standardButtonStyles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      height: getPercent(7, height),

      width: getPercent(90, width),
      backgroundColor: light.btnbody,
      borderRadius: 8,
      shadowColor: "#000",
      shadowOffset: {
        width: 5,
        height: 6,
      },
      shadowOpacity: 2,
      shadowRadius: 1,
      elevation: 6,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontSize: rf(15),
      fontFamily: "Medium",
      color: light.BtnText,
    },
  });

//loader Styles starts here
export const loaderStyles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      width: width,
      height: height,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fff",
      position: "absolute",
      left: 0,
      zIndex: 9999999,
      top: getPercent(20, height),
    },
  });
