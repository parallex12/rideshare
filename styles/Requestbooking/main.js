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
    pickanddropdetailswrapper: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: getPercent(5, width),
      height: getPercent(16, height),
    },
    currentlocaicon: {
      height: getPercent(2.8, height),
      width: 15,
      // overflow: "hidden",
      //   marginBottom: 7,
    },
    lineicon: {
      height: 40,
      width: 5,
      overflow: "hidden",
      alignSelf: "center",
      marginLeft: 3,
      //   marginBottom: 7,
    },
    textbody: {
      paddingLeft: 10,
    },
    currentext: {
      fontFamily: "SemiBold",
      fontSize: rf(13),
      color: light?.standardtext,
    },
    rdtext: {
      fontFamily: "Medium",
      fontSize: rf(11),
      color: light?.fieldtext,
    },
    textwrapper: {
      justifyContent: "space-between",
      height: "80%",
    },
    iconwrapper: {
      height: "75%",
    },
    datebody: {
      height: getPercent(7, height),
      width: getPercent(90, width),
      borderRadius: 8,
      borderWidth: 1,
      borderColor: light?.fieldbody,
      alignSelf: "center",
      paddingHorizontal: 10,
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 10,
    },
    selectpaymenttext: {
      fontFamily: "SemiBold",
      fontSize: rf(16),
      color: light?.standardtext,
      paddingLeft: getPercent(5, width),
    },
    btnwraper: {
      alignItems: "center",
      marginVertical: 10,
    },
  });
