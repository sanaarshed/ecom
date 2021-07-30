import React from "react";

import Icon from "../config/Components/Icon";
import { View, FlatList } from "react-native";
import colors from "../config/colors";
import ListItem from "../config/Components/ListItem";
import ListItemSeperator from "../config/Components/ListItemSeperator";
// ↓ this is how it will auto import flatList but we dont want to import it from this gesture lib so import it from react-native manually
//import { FlatList } from "react-native-gesture-handler";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.Primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.Secondry,
    },
  },
];

function AccountScreen(props) {
  return (
    <View
      style={{ backgroundColor: colors.lightGray, marginVertical: 10, flex: 1 }}
    >
      <View
        style={
          {
            //marginTop: 10,
          }
        }
      >
        <ListItem
          image={require("../assets/favicon.png")}
          title={"Mark "}
          description={"mark@gmail.com"}
          //image={require("../assets/mosh.jpg")}
        />
      </View>
      <View style={{ marginVertical: 20 }}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItems) => menuItems.title} // menuitems is the array destructure
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
          ItemSeparatorComponent={ListItemSeperator}
        />
      </View>
      <ListItem
        title="LOG OUT"
        IconComponent={<Icon name="logout" backgroundColor={"#ffe66d"} />}
      />
    </View>
  );
}

export default AccountScreen;
