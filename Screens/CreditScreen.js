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

export default function CreditScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text}>Credit Screen</Text>
      </View>
    </SafeAreaView>
  );
}

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
    bottom: "0%",
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
