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
    headerbody: {
      height: getPercent(8, height),
      justifyContent: "flex-end",
      alignItems: "center",
      width: getPercent(100, width),
    },
    heading: {
      fontFamily: "Medium",
      fontSize: rf(18),
      color: light?.LableText,
    },
  });
