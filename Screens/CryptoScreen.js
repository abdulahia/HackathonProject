import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TransactionScreen from "./TransactionScreen";
import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import DummyData from "./DummyData";
import { COLORS, SIZES, FONTS } from "./Theme";
function CryptoScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <View style={styles.pbackground}>
          <Text
            style={{
              fontSize: 20,
              top: 25,
              fontWeight: "bold",
              color: "#62c7fe",
              position: "absolute",
            }}
          >
            Crypto
          </Text>
          <View style={styles.Box}>
            <Text
              style={{
                fontSize: 17,
                color: "#fff",
                fontWeight: "1100",
                top: 10,
              }}
            >
              Total Investment Value
            </Text>
            <Text
              style={{
                top: 25,
                color: "white",
                fontSize: 25,
                fontWeight: "bold",
              }}
            >
              ${DummyData.portfolio.balance}
            </Text>
            <Text style={{ top: 30, color: "green" }}>
              {DummyData.portfolio.changes}
            </Text>
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                top: 50,
                right: 100,
                fontWeight: "1100",
                fontSize: 20,
              }}
            >
              Available Crypto's:
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "yellow",
              borderRadius: 15,
              width: 170,
              height: 150,
              right: 101,
              top: 50,
            }}
            onPress={() => navigation.navigate("TransactionScreen")}
          >
            <View style={styles.crypto}>
              <Image
                source={DummyData.bitcoin.image}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                  position: "absolute",
                  left: 20,
                  top: 35,
                }}
              />
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 24,
                  color: "white",
                  position: " absolute",
                  top: 35,
                  left: 60,
                }}
              >
                {DummyData.bitcoin.currency}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: "white",
                  position: " absolute",
                  top: 35,
                  left: 60,
                }}
              >
                {DummyData.bitcoin.code}
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 15,
                  color: "white",
                  position: " absolute",
                  top: 55,
                  left: 20,
                }}
              >
                ${DummyData.bitcoin.amount}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: "green",
                  position: " absolute",
                  top: 55,
                  left: 20,
                }}
              >
                {DummyData.bitcoin.changes}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderRadius: 15,
              width: 170,
              height: 150,
              left: 102,
              bottom: 100,
            }}
            onPress={() => navigation.navigate("TransactionScreen")}
          >
            <View style={styles.crypto2}>
              <Image
                source={DummyData.ethereum.image}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                  position: "absolute",
                  left: 15,
                  top: 35,
                }}
              />
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 24,
                  color: "white",
                  position: " absolute",
                  top: 35,
                  left: 55,
                }}
              >
                {DummyData.ethereum.currency}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: "white",
                  position: " absolute",
                  top: 35,
                  left: 55,
                }}
              >
                {DummyData.ethereum.code}
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 15,
                  color: "white",
                  position: " absolute",
                  top: 55,
                  left: 20,
                }}
              >
                ${DummyData.ethereum.amount}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: "red",
                  position: " absolute",
                  top: 55,
                  left: 20,
                }}
              >
                {DummyData.ethereum.changes}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
const Tab = createMaterialTopTabNavigator();

export default function Crypto({ navigation }) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: "red",
        tabStyle: { backgroundColor: "#61EEFE", tabBarVisible: true },
        style: { backgroundColor: "#61EEFE" },
      }}
    >
      <Tab.Screen name="CryptoScreen" component={CryptoScreen} />
      <Tab.Screen name="TransactionScreen" component={TransactionScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#61EEFE",
  },
  pbackground: {
    backgroundColor: "#ffff",
    width: "95%",
    height: 700,
    bottom: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlignVertical: "center",
    textAlign: "center",
    fontWeight: "bold",
  },
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  crypto: {
    width: 170,
    height: 150,
    backgroundColor: "grey",
    borderRadius: 15,
    right: 0,
    bottom: 0,

    position: "absolute",
  },
  crypto2: {
    width: 170,
    height: 150,
    backgroundColor: "grey",
    borderRadius: 15,
    left: 0,
    bottom: 0,
    position: "absolute",
  },
  Box: {
    width: "95%",
    height: 210,
    bottom: 415,
    borderRadius: 15,
    padding: 22,
    backgroundColor: "#62c7fe",
    alignItems: "center",
    position: "absolute",
  },
});
