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
} from 'react-native-lark';

const styles = {
    container: {
        width: Aspect.ratio(375),
        height: Aspect.ratio(120),
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    image:{
        flex:1,
    },

};

var ImageCell_Ui = {
    styles: styles,
    render: function (parent) {

        let{ column, items, ...props} = parent.props;

        var imgWidth = styles.container.width / column;
        var children=[];
        var count = Math.min(column, items.length);
        for(var i=0; i<count; i++){
            children.push(<OrionImage {...items[i]}
                style={[parent.styles.image,{width:imgWidth}]}
                resizeMode={'cover'}
                key={"img"+i}/>)
        }

        return (
            <OrionGridView {...props} l_column={column} style={parent.styles.container} l_rowContainerStyle={parent.styles.row}>
                {children}
            </OrionGridView>
        );
    }
};

module.exports = ImageCell_Ui;

