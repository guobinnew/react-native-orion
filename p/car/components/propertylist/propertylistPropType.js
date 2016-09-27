/**
 *  Copyright (c) 2016-present, Unique, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 *
 */
'use strict';

import React from 'react';

import {
    Aspect,
    OrionView,
} from 'react-native-lark';

import PropertyInfoPropType from '../propertyinfo/propertyinfoPropType';

const PropertyListPropType = React.PropTypes.shape({
    ...OrionView.propTypes,
    column: React.PropTypes.number,
    items: React.PropTypes.arrayOf(PropertyInfoPropType),
});

module.exports = PropertyListPropType;
