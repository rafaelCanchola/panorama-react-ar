import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function TituloProducto(props) {
    return (
        <TouchableOpacity style={[styles.container, props.style, {backgroundColor:props.color}]}>
            <Text style={styles.agaveTequilero}>{props.nombre}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 3,
            height: 7
        },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 12,
        borderWidth: 2,
        borderColor: "rgba(255,255,255,1)",
        borderStyle: "solid"
    },
    agaveTequilero: {
        color: "#fff",
        fontSize: 32,
        fontFamily: "montserrat-700",
        textAlign:'center',
        margin:15,

    }
});

export default TituloProducto;
