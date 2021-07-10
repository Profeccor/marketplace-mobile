import React, { useState } from "react";
import {
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import style from "../stylesheet/halamanpengiriman.stylesheet.js";
import { useSelector, useDispatch } from "react-redux";
import { searchProduct } from "../store/actions";

export default function halamanPengiriman({navigation}){
    return (
        <View style={style.container}>
          
          <TouchableOpacity style={style.infoprodukcontainer}>
            <Image
              source={{
                uri: `http://localhost:3000/Product-3397a31b-ef13-4134-ad01-00ae5a5401a9.jpg`,
              }}
              style={style.gambar}
            />
            <TouchableOpacity style={style.kolom}>
              <Text style={[{color:"blue",fontSize:25}]}>Menunggu Konfirmasi</Text>
              <Text style={style.namebold}>Tomat</Text>
              <Text>1000 gram</Text>
              <Text>Rp. 11000</Text>
            </TouchableOpacity>
          </TouchableOpacity>
    
          <Text style={style.text}>Isi Informasi Penerima:</Text>
    
          <TouchableOpacity style={style.baris}>
            <Text style={style.text}>Nama Penerima:  </Text>
            <Text style={style.text}>Fahrul Arifin</Text>
            
          </TouchableOpacity>
    
          <TouchableOpacity style={style.baris}>
          <Text style={style.text}>Nomer Handphone:  </Text>
          <Text style={style.text}>081331285665</Text>
          </TouchableOpacity>
    
          <TouchableOpacity style={style.baris}>
            <Text style={style.text}>Provinsi:  </Text>
            <Text style={style.text}>Jawa Timur</Text>
            
          </TouchableOpacity>
    
          <TouchableOpacity style={style.baris}>
            <Text style={style.text}>Kabupaten:  </Text>
            <Text style={style.text}>Jember</Text>
            
          </TouchableOpacity>
          <TouchableOpacity style={style.baris}>
            <Text style={style.text}>Kecamatan:  </Text>
            <Text style={style.text}>Kaliwates</Text>
            
          </TouchableOpacity>
          <TouchableOpacity style={style.baris}>
            <Text style={style.text}>Detail Alamat:  </Text>
            <Text style={style.text}>Wahid Hasyim no.15</Text>
            
          </TouchableOpacity>
          <TouchableOpacity style={style.baris}>
            <Text style={style.text}>Kode Pos:  </Text>
            <Text style={style.text}>68125</Text>
            
          </TouchableOpacity>
          <TouchableOpacity style={style.baris}>
            <Text style={style.text}>Kurir:  </Text>
            <Text style={style.text}>JNE</Text>
            
          </TouchableOpacity>
    
          <TouchableOpacity style={[{ margin: 10 }]}></TouchableOpacity>
    
          <TouchableOpacity style={[{ margin: 10 }]}>
           
            <Text>Ringkasan Belanja</Text>
            <Text>Harga Barang:       Rp. 11000</Text>
            <Text>Ongkos Kirim:       Rp. 15000</Text>
            <Text>Total Tagihan       Rp. 26000</Text>
          </TouchableOpacity>
     {/* <Text style={[{ textAlign: "center",color:"red" }]}>Informasi Penerima Kosong</Text> */}
          <TouchableOpacity style={style.baris}>
          <TouchableOpacity style={style.btn}>
            <Text>Menolak</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.btn}>
            <Text>Diterima</Text>
          </TouchableOpacity>
          </TouchableOpacity>
          <Text style={[{textAlign:"center",fontSize:15}]}>Order telah ditolak</Text>
        </View>
      );
}