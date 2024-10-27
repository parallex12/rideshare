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
import { styles as _styles } from "../../styles/Requestbooking/main";
import Notificationsheader from "../Notifications/components/Notificationsheader";
import Globalicons from "../../globalComponents/Globalicons";
import Carfield from "./components/Carfield";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Paymentmethod from "./components/Paymentmethod";
import StandardButton from "../../globalComponents/StandardButton";
import Paymentsuccessmodel from "./components/Paymentsuccessmodel";
import Thanksmodel from "./components/Thanksmodel";
import { formatDate, getTimeOnly } from "../../middleware";
import { Quikify } from "quikify";
import { GET_ALL_JOURNEYS } from "../../state-management/types/types";
import { ActivityIndicator } from "react-native";

const Requestbooking = (props) => {
  let {} = props;

  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  let rideData = props?.route?.params?.data;
  let user_id = props?.get_user_details?.id;

  const [ispaymanetmodelvisible, setIspaymanetmodelvisible] = useState(false);
  const [isthanksmodelvisible, setisThanksmodelvisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const onBookRide = () => {
    setLoading(true);
    Quikify.update(`/journey/${rideData?.id}`, {
      ...rideData,
      joined_by: user_id,
      status: "requested",
      customerDetails: props?.get_user_details,
    })
      .then((response) => {
        Quikify.get("/journey/status/available", GET_ALL_JOURNEYS)
          .then((res) => {
            // props?.navigation?.navigate("Home");
            setisThanksmodelvisible(true);
            setLoading(false);
            return;
          })
          .catch((e) => {
            console.log("heress", e);
            setLoading(false);
            return;
          });
      })
      .catch((error) => {
        console.error("Update Journey Error:", error);
        alert("Something Went Wrong");
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <Notificationsheader title={"Request"} navigation={props?.navigation} />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.pickanddropdetailswrapper}>
          <View style={styles.iconwrapper}>
            <View style={styles.currentlocaicon}>
              <Globalicons image={require("../../assets/icons/red.png")} />
            </View>
            <View style={styles.lineicon}>
              <Image
                source={require("../../assets/icons/Line.png")}
                style={{ height: "100%", width: "100%" }}
                resizeMode="contain"
              />
            </View>
            <View style={styles.currentlocaicon}>
              <Globalicons image={require("../../assets/icons/green.png")} />
            </View>
          </View>
          <View style={styles.textwrapper}>
            <View style={styles.textbody}>
              <Text style={styles.currentext}>Pickup location</Text>
              <Text style={styles.rdtext}>{rideData?.pickup}</Text>
            </View>
            <View style={styles.textbody}>
              <Text style={styles.currentext}>Drop Location</Text>
              <Text style={styles.rdtext}>{rideData?.drop}</Text>
            </View>
          </View>
        </View>
        <Carfield data={rideData?.carDetails} />
        <View style={styles.datebody}>
          <Text style={styles.rdtext}>{formatDate(rideData?.date)}</Text>
        </View>
        <View style={styles.datebody}>
          <Text style={styles.rdtext}>{getTimeOnly(rideData?.date)}</Text>
        </View>
        {/* <Text style={styles.selectpaymenttext}>Select payment method</Text>
        <Paymentmethod
          // onCardpress
          image={require("../../assets/icons/visa.png")}
          cardnum={"**** **** **** 8970"}
          expiry={"Expires: 12/26"}
        />
        <Paymentmethod
          image={require("../../assets/icons/paypal.png")}
          cardnum={"**** **** **** 8970"}
          expiry={"Expires: 12/26"}
        />
        <Paymentmethod
          image={require("../../assets/icons/master.png")}
          cardnum={"**** **** **** 8970"}
          expiry={"Expires: 12/26"}
        />
        <Paymentmethod
          image={require("../../assets/icons/cash.png")}
          cardnum={"**** **** **** 8970"}
          expiry={"Expires: 12/26"}
        /> */}
        <View style={styles.btnwraper}>
          <StandardButton
            // onPress={() => setIspaymanetmodelvisible(true)}
            onPress={onBookRide}
            disabled={loading}
            title={
              loading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                "Confirm Booking"
              )
            }
          />
        </View>

        {ispaymanetmodelvisible && (
          <Paymentsuccessmodel
            onClosepress={() => setIspaymanetmodelvisible(false)}
            onPress={() => {
              setIspaymanetmodelvisible(false);
              setisThanksmodelvisible(true);
            }}
          />
        )}
        {isthanksmodelvisible && (
          <Thanksmodel
            onClosepress={() => setIspaymanetmodelvisible(false)}
            onPress={() => props?.navigation?.navigate("Home")}
          />
        )}
      </KeyboardAwareScrollView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
  get_user_details: state.main.get_user_details,
});
export default connect(mapStateToProps, {})(Requestbooking);
