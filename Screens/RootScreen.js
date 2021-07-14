import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./SplashScreen";
import HomeScreen from "./HomeScreen";
import CreditScreen from "./CreditScreen";
import CryptoScreen from "./CryptoScreen";
import BudgetScreen from "./BudgetScreen";
import AddScreen from "./AddScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Tabs from "./Tabs";
const RootStack = createStackNavigator();
function Home() {
  return <Tabs />;
}

export default function RootStackScreen() {
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="Splash Screen" component={SplashScreen} />
      <RootStack.Screen name="HomeScreen" component={Home} />
      <RootStack.Screen name="CreditScreen" component={CreditScreen} />
      <RootStack.Screen name="CryptoScreen" component={CryptoScreen} />
      <RootStack.Screen name="BudgetScreen" component={BudgetScreen} />
      <RootStack.Screen name="AddScreen" component={AddScreen} />
    </RootStack.Navigator>
  );
}
