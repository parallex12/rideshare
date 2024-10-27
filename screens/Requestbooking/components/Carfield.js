import { useEffect, useState } from "react";
import {
  Text,
  View,
  useWindowDimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import { styles as _styles } from "../../../styles/Requestbooking/Carfield";

const Carfield = (props) => {
  let { data } = props;

  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "space-around", flex: 1 }}>
        <Text style={styles.carname}>{data?.make}</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <AntDesign name="star" size={15} color="#FBC02D" />
          <Text style={styles.ratting}>4.9 (531 reviews)</Text>
        </View>
      </View>
      <View style={styles.carwrapper}>
        <Image
          source={
            data?.carImage
              ? { uri: data?.carImage }
              : require("../../../assets/images/car1.png")
          }
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Carfield);
