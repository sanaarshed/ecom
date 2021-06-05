import React from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
} from "react-native";

import colors from "../config/colors";
import CustomButton from "../config/Components/CustomButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      blurRadius={3}
      //fadeDuration={1000}
      source={require("../assets/background.png")}
    >
      <View style={styles.logo}>
        <Image
          resizeMode="contain"
          style={{ width: 100, height: 100 }}
          source={require("../assets/logo-blue.png")}
        />
        <Text style={{ ...styles.font, ...styles.tagline }}>
          Buy Orignal Gadgets
        </Text>
      </View>
      <View style={styles.whiteBackgroud}>
        <View style={styles.btnContainer}>
          <CustomButton title="Login" />
          <CustomButton title="Register" color="Secondry" />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  whiteBackgroud: {
    backgroundColor: colors.whiteO,
    flex: 1,
    justifyContent: "flex-end",
  },
  logo: {
    position: "absolute",
    alignSelf: "center",
    top: 100,
    alignItems: "center",
  },
  font: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "sans-serif",
  },
  tagline: {
    marginTop: 8,
  },
  btnContainer: {
    bottom: 60,
  },
});
export default WelcomeScreen;
