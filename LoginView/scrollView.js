/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';

var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;

class scrollViewDemo extends Component {
    render() {
        return (
            <ScrollView
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}

            >
                {this.renderChildview()}
            </ScrollView>
        )
    }

    renderChildview() {
        var allChild = [];
        var colors = ['red', 'orange', 'yellow', 'green', 'blue'];
        for (var i = 0; i < colors.length; i++) {
            var color = colors[i];
            allChild.push(
                <View key={i} style={{backgroundColor: color, width: width, height: 120}}>
                    <Text style={{textAlign:'center',position:'absolute',left: width*0.5, bottom:10}}>{(i+1)}</Text>
                </View>
            );
        }
        return allChild;
    }
}


module.exports = scrollViewDemo;
