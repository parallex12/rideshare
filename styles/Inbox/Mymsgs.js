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
      alignSelf: "center",
      paddingBottom: 15,
      marginVertical: 10,
      borderColor: light?.standardtext,
      width: getPercent(90, width),
    },
    imagebody: {
      height: getPercent(6, height),
      width: getPercent(6, height),
      overflow: "hidden",
      borderRadius: 100,
    },
    namewrapper: {
      flex: 1,
      paddingHorizontal: 10,
    },
    nametext: {
      fontFamily: "Medium",
      fontSize: rf(14),
      color: light?.LableText,
    },
    chatmsg: {
      fontFamily: "Regular",
      fontSize: rf(11),
      color: light.standardtext,
    },
    time: {
      fontFamily: "Regular",
      fontSize: rf(11),
      color: light.btnbody,
    },
  });
