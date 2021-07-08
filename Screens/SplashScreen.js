import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from "react-native-vector-icons";
import * as Animatable from "react-native-animatable";
import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  Dimensions,
  Image,
  TouchableOpacity,
  useState,
} from "react-native";
import HomeScreen from "./HomeScreen";
import { Fold } from "react-native-animated-spinkit";

export default function SplashScreen({ navigation }) {
  setInterval(() => {
    navigation.navigate("HomeScreen");
  }, 6000);
  return (
    <SafeAreaView style={styles.container}>
      {/* <Animatable.Image
        animation="fadeInUpBig"
        style={styles.logo}
        source={require("../assets/logo.png")}
      /> */}
      <Animatable.View style={styles.fold} animation="fadeInUpBig">
        <Fold size={50} color="#0088ff" />
      </Animatable.View>
    </SafeAreaView>
  );
}
const winn = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#61EEFE",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
    bottom: "-35%",
  },
  logo: {
    top: "25%",
    left: "25%",
  },
  title: {
    color: "#05375a",
    fontSize: 25,
    fontWeight: "bold",
  },
  text: {
    color: "grey",
    marginTop: 10,
  },
  button: {
    alignItems: "flex-end",
    marginTop: 30,
  },
  fold: {
    top: "35%",
    justifyContent: "center",
    alignItems: "center",
  },
  signIn: {
    width: 180,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    flexDirection: "row",
    bottom: "-25%",
    left: "375%",
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
  },
});
