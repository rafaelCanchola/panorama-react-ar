import React, {Component, Fragment} from "react";
import {
    StyleSheet,
    View,
    ScrollView,
    TextInput,
    Text,
    Image, Dimensions, FlatList, TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

const ImagesArray = require('../components/producto/ImagesArray').default
const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get("window").width
const screenContainer = screenWidth - 30

function Infografia({navigation}) {
    const infos =[
        {id:'1',title:'Servicio de Información Agroalimentaria y Pesquera',image:'info1',logo:'infografia1'},
        {id:'2',title:'México, sector agroalimentario en cifras',image:'info2',logo:'infografia2'},
        {id:'3',title:'Frontera agrícola en México, lugar donde se produce bienestar',image:'info3',logo:'infografia3'},
        {id:'4',title:'¿Quiénes generan la producción agropecuaria y pesquera en México?',image:'info4',logo:'infografia4'},
        {id:'5',title:'Productos agroalimentarios mexicanos en los mercados internacionales',image:'info5',logo:'infografia5'},
        {id:'6',title:'Sector exportador agroalimentario de México',image:'info6',logo:'infografia6'},
        {id:'7',title:'Calendario Agrícola 2020',image:'info7',logo:'infografia7'},
        {id:'8',title:'Estimación de superficie agrícola nivel de análisis de las siembras',image:'info8',logo:'infografia8'},
        {id:'9',title:'Sistemas aéreos no tripulados, innovación tecnológica',image:'info9',logo:'infografia9'},
        {id:'10',title:'Estación de recepción México ERMEX',image:'info10',logo:'infografia10'},
        {id:'11',title:'Vulnerabilidad en áreas agrícolas disponibilidad de aguas en presa',image:'info11',logo:'infografia11'},
        {id:'12',title:'Infraestructura agroalimentaria capacidad operativa del sector',image:'info12',logo:'infografia12'},
        {id:'13',title:'Regiones agroalimentarias de México',image:'info13',logo:'infografia13'},
    ];
    const renderItem = ({item}) =>(
        <View style={styles.iconoProductoRow}>
            <TouchableOpacity style={styles.botonProducto} onPress={() => navigation.navigate(
                'InfografiaImagen', {image:item.image}
            )}>
                <Image
                    source={ImagesArray(item.logo)}
                    resizeMode="cover"
                    style={styles.iconoProducto}
                />
                <Text style={styles.nombreProducto}>{item.title}</Text>
            </TouchableOpacity>
        </View>

    );
    return (
        <View style={styles.container}>
            <View style={{width:screenContainer}}>
                <FlatList data={infos} renderItem={renderItem} keyExtractor={item => item.id}  />
            </View>
        </View>
    );
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
    tituloProducto: {
        width: screenContainer ,
        margin:20,
    },
    imagenProducto:{
        width: screenContainer,
        margin:10,
        borderRadius:10,
    },
    textoPrincipal: {
        fontFamily: "montserrat-regular",
        color: "#121212",
        width: screenContainer,
        fontSize: 16,
        margin:10,
        textAlign:'justify',
    },
    imagenConsumo:{
        width: screenContainer,
        height: screenContainer,
    },
    tituloParticipacion: {
        fontFamily: "montserrat-700",
        color: "rgba(128,128,128,1)",
        width: screenContainer,
        textAlign: "center",
        fontSize: 20,
        margin:10,
    },
    iconoProducto: {
        width: 40,
        height: 40,
        borderRadius: 5
    },
    nombreProducto: {
        fontFamily: "roboto-700",
        fontSize: 19,
        marginLeft: 14,
        marginTop: 0,
        marginRight:60,
        color: "rgba(128,128,128,1)",
    },
    iconoProductoRow: {
        flexDirection: "row",
        margin:20,
    },
    botonProducto:{
        flexDirection:"row",
        width:(screenWidth - 30)
    },

});

export default Infografia;
