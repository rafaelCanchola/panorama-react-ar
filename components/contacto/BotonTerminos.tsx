import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function BotonTerminos(props) {
    return (
        <TouchableOpacity style={[styles.container, props.style]}>
            <Text style={styles.caption}>Términos y Condiciones</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#673AB7",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.35,
        shadowRadius: 5,
        elevation: 2,
        minWidth: 88,
        paddingLeft: 16,
        paddingRight: 16
    },
    caption: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "montserrat-regular"
    }
});

export default BotonTerminos;
