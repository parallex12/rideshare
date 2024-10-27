import {
  Text,
  View,
  useWindowDimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../../styles/Chat/Incomingmsg";

const Incomingmsg = (props) => {
  let { item, image, incomingmsg, time } = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <View style={styles.imagebody}>
        <Image
          source={image}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.msgbody}>
        <Text style={styles.msgtext}>{incomingmsg}</Text>
        <Text style={styles.timetext}>{time}</Text>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Incomingmsg);
