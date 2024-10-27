import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { connect } from "react-redux";
import { Commonheaderstyles } from "../styles/Global/main";
import { Ionicons } from "@expo/vector-icons";
import { light } from "../scheme";
import { getPercent } from "../middleware";

const Commonheader = (props) => {
  let { title } = props;
  let { width, height } = useWindowDimensions();
  let styles = Commonheaderstyles({ width, height });

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
      </TouchableOpacity>
      <View style={styles.textbody}>
        <Text style={styles.titletext}>{title}</Text>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Commonheader);
