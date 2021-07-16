import React, { useState, useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { addTransaction } from "../scr/store/actions/transactionAction";
import Credit from "./CreditScreen";
import {
  VStack,
  Container,
  NativeBaseProvider,
  Button,
  Content,
  FormControl,
  Item,
  Input,
} from "native-base";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Image,
  TouchableOpacity,
  Alert,
  TextInput,
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import DummyData from "./DummyData";
import {
  VictoryScatter,
  VictoryLine,
  VictoryChart,
  VictoryAxis,
} from "victory-native";

export default function EthereumtransactionScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    if (!price) {
      return alert("Please fill all fields");
    }

    const id = Math.floor(Math.random() * 1);
    const title = "Ethereum";
    const newTransaction = {
      id,
      title,
      price: +price,
    };

    dispatch(addTransaction({ ...newTransaction }));
  };
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.view}>
          <View style={styles.pbackground}>
            <Text
              style={{
                top: 28,
                fontWeight: "bold",
                color: "#62c7fe",
                fontSize: 20,
                position: "absolute",
              }}
            >
              Ethereum
            </Text>
            <View
              style={{
                width: 50,
                height: 50,
                bottom: 545,
                left: 11.5,
                position: "absolute",
              }}
            >
              <TouchableOpacity
                style={{
                  borderRadius: 15,
                  width: 60,
                  height: 60,
                  right: 0,
                  bottom: 94,
                }}
                onPress={() => navigation.navigate("CryptoScreen")}
              >
                <Image
                  source={require("../assets/left.png")}
                  resizeMode="contain"
                  style={{
                    width: 50,
                    height: 50,
                    right: 0,
                    top: 5,
                    tintColor: "#62c7fe",
                  }}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.Box}>
              <Image
                source={DummyData.ethereum.image}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                  position: "absolute",
                  left: 30,
                  top: 25,
                }}
              />
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 24,
                  color: "white",
                  position: " absolute",
                  right: 70,
                  top: 0,
                }}
              >
                {DummyData.ethereum.currency}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: "white",
                  position: " absolute",
                  right: 105,
                  top: 0,
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
                  bottom: 35,
                  left: 120,
                }}
              >
                ${DummyData.ethereum.amount}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: "red",
                  position: " absolute",
                  bottom: 35,
                  left: 120,
                }}
              >
                {DummyData.ethereum.changes}
              </Text>
              <View style={{ bottom: 55, right: 0 }}>
                <VictoryChart heigh={200} width={375}>
                  <VictoryLine
                    style={{
                      data: { stroke: "white" },
                    }}
                    data={DummyData.ethereum.chartData}
                    categories={{
                      x: ["Year", "month", "week", "today"],
                      y: ["600", "1,200", "1,800", "2,400"],
                    }}
                  />
                  <VictoryScatter
                    data={DummyData.ethereum.chartData}
                    size={7}
                    style={{ data: { fill: "white" } }}
                  />
                </VictoryChart>
              </View>
            </View>
            <VStack>
              <View
                style={{
                  bottom: 0,
                }}
              >
                <TextInput
                  style={styles.input}
                  onChangeText={(price) => setPrice(price)}
                  placeholder="Amount to Trade or Buy"
                  textAlign="center"
                />
              </View>
              <View
                style={{
                  top: 15,
                }}
              >
                <Button onPress={onSubmit} style={{ marginHorizontal: 20 }}>
                  <Text
                    style={{ color: "#fff", fontWeight: "700", fontSize: 16 }}
                  >
                    Buy
                  </Text>
                </Button>
              </View>
              <View
                style={{
                  top: 30,
                }}
              >
                <Button style={{ marginHorizontal: 20 }}>
                  <Text
                    style={{ color: "#fff", fontWeight: "700", fontSize: 16 }}
                  >
                    Trade
                  </Text>
                </Button>
              </View>
            </VStack>
            <View></View>
          </View>
        </View>
      </SafeAreaView>
    </NativeBaseProvider>
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
  Box: {
    width: "95%",
    height: 335,
    bottom: 40,
    borderRadius: 15,
    padding: 22,
    backgroundColor: "#62c7fe",
    alignItems: "center",
  },
  input: {
    height: 60,
    width: 350,
    borderRadius: 15,
    margin: 0,
    borderWidth: 1,
  },
});
