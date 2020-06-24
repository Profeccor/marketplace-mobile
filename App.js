import React, { useState } from "react";
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"

import Loginscreen from "./screens/landingPage"
import Registerscreen from "./screens/registerPage"
import Lapakregisterscreen from "./components/daftarLapak"
const Stack = createStackNavigator();
import store from "./store"
import { Provider} from "react-redux"


export default function App() {
  
  return (
    <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Login" component={Loginscreen} />
      <Stack.Screen name="LapakRegister" component={Registerscreen} />
      <Stack.Screen name="Register" component={Registerscreen} />
    </Stack.Navigator>
  </NavigationContainer>
  </Provider>
  );
}
