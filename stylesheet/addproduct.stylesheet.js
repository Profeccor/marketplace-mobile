import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { shadow } from "react-native-paper";
const buatpadding = 12;
const buatmargin = 20;

export default StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#f7fbe1",
    justifyContent: "center",
    padding: 20,
    height: 660,
  },
  inputForm: {
    display: "flex",
    //backgroundColor:"#fff",
    justifyContent: "center",
    width: 350,
    height: 50,
    marginBottom: 8,
    borderColor: "#808080",
    borderBottomWidth: 1,
  },
  inputFormint: {
    display: "flex",
    //backgroundColor:"#fff",
    justifyContent: "center",
    width: 250,
    height: 50,
    marginBottom: 8,
    borderColor: "#808080",
    borderBottomWidth: 1,
  },
  baris: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    padding: buatpadding,
  },
  loginbtn: {
    display: "flex",
    width: 150,
    alignSelf: "center",
    marginTop: 60,
    padding: buatpadding,
    backgroundColor: "#436f8a",
  },
  gambar: {
    display: "flex",
    width: 60,
    height: 60,
    marginLeft:100
  },
  productbtn: {
    display: "flex",
    width: 150,
    alignSelf: "center",
    marginTop: 10,
    padding: buatpadding,
    backgroundColor: "#436f8a",
  },
  text: {
    marginTop: buatmargin,
    padding: buatpadding,
  },
});
