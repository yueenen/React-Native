/**
 * Created by yueenen on 17/1/19 21:01.
 * 你不会的原因是想的太多，写得太少。
 */
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
    TabBarIOS
} from 'react-native';

var fNavDemo = React.createClass({
    getInitialState(){
        return {
            selectedTabBarItem: 'home'
        }
    },
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.tit}>
                    <Text style={{textAlign: 'center', lineHeight: 40, fontSize: 24, color: '#ffffff'}}>
                        Tab 选项卡的切换
                    </Text>
                </View>

                <TabBarIOS barTintColor={'#fff '}>

                    {/*第一页*/}
                    <TabBarIOS.Item
                        systemIcon="contacts"
                        badge="3"
                        selected={this.state.selectedTabBarItem == 'home'}
                        onPress={()=> {
                            this.setState({selectedTabBarItem: 'home'})
                        }}
                    >
                        <View style={styles.innerWrap}>
                            <Text style={styles.innerWrapText}>首页</Text>
                        </View>
                    </TabBarIOS.Item>

                    {/*第二页*/}
                    <TabBarIOS.Item
                        systemIcon="bookmarks"
                        selected={this.state.selectedTabBarItem == 'bookmarks'}
                        onPress={()=> {
                            this.setState({selectedTabBarItem: 'bookmarks'})
                        }}
                    >
                        <View style={styles.innerWrap}>
                            <Text style={styles.innerWrapText}>第二页</Text>
                        </View>
                    </TabBarIOS.Item>

                    {/*第三页*/}
                    <TabBarIOS.Item
                        systemIcon="downloads"
                        selected={this.state.selectedTabBarItem == 'downloads'}
                        onPress={()=> {
                            this.setState({selectedTabBarItem: 'downloads'})
                        }}
                    >
                        <View style={styles.innerWrap}>
                            <Text style={styles.innerWrapText}>第三页</Text>
                        </View>
                    </TabBarIOS.Item>

                    {/*第四页*/}
                    <TabBarIOS.Item
                        systemIcon="search"
                        selected={this.state.selectedTabBarItem == 'search'}
                        onPress={()=> {
                            this.setState({selectedTabBarItem: 'search'})
                        }}
                    >
                        <View style={styles.innerWrap}>
                            <Text style={styles.innerWrapText}>第四页</Text>
                        </View></TabBarIOS.Item>

                </TabBarIOS>
            </View>

        )
    }
});

const styles = StyleSheet.create({
    tit: {
        paddingTop:22,
        height: 40,
        backgroundColor: 'deepskyblue',
    },
    container: {
        //marginTop: 22,
        flex: 1,
        backgroundColor: '#fff'
    },
    innerWrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerWrapText:{
        fontSize: 30
    }
});
module.exports = fNavDemo;