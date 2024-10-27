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
    wrapper: {
      height: getPercent(12, height),
      justifyContent: "center",
    },
    enterphonenumbertext: {
      fontFamily: "Medium",
      fontSize: rf(22),
      color: light?.standardtext,
      textAlign: "center",
    },
    enterotp: {
      fontFamily: "Regular",
      fontSize: rf(15),
      color: light?.secondarytext,
      textAlign: "center",
    },
    recievecodetext: {
      fontFamily: "Medium",
      fontSize: rf(15),
      color: light?.standardtext,
      textAlign: "center",
      marginTop: 10,
    },
    btnwrapper: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
      marginBottom: getPercent(5, height),
    },
  });
