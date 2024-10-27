import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";
import { light } from "../../scheme";

//Styles Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      height: getPercent(10, height),
      width: getPercent(90, width),
      borderRadius: 10,
      borderWidth: 1,
      borderColor: light?.btnbody,
      alignSelf: "center",
      paddingHorizontal: 10,
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 10,
    },
    carname: {
      fontFamily: "Medium",
      fontSize: rf(13),
      color: light?.standardtext,
    },
    ratting: {
      fontFamily: "Regular",
      fontSize: rf(11),
      color: light?.fieldtext,
      marginLeft: 5,
    },
    carwrapper: {
      height: getPercent(5, height),
      width: getPercent(10, height),
      overflow: "hidden",
    },
  });
