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
      height: getPercent(7, height),
      width: getPercent(90, width),
      borderRadius: 10,
      borderWidth: 1,
      borderColor: light?.fieldbody,
      marginVertical: 10,
      paddingHorizontal: 10,
      flexDirection: "row",
      alignItems: "center",
      alignSelf: "center",
      justifyContent: "space-between",
    },
    input: {
      fontFamily: "Medium",
      fontSize: rf(12),
      color: light?.standardtext,
      width: "90%",
    },
    btnwrapper: {
      flex: 0.5,
      justifyContent: "center",
      alignItems: "center",
    },
  });
