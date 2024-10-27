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
      // height: getPercent(40, height),
      justifyContent: "center",
    },
    termswrapper: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: getPercent(5, width),
    },
    signinguptext: {
      fontFamily: "Medium",
      fontSize: rf(11),
      color: light?.fieldtext,
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
  });
