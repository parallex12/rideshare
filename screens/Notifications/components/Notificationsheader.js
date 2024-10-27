import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { connect } from "react-redux";
import { Notificationsheaderstyles } from "../../../styles/Global/main";
import { Ionicons } from "@expo/vector-icons";
import { light } from "../../../scheme";
import { getPercent } from "../../../middleware";

const Globalheader = (props) => {
  let { title } = props;
  let { width, height } = useWindowDimensions();
  let styles = Notificationsheaderstyles({ width, height });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props?.navigation?.goBack()}
        style={styles.backbtnbody}
      >
        <Ionicons
          name="chevron-back"
          size={getPercent(2.5, height)}
          color={light?.LableText}
        />
        <Text style={styles.backtext}>Back</Text>
      </TouchableOpacity>
      <View
        style={{ flex: 0.9, justifyContent: "center", alignItems: "center" }}
      >
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Globalheader);
