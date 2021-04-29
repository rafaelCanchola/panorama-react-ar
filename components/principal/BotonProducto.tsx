import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import {useNavigation} from "@react-navigation/native";

function BotonProducto(props) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={[styles.container, props.style]}
                          onPress={() => navigation.navigate('Carousel')}>
            <Text style={styles.infografias}>
                {props.infografias || "BUSQUEDA POR PRODUCTO"}
            </Text>
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

export default BotonProducto;
