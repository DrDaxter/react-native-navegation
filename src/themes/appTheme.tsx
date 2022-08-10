import { StyleSheet } from "react-native";

export const colores = {
    primary: '#5856D6'
}

export const styles = StyleSheet.create({
    globalMargin:{
        marginHorizontal:20
    },
    title:{
        color:'#000',
        fontSize:30,
        marginBottom:10
    },

    subTitle:{
        color:'#fafafa',
        fontSize:20,
        marginBottom:10,
        fontWeight:'bold',
        marginHorizontal:5
    },
    botonGrande:{
        flexDirection:'row',
        width:100,
        height:100,
        backgroundColor:'red',
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        marginRight:10
    },
    avatarContent:{
        alignItems:'center',
    },
    avatar:{
        width:150,
        height:150,
        borderRadius:100,
    },
    menuContainer:{
        marginVertical:20,
        marginHorizontal:30,
    },
    menuBoton:{
        marginVertical:10,
        flexDirection:'row'
    },
    menuTexto:{
        color:'#000',
        fontSize:20,
        marginHorizontal:10
    }
});