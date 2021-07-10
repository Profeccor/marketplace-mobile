import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { shadow } from "react-native-paper";
const buatpadding = 12;
const buatmargin = 20;

export default StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#f7fbe1",
   
    
    height: 660,
  },
 infoprodukcontainer:{
   display:"flex",
   backgroundColor:"#438a5e",
   padding:20
   ,margin:10
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
    alignSelf:"center",
    width: 300,
    height: 200,
    marginTop:20
  },
  productbtn: {
    display: "flex",
    width: 150,
    alignContent:"flex-end",
    alignSelf: "center",
    marginTop: 10,
    padding: buatpadding,
    backgroundColor: "#436f8a",
  },
  textnama: {
    marginTop: buatmargin,
    fontSize:30
  },
  text: {
   
  },
});
