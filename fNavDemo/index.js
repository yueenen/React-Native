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
    render() {
        return (
            <View style={styles.container}>

                <View>
                    <Text>
                        Tab 选项卡的切换
                    </Text>
                </View>

                <TabBarIOS>

                    <TabBarIOS.Item ststemIcon="contacts"></TabBarIOS.Item>
                </TabBarIOS>
            </View>

        )
    }
});

const styles = StyleSheet.create({
    container:{

    }
});
module.exports = fNavDemo;