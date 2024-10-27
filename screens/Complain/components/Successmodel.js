import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../../styles/Complain/Successmodel";
import { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import StandardButton from "../../../globalComponents/StandardButton";
import { getPercent } from "../../../middleware";

const Complain = (props) => {
  let { onPress } = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <Modal transparent animationType="slide">
      <View style={{ flex: 1, backgroundColor: "#000000aa" }}></View>
      <View style={styles.container}>
        <View style={styles.framebody}>
          <Image
            source={require("../../../assets/icons/model.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.textbody}>
          <Text style={styles.labletext}>Send successful</Text>
          <Text style={styles.Complaintext}>
            Your complain has been send successful
          </Text>
        </View>
        <View>
          <StandardButton
            customStyles={{ width: getPercent(80, width) }}
            onPress={onPress}
            title={"Back Home"}
          />
        </View>
      </View>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Complain);
