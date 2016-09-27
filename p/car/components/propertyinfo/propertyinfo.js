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
    OrionView,
    OrionViewPropType,
    OrionText,
    OrionTextPropType,
} from 'react-native-lark';

import Ui from './propertyinfo_ui';

export default class PropertyInfo extends OrionComponent {

    static propTypes = {
        ...OrionComponent.propTypes,
        name: OrionTextPropType,
        value: OrionTextPropType,
    };

    static defaultProps = {
        ...OrionComponent.defaultProps,
        name: OrionText.defaultProps,
        value: OrionText.defaultProps,
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
