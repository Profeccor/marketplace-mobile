import React, { useState } from "react";
import * as SecureStorage from "expo-secure-store";
import axios from "../api/axios";
import { useSelector, useDispatch } from "react-redux";
import { addProductAct } from "../store/actions";

import * as ImagePicker from "expo-image-picker";
import { View, Text, Image, Button } from "react-native";
import { TextInput } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import style from "../stylesheet/addproduct.stylesheet.js";

export default function addProduct({ navigation }) {
  const [nama, setNama] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [gambar, setGambar] = useState({});
  const [kategori, setKategori] = useState("");
  const [harga, setHarga] = useState("");
  const [stock, setStock] = useState("");
  const [pickerss,setpickerssResult]= useState({})
  const dispatch = useDispatch();
  const handleTambah = async () => {
    console.log("masuk ke handletambah")
    await dispatch(
      addProductAct(nama, deskripsi, gambar.localUri, kategori, harga, stock)
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
// setpickerssResult(pickerResult)
    setGambar({ localUri: pickerResult.uri });
  };

  return (
    <View style={style.container}>
      <Text>Nama</Text>
      <TextInput style={style.inputForm}
        onChangeText={(value) => {
          setNama(value);
        }}
      ></TextInput>
      <Text>Deskripsi</Text>
      <TextInput style={style.inputForm}
        onChangeText={(value) => {
          setDeskripsi(value);
        }}
      ></TextInput>
      <Text>Kategori</Text>
      <TextInput style={style.inputForm}
        onChangeText={(value) => {
          setKategori(value);
        }}
      ></TextInput>
      <Text>Stock</Text>
      <TouchableOpacity style={style.baris}>
      <TextInput
      style={style.inputFormint}
        keyboardType="numeric"
        onChangeText={(value) => {
          setStock(value);
        }}
      ></TextInput>
      <Text>gram</Text>
      </TouchableOpacity>
      <Text>Harga</Text>
      <TouchableOpacity style={style.baris}>
      <TextInput
      style={style.inputFormint}
        keyboardType="numeric"
        onChangeText={(value) => {
          setHarga(value);
        }}
      ></TextInput>
      <Text>/Kg</Text>
      </TouchableOpacity>
      
      
      <TouchableOpacity style={style.baris}>
      <TouchableOpacity style={style.productbtn} onPress={openImagePickerAsync}>
        <Text>Upload Gambar</Text>
      </TouchableOpacity>

      {/* gambar */}
      <Image
        source={{ uri: gambar.localUri }}
        style={style.gambar}
      />
      </TouchableOpacity>
     

      {/* <Image source={{uri: `http://localhost:3000/Product-ce44f349-23c4-4787-bf3b-47e60710d695.png`}}
       style={{width: 50, height: 50}} /> */}
      <TouchableOpacity
        style={style.loginbtn}
        onPress={() => {
          handleTambah();
        }}
      >
        <Text style={[{textAlign:"center"}]}>Add Product</Text>
      </TouchableOpacity>
      {/* <Text  style={[{textAlign:"center",color:"red"}]}>Terdapat form yang kosong</Text> */}
    </View>
  );
}
