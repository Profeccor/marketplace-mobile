import React, { useState } from "react";
import * as SecureStorage from "expo-secure-store";
import axios from "../api/axios";
import { useSelector, useDispatch } from "react-redux";
import {addProductAct} from "../store/actions"

import { View, Text } from "react-native";
import { TextInput } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import style from "../stylesheet/app.stylesheet.js";

export default function addProduct({ navigation }) {
  const [nama, setNama] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [gambar, setGambar] = useState("");
  const [kategori, setKategori] = useState("");
  const [harga, setHarga] = useState("");
  const [stock, setStock] = useState("");
  const dispatch = useDispatch();
  const handleTambah = async () => {
   await dispatch (addProductAct(nama,deskripsi,gambar,kategori,harga,stock))
  
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
      <TextInput
        onChangeText={(value) => {
          setGambar(value);
        }}
      ></TextInput>
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
