import React, { Children } from "react";
import { StyleSheet, Text } from "react-native";

function Paragraph({ Children }) {
  return <Text>{Children}</Text>;
}
const styles = StyleSheet.create({});
export default Paragraph;
