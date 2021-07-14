import React, { useState, useCallback, useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Credit from "./CreditScreen";

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
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function TransactionScreen({ navigation }) {
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
            Credit yooo
          </Text>
          <View
            style={{
              width: 50,
              height: 50,
              bottom: 135 - 20,
              right: 150,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("CryptoScreen")}
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
          </View>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text
              style={{
                bottom: 35,
                fontWeight: "bold",
                color: "grey",
                fontSize: 20,
              }}
            >
              Start Your Learning Journey!
            </Text>
            <YoutubePlayer
              height={350}
              width={375}
              play={playing}
              playList={"PLOmIpJDqCR-LRMsepGvSHI6nP1vi9h9wH"}
              onChangeState={onStateChange}
            />
            <View
              style={{
                bottom: 100,
              }}
            >
              <Button
                color="red"
                title={playing ? "pause " : "play"}
                onPress={togglePlaying}
              />
            </View>
          </View>
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
