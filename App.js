import React, { useState } from "react";
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"

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
      <Stack.Screen name="AddProduct" component={Addproductscreen} />
      <Stack.Screen name="Login" component={Loginscreen} />
      <Stack.Screen name="LapakSaya" component={Lapaksayascreen} />
      <Stack.Screen name="LapakRegister" component={Lapakregisterscreen} />
      <Stack.Screen name="Register" component={Registerscreen} />
    </Stack.Navigator>
  </NavigationContainer>
  </Provider>
  );
}
