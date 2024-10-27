import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login/Login";
import Onboarding1 from "../screens/Onboarding/Onboarding1";
import Onboarding2 from "../screens/Onboarding/Onboarding2";
import Onboarding3 from "../screens/Onboarding/Onboarding3";
import Welcome from "../screens/Welcome/Welcome";
import Register from "../screens/Register/Register";
import Riderregister from "../screens/Riderregister/Riderregister";
import Riderwelcome from "../screens/Riderwelcome/Riderwelcome";

const { Navigator, Screen } = createStackNavigator();

function AppNavigation() {
  return (
    <Navigator screenOptions={{ headerShown: false, animationEnabled: false }}>
      <Screen name="Onboarding1" component={Onboarding1} />
      <Screen name="Login" component={Login} />
      <Screen name="Onboarding2" component={Onboarding2} />
      <Screen name="Onboarding3" component={Onboarding3} />
      <Screen name="Welcome" component={Welcome} />
      <Screen name="Register" component={Register} />
      <Screen name="Riderwelcome" component={Riderwelcome} />
      <Screen name="Riderregister" component={Riderregister} />
    </Navigator>
  );
}
export const Unauthnavigator = () => (
  <NavigationContainer>
    <AppNavigation />
  </NavigationContainer>
);
