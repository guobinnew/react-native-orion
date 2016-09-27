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
} from 'react-native-lark';

import Ui from './propertycell_ui';

export default class PropertyCell extends OrionComponent {

    static propTypes = {
        ...OrionComponent.propTypes,
        position: React.PropTypes.oneOf(['left','right']),
        title: OrionTextPropType,
        content: OrionTextPropType,
        background: OrionImagePropType,
    };

    static defaultProps = {
        ...OrionComponent.defaultProps,
        position: 'left',
        title: OrionText.defaultProps,
        content: OrionText.defaultProps,
        background: OrionImage.defaultProps,
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

        if( props.position === 'right'){
            var infoStyle = {...Ui.styles.info};
            infoStyle.right = 0;
            infoStyle.left = null;
            this.styles.info = {...infoStyle};
        }
    }

    render(){
        return Ui.render(this);
    }
}
