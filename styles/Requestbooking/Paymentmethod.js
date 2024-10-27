import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";
import { light } from "../../scheme";

//Styles Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      height: getPercent(9, height),
      width: getPercent(90, width),
      borderRadius: 8,
      borderWidth: 1,
      borderColor: light?.btnbody,
      alignSelf: "center",
      paddingHorizontal: 10,
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 10,
    },
    imagebody: {
      height: getPercent(5, height),
      width: getPercent(8, height),
      overflow: "hidden",
    },
    textbody: {
      flex: 1,
      paddingLeft: 10,
    },
    notext: {
      fontFamily: "Medium",
      fontSize: rf(13),
      color: light?.standardtext,
    },
    expirytext: {
      fontFamily: "Regular",
      fontSize: rf(11),
      color: light?.fieldtext,
    },
  });
