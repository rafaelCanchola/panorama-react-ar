import React from "react";
import {
    Dimensions,
    FlatList,
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

const CambioColor = require('../../components/CambioColor').default
const ImagesArray = require('../../components/producto/ImagesArray').default

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get('window').height;

function CalendarioProduccion(props) {
    let monthName = [
        {id:1,month:'Enero',prod:props.calendarioarr[0].enero,color:0},
        {id:2,month:'Febrero',prod:props.calendarioarr[0].febrero,color:0},
        {id:3,month:'Marzo',prod:props.calendarioarr[0].marzo,color:0},
        {id:4,month:'Abril',prod:props.calendarioarr[0].abril,color:0},
        {id:5,month:'Mayo',prod:props.calendarioarr[0].mayo,color:0},
        {id:6,month:'Junio',prod:props.calendarioarr[0].junio,color:0},
        {id:7,month:'Julio',prod:props.calendarioarr[0].julio,color:0},
        {id:8,month:'Agosto',prod:props.calendarioarr[0].agosto,color:0},
        {id:9,month:'Septiembre',prod:props.calendarioarr[0].septiembre,color:0},
        {id:10,month:'Octubre',prod:props.calendarioarr[0].octubre,color:0},
        {id:11,month:'Noviembre',prod:props.calendarioarr[0].noviembre,color:0},
        {id:12,month:'Diciembre',prod:props.calendarioarr[0].diciembre,color:0},];
    let disponibilidad = [];
    const Item = ({month,info,color}) =>(
        <ImageBackground
            source={ImagesArray(month)}
            resizeMode={"contain"}
            style={[styles.imagenConsumo,{backgroundColor:CambioColor(color,props.color),width:(screenWidth/3.2),height:(screenWidth/3.2)}]}>

            <Text style={[styles.datoConsumo,{color:'black'}]}>{info}</Text>

        </ImageBackground>
    );

    const renderItem = ({item}) => (
        <Item month={item.month} info={item.prod} color={item.color}/>
    );

    monthName.sort(function (a,b){ return a.prod - b.prod });
    for(let i = 0,j= 0.55; i<12;i++,j-=0.05){
        monthName[i].color = j;
    }
    disponibilidad.push(monthName[11].color);
    disponibilidad.push(monthName[7].color);
    disponibilidad.push(monthName[0].color);
    monthName.sort(function (a,b){ return a.id - b.id });
    return (
            <View style={{flex:1,}}>
                <FlatList data={monthName.slice(0,3)} renderItem={renderItem} keyExtractor={item => item.month} scrollEnabled={false} horizontal={true} />
                <FlatList data={monthName.slice(3,6)} renderItem={renderItem} keyExtractor={item => item.month} scrollEnabled={false} horizontal={true} />
                <FlatList data={monthName.slice(6,9)} renderItem={renderItem} keyExtractor={item => item.month} scrollEnabled={false} horizontal={true} />
                <FlatList data={monthName.slice(9,12)} renderItem={renderItem} keyExtractor={item => item.month} scrollEnabled={false} horizontal={true} />
                <Text style={{ textAlign: 'center', fontFamily: "montserrat-500"}}>
                    <Icon name={"circle"} size={10} color={CambioColor(disponibilidad[0],props.color)} solid/>{' Mayor diponibilidad          '}
                    <Icon name={"circle"} size={10} color={CambioColor(disponibilidad[1],props.color)} solid/>{' Disponibilidad media          '}
                    <Icon name={"circle"} size={10} color={CambioColor(disponibilidad[2],props.color)} solid/>{' Poca o nula disponibilidad     '}
                </Text>
            </View>
        )
}

const styles = StyleSheet.create({
    imagenConsumo: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'center',
    },
    fechaConsumo: {
        fontFamily: "montserrat-700",
        fontSize: 25,
        textAlign: 'center',
        flex:0,
        position:'relative',

    },
    datoConsumo:{
        fontFamily: "montserrat-700",
        fontSize: 38,
        textAlign: 'center',

    }

});

export default CalendarioProduccion;