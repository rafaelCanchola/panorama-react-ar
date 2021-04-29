import React, {Component} from 'react';
import {Cell, TableWrapper} from 'react-native-table-component';
import {StyleSheet} from "react-native";
export default class CellData extends Component<any, any>{
    render(){
        return (
            <TableWrapper style={{flexDirection:"column"}}>
                <Cell data={this.props.data[0]} width={this.props.width} height={this.props.height} textStyle={[styles.text,this.props.data[0] === 'NA' ? {color:"#59595b"} : (this.props.data[0] > 0 ? {color:"#007940"}:{color:"#c91531"})]} ></Cell>
                <Cell data={this.props.data[1]} width={this.props.width} height={this.props.height} textStyle={[styles.text,this.props.data[1] === 'NA' ? {color:"#59595b"} : (this.props.data[1] > 0 ? {color:"#007940"}:{color:"#c91531"})]} ></Cell>
            </TableWrapper>
        )
    }
}

const styles = StyleSheet.create({
    text: {textAlign: 'center', fontFamily: "montserrat-500"},
});
