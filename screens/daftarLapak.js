import React, { useState } from "react";
import * as SecureStorage from "expo-secure-store";
import axios from "../api/axios";
import { useSelector, useDispatch } from "react-redux";
import { showNotif, notifText, registerLapakAct } from "../store/actions";

import * as ImagePicker from "expo-image-picker";
import { View, Text,Image } from "react-native";
import { TextInput } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import Notif from "../components/notif";
import style from "../stylesheet/app.stylesheet.js";

export default function daftarLapak({ navigation }) {
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [luas, setLuas] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [gambar, setGambar] = useState({});
  const dispatch = useDispatch();

  const notifRedux = useSelector((state) => state.shownotification);
  const handleDaftar = async () => {
    await dispatch(registerLapakAct(nama, alamat, luas, deskripsi, gambar.localUri));
  };

  //image
  //image picker

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);

    if (pickerResult.cancelled === true) {
      return;
    }
    
    setGambar({ localUri: pickerResult.uri });
  };

  return (
    <View style={style.container}>
      {notifRedux == true && <Notif />}
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
      {/* Image */}
      <TouchableOpacity >
        <TouchableOpacity
          
          onPress={openImagePickerAsync}
        >
          <Text>Upload Gambar</Text>
        </TouchableOpacity>

        {/* gambar */}
        <Image source={{ uri: gambar.localUri }} style={style.gambar} />
      </TouchableOpacity>

      
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
