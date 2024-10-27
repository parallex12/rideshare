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
import { styles as _styles } from "../../../styles/Home/Locationsearch";
import Globalicons from "../../../globalComponents/Globalicons";
import StandardButton from "../../../globalComponents/StandardButton";
import { getPercent } from "../../../middleware";

const Locationsearch = (props) => {
  let { onPress, onNextpress } = props;

  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.searchbody}>
        <Globalicons image={require("../../../assets/icons/search.png")} />
        <View style={{ flex: 1, paddingLeft: 10 }}>
          <Text style={styles.wheretext}>Where would you go?</Text>
        </View>
        <Globalicons image={require("../../../assets/icons/heart.png")} />
      </View>
      <StandardButton
        onPress={onNextpress}
        customStyles={{ width: getPercent(80, width) }}
        title={"Next"}
      />
    </TouchableOpacity>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Locationsearch);
