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
} from 'react-native-lark';

import Ui from './propertylist_ui';

import PropertyInfo from '../propertyinfo/propertyinfo';
import PropertyInfoPropType from '../propertyinfo/propertyinfoPropType';

export default class PropertyList extends OrionComponent {

    static propTypes = {
        ...OrionComponent.propTypes,
        column: React.PropTypes.number,
        items: React.PropTypes.arrayOf(PropertyInfoPropType),
    };

    static defaultProps = {
        ...OrionComponent.defaultProps,
        column: 2,
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
