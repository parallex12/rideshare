import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { connect } from "react-redux";
import { Gloabliconstyles } from "../styles/Global/main";
import { Ionicons } from "@expo/vector-icons";
import { light } from "../scheme";
import { getPercent } from "../middleware";

const Globalicons = (props) => {
  let { image, onPress } = props;
  let { width, height } = useWindowDimensions();
  let styles = Gloabliconstyles({ width, height });

  return (
    <TouchableOpacity onPress={onPress} style={styles.container} {...props} >
      <Image
        source={image}
        style={{ height: "100%", width: "100%" }}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Globalicons);
