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
    fieldbody: {
      height: getPercent(6.5, height),
      width: getPercent(90, width),
      alignSelf: "center",
      borderRadius: 5,
      borderWidth: 1,
      borderColor: light?.fieldbody,
      justifyContent: "center",
      paddingHorizontal: 10,
      marginVertical: 10,
    },
    text: {
      fontFamily: "Medium",
      fontSize: rf(13),
      color: light?.fieldtext,
    },
    fieldwrapper: {
      paddingHorizontal: getPercent(5, width),
    },
    labletext: {
      fontFamily: "Medium",
      fontSize: rf(15),
      color: light?.standardtext,
    },
    profilepicwrapper: {
      height: getPercent(25, height),
      width: getPercent(100, width),
      justifyContent: "space-around",
      alignItems: "center",
    },
    framewrapper: {
      height: getPercent(13, height),
      width: getPercent(13, height),
      overflow: "hidden",
      borderRadius: 100,
    },
    headertext: {
      fontFamily: "Medium",
      fontSize: rf(18),
      color: light?.standardtext,
    },
    uploadiconbody: {
      height: getPercent(4.5, height),
      width: getPercent(4.5, height),
      overflow: "hidden",
      justifyContent: "center",
      backgroundColor: "#E4BD8A",
      alignItems: "center",
      position: "absolute",
      top: getPercent(16, height),
      right: getPercent(37, width),
      borderRadius: 100,
    },
    buttonWrapper: {
      height: getPercent(10, height),
      width: getPercent(100, width),
      alignItems: "center",
      paddingBottom: getPercent(2, height),
      justifyContent: "flex-end",
    },
  });
