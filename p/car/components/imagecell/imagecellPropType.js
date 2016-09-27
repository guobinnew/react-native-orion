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
    OrionComponent,
    OrionImage,
    OrionImagePropType,
} from 'react-native-lark';

const ImageCellPropType = React.PropTypes.shape({
    ...OrionComponent.propTypes,
    column: React.PropTypes.number,
    items: React.PropTypes.arrayOf(OrionImagePropType),
});

module.exports = ImageCellPropType;
