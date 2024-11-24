import { useRef, useState } from "react";
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
import { styles as _styles } from "../../../styles/Documentphoto/Pickertaker";
import { useCameraPermissions, CameraView } from "expo-camera";
import StandardButton from "../../../globalComponents/StandardButton";
import { getPercent } from "../../../middleware";
const Rideridverification = (props) => {
  let { cameraPhoto, setCameraPhoto } = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });
  const [permission, requestPermission] = useCameraPermissions();
  const ref = useRef(null);


  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }


  _takePhoto = async () => {
    if (cameraPhoto) {
      setCameraPhoto(null);
      return;
    }
    const photo = await ref.current.takePictureAsync();
    setCameraPhoto(photo?.uri);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.camera}>
        {cameraPhoto ? (
          <Image
            source={{ uri: cameraPhoto }}
            style={{ height: "100%", width: "100%" }}
            resizeMode="cover"
          />
        ) : (
          <CameraView
            style={styles.camera}
            ref={ref}
            ratio="4:3"
          ></CameraView>
        )}
      </View>
      <StandardButton
        customStyles={{ marginBottom: getPercent(2, height) }}
        title="Take Picture"
        onPress={_takePhoto}
      />
      {/* <StandardButton title="Take Again" onPress={_takePhoto} /> */}
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Rideridverification);
