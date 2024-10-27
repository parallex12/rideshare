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
import StandardButton from "../../globalComponents/StandardButton";
import { getPercent } from "../../middleware";
import { Quikify } from "quikify";
import { getAuth } from "firebase/auth";

const Deleteaccount = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const onDelete = () => {
    let auth = getAuth();
    let user = auth.currentUser;
    user
      .delete()
      .then((result) => {
        Quikify.delete("/users")
          .then((res) => {
            console.log(res);
          })
          .catch((e) => {
            console.log(e);
          });
      })
      .catch((e) => {
        console.log("error", e);
      });
  };

  return (
    <View style={styles.container}>
      <Notificationsheader
        title={"Delete Account"}
        navigation={props?.navigation}
      />
      <View style={{ paddingHorizontal: getPercent(5, width) }}>
        <Text style={styles.policytext}>
          Are you sure you want to delete your account? Please read how account
          deletion will affect.{"\n"}Deleting your account removes personal
          information our database. Tour email becomes permanently reserved and
          same email cannot be re-use to register a new account.
        </Text>
      </View>
      <View style={styles.btnwraper}>
        <StandardButton
          customStyles={{
            backgroundColor: "#F44336",
          }}
          title={"Delete"}
          onPress={onDelete}
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Deleteaccount);
