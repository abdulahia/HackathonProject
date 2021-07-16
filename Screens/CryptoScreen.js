import React, { useState, useCallback, useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import BitcointransactionScreen from "./BitcointransactionScreen";
import YoutubePlayer from "react-native-youtube-iframe";
import EthereumtransactionScreen from "./EthereumtransactionScreen";
import { useSelector, useDispatch } from "react-redux";

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
function CryptoScreen({ navigation }) {
  const [worth, setWorth] = useState(0);

  const [playing, setPlaying] = useState(false);
  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);
  const { transactions } = useSelector((state) => state.transactions);
  const prices = transactions.map((transactions) => transactions.price);
  const { values } = useSelector((state) => state.values);
  const totalPrice = prices.reduce((prev, cur) => (prev += cur), 0).toFixed(2);
  const value =
    prices
      .filter((price) => price < 0)
      .reduce((prev, cur) => (prev += cur), 360) * -1;
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
                right: 90,
                color: "#fff",
                fontWeight: "1100",
                top: 10,
              }}
            >
              Available Balance
            </Text>
            <Text
              style={{
                top: 25,
                color: "white",
                right: 90,
                fontSize: 25,
                fontWeight: "bold",
              }}
            >
              ${totalPrice}
            </Text>
            <Text
              style={{
                bottom: 40,
                left: 120,
                color: "#fff",
                fontWeight: "1100",
                fontSize: 17,
              }}
            >
              Portfolio value
            </Text>
            <Text
              style={{
                bottom: 25,
                color: "white",
                left: 120,
                fontSize: 25,
                fontWeight: "bold",
              }}
            >
              {" "}
              ${value}
            </Text>
            {/* <Text
              style={{
                color: "grey",
                fontWeight: "bold",
                top: 50,
                right: 100,
                fontSize: 20,
              }}
            >
              Available Crypto's:
            </Text> */}
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "yellow",
              borderRadius: 15,
              width: 170,
              height: 150,
              right: 101,
              top: 190,
            }}
            onPress={() => navigation.navigate("BitcointransactionScreen")}
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
                  color: "red",
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
              top: 40,
            }}
            onPress={() => navigation.navigate("EthereumtransactionScreen")}
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
          <View style={styles.LearnBox}>
            <Text
              style={{
                top: 25,
                left: 60,
                fontWeight: "bold",
                color: "white",
                fontSize: 20,
              }}
            >
              Learn About Crypto Below!
            </Text>
            <View style={{ alignItems: "center", top: "15%" }}>
              <YoutubePlayer
                height={360}
                width={360}
                play={playing}
                playList={"PLU52pNodXIGdM6XDgHVG7DsPytlsrR_6b"}
                onChangeState={onStateChange}
              />
            </View>
          </View>
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
      <Tab.Screen
        name="BitcointransactionScreen"
        component={BitcointransactionScreen}
      />
      <Tab.Screen
        name="EthereumtransactionScreen"
        component={EthereumtransactionScreen}
      />
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
  LearnBox: {
    height: "40%",
    width: "95%",
    top: 50,
    backgroundColor: "grey",
    borderRadius: 15,
  },
});
