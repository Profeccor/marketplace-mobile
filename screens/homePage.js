import React, { useState } from "react";
import * as SecureStorage from "expo-secure-store";
import {
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  StyleSheet,
} from "react-native";
import Constants from "expo-constants";
import style from "../stylesheet/homepage.stylesheet.js";
import { useSelector, useDispatch } from "react-redux";
import { searchProduct } from "../store/actions";
import Notif from "../components/notif";

export default function homePage({ navigation }) {
  const [searchkeyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  const searchresult = useSelector((state) => state.searchresult);
  const currentuser = useSelector((state) => state.userinfo);

  const handleSearch = async () => {
    try {
      await dispatch(searchProduct(searchkeyword));
    } catch (err) {
      console.log(err);
    }
  };
  const handleLogout = async () => {
    SecureStorage.deleteItemAsync("accesstoken")
      .then(() => {
        navigation.navigate("Login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.baris}>
        <TextInput
          style={style.formSearch}
          placeholder="isi search disini"
          onChangeText={(value) => {
            setKeyword(value);
          }}
        ></TextInput>
        <TouchableOpacity
          style={style.tombol}
          onPress={() => {
            handleSearch();
          }}
        >
          <Text>Search</Text>
        </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity style={[{ backgroundColor: "#aaaaaa", height: 450 }]}>
        {searchresult.map((row, index) => {
          return (
            <View key={index}>
              <TouchableOpacity
                style={style.baris}
                onPress={() => {
                  navigation.navigate("DetailProduk", { idPassing: row.id });
                }}
              >
                <Image
                  source={{ uri: `http://localhost:3000/${row.gambar}` }}
                  style={{ width: 50, height: 50 }}
                />
                <Text style={[{ fontSize: 25, marginLeft: 20 }]}>
                  {row.nama}
                </Text>
                {/* <Text>{row.deskripsi}</Text>
                <Text>{row.Order.harga}</Text>
                <Text>{row.Order.stock}</Text> */}
              </TouchableOpacity>
            </View>
          );
        })}
      </TouchableOpacity>
      <TouchableOpacity style={style.menuContainer}>
        <TouchableOpacity
          style={style.menu}
          onPress={() => {
            navigation.navigate("ProfilSaya");
          }}
        >
          <Text>Profil</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.menu}
          onPress={() => {
            if (currentuser.Toko == null) {
              console.log("TOKO KOSONG <<<<<<<<<<<<<<");
              navigation.navigate("LapakRegister");
            } else {
              navigation.navigate("LapakSaya");
              console.log("INI ADA TOKO <<<<<<<<<<<<<<<");
            }
          }}
        >
          <Text>Tokoku</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.menu}
          onPress={() => {
            navigation.navigate("HalamanPengiriman");
          }}
        >
          <Text>pengiriman</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.menu}
          onPress={() => {
            handleLogout();
          }}
        >
          <Text style={[{ textAlign: "center" }]}>logOut</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}
