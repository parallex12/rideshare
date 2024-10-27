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
    daytextwrapper: {
      paddingLeft: getPercent(5, width),
      height: getPercent(8, height),
      justifyContent: "center",
    },
    daytext: {
      fontFamily: "SemiBold",
      fontSize: rf(13),
      color: light?.LableText,
    },
    contentwrapper: {
      paddingLeft: getPercent(8, width),
      justifyContent: "center",
      marginVertical: 5,
    },
    paymenttext: {
      fontFamily: "SemiBold",
      fontSize: rf(16),
      color: light?.LableText,
    },
    timetext: {
      fontFamily: "Regular",
      fontSize: rf(12),
      color: light?.fieldtext,
    },
  });
