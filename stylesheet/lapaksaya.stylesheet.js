import { StyleSheet } from "react-native";
import Constants from "expo-constants";
const buatpadding = 5;
const buatmargin = 20;

export default StyleSheet.create({
  container: {
    display: "flex",
    marginTop: Constants.statusBarHeight,
    height: 660,
    backgroundColor: "#438a5e",
    padding: 20,
  },
  baris: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    padding: buatpadding,
  },
  produkContainer: {
    display: "flex",
    marginTop: 10,
    backgroundColor: "#aaaaaa",
    height: 450,
  },
  isiProduk: {
    display: "flex",
    backgroundColor: "#ffff",
    flexDirection:"row",
    margin: buatmargin,
    padding: buatpadding,
  },
  gambar: {
    display: "flex",
    width: 65,
    height: 65,
  },
  textContainer:{
    marginLeft:20,
    display:"flex",
    flexDirection:"column"
  },
  namabarangtext:{
    display:"flex",
    fontSize:25,
  },
  textsty: {
    display: "flex",
  },
  tombol: {
    display: "flex",
    width: 100,
    alignSelf: "flex-end",
    backgroundColor: "#436f8a",
    margin: buatmargin,
    padding: buatpadding,
  },
  menuContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    padding: buatpadding,
  },
  menu: {
    display: "flex",
    backgroundColor: "#436f8a",
    margin: buatmargin,
    padding: buatpadding,
  },
});
