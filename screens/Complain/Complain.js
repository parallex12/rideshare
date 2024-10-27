import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Complain/main";
import Notificationsheader from "../Notifications/components/Notificationsheader";
import StandardButton from "../../globalComponents/StandardButton";
import { light } from "../../scheme";
import { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import Successmodel from "./components/Successmodel";

const Complain = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [complainreason, setComplainreason] = useState("Vehicle not clean");
  const [isopen, setisOpen] = useState(false);
  const [ismodelvivisble, setIsmodelvivisble] = useState(false);

  options = ["Vehicle not clean", "Vehicle not good", "Vehicle"];

  return (
    <View style={styles.container}>
      <Notificationsheader navigation={props?.navigation} title={"Complain"} />
      <TouchableOpacity
        onPress={() => setisOpen(!isopen)}
        style={styles.pikeropener}
      >
        <Text style={styles.inputstyles}>{complainreason}</Text>
        <Entypo
          name="chevron-small-down"
          size={24}
          color={light?.standardtext}
        />
      </TouchableOpacity>
      {isopen ? (
        <View style={styles.pickerdropdown}>
          {options.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setisOpen(false);
                  setComplainreason(item);
                }}
                key={index}
                style={styles.pikercontainer}
              >
                <Text style={styles.inputstyles}>{item}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      ) : null}
      <View style={styles.commentbody}>
        <TextInput
          placeholder={"Write your complain here (minimum 10 characters)"}
          placeholderTextColor={light?.fieldtext}
          multiline
          style={styles.input}
        />
      </View>
      <View style={styles.btnwrapper}>
        <StandardButton
          title={"Submit"}
          onPress={() => setIsmodelvivisble(true)}
        />
      </View>

      {ismodelvivisble && (
        <Successmodel
          onPress={() => {
            setIsmodelvivisble(false);
            props?.navigation?.navigate("Home");
          }}
        />
      )}
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Complain);
