import { useState } from "react";
import { Text, View, useWindowDimensions } from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Phoneverification/main";
import Globalheader from "../../globalComponents/Globalheader";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Code from "./components/Code";
import { light } from "../../scheme";
import StandardButton from "../../globalComponents/StandardButton";

const Phoneverification = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <Globalheader navigation={props?.navigation} />
      <View style={styles.wrapper}>
        <Text style={styles.enterphonenumbertext}>Phone Verification</Text>
        <Text style={styles.enterotp}>Enter your OTP code</Text>
      </View>
      <Code />
      <Text style={styles.recievecodetext}>
        Didn’t receive code?
        <Text
          // onPress={}
          style={[
            styles.recievecodetext,
            {
              color: light?.btnbody,
            },
          ]}
        >
          Resend again
        </Text>
      </Text>
      <View style={styles.btnwrapper}>
        <StandardButton
          title={"Verify"}
          onPress={() => props?.navigation?.navigate("Login")}
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Phoneverification);
