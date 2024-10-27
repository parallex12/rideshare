import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";
import { light } from "../../scheme";

//Styles Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    wrapper: {
      height: getPercent(80, height),
      width: getPercent(90, width),
      overflow: "hidden",
      // position: "absolute",
      top: getPercent(4, height),
      alignSelf: "center",
      borderRadius: 5,
    },
    camera: {
      height: getPercent(60, height),
      width: getPercent(90, width),
      marginBottom: getPercent(2, height),
    },
  });
