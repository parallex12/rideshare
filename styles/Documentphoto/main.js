import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";
import { light } from "../../scheme";

//Styles Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#000000",
    },
    btnwrapper: {
      flex: 1,
      bottom: getPercent(5, height),
      justifyContent: "flex-end",
      alignSelf: "center",
      zIndex: 10,
    },
    loader: {
      position: "absolute",
      height: getPercent(100, height),
      width: getPercent(100, width),
      backgroundColor: "#000",
      opacity: 0.7,
      zIndex: 11,
      justifyContent: "center",
      alignItems: "center",
    },
  });
