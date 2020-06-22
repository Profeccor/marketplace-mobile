import React, { useState } from "react";
import { View, Text, TouchableOpacity,Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import DateTimePicker from "@react-native-community/datetimepicker";
import { RadioButton } from "react-native-paper";
import style from "../stylesheet/app.stylesheet.js";
import axios from "../api/axios.js";

export default function registerPage() {
  const [nama, setNama] = useState("");
  const [nomer, setNomer] = useState("");
  const [email, setEmail] = useState("");
  const [alamat, setAlamat] = useState("");
  const [password, setPassword] = useState("");
  const [passwordOK, setPasswordOK] = useState("");
  const [checked, setChecked] = useState("");

  //date picker
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    
  };


  
//handler
  const handleDaftar = async () => {
    if (password != passwordOK) {
      setNama("password mu gk sesuai woi goblok");
    } else {
      try {
        setTnggl(new Date());
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
      } catch (err) {
        console.log(err.response.data);
      }
    }
  };
  return (
    <View>
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
      <TextInput placeholder="Tggl Lahir">
        {nama}
        {nomer}
        {email}
        {alamat}
        {password}
        {passwordOK}
        {checked}
      </TextInput>
      <TouchableOpacity
        style={style.loginbtn}
        color="#fff"
        onPress={() => {
          setShow(true)
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
      
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          onChange={onChange}
        />
      )}
    </View>
  );
}
