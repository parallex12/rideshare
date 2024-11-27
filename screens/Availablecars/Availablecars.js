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
import { styles as _styles } from "../../styles/Availablecars/main";
import Globalheader from "../../globalComponents/Globalheader";
import Resultsforsearch from "./components/Resultsforsearch";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { GET_ALL_JOURNEYS } from "../../state-management/types/types";
import { Quikify } from "quikify";
import getDistance from "geolib/es/getDistance";

const Availablecars = (props) => {
  let { } = props;

  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  let data = props?.route?.params?.data;
  const [availableRides, setAvailableRides] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Quikify.get("/journey/status/available", GET_ALL_JOURNEYS)
      .then((res) => {
        setAvailableRides(res);
        return;
      })
      .catch((e) => {
        console.log("heress", e);
        setLoading(false);
        return;
      });
    // setAvailableRides(props?.get_all_journeys);
  }, []);

  useEffect(() => {
    if (props?.get_all_journeys?.length) {
      let journeys = [];
      props?.get_all_journeys?.map((item) => {
        let distance = getDistance(item?.pickupCoords, data?.pickupCoords);
        journeys?.push({ ...item, distance: distance });
      });
      let filtered = journeys?.filter(
        (item) => item?.carDetails?.transportType === data?.id
        // item?.carDetails?.transportType === data?.carDetails?.transportType
      );
      setAvailableRides(filtered);
      setLoading(false);
    }
  }, [props?.get_all_journeys]);

  return (
    <View style={styles.container}>
      <Globalheader navigation={props?.navigation} />
      <View style={styles.lablewrapper}>
        <Text style={styles.selecttext}>Avaiable {data?.type} for ride</Text>
        <Text style={styles.results}>
          {availableRides?.length} {data?.type} found
        </Text>
      </View>
      {loading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" />
        </View>
      ) : availableRides?.length === 0 ? (
        <View style={styles.txtWrapper}>
          <Text style={styles.errorTxt}>No Rides Found</Text>
        </View>
      ) : (
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          {availableRides
            ?.sort((a, b) => a?.distance - b?.distance)
            ?.map((item, index) => {
              return (
                <Resultsforsearch
                  onBtnPress={() =>
                    props?.navigation?.navigate("Requestbooking", {
                      data: item,
                    })
                  }
                  key={index}
                  item={item}
                  user_id={props?.get_user_details?.id}
                // onBookPress={() => onBookRide(item, index)}
                />
              );
            })}
        </KeyboardAwareScrollView>
      )}
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
  get_all_journeys: state.main.get_all_journeys,
  get_user_details: state.main.get_user_details,
});
export default connect(mapStateToProps, {})(Availablecars);
