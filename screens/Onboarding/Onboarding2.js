import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Onboarding/main";

const Onboading2 = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props?.navigation?.navigate("Onboarding3")}
        style={styles.skipbtnbody}
      >
        <Text style={styles.skiptext}>Skip</Text>
      </TouchableOpacity>
      <View style={styles.framewrapper}>
        <View style={styles.framebody}>
          <Image
            source={require("../../assets/images/onboarding2.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={styles.textwrapper}>
        <Text style={styles.anywheretext}>At anytime</Text>
        <Text style={styles.selltext}>
          Sell houses easily with the help of Listenoryx and to make this line
          big I am writing more.
        </Text>
      </View>
      <View style={styles.btnwrapper}>
        <TouchableOpacity
          onPress={() => props?.navigation?.navigate("Onboarding3")}
          style={styles.btnbody}
        >
          <Image
            source={require("../../assets/icons/2.png")}
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
export default connect(mapStateToProps, {})(Onboading2);
