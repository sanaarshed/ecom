import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import colors from "../config/colors";
import Heading from "../config/Components/Heading";
import PriceText from "../config/Components/PriceText";

function ListingDetails(props) {
  return (
    <View style={styles.container}>
      <View
        style={{
          paddingVertical: 10,
          alignSelf: "center",
        }}
      >
        <Image
          source={require("../assets/laptop.jpg")}
          style={styles.image}
          resizeMode={"contain"}
        />
      </View>
      <Heading>i want to sell this laptop... </Heading>
      <PriceText style={{ ...styles.this, ...styles.price }}>$200</PriceText>
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 30,
        }}
      >
        <Image
          source={require("../assets/mosh.jpg")}
          style={styles.profileImage}
          resizeMode={"contain"}
        />

        <View
          style={{
            flexDirection: "column",
            margin: 10,
          }}
        >
          {/* here the style is not applying on text and i have no clue why */}
          <Text styles={{ fontSize: 40 }}>John Doe</Text>
          <Text
            styles={{
              color: colors.white,
              fontSize: 100,
              backgroundColor: "#000",
            }}
          >
            1 Listing
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    height: 300,
  },
  profileImage: {
    height: 60,
    width: 60,
    borderRadius: 100,
  },
  price: {
    marginTop: 200,
  },
  textSubtitle: {},
});

export default ListingDetails;
