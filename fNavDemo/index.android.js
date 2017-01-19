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
} from 'react-native';

var navDemo = require('./index.js');
export default class fNavDemo extends Component {
    render() {
        return (
            <navDemo/>
        );
    }
}

AppRegistry.registerComponent('fNavDemo', () => navDemo);
