import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";
import { dark, light } from "../../scheme";

//Styles Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: getPercent(5, width),
      marginVertical: 10,
    },
    imagebody: {
      height: getPercent(6, height),
      width: getPercent(6, height),
      overflow: "hidden",
      borderRadius: 100,
      marginRight: 10,
    },
    msgbody: {
      paddingHorizontal: 10,
      paddingVertical: 5,
      justifyContent: "center",
      backgroundColor: "#E8E8E8",
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      borderBottomLeftRadius: 10,
      maxWidth: getPercent(80, width),
    },
    msgtext: {
      fontFamily: "Regular",
      fontSize: rf(13),
      color: light?.standardtext,
      marginBottom: 5,
    },
    timetext: {
      fontFamily: "Regular",
      fontSize: rf(11),
      color: light?.fieldbody,
      textAlign: "left",
    },
  });
