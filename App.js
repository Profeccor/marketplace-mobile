import React, { useState } from "react";
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import * as SecureStorage from "expo-secure-store";
import axios from "./api/axios";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import style from "./stylesheet/app.stylesheet.js";
import Loginscreen from "./components/landingPage"
import Registerscreen from "./components/registerPage"
const Stack = createStackNavigator();


export default function App() {
  
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Login" component={Registerscreen} />
      <Stack.Screen name="Register" component={Registerscreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
