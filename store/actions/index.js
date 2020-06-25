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
          await dispatch(getInfo(response.data.id))
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
        url: "/accounts/"+id,
        
      });
    //   console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
}
export function register(){
    try{

    }catch{

    }
}
