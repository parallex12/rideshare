import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";
import { light } from "../../scheme";

//Styles Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      height: getPercent(9, height),
      marginVertical: 10,
      flexDirection: "row",
      alignItems: "center",
      width: getPercent(90, width),
      alignSelf: "center",
      borderRadius: 10,
      backgroundColor: light?.background,
      paddingHorizontal: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    iconbody: {
      height: getPercent(5, height),
      width: getPercent(5, height),
      overflow: "hidden",
    },
    titlebody: {
      flex: 1,
      paddingLeft: 10,
    },
    titletext: {
      fontFamily: "Medium",
      fontSize: rf(14),
      color: light?.standardtext,
    },
  });
