import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Settings/main";
import Notificationsheader from "../Notifications/components/Notificationsheader";
import { Ionicons } from "@expo/vector-icons";
import { light } from "../../scheme";
import { getPercent } from "../../middleware";

const Settings = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <Notificationsheader title={"Settings"} navigation={props?.navigation} />
      <View style={{ marginTop: getPercent(3, height) }}>
        <TouchableOpacity
          onPress={() => props?.navigation?.navigate("Changepassword")}
          style={styles.fieldbody}
        >
          <Text style={styles.texttitle}>Change Password</Text>
          <Ionicons
            name="chevron-forward"
            size={20}
            color={light?.standardtext}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props?.navigation?.navigate("Privacypolicy")}
          style={styles.fieldbody}
        >
          <Text style={styles.texttitle}>Privacy Policy</Text>
          <Ionicons
            name="chevron-forward"
            size={20}
            color={light?.standardtext}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props?.navigation?.navigate("Contactus")}
          style={styles.fieldbody}
        >
          <Text style={styles.texttitle}>Contact Us</Text>
          <Ionicons
            name="chevron-forward"
            size={20}
            color={light?.standardtext}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props?.navigation?.navigate("Deleteaccount")}
          style={styles.fieldbody}
        >
          <Text style={styles.texttitle}>Delete Account</Text>
          <Ionicons
            name="chevron-forward"
            size={20}
            color={light?.standardtext}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Settings);
