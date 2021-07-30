import React from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";

import colors from "../colors";

function ListItemSeperator(prop) {
  return <View style={styles.seperator} />;
}
const styles = StyleSheet.create({
  seperator: {
    alignSelf: "center",
    width: "80%",
    height: 2,
    backgroundColor: colors.gray,
  },
});
export default ListItemSeperator;
