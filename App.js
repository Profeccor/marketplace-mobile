import React, { useState } from "react";
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

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notification,setNotification] = useState(false)
  const [notificationText,setNotificationText] = useState("")
  const handleLogin = async () => {
    try {
      const response = await axios({
        method: "post",
        url: "/auth/login",
        data: {
          email: email,
          password: password,
        },
      });
      SecureStorage.setItemAsync("accesstoken", response.data.accessToken)
        .then(() => {
          return SecureStorage.getItemAsync("accesstoken");
        })
        .then((token)=>{
          //ganati halaman
          console.log(token)

        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err.response.data);
      setNotification(true)
      setNotificationText(err.response.data.msg)
    }
  };
 

  return (
    <View style={style.container}>
      <TextInput
        style={style.inputForm}
        placeholder="Email"
        onChangeText={(emailform) => {
          setEmail(emailform);
        }}
      />
      <TextInput
        style={style.inputForm}
        placeholder="Password"
        onChangeText={(passwordform) => {
          setPassword(passwordform);
        }}
      />
      {notification == true && (
        <View>
        <Text style={style.text}>{notificationText}</Text> 
        <TouchableOpacity
        style={style.loginbtn}
        color="#fff"
        onPress={() => {
          setNotification (false)
        }}
        >
        <Text style={[{ textAlign: "center" }]}>Close</Text>
        </TouchableOpacity></View> )}

      <TouchableOpacity
        style={style.loginbtn}
        color="#fff"
        onPress={() => {
          handleLogin();
        }}
      >
        <Text style={[{ textAlign: "center" }]}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
