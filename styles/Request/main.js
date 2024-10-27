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

    loader: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: getPercent(2, height),
    },
    errorTxtWrapper: {
      alignItems: "center",
      marginTop: getPercent(2, height),
    },
    errorTxt: {
      fontFamily: "Regular",
      fontSize: rf(14),
    },
  });
