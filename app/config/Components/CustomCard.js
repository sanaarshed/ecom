import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import colors from "../colors";
import CustomText from "./CustomText";

function CustomCard({ title, subtitle, image,onPress }) {
  return (
   <TouchableWithoutFeedback
   onPress={onPress}>
   <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.details}>
        <Text>{title}</Text>
        <Text>{subtitle}</Text>

        {/*<CustomText style={styles.title}>{title}</CustomText>
        <CustomText style={styles.subtitle}>{subtitle}</CustomText>
  */}
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 15,
    marginBottom: 20,
    height: 300,
    width: "100%",
    overflow: "hidden",
    padding: 5,
  },
  details: {
    marginTop: 20,
    marginLeft: 20,
  },
  image: {
    padding: 5,
    height: 200,
    width: "100%",
  },
  subtitle: {
    color: colors.Primary,
  },
  title: {},
});
export default CustomCard;
