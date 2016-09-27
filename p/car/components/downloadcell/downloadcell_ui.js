/**
 * Created by unique on 16/7/25.
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
    OrionPushButton,
} from 'react-native-lark';

const styles = {
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 10,
        height: Aspect.ratio(101),
    },
    info:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 37,
    },
    title:{
        fontSize: Aspect.ratio(14),
        color: '#727272',
        lineHeight: Aspect.ratio(17),
    },
    icon:{
        width: Aspect.ratio(152),
        height: Aspect.ratio(56),
    },
    button:{
        width: Aspect.ratio(60),
        borderColor: "#727272",
        color:  "#727272",
        fontSize: Aspect.ratio(12),
        borderRadius: Aspect.ratio(12),
        marginTop: Aspect.ratio(6),
    }
};

var DownloadCell_Ui = {
    styles: styles,
    render: function (parent) {
        return (
            <OrionView style={parent.styles.container}>
                <OrionImage {...parent.props.icon} style={parent.styles.icon} />
                <OrionView style={styles.info}>
                    <OrionText {...parent.props.title} style={parent.styles.title} numberOfLines={1}/>
                    <OrionPushButton {...parent.props.button} l_height={Aspect.ratio(24)} style={parent.styles.button}/>
                </OrionView>
            </OrionView>
        );
    }
};

module.exports = DownloadCell_Ui;

