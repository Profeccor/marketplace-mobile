import React, { useState } from "react";
import {
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import style from "../stylesheet/halamanpembelian.stylesheet.js";
import { useSelector, useDispatch } from "react-redux";
import { searchProduct } from "../store/actions";

export default function halamanPembelian({ navigation }) {
  return (
    <View style={style.container}>
      <Text style={style.namebold}>Anshor Farm</Text>
      <Text>Banyuwangi</Text>
      <TouchableOpacity style={style.infoprodukcontainer}>
        <Image
          source={{
            uri: `http://localhost:3000/Product-3397a31b-ef13-4134-ad01-00ae5a5401a9.jpg`,
          }}
          style={style.gambar}
        />
        <TouchableOpacity style={style.kolom}>
          <Text style={style.namebold}>Tomat</Text>
          <Text>1000 gram</Text>
          <Text>Rp. 11000</Text>
        </TouchableOpacity>
      </TouchableOpacity>

      <Text style={style.text}>Isi Informasi Penerima:</Text>

      <TouchableOpacity style={style.baris}>
        <Text style={style.text}>Nama Penerima</Text>
        <TextInput
          style={[
            {
              marginLeft: 140,
              borderColor: "#808080",
              borderBottomWidth: 1,
              width: 150,
            },
          ]}
        ></TextInput>
      </TouchableOpacity>

      <TouchableOpacity style={style.baris}>
        <Text style={style.text}>Nomer Handphone</Text>
        <TextInput
          style={[
            {
              marginLeft: 120,
              borderColor: "#808080",
              borderBottomWidth: 1,
              width: 150,
            },
          ]}
        ></TextInput>
      </TouchableOpacity>

      <TouchableOpacity style={style.baris}>
        <Text style={style.text}>Provinsi</Text>
        <TextInput
          style={[
            {
              marginLeft: 188,
              borderColor: "#808080",
              borderBottomWidth: 1,
              width: 150,
            },
          ]}
        ></TextInput>
      </TouchableOpacity>

      <TouchableOpacity style={style.baris}>
        <Text style={style.text}>Kabupaten</Text>
        <TextInput
          style={[
            {
              marginLeft: 173,
              borderColor: "#808080",
              borderBottomWidth: 1,
              width: 150,
            },
          ]}
        ></TextInput>
      </TouchableOpacity>
      <TouchableOpacity style={style.baris}>
        <Text style={style.text}>Kecamatan</Text>
        <TextInput
          style={[
            {
              marginLeft: 172,
              borderColor: "#808080",
              borderBottomWidth: 1,
              width: 150,
            },
          ]}
        ></TextInput>
      </TouchableOpacity>
      <TouchableOpacity style={style.baris}>
        <Text style={style.text}>Detail Alamat:</Text>
        <TextInput
          style={[
            {
              marginLeft: 160,
              borderColor: "#808080",
              borderBottomWidth: 1,
              width: 150,
            },
          ]}
        ></TextInput>
      </TouchableOpacity>
      <TouchableOpacity style={style.baris}>
        <Text style={style.text}>Kode Pos</Text>
        <TextInput
          style={[
            {
              marginLeft: 180,
              borderColor: "#808080",
              borderBottomWidth: 1,
              width: 150,
            },
          ]}
        ></TextInput>
      </TouchableOpacity>

      <TouchableOpacity style={[{ margin: 10 }]}></TouchableOpacity>

      <TouchableOpacity style={[{ margin: 10 }]}>
        <Text>Pilih Kurir:</Text>
        <TextInput style={[{margin:10,}]}>JNE</TextInput>
        <Text>Ringkasan Belanja</Text>
        <Text>Harga Barang:       Rp. 11000</Text>
        <Text>Ongkos Kirim:       Rp. 15000</Text>
        <Text>Total Tagihan       Rp. 26000</Text>
      </TouchableOpacity>
 {/* <Text style={[{ textAlign: "center",color:"red" }]}>Informasi Penerima Kosong</Text> */}
      <TouchableOpacity style={style.btn}>
        <Text>Beli</Text>
      </TouchableOpacity>
    </View>
  );
}
