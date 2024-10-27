import { useState } from "react";
import {
  Image,
  Text,
  View,
  useWindowDimensions,
  Button,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Documentphoto/main";
import { Camera, CameraType } from "expo-camera";
import Picturetaker from "../Documentphoto/component/Picturetaker";
import StandardButton from "../../globalComponents/StandardButton";
import { getAuth } from "firebase/auth";
import { firebaseImageUpload } from "../../middleware";
import { Quikify } from "quikify";
import { GET_USER_DETAILS } from "../../state-management/types/types";
const Rideridverification = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });
  const type = props?.route?.params?.type;

  const [photo, setPhoto] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    const uid = getAuth().currentUser.uid;
    if (photo) {
      setLoading(true);
      firebaseImageUpload(photo)
        .then((res) => {
          let photoDetail = type + "Back";
          const data = { type: type, photoType: "back", photo: res?.url };
          const postData = { [photoDetail]: data };
          Quikify.update(`/users/${uid}`, postData)
            .then((res) => {
              Quikify.get("/users", GET_USER_DETAILS)
                .then((res) => {
                  setLoading(false);
                  props?.navigation?.navigate("Rideridentification");
                })
                .catch((e) => {
                  setLoading(false);
                  alert("Something Went Wrong Try Again");
                  props?.navigation?.navigate("Rideridentification");
                  console.log("errorUpdate", e);
                });
            })
            .catch((error) => {
              alert("Something Went Wrong Try Again");
              props?.navigation?.navigate("Rideridentification");
              setLoading(false);
              console.error("Upload Error:", error);
            });
        })
        .catch((e) => {
          console.log(e);
          setLoading(false);
          alert("Something Went Wrong Try Again");
          props?.navigation?.navigate("Rideridentification");
        });
    } else {
      alert("Please take picture of your document");
    }
  };

  return (
    <View style={styles.container}>
      {loading && (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      )}
      <Picturetaker cameraPhoto={photo} setCameraPhoto={setPhoto} />
      <View style={styles.btnwrapper}>
        <StandardButton
          title={"Confirm"}
          // onPress={() => props?.navigation?.navigate("Lisenceverification")}
          onPress={onSubmit}
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Rideridverification);
