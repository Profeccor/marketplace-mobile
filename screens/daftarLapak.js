import React, { useState } from "react";
import * as SecureStorage from "expo-secure-store";
import axios from "../api/axios";
import { useSelector, useDispatch } from "react-redux";
import { showNotif, notifText,registerLapakAct } from "../store/actions";



import { View, Text } from "react-native";
import { TextInput } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import Notif from "../components/notif"
import style from "../stylesheet/app.stylesheet.js";

export default function daftarLapak({ navigation }) {
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [luas, setLuas] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [gambar, setGambar] = useState("");
  const dispatch = useDispatch();

  const notifRedux = useSelector ((state)=>state.shownotification)
  const handleDaftar = async () => {
    await dispatch (registerLapakAct(nama,alamat,luas,deskripsi,gambar))
  };
  return (
    <View style={style.container}>
      {notifRedux == true && <Notif/>}
      <Text>Nama Lapak</Text>
      <TextInput
        onChangeText={(value) => {
          setNama(value);
        }}
      ></TextInput>
      <Text>Alamat</Text>
      <TextInput
        onChangeText={(value) => {
          setAlamat(value);
        }}
      ></TextInput>
      <Text>Luas</Text>
      <TextInput
        onChangeText={(value) => {
          setLuas(value);
        }}
      ></TextInput>
      <Text>Deskripsi</Text>
      <TextInput
        onChangeText={(value) => {
          setDeskripsi(value);
        }}
      ></TextInput>
      <Text>Gambar</Text>
      <TextInput
        onChangeText={(value) => {
          setGambar(value);
        }}
      ></TextInput>
      <TouchableOpacity
        style={style.loginbtn}
        onPress={() => {
          handleDaftar();
        }}
      >
        <Text>Daftarkan Lapak</Text>
      </TouchableOpacity>
    </View>
  );
}
