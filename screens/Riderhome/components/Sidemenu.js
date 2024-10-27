import { useEffect, useState } from "react";
import {
  Text,
  View,
  useWindowDimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  Pressable,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../../styles/Home/Sidemenu";
import { Ionicons } from "@expo/vector-icons";
import { getPercent, sideMenuOptions } from "../../../middleware";
import { light } from "../../../scheme";
import { SignOut } from "../../../state-management/auth/auth";

const Sidemenu = (props) => {
  let { onBackPress, onModelpress, userDetails } = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <Modal transparent animationType="fade">
      <Pressable
        onPress={onModelpress}
        style={{ flex: 1, backgroundColor: "#26262629" }}
      ></Pressable>
      <View style={styles.container}>
        <TouchableOpacity onPress={onBackPress} style={styles.backiconwrapper}>
          <Ionicons
            name="chevron-back"
            size={getPercent(3, height)}
            color={light?.LableText}
          />
          <Text style={styles.backtext}>Back</Text>
        </TouchableOpacity>
        <View style={styles.profilewrapper}>
          <View style={styles.framebody}>
            <Image
              source={
                userDetails?.profile
                  ? { uri: userDetails?.profile }
                  : require("../../../assets/images/user.png")
              }
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </View>
          <View>
            <Text style={styles.nametext}>
              {userDetails?.firstName + " " + userDetails?.lastName}
            </Text>
            <Text style={styles.emailtext}>{userDetails?.email}</Text>
          </View>
        </View>
        {sideMenuOptions?.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                if (item?.screenName === "Logout") {
                  props?.SignOut();
                } else {
                  props?.navigation?.navigate(item?.screenName, {
                    type: "rider",
                  }),
                    props?.setIssidemodelvisible(false);
                }
              }}
              key={index}
              style={styles.optionswrapper}
            >
              <View style={styles.iconbody}>
                <Image
                  source={item?.icon}
                  style={{ height: "100%", width: "100%" }}
                  resizeMode="contain"
                />
              </View>

              <Text style={styles.optionstext}>{item?.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
  get_user_details: state.main.get_user_details,
});
export default connect(mapStateToProps, { SignOut })(Sidemenu);
