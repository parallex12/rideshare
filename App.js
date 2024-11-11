import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { AppNavigator } from "./routes/AppNavigator";
import { useFonts } from "expo-font";
import store from "./state-management/store";
import "react-native-gesture-handler";
import { FontsConfig } from "./middleware";
import { StatusBar } from "expo-status-bar";
import { LogBox } from "react-native";
import firebase from "firebase/compat/app";
import {
  initializeAuth,
  getReactNativePersistence,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { firebaseConfig } from "./state-management/env/firebaseconfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Unauthnavigator } from "./routes/Unauthnavigator";
import { Quikify } from "quikify";
import axios from "axios";
import { setAuthToken } from "./state-management/auth/actions";
import { _sendEmailVerification } from "./state-management/auth/auth";
import { GET_USER_DETAILS } from "./state-management/types/types";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

export default function App() {
  const [fontsLoaded] = useFonts(FontsConfig);
  const [userstatus, setUserStatus] = useState(false);

  Quikify.configure({
    baseURL: "https://rideshare-backend-green.vercel.app/api",
  });
  axios.defaults.baseURL = "https://rideshare-backend-green.vercel.app/api";

  useEffect(() => {
    try {
      (async () => {
        // Initialize Firebase
        if (!firebase.apps.length) {
          const a = firebase.initializeApp(firebaseConfig);
          const auth = initializeAuth(a, {
            persistence: getReactNativePersistence(AsyncStorage),
          });
          // const storage = getStorage(a);
          // console.log(auth);
          onAuthStateChanged(auth, (user) => {
            if (user) {
              console.log("user", user);

              if (user?.emailVerified) {
                let token = user?.stsTokenManager?.accessToken;
                Quikify.setToken(token);
                setAuthToken(token);
                Quikify.get("/users", GET_USER_DETAILS)
                  .then((res) => {
                    console.log(res);
                    setUserStatus(true);
                  })
                  .catch((e) => {
                    console.log("heresssee", e);
                    // signOut(auth);
                    setUserStatus(false);
                  });
              } else {
                _sendEmailVerification(user);
                // signOut(auth);
              }

              // console.log(token);
            } else {
              setUserStatus(false);
            }
          });
        }
      })();
    } catch (e) {
      console.log("hellowww", e.message);
    }
  }, []);
  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <StatusBar style="dark" hidden />
      {userstatus ? <AppNavigator /> : <Unauthnavigator />}
    </Provider>
  );
}
