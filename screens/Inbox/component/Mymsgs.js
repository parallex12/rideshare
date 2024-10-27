import {
  Text,
  View,
  useWindowDimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../../styles/Inbox/Mymsgs";
import { Pressable } from "react-native";

const Mymsgs = (props) => {
  let { onPress, name, msg, time, image } = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.imagebody}>
        <Image
          source={image}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.namewrapper}>
        <Text style={styles.nametext}>{name}</Text>
        <Text style={styles.chatmsg}>{msg}</Text>
      </View>
      <Text style={styles.time}>{time}</Text>
    </Pressable>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Mymsgs);
