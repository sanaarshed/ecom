import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../colors";

function DropDown({ icon, placeholder, ...otherProps }) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={icon} size={20} color={colors.mediumgray} />
    </View>
  );
}

export default DropDown;
const styles = StyleSheet.create({});
