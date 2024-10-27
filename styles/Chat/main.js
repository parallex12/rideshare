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
    typemsgwrapper: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: getPercent(5, width),
      marginBottom: 10,
      position: "absolute",
      bottom: 0,
    },
    iconbody: {
      height: getPercent(4, height),
      width: getPercent(4, height),
      overflow: "hidden",
      justifyContent: "center",
      alignItems: "center",
    },
    typemsgbody: {
      height: getPercent(6, height),
      width: getPercent(80, width),
      borderRadius: 10,
      borderColor: light?.fieldtext,
      borderWidth: 1,
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: light?.background,
      paddingHorizontal: 10,
      marginLeft: 5,
    },
    inputstyles: {
      width: "90%",
      fontFamily: "Regular",
      fontSize: rf(12),
      color: light?.BtnText,
    },
  });
