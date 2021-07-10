import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { shadow } from "react-native-paper";
const buatpadding = 12;
const buatmargin = 20;

export default StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#f7fbe1",
    marginTop: Constants.statusBarHeight,

    height: 660,
  },
  namebold: {
    display: "flex",
    fontWeight: "bold",
  },

  infoprodukcontainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#438a5e",
    padding: 10,
    margin: 10,
  },
  kolom: {
    margin: 10,
    display: "flex",
    flexDirection: "column",
  },
  baris: {
    display: "flex",
    flexDirection: "row",
  },
  btn: {
    display: "flex",
    width: 150,
    alignSelf: "center",
    margin: 18,
    padding: buatpadding,
    backgroundColor: "#436f8a",
  },
  gambar: {
    display: "flex",
    alignSelf: "center",
    width: 100,
    height: 100,
    marginTop: 10,
  },
  productbtn: {
    display: "flex",
    width: 150,
    alignContent: "flex-end",
    alignSelf: "center",
    marginTop: 10,
    padding: buatpadding,
    backgroundColor: "#436f8a",
  },

  textnama: {
    marginTop: buatmargin,
    fontSize: 30,
  },
  text: {
    display: "flex",
  },
  inputform: {
    display: "flex",
    justifyContent:"flex-end"
  },
});
