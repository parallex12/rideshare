import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Contactus/main";
import Notificationsheader from "../Notifications/components/Notificationsheader";
import { Ionicons } from "@expo/vector-icons";
import { light } from "../../scheme";
import { getPercent } from "../../middleware";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import StandardButton from "../../globalComponents/StandardButton";

const Contactus = (props) => {
  let { } = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <Notificationsheader
        title={"Contact Us"}
        navigation={props?.navigation}
      />
      <View style={styles.textwrapper}>
        <Text style={styles.Contactusttext}>Contact us for Ride share</Text>
        {/* <Text style={styles.Contactusttext}>Address</Text>
        <Text style={styles.address}>
          House# 72, Road# 21, Banani, Dhaka-1213 (near Banani Bidyaniketon
          School &{"\n"}College, beside University of South Asia) {"\n"}
          {"\n"}Call : 13301 (24/7){"\n"}Email : support@pathao.com
          {"\n"}
        </Text>
        <Text style={styles.Contactusttext}>Send Massege</Text> */}
      </View>
      <KeyboardAwareScrollView>
        <View style={{ marginTop: getPercent(1, height) }}>
          <View style={styles.fieldbody}>
            <TextInput
              placeholder="Name"
              multiline
              placeholderTextColor={light?.fieldtext}
              style={styles.input}
            />
          </View>
          <View style={styles.fieldbody}>
            <TextInput
              placeholder="Email"
              multiline
              placeholderTextColor={light?.fieldtext}
              style={styles.input}
            />
          </View>
          <View style={styles.fieldbody}>
            <TextInput
              placeholder="Number"
              multiline
              placeholderTextColor={light?.fieldtext}
              style={styles.input}
            />
          </View>
          <View style={styles.fieldbodytypemsg}>
            <TextInput
              placeholder="Write your text"
              multiline
              placeholderTextColor={light?.fieldtext}
              style={styles.input}
            />
          </View>
          <View style={styles.btnwrapper}>
            <StandardButton title={"Send Message"} />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Contactus);
