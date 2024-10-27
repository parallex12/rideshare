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
import { styles as _styles } from "../../../styles/Requestbooking/Paymentmethod";

const Paymentmethod = (props) => {
  let { image, cardnum, expiry, onCardpress } = props;

  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <TouchableOpacity onPress={onCardpress} style={styles.container}>
      <View style={styles.imagebody}>
        <Image
          source={image}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.textbody}>
        <Text style={styles.notext}>{cardnum}</Text>
        <Text style={styles.expirytext}>{expiry}</Text>
      </View>
    </TouchableOpacity>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Paymentmethod);
