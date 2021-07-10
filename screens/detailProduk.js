import React, { useState, useEffect } from "react";
import {
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import style from "../stylesheet/detailproduct.stylesheet.js";
import { useSelector, useDispatch } from "react-redux";
import { searchProduct, getDetailProduk } from "../store/actions";

export default function detailProduk({ navigation,route }) {
  const dispatch = useDispatch()
  const detailresultsa = useSelector((state) => state.detailprodukresult);
  const detailresultstoko = useSelector((state) => state.tokoinfo);
  
  useEffect(()=>{
    getDetail()
    // console.log(route.params.idPassing,"INI USE EFFECT")
  },
  [route.params.idPassing]
  )
  const getDetail = async()=>{
    try{
      await dispatch(getDetailProduk(route.params.idPassing))
    }catch (err){
      console.log(err)
    }
  }

  return (
    <View style={style.container}>
      <Image
        source={{
          uri: `http://localhost:3000/${detailresultsa.gambar}`,
        }}
        style={style.gambar}
      />
     
      <TouchableOpacity style={style.infoprodukcontainer}>
      <Text style={style.textnama}>{detailresultsa.nama}</Text>
      <Text style={style.text}>Kategori: {detailresultsa.kategori}</Text>
        <Text style={style.text}>Harga: Rp. {detailresultsa.Order.harga} /kg</Text>
        <Text style={style.textnama}>Toko: {detailresultstoko.nama}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.infoprodukcontainer}>
        <Text style={style.textnama}>Deskripsi: </Text>
        <Text style={style.text}>
          {detailresultsa.deskripsi}.{" "}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.productbtn} onPress={()=>{
          navigation.navigate("HalamanPembelian")
      }}>
        <Text>Beli barang</Text>
      </TouchableOpacity>
    </View>
  );
}
