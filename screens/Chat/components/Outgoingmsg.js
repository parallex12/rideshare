import {
  Text,
  View,
  useWindowDimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../../styles/Chat/Outgoingmsg";

const Outgoingmsg = (props) => {
  let { outgoingmsg, time } = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <View style={styles.msgbody}>
        <Text style={styles.msgtext}>{outgoingmsg}</Text>
        <Text style={styles.timetext}>{time}</Text>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Outgoingmsg);
