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

export default class BmyProject extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.statusBar}></View>
                <Text>
                    You Are A Handsome Pig.
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection : 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',

    },
    statusBar: {
        flex:1,
        height: 100,
        width: 200,
        backgroundColor:'yellow'
    }
});

AppRegistry.registerComponent('BmyProject', () => BmyProject);