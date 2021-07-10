import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
const buatpadding = 12
const buatmargin = 20

export default StyleSheet.create({
    container:{
        marginTop:Constants.statusBarHeight,
        display:"flex",
        backgroundColor:"#f7fbe1",
        justifyContent:"center",
        padding:20,
        height: 660,
    },gambar: {
        display: "flex",
        width: 60,
        height: 60,
        marginLeft:100
      },
    inputForm:{
        marginTop:buatmargin,
        padding:buatpadding,
        backgroundColor:"#fff",
        borderColor: "#808080",
    borderBottomWidth: 1,
    },
    loginbtn:{
        display:"flex",
        width:150,
        alignSelf:"center",
        alignItems:"center",
        marginTop:100,
        padding:buatpadding,
        backgroundColor:"#436f8a"
    },
    text:{
        marginTop:buatmargin,
        padding:buatpadding,
    }
})