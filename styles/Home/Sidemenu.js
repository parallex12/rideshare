import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";
import { light } from "../../scheme";

//Styles Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      height: getPercent(100, height),
      width: getPercent(65, width),
      position: "absolute",
      left: 0,
      borderTopRightRadius: 50,
      borderBottomRightRadius: 50,
      backgroundColor: light?.background,
      padding: 10,
    },
    backiconwrapper: {
      flexDirection: "row",
      alignItems: "center",
    },
    backtext: {
      fontFamily: "Regular",
      fontSize: rf(14),
      color: light?.LableText,
    },
    profilewrapper: {
      height: getPercent(25, height),
      justifyContent: "space-around",
      marginVertical: 5,
    },
    framebody: {
      height: getPercent(7, height),
      width: getPercent(7, height),
      overflow: "hidden",
      borderRadius: 100,
      borderWidth: 1,
      borderColor: "#08B783",
    },
    nametext: {
      fontFamily: "Medium",
      fontSize: rf(15),
      color: light?.LableText,
    },
    emailtext: {
      fontFamily: "Medium",
      fontSize: rf(11),
      color: light?.LableText,
    },
    optionswrapper: {
      flexDirection: "row",
      alignItems: "center",
      height: getPercent(7, height),
      borderBottomWidth: 1,
      borderColor: "#E8E8E8",
    },
    optionstext: {
      fontFamily: "Regular",
      fontSize: rf(12),
      color: light?.standardtext,
      marginLeft: 10,
    },
    iconbody: {
      height: 20,
      width: 20,
      overflow: "hidden",
    },
  });
