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

import ImageCell from '../../components/imagecell/imagecell';

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

var CarGallery_Ui = {
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
                <OrionScrollView
                    ref={(scrollView) => { _scrollView = scrollView; }}
                    automaticallyAdjustContentInsets={false}
                    onScroll={() => {}}
                    scrollEventThrottle={200}
                    bounces={false}
                    style={styles.scrollView}>
                    <OrionAspectImage source={require('../../assets/copy.png')}/>
                    <ImageCell column={2} items={[
                      {source:require('./../../assets/17.png')},
                      {source:require('./../../assets/18.png')}
                    ]}/>
                    <OrionAspectImage source={require('../../assets/img1.png')}/>
                    <ImageCell column={2} items={[
                      {source:require('./../../assets/17.png')},
                      {source:require('./../../assets/18.png')}
                    ]}/>
                    <OrionAspectImage source={require('../../assets/copy.png')}/>
                    <ImageCell column={2} items={[
                      {source:require('./../../assets/17.png')},
                      {source:require('./../../assets/18.png')}
                    ]}/>
                </OrionScrollView>
            </OrionView>
        );
    }
};

module.exports = CarGallery_Ui;

