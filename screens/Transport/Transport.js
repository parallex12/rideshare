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
import { styles as _styles } from "../../styles/Transport/main";
import Notificationsheader from "../Notifications/components/Notificationsheader";
import { transportTypes } from "../../middleware";

const Transport = (props) => {
  let {} = props;

  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  let data = props?.route?.params?.data;

  return (
    <View style={styles.container}>
      <Notificationsheader
        title={"Select transport"}
        navigation={props?.navigation}
      />
      <View style={styles.lablewrapper}>
        <Text style={styles.selecttext}>Select your transport</Text>
      </View>
      <View style={styles.wrapper}>
        {transportTypes?.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() =>
                props?.navigation?.navigate("Availablecars", {
                  data: { ...data, type: item?.type, id: item?.id },
                })
              }
              style={styles.carbody}
            >
              <Image
                source={item?.img}
                style={{ height: "50%", width: "50%" }}
                resizeMode="contain"
              />
              <Text style={styles.carttitletext}>{item?.type}</Text>
            </TouchableOpacity>
          );
        })}

        {/* <TouchableOpacity
          onPress={() => props?.navigation?.navigate("Availablecars")}
          style={styles.carbody}
        >
          <Image
            source={require("../../assets/images/Car.png")}
            style={{ height: "50%", width: "50%" }}
            resizeMode="contain"
          />
          <Text style={styles.carttitletext}>Cars</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props?.navigation?.navigate("Locationscreen")}
          style={styles.carbody}
        >
          <Image
            source={require("../../assets/images/bus.png")}
            style={{ height: "50%", width: "50%" }}
            resizeMode="contain"
          />
          <Text style={styles.carttitletext}>Bus</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={() => props?.navigation?.navigate("Complain")}
          onPress={() => props?.navigation?.navigate("Request")}
          style={styles.carbody}
        >
          <Image
            source={require("../../assets/images/Cycle.png")}
            style={{ height: "50%", width: "50%" }}
            resizeMode="contain"
          />
          <Text style={styles.carttitletext}>Cycble</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props?.navigation?.navigate("Availablecars")}
          style={styles.carbody}
        >
          <Image
            source={require("../../assets/images/Taxi.png")}
            style={{ height: "50%", width: "50%" }}
            resizeMode="contain"
          />
          <Text style={styles.carttitletext}>Taxi</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Transport);
