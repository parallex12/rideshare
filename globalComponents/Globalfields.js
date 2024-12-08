import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import { Globalfieldsstyles } from "../styles/Global/main";
import { Ionicons } from "@expo/vector-icons";
import { light } from "../scheme";
import { getPercent } from "../middleware";

const Globalfields = (props) => {
  let { } = props;
  let { width, height } = useWindowDimensions();
  let styles = Globalfieldsstyles({ width, height });

  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        style={styles.inputstyles}
        placeholderTextColor={light?.fieldtext}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Globalfields);
