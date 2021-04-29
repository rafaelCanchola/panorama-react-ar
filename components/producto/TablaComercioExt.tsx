import React, {Component} from "react";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import {Table, TableWrapper, Cell, Row} from "react-native-table-component";

export default class TablaComercioExt extends Component<any, any> {

    render() {
        const comercio = this.props.data;
        const importacionesColor = '#caa882';
        const exportacionesColor = '#46776d';
        const indicadoresHead= ['','Ene' , 'Feb' , 'Mar' , 'Abr' , 'May' , 'Jun' , 'Jul' , 'Ago' , 'Sep' , 'Oct' , 'Nov' , 'Dic' ];
        const tableCol = ['Importaciones','Exportaciones'];
        const importVal = [comercio[2].enero,comercio[2].febrero,comercio[2].marzo,comercio[2].abril,comercio[2].mayo,comercio[2].junio,comercio[2].julio,comercio[2].agosto,comercio[2].septiembre,comercio[2].octubre,comercio[2].noviembre,comercio[2].diciembre];
        const exportVal = [comercio[1].enero,comercio[1].febrero,comercio[1].marzo,comercio[1].abril,comercio[1].mayo,comercio[1].junio,comercio[1].julio,comercio[1].agosto,comercio[1].septiembre,comercio[1].octubre,comercio[1].noviembre,comercio[1].diciembre];
        const widthArr=[130,70,70,70,70,70,70,70,70,70,70,70,70];
        const subWidthArr= widthArr.slice(1,5);
        const tableHeight=30;

        return(
            <View style={styles.container}>
                <ScrollView horizontal={true}>
                    <Table>
                        <Row data={indicadoresHead} widthArr={widthArr} height={tableHeight} textStyle={styles.intitle}/>
                        <TableWrapper style={styles.wrapper}>
                            <TableWrapper >
                                <Cell data={tableCol[0]} width={widthArr[0]} height={tableHeight} style={{backgroundColor:importacionesColor}} textStyle={styles.textwhite}/>
                                <Cell data={tableCol[1]} width={widthArr[0]} height={tableHeight} style={{backgroundColor:exportacionesColor}} textStyle={styles.textwhite}/>
                            </TableWrapper>
                            <TableWrapper >
                                <Row data={importVal} widthArr={widthArr.slice(1,13)} height={tableHeight} textStyle={styles.text}/>
                                <Row data={exportVal} widthArr={widthArr.slice(1,13)} height={tableHeight} textStyle={styles.text}/>
                            </TableWrapper>
                        </TableWrapper>

                    </Table>
                </ScrollView>
            </View>
        )
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
    row: {  height: 30  },
    textwhite: { textAlign: 'center',color:"#fff",fontFamily: "montserrat-700"}
});