import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";
import { light } from "../../scheme";

//Styles Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      height: getPercent(40, height),
      width: getPercent(90, width),
      borderRadius: 10,
      position: "absolute",
      top: getPercent(30, height),
      backgroundColor: light?.background,
      alignSelf: "center",
      padding: 10,
      alignItems: "center",
      justifyContent: "space-around",
    },
    closeicon: {
      alignSelf: "flex-end",
    },
    pricetext: {
      fontFamily: "SemiBold",
      fontSize: rf(24),
      color: light.standardtext,
      textAlign: "center",
    },
    successpicwrapper: {
      height: getPercent(13, height),
      width: getPercent(13, height),
      overflow: "hidden",
    },
    pyamenttext: {
      fontFamily: "Medium",
      fontSize: rf(16),
      color: light.standardtext,
      textAlign: "center",
    },
    yourmoneytext: {
      fontFamily: "Regular",
      fontSize: rf(11),
      color: light.fieldtext,
      textAlign: "center",
    },
  });
