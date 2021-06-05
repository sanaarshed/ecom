import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../colors";

function Icon({
  size = 40,
  //bgColor = colors.black,
  color = colors.white,
  name = "exclamation",
  backgroundColor,
}) {
  return (
    <View
      style={{
        // backgroundColor: bgColor,
        //we can restructure it as follows
        //if we have key and value the same name we will only use key
        backgroundColor,

        height: size,
        width: size,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: size / 2,
      }}
    >
      <MaterialCommunityIcons name={name} color={color} size={size / 2} />
    </View>
  );
}

export default Icon;
