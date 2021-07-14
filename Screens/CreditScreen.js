import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import JourneyScreen from "./JourneyScreen";
import { StimulatorScreen } from "./StimulatorScreen";
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
let data = new Array(500, 550, 600, 600, 600, 600, 676);
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
function Credit({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <View style={styles.pbackground}>
          <View style={styles.upcoming}>
            <Image
              source={require("../assets/learning.png")}
              resizeMode="contain"
              style={{
                width: 50,
                height: 50,
                left: 0,
                bottom: 10,
                tintColor: "#fff",
              }}
            />
            <Text
              style={{
                fontWeight: "bold",
                color: "#fff",
                top: 0,
              }}
            >
              Learn more about credit and how to improve it.
            </Text>

            <TouchableOpacity
              style={{
                top: 10,
                right: 5,
              }}
              onPress={() => navigation.navigate("video")}
            >
              <Text
                style={{
                  top: 10,
                  fontWeight: "bold",
                  color: "#748c94",
                }}
              >
                Learn more
              </Text>
              <Image
                source={require("../assets/right.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  left: 85,
                  bottom: 10,
                  tintColor: "#748c94",
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.stimilator}>
            <Image
              source={require("../assets/stim.png")}
              resizeMode="contain"
              style={{
                width: 50,
                height: 50,
                left: 0,
                bottom: 10,
                tintColor: "#fff",
              }}
            />
            <Text
              style={{
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              See how your choices affect your score.
            </Text>
            <TouchableOpacity
              style={{
                top: 10,
                right: 5,
              }}
              onPress={() => navigation.navigate("stim")}
            >
              <Text
                style={{
                  top: 10,
                  fontWeight: "bold",
                  color: "#748c94",
                }}
              >
                Learn more
              </Text>
              <Image
                source={require("../assets/right.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  left: 85,
                  bottom: 10,
                  tintColor: "#748c94",
                }}
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: 20,
              bottom: 300,
              fontWeight: "bold",
              color: "#62c7fe",
            }}
          >
            Credit
          </Text>
          <View style={styles.credit}>
            <Text style={styles.text}> TransUnion credit score: {score}</Text>
          </View>
          <View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 15,
                top: 265,
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
                  data: [500, 550, 600, 600, 600, 600, 676],
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
              bottom: 250,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function CreditScreen({ navigation }) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: "red",
        tabStyle: { backgroundColor: "#61EEFE", tabBarVisible: true },
        style: { backgroundColor: "#61EEFE" },
      }}
    >
      <Tab.Screen name="credit" component={Credit} />
      <Tab.Screen name="video" component={JourneyScreen} />
      <Tab.Screen name="stim" component={StimulatorScreen} />
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
  credit: {
    backgroundColor: "#62c7fe",
    width: "70%",
    height: 40,
    right: "10%",
    bottom: 260,
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
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  upcoming: {
    width: "45%",
    height: 150,
    right: 100,
    top: 420,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#62c7fe",
  },
  stimilator: {
    width: "45%",
    height: 150,
    left: 100,
    top: 270,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#62c7fe",
  },
});
