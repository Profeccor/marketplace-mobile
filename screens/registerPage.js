import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import DateTimePicker from "@react-native-community/datetimepicker";
import { RadioButton } from "react-native-paper";
import style from "../stylesheet/app.stylesheet.js";
import axios from "../api/axios.js";

import Notif from "../components/notif";

import { useSelector, useDispatch } from "react-redux";
import { showNotif, notifText } from "../store/actions/index.js";

export default function registerPage() {
  const [nama, setNama] = useState("");
  const [nomer, setNomer] = useState("");
  const [email, setEmail] = useState("");
  const [alamat, setAlamat] = useState("");
  const [password, setPassword] = useState("");
  const [passwordOK, setPasswordOK] = useState("");
  const [checked, setChecked] = useState("");
  const dispatch = useDispatch();
  const notifRedux = useSelector((state) => state.shownotification);

  //date picker
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const handleDateChange = async (event, selectedDate) => {
    
    setShow(Platform.OS === "ios");
    await setDate(selectedDate);
  };
  //handler
  const handleDaftar = async () => {
    if (password != passwordOK) {
      dispatch(showNotif(true));
      dispatch(notifText("Password anda tidak sesuai"));
    } else {
      try {
        const response = await axios({
          method: "post",
          url: "/accounts/signup",
          data: {
            nama: nama,
            nomer: nomer,
            email: email,
            alamat: alamat,
            password: password,
            jenis_kelamin: checked,
            tnggl_lhr: date,
          },
        });
        console.log(response)
      } catch (err) {
        console.log(err.response);
        // dispatch(showNotif(true));
        // dispatch(notifText(err.response.data));
      }
    }
  };
  return (
    <ScrollView>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          onChange={(event,selectedDate) => {
            handleDateChange(event,selectedDate);
          }}
        />
      )}
      {notifRedux == true && <Notif />}
      <TextInput
        placeholder="Nama"
        style={style.inputForm}
        onChangeText={(p) => {
          setNama(p);
        }}
      ></TextInput>
      <TextInput
        placeholder="Nomer"
        style={style.inputForm}
        onChangeText={(p) => {
          setNomer(p);
        }}
      ></TextInput>
      <TextInput
        placeholder="Email"
        style={style.inputForm}
        onChangeText={(p) => {
          setEmail(p);
        }}
      ></TextInput>
      <TextInput
        placeholder="Alamat"
        style={style.inputForm}
        onChangeText={(p) => {
          setAlamat(p);
        }}
      ></TextInput>
      <TextInput
        placeholder="Kata Sandi"
        style={style.inputForm}
        secureTextEntry={true}
        onChangeText={(p) => {
          setPassword(p);
        }}
      ></TextInput>
      <TextInput
        placeholder="Konfirmasi Kata Sandi"
        style={style.inputForm}
        secureTextEntry={true}
        onChangeText={(p) => {
          setPasswordOK(p);
        }}
      ></TextInput>

      <RadioButton.Group
        onValueChange={(v) => {
          setChecked(v);
        }}
      >
        <RadioButton
          value="Laki"
          status={checked === "Laki" ? "checked" : "unchecked"}
          onPress={() => {
            setChecked("Laki");
          }}
        />
        <Text>Laki-laki</Text>

        <RadioButton
          value="Perempuan"
          status={checked === "Perempuan" ? "checked" : "unchecked"}
          onPress={() => {
            setChecked("Perempuan");
          }}
        />
        <Text>Perempuan</Text>
      </RadioButton.Group>
      <TextInput
        placeholder="xdxddxxd"
        onFocus={(event) => {
          event.preventDefault();
          Keyboard.dismiss();
        }}
      ></TextInput>
      {/* <TextInput placeholder="Tggl Lahir">
        {JSON.stringify(date)}
      </TextInput> */}
      <TouchableOpacity
        style={style.loginbtn}
        color="#fff"
        onPress={() => {
          setShow(true);
        }}
      >
        <Text style={[{ textAlign: "center" }]}>Date Pick</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={style.loginbtn}
        color="#fff"
        onPress={() => {
          handleDaftar();
        }}
      >
        <Text style={[{ textAlign: "center" }]}>Daftar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
