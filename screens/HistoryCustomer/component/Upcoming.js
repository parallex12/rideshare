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
import { styles as _styles } from "../../../styles/History/Upcoming";
import { light } from "../../../scheme";
import { ActivityIndicator } from "react-native";

const Upcoming = (props) => {
  let {
    time,
    color,
    item,
    showCard,
    setShowCard,
    index,
    onJoinPress,
    loading,
    user_id,
  } = props;

  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <TouchableOpacity
      onPress={() =>
        showCard === index ? setShowCard(false) : setShowCard(index)
      }
      style={styles.container}
    >
      <View style={styles.namewrapper}>
        <Text style={styles.nametext}>{item?.riderDetails?.name}</Text>
        <Text style={styles.mustandtext}>{item?.carDetails?.make}</Text>
        {showCard === index && (
          <>
            <Text style={styles.detailsTxt}>From : {item?.pickup}</Text>
            <Text style={styles.detailsTxt}>To : {item?.drop}</Text>
          </>
        )}
      </View>
      <View style={styles.sideWrapper}>
        <Text
          style={[
            styles.timetext,
            {
              color: color,
            },
          ]}
        >
          {time}
        </Text>
        {/* <TouchableOpacity onPress={onJoinPress} style={styles.smallBtn}>
          {loading === index ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.btnTxt}>
              {item?.joined_by?.includes(user_id) ? "Joined" : "Join"}
            </Text>
          )}
        </TouchableOpacity> */}
      </View>
    </TouchableOpacity>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Upcoming);
