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
    framewrapper: {
      flex: 0.5,
      justifyContent: "flex-end",
      width: getPercent(90, width),
      alignSelf: "center",
    },
    textwrapper: {
      flex: 0.1,
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
    },
    anywheretext: {
      fontFamily: "Medium",
      fontSize: rf(22),
      color: light.standardtext,
    },
    selltext: {
      fontFamily: "Medium",
      fontSize: rf(13),
      color: light.fieldtext,
      textAlign: "center",
    },
    btnwrapper: {
      flex: 0.4,
      justifyContent: "flex-end",
      alignItems: "center",
      alignSelf: "center",
      marginBottom: getPercent(3, height),
    },
    customStyles: {
      height: getPercent(7, height),
      width: getPercent(90, width),
    },
    custom: {
      backgroundColor: light?.background,
      borderColor: light?.btnbody,
      borderWidth: 1,
      marginTop: 15,
    },
  });
