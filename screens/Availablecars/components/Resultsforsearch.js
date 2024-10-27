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
import { styles as _styles } from "../../../styles/Availablecars/Resutlsforsearch";
import Globalicons from "../../../globalComponents/Globalicons";
import { formatDate, getTimeOnly } from "../../../middleware";

const Resultsforsearch = (props) => {
  let { onBtnPress, item, user_id } = props;

  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <View style={styles.carnamedetailswrapper}>
        <Text style={styles.nametext}>{item?.carDetails?.make}</Text>
        <Text style={styles.automatictext}>
          {item?.carDetails?.transmission} | {item?.carDetails?.seatingCapacity}{" "}
          seats | Octane
        </Text>
        <View style={styles.timebody}>
          <Globalicons image={require("../../../assets/icons/11.png")} />
          <Text style={styles.meterstext}>{item?.distance}m</Text>
        </View>
        <View style={styles.timebody}>
          <Globalicons image={require("../../../assets/icons/15.png")} />
          <Text style={styles.meterstext}>{getTimeOnly(item?.date)}</Text>
        </View>
        <Text style={styles.nametext}>{formatDate(item?.date)}</Text>
      </View>
      <View style={styles.btnwrapper}>
        <View style={styles.imagebody}>
          <Image
            source={{ uri: item?.carDetails?.carImage }}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
        <TouchableOpacity onPress={onBtnPress} style={styles.btnbody}>
          <Text style={styles.btntext}>
            {item?.joined_by?.includes(user_id) ? "Booked" : "Ride now"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Resultsforsearch);
