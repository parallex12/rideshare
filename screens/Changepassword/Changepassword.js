import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Changepassword/main";
import Notificationsheader from "../Notifications/components/Notificationsheader";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { light } from "../../scheme";
import StandardButton from "../../globalComponents/StandardButton";
import { getPercent, validatePassword } from "../../middleware";
import { useState } from "react";
import {
  getAuth,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";
import { changePassword } from "../../state-management/auth/auth";

const Changepassword = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [oldpassword, setOldpassword] = useState("");
  const [newpassword, setNewpassword] = useState("");
  const [confirmpasword, setConfirmpasword] = useState("");
  const [loading, setLoading] = useState(false);

  const onUpdate = () => {
    const data = { oldpassword, newpassword };
    validatePassword(newpassword, confirmpasword)
      .then((res) => {
        setLoading(true);
        props?.changePassword(data, setLoading, props?.navigation);
      })
      .catch((e) => {
        alert(e?.message);
      });
  };

  return (
    <View style={styles.container}>
      <Notificationsheader
        title={"Change Password"}
        navigation={props?.navigation}
      />
      <View style={{ marginTop: getPercent(3, height) }}>
        <View style={styles.fieldbody}>
          <TextInput
            placeholder="Old Password"
            secureTextEntry={true}
            placeholderTextColor={light?.fieldtext}
            style={styles.input}
            onChangeText={(val) => setOldpassword(val)}
          />
          <TouchableOpacity>
            <Ionicons
              // name="md-eye-off-outline"
              size={15}
              color={light?.standardtext}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.fieldbody}>
          <TextInput
            placeholder="New Password"
            secureTextEntry={true}
            placeholderTextColor={light?.fieldtext}
            style={styles.input}
            onChangeText={(val) => setNewpassword(val)}
          />
          <TouchableOpacity>
            <Ionicons
              // name="md-eye-off-outline"
              size={15}
              color={light?.standardtext}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.fieldbody}>
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry={true}
            placeholderTextColor={light?.fieldtext}
            style={styles.input}
            onChangeText={(val) => setConfirmpasword(val)}
          />
          <TouchableOpacity>
            <Ionicons
              // name="md-eye-off-outline"
              size={15}
              color={light?.standardtext}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.btnwrapper}>
        <StandardButton
          title={
            loading ? <ActivityIndicator size="small" color="#fff" /> : "Save"
          }
          onPress={onUpdate}
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
  get_user_details: state.main.get_user_details,
});
export default connect(mapStateToProps, { changePassword })(Changepassword);
