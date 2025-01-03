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
import { styles as _styles } from "../../styles/Register/main";
import Globalheader from "../../globalComponents/Globalheader";
import Globalfields from "../../globalComponents/Globalfields";
import Globalicons from "../../globalComponents/Globalicons";
import StandardButton from "../../globalComponents/StandardButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SignUp } from "../../state-management/auth/auth";
import { validatePassword } from "../../middleware";
import { light } from "../../scheme";
import AntDesign from '@expo/vector-icons/AntDesign';


const Register = (props) => {
  let { } = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState(false);

  const routeType = props?.route?.params?.routeType


  const _handleSignup = () => {
    // props?.navigation?.navigate("Enterphone");
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      alert("Provide All Details");
    }
    else if (!check) {
      alert("Please agree to our terms of service");
    } else {
      validatePassword(password, confirmPassword)
        .then((res) => {
          let form = { firstName, lastName, email, password };
          form["type"] = routeType;
          form["verification"] = null;
          setLoading(true);
          props?.SignUp(form, setLoading, props?.navigation);
        })
        .catch((e) => {
          alert(e?.message);
          return;
        });
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <Globalheader navigation={props?.navigation} />
        <View style={styles.signupwrapper}>
          <Text style={styles.signuptext}>Register</Text>
        </View>
        <View style={styles.fieldwrapper}>
          <Globalfields
            placeholder="First Name"
            onChangeText={(val) => setFirstName(val)}
            value={firstName}
            autoCapitalize="words"
          />

          <Globalfields
            placeholder="Family Name"
            onChangeText={(val) => setLastName(val)}
            value={lastName}
            autoCapitalize="words"
          />
          <Globalfields
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

          <Globalfields
            placeholder="Confirm Password"
            onChangeText={(val) => setConfirmPassword(val)}
            value={confirmPassword}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.termswrapper}>
          <TouchableOpacity style={styles.checkBox} onPress={() => setCheck(!check)} >
            {check && <AntDesign name="check" size={14} color={light.btnbody} />}
          </TouchableOpacity>
          <Text style={styles.signinguptext}>
            By signing up. you agree to the <Text style={[styles.signinguptext, { color: light.btnbody }]} onPress={() => props?.navigation?.navigate("Privacypolicy")} >Terms of service and Privacy policy</Text>.
          </Text>
        </View>
        <View style={styles.btnwrapper}>
          <StandardButton
            title={
              loading ? (
                <ActivityIndicator size={"small"} color={"#fff"} />
              ) : (
                "Sign up"
              )
            }
            onPress={_handleSignup}
          />
        </View>
        <View style={styles.alreadywrapper}>
          <Text style={styles.alreadytext}>
            Already have an account?{" "}
            <Text
              onPress={() => props?.navigation?.navigate("Login")}
              style={styles.signup}
            >
              Sign in
            </Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, { SignUp })(Register);
