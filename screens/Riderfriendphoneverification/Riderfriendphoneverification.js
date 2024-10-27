import { useState } from "react";
import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Enterphone/main";
import Globalheader from "../../globalComponents/Globalheader";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { CountryPicker } from "react-native-country-codes-picker";
import { FontAwesome5 } from "@expo/vector-icons";
import { light } from "../../scheme";
import StandardButton from "../../globalComponents/StandardButton";

const Riderfriendphoneverification = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState("+1");
  const [countryflag, setCountryflag] = useState();
  const [number, setNumber] = useState("");

  const handlecountrypicker = (item) => {
    setShow(!show);
    setCountryCode(item?.dial_code);
    setCountryflag(item?.flag);
  };

  return (
    <View style={styles.container}>
      <Globalheader navigation={props?.navigation} />
      <View style={styles.enterphonenumberwrapper}>
        <Text style={styles.enterphonenumbertext}>
          Enter your Friend phone number
        </Text>
      </View>

      <View style={styles.customstyles}>
        <TouchableOpacity onPress={handlecountrypicker} style={styles.iconbody}>
          <CountryPicker
            show={show}
            pickerButtonOnPress={(item) => {
              handlecountrypicker(item);
            }}
            style={{ modal: { flex: 0.5 } }}
          />

          <Text style={styles.code}>
            {countryflag ? (
              countryflag
            ) : (
              <FontAwesome5 name="flag-usa" size={10} color="#9A9A9A" />
            )}
          </Text>
          <Text style={styles.code}>{countryCode}</Text>
        </TouchableOpacity>

        <View style={styles.inputstyles}>
          <TextInput
            style={styles.field}
            multiline
            placeholder="Your Mobile Number"
            placeholderTextColor={light?.fieldtext}
            value={number}
            onChangeText={(val) => setNumber(val)}
            keyboardType="decimal-pad"
          />
        </View>
      </View>
      <View style={styles.btnwrapper}>
        <StandardButton
          title={"Send Verification code"}
          onPress={() => props?.navigation?.navigate("Riderfriendentercode")}
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Riderfriendphoneverification);
