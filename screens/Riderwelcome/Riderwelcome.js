import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Welcome/main";
import StandardButton from "../../globalComponents/StandardButton";
import { light } from "../../scheme";
import Globalheader from "../../globalComponents/Globalheader";

const Riderwelcome = (props) => {
  let { } = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });
  let routeType = props?.route?.params?.type;
  return (
    <View style={styles.container}>
      <Globalheader navigation={props?.navigation} />
      <View style={styles.framewrapper}>
        <View
          style={styles.framebody}
        >
          <Image
            source={require("../../assets/images/Welcome.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={styles.textwrapper}>
        <Text style={styles.anywheretext}>Welcome</Text>
        <Text style={styles.selltext}>Having a better sharing experience</Text>
      </View>
      <View style={styles.btnwrapper}>
        <StandardButton
          onPress={() => props?.navigation?.navigate("Riderregister", { routeType: routeType })}
          title={"Create an acocunt"}
        />
        <StandardButton
          onPress={() => props?.navigation?.navigate("Login", routeType)}
          customStyles={styles.custom}
          textStyles={{
            color: light?.btnbody,
          }}
          title={"Log in"}
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Riderwelcome);
