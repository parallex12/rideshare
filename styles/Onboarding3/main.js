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
      flexDirection: "row",
      justifyContent: "space-around",
    },

    framebody: {
      height: getPercent(25, height),
      backgroundColor: light?.vectorbody,
      width: getPercent(40, width),
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
    },
    textwrapper: {
      flex: 0.2,
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
    },
    anywheretext: {
      fontFamily: "Medium",
      fontSize: rf(22),
      color: light.standardtext,
    },

    btnwrapper: {
      flex: 0.3,
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
    },
    btnbody: {
      height: getPercent(10, height),
      width: getPercent(10, height),
      overflow: "hidden",
      borderRadius: 100,
    },
  });
