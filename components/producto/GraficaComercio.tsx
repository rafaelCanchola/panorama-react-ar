import React, {Component} from "react";
import {StyleSheet, Text, View, Dimensions,} from "react-native";
import {
    VictoryBar,
    VictoryTooltip,
    VictoryChart,
    VictoryAxis,
    VictoryLine,
    VictoryTheme,
    VictoryBrushContainer,
    VictoryGroup,
    VictoryLabel,
    createContainer, VictoryVoronoiContainer,
} from 'victory-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get("window").width

const VictoryZoomVoronoiContainer = createContainer("zoom", "voronoi");

export default class GraficaComercio extends Component<any, any>{
    constructor() {
        super();
        this.state = {};
    }


    render() {
        const vol = this.props.graficaarray;
        const importacionesColor = '#caa882';
        const exportacionesColor = '#46776d';
        const productColor = exportacionesColor;
        const exportacionesVal = vol.slice(0,10);
        const importacionesVal = vol.slice(10,20);

        return (
            <View >
                <Text style={[this.props.titulo,{fontSize:14}]}>
                    {vol[0].unidad}
                </Text>
                <VictoryChart domainPadding={{ x: 20, y: 40}} width={screenWidth} theme={VictoryTheme.material}  containerComponent={
                    <VictoryVoronoiContainer
                        labels={({datum}) =>(datum.idcomercio == 1 ? 'Exportaciones: ' : datum.aniovolumen.toString() + '\nImportaciones: ') + datum.volumenproduccion.toLocaleString()}
                        voronoiDimension="x"
                        labelComponent={<VictoryTooltip flyoutStyle={{fill: 'black'}} style={{fill: "white"}} center={{ x: screenWidth/2, y: 80 }}/>}
                    />}
                >
                    <VictoryAxis tickFormat={(t)=> t.toString()} />
                    <VictoryGroup offset={10} >
                        <VictoryBar
                          style={{
                              data: {
                                  fill: importacionesColor,
                                  width: 10
                              }
                          }}
                          data={importacionesVal}
                          x={(datum) => datum.aniovolumen}
                          y={(datum) => (datum.volumenproduccion < 1) ? datum.volumenproduccion  : datum.volumenproduccion}
                        />
                        <VictoryBar
                          style={{
                              data: {
                                  fill: exportacionesColor,
                                  width: 10
                              }
                          }}
                          data={exportacionesVal}
                          x={(datum) => datum.aniovolumen}
                          y={(datum) => (datum.volumenproduccion < 1) ? datum.volumenproduccion  : datum.volumenproduccion}
                        />
                    </VictoryGroup>
                </VictoryChart>
                <Text style={{ textAlign: 'center', fontFamily: "montserrat-500"}}>
                    <Icon name={"square"} size={10} color={importacionesColor} solid/>{' Importaciones     '}
                    <Icon name={"square"} size={10} color={exportacionesColor} solid/>{' Exportaciones     '}
                </Text>
            </View>
        )
    }
}