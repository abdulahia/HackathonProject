import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from "react-native-vector-icons";
import * as Animatable from "react-native-animatable";
import CreditScreen from "./CreditScreen";
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
import { useNavigation } from "@react-navigation/native";
console.disableYellowBox = true;
interface CreditScreenProps {
  navigation: any;
}

// Why not just extend the thing?
export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <View style={styles.pbackground}>
          <Image
            bottom={35}
            animation="fadeInUpBig"
            style={styles.logo}
            source={require("../assets/logo.png")}
          />
          <TouchableOpacity
            style={{
              backgroundColor: "#62c7fe",
              borderRadius: 15,
              width: "90%",
              height: 130,
              right: 0,
              bottom: 30,
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("CreditScreen")}
          >
            <Image // relative to the button
              source={require("../assets/credit.png")}
              resizeMode="contain"
              style={{
                width: 45,
                height: 45,
                left: 0,
                top: 10,
                tintColor: "white",
              }}
            />
            <Text
              style={{
                color: "grey",
                top: 25,
                fontSize: 16,
                fontWeight: "bold",
                alignItems: "center",
              }}
            >
              Keep up to date on all-important credit informatoin.
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#62c7fe",
              borderRadius: 15,
              width: "90%",
              height: 130,
              right: 0,
              top: 0,
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("CryptoScreen")}
          >
            <Image
              source={require("../assets/crypto.png")}
              resizeMode="contain"
              style={{
                width: 45,
                height: 45,
                left: 0,
                top: 10,
                tintColor: "white",
              }}
            />
            <Text
              style={{
                color: "grey",
                top: 25,
                fontSize: 16,
                fontWeight: "bold",
                alignItems: "center",
              }}
            >
              Get involved in the popular crypto market
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#62c7fe",
              borderRadius: 15,
              width: "90%",
              height: 130,
              right: 0,
              top: 30,
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("BudgetScreen")}
          >
            <Image
              source={require("../assets/budget.png")}
              resizeMode="contain"
              style={{
                width: 45,
                height: 45,
                left: 0,
                top: 10,
                tintColor: "white",
              }}
            />
            <Text
              style={{
                color: "grey",
                top: 25,
                fontSize: 16,
                fontWeight: "bold",
                alignItems: "center",
              }}
            >
              Easily add up your financial expenses
            </Text>
          </TouchableOpacity>
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

  topBanner: {
    borderRadius: 25,
    width: 120 * 2,
    height: 120,
    backgroundColor: "#ADD8E6", // light blue
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
});
