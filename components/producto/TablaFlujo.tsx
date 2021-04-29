import React, {Component} from "react";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import {Table, TableWrapper, Cell, Row} from "react-native-table-component";
import Icon from 'react-native-vector-icons/FontAwesome5';
import CellData from "./CellData";

export default class TablaFlujo extends Component<any, any> {

    render() {
        const flow = this.props.data;
        const importacionesColor = '#caa882';
        const exportacionesColor = '#46776d';
        const saldoColor = '#9e9e9d';
        const indicadoresHead= ['','Importaciones','Exportaciones','Saldo','Importaciones','Exportaciones'];
        const tableCol = ['Volumen',flow.volumenunidad,'Valor',flow.produccionunidad];
        const volumenRow = [flow.volumenimportaciones,flow.volumenexportaciones,flow.volumensaldo];
        const valorRow = [flow.valorimportaciones,flow.valorexportaciones,flow.valorsaldo];
        const importVal = [flow.varvolumenimportaciones,flow.varvalorimportaciones];
        const exportVal = [flow.varvolumenexportaciones,flow.varvalorexportaciones];
        const widthArr=[130,130,130,130,130,130];
        const subWidthArr= widthArr.slice(1,5);
        const tableHeight=30;
        const dataHeight=50;
        return(
            <View style={styles.container}>
                <View style={styles.container}>
                    <Text style={styles.text}>Variación (%) 2018-2019</Text>
                </View>
                <ScrollView horizontal={true}>
                    <Table>
                        <TableWrapper style={styles.wrapper}>
                            <Cell data={indicadoresHead[0]} width={widthArr[0]} height={tableHeight} style={{backgroundColor:'white'}} textStyle={styles.textwhite}/>
                            <Cell data={indicadoresHead[1]} width={widthArr[1]} height={tableHeight} style={{backgroundColor:importacionesColor}} textStyle={styles.textwhite}/>
                            <Cell data={indicadoresHead[2]} width={widthArr[2]} height={tableHeight} style={{backgroundColor:exportacionesColor}} textStyle={styles.textwhite}/>
                            <Cell data={indicadoresHead[3]} width={widthArr[3]} height={tableHeight} style={{backgroundColor:saldoColor}} textStyle={styles.textwhite}/>
                            <Cell data={indicadoresHead[4]} width={widthArr[4]} height={tableHeight} style={{backgroundColor:importacionesColor}} textStyle={styles.textwhite}/>
                            <Cell data={indicadoresHead[5]} width={widthArr[5]} height={tableHeight} style={{backgroundColor:exportacionesColor}} textStyle={styles.textwhite}/>
                        </TableWrapper>
                        <TableWrapper style={styles.wrapper}>
                            <TableWrapper>
                                <Cell data={tableCol[0]} width={widthArr[0]} height={dataHeight/2} textStyle={styles.intitle} />
                                <Cell data={tableCol[1]} width={widthArr[0]}  textStyle={styles.text}/>
                                <Cell data={tableCol[2]} width={widthArr[0]} height={dataHeight/2} textStyle={styles.intitle}/>
                                <Cell data={tableCol[3]} width={widthArr[0]}  textStyle={styles.text}/>
                            </TableWrapper>
                            <TableWrapper>
                                <Row data={volumenRow} widthArr={subWidthArr.slice(0,3)} height={dataHeight} textStyle={styles.text}/>
                                <Row data={valorRow} widthArr={subWidthArr.slice(0,3)} height={dataHeight} textStyle={styles.text}/>
                            </TableWrapper>
                            <TableWrapper>
                                <CellData data={importVal} width={subWidthArr[0]} height={dataHeight} />
                            </TableWrapper>
                            <TableWrapper>
                                <CellData data={exportVal} width={subWidthArr[0]} height={dataHeight} />
                            </TableWrapper>
                        </TableWrapper>
                    </Table>
                </ScrollView>
                <View style={styles.container}>
                    <Text style={styles.text}>
                    <Icon name={"circle"} size={10} color={'#007940'} solid/>{' Aumenta     '}
                    <Icon name={"circle"} size={10} color={'#c91531'} solid/>{' Disminuye     '}
                    <Icon name={"circle"} size={10} color={'#59595b'} solid/>{' No aplica     '}
                    </Text>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 10,},
    head: {  height: 40, },
    inhead: {  height: 40,},
    intitle:{textAlign:"center",fontFamily: "montserrat-700"},
    wrapper: { flexDirection: 'row' },
    title: { flex: 1,},
    text: { textAlign: 'center', fontFamily: "montserrat-500"},
    textThin: { textAlign: 'center', fontFamily: "montserrat-500",},
    row: {  height: 30  },
    textwhite: { textAlign: 'center',color:"#fff",fontFamily: "montserrat-700"}
});