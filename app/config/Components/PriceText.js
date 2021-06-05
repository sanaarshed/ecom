import React from "react";
import { Text, StyleSheet } from "react-native";

function PriceText({ children }) {
  return <Text style={styles.this}>{children}</Text>;
}
const styles = StyleSheet.create({
  this: {
    fontSize: 15,
    color: "green",
  },
});
export default PriceText;
