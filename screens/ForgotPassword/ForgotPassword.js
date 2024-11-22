import { useState } from "react";
import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/ForgotPassword/main";
import Globalheader from "../../globalComponents/Globalheader";
import Globalfields from "../../globalComponents/Globalfields";
import StandardButton from "../../globalComponents/StandardButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { resetPassword } from "../../state-management/auth/auth";

const ForgotPassword = (props) => {
  let { } = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });
  const data = props?.route?.params;
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);


  const _sendEmail = () => {
    if (email.length === 0) {
      alert("Provide Email Address ");
    } else {
      let form = { email };
      setLoading(true);
      props?.resetPassword(form, setLoading, props?.navigation);
    }
  };
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <Globalheader navigation={props?.navigation} />
        <View style={styles.signupwrapper}>
          <Text style={styles.signuptext}>Forgot Password</Text>
        </View>
        <View style={styles.txtWrapper}>
          <Text style={styles.descTxt}>Enter your email, we will send you verification link</Text>
        </View>
        <View style={styles.fieldwrapper}>
          <Globalfields
            multiline
            placeholder="Email"
            onChangeText={(val) => setEmail(val)}
            value={email}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.btnwrapper}>
          <StandardButton
            title={
              loading ? (
                <ActivityIndicator size={"small"} color={"#fff"} />
              ) : (
                "Submit"
              )
            }
            onPress={_sendEmail}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, { resetPassword })(ForgotPassword);
