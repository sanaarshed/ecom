import React from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";

function DisplayImage(props) {
  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <MaterialCommunityIcons name="close" size={35} color="white" />
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={35}
          color="white"
        />
      </View>
      <Image
        source={require("../assets/laptop.jpg")}
        resizeMode="contain"
        style={{ height: "100%", width: "100%" }}
      ></Image>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
    paddingTop: 20,
  },
  iconsContainer: {
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DisplayImage;
