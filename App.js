import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./Screens/SplashScreen";
import RootStackScreen from "./Screens/RootScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Tabs from "./Screens/Tabs";
// import Tabs from './Screens/Tabs';

const RootStack = createStackNavigator();

export default function App(navigation) {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
}
