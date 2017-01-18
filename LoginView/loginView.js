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
    TouchableOpacity
} from 'react-native';

var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;

class loginView extends Component {
    render() {
        return (
            <View style={styles.container}>


                {/*头像*/}
                <Image source={require('./img/icon.png')} style={styles.avatarStyle}/>


                {/*账号和密码*/}
                <TextInput placeholder={'请输入用户名'} style={styles.TextInputStyle}/>
                <TextInput placeholder={'请输入密码'} style={styles.TextInputStyle} password={true}/>


                {/*登录*/}
                <TouchableOpacity activeOpacity={0.5}>
                    <View style={styles.loginBtnStyle}>
                        <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>登录</Text>
                    </View>
                </TouchableOpacity>
                {/*<View>*/}
                    {/*<Text>{this.state.title}</Text>*/}
                {/*</View>*/}


                {/*设置*/}
                <View style={styles.settingStyle}>
                    <Text>无法登录</Text>
                    <Text>新用户</Text>
                </View>


                {/*其它的登录方式*/}
                <View style={styles.otherLoginStyle}>
                    <Text>其它登录方式</Text>
                    <Image source={require('./img/icon3.png')} style={styles.otherLoginImageStyle}/>
                    <Image source={require('./img/icon7.png')} style={styles.otherLoginImageStyle}/>
                    <Image source={require('./img/icon8.png')} style={styles.otherLoginImageStyle}/>
                </View>
            </View>
        );
    }
    // renderPress(){
    //      alert('登录成功');
    // }
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: '#eee',
            paddingTop: 24,
        },
        avatarStyle: {
            width: 80,
            height: 80,
            borderRadius: 40,
            borderWidth: 2,
            borderColor: '#ffffff',
            marginTop: 50,
            marginBottom: 30
        },
        TextInputStyle: {
            width: width,
            height: 38,
            backgroundColor: 'white',
            marginBottom: 1,
            textAlign: 'center',
        },
        loginBtnStyle: {
            width: width * 0.9,
            height: 40,
            backgroundColor: 'deepskyblue',
            borderRadius: 4,
            marginTop: 30,
            justifyContent: 'center',
            alignItems: 'center',
        },
        settingStyle: {
            width: width * 0.9,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20
        },
        otherLoginStyle: {
            flexDirection: 'row',
            alignItems: 'center',
            position: 'absolute',
            bottom: 10,
            left: width * 0.05
        },
        otherLoginImageStyle: {
            width: 50,
            height: 50,
            borderRadius: 25,
            marginLeft: 10
        }
    })
    ;
module.exports = loginView;
