import {Component,Fragment} from "react";
import React from "react";
import {View, StyleSheet, Text, Dimensions, Image,TouchableOpacity} from "react-native"

import BotonInfografias from "../components/principal/BotonInfografias";
import BotonProducto from "../components/principal/BotonProducto";

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get("window").width
const screenContainer = screenWidth - 30

export default class Principal extends Component<any, any> {
    constructor() {
        super();
        this.state = {
            menuPrincipalSelector: false,
            llave: 1,
        };
    }
    SelectorMenu(){
        if(this.state.menuPrincipalSelector){
            return this.menuRojo;
        }else{
            return this.menuDorado;
        }
    }
    menuRojo=[
        <Fragment key={()=>this.state.llave}>
            <View style={{flex:1}} >
                <View style={{flex:1}}/>
                <Image source={require('../assets/images/panoramatitleB.png')} resizeMode="cover" style={{width:screenWidth,height:screenContainer-180}}/>
                <TouchableOpacity onPress={()=>this.setState({menuPrincipalSelector: !this.state.menuPrincipalSelector,llave:this.state.llave + 1})}>
                    <Text style={[styles.intro,{color:"#643241"}]}>Datos de un campo que avanza sin dejar a nadie atrás.</Text>
                </TouchableOpacity>
                <View style={{width:screenWidth-30}}>
                    <BotonProducto style={styles.botonProducto}/>
                    <BotonInfografias style={styles.botonProducto}/>
                </View>
                <View style={{flex:1}}/>
                <Image source={require('../assets/images/header.png')} resizeMode="cover" style={{width:screenWidth,height:60}}/>
            </View>
        </Fragment>
    ];
    menuDorado=[
        <Fragment key={()=>this.state.llave}>
            <View style={{flex:1, alignItems:'center'}} >
                <View style={{flex:1}}/>
                <Image source={require('../assets/images/panorama.png')} resizeMode="contain" style={{width:screenContainer,height:screenContainer-80}}/>
                <TouchableOpacity onPress={()=>this.setState({menuPrincipalSelector: !this.state.menuPrincipalSelector,llave:this.state.llave + 1})}>
                    <Text style={[styles.intro,{color:"rgba(0,120,83,1)"}]}>Datos de un campo que avanza sin dejar a nadie atrás.</Text>
                </TouchableOpacity>
                <BotonProducto style={styles.botonOldProducto}></BotonProducto>
                <BotonInfografias style={[styles.botonOldProducto,{backgroundColor: "rgba(0,96,142,1)",}]}/>
                <View style={{flex:1}}/>
            </View>
        </Fragment>
    ];
    render(){
        return(
            <View style={[styles.container,]}>{this.SelectorMenu()}</View>
        );

    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,

    },
    intro: {
        fontFamily: "montserrat-regular",
        fontSize: 18,
        textAlign: "center",
        alignSelf: "center",
        margin:30,
        width:screenWidth -60
    },
    botonProducto: {
        width: screenWidth-10,
        minHeight:50,
        backgroundColor: "#643241",
        borderWidth: 2,
        borderColor: "rgba(255,255,255,1)",
        borderStyle: "solid",
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            height: 7,
            width: 3
        },
        elevation: 12,
        shadowOpacity: 0.4,
        shadowRadius: 4,
        borderRadius: 25,
        margin:15,
        alignSelf: "flex-end"
    },
    botonOldProducto:{
        width: screenWidth-30,
        minHeight:50,
        backgroundColor: "rgba(0,120,83,1)",
        borderWidth: 2,
        borderColor: "rgba(255,255,255,1)",
        borderStyle: "solid",
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            height: 7,
            width: 3
        },
        elevation: 12,
        shadowOpacity: 0.4,
        shadowRadius: 4,
        borderRadius: 7,
        margin:10,
        alignSelf: "center",
    },

});
