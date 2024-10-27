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
      borderColor: light?.fieldtext,
      marginVertical: 8,
      paddingHorizontal: 10,
      flexDirection: "row",
      alignItems: "center",
      alignSelf: "center",
    },
    texttitle: {
      fontFamily: "Medium",
      fontSize: rf(13),
      color: light?.standardtext,
    },
    textwrapper: {
      alignItems: "center",
    },
    Contactusttext: {
      fontFamily: "Medium",
      fontSize: rf(15),
      color: light?.standardtext,
    },
    address: {
      fontFamily: "Medium",
      fontSize: rf(12),
      color: light?.fieldtext,
      textAlign: "center",
    },

    input: {
      fontFamily: "Medium",
      fontSize: rf(12),
      color: light?.standardtext,
      width: "90%",
    },
    fieldbodytypemsg: {
      height: getPercent(15, height),
      width: getPercent(90, width),
      borderRadius: 10,
      borderWidth: 1,
      borderColor: light?.fieldtext,
      marginVertical: 8,
      paddingHorizontal: 10,
      padding: 10,
      alignSelf: "center",
    },
    btnwrapper: {
      alignItems: "center",
      marginTop: 20,
    },
  });
