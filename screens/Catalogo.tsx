import React, {Component} from "react";
import {
    StyleSheet,
    View,
    Image,
    ImageBackground,
    Text,
    TouchableOpacity, FlatList, Dimensions
} from "react-native";
import {bindActionCreators} from "redux";
import {addProducto,addConteo,deleteProductos} from "../actions/analyticsActions";
import {connect} from 'react-redux';
import BotonMostrarSector from "../components/catalogo/BotonMostrarSector";

import produc from "../json/productos";

const ImagesArray = require('../components/producto/ImagesArray').default

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get('window').height;


class Catalogo extends Component<any, any>{

    render(){
        const {navigation,productos} = this.props;

    const pagesArray = [
        {id:'1',img:'agricola',limite:[0,60]},{id:'2',img:'pecuario',limite:[60,69]},{id:'3',img:'pesquero',limite:[69,75]}
    ];

    const NavigateProducto = (idproducto:Number,color_fondo:any,producto:any) => {
        let busqueda = productos.find(producto => producto.idProducto == idproducto);
        if(typeof(busqueda) !== 'undefined' && busqueda != null ){
            this.props.addConteo(idproducto);
        }else{
            this.props.addProducto(idproducto);
        }
        navigation.navigate('Productos', {id:idproducto,color:color_fondo,name:producto})
    }

    const Item = ({sector,limite}) => (
        <ImageBackground source={ImagesArray(sector)}
                         resizeMode={"cover"}
                         style={{width:(screenWidth)}}>
            <BotonMostrarSector style={styles.botonAgricola} nombre={sector}></BotonMostrarSector>
            <View style={styles.flatlistView}>
                {/*
                    produc.slice(limite[0],limite[1]).map((item)=>
                        <View style={styles.iconoProductoRow} key={item.idproducto}>
                            <Image
                                source={ImagesArray(item.imagen_producto.split("\/")[1])}
                                resizeMode="cover"
                                style={styles.iconoProducto}
                            />
                            <TouchableOpacity onPress={() => navigation.navigate('Producto',{id:item.idproducto})}>
                                <Text style={styles.nombreProducto}>{item.producto}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                */}
                <FlatList data={produc.slice(limite[0],limite[1])} renderItem={renderProduct} keyExtractor={item => item.idproducto}   />
            </View>
            </ImageBackground>
    );
    const renderProduct = ({item}) => (
    <View style={styles.iconoProductoRow}>
        <TouchableOpacity style={styles.botonProducto} onPress={() =>
            NavigateProducto(item.idproducto,item.color_fondo,item.producto)
        }>
            <Image
                source={ImagesArray(item.imagen_producto)}
                resizeMode="cover"
                style={styles.iconoProducto}
            />
            <Text style={styles.nombreProducto}>{item.producto}</Text>
        </TouchableOpacity>
    </View>
    );

    const renderItem = ({item}) =>(
        <Item sector={item.img} limite={item.limite}/>
        );

        return (
            <View style={styles.container}>
                <FlatList data={pagesArray} renderItem={renderItem} keyExtractor={item => item.id} horizontal={true} pagingEnabled={true} />
            </View>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addProducto, addConteo }, dispatch)
}
const mapStateToProps = (state) => {
    return{
        productos: state.analytics.productos,
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Catalogo)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
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
        marginTop: 7
    },
    iconoProductoRow: {
        flexDirection: "row",
        margin:20,
    },
    radioCatalogos: {
        top: 549,
        left: 128,
        width: 120,
        height: 40,
        position: "absolute",
        flexDirection: "row"
    },
    radioAgricola: {
        width: 40,
        height: 40,
        backgroundColor: "rgba(63,81,181,1)"
    },
    radioPecuario: {
        width: 40,
        height: 40
    },
    radioPesquero: {
        height: 40,
        width: 40
    },
    radioAgricolaRow: {
        height: 40,
        flexDirection: "row",
        flex: 1
    },
    botonProducto:{
        flexDirection:"row",
        width:(screenWidth - 30)
    },
    flatlistView:{
        alignSelf:'center',
        width: (screenWidth - 30),
        margin:10,
        backgroundColor: "rgba(230,230, 230,0.75)",
        borderRadius: 5,
        height: (screenHeight/1.4)
    },
    botonAgricola: {
        height: 60,
        alignSelf:'center',
        width: (screenWidth - 30 ),
        borderWidth: 2,
        borderColor: "rgba(255,255,255,1)",
        borderStyle: "solid",
        borderRadius: 7,
        margin:20,
    },
});

