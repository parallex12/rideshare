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
      marginVertical: getPercent(1, height),
      justifyContent: "center",
    },
    daytext: {
      fontFamily: "SemiBold",
      fontSize: rf(13),
      color: light?.LableText,
    },
    contentwrapper: {
      padding: getPercent(2, width),
      justifyContent: "center",
      marginVertical: 5,
      backgroundColor: "#FFFBF5",
      width: getPercent(90, width),
      alignSelf: "center",
      borderRadius: 8
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
