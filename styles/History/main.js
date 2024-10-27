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
    recordheadingwrapper: {
      flexDirection: "row",
      alignItems: "center",
      height: getPercent(8, height),
      width: getPercent(90, width),
      alignSelf: "center",
      borderRadius: 10,
      borderWidth: 1,
      borderColor: light?.btnbody,
      justifyContent: "space-between",
    },
    btnbody: {
      height: "100%",
      width: "33%",
      backgroundColor: light?.btnbody,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
    },
    btntext: {
      fontFamily: "Medium",
      fontSize: rf(13),
      color: light?.BtnText,
    },
    wrapper: {
      marginVertical: getPercent(3, height),
    },
    loader: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: getPercent(2, height),
    },
    errorWrapper: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: getPercent(2, height),
    },
    errorTxt: {
      fontFamily: "Medium",
      fontSize: rf(13),
      color: light?.LableText,
    },
  });
