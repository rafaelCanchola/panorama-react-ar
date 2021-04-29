import {ImageBackground, StyleSheet, Text, View} from "react-native";
import React from "react";

function ImagenConsumo(props) {
    if(props.consumo === '0.00') {
        return null;
    }
    else{
        return(
            <View style={{margin:5,}}>
                <Text style={props.textstyle}>
                    Consumo anual per cápita
                </Text>
                <ImageBackground
                    source={require("../../assets/images/CUCHARA.png")}
                    resizeMode="contain"
                    style={[styles.imagenConsumo,{backgroundColor: props.bgcolor,width:props.imagestyle,height:props.imagestyle}]}
                >
                    <Text style={[styles.datoConsumo,{top:props.imagestyle/1.65}]}>{props.consumo}</Text>
                </ImageBackground>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    imagenConsumo: {
        alignSelf: "center",
        backgroundColor: "rgba(0,114,127,1)",
    },
    datoConsumo: {
        fontFamily: "montserrat-700",
        color: "rgba(255,255,255,1)",
        fontSize: 41,
        alignSelf:'center',
    },
});

export default ImagenConsumo;