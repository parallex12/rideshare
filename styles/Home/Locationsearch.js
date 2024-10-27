import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";
import { light } from "../../scheme";

//Styles Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      height: getPercent(20, height),
      width: getPercent(90, width),
      alignSelf: "center",
      position: "absolute",
      bottom: getPercent(20, height),
      borderWidth: 1,
      borderColor: light?.btnbody,
      borderRadius: 10,
      backgroundColor: "#FFF0DC",
      alignItems: "center",
      justifyContent: "space-around",
    },
    searchbody: {
      height: getPercent(6.5, height),
      width: "90%",
      backgroundColor: light?.background,
      flexDirection: "row",
      alignItems: "center",
      borderRadius: 10,
      paddingHorizontal: 10,
    },
    wheretext: {
      fontFamily: "SemiBold",
      fontSize: rf(14),
      color: light?.secondarytext,
    },
  });
