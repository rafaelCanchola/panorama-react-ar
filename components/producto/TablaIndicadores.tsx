import React, {Component} from "react";
import {View, StyleSheet, ScrollView,Text} from "react-native";
import {Table,Row,Col,TableWrapper,Cell} from 'react-native-table-component';
import CellData from "./CellData";
import Icon from 'react-native-vector-icons/FontAwesome5';
export default class TablaIndicadores extends Component<any, any>{
    render() {
        const indicadorArray = this.props.indicadorarr;
        /*Llenado de la primera tabla*/
        const heightCell = 50;
        const headArrTable1=[130,270,100,100,100,130];
        const subWidthArrTable1=[130,90,90,90,100,100,100,130];
        const indicadoresHeadTable1= ['',indicadorArray.Superficie,indicadorArray.Volumen,indicadorArray.Valor,indicadorArray.Rendimiento,indicadorArray.Precio_Medio];
        const indicadoresUnidadTable1 = [indicadorArray.Sub_Etiqueta_Vol_1,indicadorArray.Sub_Etiqueta_Val,indicadorArray.Sub_Etiqueta_Rendimiento,indicadorArray.Sub_Etiqueta_Precio_Med]
        const superficieRow = [indicadorArray.Sub_Etiqueta_Superficie_1,indicadorArray.Sub_Etiqueta_Superficie_2,indicadorArray.Sub_Etiqueta_Superficie_3];
        const primerCol =['Variaciones %\nAnual 2018-2019','Variaciones %\nTMAC 2018-2019'];
        const indicadoresValRowTable1 = ['',indicadorArray.SuperficieSemVal,indicadorArray.SuperficieSiniVal,indicadorArray.SuperficieCoseVal,indicadorArray.VolumenVal_1,indicadorArray.ValorVal,indicadorArray.RendiVal,indicadorArray.PrecioVal];
        const superficieSem = [indicadorArray.SuperficieSemValAnual,indicadorArray.SuperficieSemValTMAC];
        const superficieSini = [indicadorArray.SuperficieSiniValAnual,indicadorArray.SuperficieSiniValTMAC];
        const superficieCose = [indicadorArray.SuperficieCoseValAnual,indicadorArray.SuperficieCoseValTMCA];
        const volumenVals =[indicadorArray.VolumenValAnual_1,indicadorArray.VolumenValTMAC_1];
        const valorVals =[indicadorArray.ValorValAnual,indicadorArray.ValorValTMAC];
        const rendiVals =[indicadorArray.RendiAnual,indicadorArray.RendiTMAC];
        const precioVals =[indicadorArray.PrecioAnual,indicadorArray.PrecioTMAC];
        /*Llenado de la segunda tabla*/
        const headArrTable2=[130,100,100,100,130];
        const indicadoresHeadTable2= ['',indicadorArray.Inventario,indicadorArray.Produccion,indicadorArray.Valor,indicadorArray.Precio_Medio];
        const indicadoresUnidadTable2 =['',indicadorArray.Sub_Etiqueta_Inven,indicadorArray.Sub_Etiqueta_Prod,indicadorArray.Sub_Etiqueta_Val,indicadorArray.Sub_Etiqueta_Precio_Med];
        const indicadoresValRowTable2 = ['',indicadorArray.InventarioVal,indicadorArray.ProduccionVal,indicadorArray.ValorVal,indicadorArray.PrecioVal];
        const inventarioVals=[indicadorArray.InventarioAnual,indicadorArray.InventarioTMAC];
        const produccionVals=[indicadorArray.ProduccionAnual,indicadorArray.ProduccionTMAC];
        /*Llenado de la tercera tabla*/
        const headArrTable3=[130,150,130,130];
        const indicadoresHeadTable3= ['',indicadorArray.Volumen,indicadorArray.Valor,indicadorArray.Precio_Medio];
        const indicadoresUnidadTable3 =['',indicadorArray.Sub_Etiqueta_Vol_1,indicadorArray.Sub_Etiqueta_Val,indicadorArray.Sub_Etiqueta_Precio_Med];
        const indicadoresValRowTable3 = ['',indicadorArray.VolumenVal_1,indicadorArray.ValorVal,indicadorArray.PrecioVal];

        const switchTable1 =
            <View style={styles.container}>
                <Table >
                    {/*header de la tabla*/}
                    <Row data={indicadoresHeadTable1} style={{backgroundColor:this.props.color}} widthArr={headArrTable1} height={heightCell} textStyle={styles.textwhite}/>
                    <TableWrapper style={{flexDirection:'row'}}>{/*primeras dos filas de la tabla*/}
                    {/*unidades de superficie*/}
                        <TableWrapper>
                            <TableWrapper style={{flexDirection:'row'}}>
                                {/*subtitulos de superficie*/}
                                <Cell data="" width={headArrTable1[0]} height={heightCell} />
                                <Cell data={superficieRow[0]} width={headArrTable1[1]/3} height={heightCell} textStyle={styles.intitle}/>
                                <Cell data={superficieRow[1]} width={headArrTable1[1]/3} height={heightCell} textStyle={styles.intitle}/>
                                <Cell data={superficieRow[2]} width={headArrTable1[1]/3} height={heightCell} textStyle={styles.intitle}/>
                            </TableWrapper>
                            <TableWrapper style={{flexDirection:'row'}}>
                                {/*unidades de superficie*/}
                                <Cell data=""  width={headArrTable1[0]} height={heightCell}/>
                                <Cell data={indicadorArray.Sub_Etiqueta_Superficie_4} width={headArrTable1[1]} height={heightCell} textStyle={styles.intitle}/>
                            </TableWrapper>
                        </TableWrapper>
                        {/*unidades del resto de indicadores*/}
                        <Cell data={indicadoresUnidadTable1[0]} width={headArrTable1[2]} height={heightCell*2} textStyle={styles.intitle}/>
                        <Cell data={indicadoresUnidadTable1[1]} width={headArrTable1[3]} height={heightCell*2} textStyle={styles.intitle}/>
                        <Cell data={indicadoresUnidadTable1[2]} width={headArrTable1[4]} height={heightCell*2} textStyle={styles.intitle}/>
                        <Cell data={indicadoresUnidadTable1[3]} width={headArrTable1[5]} height={heightCell*2} textStyle={styles.intitle}/>
                    </TableWrapper>
                    {/*unidades del resto de indicadores*/}
                    <Row data={indicadoresValRowTable1} widthArr={subWidthArrTable1} height={heightCell} textStyle={styles.text}/>
                    <TableWrapper style={{flexDirection:"row"}}>
                        <Col data={primerCol} style={[styles.title,{backgroundColor:this.props.color}]} width={headArrTable1[0]} heightArr={[heightCell,heightCell]} textStyle={styles.textwhite}/>
                        {/*Valores Superficie*/}
                        <CellData data={superficieSem} width={headArrTable1[1]/3} height={heightCell}/>
                        <CellData data={superficieSini} width={headArrTable1[1]/3} height={heightCell}/>
                        <CellData data={superficieCose} width={headArrTable1[1]/3} height={heightCell}/>
                        <CellData data={volumenVals} width={headArrTable1[2]} height={heightCell}/>
                        <CellData data={valorVals} width={headArrTable1[3]} height={heightCell}/>
                        <CellData data={rendiVals} width={headArrTable1[4]} height={heightCell}/>
                        <CellData data={precioVals} width={headArrTable1[5]} height={heightCell}/>
                    </TableWrapper>
                </Table>
            </View>
        ;

        const switchTable2 =
            <View style={styles.container}>
                <Table>
                    {/*header de la tabla*/}
                    <Row data={indicadoresHeadTable2} style={{backgroundColor:this.props.color}} widthArr={headArrTable2} height={heightCell} textStyle={styles.textwhite}/>
                    <Row data={indicadoresUnidadTable2} widthArr={headArrTable2} height={heightCell} textStyle={styles.intitle}/>
                    <Row data={indicadoresValRowTable2} widthArr={headArrTable2} height={heightCell} textStyle={styles.text}/>
                    <TableWrapper style={{flexDirection:"row"}}>
                        <Col data={primerCol} style={[styles.title,{backgroundColor:this.props.color}]} width={headArrTable2[0]} heightArr={[heightCell,heightCell]} textStyle={styles.textwhite}/>
                        <CellData data={inventarioVals} width={headArrTable2[1]} height={heightCell}/>
                        <CellData data={produccionVals} width={headArrTable2[2]} height={heightCell}/>
                        <CellData data={valorVals} width={headArrTable2[3]} height={heightCell}/>
                        <CellData data={precioVals} width={headArrTable2[4]} height={heightCell}/>
                    </TableWrapper>
                </Table>
            </View>
        ;

        const switchTable3 =
            <View style={styles.container}>
                <Table>
                    {/*header de la tabla*/}
                    <Row data={indicadoresHeadTable3} style={{backgroundColor:this.props.color}} widthArr={headArrTable3} height={heightCell} textStyle={styles.textwhite}/>
                    <Row data={indicadoresUnidadTable3} widthArr={headArrTable3} height={heightCell} textStyle={styles.intitle}/>
                    <Row data={indicadoresValRowTable3} widthArr={headArrTable3} height={heightCell} textStyle={styles.text}/>
                    <TableWrapper style={{flexDirection:"row"}}>
                        <Col data={primerCol} style={[styles.title,{backgroundColor:this.props.color}]} width={headArrTable3[0]} heightArr={[heightCell,heightCell]} textStyle={styles.textwhite}/>
                        <CellData data={volumenVals} width={headArrTable3[1]} height={heightCell}/>
                        <CellData data={valorVals} width={headArrTable3[2]} height={heightCell}/>
                        <CellData data={precioVals} width={headArrTable3[3]} height={heightCell}/>
                    </TableWrapper>
                </Table>
            </View>
        ;

        switch (indicadorArray.Tipo_Producto){
            case '1': return (
                <View style={styles.container}>
                    <ScrollView horizontal={true}>
                        {switchTable1}
                    </ScrollView>
                    <Text style={styles.text}>
                    <Icon name={"circle"} size={10} color={'#007940'} solid/>{' Aumenta     '}
                    <Icon name={"circle"} size={10} color={'#c91531'} solid/>{' Disminuye     '}
                        <Icon name={"circle"} size={10} color={'#59595b'} solid/>{' No aplica     '}
                    </Text>
                </View>
                    )
            case '2': return (
                <View style={styles.container}>
                    <ScrollView horizontal={true}>
                        {switchTable2}
                    </ScrollView>
                    <Text style={styles.text}>
                        <Icon name={"circle"} size={10} color={'#007940'} solid/>{' Aumenta     '}
                        <Icon name={"circle"} size={10} color={'#c91531'} solid/>{' Disminuye     '}
                        <Icon name={"circle"} size={10} color={'#59595b'} solid/>{' No aplica     '}
                    </Text>
                </View>
            )
            case '3': return (
                <View style={styles.container}>
                    <ScrollView horizontal={true}>
                        {switchTable3}
                    </ScrollView>
                    <Text style={styles.text}>
                        <Icon name={"circle"} size={10} color={'#007940'} solid/>{' Aumenta     '}
                        <Icon name={"circle"} size={10} color={'#c91531'} solid/>{' Disminuye     '}
                        <Icon name={"circle"} size={10} color={'#59595b'} solid/>{' No aplica     '}
                    </Text>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 10,},
    intitle:{textAlign:"center",fontFamily: "montserrat-700"},
    wrapper: { flexDirection: 'row' },
    title: { flex: 1,},
    text: { textAlign: 'center', fontFamily: "montserrat-500"},
    textwhite: { textAlign: 'center',color:"#fff",fontFamily: "montserrat-700"}
});



