import { useState, useEffect } from "react";
import {
  Text,
  View,
  useWindowDimensions,
  Image,
  TouchableOpacity,
  TextInput,
  Keyboard,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Profile/main";
import { firebaseImageUpload, getPercent } from "../../middleware";
import Bottommenu from "../../globalComponents/Bottommenu";
import { light } from "../../scheme";
import _ from "lodash";
import StandardButton from "../../globalComponents/StandardButton";
import { Quikify } from "quikify";
import { uni_apis } from "../../middleware/apis";
import { GET_USER_DETAILS } from "../../state-management/types/types";

const Editprofile = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [image, setImage] = useState(null);
  const [userDetails, setUserDetails] = useState({});
  const [userForm, setUserForm] = useState({});
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [loading, setLoading] = useState(false);

  let type = props?.route?.params?.type;

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.photo,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      handleChangeValue("profile", result.assets[0].uri);
    }
  };

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const handleChangeValue = (key, value) => {
    setUserForm((prev) => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    if (props?.get_user_details) {
      setUserDetails(props?.get_user_details);
      setUserForm(props?.get_user_details);
    }
  }, [props?.get_user_details]);

  const onSave = async () => {
    let formIsSame = _.isEqual(userDetails, userForm);
    if (formIsSame && !image) {
      props?.navigation.navigate("Home");
      return;
    }
    if (image) {
      setLoading(true);
      await firebaseImageUpload(image)
        .then((res) => {
          Quikify.update(`/users/${userForm?.id}`, {
            ...userForm,
            profile: res?.url,
          })
            .then((response) => {
              Quikify.get("/users", GET_USER_DETAILS)
                .then((res) => {
                  if (type === "rider") {
                    props?.navigation?.navigate("Riderhome");
                  } else {
                    props?.navigation?.navigate("Home");
                  }
                  setLoading(false);
                })
                .catch((e) => {
                  console.log("errorUpdate", e);
                  alert("Something Went Wrong");
                  setLoading(false);
                });
            })
            .catch((error) => {
              console.error("GET Error:", error);
              alert("Something Went Wrong");
              setLoading(false);
            });
        })
        .catch((e) => {
          console.log(e);
          alert("Something Went Wrong");
          setLoading(false);
        });
    } else {
      setLoading(true);
      Quikify.update(`/users/${userForm?.id}`, userForm)
        .then((response) => {
          Quikify.get("/users", GET_USER_DETAILS)
            .then((res) => {
              if (type === "rider") {
                props?.navigation?.navigate("Riderhome");
              } else {
                props?.navigation?.navigate("Home");
              }
              setLoading(false);
            })
            .catch((e) => {
              console.log("errorUpdate", e);
              alert("Something Went Wrong");
              setLoading(false);
            });
        })
        .catch((error) => {
          console.error("GET Error:", error);
          alert("Something Went Wrong");
          setLoading(false);
        });
    }

    return;
  };

  return (
    <View style={styles.container}>
      <View style={styles.profilepicwrapper}>
        <Text style={styles.headertext}>Profile</Text>
        <View style={styles.framewrapper}>
          {image ? (
            <Image
              source={{ uri: image }}
              style={{ height: "100%", width: "100%" }}
              resizeMode="cover"
            />
          ) : userDetails?.profile ? (
            <Image
              source={{ uri: userDetails?.profile }}
              style={{ height: "100%", width: "100%" }}
              resizeMode="cover"
            />
          ) : (
            <Image
              source={require("../../assets/images/user.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="cover"
            />
          )}
        </View>
        <TouchableOpacity onPress={pickImage} style={styles.uploadiconbody}>
          <Image
            source={require("../../assets/icons/edit.png")}
            style={{ height: "50%", width: "50%" }}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <Text style={styles.headertext}>{userDetails?.name}</Text>
      </View>
      <ScrollView>
        <View style={styles.fieldwrapper}>
          <Text style={styles.labletext}>First Name</Text>
          <View style={styles.fieldbody}>
            <TextInput
              placeholder="Enter Your First Name"
              placeholderTextColor={light?.fieldtext}
              multiline={true}
              style={styles.text}
              value={userForm?.firstName}
              onChangeText={(val) => handleChangeValue("firstName", val)}
            />
          </View>
        </View>
        <View style={styles.fieldwrapper}>
          <Text style={styles.labletext}>Family Name</Text>
          <View style={styles.fieldbody}>
            <TextInput
              placeholder="Enter Your Family Name"
              placeholderTextColor={light?.fieldtext}
              multiline={true}
              style={styles.text}
              value={userForm?.lastName}
              onChangeText={(val) => handleChangeValue("lastName", val)}
            />
          </View>
        </View>
        <View style={styles.fieldwrapper}>
          <Text style={styles.labletext}>Email</Text>
          <View style={styles.fieldbody}>
            <TextInput
              placeholder="Enter Your Email"
              placeholderTextColor={light?.fieldtext}
              multiline={true}
              style={styles.text}
              value={userForm?.email}
              editable={false}
            />
          </View>
        </View>
        <View style={styles.fieldwrapper}>
          <Text style={styles.labletext}>Phone Number</Text>
          <View style={styles.fieldbody}>
            <TextInput
              placeholder="Enter Your Phone"
              placeholderTextColor={light?.fieldtext}
              multiline={true}
              style={styles.text}
              value={userForm?.phone}
              onChangeText={(val) => handleChangeValue("phone", val)}
              keyboardType="phone-pad"
            />
          </View>
        </View>
        <View style={styles.buttonWrapper}>
          <StandardButton
            disabled={loading}
            title={
              loading ? <ActivityIndicator size="small" color="#fff" /> : "Save"
            }
            onPress={onSave}
          />
        </View>
      </ScrollView>

      {!keyboardStatus && (
        <Bottommenu navigation={props?.navigation} active={"Editprofile"} />
      )}
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
  get_user_details: state.main.get_user_details,
});
export default connect(mapStateToProps, {})(Editprofile);
