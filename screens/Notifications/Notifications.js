import { useEffect, useState } from "react";
import { Text, View, useWindowDimensions } from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Notifications/main";
import Notificationsheader from "./components/Notificationsheader";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Notifications = (props) => {
  let {} = props;

  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

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
        {[1, 2, 3, 4]?.map((item, index) => {
          return (
            <View key={index} style={styles.contentwrapper}>
              <Text style={styles.paymenttext}>Payment confirm</Text>
              <Text style={styles.timetext}>
                Lorem ipsum dolor sit amet consectetur. Ultrici es tincidunt
                eleifend vitae
              </Text>
              <Text style={styles.timetext}>15 min ago.</Text>
            </View>
          );
        })}
        <View style={styles.daytextwrapper}>
          <Text style={styles.daytext}>Yesterday</Text>
        </View>
        {[1, 2]?.map((item, index) => {
          return (
            <View key={index} style={styles.contentwrapper}>
              <Text style={styles.paymenttext}>Payment confirm</Text>
              <Text style={styles.timetext}>
                Lorem ipsum dolor sit amet consectetur. Ultrici es tincidunt
                eleifend vitae
              </Text>
              <Text style={styles.timetext}>15 min ago.</Text>
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
