import {StyleSheet, Text} from "react-native";
import React from "react";

function TextoDescripcion(props) {
    return (
        <Text style={props.style}>{props.descripcion}</Text>

    )
}
export default TextoDescripcion;