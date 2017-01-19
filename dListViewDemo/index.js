/**
 * Created by yueenen on 17/1/19 17:02.
 * 你不会的原因是想的太多，写得太少。
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity
} from 'react-native';

var Wine = require('./Wine.json');
var ListViewDemo = React.createClass({

    getInitialState(){

        // 设置数据源
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});

        // 设置返回数据
        return {
            dataSource: ds.cloneWithRows(Wine)
        }
    },
    render(){
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
            />
        );
    },
    renderRow(rowData, sectionID, rowID, highlightRow){
        //console.log(rowData, rowID);
        return (
            <TouchableOpacity activeOpacity={0.5}>
                <View style={styles.cellViewStyle}>
                    <Image source={{uri: rowData.image}} style={styles.leftImageStyle}/>
                    {/*<Image source={require('./img/1.jpg')} style={styles.leftImageStyle}/>*/}
                    <View style={styles.rightViewStyle}>
                        <Text style={styles.topTitleStyle}>{rowData.name}</Text>
                        <Text style={styles.bottomTitleStyle}>{rowData.money}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
});
const styles = StyleSheet.create({
    cellViewStyle: {
        padding:20,
        backgroundColor: '#eee',
        borderColor: '#ddd',
        borderBottomWidth: 1,
        flexDirection:'row'
    },
    leftImageStyle: {
        width:60,
        height:60,
        marginRight:20
    },
    rightViewStyle: {},
    topTitleStyle: {},
    bottomTitleStyle: {}
});

module.exports = ListViewDemo;