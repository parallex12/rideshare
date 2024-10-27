import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore/lite";
import { GET_ERRORS, GET_USER_DETAILS } from "../types/types";
import { Quikify } from "quikify";
import { setAuthToken } from "./actions";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const SignUp = (data, setLoading, navigation) => async (dispatch) => {
  try {
    const auth = getAuth();
    const db = getFirestore();
    createUserWithEmailAndPassword(auth, data?.email, data?.password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        delete data?.password;
        await setDoc(doc(db, "users", user?.uid), data)
          .then((res) => {
            console.log("Welcome !!");
            _sendEmailVerification(user, navigation);
            setLoading(false);
            // navigation.goBack();
            // Quikify.get("/users")
            //   .then((res) => {
            //     dispatch({ type: GET_USER_DETAILS, payload: res });
            //   })
            //   .catch((e) => {
            //     console.log("hhhhh", e);
            //   });

            setLoading(false);
          })
          .catch((error) => {
            setLoading(false);
            const errorMessage = error.message;
            dispatch({ type: GET_ERRORS, payload: errorMessage });
            alert(errorMessage);
          });
      })
      .catch((error) => {
        setLoading(false);
        const errorMessage = error.message;
        alert(errorMessage);

        console.log(errorMessage);
        dispatch({ type: GET_ERRORS, payload: errorMessage });
        let err = errorMessage.indexOf("/");
        let fErr = errorMessage.slice(err + 1, errorMessage.length - 2);
        if (fErr == "email-already-in-use") {
          alert("Email already in use");
        }
      });
  } catch (e) {
    setLoading(false);
    dispatch({ type: GET_ERRORS, payload: e.message });
    console.log(e.message);
    alert("Something Went Wrong!!");
  }
};

export const LoginWithEmailPass =
  (data, usertype, setLoading, navigation) => async (dispatch) => {
    try {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, data?.email, data?.password)
        .then((userCredential) => {
          const user = userCredential.user;

          // navigation?.navigate("Splash");
          setLoading(false);
        })
        .catch((error) => {
          console.log("error", error);
          setLoading(false);
          const errorMessage = error.message;
          dispatch({ type: GET_ERRORS, payload: errorMessage });
          alert("Email or password is incorrect !");
        });
    } catch (e) {
      setLoading(false);
      console.log("errorrs", e);
      dispatch({ type: GET_ERRORS, payload: e.message });
    }
  };

export const _sendEmailVerification = async (user) => {
  const auth = getAuth();
  await sendEmailVerification(user)
    .then((res) => {
      Alert.alert(
        "Alert",
        "Verification Email sent, Please verify your email.",
        [{ text: "OK", onPress: () => signOut(auth) }]
      );
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};

export const SignOut = () => async (dispatch) => {
  try {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch({ type: GET_USER_DETAILS, payload: null });
        setAuthToken(null);
        Quikify.setToken(null);
      })
      .catch((e) => {
        console.log("sss", e.message);
      });
  } catch (e) {
    console.log("ddd", e.message);
    dispatch({ type: GET_ERRORS, payload: e.message });
  }
};

export const changePassword =
  (data, setLoading, navigation) => async (dispatch) => {
    const auth = getAuth();

    const user = auth.currentUser;
    const newPassword = data?.newpassword;
    try {
      const credential = EmailAuthProvider.credential(
        user?.email,
        data?.oldpassword
      );
      reauthenticateWithCredential(user, credential)
        .then((result) => {
          //Password entered is correct
          updatePassword(user, newPassword)
            .then((res) => {
              Alert.alert("Alert", "Your Password has been updated", [
                { text: "OK", onPress: () => navigation.goBack() },
              ]);
              setLoading(false);
            })
            .catch((error) => {
              console.log("error", error);
              setLoading(false);
            });
        })
        .catch((error) => {
          const errorMessage = error.message;
          let fErr = errorMessage.slice(error + 1, errorMessage.length - 2);
          setLoading(false);

          if (fErr === "Firebase: Error (auth/invalid-credential") {
            alert("Old Password is incorrect");
          } else {
            alert(fErr);
          }
        });
    } catch (e) {
      setLoading(false);
      dispatch({ type: GET_ERRORS, payload: e.message });
      console.log(e.message);
      alert("Something Went Wrong!!");
    }
  };
