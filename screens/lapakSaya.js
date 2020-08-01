import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import axios from "../api/axios";
import { useDispatch, useSelector } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TextInput } from "react-native-paper";
import { getLapakAct } from "../store/actions";
export default function Lapakscreen({ navigation }) {
  const [test, setTest] = useState("");
  const [item, setItem] = useState([]);
  const dispatch = useDispatch();
  const currentlapak = useSelector((state) => state.currentlapak);

  useEffect(() => {
    getToko();
  }, []);
  const getToko = async () => {
    //ganti value URL di action
    try {
      await dispatch(getLapakAct());

      console.log(currentlapak);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View>
      <Text>{currentlapak.nama}</Text>
      <TextInput
        onChangeText={(value) => {
          setTest(value);
        }}
      ></TextInput>
      <TouchableOpacity onPress={() => {}}></TouchableOpacity>
      {currentlapak.Products.map((value, index) => {
        return <Text key={index}>{value}</Text>;
      })}
    </View>
  );
}
