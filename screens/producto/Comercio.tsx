import React from "react";
import {Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import TextoAgroindustriales from "../../components/producto/TextoAgroindustriales";
import TituloProducto from "../../components/producto/TituloProducto";
import TablaComercioExt from "../../components/producto/TablaComercioExt";
import GraficaComercio from "../../components/producto/GraficaComercio";
import RankingMundial from "../../components/producto/RankingMundial";
import ListasPaises from "../../components/producto/ListasPaises";

import produc from "../../json/productos";
import monthDistributionJSON from "../../json/monthDistributionJSON";
import evolucion from "../../json/Commerce_EvolutionJSON";
import clientes from "../../json/customers_infoJSON";
import importa from "../../json/import_export_infoJSON";
import proveedor from "../../json/provider_infoJSON";

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get("window").width
const screenContainer = screenWidth - 30

export default function Comercio({navigation,route}){

    const idProducto =  route.params.id;
    let listClientes = clientes.filter(element => element.idproducto === (idProducto+1).toString());
    let listImporta = importa.filter(element => element.idproducto === (idProducto+1).toString());
    let listProveedor = proveedor.filter(element => element.idproducto === (idProducto+1).toString());

    return(
        <View style={styles.container}>
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContainer} keyboardShouldPersistTaps={'always'}>
                <RankingMundial rank={produc[idProducto].rankingmundial} descripcion={produc[idProducto].rankingmundial_descripcion} productivo={produc[idProducto].paismasproductivo} color={produc[idProducto].color_fondo} volumen={produc[idProducto].volumen_toneladas}/>
                <Text style={styles.titulo}>Comercio exterior 2019</Text>
                <Text style={styles.texto}>
                    {produc[idProducto].comercioexterior}
                </Text>
                <Text style={styles.titulo}>
                    Origen-destino comercial
                </Text>
                <Text style={styles.texto}>
                    {produc[idProducto].origendestinocomercial}
                </Text>
                <ListasPaises clienteprin={produc[idProducto].pais} monto={produc[idProducto].montoclienteprincipal} clientes={listClientes} proveedor={listProveedor} importador={listImporta} color={produc[idProducto].color_fondo}/>
                <Text style={[styles.texto,{color:produc[idProducto].color_fondo}]}>
                    {produc[idProducto].mercadospotenciales}
                </Text>
                <Text style={styles.titulo}>
                    Evolución de comercio exterior
                </Text>
                <GraficaComercio graficaarray={evolucion[idProducto]} titulo={styles.tituloVolumen}/>
                <Text style={styles.titulo}>
                    Distribución mensual del comercio exterior (%)
                </Text>
                <TablaComercioExt data={monthDistributionJSON[idProducto]}/>
            </ScrollView>
        </View>
        )
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
    texto: {
        fontFamily: "montserrat-regular",
        width: screenContainer,
        fontSize: 16,
        margin:10,
        textAlign:'justify',
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