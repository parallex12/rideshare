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
    profilepicwrapper: {
      height: getPercent(15, height),
      width: getPercent(100, width),
      justifyContent: "space-around",
      alignItems: "center",
    },
    framewrapper: {
      height: getPercent(10, height),
      width: getPercent(15, height),
      overflow: "hidden",
      borderRadius: 10,
      borderWidth: 1,
      borderColor: light?.btnbody,
    },

    uploadiconbody: {
      height: getPercent(4, height),
      width: getPercent(4, height),
      overflow: "hidden",
      justifyContent: "center",
      backgroundColor: "#E4BD8A",
      alignItems: "center",
      position: "absolute",
      top: getPercent(9, height),
      right: getPercent(35, width),
      borderRadius: 10,
    },
    pickerwrapper: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      marginTop: getPercent(3, height),
      marginBottom: getPercent(5, height),
    },
    buttonWrapper: {
      alignSelf: "center",
      flex: 1,
      marginBottom: getPercent(5, height),
    },
  });
