/**
 *  Copyright (c) 2016-present, Unique, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 *
 */

const Car_Config = {
    // 主Tab配置
    _MainTab : [
        {
            id: 'home',
            title: '外观',
            icon: require("./assets/icon.png"),
            selectedIcon: require("./assets/icon_sel.png"),
        },
        {
            id: 'tech',
            title: '技术',
            icon: require("./assets/icon.png"),
            selectedIcon: require("./assets/icon_sel.png"),
        },
        {
            id: 'gallery',
            title: '图库',
            icon: require("./assets/icon.png"),
            selectedIcon: require("./assets/icon_sel.png"),
        },
        {
            id: 'setting',
            title: '配置',
            icon: require("./assets/icon.png"),
            selectedIcon: require("./assets/icon_sel.png"),
        },
    ],

};

module.exports = Car_Config;
