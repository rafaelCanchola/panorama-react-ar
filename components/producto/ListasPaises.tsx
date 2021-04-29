import React from "react";
import {View, StyleSheet, Text, Image} from "react-native";
import {FlatGrid,SectionGrid} from "react-native-super-grid";
const ImagesArray = require('../producto/ImagesArray').default
export default function ListasPaises(props){
    let sections =[];
    if(props.clienteprin && props.clienteprin.length){
        sections.push({title: 'Cliente principal', data:[{clientepais:props.clienteprin,monto:props.monto},{bandera:props.clienteprin}]});
    }
    if(props.clientes && props.clientes.length){
        sections.push({title: 'Cliente', sub:'(exportaciones de México)',data:props.clientes});
    }
    if(props.proveedor && props.proveedor.length) {
        sections.push({title: 'Proveedor', sub:'(importaciones de México)', data: props.proveedor});
    }
    if(props.importador && props.importador.length){
        sections.push({title: 'Importador y Exportador', data:props.importador});
    }

    const ClientePrincipal = ({item}) => (
    <View >
        <Text style={[styles.itemName,{paddingBottom:10, fontFamily: "montserrat-700",}]}>{item.monto}*</Text>
        <Text style={[styles.itemName,{paddingBottom:10,}]}>○{item.clientepais}</Text>
        <Text style={[styles.itemName,{fontSize:12,fontWeight:'400',paddingBottom:5,}]}>*Dólares</Text>
    </View>
    );

    return(
        <SectionGrid sections={sections} style={styles.gridView}
                     renderItem={({item,section,index}) => ( 'clientepais' in item ? <ClientePrincipal item={item}/> : 'bandera' in item ? <Image source={ImagesArray(item.bandera)} resizeMode="cover" style={{width:160, height:100,alignSelf:'center'}}/> : <Text style={styles.itemName}>{item.pais}</Text> )}
                     renderSectionHeader={({section}) => (<View><Text style={[styles.sectionHeader,{backgroundColor:props.color}]}>{section.title}</Text>{'sub' in section ? <Text style={[styles.sectionSub,{backgroundColor:props.color}]}>{section.sub}</Text>:<View/>}</View>)}
        />
    )
}

const styles = StyleSheet.create({
    gridView: {
        marginTop: 10,
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 150,
    },
    itemName: {
        fontSize: 16,
        color: 'black',
        fontFamily: "montserrat-500",
    },
    sectionHeader: {
        flex: 1,
        fontSize: 15,
        fontFamily: "montserrat-700",
        alignItems: 'center',
        color: 'white',
        padding: 5,
        textAlign:'center'
    },sectionSub: {
        flex: 1,
        fontSize: 13,
        fontFamily: "montserrat-500",
        alignItems: 'center',
        backgroundColor: '#636e72',
        color: 'white',
        textAlign:'center'
    },
})