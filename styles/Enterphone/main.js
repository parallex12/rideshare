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
    enterphonenumbertext: {
      fontFamily: "Medium",
      fontSize: rf(22),
      color: light?.standardtext,
      paddingHorizontal: getPercent(5, width),
      textAlign: "center",
    },
    enterphonenumberwrapper: {
      justifyContent: "center",
      alignItems: "center",
      height: getPercent(10, height),
    },
    customstyles: {
      height: getPercent(6.5, height),
      width: getPercent(90, width),
      alignSelf: "center",
      borderRadius: 5,
      borderWidth: 1,
      borderColor: light?.fieldbody,

      alignItems: "center",
      marginVertical: 10,
      overflow: "hidden",
      flexDirection: "row",
      paddingHorizontal: 10,
    },
    code: {
      fontFamily: "Regular",
      fontSize: rf(10),
      color: light?.standardtext,
      marginLeft: 5,
    },
    inputstyles: {
      width: "80%",
      paddingLeft: 10,
    },
    iconbody: {
      height: "100%",
      justifyContent: "center",
      overflow: "hidden",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
    },
    field: {
      fontFamily: "Regular",
      fontSize: rf(10),
      color: light?.standardtext,
    },
    btnwrapper: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });
