import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";

//Styles Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    mapwrapper: {
      height: getPercent(100, height),
      width: getPercent(100, width),
    },
    map: {
      height: getPercent(100, height),
      width: getPercent(100, width),
    },
    pickWrppr: {
      backgroundColor: "orange",
      position: "absolute",
      zIndex: 10,
      alignSelf: "center",
      bottom: getPercent(20, height),
      borderRadius: 5,
      padding: 14,
    },
    pickupTxt: {
      fontFamily: "Medium",
      fontSize: rf(14),
      color: "#fff",
    },

    DateTimeWrapper: {
      width: getPercent(width, 90),
      height: getPercent(height, 14),
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "red",
    },
    datePickerModal: {
      width: getPercent(width, 90),
      height: getPercent(height, 100),
      position: "absolute",
      zIndex: 15,
      top: getPercent(height, 30),
      alignSelf: "center",
    },
    pickerLayer: {
      width: getPercent(width, 100),
      height: getPercent(height, 100),
      position: "absolute",
      zIndex: 11,
      alignSelf: "center",
      backgroundColor: "rgba(0,0,0,0.5)",
    },
  });
