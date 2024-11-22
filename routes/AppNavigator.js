import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login/Login";
import Onboarding1 from "../screens/Onboarding/Onboarding1";
import Onboarding2 from "../screens/Onboarding/Onboarding2";
import Onboarding3 from "../screens/Onboarding/Onboarding3";
import Welcome from "../screens/Welcome/Welcome";
import Register from "../screens/Register/Register";
import Enterphone from "../screens/Enterphone/Enterphone";
import Phoneverification from "../screens/Phoneverification/Phoneverification";
import Riderwelcome from "../screens/Riderwelcome/Riderwelcome";
import Riderregister from "../screens/Riderregister/Riderregister";
import Riderenterphone from "../screens/Riderenterphone/Riderenterphone";
import Riderphoneverification from "../screens/Riderphoneverification/Riderphoneverification";
import Riderfriendphoneverification from "../screens/Riderfriendphoneverification/Riderfriendphoneverification";
import Riderfriendentercode from "../screens/Riderfriendentercode/Riderfriendentercode";
import Riderenterfamilynumber from "../screens/Riderenterfamilynumber/Riderenterfamilynumber";
import Riderfamilyentercode from "../screens/Riderfamilyentercode/Riderfamilyentercode";
import Rideridentification from "../screens/Rideridentification/Rideridentification";
import Rideridverification from "../screens/Rideridverification/Rideridverification";
import Home from "../screens/Home/Home";
import Notifications from "../screens/Notifications/Notifications";
import History from "../screens/History/History";
import Riderhome from "../screens/Riderhome/Riderhome";
import Transport from "../screens/Transport/Transport";
import Availablecars from "../screens/Availablecars/Availablecars";
import Requestbooking from "../screens/Requestbooking/Requestbooking";
import Settings from "../screens/Settings/Settings";
import Changepassword from "../screens/Changepassword/Changepassword";
import Privacypolicy from "../screens/Privacypolicy/Privacypolicy";
import Deleteaccount from "../screens/Deleteaccount/Deleteaccount";
import Contactus from "../screens/Contactus/Contactus";
import Complain from "../screens/Complain/Complain";
import Inbox from "../screens/Inbox/Inbox";
import Chat from "../screens/Chat/Chat";
import Profile from "../screens/Profile/Profile";
import Addcar from "../screens/Addcar/Addcar";
import Request from "../screens/Request/Request";
import Locationscreen from "../screens/Locationscreen/Locationscreen";
import Documentphoto from "../screens/Documentphoto/Documentphoto";
import Rideridverification2 from "../screens/Rideridverification2/Rideridverification2";
import Lisenceverification from "../screens/Lisenceverification/Lisenceverification";
import Documentbackphoto from "../screens/Documentbackphoto/Documentbackphoto";
import Editprofile from "../screens/Editprofile/Editprofile";
import Aboutus from "../screens/Aboutus/Aboutus";
import Splash from "../screens/Splash/Splash";
import HistoryCustomer from "../screens/HistoryCustomer/HistoryCustomer";
import LocationScreenRider from "../screens/LocationScreenRider/LocationScreenRider";

const { Navigator, Screen } = createStackNavigator();

function AppNavigation() {
  return (
    <Navigator screenOptions={{ headerShown: false, animationEnabled: false }}>
      {/* <Screen name="Login" component={Login} /> */}
      <Screen name="Splash" component={Splash} />
      <Screen name="Home" component={Home} />
      <Screen name="Riderhome" component={Riderhome} />
      {/* <Screen name="Onboarding1" component={Onboarding1} /> */}
      <Screen name="Lisenceverification" component={Lisenceverification} />
      <Screen name="Rideridverification" component={Rideridverification} />
      <Screen name="Documentphoto" component={Documentphoto} />
      <Screen name="Documentbackphoto" component={Documentbackphoto} />
      <Screen name="Rideridverification2" component={Rideridverification2} />
      <Screen name="Locationscreen" component={Locationscreen} />
      <Screen name="LocationScreenRider" component={LocationScreenRider} />
      <Screen name="Request" component={Request} />
      <Screen name="Addcar" component={Addcar} />
      <Screen name="Aboutus" component={Aboutus} />
      <Screen name="Inbox" component={Inbox} />
      <Screen name="Profile" component={Profile} />
      <Screen name="Editprofile" component={Editprofile} />
      <Screen name="Chat" component={Chat} />
      <Screen name="Complain" component={Complain} />
      <Screen name="Settings" component={Settings} />
      <Screen name="Deleteaccount" component={Deleteaccount} />
      <Screen name="Contactus" component={Contactus} />
      <Screen name="Changepassword" component={Changepassword} />
      <Screen name="Privacypolicy" component={Privacypolicy} />
      <Screen name="History" component={History} />
      <Screen name="HistoryCustomer" component={HistoryCustomer} />
      <Screen name="Requestbooking" component={Requestbooking} />
      <Screen name="Availablecars" component={Availablecars} />
      <Screen name="Notifications" component={Notifications} />
      {/* <Screen name="Onboarding2" component={Onboarding2} /> */}
      {/* <Screen name="Onboarding3" component={Onboarding3} /> */}
      {/* <Screen name="Welcome" component={Welcome} /> */}
      {/* <Screen name="Register" component={Register} /> */}
      <Screen name="Enterphone" component={Enterphone} />
      {/* <Screen name="Login" component={Login} /> */}
      <Screen name="Phoneverification" component={Phoneverification} />
      {/* <Screen name="Riderwelcome" component={Riderwelcome} /> */}
      {/* <Screen name="Riderregister" component={Riderregister} /> */}
      <Screen name="Riderenterphone" component={Riderenterphone} />
      <Screen
        name="Riderphoneverification"
        component={Riderphoneverification}
      />
      <Screen
        name="Riderfriendphoneverification"
        component={Riderfriendphoneverification}
      />
      <Screen name="Riderfriendentercode" component={Riderfriendentercode} />
      <Screen
        name="Riderenterfamilynumber"
        component={Riderenterfamilynumber}
      />
      <Screen name="Riderfamilyentercode" component={Riderfamilyentercode} />
      <Screen name="Rideridentification" component={Rideridentification} />
      <Screen name="Transport" component={Transport} />
    </Navigator>
  );
}
export const AppNavigator = () => (
  <NavigationContainer>
    <AppNavigation />
  </NavigationContainer>
);
