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
} from 'react-native';

import {
    Aspect,
    OrionView,
    OrionText,
    OrionImage,
    OrionPushButton,
} from 'react-native-lark';

const styles = {
    container: {
        flex:1,
        width: Aspect.ratio(375),
    },
    info:{
        width: Aspect.ratio(375),
        position: 'absolute',
        top: Aspect.ratio(52),
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        textAlign: 'center',
        fontSize: Aspect.ratio(18),
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    photo:{
        width: Aspect.ratio(375),
        height: Aspect.ratio(558),
    },
    button:{
        width: Aspect.ratio(78),
        borderColor: "#ffffff",
        color:  "#ffffff",
        fontSize: Aspect.ratio(12),
        backgroundColor: 'transparent',
        marginTop: Aspect.ratio(22),
        borderRadius: Aspect.ratio(12),
    },
};

var SettingCell_Ui = {
    styles: styles,
    render: function (parent) {
        return (
            <OrionView style={parent.styles.container}>
                <OrionImage {...parent.props.photo} style={parent.styles.photo} />
                <OrionView style={parent.styles.info}>
                    <OrionText{...parent.props.title} style={parent.styles.title}/>
                    <OrionPushButton {...parent.props.button} l_height={Aspect.ratio(24)} style={parent.styles.button}/>
                </OrionView>
            </OrionView>
        );
    }
};

module.exports = SettingCell_Ui;

