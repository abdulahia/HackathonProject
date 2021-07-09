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
} from "react-native";
import { LineChart } from "react-native-chart-kit";
let data = new Array(500, 550, 600, 620, 620, 650, 676);
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
const score = data[data.length - 1];
export default function CreditScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <View style={styles.pbackground}>
          <View style={styles.credit}>
            <Text style={styles.text}> TransUnion credit score: {score}</Text>
          </View>
          <View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 15,
                bottom: 110,
                color: "#62c7fe",
              }}
            >
              Tip: {tip}
            </Text>
          </View>
          <LineChart
            data={{
              labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
              datasets: [
                {
                  data: [500, 550, 600, 620, 620, 650, 676],
                },
              ],
            }}
            width={Dimensions.get("window").width - 21} // from react-native
            height={250}
            chartConfig={{
              backgroundColor: "#ffff",
              backgroundGradientFrom: "#ffff",
              backgroundGradientTo: "#ffff",
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(98, 199, 254)`,
              labelColor: (opacity = 1) => `rgba(98, 199, 254)`,
              style: {
                borderRadius: 0,
              },
              propsForDots: {
                r: "8",
                strokeWidth: "4",
                stroke: "#ffa726",
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
              bottom: 95,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
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
  credit: {
    backgroundColor: "#62c7fe",
    width: "70%",
    height: 40,
    right: "10%",
    bottom: 125,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlignVertical: "center",
    textAlign: "center",
    color: "#ffff",
    fontSize: 19,
  },
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
