import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import colors from "../colors";
import MessagesScreen from "../../screens/MessagesScreen";
import Listings from "../../screens/Listings";
import AccountScreen from "../../screens/AccountScreen";

function BottomTabs() {
  const BottomTab = createBottomTabNavigator();

  return (
      <BottomTab.Navigator
        tabBarOptions={{
          activeTintColor: colors.Primary,
        }}
      >
        <BottomTab.Screen
          name="AccountScreen"
          component={AccountScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account-circle"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="Listings"
          component={Listings}
          options={{
            //showLabel: false,
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          name="MessagesScreen"
          component={MessagesScreen}
          options={{
            //showLabel: false,
            tabBarLabel: "Messages",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="android-messages"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </BottomTab.Navigator>
  );
}

export default BottomTabs;
