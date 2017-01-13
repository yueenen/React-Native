/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry, // 注册
    StyleSheet, // 样式
    Text, // 文本组件
    View, // 视图组件
    Image,
    TextInput

} from 'react-native'; //从 react-native 中导入需要用到的组件

export default class AHelloWorld extends Component {
    // 初始化方法 --> 返回具体的组件内容
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    嘿嘿嘿, ~ JSX - iOS
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.ios.js
                </Text>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload,{'\n'}
                    Cmd+D or shake for dev menu
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('AHelloWorld', () => AHelloWorld);
