import React, {Component,} from "react";
import {
    StyleSheet,
    View,
    ImageBackground,
    Text,
    TouchableOpacity, Dimensions, NativeModules
} from "react-native";
import {bindActionCreators} from "redux";
import {addProducto,addConteo,deleteProductos} from "../actions/analyticsActions";
import {connect} from 'react-redux';
import {ProductoAnimado} from "../components/animations/ProductAnim";
import SideSwipe from 'react-native-sideswipe';

import produc from "../json/productos";

const ImagesArray = require('../components/producto/ImagesArray').default

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get('window').height;

const AR = NativeModules.ARObjModule;

class VistaAR extends Component<any, any>{
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            productIdIndex: 0,
            isOpen:false,
            isDisabled:false,
            swipeToClose:true,
            bgColor:"#fff",
            sector:{id:'1',img:'Fagricola',imgf:'Fagricola2',limite:[0,60],name:'SECTOR AGRÍCOLA'},
        };
    }

    render() {
        const {navigation,productos} = this.props;

        const arProdArray = [
            produc[1],
            produc[11],
            produc[15],
            produc[65],
            produc[32],
            produc[36],
            produc[37],
            produc[72] ,
            produc[38],
            produc[44],
            produc[45],
            produc[46],
            produc[63],
        ];


        const NavigateProducto = (idproducto:any,producto:any) => {
            let busqueda = productos.find(producto => producto.idProducto == idproducto);
            if(typeof(busqueda) !== 'undefined' && busqueda != null ){
                this.props.addConteo(idproducto);
            }else{
                this.props.addProducto(idproducto);
            }
            AR.changeToNativeView(producto);
        }

        return (
            <View style={styles.container}>
                <ImageBackground source={ImagesArray(this.state.sector.imgf)}
                                 resizeMode={'cover'}
                                 style={{width:(screenWidth),height:(screenHeight), justifyContent:'center'}}>
                    <Text style={styles.tituloSeleccionar}>PRODUCTOS EN </Text>
                    <Text style={styles.tituloSeleccionar}>REALIDAD AUMENTADA</Text>
                    <SideSwipe
                        data={arProdArray}
                        shouldCapture={() => true}
                        itemWidth={ProductoAnimado.WIDTH}
                        threshold={ProductoAnimado.WIDTH / 3}
                        extractKey={item => item.idproducto}
                        contentOffset={(screenWidth - ProductoAnimado.WIDTH)/2}
                        onIndexChange={index =>
                            this.setState(() => ({ currentIndex: index }))}

                        renderItem={({ itemIndex, currentIndex, item, animatedValue }) =>
                            (
                                <ProductoAnimado
                                    product={item}
                                    index={itemIndex}
                                    currentIndex={currentIndex}
                                    animatedValue={animatedValue}
                                />
                            )}
                    />
                    <TouchableOpacity style={[styles.botonSeleccionar,{backgroundColor:arProdArray[this.state.currentIndex].color_fondo}]} onPress={() =>
                        NavigateProducto(arProdArray[this.state.currentIndex].idproducto,arProdArray[this.state.currentIndex].producto)}>
                        <Text style={styles.tituloSeleccionar}>SELECCIONAR PRODUCTO</Text>
                    </TouchableOpacity>

                </ImageBackground>
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

export default connect (mapStateToProps, mapDispatchToProps)(VistaAR)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
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
    botonSeleccionar: {
        width: '90%',
        justifyContent: 'center',
        borderRadius: 4,
        alignSelf:'center',
        minHeight:40,
        marginTop:30,
    },
    tituloSeleccionar: {
        color: 'white',
        letterSpacing: 1.3,
        fontSize: 20,
        fontFamily: 'roboto-700',
        alignSelf:'center'
    },
    containerBoton: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.35,
        shadowRadius: 5,
        elevation: 2,
        minWidth: 88,
    },
    agricola: {
        color: "#fff",
        fontSize: 32,
        fontFamily: "montserrat-regular"
    },

});

