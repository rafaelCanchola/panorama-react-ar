import React from "react";
import {Dimensions, ScrollView, StyleSheet, Text, View} from "react-native";
import GraficaProduccion from "../../components/producto/GraficaProduccion";
import TablaTopProduccion from "../../components/producto/TablaTopProduccion";
import TablaIndicadores from "../../components/producto/TablaIndicadores";
import ImagenProducto from "../../components/producto/ImagenProducto";
import CalendarioProduccion from "../../components/producto/CalendarioProduccion";
import monthD from "../../json/monthDistributionJSON";
import producvol from "../../json/productionVolumeJSON";
import produc from "../../json/productos";
import top10 from "../../json/top10_statesJSON";
import indicadores19 from "../../json/indicadores_infoJSON";

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get("window").width
const screenContainer = screenWidth - 30

export default function Produccion({navigation,route}){

    const idProducto =  route.params.id;
    return(
        <View style={styles.container}>
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContainer} >
                <Text style={[styles.tituloVolumen,{marginTop:20,}]}>
                    Volumen de la producción nacional 2010-2019
                </Text>
                <GraficaProduccion graficaarray={producvol[idProducto]} color={produc[idProducto].color_fondo} titulo={styles.tituloVolumen}/>
                <Text style={styles.tituloTop}>
                    {top10[idProducto+1].nombreestado === 'Resto' ? 'Top 10 en volumen de producción\nPrincipales entidades' : 'Volumen de producción por entidad'}
                </Text>
                <TablaTopProduccion
                    data={top10[idProducto+1]}
                    color={produc[idProducto].color_fondo}
                    unidades={producvol[idProducto][0].unidad.split(" ")[2]}
                    totalnac={produc[idProducto].volumen_toneladas}
                    variacionpro={produc[idProducto].variacion_producto}/>
                <Text style={styles.tituloTop}>
                    Porcentaje del valor de la producción por entidad federativa
                </Text>
                <ImagenProducto img={produc[idProducto].mapaentidades.split("\/")[1]} style={styles.imagenProducto}/>
                <Text style={[styles.textoPrincipal,{color:produc[idProducto].color_fondo}]}>
                    {produc[idProducto].valprodentidadlider}
                </Text>
                <Text style={styles.tituloTop}>Indicadores 2019</Text>
                <TablaIndicadores indicadorarr={indicadores19[idProducto]} color={produc[idProducto].color_fondo}/>
                <Text style={styles.tituloTop}>
                    Producción mensual nacional (%)
                </Text>
                <Text style={styles.textoPrincipal}>
                    {produc[idProducto].distribucionmensualprod}
                </Text>
                <CalendarioProduccion calendarioarr={monthD[idProducto]} color={produc[idProducto].color_fondo}/>

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
    tituloVolumen: {
        fontFamily: "montserrat-700",
        color: "rgba(128,128,128,1)",
        width: screenContainer,
        textAlign: "center",
        fontSize: 20,
    },
    tituloTop:{
        fontFamily: "montserrat-700",
        color: "rgba(128,128,128,1)",
        width: screenContainer,
        textAlign: "center",
        fontSize: 20,
        margin:10,
    },
    imagenProducto:{
        width: screenContainer,
    },
    textoPrincipal: {
        fontFamily: "montserrat-regular",
        width: screenContainer,
        fontSize: 16,
        margin:10,
        textAlign:'justify',
    },
})