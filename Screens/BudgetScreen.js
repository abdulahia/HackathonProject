import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AddScreen from "./AddScreen";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
  Button,
  Alert,
  
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {
  NativeBaseProvider,
  Container,
  Checkbox,
  Body,
  Right,
  List,
} from "native-base";
import Animated from "react-native-reanimated";
import {useSelector, useDispatch} from 'react-redux';
import {deleteTransaction} from '../scr/store/actions/transactionAction';



function Item({title,id,price}){
  const dispatch = useDispatch();
  return(
    <View style={{
      left:5,
        marginVertical: 0,
        paddingHorizontal: 0,
        paddingVertical:20,
      }}>
    <List>
    <List.Item>
      <Checkbox
          onPress={() => {
            dispatch(deleteTransaction(id));
          }}
          color="#ff4500"
          checked={true}
          />
      <Text style={{
        fontSize:17, fontWeight:"400",marginLeft: 10, color: true? "#009BFC":"#FF4500"}}>
      {title}
      </Text>
      <View style={{
        flex: 1,
        justifyContent:'center',
        left: '90%'
      }}>
      <Text style={{
        fontSize:16, fontWeight:"500", color: price > 0? '#009BFC' : '#FF4500', alignSelf:"right"
      }}>
           {price > 0 ? `$${price}` : `-$${Math.abs(price)}`}
        </Text>
      </View>
    </List.Item>
    </List>
    </View>
  )
}


function BudgetScreen({ navigation }) {
  const {transactions} = useSelector((state) => state.transactions);
  const prices = transactions.map(transactions => transactions.price)
const totalPrice = prices.reduce((prev, cur) => (prev +=cur), 0).toFixed(2)
  const expanse = prices.filter(price =>price<0).reduce((prev,cur) => (prev +=cur), 0) *-1;
  
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.view}>
          <View style={styles.pbackground}>
            <View>
              <Text
                style={{
                  bottom: 25,
                  fontWeight: "bold",
                  color: "#62c7fe",
                  fontSize: 20,
                }}
              >
                Budgeting
              </Text>
            </View>
            <View style={styles.Box}>
              <Text
                style={{
                  fontSize: 15,
                  color: "#fff",
                  fontFamiily: "Lato-Regular",
                  fontWeight: "600",
                  right: 60,
                }}
              >
                Current Available Balance
              </Text>
              <Text
                style={{
                  fontFamiily: "Lato-Medium",
                  fontSize: 32,
                  color: "#fff",
                  fontWeight: "600",
                  right: 85,
                }}
              >
                ${totalPrice}
              </Text>
              <Text
                style={{
                  top: 70,
                  right: 70,
                  fontSize: 18,
                  color: "white",
                }}
              >
                7543 **** **** **43
              </Text>
              <View
                style={{
                  backgroundColor: "#62c7fe",
                  width: 50,
                  height: 50,
                  bottom: 40,
                  left: 135,
                }}
              >
                <TouchableOpacity
                  style={{
                    alignItems: "center",
                    borderRadius: 20,
                  }}
                  onPress={() => navigation.navigate("AddScreen")}
                >
                  <Image
                    source={require("../assets/plus.png")}
                    resizeMode="contain"
                    style={{
                      width: 45,
                      height: 45,
                      left: 0,
                      bottom: 0,
                      tintColor: "white",
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <Text
                  style={{
                    bottom: 20,
                    left: 135,
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  Balance
                </Text>
                <Text
                  style={{
                    left: 135,
                    bottom: 15,
                    color: "white",
                    fontSize: 20,
                  }}
                >
                  ${expanse}
                </Text>
              </View>
            </View>
            <View>
            </View>
            <View style = {{
              top:30,
              // marginVertical:3,
              width:"95%",
              height:"55%",
              backgroundColor:"white"
            }}>
            <View style={{
              
            }}>
            <FlatList
            data = {transactions}
            renderItem={({item}) => (
              <Item title= {item.title} price = {item.price} id={item.id}/>
            )}
            keyExtractor={(item) => item.id.toString()}
            />
            </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </NativeBaseProvider>
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
      <Tab.Screen name="BudgetScreen" component={BudgetScreen} />
      <Tab.Screen name="AddScreen" component={AddScreen} />
    </Tab.Navigator>
  );
}

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
    // justifyContent:'center',
    alignItems: "center",
  },
});
