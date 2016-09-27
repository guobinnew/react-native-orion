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

import FeatureCell from '../../components/featurecell/featurecell';
import ImageCell from '../../components/imagecell/imagecell';
import DownloadCell from '../../components/downloadcell/downloadcell';

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

var CarHome_Ui = {
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
                    <FeatureCell
                        photo={{
                            source:require('./../../assets/c1.png'),
                            l_maskColor:'#000000',
                            l_maskOpacity:0.2,
                        }}
                        icon={{source:require('./../../assets/aston-martin-logo-white.png')}}
                        title={{l_text:"大胆的外在风尚"}}
                        content={{l_text:'大胆的设计理念成就了DB11的标志性外观。\n领略惊艳的新式格栅、蚌壳式引擎盖\n以及创新的阿斯顿•马丁风刃™技术，\n该技术巧妙地利用气流来提高车身稳定性，\n从而不再需要安装后扰流板。'}}
                    />
                    <ImageCell column={2} items={[
                      {source:require('./../../assets/g2.png')},
                      {source:require('./../../assets/g3.png')}
                    ]}/>
                    <FeatureCell
                        photo={{source:require('./../../assets/c4.png')}}
                        icon={{source:require('./../../assets/design.png')}}
                        title={{l_text:"敏捷与力量"}}
                        content={{l_text:'大胆的设计理念成就了DB11的标志性外观。\n领略惊艳的新式格栅、蚌壳式引擎盖\n以及创新的阿斯顿•马丁风刃™技术，\n该技术巧妙地利用气流来提高车身稳定性，\n从而不再需要安装后扰流板。'}}
                    />
                    <ImageCell column={2} items={[
                      {source:require('./../../assets/g2.png')},
                      {source:require('./../../assets/g3.png')}
                    ]}/>
                    <DownloadCell
                        icon={{source:require('./../../assets/brochure-landscape.png')}}
                        title={{l_text:"2017年DB11宣传册"}}
                        button={{
                           l_text:"下载"
                        }}
                        />
                </OrionScrollView>
            </OrionView>
        );
    }
};

module.exports = CarHome_Ui;

