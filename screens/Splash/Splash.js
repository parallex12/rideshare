import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { useEffect } from "react";
// import { getSingleUser } from "../../state-management/actions/user/users";
import { Quikify } from "quikify";
import { getAuth } from "firebase/auth";
import { GET_USER_DETAILS } from "../../state-management/types/types";
import { SignOut } from "../../state-management/auth/auth";

const Splash = (props) => {
  const [loading, setLoading] = useState(true);
  const [userDetails, setUserDetails] = useState({});
  const auth = getAuth();
  let user = auth?.currentUser;

  useEffect(() => {
    if (user) {
      Quikify.get("/users", GET_USER_DETAILS)
        .then((res) => {
          setUserDetails(res);
        })
        .catch((e) => {
          props?.SignOut();
          console.log("errorGet", e);
        });
    }
  }, [user]);

  useEffect(() => {
    if (props?.get_user_details?.code === "404") {
      Quikify.get("/users", GET_USER_DETAILS)
        .then((res) => {
          setUserDetails(res);
        })
        .catch((e) => {
          console.log("errorrr", e);
        });
    } else {
      setUserDetails(props?.get_user_details);
    }
  }, [props?.get_user_details]);

  useEffect(() => {
    if (userDetails?.email) {
      if (userDetails?.type === "customer") {
        props?.navigation.reset({
          index: 0,
          routes: [{ name: "Home" }],
        });
      } else if (userDetails?.type === "rider") {
        if (userDetails?.verification === null) {
          props?.navigation.reset({
            index: 0,
            routes: [{ name: "Rideridentification" }],
          });
        } else if (userDetails?.verification === "pending") {
          alert("Your Verification is under process");
          props?.SignOut();
        } else {
          props?.navigation.reset({
            index: 0,
            routes: [{ name: "Riderhome" }],
          });
        }
      } else {
        alert("Something Went Wrong Try Again");
        props?.SignOut();
      }
      setLoading(false);
    }
  }, [userDetails]);

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" color="black" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
  get_user_details: state.main.get_user_details,
});
export default connect(mapStateToProps, {
  SignOut,
})(Splash);
