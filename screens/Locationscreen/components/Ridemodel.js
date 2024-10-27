import { useEffect, useState } from "react";
import {
  Text,
  View,
  useWindowDimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../../styles/Locationscreen/Ridermodel";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { light } from "../../../scheme";
import StandardButton from "../../../globalComponents/StandardButton";
import { getTimeOnly } from "../../../middleware";

const Selectaddressmodel = (props) => {
  let { onPress, onclosepress, onBtnPress, data, distance } = props;

  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  console.log(data?.riderDetails);

  return (
    <Modal transparent animationType="slide">
      <View style={{ flex: 1, backgroundColor: "#00000aaa" }}></View>
      <View style={styles.container}>
        <TouchableOpacity onPress={onclosepress} style={styles.closeiconbody}>
          <AntDesign name="close" size={20} color={light?.standardtext} />
        </TouchableOpacity>
        <Text style={styles.recenttext}>
          {data?.status === "running"
            ? `Your driver is coming at ${getTimeOnly(data?.date)}`
            : `5 mintues left to target place`}
        </Text>
        <View style={styles.userdetailswrapper}>
          <View style={styles.profilepic}>
            <Image
              source={
                data?.riderDetails?.profile
                  ? { uri: data?.riderDetails?.profile }
                  : require("../../../assets/images/user.png")
              }
              style={{ height: "100%", width: "100%" }}
              resizeMode="cover"
            />
          </View>
          <View style={{ flex: 1, paddingLeft: 10 }}>
            <Text style={styles.nametext}>{data?.riderDetails?.name}</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Entypo name="location-pin" size={12} color="black" />
              <Text style={styles.meterstext}>{distance}m (5mins away)</Text>
            </View>
            {/* <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign name="star" size={12} color={light?.btnbody} />
              <Text style={styles.meterstext}>800m (5mins away)</Text>
            </View> */}
          </View>
          <View style={styles.carpic}>
            <Image
              source={
                data?.carDetails?.carImage
                  ? { uri: data?.carDetails?.carImage }
                  : require("../../../assets/images/car1.png")
              }
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 10,
            justifyContent: "space-between",
            marginVertical: 10,
          }}
        >
          <Text style={styles.recenttext}>Payment method</Text>
          <Text style={styles.price}>$220.00</Text>
        </View>
        <View style={styles.recentbody}>
          <View style={styles.cardpicturebody}>
            <Image
              source={require("../../../assets/icons/master.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </View>
          <View style={styles.textbody}>
            <Text style={styles.recentlocationstext}>**** **** **** 8970</Text>
            <Text style={styles.recentaddresstext}>Expires: 12/26</Text>
          </View>
        </View>

        <View style={styles.btnwrappr}>
          <StandardButton title={"Message"} onPress={onBtnPress} />
        </View>
      </View>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Selectaddressmodel);
