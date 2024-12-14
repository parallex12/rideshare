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
            justifyContent: "center",
            paddingBottom: getPercent(10, height)
        },
        fieldBody: {
            width: getPercent(90, width),
            paddingHorizontal: 10,
            alignItems: "center",
            alignSelf: "center",
        },
        iconWrapper: {
            height: getPercent(25, height),
            width: getPercent(25, height),
            marginVertical: getPercent(2, height)
        },
        heading: {
            fontFamily: "SemiBold",
            fontSize: rf(17),
            color: light?.standardtext,
            textAlign: "center"
        },
        subheading: {
            fontFamily: "Regular",
            fontSize: rf(13),
            color: light?.standardtext,
            textAlign: "center"
        },
        buttonWrapper: {
            alignItems: "center",
            marginTop: getPercent(10, height)
        }
    });
