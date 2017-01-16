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
    TextInput
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
 * 引入内库: Dimensions 及其使用方式
 */
//var Dimensions = require('Dimensions');
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


/**
 * 第四个程序, Image 组件的使用
 */
class BmyProject4 extends Component {
    render() {
        return (
            <View style={styles4.container}>
                <Text>这是 BmyProject4</Text>


                <Text>从项目中加载图片</Text>
                <Image source={require('./img/icon.png')} style={styles4.ImageStyle}/>


                <Text>从网络中加载图片</Text>
                <Image source={{uri: 'https://www.baidu.com/img/bd_logo1.png'}} style={styles4.ImageStyle}/>


                <Text>用图片做背景</Text>
                <Image source={{uri: 'https://www.baidu.com/img/bd_logo1.png'}} style={styles4.ImageStyle}>
                    <Text style={{backgroundColor: 'transparent'}}>文字文字文字</Text>
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
        marginBottom: 20
    }
});


/**
 * 第五个程序, 从 json 中获取数据, 遍历数据, 展示出来
 */

// 导入数据
var badgeData = require('./badgeData.json');
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;

// 定义一些全局的变量
var cols = 3;
var boxWidth = 100;
var wrapMargin = (width - cols * boxWidth) / (cols + 1);
var statusHeight = 24;

class BmyProject5 extends Component {
    render() {
        return (
            <View style={styles5.container}>
                {/*返回6个包*/}
                {this.renderAllBadge()}
            </View>
        )
    }

    renderAllBadge() {
        var allBadge = [];
        for (var i = 0; i < badgeData.data.length; i++) {
            var badge = badgeData.data[i];
            allBadge.push(
                //数据不能区分这几个数据是否一样, 需要增加唯一标识, key = i
                <View key={i} style={styles5.wrapStyle}>
                    {/*图片需要设置尺寸才能出来*/}
                    <Image source={require('./img/danjianbao.png')} style={styles5.imageStyle}/>
                    {/*<Image source={{uri: badge.icon}} style={styles5.imageStyle} />*/}
                    <Text style={styles5.tilStyle}>{badge.title}</Text>
                    <Text>{width}</Text>
                </View>
            );
        }
        return allBadge;
    }
}
const styles5 = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        //justifyContent: 'space-around',
        //alignItems: 'center',
        //backgroundColor: 'yellow',
        marginTop: statusHeight
    },
    wrapStyle: {
        width: boxWidth,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f3f3f3',
        marginBottom: wrapMargin,
        marginLeft: wrapMargin
    },
    imageStyle: {
        width: 50,
        height: 50
    },
    tilStyle: {}
});

/**
 * 第 6 个应用程序, 组件 TextInput 的使用
 */
class BmyProject6 extends Component {
    render() {
        return (
            <View>
                <TextInput
                    style={styles6.inputStyle}
                    keyboardType={'number-pad'}
                    multiline={true}
                />
            </View>
        );
    }
}
const styles6 = StyleSheet.create({
    inputStyle: {
        width: width,
        height: 30,
        backgroundColor: 'yellow',
        marginTop: statusHeight
    },
});

AppRegistry.registerComponent('BmyProject', () => BmyProject5);//BmyProject是项目名称,不能修改,修改的只是类名
