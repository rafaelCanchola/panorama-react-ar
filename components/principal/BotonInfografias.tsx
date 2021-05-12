import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text, NativeModules } from "react-native";
import {useNavigation} from "@react-navigation/native";
const AR = NativeModules.ARObjModule;

function BotonInfografias(props) {

    const navigation = useNavigation();
    if(props.name === "ARVIEW"){
        return (
            <TouchableOpacity style={[styles.container, props.style]}
                              onPress={() => {AR.changeToNativeView("agave"); }}>
                <Text style={styles.infografias}>PRODUCTOS AR</Text>
            </TouchableOpacity>
        );
    }else {
        return (
            <TouchableOpacity style={[styles.container, props.style]}
                              onPress={() => navigation.navigate('Infografia')}>
                <Text style={styles.infografias}>INFOGRAFÍAS</Text>
            </TouchableOpacity>
        );
    }
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
