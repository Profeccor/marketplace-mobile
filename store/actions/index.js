import axios from "../../api/axios";
import * as SecureStorage from "expo-secure-store";
export const SHOW_NOTIF = "SHOW_NOTIF";
export const NOTIF_TEXT = "NOTIF_TEXT";
export const GET_INFO = "INFO";
export function showNotif(bool) {
  return {
    type: SHOW_NOTIF,
    payload: bool,
  };
}
export function notifText(msg) {
  return {
    type: NOTIF_TEXT,
    payload: msg,
  };
}
export function Loggingin(email, password) {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: "post",
        url: "/auth/login",
        data: {
          email: email,
          password: password,
        },
      });
      SecureStorage.setItemAsync("accesstoken", response.data.accessToken)
        .then(() => {
          //ganti halaman
          console.log(response.data.accessToken);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err.response.data.msg);
      dispatch(showNotif(true));
      dispatch(notifText(err.response.data.msg));
    }
  };
}
export function addProductAct(nama, deskripsi, gambar, kategori, harga, stock) {
  return async (dispatch) => {
    try {
      SecureStorage.getItemAsync("accesstoken")
        .then(async (token) => {
          const response = await axios({
            method: "post",
            url: "/products/",
            headers: {
              accesstoken: token,
            },
            data: {
              nama: nama,
              deskripsi: deskripsi,
              gambar: gambar,
              kategori: kategori,
            },
          });

          const responseorder = await axios({
            method: "post",
            url: "/orders/",
            headers: {
              accesstoken: token,
            },
            data: {
              harga: harga,
              stock: stock,
              productID: response.data.id,
            },
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(err.response);
    }
  };
}
export function verify() {
  return async (dispatch) => {
    try {
      SecureStorage.getItemAsync("accesstoken")
        .then(async (token) => {
          const response = await axios({
            method: "post",
            url: "/auth/verify",
            headers: { accesstoken: token },
          });
          await dispatch(getInfo(response.data.id));
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };
}
export function getInfo(id) {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: "get",
        url: "/accounts/" + id,
      });
      //   console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
}
export function registerAct() {
  try {
  } catch {}
}
export function getLapakAct() {
  return async (dispatch) => {
    //ganti value URL
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
}
export function registerLapakAct(nama, alamat, luas, deskripsi, gambar) {
  return async (dispatch) => {
    try {
      SecureStorage.getItemAsync("accesstoken")
        .then(async (token) => {
          const response = await axios({
            method: "post",
            url: "/toko/createToko",
            headers: {
              accesstoken: token,
            },
            data: {
              nama: nama,
              alamat: alamat,
              luas_lahan: luas,
              deskripsi: deskripsi,
              gambar: gambar,
            },
          });
          await dispatch(showNotif(true));
          await dispatch(notifText("Berhasil ditambahkan"));
        })

        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err.response);
    }
  };
}
