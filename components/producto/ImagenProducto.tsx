import {Image, ScrollView, View,StyleSheet} from "react-native";
import React from "react";
const ImagesArray = require('../../components/producto/ImagesArray').default

function ImagenProducto(props){
    return (
        <Image
            source={ImagesArray(props.img)}
            resizeMode="cover"
            style={props.style}
        />
    );
}

const styles =StyleSheet.create({
    imagenPrincipal: {
        alignSelf: "center"
    },
})

export default ImagenProducto;