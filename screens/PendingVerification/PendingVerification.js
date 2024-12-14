import {
    Text,
    View,
    useWindowDimensions,
    TouchableOpacity,
    Image,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/PendingVerification/main";
import StandardButton from "../../globalComponents/StandardButton";
import { SignOut } from "../../state-management/auth/auth";

const PendingVerification = (props) => {
    let { } = props;
    let { width, height } = useWindowDimensions();
    let styles = _styles({ width, height });


    return (
        <View style={styles.container}>
            <View style={styles.fieldBody}>
                <Text style={styles.heading}>Your Documents Are on Their Way!</Text>
                <View style={styles.iconWrapper} >
                    <Image source={require("../../assets/icons/clock.png")}
                        resizeMode="contain"
                        style={{ height: "100%", width: "100%" }} />
                </View>
                <Text style={styles.subheading}>Thank you for uploading your documents! Our team is reviewing them to ensure everything checks out.
                    This won’t take long, so sit back, relax, and we’ll notify you as soon as the verification is complete.
                    Your safety and trust mean the world to us!</Text>
            </View>
            <View style={styles.buttonWrapper}>
                <StandardButton
                    title=
                    "Logout"
                    onPress={() => props?.SignOut()}
                />
            </View>
        </View>
    );
};

const mapStateToProps = (state) => ({
    errors: state.errors.errors,
});
export default connect(mapStateToProps, { SignOut })(PendingVerification);
