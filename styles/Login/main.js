import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";
import { light } from "../../scheme";

//Styles Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: light?.background,
    },
    signupwrapper: {
      height: getPercent(8, height),
      width: getPercent(100, width),
      justifyContent: "center",
      alignItems: "center",
    },
    signuptext: {
      fontFamily: "Medium",
      fontSize: rf(22),
      color: light?.LableText,
    },
    fieldwrapper: {
      height: getPercent(35, height),
      justifyContent: "center",
    },
    forgottext: {
      fontFamily: "Medium",
      fontSize: rf(14),
      color: light?.standardtext,
      textAlign: "right",
      paddingRight: getPercent(5, width),
    },
    termswrapper: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: getPercent(5, width),
      width: getPercent(90, width)
    },
    checkBox: {
      height: getPercent(2, height),
      width: getPercent(2, height),
      borderRadius: 100,
      borderWidth: 1,
      borderColor: light?.btnbody,
      alignItems: "center",
      justifyContent: "center"
    },
    signinguptext: {
      fontFamily: "Medium",
      fontSize: rf(11),
      color: light?.LableText,
      marginLeft: 10,
    },
    btnwrapper: {
      alignSelf: "center",
      marginVertical: getPercent(3, height),
    },
    alreadytext: {
      fontFamily: "Medium",
      fontSize: rf(14),
      color: light?.standardtext,
    },
    signup: {
      fontFamily: "Medium",
      fontSize: rf(14),
      color: light?.btnbody,
    },
    alreadywrapper: {
      alignItems: "center",
    },
    orsigninwith: {
      fontFamily: "Regular",
      fontSize: rf(12),
      color: "#3E4968",
      textAlign: "center",
    },
    socialbuttnwrapper: {
      justifyContent: "space-around",
      height: getPercent(20, height),
    },
    iconwrapper: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      width: getPercent(60, width),
      alignSelf: "center",
    },
    iconbody: {
      height: getPercent(5, height),
      width: getPercent(5, height),
      overflow: "hidden",
    },
  });
