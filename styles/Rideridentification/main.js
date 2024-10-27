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
    textwrapper: {
      paddingLeft: getPercent(5, width),
    },
    textstyles: {
      fontFamily: "Medium",
      fontSize: rf(18),
      color: light?.lable,
      textAlign: "center",
    },
    lable: {
      fontFamily: "Medium",
      fontSize: rf(14),
      color: light?.standardtext,
    },
    contenttext: {
      fontFamily: "Regular",
      fontSize: rf(11),
      color: "#718093",
    },
    framebody: {
      height: getPercent(25, height),
      width: getPercent(25, height),
      alignSelf: "center",
      marginVertical: getPercent(5, height),
    },
    instructionwrapper: {
      paddingHorizontal: getPercent(5, width),
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 10,
    },
    instructionstext: {
      fontFamily: "Medium",
      fontSize: rf(12),
      color: light?.standardtext,
      marginLeft: 10,
    },
    btnwrapper: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });
