import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Onboarding3/main";

const Onboading3 = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <View style={styles.textwrapper}>
        <Text style={styles.anywheretext}>Which one are you</Text>
      </View>
      <View style={styles.framewrapper}>
        <TouchableOpacity
          onPress={() => props?.navigation?.navigate("Riderwelcome")}
          style={styles.framebody}
        >
          <Image
            source={require("../../assets/images/onboarding3.png")}
            style={{ height: "80%", width: "80%" }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props?.navigation?.navigate("Welcome")}
          style={styles.framebody}
        >
          <Image
            source={require("../../assets/images/onboarding4.png")}
            style={{ height: "80%", width: "80%" }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.btnwrapper}>
        <TouchableOpacity
          onPress={() => props?.navigation?.navigate("Register")}
          style={styles.btnbody}
        >
          <Image
            source={require("../../assets/icons/3.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Onboading3);
