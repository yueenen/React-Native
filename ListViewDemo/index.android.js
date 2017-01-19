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
    View
} from 'react-native';


var listViewDemoIndex = require('./listViewDemoIndex.js');
export default class ListViewDemo extends Component {
  render() {
    return(
        <View>
          <listViewDemoIndex/>
        </View>
    )
  }
};

AppRegistry.registerComponent('ListViewDemo', () => listViewDemoIndex);
