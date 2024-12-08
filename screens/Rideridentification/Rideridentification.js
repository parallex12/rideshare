import { useEffect, useState } from "react";
import { Text, View, useWindowDimensions } from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Rideridentification/main";
import Globalheader from "../../globalComponents/Globalheader";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Identificationoptions from "./components/Identificationoptions";
import StandardButton from "../../globalComponents/StandardButton";
import { Quikify } from "quikify";
import { GET_USER_DETAILS } from "../../state-management/types/types";
import { getAuth } from "firebase/auth";
import { SignOut } from "../../state-management/auth/auth";
import { light } from "../../scheme";

const Rideridentification = (props) => {
  let { } = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });
  const uid = getAuth().currentUser.uid;

  const [isselect, setisSelect] = useState("");
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    setUserDetails(props?.get_user_details);
    if (
      (props?.get_user_details?.idFront ||
        props?.get_user_details?.passportFront) &&
      (props?.get_user_details?.idBack || props?.get_user_details?.idFront) &&
      props?.get_user_details?.licenseBack &&
      props?.get_user_details?.licenseFront
    ) {
      alert("Please Wait! \nYour verification is under process");
      Quikify.update(`/users/${uid}`, { verification: "complete" })
        .then((res) => {
          // props?.navigation?.navigate("Login");
          props?.SignOut();
        })
        .catch((error) => {
          props?.SignOut();
          console.error("Upload Error:", error);
        });
    }
  }, [props?.get_user_details]);

  console.log("here", isselect)

  const onNavigate = () => {
    switch (isselect) {
      case "id":
        userDetails?.idFront
          ? alert("Your Id is already submitted")
          : props?.navigation?.navigate("Rideridverification", { type: "id" }), setisSelect("");
        break;
      case "passport":
        userDetails?.passportFront
          ? alert("Your Passport is already submitted")
          : props?.navigation?.navigate("Rideridverification", {
            type: "passport",
          }), setisSelect("");
        break;
      case "license":
        userDetails?.licenseFront
          ? alert("Your LIcense is already submitted")
          : props?.navigation?.navigate("Lisenceverification", {
            type: "license",
          }), setisSelect("");
        break;
      default:
        alert("Please upload and verify all your documents");
        return;
    }
  };


  return (
    <View style={styles.container}>
      <Globalheader navigation={props?.navigation} />
      <View style={styles.textwrapper}>
        <Text style={styles.textstyles}>Identification</Text>
        <Text style={styles.descTxt}>Howdy {`${userDetails?.firstName} ${userDetails?.lastName}`}!
          {"\n"}Please upload your documents so that we can know you better </Text>
      </View>
      <Identificationoptions
        isselect={isselect}
        setisSelect={setisSelect}
        onPress={() => {
          userDetails?.idFront ? null : setisSelect("id");
        }}
        image={require("../../assets/icons/id1.png")}
        title={"Local ID"}
        image2={
          userDetails?.idFront && userDetails?.idBack
            ? require("../../assets/icons/id6.png")
            : isselect === "id"
              ? require("../../assets/icons/id5.png")
              : require("../../assets/icons/id4.png")
        }
      // onPress={() => props?.navigation?.navigate("Rideridverification")}
      />
      <Identificationoptions
        isselect={isselect}
        setisSelect={setisSelect}
        onPress={() => {
          userDetails?.passportFront ? null : setisSelect("passport");
        }}
        // onPress={() => props?.navigation?.navigate("Rideridverification")}
        image={require("../../assets/icons/id2.png")}
        title={"International passport"}
        image2={
          userDetails?.passportFront && userDetails?.passportBack
            ? require("../../assets/icons/id6.png")
            : isselect === "passport"
              ? require("../../assets/icons/id5.png")
              : require("../../assets/icons/id4.png")
        }
      />
      <Identificationoptions
        isselect={isselect}
        setisSelect={setisSelect}
        onPress={() => {
          userDetails?.licenseFront ? null : setisSelect("license");
        }}
        // onPress={() => props?.navigation?.navigate("Lisenceverification")}
        image={require("../../assets/icons/id3.png")}
        title={"Driving license"}
        image2={
          userDetails?.licenseFront && userDetails?.licenseBack
            ? require("../../assets/icons/id6.png")
            : isselect === "license"
              ? require("../../assets/icons/id5.png")
              : require("../../assets/icons/id4.png")
        }
      />
      <View style={styles.btnwrapper}>
        <StandardButton title={"Select"} onPress={onNavigate} />
        <StandardButton title={"Logout"} onPress={() => props?.SignOut()}
          customStyles={styles.logoutBtn} textStyles={{ color: light.standardtext }} />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
  get_user_details: state.main.get_user_details,
});
export default connect(mapStateToProps, { SignOut })(Rideridentification);
