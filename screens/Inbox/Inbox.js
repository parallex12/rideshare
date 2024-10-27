import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Inbox/main";
import Bottommenu from "../../globalComponents/Bottommenu";
import Mymsgs from "./component/Mymsgs";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Complain = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <View style={styles.headerbody}>
        <Text style={styles.heading}>Chat</Text>
      </View>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        {[1, 2, 2, 2, 2, 2]?.map((item, index) => {
          return (
            <Mymsgs
              key={index}
              onPress={() => props?.navigation?.navigate("Chat")}
              image={require("../../assets/images/user.png")}
              name={"Bessie Cooper"}
              msg={"Where are you?"}
              time={"10 mins ago"}
            />
          );
        })}
      </KeyboardAwareScrollView>
      <Bottommenu active={"Inbox"} navigation={props?.navigation} />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Complain);
