import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Privacypolicy/main";
import Notificationsheader from "../Notifications/components/Notificationsheader";
import { Ionicons } from "@expo/vector-icons";
import { light } from "../../scheme";
import { getPercent } from "../../middleware";

const Privacypolicy = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <Notificationsheader
        title={"Privacy Policy"}
        navigation={props?.navigation}
      />
      <View style={{ paddingHorizontal: getPercent(5, width) }}>
        <Text style={styles.labletext}>Privacy Policy for Ride share</Text>
        <Text style={styles.policytext}>
          At Rideshare, accessible from rideshare.com, one of our main
          priorities is the privacy of our visitors. This Privacy Policy
          document contains types of information that is collected and recorded
          by rideshare and how we use it.{"\n"} If you have additional questions
          or require more information about our Privacy Policy, do not hesitate
          to contact us.
          {"\n"}
          This Privacy Policy applies only to our online activities and is valid
          for visitors to our website with regards to the information that they
          shared and/or collect in rideshare. This policy is not applicable to
          any information collected offline or via channels other than this
          website. Our Privacy Policy was created with the help of the Free
          Privacy Policy Generator.
        </Text>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Privacypolicy);
