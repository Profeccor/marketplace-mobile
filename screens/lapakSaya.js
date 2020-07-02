import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import axios from "../api/axios";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TextInput } from "react-native-paper";

export default function Lapakscreen({ navigation }) {
  const [test, setTest] = useState("");
  const [item, setItem] = useState([]);
  useEffect(() => {
    getToko();
  }, []);
  const getToko = async () => {
    try {
      const response = await axios({
        method: "get",
        url: "/toko/2",
      })
        .then((response) => console.log(response.data))
        
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <Text>{test}</Text>
      <TextInput
        onChangeText={(value) => {
          setTest(value);
        }}
      ></TextInput>
      <TouchableOpacity onPress={() => {}}>
        <Text>Halo</Text>
      </TouchableOpacity>
      
    </View>
  );
}
