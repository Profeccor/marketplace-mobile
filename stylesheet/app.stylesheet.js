import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
const buatpadding = 12
const buatmargin = 20

export default StyleSheet.create({
    container:{
        marginTop:Constants.statusBarHeight,
        display:"flex",
        backgroundColor:"#0c0",
        justifyContent:"center",
        padding:20
    },
    inputForm:{
        marginTop:buatmargin,
        padding:buatpadding,
        backgroundColor:"#fff"
    },
    loginbtn:{
        display:"flex",
        justifyContent:"center",
        marginTop:buatmargin,
        padding:buatpadding,
        backgroundColor:"#ffffff"
    },
    text:{
        marginTop:buatmargin,
        padding:buatpadding,
    }
})