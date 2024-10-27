import { useEffect, useState } from "react";
import {
  Text,
  View,
  useWindowDimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../../styles/Request/Card";
import Globalicons from "../../../globalComponents/Globalicons";
import { light } from "../../../scheme";
import { formatDate, getTimeOnly } from "../../../middleware";

const Card = (props) => {
  let { onBtnPress, item, loading, index } = props;

  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <View style={styles.userdetailswrapper}>
        <View style={styles.picbody}>
          <Image
            source={
              item?.customerDetails?.profile
                ? { uri: item?.customerDetails?.profile }
                : require("../../../assets/images/user.png")
            }
            style={{ height: "100%", width: "100%" }}
            resizeMode="cover"
          />
        </View>
        <View style={styles.namewrapper}>
          <Text style={styles.nametext}>{item?.customerDetails?.name}</Text>
          <Text style={styles.meters}>800m</Text>
          <Text style={styles.meters}>{getTimeOnly(item?.date)}</Text>
        </View>
        <Text style={styles.nametext}>{formatDate(item?.date)}</Text>
      </View>
      <View style={styles.btnwrapper}>
        <TouchableOpacity onPress={onBtnPress} style={styles.cancelbtn}>
          <Text
            style={[
              styles.btntext,
              {
                color: light?.btnbody,
              },
            ]}
          >
            Cancel
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onBtnPress} style={styles.btnbody}>
          {loading === index ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.btntext}>Accept</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Card);
