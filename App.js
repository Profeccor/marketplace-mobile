import React, { useState } from "react";
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"


import DetailProduk from "./screens/detailProduk"
import HalamanPengiriman from "./screens/halamanPengiriman"
import HalamanPembelian from "./screens/halamanPembelian"
import HomePage from "./screens/homePage"
import KeranjangPage from "./screens/keranjangPage"
import ProfilSayaPage from "./screens/profilSayaPage"
import Loginscreen from "./screens/landingPage"
import Registerscreen from "./screens/registerPage"
import Lapakregisterscreen from "./screens/daftarLapak"
import Lapaksayascreen from "./screens/lapakSaya"
import Addproductscreen from "./screens/addProduct"
const Stack = createStackNavigator();
import store from "./store"
import { Provider} from "react-redux"



export default function App() {
  
  return (
    <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Login" component={Loginscreen} />
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="ProfilSaya" component={ProfilSayaPage} />
      <Stack.Screen name="KeranjangPage" component={KeranjangPage} />
      <Stack.Screen name="Register" component={Registerscreen} />
      <Stack.Screen name="DetailProduk" component={DetailProduk} />
      <Stack.Screen name="HalamanPembelian" component={HalamanPembelian} />
      <Stack.Screen name="HalamanPengiriman" component={HalamanPengiriman} />
      <Stack.Screen name="LapakSaya" component={Lapaksayascreen} />
      <Stack.Screen name="AddProduct" component={Addproductscreen} />
      <Stack.Screen name="LapakRegister" component={Lapakregisterscreen} />
    </Stack.Navigator>
  </NavigationContainer>
  </Provider>
  );
}
