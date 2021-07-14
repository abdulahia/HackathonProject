import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../scr/store/actions/transactionAction";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
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

const Add = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    if (!title || !price) {
      return alert("Please fill all fields");
    }

    const id = Math.floor(Math.random() * 1);
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
                top: 5,
                fontWeight: "bold",
                color: "#62c7fe",
                fontSize: 20,
              }}
            >
              Add Expanse
            </Text>
            <View
              style={{
                width: 50,
                height: 450,
                bottom: 95,
                right: 150,
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("BudgetScreen")}
              >
                <Image
                  source={require("../assets/left.png")}
                  resizeMode="contain"
                  style={{
                    width: 50,
                    height: 50,
                    right: 10,
                    top: 60,
                    tintColor: "#62c7fe",
                  }}
                />
              </TouchableOpacity>
            </View>
            <VStack>
              <View
                style={{
                  bottom: 370,
                }}
              >
                <FormControl>
                  <TextInput
                    style={styles.input}
                    onChangeText={(title) => setTitle(title)}
                    placeholder="Expanse Title"
                    textAlign="center"
                  />
                </FormControl>
              </View>
              <View
                style={{
                  bottom: 350,
                }}
              >
                <TextInput
                  style={styles.input}
                  onChangeText={(price) => setPrice(price)}
                  placeholder="Expanse Amount"
                  keyboardType="number-pad"
                  textAlign="center"
                  // onSubmitEditing={onSubmit}
                />
              </View>
              <View
                style={{
                  bottom: 250,
                }}
              >
                <Button onPress={onSubmit} style={{ marginHorizontal: 20 }}>
                  <Text
                    style={{ color: "#fff", fontWeight: "700", fontSize: 16 }}
                  >
                    Add Transaction
                  </Text>
                </Button>
              </View>
            </VStack>
          </View>
        </View>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#61EEFE",
  },
  pbackground: {
    backgroundColor: "white",
    width: "95%",
    height: 700,
    bottom: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Box: {
    width: "95%",
    height: 189,
    bottom: 0,
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
export default Add;
