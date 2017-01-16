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
    Image
} from 'react-native';

export default class BmyProject extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}
                    Shake or press menu button for dev menu
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

class BmyProject1 extends Component {
    render() {
        return (
            <View style={styles1.container}>
                {/*<Text>你好,世界</Text>*/}
                <View>
                    <Text style={{backgroundColor: '#CC9966'}}>text 1</Text>
                    <Text style={{backgroundColor: '#CCCC66'}}>text 2</Text>
                    <Text style={{backgroundColor: '#669999'}}>text 3</Text>
                    <Text style={{backgroundColor: '#FF9966'}}>text 4</Text>
                </View>
            </View>
        );
    }
}
const styles1 = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row', // 默认值为column
        backgroundColor: '#333',
        marginTop: 24,
        flexWrap: 'wrap',
        justifyContent: 'space-around', // 不会影响内部元素的宽高
        //alignItems:'flex-end'
    },
    View1: {
        backgroundColor: 'yellow',
        width: 100,
        height: 50
    },
    View2: {
        backgroundColor: '#339999',
        width: 100,
        height: 80
    },
    View3: {
        backgroundColor: '#CCFFFF',
        width: 100,
        height: 100
    },
    View4: {
        backgroundColor: '#FF9933',
        width: 100,
        height: 50
    },
    View5: {
        backgroundColor: '#CC99CC',
        width: 100,
        height: 160
    },

});

class BmyProject2 extends Component {
    render() {
        return (
            <View style={styles2.container}>
                {/*<Text>你好,世界</Text>*/}
                <View style={styles2.View1}>
                    <Text>
                        View 1
                    </Text>
                </View>
                <View style={styles2.View2}>
                    <Text>
                        View 2
                    </Text>
                </View>
                <View style={styles2.View3}>
                    <Text>
                        View 3
                    </Text>
                </View>
                <View style={styles2.View4}>
                    <Text>
                        View 4
                    </Text>
                </View>
                <View style={styles2.View5}>
                    <Text>
                        View 5
                    </Text>
                </View>
            </View>
        );
    }
}
const styles2 = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row', // 默认值为column
        backgroundColor: '#333',
        marginTop: 24,
        flexWrap: 'wrap',
        justifyContent: 'space-around', // 不会影响内部元素的宽高
        alignItems: 'center'
    },
    View1: {
        backgroundColor: 'yellow',
        width: 100,
        height: 50
    },
    View2: {
        backgroundColor: '#339999',
        width: 100,
        height: 80
    },
    View3: {
        backgroundColor: '#CCFFFF',
        width: 100,
        height: 100
    },
    View4: {
        backgroundColor: '#FF9933',
        width: 100,
        height: 50
    },
    View5: {
        backgroundColor: '#CC99CC',
        width: 100,
        height: 160
    },

});

/**
 * 引入内库: Dimensions
 */

var Dimensions = require('Dimensions');
class BmyProject3 extends Component {
    render() {
        return (
            <View style={styles3.container}>
                <Text>这是 BmyProject3</Text>
                <Text>当前屏幕的宽度:{Dimensions.get('window').width}</Text>
                <Text>当前屏幕的高度:{Dimensions.get('window').height}</Text>
                <Text>当前屏幕的分辨率:{Dimensions.get('window').scale}</Text>
            </View>
        )
    }
}
const styles3 = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', // 设置主轴方向对齐方式
        alignItems: 'center', // 设置横轴方向对齐方式
        backgroundColor: 'pink',
    }
});

class BmyProject4 extends Component {
    render() {
        return (
            <View style={styles4.container}>
                <Text>这是 BmyProject5</Text>


                <Text>从项目中加载图片</Text>
                <Image source={require('./img/icon.png')} style={styles4.ImageStyle} />


                <Text>从网络中加载图片</Text>
                <Image source={{uri: 'https://www.baidu.com/img/bd_logo1.png'}} style={styles4.ImageStyle}>
                    <Text>文字文字文字</Text>
                </Image>

            </View>
        )
    }
}
const styles4 = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', // 设置主轴方向对齐方式
        alignItems: 'center', // 设置横轴方向对齐方式
        backgroundColor: 'pink',
    },
    ImageStyle: {
        width: 100,
        height: 100,
        // resizeMode: Image.resizeMode.cover
        resizeMode: 'cover',
        marginBottom:20
    }
});

AppRegistry.registerComponent('BmyProject', () => BmyProject4);//BmyProject是项目名称,不能修改,修改的只是类名
