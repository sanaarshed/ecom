import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyle from "../styles";
import colors from "../colors";

function AppTextInput({ icon, iconName }) {
  return (
    <View style={styles.container}>
      
        <MaterialCommunityIcons
          name= {iconName? iconName: "email"}
          size={20}
          color={colors.mediumgray}
          style={{ margin: 10 }}
        />
      
      <TextInput style={styles.text} />
      {/* <TextInput style={[defaultStyle.text, ...styles.text]} /> */}
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
    marginBottom:5
  },
  text: {
    color: colors.darkgray,
    fontSize: 20,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenri",
    flex: 1,
  },
});
export default AppTextInput;
