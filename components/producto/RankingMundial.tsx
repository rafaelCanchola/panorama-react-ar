import React from "react";
import {Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, View} from "react-native";
import TextoAgroindustriales from "./TextoAgroindustriales";

const screenWidth = Dimensions.get("window").width
const screenContainer = screenWidth - 30

export default function RankingMundial(props) {
    if (props.rank === '0') {
        return null;
    } else {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>Ranking Mundial</Text>
                <View style={{flexDirection:'column',flex:1}}>
                    <View style={{flexDirection:'row',flex:1,alignItems:'center'}}>
                        <View style={{flexDirection:'row',width:screenWidth/2,justifyContent:'center'}}>
                            <Text style={[styles.ranking,{color:props.color}]}>
                                {props.rank}
                            </Text>
                            {props.rank === '1' ? <Text style={[styles.primerrank,{color:props.color,}]}>er</Text> : <Text style={[styles.ranking,{color:props.color,}]}>º</Text>}
                        </View>
                        <View style={{width:screenWidth/2}}>
                            <Image source={require("../../assets/images/paises/mx.png")} resizeMode="contain" style={{width:screenWidth/2.5, height:screenWidth/4}}/>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:'row',flex:1,justifyContent:'center',alignItems:'center'}}>
                    <View style={{width:screenWidth/2}}>
                        <Text style={styles.ranktext}>
                            productor mundial
                        </Text>
                    </View>
                    <View style={{width:screenWidth/2}}>
                        <Text style={styles.ranktext}>
                            México
                        </Text>
                    </View>
                </View>
                <TextoAgroindustriales participacion={props.volumen + ' toneladas'} color={props.color} style={{width:screenContainer,margin:10,}}/>
                <View>
                    <Text style={styles.texto}>
                        {props.descripcion}
                    </Text>
                    <Text style={styles.texto}>
                        {props.productivo}
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems:"center",

    },
    scrollView:{
        backgroundColor:'#fff',
        width: screenWidth -15,
    },
    scrollViewContainer:{
        alignItems:'center',
    },
    ranking:{
        fontFamily: "montserrat-900",
        fontSize: 80,
        margin:5,
    },
    primerrank:{
        fontFamily: "montserrat-900",
        fontSize: 60,
    },
    texto: {
        fontFamily: "montserrat-regular",
        width: screenContainer,
        fontSize: 16,
        margin:10,
        textAlign:'justify',

    },ranktext: {
        fontFamily: "montserrat-regular",
        fontSize: 16,
        textAlign:'center'
    },
    titulo:{
        fontFamily: "montserrat-700",
        color: "rgba(128,128,128,1)",
        width: screenContainer,
        textAlign: "center",
        fontSize: 20,
        margin:10,
    },
    tituloVolumen: {
        fontFamily: "montserrat-700",
        color: "rgba(128,128,128,1)",
        width: screenContainer,
        textAlign: "center",
        fontSize: 20,
    },
})