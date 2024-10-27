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
import { styles as _styles } from "../../styles/Request/main";
import Globalheader from "../../globalComponents/Globalheader";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Notificationsheader from "../Notifications/components/Notificationsheader";
import Card from "./components/Card";
import { Quikify } from "quikify";
import {
  GET_ALL_JOURNEYS,
  GET_ALL_USERS,
} from "../../state-management/types/types";
import { ActivityIndicator } from "react-native";

const Request = (props) => {
  let {} = props;

  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [loading, setLoading] = useState(true);
  const [btnLoading, setBtnLoading] = useState(true);
  const [journeys, setJourneys] = useState([]);

  const user_id = props?.get_user_details?.id;

  useEffect(() => {
    Quikify.get(`/journey/created_by/${user_id}`, GET_ALL_JOURNEYS)
      .then((res) => {
        let requests = res?.filter(
          (item) => item?.joined_by && item?.status === "requested"
        );
        setJourneys(requests);
        setLoading(false);
        return;
      })
      .catch((e) => {
        console.log("heress", e);
        setLoading(false);
        return;
      });
  }, [props?.get_user_details, btnLoading]);

  const onAccept = (item, index) => {
    setBtnLoading(index);
    Quikify.update(`/journey/${item?.id}`, {
      ...item,
      status: "running",
    })
      .then((response) => {
        Quikify.get(`/journey/created_by/${user_id}`, GET_ALL_JOURNEYS)
          .then((res) => {
            setBtnLoading(false);
          })
          .catch((e) => {
            console.log("dddd", e);
            setBtnLoading(false);
          });
      })
      .catch((error) => {
        console.error("Update Journey Error:", error);
        alert("Something Went Wrong");
        setBtnLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <Notificationsheader title={"Requests"} navigation={props?.navigation} />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        {loading ? (
          <View style={styles.loader}>
            <ActivityIndicator size="large" />
          </View>
        ) : journeys?.length === 0 ? (
          <View style={styles.errorTxtWrapper}>
            <Text style={styles.errorTxt}>No Requests Found </Text>
          </View>
        ) : (
          journeys?.map((item, index) => {
            return (
              <Card
                onBtnPress={() => onAccept(item, index)}
                // onBtnPress={() => props?.navigation?.navigate("Requestbooking")}
                key={index}
                item={item}
                loading={btnLoading}
                index={index}
              />
            );
          })
        )}
      </KeyboardAwareScrollView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
  get_all_journeys: state.main.get_all_journeys,
  get_user_details: state.main.get_user_details,
});
export default connect(mapStateToProps, {})(Request);
