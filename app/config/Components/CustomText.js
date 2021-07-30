import React from "react";
import { Text, StyleSheet } from "react-native";

function CustomText({ children }) {
  //**{children} is a keyword here that is telling that
  //the text we are creating is the child of <Text>
  //except {children} if you will type anything like title or
  //w.e then the text you will type between tags like ->
  // <>here</> will not work
  return <Text style={styles.textstyle}>{children}</Text>;
}
const styles = StyleSheet.create({
  textstyle: {
    fontSize: 50,
    //fontWeight: "bold",
    fontFamily: "Roboto",
  },
});
export default CustomText;
