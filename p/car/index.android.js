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

import Ui from './car_ui';

export default class Car_App extends Component {

    constructor(props){
        super(props);
        Ui.init(this);
    }

    render(){
        return Ui.render(this);
    }
}

