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
import style from "../stylesheet/daftarakun.stylesheet.js";
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
  const [allError, setallError] = useState([]);
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
        console.log(response);
      } catch (err) {
        let cleanse = [];
        err.response.data.errors.forEach((element) => {
          const berisipath = {
            path: element.path,
            message: element.message,
          };

          cleanse.push(berisipath);
        });

        setallError(cleanse);

        //belum benar
        // dispatch(showNotif(true));
        // dispatch(notifText(err.response.data.errors[0].message));
      }
    }
  };
  return (
    <View style={style.container}>
      {show && (
        <DateTimePicker
        style={[{height:500}]}
          testID="dateTimePicker"
          value={date}
          onChange={(event, selectedDate) => {
            handleDateChange(event, selectedDate);
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
      {/* <Text style={[{color:"red"}]} >Email sudah tersedia</Text> */}
      {allError
        .filter((value, index) => value.path === "email")
        .map((value, index) => (
          <Text style={[{color:"red"}]} key={index}>{value.message}</Text>
        ))}
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
      
      <TouchableOpacity style={style.radiobuttonContainer}>
        <RadioButton.Group
          onValueChange={(v) => {
            setChecked(v);
          }}
        >
          <RadioButton
            style={style.radiobutton}
            value="Laki"
            status={checked === "Laki" ? "checked" : "unchecked"}
            onPress={() => {
              setChecked("Laki");
            }}
          />
          <Text style={style.textgender}>Laki-laki</Text>

          <RadioButton
            style={style.radiobutton}
            value="Perempuan"
            status={checked === "Perempuan" ? "checked" : "unchecked"}
            onPress={() => {
              setChecked("Perempuan");
            }}
          />
          <Text style={style.textgender}>Perempuan</Text>
        </RadioButton.Group>
      </TouchableOpacity>

      {/* <TextInput
        placeholder="xdxddxxd"
        onFocus={(event) => {
          event.preventDefault();
          Keyboard.dismiss();
        }}
      ></TextInput> */}
    <TouchableOpacity style={style.dateContainer}>
    <TouchableOpacity
        style={style.datebtn}
        onPress={() => {
          setShow(true);
        }}
      >
        <Text style={[{ textAlign: "center" }]}>Tanggal Lahir</Text>
      </TouchableOpacity>
      <Text style={style.dateString}>
        {JSON.stringify(date).substring(1, 11)}
      </Text>

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
      {/* <Text style={[{ textAlign: "center" }]}>AKUN BERHASIL DIDAFTARKAN</Text> */}
    </View>
  );
}
