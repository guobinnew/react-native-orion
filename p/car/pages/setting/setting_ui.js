/**
 *  Copyright (c) 2016-present, Unique, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 *
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    ScrollView,
} from 'react-native';

import {
    Aspect,
    OrionView,
    OrionImage,
    OrionAspectImage,
    OrionScrollView,
    OrionTitleBar,
    OrionGridView,
    OrionLineView,
}from 'react-native-lark';

import  SettingCell from '../../components/settingcell/settingcell';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: '#FFFFFF',
    },
    scrollView: {
        backgroundColor: '#FFFFFF',
    },
});

var CarSetting_Ui = {
    styles: styles,

    render: function(parent) {
        var _scrollView;
        return (
            <OrionView style={[styles.container,{height:parent.props.height}]}>
                <OrionTitleBar
                    l_title={"ASTON MARTIN"}
                    l_barTintColor={'#141414'}
                    l_tintColor={'#ffffff'}
                />
                <SettingCell
                    photo={{source:require('./../../assets/25.png')}}
                    title={{l_text:"打造属于您自己的杰作"}}
                    button={{
                            l_text:"立即配置",
                            //onPress:()=>{console.warn('press me')},
                            }}
                />
            </OrionView>
        );
    }
};

module.exports = CarSetting_Ui;

