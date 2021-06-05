import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyle from "../styles";
import colors from "../colors";

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name="email"
          size={20}
          color={colors.mediumgray}
          style={{ margin: 10 }}
        />
      )}
      <TextInput style={[defaultStyle.text, ...styles.text]} {...otherProps} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    width: "100%",
    height: 40,
    padding: 7,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    flex: 1,
  },
});
export default AppTextInput;
