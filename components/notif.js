import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { showNotif, notifText } from "../store/actions";
import style from "../stylesheet/app.stylesheet.js";
export default function Notif() {
  const dispatch = useDispatch();
  const textRedux = useSelector((state) => state.textnotification);
  return (
    <View>
      <Text style={style.text}>{textRedux}</Text>
      <TouchableOpacity
        style={style.loginbtn}
        color="#fff"
        onPress={() => {
          dispatch(showNotif(false));
        }}
      >
        <Text style={[{ textAlign: "center" }]}>Close</Text>
      </TouchableOpacity>
    </View>
  );
}
