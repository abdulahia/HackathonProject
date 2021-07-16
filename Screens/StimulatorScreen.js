import React, { useState, useCallback, useRef, Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Credit from "./CreditScreen";
import ModalSelector from "react-native-modal-selector";

import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  Dimensions,
  Image,
  TouchableOpacity,
  Alert,
  TextInput,
  Switch,
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
let score = 676;
let tips = Array(
  "Review Your Credit Report",
  "Set Up Payment Reminders",
  "Pay More Than Once in a Billing Cycle",
  "Contact Your Creditors",
  "Apply for New Credit Sparingly",
  "Don’t Close Unused Credit Card Accounts",
  "Pay Attention to Credit Utilization"
);
var tip = tips[Math.floor(Math.random() * tips.length)];
export class StimulatorScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 676,
    };
  }
  render() {
    let credit = 676;
    const data = [
      { key: credit++, section: true, label: "Line of Credit" },
      { key: credit - 18, label: "$2,500" },
      { key: credit - 16, label: "$5,000" },
      {
        key: credit - 14,
        label: "$10,000",
        accessibilityLabel: "Tap here for cranberries",
      },
      { key: credit - 14, label: "$20,000" },
    ];
    const mortgage = [
      { key: credit++, section: true, label: "Loan Amount" },
      { key: credit + 6, label: "$100,00" },
      { key: credit + 6, label: "$150,000" },
      {
        key: credit + 6,
        label: "$200,000",
        accessibilityLabel: "Tap here for cranberries",
      },
      { key: credit + 6, label: "$250,000" },
    ];
    const declined = [
      { key: credit++, section: true, label: "Loan Amount" },
      { key: credit - 8, label: "$100,00" },
      { key: credit - 8, label: "$150,000" },
      {
        key: credit - 8,
        label: "$200,000",
        accessibilityLabel: "Tap here for cranberries",
      },
      { key: credit - 8, label: "$250,000" },
    ];
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.view}>
          <View style={styles.pbackground}>
            <Text
              style={{
                bottom: 100 - 20,
                fontWeight: "bold",
                color: "#62c7fe",
                fontSize: 20,
              }}
            >
              Estimate
            </Text>
            <View
              style={{
                width: 50,
                height: 450,
                bottom: 115,
                right: 150,
                color: "red",
              }}
            >
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("credit")}
              >
                <Image
                  source={require("../assets/left.png")}
                  resizeMode="contain"
                  style={{
                    width: 50,
                    height: 50,
                    right: 10,
                    bottom: 0,
                    tintColor: "#62c7fe",
                  }}
                />
              </TouchableOpacity>
              <View style={styles.credit}>
                <Text
                  style={{
                    textAlignVertical: "center",
                    textAlign: "center",
                    color: "#ffff",
                    fontSize: 19,
                    right: 5,
                  }}
                >
                  Current TransUnion credit score: {score}
                </Text>
              </View>
              <View style={styles.upcoming}>
                <Image
                  source={require("../assets/creditc.png")}
                  resizeMode="contain"
                  style={{
                    width: 50,
                    height: 50,
                    right: 0,
                    bottom: 25,
                    tintColor: "#fff",
                  }}
                />
                <Text
                  style={{
                    color: "grey",
                    fontWeight: "bold",
                  }}
                >
                  Additional Credit card
                </Text>
                <View
                  style={{
                    top: 20,
                    color: "red",
                  }}
                >
                  <ModalSelector
                    closeOnChange={false}
                    data={data}
                    initValue="# Line of Credit"
                    onChange={(option) => {
                      Alert.alert(`credit score: ${option.key}`);
                    }}
                  />
                </View>
              </View>
              <View style={styles.upcoming2}>
                <Image
                  source={require("../assets/house.png")}
                  resizeMode="contain"
                  style={{
                    width: 50,
                    height: 50,
                    right: 0,
                    bottom: 25,
                    tintColor: "#fff",
                  }}
                />
                <Text
                  style={{
                    color: "grey",
                    fontWeight: "bold",
                  }}
                >
                  Getting new mortgage
                </Text>
                <View
                  style={{
                    top: 20,
                    color: "red",
                  }}
                >
                  <ModalSelector
                    closeOnChange={false}
                    data={mortgage}
                    initValue="Loan Amount"
                    onChange={(option) => {
                      Alert.alert(`credit score: ${option.key}`);
                    }}
                  />
                </View>
              </View>
              <View style={styles.upcoming3}>
                <Image
                  source={require("../assets/installment.png")}
                  resizeMode="contain"
                  style={{
                    width: 50,
                    height: 50,
                    right: 0,
                    bottom: 25,
                    tintColor: "#fff",
                  }}
                />
                <Text
                  style={{
                    color: "grey",
                    fontWeight: "bold",
                  }}
                >
                  installment loan
                </Text>
                <View
                  style={{
                    top: 20,
                    color: "red",
                  }}
                >
                  <ModalSelector
                    closeOnChange={false}
                    data={mortgage}
                    initValue="Loan Amount"
                    onChange={(option) => {
                      Alert.alert(`credit score: ${option.key}`);
                    }}
                  />
                </View>
              </View>
              <View style={styles.upcoming4}>
                <Image
                  source={require("../assets/loan.png")}
                  resizeMode="contain"
                  style={{
                    width: 50,
                    height: 50,
                    right: 0,
                    bottom: 25,
                    tintColor: "#fff",
                  }}
                />
                <Text
                  style={{
                    color: "grey",
                    fontWeight: "bold",
                  }}
                >
                  Declined for a loan
                </Text>
                <View
                  style={{
                    top: 20,
                    color: "red",
                  }}
                >
                  <ModalSelector
                    backdropPressToClose={true}
                    closeOnChange={false}
                    data={declined}
                    initValue="Loan Amount"
                    onChange={(option) => {
                      Alert.alert(`credit score: ${option.key}`);
                    }}
                  />
                </View>
              </View>
              <View
                style={{
                  bottom: 220,
                  width: 370,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 15,
                    top: 25,
                    color: "#62c7fe",
                  }}
                >
                  Tip: {tip}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#61EEFE",
    // alignItems: "center",
    // justifyContent: "center",
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
  credit: {
    backgroundColor: "#62c7fe",
    width: 350,
    height: 40,
    right: "10%",
    top: 25,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  upcoming: {
    width: 175,
    height: 180,
    right: 15,
    top: 85,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#62c7fe",
  },
  upcoming2: {
    width: 175,
    height: 180,
    left: 190,
    bottom: 95,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#62c7fe",
  },
  upcoming3: {
    width: 175,
    height: 180,
    left: 190,
    bottom: 50,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#62c7fe",
  },
  upcoming4: {
    width: 175,
    height: 180,
    right: 15,
    bottom: 230,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#62c7fe",
  },
});
