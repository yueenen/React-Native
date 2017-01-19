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

// ES6 写法
// class scrollViewDemo extends Component {
//     render() {
//         return (
//             <ScrollView
//                 horizontal={true}
//                 pagingEnabled={true}
//                 showsHorizontalScrollIndicator={false}
//
//             >
//                 {this.renderChildview()}
//             </ScrollView>
//         )
//     }
//
//     renderChildview() {
//         var allChild = [];
//         var colors = ['red', 'orange', 'yellow', 'green', 'blue'];
//         for (var i = 0; i < colors.length; i++) {
//             var color = colors[i];
//             allChild.push(
//                 <View key={i} style={{backgroundColor: color, width: width, height: 120}}>
//                     <Text style={{textAlign:'center',position:'absolute',left: width*0.5, bottom:10}}>{(i+1)}</Text>
//                 </View>
//             );
//         }
//         return allChild;
//     }
// }


// ES5 写法
var TimerMixin = require('react-timer-mixin');
var ImageData = require('./ImageData.json');

var scrollViewDemo1 = React.createClass({

    // 注册计时器类库
    mixins: [TimerMixin],

    // 设置固定值
    getDefaultProps(){
        return {
            duration: 1000
        }
    },

    // 设置可变的初始值
    getInitialState(){
        return {
            //当前的页面
            currentPage: 0
        }
    },

    render(){
        return (
            <View style={styles1.container}>
                <ScrollView
                    ref="scrollView"
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={(e)=>this.onAnimationEnd(e)}
                    onScrollBeginDrag={this.onScrollBeginDrag}
                    onScrollEndDrag={this.onScrollEndDrag}
                >
                    {this.renderAllImage()}
                </ScrollView>
                <View style={styles1.pageViewStyle}>
                    {this.renderPageCircle()}
                </View>
            </View>
        );
    },

    // 停止调用拖拽
    onScrollBeginDrag(){
        this.clearInterval(this.timer);
    },

    onScrollEndDrag(){
        this.startTimer();
    },

    // 实现一些复杂操作或者请求网络数据
    componentDidMount(){
        //开启定时器
        this.startTimer();
    },

    // 设置独立定时器, 可以重复被调用
    startTimer(){
        // 1. 通过 ref 拿到 scrollView
        var scrollView = this.refs.scrollView;
        var imgCount = ImageData.data.length;

        // 2. 添加定时器
        this.timer = this.setInterval(function () {
            //console.log('aaa');
            // 2.1 设置圆点
            var activePage = 0;
            // 2.2 判断
            if ((this.state.currentPage + 1) >= imgCount) {
                activePage = 0;
            } else {
                activePage = this.state.currentPage + 1;
            }
            // 2.3 更新状态机
            this.setState({
                currentPage: activePage
            });

            // 2.4 设置 scrollView 滚动
            var offsetX = activePage * width;
            scrollView.scrollResponderScrollTo({x: offsetX, y: 0, animated: true});

        }, this.props.duration);
    },

    renderAllImage(){
        var allImage = [];
        var imgArr = ImageData.data;
        for (var i = 0; i < imgArr.length; i++) {
            var imgItem = imgArr[i];
            allImage.push(
                //<Image key={i} source={{uri: imgItem.img}} style={{width: width, height: 100}}/>
                <Image key={i} source={require('./img/img_02.png')} style={{width: width, height: 120}}/>
                //<Text key={i}>{imgItem.title}</Text>
            )
        }
        return allImage;
    },

    // 返回圆点
    renderPageCircle(){
        var indicatorArr = [];
        var imgArr = ImageData.data;
        var styleCircle;
        for (var i = 0; i < imgArr.length; i++) {
            styleCircle = (i == this.state.currentPage) ? {color: 'orange'} : {color: 'white'};
            indicatorArr.push(
                <Text key={i} style={[{fontSize: 25, color: 'white', marginLeft: 5}, styleCircle]}>
                    &bull;
                </Text>
            );
        }
        return indicatorArr;
    },

    onAnimationEnd (e){

        // 1. 求出水平方向的偏移量
        var offsetX = e.nativeEvent.contentOffset.x;

        // 2. 根据偏移量求出当前的页数
        var currentPage = Math.floor(offsetX / width);
        console.log(currentPage);

        // 3. 更新状态机,重新绘制 UI
        this.setState({
            currentPage: currentPage
        });

    }


});

const styles1 = StyleSheet.create({
    container: {
        marginTop: 22
    },
    pageViewStyle: {
        width: width,
        height: 30,
        backgroundColor: 'rgba(0, 0, 0, .5)',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center'
    }
});


module.exports = scrollViewDemo1;
