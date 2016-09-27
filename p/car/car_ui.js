/**
 *  Copyright (c) 2016-present, Unique, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 *
 */

import React from 'react';
import {
    StyleSheet,
    Platform,
} from 'react-native';

import {
    Aspect,
    OrionTabBar,
    OrionView,
}from 'react-native-lark';

import R from './resource';
import Config from './config';

import CarHome from './pages/home';
import CarTech from './pages/tech';
import CarGallery from './pages/gallery';
import CarSetting from './pages/setting';

const styles={};

var Car_Ui = {
    styles: styles,

    init: function (parent) {
      parent.state={
          selectedTab: Config._MainTab[0].id
      }
    },

    getContentHeight: function () {
        var statusbarHeight = 0;
        if( Platform.OS === 'android'){
            statusbarHeight = 20;
        }
        return Aspect.deviceHeight() - OrionTabBar.tabBarHeight - statusbarHeight;
    },

    render: function(parent) {
        var contentHeight = this.getContentHeight();

        var tabContent =[];
        tabContent.push(<CarHome height={contentHeight}/>);
        tabContent.push(<CarTech height={contentHeight}/>);
        tabContent.push(<CarGallery height={contentHeight}/>);
        tabContent.push(<CarSetting height={contentHeight}/>);

        var tabs = Config._MainTab.map((tab,i)=>{
            return (<OrionTabBar.Item
                        key={'tab'+i}
                        l_id={tab.id}
                        title={tab.title}
                        selected={ parent.state.selectedTab === tab.id}
                        onPress={()=> parent.setState({ selectedTab: tab.id })}
                        icon={tab.icon}
                        selectedIcon={tab.selectedIcon}>
                        {tabContent[i]}
                    </OrionTabBar.Item>);
        });

        return (
            <OrionTabBar
                unselectedTintColor="#999999"
                tintColor="#ffffff"
                barTintColor="#000000">
                {tabs}
            </OrionTabBar>
        );
        
    }
};

module.exports = Car_Ui;

