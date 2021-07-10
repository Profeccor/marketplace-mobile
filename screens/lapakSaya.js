import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import axios from "../api/axios";
import style from "../stylesheet/lapaksaya.stylesheet.js";
import { useDispatch, useSelector } from "react-redux";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { TextInput, Button } from "react-native-paper";
import { getLapakAct } from "../store/actions";
export default function Lapakscreen({ navigation }) {
  const dispatch = useDispatch();
  const currentuser = useSelector((state) => state.userinfo);
  const currentlapak = useSelector((state) => state.currentlapak);

  useEffect(() => {
    if (currentuser.Toko==null){
      console.log("TOKO KOSONG <<<<<<<<<<<<<<")
      // navigation.navigate("LapakRegister")
    }else{
      getToko();
      console.log("INI ADA TOKO <<<<<<<<<<<<<<<")

    }
  }, []);
  const getToko = async () => {
    try {
      await dispatch(getLapakAct(currentuser.Toko.id));
      
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={style.container}>
      <Text>Produk Anda</Text>
      <TouchableOpacity style={style.produkContainer}>
        {/* INI PENGULANGAN RENDER */}

        {currentlapak.Products.map((value, index) => {
          return (
            <View key={index} style={style.isiProduk}>
              <TouchableOpacity onPress={()=>{
                console.log(value.nama)
              }}>
              <Image
                source={{ uri: `http://localhost:3000/${value.gambar}` }}
                style={style.gambar}
              />
              <TouchableOpacity style={style.textContainer}>
                <Text style={style.namabarangtext}>{value.nama}</Text>
                <Text style={style.textsty}>{value.kategori}</Text>
                <Text style={style.textsty}>{value.deskripsi}</Text>
              </TouchableOpacity>
              </TouchableOpacity>
            </View>
          );
        })}
      </TouchableOpacity>

      <TouchableOpacity
        style={style.tombol}
        onPress={() => {
          navigation.navigate("AddProduct");
        }}
      >
        <Text>Tambahkan Produk</Text>
      </TouchableOpacity>
    </View>
  );
}
