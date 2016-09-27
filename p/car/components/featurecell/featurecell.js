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
    OrionComponent,
    OrionText,
    OrionTextPropType,
    OrionImage,
    OrionImagePropType,
    OrionMaskImage,
    OrionMaskImagePropType,
} from 'react-native-lark';

import Ui from './featurecell_ui';

export default class FeatureCell extends OrionComponent {

    static propTypes = {
        ...OrionComponent.propTypes,
        border: React.PropTypes.shape({
            visible: React.PropTypes.bool,
            width:  React.PropTypes.number,
            
        }),
        title: OrionTextPropType,
        content: OrionTextPropType,
        photo: OrionMaskImagePropType,
        icon: OrionImagePropType,
    };

    static defaultProps = {
        ...OrionComponent.defaultProps,
        title: OrionText.defaultProps,
        content: OrionText.defaultProps,
        photo: OrionMaskImage.defaultProps,
        icon: OrionImage.defaultProps,
    };

    constructor(props){
        super(props);
   
        // 修改基础样式,示例:
        //  this.styles = {
        //      ...Ui.styles,
        //      text:{ color : '#FFFFFF' }
        //  };
        //
        this.styles = {
            ...Ui.styles,
        };
    }

    render(){
        return Ui.render(this);
    }
}
