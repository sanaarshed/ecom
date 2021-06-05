import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../colors";

function AppButton({ title, onPress, color = "Primary" }) {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: colors[color] }]}
    >
      <Text style={styles.titles}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.Primary,
    borderRadius: 20,
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginVertical: 5,
  },
  titles: {
    fontSize: 20,
    textTransform: "uppercase",
    color: colors.white,
    fontWeight: "bold",
  },
});
export default AppButton;
