import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import {useNavigation} from "@react-navigation/native";

function BotonInfografias(props) {

    const navigation = useNavigation();
    return (
        <TouchableOpacity style={[styles.container, props.style]}
                          onPress={() => navigation.navigate('Infografia')}>
            <Text style={styles.infografias}>INFOGRAFÍAS</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",
        paddingLeft: 16,
        paddingRight: 16
    },
    infografias: {
        color: "#fff",
        fontSize: 20,
        fontFamily: "montserrat-regular",
        textAlign: "center",
        paddingLeft:30,
    }
});

export default BotonInfografias;
