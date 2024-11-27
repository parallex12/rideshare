import { useState } from "react";
import {
  Text,
  View,
  useWindowDimensions,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Profile/main";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { getPercent } from "../../middleware";
import Bottommenu from "../../globalComponents/Bottommenu";
import Globalfields from "../../globalComponents/Globalfields";
const Profile = (props) => {
  let { } = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [userDetails, setUserDetails] = useState(props?.get_user_details);

  return (
    <View style={styles.container}>
      <View style={styles.profilepicwrapper}>
        <Text style={styles.headertext}>Profile</Text>
        <View style={styles.framewrapper}>
          <Image
            // source={require("../../assets/images/user.png")}
            source={
              userDetails?.profile
                ? { uri: userDetails?.profile }
                : require("../../assets/images/user.png")
            }
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
        {/* <TouchableOpacity style={styles.uploadiconbody}>
          <Image
            source={require("../../assets/icons/edit.png")}
            style={{ height: "50%", width: "50%" }}
            resizeMode="contain"
          />
        </TouchableOpacity> */}

        <Text style={styles.headertext}>{userDetails?.name}</Text>
      </View>
      <View style={styles.fieldwrapper}>
        <Text style={styles.labletext}>Your First Name</Text>
        <View style={styles.fieldbody}>
          <Text style={styles.text}>{userDetails?.firstName}</Text>
        </View>
      </View>
      <View style={styles.fieldwrapper}>
        <Text style={styles.labletext}>Your Last Name</Text>
        <View style={styles.fieldbody}>
          <Text style={styles.text}>{userDetails?.lastName}</Text>
        </View>
      </View>
      <View style={styles.fieldwrapper}>
        <Text style={styles.labletext}>Your email</Text>
        <View style={styles.fieldbody}>
          <Text style={styles.text}>{userDetails?.email}</Text>
        </View>
      </View>
      <View style={styles.fieldwrapper}>
        <Text style={styles.labletext}>Phone Number</Text>
        <View style={styles.fieldbody}>
          <Text style={styles.text}>
            {userDetails?.phone || "Phone Number"}
          </Text>
        </View>
      </View>
      <Bottommenu navigation={props?.navigation} active={"Profile"} />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
  get_user_details: state.main.get_user_details,
});
export default connect(mapStateToProps, {})(Profile);
