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
import { styles as _styles } from "../../styles/History/main";
import Bottommenu from "../../globalComponents/Bottommenu";
import Notificationsheader from "../Notifications/components/Notificationsheader";
import { light } from "../../scheme";
import Upcoming from "./component/Upcoming";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Quikify } from "quikify";
import { GET_ALL_JOURNEYS } from "../../state-management/types/types";
import { getAuth } from "firebase/auth";
import { ActivityIndicator } from "react-native";
import { formatDate } from "../../middleware";

const HistoryCustomer = (props) => {
  let {} = props;

  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [activebtn, setActivebtn] = useState(0);
  const [upcoming, setUpcoming] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [cancelled, setCancelled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [journeys, setJourneys] = useState([]);
  const [showCard, setShowCard] = useState(false);

  const user_id = getAuth()?.currentUser?.uid;

  let btns = ["Upcoming", "Completed", "Cancelled"];

  const _handleactivebtn = (index) => {
    setActivebtn(index);
    if (btns?.[index] === "Upcoming") {
      setUpcoming(true);
      setCompleted(false);
      setCancelled(false);
    } else if (btns?.[index] === "Completed") {
      setCompleted(true);
      setUpcoming(false);
      setCancelled(false);
    } else if (btns?.[index] === "Cancelled") {
      setCancelled(true);
      setUpcoming(false);
      setCompleted(false);
    }
  };

  useEffect(() => {
    Quikify.get(`/journey`, GET_ALL_JOURNEYS)
      .then((res) => {
        let myBookings = res?.filter((item) =>
          item?.joined_by?.includes(user_id)
        );
        setJourneys(myBookings);
        setLoading(false);
        return;
      })
      .catch((e) => {
        console.log("heress", e);
        setLoading(false);
        return;
      });
    setJourneys(props?.get_all_journeys);
  }, [props?.get_user_details]);

  const onJoin = (item, index) => {
    setLoading(index);
    Quikify.update(`/journey/${item?.id}`, {
      ...item,
      joined_by: [user_id],
    })
      .then((response) => {
        Quikify.get("/journey/status/available", GET_ALL_JOURNEYS)
          .then((res) => {
            setJourneys(res);
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
      <Notificationsheader title={"History"} navigation={props?.navigation} />
      <View style={styles.recordheadingwrapper}>
        {btns?.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => _handleactivebtn(index)}
              key={index}
              style={[
                styles.btnbody,
                {
                  backgroundColor:
                    activebtn === index ? light?.btnbody : "transparent",
                },
              ]}
            >
              <Text
                style={[
                  styles.btntext,
                  {
                    color:
                      activebtn === index
                        ? light?.BtnText
                        : light?.standardtext,
                  },
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        {loading ? (
          <View style={styles.loader}>
            <ActivityIndicator size="large" />
          </View>
        ) : journeys?.length === 0 ? (
          <View style={styles.errorWrapper}>
            <Text style={styles.errorTxt}>No Rides Found</Text>
          </View>
        ) : upcoming ? (
          <View style={styles.wrapper}>
            {journeys?.map((item, index) => {
              if (item?.status === "completed") return;
              return (
                <Upcoming
                  key={index}
                  time={formatDate(item?.date)}
                  color={light?.standardtext}
                  item={item}
                  showCard={showCard}
                  setShowCard={setShowCard}
                  index={index}
                  onJoinPress={() => onJoin(item, index)}
                  loading={loading}
                  user_id={user_id}
                />
              );
            })}
          </View>
        ) : null}
        {completed ? (
          <View style={styles.wrapper}>
            {journeys?.map((item, index) => {
              if (item?.status !== "completed") return;
              return (
                <Upcoming
                  key={index}
                  time={formatDate(item?.date)}
                  color={light?.standardtext}
                  item={item}
                  showCard={showCard}
                  setShowCard={setShowCard}
                  index={index}
                  onJoinPress={() => onJoin(item, index)}
                  loading={loading}
                  user_id={user_id}
                />
              );
            })}
          </View>
        ) : null}
        {/* 
        {cancelled ? (
          <View style={styles.wrapper}>
            {[1, 2, 3, 4, 5, 5]?.map((item, index) => {
              return (
                <Upcoming
                  key={index}
                  name={"Nate"}
                  area={"Mustang Shelby GT"}
                  time={"Cancel"}
                  color={"#D32F2F"}
                />
              );
            })}
          </View>
        ) : null} */}
      </KeyboardAwareScrollView>
      <Bottommenu active={"History"} navigation={props?.navigation} />
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
  get_all_journeys: state.main.get_all_journeys,
  get_user_details: state.main.get_user_details,
});
export default connect(mapStateToProps, {})(HistoryCustomer);
