import React from "react";
import {StyleSheet, TouchableOpacity, Text, View} from "react-native";

function TextoAgroindustriales(props) {
    return (
        <View style={[styles.container,props.style,{backgroundColor:props.color}]}>
            <Text style={styles.agaveTequilero}>{props.participacion}</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 7,
    },
    agaveTequilero: {
        color: "#fff",
        fontSize: 40,
        fontFamily: "montserrat-700",
        textAlign: "center",
        margin:5,
    }
});

export default TextoAgroindustriales;
