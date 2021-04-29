import React, {Component, useMemo,} from "react";
import {
    StyleSheet,
    View,
    Image,
    ImageBackground,
    Text,
    TouchableOpacity, FlatList, Dimensions, Button, ScrollView
} from "react-native";
import {bindActionCreators} from "redux";
import {addProducto,addConteo,deleteProductos} from "../actions/analyticsActions";
import {connect} from 'react-redux';
import {ProductoAnimado} from "../components/animations/ProductAnim";
import SideSwipe from 'react-native-sideswipe';
import Modal from 'react-native-modalbox';

import produc from "../json/productos";

const ImagesArray = require('../components/producto/ImagesArray').default

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get('window').height;


class Carousel extends Component<any, any>{
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            productIdIndex: 0,
            isOpen:false,
            isDisabled:false,
            swipeToClose:true,
            bgColor:"#fff",
            sector:{id:'0',img:'0',limite:[0,0],name:'0'},
        };
    }

    render(){
        const {navigation,productos} = this.props;


        const pagesArray = [
            {id:'1',img:'Fagricola',imgf:'Fagricola2',limite:[0,60],name:'SECTOR AGRÍCOLA'},{id:'2',img:'Fpecuario',imgf:'Fpecuario2',limite:[60,69],name:'SECTOR PECUARIO'},{id:'3',img:'Fpesquero',imgf:'Fpesquero2',limite:[69,75],name:'SECTOR PESQUERO'}
        ];

    const NavigateProducto = (idproducto:any,color_fondo:any,producto:any) => {
        let busqueda = productos.find(producto => producto.idProducto == idproducto);
        if(typeof(busqueda) !== 'undefined' && busqueda != null ){
            this.props.addConteo(idproducto);
        }else{
            this.props.addProducto(idproducto);
        }
        navigation.navigate('Productos', {id:idproducto,color:color_fondo,name:producto})
    }
    const renderItem = () =>(
        <ImageBackground source={ImagesArray(this.state.sector.img)}
                         resizeMode={'stretch'}
                         style={{width:(screenWidth),height:(screenHeight/1.5), justifyContent:'center'}}>
            <Text style={styles.tituloSeleccionar}>{this.state.sector.name}</Text>
            <SideSwipe
                data={produc.slice(this.state.sector.limite[0],this.state.sector.limite[1])}
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
            <TouchableOpacity style={[styles.botonSeleccionar,{backgroundColor:produc[this.state.currentIndex+this.state.sector.limite[0]].color_fondo}]} onPress={() =>
                NavigateProducto(produc[this.state.currentIndex+this.state.sector.limite[0]].idproducto,produc[this.state.currentIndex+this.state.sector.limite[0]].color_fondo,produc[this.state.currentIndex+this.state.sector.limite[0]].producto)}>
                <Text style={styles.tituloSeleccionar}>SELECCIONAR PRODUCTO</Text>
            </TouchableOpacity>

        </ImageBackground>
            );


        const renderSectores = ({item}) => (
            <ImageBackground source={ImagesArray(item.imgf)}
                             resizeMode={'stretch'}
                             style={{width:(screenWidth),height:(screenHeight/3.15), justifyContent:'center'}}>
                <TouchableOpacity style={[styles.containerBoton, styles.botonAgricola,]} onPress={() => {this.setState({isOpen: true,bgColor:item.color,sector:item})}}>
                    <Text style={styles.agricola}>
                        {item.name}
                    </Text>
                </TouchableOpacity>
            </ImageBackground>
        );

        return (
            <View style={styles.container}>
                <View style={{margin:screenHeight/40}}/>
                <FlatList data={pagesArray} renderItem={renderSectores} keyExtractor={item => item.id} />

                <Modal position={'bottom'} isOpen={this.state.isOpen} onClosed={() => this.setState({isOpen: false})} style={{justifyContent: 'center',
                    alignItems: 'center',height:screenHeight/1.5}} backdropPressToClose={false} swipeToClose={true} >
                    {renderItem()}
                </Modal>
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

export default connect (mapStateToProps, mapDispatchToProps)(Carousel)

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

