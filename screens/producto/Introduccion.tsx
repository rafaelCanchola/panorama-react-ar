import React from "react";
import {ScrollView, Text, View, StyleSheet, Dimensions} from "react-native";

import TituloProducto from "../../components/producto/TituloProducto";
import ImagenProducto from "../../components/producto/ImagenProducto";
import TextoDescripcion from "../../components/producto/TextoDescripcion";
import ImagenConsumo from "../../components/producto/ImagenConsumo";
import TextoAgroindustriales from "../../components/producto/TextoAgroindustriales";

import produc from "../../json/productos";

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get("window").width
const screenContainer = screenWidth - 30
export default function Introduccion({navigation,route}){

    const idProducto =  route.params.id;
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContainer}>
                <TituloProducto nombre={produc[idProducto].producto} color={produc[idProducto].color_fondo} style={styles.tituloProducto}/>
                <ImagenProducto img={produc[idProducto].imagen_producto.split("\/")[1]} style={styles.imagenProducto}/>
                <TextoDescripcion descripcion={produc[idProducto].descripcion} style={styles.textoPrincipal}/>
                <ImagenConsumo bgcolor={produc[idProducto].color_fondo} consumo={produc[idProducto].consumonacional} textstyle={styles.tituloParticipacion} imagestyle={screenContainer}/>
                <Text style={styles.tituloParticipacion}>{produc[idProducto].participacionetiqueta}</Text>
                <TextoAgroindustriales participacion={produc[idProducto].participacion + '%'} color={produc[idProducto].color_fondo} style={{width:screenContainer,margin:10,}}/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems:"center",
    },
    scrollView:{
        backgroundColor:'#fff',
        width: screenWidth -15,
    },
    scrollViewContainer:{
        alignItems:'center',
    },
    tituloProducto: {
        width: screenContainer ,
        margin:20,
    },
    imagenProducto:{
        width: screenContainer,
        margin:10,
        borderRadius:10,
    },
    textoPrincipal: {
        fontFamily: "montserrat-regular",
        color: "#121212",
        width: screenContainer,
        fontSize: 16,
        margin:10,
        textAlign:'justify',
    },
    imagenConsumo:{
        width: screenContainer,
        height: screenContainer,
    },
    tituloParticipacion: {
        fontFamily: "montserrat-700",
        color: "rgba(128,128,128,1)",
        width: screenContainer,
        textAlign: "center",
        fontSize: 20,
        margin:10,
    },

})
