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
    framewrapper: {
      flex: 0.4,
      justifyContent: "flex-end",
    },
    skipbtnbody: {
      alignSelf: "flex-end",
      paddingRight: getPercent(5, width),
      height: getPercent(10, height),
      justifyContent: "center",
    },
    skiptext: {
      fontFamily: "Regular",
      fontSize: rf(14),
      color: light.standardtext,
    },
    framebody: {
      height: getPercent(30, height),
      width: getPercent(90, width),
      overflow: "hidden",
      alignSelf: "center",
    },
    textwrapper: {
      flex: 0.3,
      width: getPercent(80, width),
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
    },
    anywheretext: {
      fontFamily: "Medium",
      fontSize: rf(22),
      color: light.standardtext,
    },
    selltext: {
      fontFamily: "Medium",
      fontSize: rf(13),
      color: light.fieldtext,
      textAlign: "center",
    },
    btnwrapper: {
      flex: 0.3,
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
    },
    btnbody: {
      height: getPercent(10, height),
      width: getPercent(10, height),
      overflow: "hidden",
      borderRadius: 100,
    },
  });
