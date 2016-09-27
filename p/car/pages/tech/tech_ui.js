/**
 *  Copyright (c) 2016-present, Unique, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 *
 */

import React, {Component} from 'react';
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
    OrionFrameView,
}from 'react-native-lark';

import FeatureCell from '../../components/featurecell/featurecell';
import TechCell from '../../components/techcell/techcell';
import PropertyCell from '../../components/propertycell/propertycell';
import PropertyList from '../../components/propertylist/propertylist';


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
    grid:{
        width: Aspect.ratio(375),
        height: Aspect.ratio(73),
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    }
});

var CarTech_Ui = {
    styles: styles,

    render: function (parent) {
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
                        photo={{source:require('./../../assets/c1.png')}}
                        icon={{source:require('./../../assets/design.png')}}
                        title={{l_text:"为性能而打造"}}
                        content={{l_text:'大胆的设计理念成就了DB11的标志性外观。\n领略惊艳的新式格栅、蚌壳式引擎盖\n以及创新的阿斯顿•马丁风刃™技术，\n该技术巧妙地利用气流来提高车身稳定性，\n从而不再需要安装后扰流板。'}}
                    />
                    <PropertyCell
                        background={{source:require('./../../assets/10.png')}}
                        title={{l_text:"强大且随性"}}
                        content={{l_text:'全新的底盘、悬挂、转向和电子系统可以充分发挥出DB11的内在力量与V12发动机的无限潜能。'}}
                    />
                    <PropertyList
                        column={3}
                        items={[
                            {name:{l_text:'5.2LV12'},value:{l_text:'48Twin-Turbo'}},
                            {name:{l_text:'3.9S'},value:{l_text:'0—62mph'}},
                            {name:{l_text:'200MPH'},value:{l_text:'TopSpeed'}},
                        ]}
                    />
                    <PropertyCell
                        position={'right'}
                        background={{source:require('./../../assets/11.png')}}
                        title={{l_text:"强大且随性"}}
                        content={{l_text:'全新的底盘、悬挂、转向和电子系统可以充分发挥出DB11的内在力量与V12发动机的无限潜能。'}}
                    />
                    <PropertyList
                        column={2}
                        items={[
                            {name:{l_text:'5.2LV12'},value:{l_text:'48Twin-Turbo'}},
                            {name:{l_text:'200MPH'},value:{l_text:'TopSpeed'}},
                        ]}
                    />
                    <TechCell
                        background={{source:require('./../../assets/12.png')}}
                        title={{l_text:"阿斯顿•马丁风刃技术 ™"}}
                        content={{l_text:'阿斯顿•马丁风刃™技术利用流过DB11侧翼的气流提高尾部的稳定性。C柱底部的镂空气流导管会把气流引入车体，然后从行李箱盖上的排气槽中排出，巧妙地避免了尾部“上翘”的需要。'}}
                        images={{
                        column:3,
                        items:[
                            {source:require('./../../assets/g2.png')},
                            {source:require('./../../assets/g3.png')},
                            {source:require('./../../assets/g2.png')},
                        ]
                        }}
                    />
                </OrionScrollView>
            </OrionView>
        );
    }
};

module.exports = CarTech_Ui;

