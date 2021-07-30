import React from "react";
import { FlatList, useColorScheme, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";


import colors from "../config/colors";
import CustomCard from "../config/Components/CustomCard";
import BottomTabs from "../config/Components/BottomTabs";

const listings = [
  {
    id: 1,
    title: "laptop",
    price: "20000",
    image: require("../assets/laptop.jpg"),
  },
  {
    id: 2,
    title: "chair",
    price: "5000",
    image: require("../assets/laptop.jpg"),
  },
  {
    id: 3,
    title: "chair",
    price: "5000",
    image: require("../assets/laptop.jpg"),
  },
  {
    id: 4,
    title: "chair",
    price: "5000",
    image: require("../assets/laptop.jpg"),
  },
];

function Listings(props) {
  const navigation = useNavigation();


  return (

    <View
      style={{
        marginTop: 10,
        flex: 1,
        backgroundColor: colors.lightGray,
        padding: 5,
      }}
    >
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CustomCard
            onPress={() => navigation.navigate('ListingDetails')}
            title={item.title}
            subtitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
      <BottomTabs/>
    </View>
  );
}

export default Listings;
