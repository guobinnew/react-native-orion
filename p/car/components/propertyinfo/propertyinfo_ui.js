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
        flex:1,
        backgroundColor: "#000000",
        justifyContent: 'center',
        alignItems: 'center',
    },
    name:{
        textAlign: 'center',
        fontSize: Aspect.ratio(18),
        color: '#ffffff',
        lineHeight: Aspect.ratio(21),
        backgroundColor: 'transparent',
    },
    value:{
        textAlign: 'center',
        fontSize: Aspect.ratio(12),
        color: '#ffffff',
        lineHeight: Aspect.ratio(15),
        backgroundColor: 'transparent',
        marginTop: Aspect.ratio(5),
    },
};

var PropertyInfo_Ui = {
    styles: styles,
    render: function (parent) {
        return (
            <OrionView style={parent.styles.container}>
                <OrionText{...parent.props.name} style={parent.styles.name} numberOfLines={1}/>
                <OrionText {...parent.props.value} style={parent.styles.value} numberOfLines={1}/>
            </OrionView>
        );
    }
};

module.exports = PropertyInfo_Ui;

