import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { connect } from "react-redux";
import { Globalheaderstyles } from "../styles/Global/main";
import { Ionicons } from "@expo/vector-icons";
import { light } from "../scheme";
import { getPercent } from "../middleware";

const Globalheader = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = Globalheaderstyles({ width, height });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props?.navigation?.goBack()}
        style={styles.backbtnbody}
      >
        <Ionicons
          name="chevron-back"
          size={getPercent(3, height)}
          color={light?.LableText}
        />
        <Text style={styles.backtext}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Globalheader);
