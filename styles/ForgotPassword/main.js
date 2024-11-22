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
        signupwrapper: {
            height: getPercent(8, height),
            width: getPercent(100, width),
            justifyContent: "center",
            alignItems: "center",
        },
        signuptext: {
            fontFamily: "Medium",
            fontSize: rf(22),
            color: light?.LableText,
        },
        txtWrapper: {
            width: getPercent(100, width),
            paddingHorizontal: getPercent(5, width)
        },
        descTxt: {
            fontFamily: "Medium",
            fontSize: rf(16),
            color: light?.LableText,
        },
        fieldwrapper: {
            justifyContent: "center",
        },
        forgottext: {
            fontFamily: "Medium",
            fontSize: rf(14),
            color: light?.standardtext,
            textAlign: "right",
            paddingRight: getPercent(5, width),
        },
        btnwrapper: {
            alignSelf: "center",
            marginVertical: getPercent(3, height),
        },

    });
