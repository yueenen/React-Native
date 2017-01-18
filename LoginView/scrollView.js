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
            <ScrollView>
                {this.renderChildview()}
                <Image source={require('./img/img_01.png')}></Image>
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
                    <Text>{i}</Text>
                </View>
            );
        }
    }
}


module.exports = scrollViewDemo;
