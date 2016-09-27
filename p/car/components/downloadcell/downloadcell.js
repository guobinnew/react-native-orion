/**
 * Created by unique on 16/7/25.
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
    OrionLineView,
    OrionLineViewPropType,
    OrionPushButton,
    OrionPushButtonPropType,
} from 'react-native-lark';

import Ui from './downloadcell_ui';

export default class DownloadCell extends OrionComponent {

    static propTypes = {
        ...OrionComponent.propTypes,
        title: OrionTextPropType,
        icon: OrionImagePropType,
        button: OrionPushButtonPropType,
    };

    static defaultProps = {
        ...OrionComponent.defaultProps,
        title: OrionText.defaultProps,
        icon: OrionImage.defaultProps,
        button: OrionPushButton.defaultProps,
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
