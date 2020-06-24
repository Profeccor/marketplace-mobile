import React, { useState } from "react";
import * as SecureStorage from "expo-secure-store";
import axios from "../api/axios";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import style from "../stylesheet/app.stylesheet.js";
import { useSelector, useDispatch } from "react-redux";
import { showNotif, notifText } from "../store/actions";
import Notif from "../components/notif";

export default function Loginscreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const notifRedux = useSelector((state) => state.shownotification);
  const dispatch = useDispatch();
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
        .then((token) => {
          //ganti halaman
          console.log(token);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err.response.data);
      dispatch(showNotif(true));
      dispatch(notifText(err.response.data.msg));
    }
  };
  
  return (
    <View style={style.container}>
    {notifRedux == true && <Notif></Notif>}
      <Text>Email</Text>
      <TextInput
        style={style.inputForm}
        placeholder="Email"
        onChangeText={(emailform) => {
          setEmail(emailform);
        }}
      />
      <Text>Password</Text>
      <TextInput
        style={style.inputForm}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(passwordform) => {
          setPassword(passwordform);
        }}
      />

      <TouchableOpacity
        style={style.loginbtn}
        color="#fff"
        onPress={() => {
          handleLogin();
        }}
      >
        <Text style={[{ textAlign: "center" }]}>Login</Text>
      </TouchableOpacity>
      <Text>
        Belum punya akun?
        <Text
          onPress={() => {
            navigation.navigate("Register");
          }}
          style={{ color: "blue" }}
        >
          {" "}
          Daftar Sekarang!
        </Text>
      </Text>
    </View>
  );
}
