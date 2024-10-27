import { useEffect, useState } from "react";
import {
  Text,
  View,
  useWindowDimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../../styles/Requestbooking/Thanksmodel";
import { AntDesign } from "@expo/vector-icons";
import { light } from "../../../scheme";
import StandardButton from "../../../globalComponents/StandardButton";
import { getPercent } from "../../../middleware";

const Thanksmodel = (props) => {
  let { onPress, onClosepress } = props;

  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <Modal transparent animationType="slide">
      <View style={{ flex: 1, backgroundColor: "#00000aaa" }}></View>

      <View style={styles.container}>
        <TouchableOpacity onPress={onClosepress} style={styles.closeicon}>
          <AntDesign name="close" size={20} color={light?.standardtext} />
        </TouchableOpacity>
        <View style={styles.successpicwrapper}>
          <Image
            source={require("../../../assets/icons/model.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text style={styles.pyamenttext}>Thank you</Text>
          <Text style={styles.yourmoneytext}>
            Thank you for your valuable feedback and tip
          </Text>
        </View>

        <View style={styles.btnwrapper}>
          <StandardButton
            onPress={onPress}
            customStyles={{ width: getPercent(80, width) }}
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
export default connect(mapStateToProps, {})(Thanksmodel);
