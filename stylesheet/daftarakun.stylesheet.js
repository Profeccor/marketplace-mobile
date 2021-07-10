import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { shadow } from "react-native-paper";
const buatpadding = 12;
const buatmargin = 20;

export default StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
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
    width: 250,
    marginBottom: 15,
    borderColor: "#808080",
    borderBottomWidth: 1,
  },
  radiobuttonContainer: {
    display: "flex",
    flexDirection: "row",
  },
  textgender: {
    display: "flex",
    marginRight: 100,
  },
  radiobutton: {
    display: "flex",
    marginRight: 20,
  },
  loginbtn: {
    display: "flex",
    width: 150,
    alignSelf: "center",
    marginTop: 60,
    padding: buatpadding,
    backgroundColor: "#436f8a",
  },
  dateContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
  },
  datebtn: {
    display: "flex",
    backgroundColor: "#436f8a",
    width: 75,
    height: 50,
    alignContent: "center",
  },
  dateString: {
    display: "flex",
    fontSize: 25,
    marginLeft: 24,
  },
  text: {
    marginTop: buatmargin,
    padding: buatpadding,
  },
});
