import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";
import { dark, light } from "../../scheme";

//Styles Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: getPercent(5, width),
      marginVertical: 10,
      justifyContent: "flex-end",
    },
    imagebody: {
      height: getPercent(3, height),
      width: getPercent(3, height),
      overflow: "hidden",
      borderRadius: 100,
      marginLeft: 10,
    },
    msgbody: {
      paddingHorizontal: 10,
      paddingVertical: 5,
      justifyContent: "center",
      backgroundColor: "#FFFBF5",
      borderWidth: 1,
      borderColor: light?.btnbody,
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      maxWidth: getPercent(80, width),
    },
    msgtext: {
      fontFamily: "Regular",
      fontSize: rf(13),
      color: light.standardtext,
      marginBottom: 5,
    },
    timetext: {
      fontFamily: "Regular",
      fontSize: rf(10),
      color: light.fieldbody,
      textAlign: "right",
    },
  });
