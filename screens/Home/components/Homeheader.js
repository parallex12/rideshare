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
import { Homeheaderstyles } from "../../../styles/Global/main";

const Home = (props) => {
  let { onBellPress, onMenuPress } = props;

  let { width, height } = useWindowDimensions();
  let styles = Homeheaderstyles({ width, height });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onMenuPress} style={styles.menubaricon}>
        <Image
          source={require("../../../assets/icons/h1.png")}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onBellPress} style={styles.bellicon}>
        <Image
          source={require("../../../assets/icons/h2.png")}
          style={{ height: "70%", width: "70%" }}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Home);
