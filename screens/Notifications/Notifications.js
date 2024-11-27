import { useEffect, useState } from "react";
import { Text, View, useWindowDimensions } from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Notifications/main";
import Notificationsheader from "./components/Notificationsheader";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Notifications = (props) => {
  let { } = props;

  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const notificationsData = [
    {
      title: "Payment confirm",
      desc: "Lorem ipsum dolor sit amet consectetur. Ultrici es tincidunt eleifend vitae",
      time: "15m min ago",
      read: false
    }, {
      title: "Payment confirm",
      desc: "Lorem ipsum dolor sit amet consectetur. Ultrici es tincidunt eleifend vitae",
      time: "20 min ago",
      read: true
    }, {
      title: "Payment confirm",
      desc: "Lorem ipsum dolor sit amet consectetur. Ultrici es tincidunt eleifend vitae",
      time: "30 min ago",
      read: true
    }, {
      title: "Payment confirm",
      desc: "Lorem ipsum dolor sit amet consectetur. Ultrici es tincidunt eleifend vitae",
      time: "1 hour ago",
      read: true
    },
    {
      title: "Payment confirm",
      desc: "Lorem ipsum dolor sit amet consectetur. Ultrici es tincidunt eleifend vitae",
      time: "Yesterday",
      read: true
    },
    {
      title: "Payment confirm",
      desc: "Lorem ipsum dolor sit amet consectetur. Ultrici es tincidunt eleifend vitae",
      time: "Yesterday",
      read: true
    },
  ]

  return (
    <View style={styles.container}>
      <Notificationsheader
        title={"Notification"}
        navigation={props?.navigation}
      />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.daytextwrapper}>
          <Text style={styles.daytext}>Today</Text>
        </View>
        {notificationsData.map((item, index) => {
          return (
            <View key={index} style={[styles.contentwrapper, { backgroundColor: item?.read ? "#fff" : "#FFFBF5" }]}>
              <Text style={styles.paymenttext}>{item?.title}</Text>
              <Text style={styles.timetext}>
                {item?.desc}
              </Text>
              <Text style={styles.timetext}>{item?.time}</Text>
            </View>
          );
        })}
        <View style={styles.daytextwrapper}>
          <Text style={styles.daytext}>Yesterday</Text>
        </View>
        {notificationsData.map((item, index) => {
          if (index < 4) return
          return (
            <View key={index} style={[styles.contentwrapper, { backgroundColor: item?.read ? "#fff" : "#FFFBF5" }]}>
              <Text style={styles.paymenttext}>{item?.title}</Text>
              <Text style={styles.timetext}>
                {item?.desc}
              </Text>
              <Text style={styles.timetext}>{item?.time}</Text>
            </View>
          );
        })}
      </KeyboardAwareScrollView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Notifications);
