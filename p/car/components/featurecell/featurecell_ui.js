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
    OrionMaskImage,
} from 'react-native-lark';

const styles = {
    container: {
        width: Aspect.ratio(375),
        height: Aspect.ratio(448),
    },
    info:{
        width: Aspect.ratio(375),
        position: 'absolute',
        bottom: Aspect.ratio(74),
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        textAlign: 'center',
        fontSize: Aspect.ratio(24),
        color: '#ffffff',
        backgroundColor: 'transparent',
        marginTop: Aspect.ratio(38),
    },
    content:{
        textAlign: 'center',
        fontSize: Aspect.ratio(12),
        color: '#ffffff',
        lineHeight: Aspect.ratio(14),
        backgroundColor: 'transparent',
        marginTop: Aspect.ratio(16),
    },
    icon:{
        //width: Aspect.ratio(136),
        //height: Aspect.ratio(136),
    },
    photo:{
        width: Aspect.ratio(375),
        height: Aspect.ratio(448),
    },
};

var FeatureCell_Ui = {
    styles: styles,
    render: function (parent) {
        return (
            <OrionView style={parent.styles.container}>
                <OrionMaskImage {...parent.props.photo} style={parent.styles.photo} />
                <OrionView style={parent.styles.info}>
                    <OrionImage {...parent.props.icon} resizeMode={'contain'} style={parent.styles.icon} />
                    <OrionText{...parent.props.title} style={parent.styles.title}/>
                    <OrionText {...parent.props.content} style={parent.styles.content} />
                </OrionView>
            </OrionView>
        );
    }
};

module.exports = FeatureCell_Ui;

