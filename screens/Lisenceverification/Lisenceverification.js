import { useState } from "react";
import { Image, Text, View, useWindowDimensions } from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Rideridentification/main";
import Commonheader from "../../globalComponents/Commonheader";
import Globalicons from "../../globalComponents/Globalicons";
import StandardButton from "../../globalComponents/StandardButton";

const Lisenceverification = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });
  let routetype = "Lisence";
  const type = props?.route?.params?.type;

  return (
    <View style={styles.container}>
      <Commonheader
        title={"License Verification"}
        navigation={props?.navigation}
      />

      <View style={styles.textwrapper}>
        <Text style={styles.lable}>Take photo of your Driving license</Text>
        <Text style={styles.contenttext}>
          Please provide us with a good photo of your license for verification
        </Text>
      </View>
      <View style={styles.framebody}>
        <Image
          source={require("../../assets/images/carr.png")}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.instructionwrapper}>
        <Globalicons image={require("../../assets/icons/6.png")} />
        <Text style={styles.instructionstext}>Use a light room</Text>
      </View>
      <View style={styles.instructionwrapper}>
        <Globalicons image={require("../../assets/icons/7.png")} />
        <Text style={styles.instructionstext}>No Flash</Text>
      </View>
      <View style={styles.instructionwrapper}>
        <Globalicons image={require("../../assets/icons/8.png")} />
        <Text style={styles.instructionstext}>Hold the camera stable</Text>
      </View>
      <View style={styles.btnwrapper}>
        <StandardButton
          // onPress={() => props?.navigation?.navigate("Riderhome")}
          onPress={() => props?.navigation?.navigate("Documentphoto", { type })}
          title={"Take a photo"}
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Lisenceverification);
