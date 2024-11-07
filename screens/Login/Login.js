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
import { styles as _styles } from "../../styles/Login/main";
import Globalheader from "../../globalComponents/Globalheader";
import Globalfields from "../../globalComponents/Globalfields";
import Globalicons from "../../globalComponents/Globalicons";
import StandardButton from "../../globalComponents/StandardButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { LoginWithEmailPass } from "../../state-management/auth/auth";

const Login = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });
  const data = props?.route?.params;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  let socialicons = [
    require("../../assets/icons/google.png"),
    require("../../assets/icons/fb.png"),
    require("../../assets/icons/twitter.png"),
  ];

  const _HandleLogin = () => {
    if (email.length === 0 || password.length === 0) {
      alert("Provide Valid Email and Password");
    } else {
      let form = { email, password };
      setLoading(true);
      props?.LoginWithEmailPass(form, data, setLoading, props?.navigation);
    }
  };
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <Globalheader navigation={props?.navigation} />
        <View style={styles.signupwrapper}>
          <Text style={styles.signuptext}>Sign in</Text>
        </View>
        <View style={styles.fieldwrapper}>
          <Globalfields
            multiline
            placeholder="Email"
            onChangeText={(val) => setEmail(val)}
            value={email}
            autoCapitalize="none"
          />
          <Globalfields
            placeholder="Password"
            onChangeText={(val) => setPassword(val)}
            value={password}
            secureTextEntry={true}
          />
          <Text style={styles.forgottext}>Forgot Password?</Text>
        </View>
        <View style={styles.termswrapper}>
          <Globalicons image={require("../../assets/icons/5.png")} />
          <Text style={styles.signinguptext}>
            By signing up. you agree to the Terms of service and Privacy policy.
          </Text>
        </View>
        <View style={styles.btnwrapper}>
          <StandardButton
            title={
              loading ? (
                <ActivityIndicator size={"small"} color={"#fff"} />
              ) : (
                "Sign in"
              )
            }
            onPress={_HandleLogin}
          />
        </View>
        <View style={styles.alreadywrapper}>
          <Text style={styles.alreadytext}>
            Dont have an account?{" "}
            <Text
              onPress={() => props?.navigation?.navigate("Register")}
              style={styles.signup}
            >
              Sign up
            </Text>
          </Text>
        </View>
        <View style={styles.socialbuttnwrapper}>
          <Text style={styles.orsigninwith}>Or sign in with</Text>
          <View style={styles.iconwrapper}>
            {socialicons?.map((item, index) => {
              return (
                <TouchableOpacity key={index} style={styles.iconbody}>
                  <Image
                    source={item}
                    style={{ height: "100%", width: "100%" }}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, { LoginWithEmailPass })(Login);