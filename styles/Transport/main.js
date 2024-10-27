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
    lablewrapper: {
      height: getPercent(8, height),
      justifyContent: "center",
      alignItems: "center",
    },
    selecttext: {
      fontFamily: "SemiBold",
      fontSize: rf(18),
      color: light?.LableText,
    },
    wrapper: {
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "wrap",
      paddingHorizontal: getPercent(5, width),
      justifyContent: "space-around",
    },
    carbody: {
      height: getPercent(20, height),
      width: getPercent(40, width),
      borderRadius: 10,
      borderWidth: 1,
      borderColor: light?.btnbody,
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 5,
    },
    carttitletext: {
      fontFamily: "Medium",
      fontSize: rf(14),
      color: light?.standardtext,
    },
  });
