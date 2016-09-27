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
    OrionComponentPropType,
    OrionTextPropType,
} from 'react-native-lark';

const PropertyInfoPropType = React.PropTypes.shape({
    ...OrionComponentPropType,
    name: OrionTextPropType,
    value: OrionTextPropType,
});

module.exports = PropertyInfoPropType;
