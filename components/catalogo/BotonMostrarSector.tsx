import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default class BotonMostrarSector extends Component<any, any>{
    render(){
        const sector=[
            {nombre:'Agrícola',color:'rgb(0, 120, 83)'},
            {nombre:'Pecuario',color:'rgb(147, 37, 44)'},
            {nombre:'Pesquero',color:'rgb(55, 187, 211)'}
        ];
        let index:number = 0

        switch (this.props.nombre){
            case 'Fagricola':
                index = 0
            break
            case 'Fpecuario':
                index = 1
            break
            case 'Fpesquero':
                index = 2
            break
        }
        return (
            <TouchableOpacity style={[styles.container, this.props.style,{backgroundColor:sector[index].color}]} disabled={true}>
                <Text style={styles.agricola}>{sector[index].nombre}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
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
    agricola: {
        color: "#fff",
        fontSize: 32,
        fontFamily: "montserrat-regular"
    }
});

