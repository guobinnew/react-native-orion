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
} from 'react-native-lark';

const styles = {
    container: {
        alignItems:'stretch',
    },
    info:{
        width: Aspect.ratio(180),
        height: Aspect.ratio(172),
        position: 'absolute',
        left:0,
        top:0,
        justifyContent:'center',
        alignItems:'flex-start',
        padding: 20,
    },
    title:{
        textAlign: 'left',
        fontSize: Aspect.ratio(18),
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    content:{
        textAlign: 'left',
        fontSize: Aspect.ratio(12),
        color: '#ffffff',
        lineHeight: Aspect.ratio(14),
        backgroundColor: 'transparent',
        marginTop: Aspect.ratio(7),
        opacity: 0.7,
    },
    background:{
        width: Aspect.ratio(375),
        height: Aspect.ratio(172),
    },
};

var PropertyCell_Ui = {
    styles: styles,
    render: function (parent) {
        return (
            <OrionView style={parent.styles.container}>
                <OrionImage {...parent.props.background} style={parent.styles.background} />
                <OrionView style={parent.styles.info}>
                    <OrionText{...parent.props.title} style={parent.styles.title}/>
                    <OrionText {...parent.props.content} style={parent.styles.content} />
                </OrionView>
            </OrionView>
        );
    }
};

module.exports = PropertyCell_Ui;

