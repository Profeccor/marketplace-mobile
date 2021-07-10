import axios from "../../api/axios";
import * as SecureStorage from "expo-secure-store";
export const SHOW_NOTIF = "SHOW_NOTIF";
export const NOTIF_TEXT = "NOTIF_TEXT";
export const NAVIGATE = "NAVIGATE";
export const GET_INFO = "INFO";
export const CURRENTLAPAK = "CURRENTLAPAK";
export const SEARCH = "SEARCH";
export const USERINFO = "USERINFO";
export const DETAILPRODUK = "DETAILPRODUK";
export const TOKOINFO = "TOKOINFO"

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
      console.log("gagal login password salah masuk sini !!!");
      dispatch(showNotif(true));
      dispatch(notifText(err.response.data.msg));
      throw new Error("Gagal Login");
    }
  };
}
export function addProductAct(nama, deskripsi, gambar, kategori, harga, stock) {
  return async (dispatch) => {
    try {
      SecureStorage.getItemAsync("accesstoken")
        .then(async (token) => {
          console.log(gambar, "INI ISI GAMBAR DI ACTION");
          const form = new FormData();
          form.append("nama", nama);
          form.append("deskripsi", deskripsi);
          form.append("gambar", {
            uri: gambar,
            name: "gambar.jpg",
            type: "image/jpg",
          });
          form.append("kategori", kategori);
          const response = await axios({
            method: "post",
            url: "/products/",
            headers: {
              accesstoken: token,
            },
            data: form,
          });

          // if (response.data.id) {
          //   const responseorder = await axios({
          //     method: "post",
          //     url: "/orders/",
          //     headers: {
          //       accesstoken: token,
          //     },
          //     data: {
          //       harga: harga,
          //       stock: stock,
          //       productID: response.data.id,
          //     },
          //   });
          // }
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
          console.log(response.data, "ini verify <<<<<<<<<<<");
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
      dispatch(setUserInfo(response.data));
      console.log(response.data, "INI DI SET DI USER INFO SAYA <<<<<<<");
    } catch (err) {
      console.log(err);
    }
  };
}

export function getLapakAct(lapakID) {
  return async (dispatch) => {
    //ganti value URL
    try {
      const response = await axios({
        method: "get",
        url: "/toko/" + lapakID,
      })
        .then((response) => {
          console.log(response.data, "INI DI SET DI CURRENT LAPAK SAYA Action");
          dispatch(setCurrentLapak(response.data));
        })

        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
}
export function registerLapakAct(nama, alamat, luas_lahan, deskripsi, gambar) {
  return async (dispatch) => {
    try {
      SecureStorage.getItemAsync("accesstoken")
        .then(async (token) => {
          const formT = new FormData();
          formT.append("nama",nama)
          formT.append("alamat",alamat)
          formT.append("luas_lahan",luas_lahan)
          formT.append("deskripsi",deskripsi)
          formT.append("gambar",{
            uri:gambar,
            name:"gambar.jpg",
            type:"image/jpg",
          })
          const response = await axios({
            method: "post",
            url: "/toko/createToko",
            headers: {
              accesstoken: token,
            },
            data: formT,
          });
          await dispatch(showNotif(true));
          await dispatch(notifText("Berhasil ditambahkan"));
          await dispatch(verify());
        })

        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err.response);
    }
  };
}
export function searchProduct(query) {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: "post",
        url: "/products/search",
        data: {
          query,
        },
      });

      dispatch(setSearchResult(response.data));
    } catch (err) {
      console.log(err);
    }
  };
}
export function getDetailProduk(id) {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: "get",
        url: "/products/" + id,
      });

      // console.log(response.data.tokoID,"telah masuk produk")
      const response2 = await axios({
        method: "get",
        url: "/toko/tokodata/"+response.data.tokoID,
      });
     
      dispatch(setDetailProduk(response.data));
      dispatch(setTokoInfo(response2.data))
    } catch (err) {
      console.log(err);
    }
  };
}

export function setTokoInfo(payloads) {
  return {
    type: TOKOINFO,
    payload: payloads,
  };
}
export function setDetailProduk(detailresult) {
  return {
    type: DETAILPRODUK,
    payload: detailresult,
  };
}
export function setSearchResult(queryProduct) {
  return {
    type: SEARCH,
    payload: queryProduct,
  };
}
export function setCurrentLapak(lapak) {
  return {
    type: CURRENTLAPAK,
    payload: lapak,
  };
}
export function setUserInfo(responsegetInfo) {
  return { type: USERINFO, payload: responsegetInfo };
}
