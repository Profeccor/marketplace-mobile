import React, { useState } from "react";
import * as SecureStorage from "expo-secure-store";
import axios from "../api/axios";
import { useSelector, useDispatch } from "react-redux";
import { addProductAct } from "../store/actions";

import * as ImagePicker from "expo-image-picker";
import { View, Text, Image, Button } from "react-native";
import { TextInput } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import style from "../stylesheet/app.stylesheet.js";

export default function addProduct({ navigation }) {
  const [nama, setNama] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [gambar, setGambar] = useState({});
  const [selectedImage, setSelectedImage] = useState({});
  const [kategori, setKategori] = useState("");
  const [harga, setHarga] = useState("");
  const [stock, setStock] = useState("");
  const dispatch = useDispatch();
  const handleTambah = async () => {
    await dispatch(
      addProductAct(nama, deskripsi, gambar, kategori, harga, stock)
    );
  };

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
    <View>
      <Text>Nama</Text>
      <TextInput
        onChangeText={(value) => {
          setNama(value);
        }}
      ></TextInput>
      <Text>Deskripsi</Text>
      <TextInput
        onChangeText={(value) => {
          setDeskripsi(value);
        }}
      ></TextInput>
      <Text>Kategori</Text>
      <TextInput
        onChangeText={(value) => {
          setKategori(value);
        }}
      ></TextInput>
      <Text>Stock</Text>
      <TextInput
        keyboardType="numeric"
        onChangeText={(value) => {
          setStock(value);
        }}
      ></TextInput>
      <Text>Harga</Text>
      <TextInput
        keyboardType="numeric"
        onChangeText={(value) => {
          setHarga(value);
        }}
      ></TextInput>
      <Text>Gambar</Text>
      <TouchableOpacity onPress={openImagePickerAsync}>
        <Text>Pick a photo</Text>
      </TouchableOpacity>

      {/* gambar */}
      <Image
        source={{ uri: gambar.localUri }}
        style={{ width: 50, height: 50 }}
      />

      {/* <Image source={{uri: `http://localhost:3000/Product-ce44f349-23c4-4787-bf3b-47e60710d695.png`}}
       style={{width: 50, height: 50}} /> */}
      <TouchableOpacity
        style={style.loginbtn}
        onPress={() => {
          handleTambah();
        }}
      >
        <Text>tombol</Text>
      </TouchableOpacity>
    </View>
  );
}
