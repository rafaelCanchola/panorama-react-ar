import React from "react";
import {
    StyleSheet,
    View,
    ScrollView,
    Text, Dimensions
} from "react-native";
import TituloProducto from "../components/producto/TituloProducto";
import ImagenProducto from "../components/producto/ImagenProducto";
import ImagenConsumo from "../components/producto/ImagenConsumo";
import TextoDescripcion from "../components/producto/TextoDescripcion";
import TextoAgroindustriales from "../components/producto/TextoAgroindustriales";
import CalendarioProduccion from "../components/producto/CalendarioProduccion";
import GraficaProduccion from "../components/producto/GraficaProduccion";
import TablaTopProduccion from "../components/producto/TablaTopProduccion";
import TablaIndicadores from "../components/producto/TablaIndicadores";

import produc from "../json/productos";
import producvol from "../json/productionVolumeJSON";
import top10 from "../json/top10_statesJSON";
import indicadores19 from "../json/indicadores_infoJSON";
import monthD from "../json/monthDistributionJSON";

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get("window").width

function Producto({route}) {
    const {id} = route.params;
    const idProducto = id -1;
    return (
        <View style={styles.container}>
            <View >
                <View >
                    <ScrollView
                        horizontal={false}
                        contentContainerStyle={styles.scrollArea_contentContainerStyle}
                    >
                        <View style={{backgroundColor:'#fff'}}>
                            <TituloProducto nombre={produc[idProducto].producto} color={produc[idProducto].color_fondo} style={styles.tituloProducto}/>
                            <ImagenProducto img={produc[idProducto].imagen_producto.split("\/")[1]}/>
                            <TextoDescripcion descripcion={produc[idProducto].descripcion} style={styles.textoPrincipal}/>

                            <ImagenConsumo bgcolor={produc[idProducto].color_fondo} consumo={produc[idProducto].consumonacional}/>

                            <Text style={styles.tituloParticipacion}>
                                {produc[idProducto].participacionetiqueta}
                            </Text>
                            <TextoAgroindustriales participacion={produc[idProducto].participacion + '%'} color={produc[idProducto].color_fondo} width={screenWidth}/>
                        </View>
                        <View style={{backgroundColor:'#fff'}}>
                            <Text style={styles.tituloVolumen}>
                                Volumen de la producción nacional 2010-2019
                            </Text>
                            <GraficaProduccion graficaarray={producvol[idProducto]} color={produc[idProducto].color_fondo} titulo={styles.tituloVolumen}/>
                        </View>

                        <View style={{backgroundColor:'#fff'}}>
                            <Text style={styles.tituloTop}>
                                Top en volumen de producción
                            </Text>
                            <Text style={styles.tituloTop}>
                                Principales entidades
                            </Text>
                            <TablaTopProduccion
                                data={top10[idProducto+1]}
                                color={produc[idProducto].color_fondo}
                                unidades={producvol[idProducto][0].unidad.split(" ")[2]}
                                totalnac={produc[idProducto].volumen_toneladas}
                                variacionpro={produc[idProducto].variacion_producto}/>

                            <Text style={styles.tituloPorcentaje}>
                                Porcentaje del valor de la producción por entidad federativa
                            </Text>
                            <ImagenProducto img={produc[idProducto].mapaentidades.split("\/")[1]}/>
                            <Text style={styles.textoPorcentaje}>
                                {produc[idProducto].valprodentidadlider}
                            </Text>
                        </View>
                        <Text style={styles.tituloPorcentaje}>Indicadores 2019</Text>
                        <TablaIndicadores indicadorarr={indicadores19[idProducto]} color={produc[idProducto].color_fondo}/>

                        <Text style={styles.tituloPorcentaje}>
                            Producción mensual nacional (%)
                        </Text>
                        <CalendarioProduccion calendarioarr={monthD[idProducto]} color={produc[idProducto].color_fondo}/>
                        <Text style={styles.textoPorcentaje}>
                            {produc[idProducto].mercadospotenciales}
                        </Text>

                        <Text style={styles.textoPorcentaje}>
                            {produc[idProducto].distribucionmensualprod}
                        </Text>

                        <View style={{backgroundColor:'#fff'}}>
                            <Text style={styles.tituloPorcentaje}>Ranking Mundial</Text>
                            <Text style={styles.textoPorcentaje}>
                                {produc[idProducto].rankingmundial}º productor mundial
                            </Text>
                            <Text style={styles.textoPorcentaje}>
                                {produc[idProducto].rankingmundial_descripcion}
                            </Text>
                            <Text style={styles.textoPorcentaje}>
                                {produc[idProducto].paismasproductivo}
                            </Text>
                            <TextoAgroindustriales participacion={produc[idProducto].volumen_toneladas + ' toneladas'} color={produc[idProducto].color_fondo} width={screenWidth}/>
                        </View>

                        <Text style={styles.tituloPorcentaje}>Comercio exterior 2019</Text>
                        <Text style={styles.textoPorcentaje}>
                            {produc[idProducto].comercioexterior}
                        </Text>
                        <Text style={styles.textoPorcentaje}>
                            Origen-destino comercial
                        </Text>
                        <Text style={styles.textoPorcentaje}>
                            {produc[idProducto].mercadospotenciales}
                        </Text>


                        <Text style={styles.tituloPorcentaje}>
                            Evolución de comercio exterior
                        </Text>
                        <Text style={styles.tituloPorcentaje}>
                            Distribución mensual del comercio exterior (%)
                        </Text>
                        <TituloProducto nombre={produc[idProducto].producto} color={produc[idProducto].color_fondo} style={styles.tituloProducto}/>
                        <ImagenProducto img={produc[idProducto].imagen_monografia.split("\/")[1]}/>
                        <Text style={styles.textoExterior}>
                            {produc[idProducto].nom_cientifico_monografia}
                        </Text>
                        <Text style={styles.tituloEvolucion}>
                            Descripción
                        </Text>
                        <TextoDescripcion descripcion={produc[idProducto].descripcion_monografia} style={styles.textoPrincipal}/>
                        <Text style={styles.tituloEvolucion}>
                            Producto
                        </Text>
                        <TextoDescripcion descripcion={produc[idProducto].contenido_producto_monografia} style={styles.textoPrincipal}/>
                        <Text style={styles.tituloEvolucion}>
                            Flujo Comercial
                        </Text>
                        <ImagenProducto img={produc[idProducto].imagen_flujo_comercial.split("\/")[1]}/>
                        <TextoDescripcion descripcion={produc[idProducto].texto_flujo_comercial} style={styles.textoPrincipal}/>




                        {/*
            <FontAwesomeIcon
                name="table"
                style={styles.tablaIndicadores}
            ></FontAwesomeIcon>
            <Text style={styles.tituloMensual}>
                Producción mensual nacional (%)
            </Text>
            <Text style={styles.textoMensual}>
                La jima (cosecha) de agave está presen...
            </Text>
            <SimpleLineIconsIcon
                name="calendar"
                style={styles.calendarioMensual}
            ></SimpleLineIconsIcon>
            <Text style={styles.tituloExterior}>Comercio exterior 2019</Text>
            <Text style={styles.textoExterior}>
                Durante 2019 las ventas internacionales...
            </Text>
            <Text style={styles.tituloOrigen}>Origen-destino comercial</Text>
            <Text style={styles.textoOrigen}>
                En 2019, Japón desplazó al Reino Unido...
            </Text>
            <View style={styles.group}>
                <View style={styles.listadosClientesStack}>
                    <Text style={styles.listadosClientes}>
                        • Cliente principal • Clientes (export...) • Proveedores Entre
                        2018 y 2019 E...
                    </Text>
                    <Image
                        source={require("../assets/images/.png")}
                        resizeMode="contain"
                        style={styles.imagenBandera}
                    ></Image>
                </View>
            </View>
            <Text style={styles.tituloEvolucion}>
                Evolución de comercio exterior
            </Text>
            <View style={styles.graficaEvolucionStack}>
                <OcticonsIcon
                    name="graph"
                    style={styles.graficaEvolucion}
                ></OcticonsIcon>
                <Text style={styles.tituloDistribucion}>
                    Distribución mensual del comerc...
                </Text>
            </View>
            <FontAwesomeIcon
                name="table"
                style={styles.tablaDistribucion}
            ></FontAwesomeIcon>*/}
                    </ScrollView>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    botonMenu: {
        position: "absolute",
        left: 296,
        top: 0,
        width: 56,
        height: 56
    },
    scrollArea: {
    },
    scrollArea_contentContainerStyle: {
        width: screenWidth,
        overflow: "hidden"
    },
    tituloProducto: {
        width: screenWidth -30 ,
        height: 83,
        alignSelf: "center"
    },
    tituloParticipacion: {
        fontFamily: "montserrat-700",
        color: "rgba(128,128,128,1)",
        width: screenWidth -30,
        textAlign: "center",
        fontSize: 18,
        left: 0
    },
    datoParticipacion: {
        fontFamily: "montserrat-900",
        color: "rgba(0,114,127,1)",
        fontSize: 40,
        textAlign: "center",
        lineHeight: 60
    },
    imagenConsumoStack: {
        top: 17,
        left: 0,
        width: 327,
        height: 400,
        position: "absolute"
    },
    textoPrincipal: {
        fontFamily: "montserrat-regular",
        color: "#121212",
        width: screenWidth -30,
        fontSize: 16,
        alignSelf:"center",
    },
    imagenConsumoStackStack: {
        width: 327,
        height: 417,
        marginTop: 6,
        marginLeft: 24
    },
    tituloVolumen: {
        fontFamily: "montserrat-700",
        color: "rgba(128,128,128,1)",
        width: screenWidth -30,
        textAlign: "center",
        fontSize: 18,
        alignSelf: "center"
    },
    graficaVolumen: {
        top: 0,
        left: 144,
        position: "absolute",
        color: "rgba(128,128,128,1)",
        fontSize: 40
    },
    tituloTop: {
        fontFamily: "montserrat-700",
        color: "rgba(128,128,128,1)",
        width: screenWidth -30,
        textAlign: "center",
        fontSize: 18,
        alignSelf:"center",
    },
    graficaVolumenStack: {
        width: screenWidth -30,
        height: 64,
        marginTop: 1,
        marginLeft: 24
    },
    tablaTop: {
        color: "rgba(128,128,128,1)",
        fontSize: 40,
        alignSelf:"center",
    },
    tituloPorcentaje: {
        fontFamily: "montserrat-700",
        color: "rgba(128,128,128,1)",
        width: screenWidth -30,
        textAlign: "center",
        fontSize: 18,
        alignSelf:"center",
    },
    tablaTopStack: {
        width: 327,
        height: 57,
        marginLeft: 24
    },
    imagenMapa: {
        width:  screenWidth -30,
        height: 200,
        alignSelf: "center",
    },
    textoPorcentaje: {
        fontFamily: "montserrat-regular",
        color: "#121212",
        width: screenWidth -30,
        fontSize: 16,
        marginTop: 7,
        alignSelf:"center",
    },
    tituloIndicadores: {
        fontFamily: "montserrat-700",
        color: "rgba(128,128,128,1)",
        width: 327,
        textAlign: "center",
        fontSize: 18,
        marginLeft: 26,
        alignSelf: "center"
    },
    tablaIndicadores: {
        color: "rgba(128,128,128,1)",
        fontSize: 40,
        marginLeft: 171
    },
    tituloMensual: {
        fontFamily: "montserrat-700",
        color: "rgba(128,128,128,1)",
        width: 327,
        textAlign: "center",
        fontSize: 18,
        marginLeft: 26,
        alignSelf: "center"
    },
    textoMensual: {
        fontFamily: "montserrat-regular",
        color: "#121212",
        width: 327,
        fontSize: 16,
        marginLeft: 26,
        alignSelf: "center"
    },
    calendarioMensual: {
        color: "rgba(128,128,128,1)",
        fontSize: 40,
        marginLeft: 171
    },
    tituloExterior: {
        fontFamily: "montserrat-700",
        color: "rgba(128,128,128,1)",
        width: 327,
        textAlign: "center",
        fontSize: 18,
        alignSelf:'center'
    },
    textoExterior: {
        fontFamily: "montserrat-regular",
        color: "#121212",
        width: 327,
        fontSize: 16,
        alignSelf:'center'
    },
    tituloOrigen: {
        fontFamily: "montserrat-500",
        color: "#121212",
        height: 20,
        width: 327,
        fontSize: 16,
        marginLeft: 24
    },
    textoOrigen: {
        fontFamily: "montserrat-regular",
        color: "#121212",
        height: 20,
        width: 327,
        fontSize: 16,
        marginLeft: 26
    },
    group: {
        width: 328,
        height: 80,
        marginLeft: 27
    },
    listadosClientes: {
        top: 0,
        position: "absolute",
        fontFamily: "montserrat-regular",
        color: "#121212",
        height: 80,
        width: 328,
        fontSize: 16,
        left: 0
    },
    imagenBandera: {
        top: 0,
        left: 221,
        width: 75,
        height: 39,
        position: "absolute"
    },
    listadosClientesStack: {
        width: 328,
        height: 80
    },
    tituloEvolucion: {
        fontFamily: "montserrat-700",
        color: "rgba(128,128,128,1)",
        width: 327,
        textAlign: "center",
        fontSize: 18,
        alignSelf:'center'
    },
    graficaEvolucion: {
        top: 0,
        left: 144,
        position: "absolute",
        color: "rgba(128,128,128,1)",
        fontSize: 40
    },
    tituloDistribucion: {
        position: "absolute",
        fontFamily: "montserrat-700",
        color: "rgba(128,128,128,1)",
        width: 327,
        height: 22,
        textAlign: "center",
        fontSize: 18,
        top: 44,
        left: 0
    },
    graficaEvolucionStack: {
        width: 327,
        height: 66,
        marginLeft: 24
    },
    tablaDistribucion: {
        color: "rgba(128,128,128,1)",
        fontSize: 40,
        marginLeft: 169
    },
    footerRegresarStackStack: {
        width: 375,
        height: 636,
        marginTop: 31
    }
});

export default Producto;
