import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import style from "../stylesheet/app.stylesheet.js";
import { useSelector, useDispatch } from "react-redux";
import {
  showNotif,
  notifText,
  Loggingin,
  verify,
  getInfo,
} from "../store/actions";
import Notif from "../components/notif";

export default function Loginscreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const notifRedux = useSelector((state) => state.shownotification);
  const dispatch = useDispatch();
  const handleLogin = async () => {
    await dispatch(Loggingin(email, password));
    await dispatch(verify());
  };

  return (
    <View style={style.container}>
      {notifRedux == true && <Notif />}
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
