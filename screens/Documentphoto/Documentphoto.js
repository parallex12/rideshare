import { useState } from "react";
import {
  Image,
  Text,
  View,
  useWindowDimensions,
  Button,
  TouchableOpacity,
  Modal,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Documentphoto/main";
import { Camera, CameraType } from "expo-camera";
import Picturetaker from "./component/Picturetaker";
import StandardButton from "../../globalComponents/StandardButton";
import { firebaseImageUpload } from "../../middleware";
import { Quikify } from "quikify";
import { getAuth } from "firebase/auth";
import { GET_USER_DETAILS } from "../../state-management/types/types";
import { ActivityIndicator } from "react-native";
const Rideridverification = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });
  const routetype = props?.route?.params;
  const type = props?.route?.params?.type;

  const [photo, setPhoto] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    const uid = getAuth().currentUser.uid;

    if (photo) {
      setLoading(true);
      firebaseImageUpload(photo)
        .then((res) => {
          let photoDetail = type + "Front";
          const data = { type: type, photoType: "front", photo: res?.url };
          const postData = { [photoDetail]: data };
          // const postData = { type: type, frontPhoto: res?.url };

          Quikify.update(`/users/${uid}`, postData)
            .then((res) => {
              setLoading(false);
              props?.navigation?.navigate("Rideridverification2", {
                type,
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
          onPress={
            onSubmit
            // routetype
            //   ? props?.navigation?.navigate("Riderhome")
            //   : props?.navigation?.navigate("Rideridverification2")
          }
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Rideridverification);
