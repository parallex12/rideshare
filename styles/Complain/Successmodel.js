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
      padding: 10,
      backgroundColor: light?.background,
      position: "absolute",
      top: getPercent(30, height),
      alignSelf: "center",
      alignItems: "center",
      justifyContent: "space-around",
    },
    framebody: {
      height: getPercent(10, height),
      width: getPercent(10, height),
      overflow: "hidden",
    },
    labletext: {
      fontFamily: "Medium",
      fontSize: rf(16),
      color: light?.labletext,
    },
    Complaintext: {
      fontFamily: "Regular",
      fontSize: rf(12),
      color: light?.fieldtext,
    },
    textbody: {
      alignItems: "center",
    },
  });
