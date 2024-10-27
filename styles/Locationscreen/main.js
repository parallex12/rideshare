import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";

//Styles Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    mapwrapper: {
      height: getPercent(100, height),
      width: getPercent(100, width),
    },
    map: {
      height: getPercent(100, height),
      width: getPercent(100, width),
    },
    emergencyBtnWrap: {
      height: getPercent(6, height),
      width: getPercent(6, height),
      backgroundColor: "red",
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      zIndex: 2,
      right: getPercent(2, width),
      top: getPercent(40, height),
    },
  });
