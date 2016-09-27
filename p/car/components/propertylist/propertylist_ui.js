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
    OrionGridView,
    OrionFrameView,
} from 'react-native-lark';

import PropertyInfo from '../propertyinfo/propertyinfo';

const styles = {
    container: {
        width: Aspect.ratio(375),
        height: Aspect.ratio(73),
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    item:{
        flex:1,
    },

};

var PropertyList_Ui = {
    styles: styles,
    render: function (parent) {

        let{ column, items, ...props} = parent.props;

        var children=[];
        var count = Math.min(column, items.length);
        for(var i=0; i<count; i++){
            children.push(<PropertyInfo {...items[i]}
                style={[parent.styles.item]}
                key={"item"+i}/>)
        }
        
        return (
            <OrionFrameView l_top={0} l_bottom={0} l_color={"#cccccc"}>
                <OrionGridView {...props} l_column={column} style={parent.styles.container}>
                {children}
                </OrionGridView>
            </OrionFrameView>
        );
    }
};

module.exports = PropertyList_Ui;

