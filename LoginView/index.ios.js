/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var loginView = require('./loginView');

export default class LoginView extends Component {
  render() {
    return (
      <loginView />
    );
  }
}

AppRegistry.registerComponent('LoginView', () => loginView);
