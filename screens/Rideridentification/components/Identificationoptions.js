import { useState } from "react";
import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../../styles/Rideridentification/Identificationoptions";

const Identificationoptions = (props) => {
  let { image, title, image2, onPress } = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.iconbody}>
        <Image
          source={image}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.titlebody}>
        <Text style={styles.titletext}>{title}</Text>
      </View>
      <View style={styles.iconbody}>
        <Image
          source={image2}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </View>
    </TouchableOpacity>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Identificationoptions);
