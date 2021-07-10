import { StyleSheet } from "react-native";
import Constants from "expo-constants";
const buatpadding = 12;
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
  formSearch: {
    display: "flex",
    //backgroundColor:"#fff",
    backgroundColor: "#f7fbe1",
    justifyContent: "center",
    width: 250,
    padding: buatpadding,
    margin: buatmargin,
  },
  tombol: {
    display: "flex",
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
    alignContent:"center",
    backgroundColor: "#436f8a",
    marginRight:30,
    marginTop: buatmargin,
    padding: buatpadding,
  },
});
