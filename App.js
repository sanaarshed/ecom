import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'


import AccountScreen from './app/screens/AccountScreen';
import DisplayImage from './app/screens/DisplayImage';
import ListingDetails from './app/screens/ListingDetails';
import Listings from './app/screens/Listings';
import MessagesScreen from './app/screens/MessagesScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Login from './app/screens/Login';

export default function App() {

  const Tabs = createStackNavigator();

  return (
   <NavigationContainer>
     <Tabs.Navigator  
   initialRouteName ="WelcomeScreen">
       <Tabs.Screen options={{headerShown: false}} name={"WelcomeScreen"} component={WelcomeScreen}/>
        <Tabs.Screen name="MessagesScreen" component={MessagesScreen}/>
       <Tabs.Screen name="AccountScreen" component={AccountScreen}/>
       <Tabs.Screen name="DisplayImage" component={DisplayImage}/>
      
      <Tabs.Screen name="ListingDetails" component={ListingDetails}/>
      <Tabs.Screen 
      name="Listings" component={Listings}/>
      <Tabs.Screen name="Login" component={Login}/> 
       </Tabs.Navigator>
     </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
