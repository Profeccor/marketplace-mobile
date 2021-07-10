import React, { useState } from "react";
import * as SecureStorage from "expo-secure-store";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import style from "../stylesheet/app.stylesheet.js";
import { useSelector, useDispatch } from "react-redux";
import {
  showNotif,
  notifText,
  Loggingin,
  verify,
  logOut,
  getInfo,
} from "../store/actions";
import Notif from "../components/notif";
// import { NavigationActions } from 'react-navigation';

export default function Loginscreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showhiddenPass, setShowHiddenPass] = useState(true);
  const notifRedux = useSelector((state) => state.shownotification);
  const dispatch = useDispatch();

  //navigation back
// const resetAction = NavigationActions.reset({
//   index: 0,
//   actions: [NavigationActions.navigate("HomePage")],
// });


const handleLogin = async () => {
  try {
    await dispatch(Loggingin(email, password));
    await dispatch(verify());
   // this.props.navigation.dispatch(resetAction);
      navigation.navigate("HomePage");
    } catch (err) {
      console.log(err);
    }
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
        secureTextEntry={showhiddenPass}
        onChangeText={(passwordform) => {
          setPassword(passwordform);
        }}
      />

      <TouchableOpacity
        onPress={() => {
          setShowHiddenPass(!showhiddenPass);
        }}
      >
        <Text>change show</Text>
      </TouchableOpacity>
      {/* <Text style={[{ textAlign: "center" }]}>Terdapat form yang kosong</Text>  */}

      <TouchableOpacity
        style={style.loginbtn}
        color="#fff"
        onPress={() => {
          handleLogin();
        }}
      >
        <Text style={[{ textAlign: "center" }]}>Login</Text>
      </TouchableOpacity>

      <Text style={[{ textAlign: "center" }]}>
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
