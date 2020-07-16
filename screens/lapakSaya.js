import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import axios from "../api/axios";
import {useDispatch} from "react-redux"
import { TouchableOpacity } from "react-native-gesture-handler";
import { TextInput } from "react-native-paper";
import {getLapakAct} from "../store/actions"
export default function Lapakscreen({ navigation }) {
  const [test, setTest] = useState("");
  const [item, setItem] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    getToko();
  }, []);
  const getToko = async () => {
    //ganti value URL di action
    await dispatch (getLapakAct())
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
