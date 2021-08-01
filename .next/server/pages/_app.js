(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/***/ (function(module) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/***/ (function(module) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _classCallCheck; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _createClass; }
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectWithoutProperties; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__.default)(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectWithoutPropertiesLoose; }
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _typeof; }
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/***/ (function(module) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/***/ (function(module) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/***/ (function(module) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "html": function() { return /* binding */ html; },
/* harmony export */   "body": function() { return /* binding */ body; },
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/core/node_modules/@material-ui/utils/index.js");





var html = {
  WebkitFontSmoothing: 'antialiased',
  // Antialiasing.
  MozOsxFontSmoothing: 'grayscale',
  // Antialiasing.
  // Change from `box-sizing: content-box` so that `width`
  // is not affected by `padding` or `border`.
  boxSizing: 'border-box'
};
var body = function body(theme) {
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    color: theme.palette.text.primary
  }, theme.typography.body2, {
    backgroundColor: theme.palette.background.default,
    '@media print': {
      // Save printer ink.
      backgroundColor: theme.palette.common.white
    }
  });
};
var styles = function styles(theme) {
  return {
    '@global': {
      html: html,
      '*, *::before, *::after': {
        boxSizing: 'inherit'
      },
      'strong, b': {
        fontWeight: theme.typography.fontWeightBold
      },
      body: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
        margin: 0
      }, body(theme), {
        // Add support for document.body.requestFullScreen().
        // Other elements, if background transparent, are not supported.
        '&::backdrop': {
          backgroundColor: theme.palette.background.default
        }
      })
    }
  };
};
/**
 * Kickstart an elegant, consistent, and simple baseline to build upon.
 */

function CssBaseline(props) {
  /* eslint-disable no-unused-vars */
  var _props$children = props.children,
      children = _props$children === void 0 ? null : _props$children,
      classes = props.classes;
  /* eslint-enable no-unused-vars */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, children);
}

 true ? CssBaseline.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * You can wrap a node.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
} : 0;

if (true) {
  // eslint-disable-next-line
  CssBaseline['propTypes' + ''] = (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_3__.exactProp)(CssBaseline.propTypes);
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__.default)(styles, {
  name: 'MuiCssBaseline'
})(CssBaseline));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/CssBaseline/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/CssBaseline/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _CssBaseline__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _CssBaseline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/blue.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/blue.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var blue = {
  50: '#e3f2fd',
  100: '#bbdefb',
  200: '#90caf9',
  300: '#64b5f6',
  400: '#42a5f5',
  500: '#2196f3',
  600: '#1e88e5',
  700: '#1976d2',
  800: '#1565c0',
  900: '#0d47a1',
  A100: '#82b1ff',
  A200: '#448aff',
  A400: '#2979ff',
  A700: '#2962ff'
};
/* harmony default export */ __webpack_exports__["default"] = (blue);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/common.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/common.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var common = {
  black: '#000',
  white: '#fff'
};
/* harmony default export */ __webpack_exports__["default"] = (common);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/green.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/green.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var green = {
  50: '#e8f5e9',
  100: '#c8e6c9',
  200: '#a5d6a7',
  300: '#81c784',
  400: '#66bb6a',
  500: '#4caf50',
  600: '#43a047',
  700: '#388e3c',
  800: '#2e7d32',
  900: '#1b5e20',
  A100: '#b9f6ca',
  A200: '#69f0ae',
  A400: '#00e676',
  A700: '#00c853'
};
/* harmony default export */ __webpack_exports__["default"] = (green);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/grey.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/grey.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var grey = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#d5d5d5',
  A200: '#aaaaaa',
  A400: '#303030',
  A700: '#616161'
};
/* harmony default export */ __webpack_exports__["default"] = (grey);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/indigo.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/indigo.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var indigo = {
  50: '#e8eaf6',
  100: '#c5cae9',
  200: '#9fa8da',
  300: '#7986cb',
  400: '#5c6bc0',
  500: '#3f51b5',
  600: '#3949ab',
  700: '#303f9f',
  800: '#283593',
  900: '#1a237e',
  A100: '#8c9eff',
  A200: '#536dfe',
  A400: '#3d5afe',
  A700: '#304ffe'
};
/* harmony default export */ __webpack_exports__["default"] = (indigo);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/orange.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/orange.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var orange = {
  50: '#fff3e0',
  100: '#ffe0b2',
  200: '#ffcc80',
  300: '#ffb74d',
  400: '#ffa726',
  500: '#ff9800',
  600: '#fb8c00',
  700: '#f57c00',
  800: '#ef6c00',
  900: '#e65100',
  A100: '#ffd180',
  A200: '#ffab40',
  A400: '#ff9100',
  A700: '#ff6d00'
};
/* harmony default export */ __webpack_exports__["default"] = (orange);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/pink.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/pink.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var pink = {
  50: '#fce4ec',
  100: '#f8bbd0',
  200: '#f48fb1',
  300: '#f06292',
  400: '#ec407a',
  500: '#e91e63',
  600: '#d81b60',
  700: '#c2185b',
  800: '#ad1457',
  900: '#880e4f',
  A100: '#ff80ab',
  A200: '#ff4081',
  A400: '#f50057',
  A700: '#c51162'
};
/* harmony default export */ __webpack_exports__["default"] = (pink);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/colors/red.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/colors/red.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var red = {
  50: '#ffebee',
  100: '#ffcdd2',
  200: '#ef9a9a',
  300: '#e57373',
  400: '#ef5350',
  500: '#f44336',
  600: '#e53935',
  700: '#d32f2f',
  800: '#c62828',
  900: '#b71c1c',
  A100: '#ff8a80',
  A200: '#ff5252',
  A400: '#ff1744',
  A700: '#d50000'
};
/* harmony default export */ __webpack_exports__["default"] = (red);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/colorManipulator.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hexToRgb": function() { return /* binding */ hexToRgb; },
/* harmony export */   "rgbToHex": function() { return /* binding */ rgbToHex; },
/* harmony export */   "hslToRgb": function() { return /* binding */ hslToRgb; },
/* harmony export */   "decomposeColor": function() { return /* binding */ decomposeColor; },
/* harmony export */   "recomposeColor": function() { return /* binding */ recomposeColor; },
/* harmony export */   "getContrastRatio": function() { return /* binding */ getContrastRatio; },
/* harmony export */   "getLuminance": function() { return /* binding */ getLuminance; },
/* harmony export */   "emphasize": function() { return /* binding */ emphasize; },
/* harmony export */   "fade": function() { return /* binding */ fade; },
/* harmony export */   "alpha": function() { return /* binding */ alpha; },
/* harmony export */   "darken": function() { return /* binding */ darken; },
/* harmony export */   "lighten": function() { return /* binding */ lighten; }
/* harmony export */ });


/* eslint-disable no-use-before-define */

/**
 * Returns a number whose value is limited to the given range.
 *
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clamp(value) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  if (true) {
    if (value < min || value > max) {
      console.error("Material-UI: The value provided ".concat(value, " is out of range [").concat(min, ", ").concat(max, "]."));
    }
  }

  return Math.min(Math.max(min, value), max);
}
/**
 * Converts a color from CSS hex format to CSS rgb format.
 *
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */


function hexToRgb(color) {
  color = color.substr(1);
  var re = new RegExp(".{1,".concat(color.length >= 6 ? 2 : 1, "}"), 'g');
  var colors = color.match(re);

  if (colors && colors[0].length === 1) {
    colors = colors.map(function (n) {
      return n + n;
    });
  }

  return colors ? "rgb".concat(colors.length === 4 ? 'a' : '', "(").concat(colors.map(function (n, index) {
    return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1000) / 1000;
  }).join(', '), ")") : '';
}

function intToHex(int) {
  var hex = int.toString(16);
  return hex.length === 1 ? "0".concat(hex) : hex;
}
/**
 * Converts a color from CSS rgb format to CSS hex format.
 *
 * @param {string} color - RGB color, i.e. rgb(n, n, n)
 * @returns {string} A CSS rgb color string, i.e. #nnnnnn
 */


function rgbToHex(color) {
  // Idempotent
  if (color.indexOf('#') === 0) {
    return color;
  }

  var _decomposeColor = decomposeColor(color),
      values = _decomposeColor.values;

  return "#".concat(values.map(function (n) {
    return intToHex(n);
  }).join(''));
}
/**
 * Converts a color from hsl format to rgb format.
 *
 * @param {string} color - HSL color values
 * @returns {string} rgb color values
 */

function hslToRgb(color) {
  color = decomposeColor(color);
  var _color = color,
      values = _color.values;
  var h = values[0];
  var s = values[1] / 100;
  var l = values[2] / 100;
  var a = s * Math.min(l, 1 - l);

  var f = function f(n) {
    var k = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (n + h / 30) % 12;
    return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  };

  var type = 'rgb';
  var rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];

  if (color.type === 'hsla') {
    type += 'a';
    rgb.push(values[3]);
  }

  return recomposeColor({
    type: type,
    values: rgb
  });
}
/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {object} - A MUI color object: {type: string, values: number[]}
 */

function decomposeColor(color) {
  // Idempotent
  if (color.type) {
    return color;
  }

  if (color.charAt(0) === '#') {
    return decomposeColor(hexToRgb(color));
  }

  var marker = color.indexOf('(');
  var type = color.substring(0, marker);

  if (['rgb', 'rgba', 'hsl', 'hsla'].indexOf(type) === -1) {
    throw new Error( true ? "Material-UI: Unsupported `".concat(color, "` color.\nWe support the following formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla().") : 0);
  }

  var values = color.substring(marker + 1, color.length - 1).split(',');
  values = values.map(function (value) {
    return parseFloat(value);
  });
  return {
    type: type,
    values: values
  };
}
/**
 * Converts a color object with type and values to a string.
 *
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */

function recomposeColor(color) {
  var type = color.type;
  var values = color.values;

  if (type.indexOf('rgb') !== -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    values = values.map(function (n, i) {
      return i < 3 ? parseInt(n, 10) : n;
    });
  } else if (type.indexOf('hsl') !== -1) {
    values[1] = "".concat(values[1], "%");
    values[2] = "".concat(values[2], "%");
  }

  return "".concat(type, "(").concat(values.join(', '), ")");
}
/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21.
 */

function getContrastRatio(foreground, background) {
  var lumA = getLuminance(foreground);
  var lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */

function getLuminance(color) {
  color = decomposeColor(color);
  var rgb = color.type === 'hsl' ? decomposeColor(hslToRgb(color)).values : color.values;
  rgb = rgb.map(function (val) {
    val /= 255; // normalized

    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  }); // Truncate at 3 digits

  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}
/**
 * Darken or lighten a color, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function emphasize(color) {
  var coefficient = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.15;
  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
}
var warnedOnce = false;
/**
 * Set the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} value - value to set the alpha channel to in the range 0 -1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 *
 * @deprecated
 * Use `import { alpha } from '@material-ui/core/styles'` instead.
 */

function fade(color, value) {
  if (true) {
    if (!warnedOnce) {
      warnedOnce = true;
      console.error(['Material-UI: The `fade` color utility was renamed to `alpha` to better describe its functionality.', '', "You should use `import { alpha } from '@material-ui/core/styles'`"].join('\n'));
    }
  }

  return alpha(color, value);
}
/**
 * Set the absolute transparency of a color.
 * Any existing alpha value is overwritten.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} value - value to set the alpha channel to in the range 0-1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function alpha(color, value) {
  color = decomposeColor(color);
  value = clamp(value);

  if (color.type === 'rgb' || color.type === 'hsl') {
    color.type += 'a';
  }

  color.values[3] = value;
  return recomposeColor(color);
}
/**
 * Darkens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function darken(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] *= 1 - coefficient;
    }
  }

  return recomposeColor(color);
}
/**
 * Lightens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function lighten(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  }

  return recomposeColor(color);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createBreakpoints.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createBreakpoints.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "keys": function() { return /* binding */ keys; },
/* harmony export */   "default": function() { return /* binding */ createBreakpoints; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");


// Sorted ASC by size. That's important.
// It can't be configured as it's used statically for propTypes.
var keys = ['xs', 'sm', 'md', 'lg', 'xl']; // Keep in mind that @media is inclusive by the CSS specification.

function createBreakpoints(breakpoints) {
  var _breakpoints$values = breakpoints.values,
      values = _breakpoints$values === void 0 ? {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  } : _breakpoints$values,
      _breakpoints$unit = breakpoints.unit,
      unit = _breakpoints$unit === void 0 ? 'px' : _breakpoints$unit,
      _breakpoints$step = breakpoints.step,
      step = _breakpoints$step === void 0 ? 5 : _breakpoints$step,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(breakpoints, ["values", "unit", "step"]);

  function up(key) {
    var value = typeof values[key] === 'number' ? values[key] : key;
    return "@media (min-width:".concat(value).concat(unit, ")");
  }

  function down(key) {
    var endIndex = keys.indexOf(key) + 1;
    var upperbound = values[keys[endIndex]];

    if (endIndex === keys.length) {
      // xl down applies to all sizes
      return up('xs');
    }

    var value = typeof upperbound === 'number' && endIndex > 0 ? upperbound : key;
    return "@media (max-width:".concat(value - step / 100).concat(unit, ")");
  }

  function between(start, end) {
    var endIndex = keys.indexOf(end);

    if (endIndex === keys.length - 1) {
      return up(start);
    }

    return "@media (min-width:".concat(typeof values[start] === 'number' ? values[start] : start).concat(unit, ") and ") + "(max-width:".concat((endIndex !== -1 && typeof values[keys[endIndex + 1]] === 'number' ? values[keys[endIndex + 1]] : end) - step / 100).concat(unit, ")");
  }

  function only(key) {
    return between(key, key);
  }

  var warnedOnce = false;

  function width(key) {
    if (true) {
      if (!warnedOnce) {
        warnedOnce = true;
        console.warn(["Material-UI: The `theme.breakpoints.width` utility is deprecated because it's redundant.", 'Use the `theme.breakpoints.values` instead.'].join('\n'));
      }
    }

    return values[key];
  }

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    keys: keys,
    values: values,
    up: up,
    down: down,
    between: between,
    only: only,
    width: width
  }, other);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createMixins.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createMixins.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createMixins; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");


function createMixins(breakpoints, spacing, mixins) {
  var _toolbar;

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
    gutters: function gutters() {
      var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      console.warn(['Material-UI: theme.mixins.gutters() is deprecated.', 'You can use the source of the mixin directly:', "\n      paddingLeft: theme.spacing(2),\n      paddingRight: theme.spacing(2),\n      [theme.breakpoints.up('sm')]: {\n        paddingLeft: theme.spacing(3),\n        paddingRight: theme.spacing(3),\n      },\n      "].join('\n'));
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
        paddingLeft: spacing(2),
        paddingRight: spacing(2)
      }, styles, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, breakpoints.up('sm'), (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
        paddingLeft: spacing(3),
        paddingRight: spacing(3)
      }, styles[breakpoints.up('sm')])));
    },
    toolbar: (_toolbar = {
      minHeight: 56
    }, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_toolbar, "".concat(breakpoints.up('xs'), " and (orientation: landscape)"), {
      minHeight: 48
    }), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_toolbar, breakpoints.up('sm'), {
      minHeight: 64
    }), _toolbar)
  }, mixins);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createMuiStrictModeTheme.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createMuiStrictModeTheme.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createMuiStrictModeTheme; }
/* harmony export */ });
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/core/node_modules/@material-ui/utils/index.js");
/* harmony import */ var _createTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTheme */ "./node_modules/@material-ui/core/esm/styles/createTheme.js");


function createMuiStrictModeTheme(options) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return _createTheme__WEBPACK_IMPORTED_MODULE_0__.default.apply(void 0, [(0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_1__.deepmerge)({
    unstable_strictMode: true
  }, options)].concat(args));
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createPalette.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createPalette.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "light": function() { return /* binding */ light; },
/* harmony export */   "dark": function() { return /* binding */ dark; },
/* harmony export */   "default": function() { return /* binding */ createPalette; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/core/node_modules/@material-ui/utils/index.js");
/* harmony import */ var _colors_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../colors/common */ "./node_modules/@material-ui/core/esm/colors/common.js");
/* harmony import */ var _colors_grey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../colors/grey */ "./node_modules/@material-ui/core/esm/colors/grey.js");
/* harmony import */ var _colors_indigo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../colors/indigo */ "./node_modules/@material-ui/core/esm/colors/indigo.js");
/* harmony import */ var _colors_pink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../colors/pink */ "./node_modules/@material-ui/core/esm/colors/pink.js");
/* harmony import */ var _colors_red__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../colors/red */ "./node_modules/@material-ui/core/esm/colors/red.js");
/* harmony import */ var _colors_orange__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../colors/orange */ "./node_modules/@material-ui/core/esm/colors/orange.js");
/* harmony import */ var _colors_blue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../colors/blue */ "./node_modules/@material-ui/core/esm/colors/blue.js");
/* harmony import */ var _colors_green__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../colors/green */ "./node_modules/@material-ui/core/esm/colors/green.js");
/* harmony import */ var _colorManipulator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./colorManipulator */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");













var light = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: 'rgba(0, 0, 0, 0.87)',
    // Secondary text.
    secondary: 'rgba(0, 0, 0, 0.54)',
    // Disabled text have even lower visual prominence.
    disabled: 'rgba(0, 0, 0, 0.38)',
    // Text hints.
    hint: 'rgba(0, 0, 0, 0.38)'
  },
  // The color used to divide different elements.
  divider: 'rgba(0, 0, 0, 0.12)',
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: _colors_common__WEBPACK_IMPORTED_MODULE_2__.default.white,
    default: _colors_grey__WEBPACK_IMPORTED_MODULE_3__.default[50]
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: 'rgba(0, 0, 0, 0.54)',
    // The color of an hovered action.
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: 'rgba(0, 0, 0, 0.26)',
    // The background color of a disabled action.
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
};
var dark = {
  text: {
    primary: _colors_common__WEBPACK_IMPORTED_MODULE_2__.default.white,
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    hint: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)'
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: _colors_grey__WEBPACK_IMPORTED_MODULE_3__.default[800],
    default: '#303030'
  },
  action: {
    active: _colors_common__WEBPACK_IMPORTED_MODULE_2__.default.white,
    hover: 'rgba(255, 255, 255, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(255, 255, 255, 0.16)',
    selectedOpacity: 0.16,
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(255, 255, 255, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};

function addLightOrDark(intent, direction, shade, tonalOffset) {
  var tonalOffsetLight = tonalOffset.light || tonalOffset;
  var tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;

  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === 'light') {
      intent.light = (0,_colorManipulator__WEBPACK_IMPORTED_MODULE_4__.lighten)(intent.main, tonalOffsetLight);
    } else if (direction === 'dark') {
      intent.dark = (0,_colorManipulator__WEBPACK_IMPORTED_MODULE_4__.darken)(intent.main, tonalOffsetDark);
    }
  }
}

function createPalette(palette) {
  var _palette$primary = palette.primary,
      primary = _palette$primary === void 0 ? {
    light: _colors_indigo__WEBPACK_IMPORTED_MODULE_5__.default[300],
    main: _colors_indigo__WEBPACK_IMPORTED_MODULE_5__.default[500],
    dark: _colors_indigo__WEBPACK_IMPORTED_MODULE_5__.default[700]
  } : _palette$primary,
      _palette$secondary = palette.secondary,
      secondary = _palette$secondary === void 0 ? {
    light: _colors_pink__WEBPACK_IMPORTED_MODULE_6__.default.A200,
    main: _colors_pink__WEBPACK_IMPORTED_MODULE_6__.default.A400,
    dark: _colors_pink__WEBPACK_IMPORTED_MODULE_6__.default.A700
  } : _palette$secondary,
      _palette$error = palette.error,
      error = _palette$error === void 0 ? {
    light: _colors_red__WEBPACK_IMPORTED_MODULE_7__.default[300],
    main: _colors_red__WEBPACK_IMPORTED_MODULE_7__.default[500],
    dark: _colors_red__WEBPACK_IMPORTED_MODULE_7__.default[700]
  } : _palette$error,
      _palette$warning = palette.warning,
      warning = _palette$warning === void 0 ? {
    light: _colors_orange__WEBPACK_IMPORTED_MODULE_8__.default[300],
    main: _colors_orange__WEBPACK_IMPORTED_MODULE_8__.default[500],
    dark: _colors_orange__WEBPACK_IMPORTED_MODULE_8__.default[700]
  } : _palette$warning,
      _palette$info = palette.info,
      info = _palette$info === void 0 ? {
    light: _colors_blue__WEBPACK_IMPORTED_MODULE_9__.default[300],
    main: _colors_blue__WEBPACK_IMPORTED_MODULE_9__.default[500],
    dark: _colors_blue__WEBPACK_IMPORTED_MODULE_9__.default[700]
  } : _palette$info,
      _palette$success = palette.success,
      success = _palette$success === void 0 ? {
    light: _colors_green__WEBPACK_IMPORTED_MODULE_10__.default[300],
    main: _colors_green__WEBPACK_IMPORTED_MODULE_10__.default[500],
    dark: _colors_green__WEBPACK_IMPORTED_MODULE_10__.default[700]
  } : _palette$success,
      _palette$type = palette.type,
      type = _palette$type === void 0 ? 'light' : _palette$type,
      _palette$contrastThre = palette.contrastThreshold,
      contrastThreshold = _palette$contrastThre === void 0 ? 3 : _palette$contrastThre,
      _palette$tonalOffset = palette.tonalOffset,
      tonalOffset = _palette$tonalOffset === void 0 ? 0.2 : _palette$tonalOffset,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(palette, ["primary", "secondary", "error", "warning", "info", "success", "type", "contrastThreshold", "tonalOffset"]); // Use the same logic as
  // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
  // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54


  function getContrastText(background) {
    var contrastText = (0,_colorManipulator__WEBPACK_IMPORTED_MODULE_4__.getContrastRatio)(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;

    if (true) {
      var contrast = (0,_colorManipulator__WEBPACK_IMPORTED_MODULE_4__.getContrastRatio)(background, contrastText);

      if (contrast < 3) {
        console.error(["Material-UI: The contrast ratio of ".concat(contrast, ":1 for ").concat(contrastText, " on ").concat(background), 'falls below the WCAG recommended absolute minimum contrast ratio of 3:1.', 'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast'].join('\n'));
      }
    }

    return contrastText;
  }

  var augmentColor = function augmentColor(color) {
    var mainShade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    var lightShade = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;
    var darkShade = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 700;
    color = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, color);

    if (!color.main && color[mainShade]) {
      color.main = color[mainShade];
    }

    if (!color.main) {
      throw new Error( true ? "Material-UI: The color provided to augmentColor(color) is invalid.\nThe color object needs to have a `main` property or a `".concat(mainShade, "` property.") : 0);
    }

    if (typeof color.main !== 'string') {
      throw new Error( true ? "Material-UI: The color provided to augmentColor(color) is invalid.\n`color.main` should be a string, but `".concat(JSON.stringify(color.main), "` was provided instead.\n\nDid you intend to use one of the following approaches?\n\nimport {\xA0green } from \"@material-ui/core/colors\";\n\nconst theme1 = createTheme({ palette: {\n  primary: green,\n} });\n\nconst theme2 = createTheme({ palette: {\n  primary: { main: green[500] },\n} });") : 0);
    }

    addLightOrDark(color, 'light', lightShade, tonalOffset);
    addLightOrDark(color, 'dark', darkShade, tonalOffset);

    if (!color.contrastText) {
      color.contrastText = getContrastText(color.main);
    }

    return color;
  };

  var types = {
    dark: dark,
    light: light
  };

  if (true) {
    if (!types[type]) {
      console.error("Material-UI: The palette type `".concat(type, "` is not supported."));
    }
  }

  var paletteOutput = (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_11__.deepmerge)((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    // A collection of common colors.
    common: _colors_common__WEBPACK_IMPORTED_MODULE_2__.default,
    // The palette type, can be light or dark.
    type: type,
    // The colors used to represent primary interface elements for a user.
    primary: augmentColor(primary),
    // The colors used to represent secondary interface elements for a user.
    secondary: augmentColor(secondary, 'A400', 'A200', 'A700'),
    // The colors used to represent interface elements that the user should be made aware of.
    error: augmentColor(error),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: augmentColor(warning),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: augmentColor(info),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: augmentColor(success),
    // The grey colors.
    grey: _colors_grey__WEBPACK_IMPORTED_MODULE_3__.default,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: contrastThreshold,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: getContrastText,
    // Generate a rich color object.
    augmentColor: augmentColor,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: tonalOffset
  }, types[type]), other);
  return paletteOutput;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createSpacing.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createSpacing.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createSpacing; }
/* harmony export */ });
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/system */ "@material-ui/system");
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_system__WEBPACK_IMPORTED_MODULE_0__);

var warnOnce;
function createSpacing() {
  var spacingInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;

  // Already transformed.
  if (spacingInput.mui) {
    return spacingInput;
  } // Material Design layouts are visually balanced. Most measurements align to an 8dp grid applied, which aligns both spacing and the overall layout.
  // Smaller components, such as icons and type, can align to a 4dp grid.
  // https://material.io/design/layout/understanding-layout.html#usage


  var transform = (0,_material_ui_system__WEBPACK_IMPORTED_MODULE_0__.createUnarySpacing)({
    spacing: spacingInput
  });

  var spacing = function spacing() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (true) {
      if (!(args.length <= 4)) {
        console.error("Material-UI: Too many arguments provided, expected between 0 and 4, got ".concat(args.length));
      }
    }

    if (args.length === 0) {
      return transform(1);
    }

    if (args.length === 1) {
      return transform(args[0]);
    }

    return args.map(function (argument) {
      if (typeof argument === 'string') {
        return argument;
      }

      var output = transform(argument);
      return typeof output === 'number' ? "".concat(output, "px") : output;
    }).join(' ');
  }; // Backward compatibility, to remove in v5.


  Object.defineProperty(spacing, 'unit', {
    get: function get() {
      if (true) {
        if (!warnOnce || "development" === 'test') {
          console.error(['Material-UI: theme.spacing.unit usage has been deprecated.', 'It will be removed in v5.', 'You can replace `theme.spacing.unit * y` with `theme.spacing(y)`.', '', 'You can use the `https://github.com/mui-org/material-ui/tree/master/packages/material-ui-codemod/README.md#theme-spacing-api` migration helper to make the process smoother.'].join('\n'));
        }

        warnOnce = true;
      }

      return spacingInput;
    }
  });
  spacing.mui = true;
  return spacing;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createStyles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createStyles.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createStyles; }
/* harmony export */ });
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__);
 // let warnOnce = false;
// To remove in v5

function createStyles(styles) {
  // warning(
  //   warnOnce,
  //   [
  //     'Material-UI: createStyles from @material-ui/core/styles is deprecated.',
  //     'Please use @material-ui/styles/createStyles',
  //   ].join('\n'),
  // );
  // warnOnce = true;
  return (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__.createStyles)(styles);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createTheme.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createTheme.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMuiTheme": function() { return /* binding */ createMuiTheme; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/core/node_modules/@material-ui/utils/index.js");
/* harmony import */ var _createBreakpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createBreakpoints */ "./node_modules/@material-ui/core/esm/styles/createBreakpoints.js");
/* harmony import */ var _createMixins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createMixins */ "./node_modules/@material-ui/core/esm/styles/createMixins.js");
/* harmony import */ var _createPalette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createPalette */ "./node_modules/@material-ui/core/esm/styles/createPalette.js");
/* harmony import */ var _createTypography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./createTypography */ "./node_modules/@material-ui/core/esm/styles/createTypography.js");
/* harmony import */ var _shadows__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shadows */ "./node_modules/@material-ui/core/esm/styles/shadows.js");
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shape */ "./node_modules/@material-ui/core/esm/styles/shape.js");
/* harmony import */ var _createSpacing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createSpacing */ "./node_modules/@material-ui/core/esm/styles/createSpacing.js");
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./transitions */ "./node_modules/@material-ui/core/esm/styles/transitions.js");
/* harmony import */ var _zIndex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./zIndex */ "./node_modules/@material-ui/core/esm/styles/zIndex.js");













function createTheme() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _options$breakpoints = options.breakpoints,
      breakpointsInput = _options$breakpoints === void 0 ? {} : _options$breakpoints,
      _options$mixins = options.mixins,
      mixinsInput = _options$mixins === void 0 ? {} : _options$mixins,
      _options$palette = options.palette,
      paletteInput = _options$palette === void 0 ? {} : _options$palette,
      spacingInput = options.spacing,
      _options$typography = options.typography,
      typographyInput = _options$typography === void 0 ? {} : _options$typography,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(options, ["breakpoints", "mixins", "palette", "spacing", "typography"]);

  var palette = (0,_createPalette__WEBPACK_IMPORTED_MODULE_2__.default)(paletteInput);
  var breakpoints = (0,_createBreakpoints__WEBPACK_IMPORTED_MODULE_3__.default)(breakpointsInput);
  var spacing = (0,_createSpacing__WEBPACK_IMPORTED_MODULE_4__.default)(spacingInput);
  var muiTheme = (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__.deepmerge)({
    breakpoints: breakpoints,
    direction: 'ltr',
    mixins: (0,_createMixins__WEBPACK_IMPORTED_MODULE_6__.default)(breakpoints, spacing, mixinsInput),
    overrides: {},
    // Inject custom styles
    palette: palette,
    props: {},
    // Provide default props
    shadows: _shadows__WEBPACK_IMPORTED_MODULE_7__.default,
    typography: (0,_createTypography__WEBPACK_IMPORTED_MODULE_8__.default)(palette, typographyInput),
    spacing: spacing,
    shape: _shape__WEBPACK_IMPORTED_MODULE_9__.default,
    transitions: _transitions__WEBPACK_IMPORTED_MODULE_10__.default,
    zIndex: _zIndex__WEBPACK_IMPORTED_MODULE_11__.default
  }, other);

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  muiTheme = args.reduce(function (acc, argument) {
    return (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__.deepmerge)(acc, argument);
  }, muiTheme);

  if (true) {
    var pseudoClasses = ['checked', 'disabled', 'error', 'focused', 'focusVisible', 'required', 'expanded', 'selected'];

    var traverse = function traverse(node, parentKey) {
      var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var key; // eslint-disable-next-line guard-for-in, no-restricted-syntax

      for (key in node) {
        var child = node[key];

        if (depth === 1) {
          if (key.indexOf('Mui') === 0 && child) {
            traverse(child, key, depth + 1);
          }
        } else if (pseudoClasses.indexOf(key) !== -1 && Object.keys(child).length > 0) {
          if (true) {
            console.error(["Material-UI: The `".concat(parentKey, "` component increases ") + "the CSS specificity of the `".concat(key, "` internal state."), 'You can not override it like this: ', JSON.stringify(node, null, 2), '', 'Instead, you need to use the $ruleName syntax:', JSON.stringify({
              root: (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, "&$".concat(key), child)
            }, null, 2), '', 'https://material-ui.com/r/pseudo-classes-guide'].join('\n'));
          } // Remove the style to prevent global conflicts.


          node[key] = {};
        }
      }
    };

    traverse(muiTheme.overrides);
  }

  return muiTheme;
}

var warnedOnce = false;
function createMuiTheme() {
  if (true) {
    if (!warnedOnce) {
      warnedOnce = true;
      console.error(['Material-UI: the createMuiTheme function was renamed to createTheme.', '', "You should use `import { createTheme } from '@material-ui/core/styles'`"].join('\n'));
    }
  }

  return createTheme.apply(void 0, arguments);
}
/* harmony default export */ __webpack_exports__["default"] = (createTheme);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createTypography.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createTypography.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createTypography; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/core/node_modules/@material-ui/utils/index.js");




function round(value) {
  return Math.round(value * 1e5) / 1e5;
}

var warnedOnce = false;

function roundWithDeprecationWarning(value) {
  if (true) {
    if (!warnedOnce) {
      console.warn(['Material-UI: The `theme.typography.round` helper is deprecated.', 'Head to https://material-ui.com/r/migration-v4/#theme for a migration path.'].join('\n'));
      warnedOnce = true;
    }
  }

  return round(value);
}

var caseAllCaps = {
  textTransform: 'uppercase'
};
var defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
/**
 * @see @link{https://material.io/design/typography/the-type-system.html}
 * @see @link{https://material.io/design/typography/understanding-typography.html}
 */

function createTypography(palette, typography) {
  var _ref = typeof typography === 'function' ? typography(palette) : typography,
      _ref$fontFamily = _ref.fontFamily,
      fontFamily = _ref$fontFamily === void 0 ? defaultFontFamily : _ref$fontFamily,
      _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? 14 : _ref$fontSize,
      _ref$fontWeightLight = _ref.fontWeightLight,
      fontWeightLight = _ref$fontWeightLight === void 0 ? 300 : _ref$fontWeightLight,
      _ref$fontWeightRegula = _ref.fontWeightRegular,
      fontWeightRegular = _ref$fontWeightRegula === void 0 ? 400 : _ref$fontWeightRegula,
      _ref$fontWeightMedium = _ref.fontWeightMedium,
      fontWeightMedium = _ref$fontWeightMedium === void 0 ? 500 : _ref$fontWeightMedium,
      _ref$fontWeightBold = _ref.fontWeightBold,
      fontWeightBold = _ref$fontWeightBold === void 0 ? 700 : _ref$fontWeightBold,
      _ref$htmlFontSize = _ref.htmlFontSize,
      htmlFontSize = _ref$htmlFontSize === void 0 ? 16 : _ref$htmlFontSize,
      allVariants = _ref.allVariants,
      pxToRem2 = _ref.pxToRem,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"]);

  if (true) {
    if (typeof fontSize !== 'number') {
      console.error('Material-UI: `fontSize` is required to be a number.');
    }

    if (typeof htmlFontSize !== 'number') {
      console.error('Material-UI: `htmlFontSize` is required to be a number.');
    }
  }

  var coef = fontSize / 14;

  var pxToRem = pxToRem2 || function (size) {
    return "".concat(size / htmlFontSize * coef, "rem");
  };

  var buildVariant = function buildVariant(fontWeight, size, lineHeight, letterSpacing, casing) {
    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      fontFamily: fontFamily,
      fontWeight: fontWeight,
      fontSize: pxToRem(size),
      // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
      lineHeight: lineHeight
    }, fontFamily === defaultFontFamily ? {
      letterSpacing: "".concat(round(letterSpacing / size), "em")
    } : {}, casing, allVariants);
  };

  var variants = {
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps)
  };
  return (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_2__.deepmerge)((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    htmlFontSize: htmlFontSize,
    pxToRem: pxToRem,
    round: roundWithDeprecationWarning,
    // TODO v5: remove
    fontFamily: fontFamily,
    fontSize: fontSize,
    fontWeightLight: fontWeightLight,
    fontWeightRegular: fontWeightRegular,
    fontWeightMedium: fontWeightMedium,
    fontWeightBold: fontWeightBold
  }, variants), other, {
    clone: false // No need to clone deep

  });
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/cssUtils.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/cssUtils.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isUnitless": function() { return /* binding */ isUnitless; },
/* harmony export */   "getUnit": function() { return /* binding */ getUnit; },
/* harmony export */   "toUnitless": function() { return /* binding */ toUnitless; },
/* harmony export */   "convertLength": function() { return /* binding */ convertLength; },
/* harmony export */   "alignProperty": function() { return /* binding */ alignProperty; },
/* harmony export */   "fontGrid": function() { return /* binding */ fontGrid; },
/* harmony export */   "responsiveProperty": function() { return /* binding */ responsiveProperty; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function isUnitless(value) {
  return String(parseFloat(value)).length === String(value).length;
} // Ported from Compass
// https://github.com/Compass/compass/blob/master/core/stylesheets/compass/typography/_units.scss
// Emulate the sass function "unit"

function getUnit(input) {
  return String(input).match(/[\d.\-+]*\s*(.*)/)[1] || '';
} // Emulate the sass function "unitless"

function toUnitless(length) {
  return parseFloat(length);
} // Convert any CSS <length> or <percentage> value to any another.
// From https://github.com/KyleAMathews/convert-css-length

function convertLength(baseFontSize) {
  return function (length, toUnit) {
    var fromUnit = getUnit(length); // Optimize for cases where `from` and `to` units are accidentally the same.

    if (fromUnit === toUnit) {
      return length;
    } // Convert input length to pixels.


    var pxLength = toUnitless(length);

    if (fromUnit !== 'px') {
      if (fromUnit === 'em') {
        pxLength = toUnitless(length) * toUnitless(baseFontSize);
      } else if (fromUnit === 'rem') {
        pxLength = toUnitless(length) * toUnitless(baseFontSize);
        return length;
      }
    } // Convert length in pixels to the output unit


    var outputLength = pxLength;

    if (toUnit !== 'px') {
      if (toUnit === 'em') {
        outputLength = pxLength / toUnitless(baseFontSize);
      } else if (toUnit === 'rem') {
        outputLength = pxLength / toUnitless(baseFontSize);
      } else {
        return length;
      }
    }

    return parseFloat(outputLength.toFixed(5)) + toUnit;
  };
}
function alignProperty(_ref) {
  var size = _ref.size,
      grid = _ref.grid;
  var sizeBelow = size - size % grid;
  var sizeAbove = sizeBelow + grid;
  return size - sizeBelow < sizeAbove - size ? sizeBelow : sizeAbove;
} // fontGrid finds a minimal grid (in rem) for the fontSize values so that the
// lineHeight falls under a x pixels grid, 4px in the case of Material Design,
// without changing the relative line height

function fontGrid(_ref2) {
  var lineHeight = _ref2.lineHeight,
      pixels = _ref2.pixels,
      htmlFontSize = _ref2.htmlFontSize;
  return pixels / (lineHeight * htmlFontSize);
}
/**
 * generate a responsive version of a given CSS property
 * @example
 * responsiveProperty({
 *   cssProperty: 'fontSize',
 *   min: 15,
 *   max: 20,
 *   unit: 'px',
 *   breakpoints: [300, 600],
 * })
 *
 * // this returns
 *
 * {
 *   fontSize: '15px',
 *   '@media (min-width:300px)': {
 *     fontSize: '17.5px',
 *   },
 *   '@media (min-width:600px)': {
 *     fontSize: '20px',
 *   },
 * }
 *
 * @param {Object} params
 * @param {string} params.cssProperty - The CSS property to be made responsive
 * @param {number} params.min - The smallest value of the CSS property
 * @param {number} params.max - The largest value of the CSS property
 * @param {string} [params.unit] - The unit to be used for the CSS property
 * @param {Array.number} [params.breakpoints]  - An array of breakpoints
 * @param {number} [params.alignStep] - Round scaled value to fall under this grid
 * @returns {Object} responsive styles for {params.cssProperty}
 */

function responsiveProperty(_ref3) {
  var cssProperty = _ref3.cssProperty,
      min = _ref3.min,
      max = _ref3.max,
      _ref3$unit = _ref3.unit,
      unit = _ref3$unit === void 0 ? 'rem' : _ref3$unit,
      _ref3$breakpoints = _ref3.breakpoints,
      breakpoints = _ref3$breakpoints === void 0 ? [600, 960, 1280] : _ref3$breakpoints,
      _ref3$transform = _ref3.transform,
      transform = _ref3$transform === void 0 ? null : _ref3$transform;

  var output = (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, cssProperty, "".concat(min).concat(unit));

  var factor = (max - min) / breakpoints[breakpoints.length - 1];
  breakpoints.forEach(function (breakpoint) {
    var value = min + factor * breakpoint;

    if (transform !== null) {
      value = transform(value);
    }

    output["@media (min-width:".concat(breakpoint, "px)")] = (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, cssProperty, "".concat(Math.round(value * 10000) / 10000).concat(unit));
  });
  return output;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/defaultTheme.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTheme */ "./node_modules/@material-ui/core/esm/styles/createTheme.js");

var defaultTheme = (0,_createTheme__WEBPACK_IMPORTED_MODULE_0__.default)();
/* harmony default export */ __webpack_exports__["default"] = (defaultTheme);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/index.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTheme": function() { return /* reexport safe */ _createTheme__WEBPACK_IMPORTED_MODULE_1__.default; },
/* harmony export */   "createMuiTheme": function() { return /* reexport safe */ _createTheme__WEBPACK_IMPORTED_MODULE_1__.createMuiTheme; },
/* harmony export */   "unstable_createMuiStrictModeTheme": function() { return /* reexport safe */ _createMuiStrictModeTheme__WEBPACK_IMPORTED_MODULE_2__.default; },
/* harmony export */   "createStyles": function() { return /* reexport safe */ _createStyles__WEBPACK_IMPORTED_MODULE_3__.default; },
/* harmony export */   "makeStyles": function() { return /* reexport safe */ _makeStyles__WEBPACK_IMPORTED_MODULE_4__.default; },
/* harmony export */   "responsiveFontSizes": function() { return /* reexport safe */ _responsiveFontSizes__WEBPACK_IMPORTED_MODULE_5__.default; },
/* harmony export */   "styled": function() { return /* reexport safe */ _styled__WEBPACK_IMPORTED_MODULE_6__.default; },
/* harmony export */   "useTheme": function() { return /* reexport safe */ _useTheme__WEBPACK_IMPORTED_MODULE_8__.default; },
/* harmony export */   "withStyles": function() { return /* reexport safe */ _withStyles__WEBPACK_IMPORTED_MODULE_9__.default; },
/* harmony export */   "withTheme": function() { return /* reexport safe */ _withTheme__WEBPACK_IMPORTED_MODULE_10__.default; },
/* harmony export */   "createGenerateClassName": function() { return /* reexport safe */ _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__.createGenerateClassName; },
/* harmony export */   "jssPreset": function() { return /* reexport safe */ _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__.jssPreset; },
/* harmony export */   "ServerStyleSheets": function() { return /* reexport safe */ _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__.ServerStyleSheets; },
/* harmony export */   "StylesProvider": function() { return /* reexport safe */ _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__.StylesProvider; },
/* harmony export */   "MuiThemeProvider": function() { return /* reexport safe */ _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__.ThemeProvider; },
/* harmony export */   "ThemeProvider": function() { return /* reexport safe */ _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__.ThemeProvider; }
/* harmony export */ });
/* harmony import */ var _colorManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colorManipulator */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _colorManipulator__WEBPACK_IMPORTED_MODULE_0__) if(["default","createTheme","createMuiTheme","unstable_createMuiStrictModeTheme","createStyles","makeStyles","responsiveFontSizes","styled","useTheme","withStyles","withTheme","createGenerateClassName","jssPreset","ServerStyleSheets","StylesProvider","MuiThemeProvider","ThemeProvider"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _colorManipulator__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _createTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTheme */ "./node_modules/@material-ui/core/esm/styles/createTheme.js");
/* harmony import */ var _createMuiStrictModeTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createMuiStrictModeTheme */ "./node_modules/@material-ui/core/esm/styles/createMuiStrictModeTheme.js");
/* harmony import */ var _createStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createStyles */ "./node_modules/@material-ui/core/esm/styles/createStyles.js");
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./makeStyles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _responsiveFontSizes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./responsiveFontSizes */ "./node_modules/@material-ui/core/esm/styles/responsiveFontSizes.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styled */ "./node_modules/@material-ui/core/esm/styles/styled.js");
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transitions */ "./node_modules/@material-ui/core/esm/styles/transitions.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _transitions__WEBPACK_IMPORTED_MODULE_7__) if(["default","createTheme","createMuiTheme","unstable_createMuiStrictModeTheme","createStyles","makeStyles","responsiveFontSizes","styled","useTheme","withStyles","withTheme","createGenerateClassName","jssPreset","ServerStyleSheets","StylesProvider","MuiThemeProvider","ThemeProvider"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _transitions__WEBPACK_IMPORTED_MODULE_7__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useTheme */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _withTheme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./withTheme */ "./node_modules/@material-ui/core/esm/styles/withTheme.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_11__);

 // eslint-disable-next-line camelcase












/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/makeStyles.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/makeStyles.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");




function makeStyles(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__.makeStyles)(stylesOrCreator, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_2__.default
  }, options));
}

/* harmony default export */ __webpack_exports__["default"] = (makeStyles);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/responsiveFontSizes.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/responsiveFontSizes.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ responsiveFontSizes; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _cssUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cssUtils */ "./node_modules/@material-ui/core/esm/styles/cssUtils.js");



function responsiveFontSizes(themeInput) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$breakpoints = options.breakpoints,
      breakpoints = _options$breakpoints === void 0 ? ['sm', 'md', 'lg'] : _options$breakpoints,
      _options$disableAlign = options.disableAlign,
      disableAlign = _options$disableAlign === void 0 ? false : _options$disableAlign,
      _options$factor = options.factor,
      factor = _options$factor === void 0 ? 2 : _options$factor,
      _options$variants = options.variants,
      variants = _options$variants === void 0 ? ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline'] : _options$variants;

  var theme = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, themeInput);

  theme.typography = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, theme.typography);
  var typography = theme.typography; // Convert between css lengths e.g. em->px or px->rem
  // Set the baseFontSize for your project. Defaults to 16px (also the browser default).

  var convert = (0,_cssUtils__WEBPACK_IMPORTED_MODULE_1__.convertLength)(typography.htmlFontSize);
  var breakpointValues = breakpoints.map(function (x) {
    return theme.breakpoints.values[x];
  });
  variants.forEach(function (variant) {
    var style = typography[variant];
    var remFontSize = parseFloat(convert(style.fontSize, 'rem'));

    if (remFontSize <= 1) {
      return;
    }

    var maxFontSize = remFontSize;
    var minFontSize = 1 + (maxFontSize - 1) / factor;
    var lineHeight = style.lineHeight;

    if (!(0,_cssUtils__WEBPACK_IMPORTED_MODULE_1__.isUnitless)(lineHeight) && !disableAlign) {
      throw new Error( true ? "Material-UI: Unsupported non-unitless line height with grid alignment.\nUse unitless line heights instead." : 0);
    }

    if (!(0,_cssUtils__WEBPACK_IMPORTED_MODULE_1__.isUnitless)(lineHeight)) {
      // make it unitless
      lineHeight = parseFloat(convert(lineHeight, 'rem')) / parseFloat(remFontSize);
    }

    var transform = null;

    if (!disableAlign) {
      transform = function transform(value) {
        return (0,_cssUtils__WEBPACK_IMPORTED_MODULE_1__.alignProperty)({
          size: value,
          grid: (0,_cssUtils__WEBPACK_IMPORTED_MODULE_1__.fontGrid)({
            pixels: 4,
            lineHeight: lineHeight,
            htmlFontSize: typography.htmlFontSize
          })
        });
      };
    }

    typography[variant] = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, style, (0,_cssUtils__WEBPACK_IMPORTED_MODULE_1__.responsiveProperty)({
      cssProperty: 'fontSize',
      min: minFontSize,
      max: maxFontSize,
      unit: 'rem',
      breakpoints: breakpointValues,
      transform: transform
    }));
  });
  return theme;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/shadows.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/shadows.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var shadowKeyUmbraOpacity = 0.2;
var shadowKeyPenumbraOpacity = 0.14;
var shadowAmbientShadowOpacity = 0.12;

function createShadow() {
  return ["".concat(arguments.length <= 0 ? undefined : arguments[0], "px ").concat(arguments.length <= 1 ? undefined : arguments[1], "px ").concat(arguments.length <= 2 ? undefined : arguments[2], "px ").concat(arguments.length <= 3 ? undefined : arguments[3], "px rgba(0,0,0,").concat(shadowKeyUmbraOpacity, ")"), "".concat(arguments.length <= 4 ? undefined : arguments[4], "px ").concat(arguments.length <= 5 ? undefined : arguments[5], "px ").concat(arguments.length <= 6 ? undefined : arguments[6], "px ").concat(arguments.length <= 7 ? undefined : arguments[7], "px rgba(0,0,0,").concat(shadowKeyPenumbraOpacity, ")"), "".concat(arguments.length <= 8 ? undefined : arguments[8], "px ").concat(arguments.length <= 9 ? undefined : arguments[9], "px ").concat(arguments.length <= 10 ? undefined : arguments[10], "px ").concat(arguments.length <= 11 ? undefined : arguments[11], "px rgba(0,0,0,").concat(shadowAmbientShadowOpacity, ")")].join(',');
} // Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss


var shadows = ['none', createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
/* harmony default export */ __webpack_exports__["default"] = (shadows);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/shape.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/shape.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var shape = {
  borderRadius: 4
};
/* harmony default export */ __webpack_exports__["default"] = (shape);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/styled.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/styled.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");




var styled = function styled(Component) {
  var componentCreator = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__.styled)(Component);
  return function (style, options) {
    return componentCreator(style, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_2__.default
    }, options));
  };
};

/* harmony default export */ __webpack_exports__["default"] = (styled);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/transitions.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/transitions.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "easing": function() { return /* binding */ easing; },
/* harmony export */   "duration": function() { return /* binding */ duration; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");

// Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
// to learn the context in which each easing should be used.
var easing = {
  // This is the most common easing curve.
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
}; // Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
// to learn when use what timing

var duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};

function formatMs(milliseconds) {
  return "".concat(Math.round(milliseconds), "ms");
}
/**
 * @param {string|Array} props
 * @param {object} param
 * @param {string} param.prop
 * @param {number} param.duration
 * @param {string} param.easing
 * @param {number} param.delay
 */


/* harmony default export */ __webpack_exports__["default"] = ({
  easing: easing,
  duration: duration,
  create: function create() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['all'];
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _options$duration = options.duration,
        durationOption = _options$duration === void 0 ? duration.standard : _options$duration,
        _options$easing = options.easing,
        easingOption = _options$easing === void 0 ? easing.easeInOut : _options$easing,
        _options$delay = options.delay,
        delay = _options$delay === void 0 ? 0 : _options$delay,
        other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(options, ["duration", "easing", "delay"]);

    if (true) {
      var isString = function isString(value) {
        return typeof value === 'string';
      };

      var isNumber = function isNumber(value) {
        return !isNaN(parseFloat(value));
      };

      if (!isString(props) && !Array.isArray(props)) {
        console.error('Material-UI: Argument "props" must be a string or Array.');
      }

      if (!isNumber(durationOption) && !isString(durationOption)) {
        console.error("Material-UI: Argument \"duration\" must be a number or a string but found ".concat(durationOption, "."));
      }

      if (!isString(easingOption)) {
        console.error('Material-UI: Argument "easing" must be a string.');
      }

      if (!isNumber(delay) && !isString(delay)) {
        console.error('Material-UI: Argument "delay" must be a number or a string.');
      }

      if (Object.keys(other).length !== 0) {
        console.error("Material-UI: Unrecognized argument(s) [".concat(Object.keys(other).join(','), "]."));
      }
    }

    return (Array.isArray(props) ? props : [props]).map(function (animatedProp) {
      return "".concat(animatedProp, " ").concat(typeof durationOption === 'string' ? durationOption : formatMs(durationOption), " ").concat(easingOption, " ").concat(typeof delay === 'string' ? delay : formatMs(delay));
    }).join(',');
  },
  getAutoHeightDuration: function getAutoHeightDuration(height) {
    if (!height) {
      return 0;
    }

    var constant = height / 36; // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10

    return Math.round((4 + 15 * Math.pow(constant, 0.25) + constant / 5) * 10);
  }
});

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/useTheme.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/useTheme.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useTheme; }
/* harmony export */ });
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");



function useTheme() {
  var theme = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__.useTheme)() || _defaultTheme__WEBPACK_IMPORTED_MODULE_2__.default;

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_0___default().useDebugValue(theme);
  }

  return theme;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/withStyles.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/withStyles.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");




function withStyles(stylesOrCreator, options) {
  return (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__.withStyles)(stylesOrCreator, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_2__.default
  }, options));
}

/* harmony default export */ __webpack_exports__["default"] = (withStyles);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/withTheme.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/withTheme.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");


var withTheme = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__.withThemeCreator)({
  defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_1__.default
});
/* harmony default export */ __webpack_exports__["default"] = (withTheme);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/zIndex.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/zIndex.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// We need to centralize the zIndex definitions as they work
// like global values in the browser.
var zIndex = {
  mobileStepper: 1000,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
/* harmony default export */ __webpack_exports__["default"] = (zIndex);

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/ServerStyleSheets/ServerStyleSheets.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/ServerStyleSheets/ServerStyleSheets.js ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ServerStyleSheets; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jss */ "./node_modules/@material-ui/core/node_modules/jss/dist/jss.cjs.js");
/* harmony import */ var _StylesProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../StylesProvider */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/StylesProvider/index.js");
/* harmony import */ var _createGenerateClassName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../createGenerateClassName */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/createGenerateClassName/index.js");








var ServerStyleSheets = /*#__PURE__*/function () {
  function ServerStyleSheets() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, ServerStyleSheets);

    this.options = options;
  }

  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(ServerStyleSheets, [{
    key: "collect",
    value: function collect(children) {
      // This is needed in order to deduplicate the injection of CSS in the page.
      var sheetsManager = new Map(); // This is needed in order to inject the critical CSS.

      this.sheetsRegistry = new jss__WEBPACK_IMPORTED_MODULE_4__.SheetsRegistry(); // A new class name generator

      var generateClassName = (0,_createGenerateClassName__WEBPACK_IMPORTED_MODULE_5__.default)();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_StylesProvider__WEBPACK_IMPORTED_MODULE_6__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
        sheetsManager: sheetsManager,
        serverGenerateClassName: generateClassName,
        sheetsRegistry: this.sheetsRegistry
      }, this.options), children);
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.sheetsRegistry ? this.sheetsRegistry.toString() : '';
    }
  }, {
    key: "getStyleElement",
    value: function getStyleElement(props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement('style', (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
        id: 'jss-server-side',
        key: 'jss-server-side',
        dangerouslySetInnerHTML: {
          __html: this.toString()
        }
      }, props));
    }
  }]);

  return ServerStyleSheets;
}();



/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/ServerStyleSheets/index.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/ServerStyleSheets/index.js ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _ServerStyleSheets__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _ServerStyleSheets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServerStyleSheets */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/ServerStyleSheets/ServerStyleSheets.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/StylesProvider/StylesProvider.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/StylesProvider/StylesProvider.js ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sheetsManager": function() { return /* binding */ sheetsManager; },
/* harmony export */   "StylesContext": function() { return /* binding */ StylesContext; },
/* harmony export */   "default": function() { return /* binding */ StylesProvider; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/core/node_modules/@material-ui/utils/index.js");
/* harmony import */ var _createGenerateClassName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../createGenerateClassName */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/createGenerateClassName/index.js");
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jss */ "./node_modules/@material-ui/core/node_modules/jss/dist/jss.cjs.js");
/* harmony import */ var _jssPreset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../jssPreset */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/jssPreset/index.js");







 // Default JSS instance.

var jss = (0,jss__WEBPACK_IMPORTED_MODULE_4__.create)((0,_jssPreset__WEBPACK_IMPORTED_MODULE_5__.default)()); // Use a singleton or the provided one by the context.
//
// The counter-based approach doesn't tolerate any mistake.
// It's much safer to use the same counter everywhere.

var generateClassName = (0,_createGenerateClassName__WEBPACK_IMPORTED_MODULE_6__.default)(); // Exported for test purposes

var sheetsManager = new Map();
var defaultOptions = {
  disableGeneration: false,
  generateClassName: generateClassName,
  jss: jss,
  sheetsCache: null,
  sheetsManager: sheetsManager,
  sheetsRegistry: null
};
var StylesContext = react__WEBPACK_IMPORTED_MODULE_2___default().createContext(defaultOptions);

if (true) {
  StylesContext.displayName = 'StylesContext';
}

var injectFirstNode;
function StylesProvider(props) {
  var children = props.children,
      _props$injectFirst = props.injectFirst,
      injectFirst = _props$injectFirst === void 0 ? false : _props$injectFirst,
      _props$disableGenerat = props.disableGeneration,
      disableGeneration = _props$disableGenerat === void 0 ? false : _props$disableGenerat,
      localOptions = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["children", "injectFirst", "disableGeneration"]);

  var outerOptions = react__WEBPACK_IMPORTED_MODULE_2___default().useContext(StylesContext);

  var context = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, outerOptions, {
    disableGeneration: disableGeneration
  }, localOptions);

  if (true) {
    if (typeof window === 'undefined' && !context.sheetsManager) {
      console.error('Material-UI: You need to use the ServerStyleSheets API when rendering on the server.');
    }
  }

  if (true) {
    if (context.jss.options.insertionPoint && injectFirst) {
      console.error('Material-UI: You cannot use a custom insertionPoint and <StylesContext injectFirst> at the same time.');
    }
  }

  if (true) {
    if (injectFirst && localOptions.jss) {
      console.error('Material-UI: You cannot use the jss and injectFirst props at the same time.');
    }
  }

  if (!context.jss.options.insertionPoint && injectFirst && typeof window !== 'undefined') {
    if (!injectFirstNode) {
      var head = document.head;
      injectFirstNode = document.createComment('mui-inject-first');
      head.insertBefore(injectFirstNode, head.firstChild);
    }

    context.jss = (0,jss__WEBPACK_IMPORTED_MODULE_4__.create)({
      plugins: (0,_jssPreset__WEBPACK_IMPORTED_MODULE_5__.default)().plugins,
      insertionPoint: injectFirstNode
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(StylesContext.Provider, {
    value: context
  }, children);
}
 true ? StylesProvider.propTypes = {
  /**
   * Your component tree.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node.isRequired),

  /**
   * You can disable the generation of the styles with this option.
   * It can be useful when traversing the React tree outside of the HTML
   * rendering step on the server.
   * Let's say you are using react-apollo to extract all
   * the queries made by the interface server-side - you can significantly speed up the traversal with this prop.
   */
  disableGeneration: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * JSS's class name generator.
   */
  generateClassName: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override Material-UI's styles, set this prop.
   */
  injectFirst: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /**
   * JSS's instance.
   */
  jss: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   */
  serverGenerateClassName: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),

  /**
   * @ignore
   *
   * Beta feature.
   *
   * Cache for the sheets.
   */
  sheetsCache: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   *
   * The sheetsManager is used to deduplicate style sheet injection in the page.
   * It's deduplicating using the (theme, styles) couple.
   * On the server, you should provide a new instance for each request.
   */
  sheetsManager: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

  /**
   * @ignore
   *
   * Collect the sheets.
   */
  sheetsRegistry: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
} : 0;

if (true) {
   true ? StylesProvider.propTypes = (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_7__.exactProp)(StylesProvider.propTypes) : 0;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/StylesProvider/index.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/StylesProvider/index.js ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _StylesProvider__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _StylesProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StylesProvider */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/StylesProvider/StylesProvider.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _StylesProvider__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _StylesProvider__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);



/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/ThemeProvider/ThemeProvider.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/ThemeProvider/ThemeProvider.js ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/core/node_modules/@material-ui/utils/index.js");
/* harmony import */ var _useTheme_ThemeContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../useTheme/ThemeContext */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/useTheme/ThemeContext.js");
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useTheme */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/useTheme/index.js");
/* harmony import */ var _nested__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nested */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/ThemeProvider/nested.js");






 // To support composition of theme.

function mergeOuterLocalTheme(outerTheme, localTheme) {
  if (typeof localTheme === 'function') {
    var mergedTheme = localTheme(outerTheme);

    if (true) {
      if (!mergedTheme) {
        console.error(['Material-UI: You should return an object from your theme function, i.e.', '<ThemeProvider theme={() => ({})} />'].join('\n'));
      }
    }

    return mergedTheme;
  }

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, outerTheme, localTheme);
}
/**
 * This component takes a `theme` prop.
 * It makes the `theme` available down the React tree thanks to React context.
 * This component should preferably be used at **the root of your component tree**.
 */


function ThemeProvider(props) {
  var children = props.children,
      localTheme = props.theme;
  var outerTheme = (0,_useTheme__WEBPACK_IMPORTED_MODULE_3__.default)();

  if (true) {
    if (outerTheme === null && typeof localTheme === 'function') {
      console.error(['Material-UI: You are providing a theme function prop to the ThemeProvider component:', '<ThemeProvider theme={outerTheme => outerTheme} />', '', 'However, no outer theme is present.', 'Make sure a theme is already injected higher in the React tree ' + 'or provide a theme object.'].join('\n'));
    }
  }

  var theme = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(function () {
    var output = outerTheme === null ? localTheme : mergeOuterLocalTheme(outerTheme, localTheme);

    if (output != null) {
      output[_nested__WEBPACK_IMPORTED_MODULE_4__.default] = outerTheme !== null;
    }

    return output;
  }, [localTheme, outerTheme]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_useTheme_ThemeContext__WEBPACK_IMPORTED_MODULE_5__.default.Provider, {
    value: theme
  }, children);
}

 true ? ThemeProvider.propTypes = {
  /**
   * Your component tree.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node.isRequired),

  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)]).isRequired
} : 0;

if (true) {
   true ? ThemeProvider.propTypes = (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_6__.exactProp)(ThemeProvider.propTypes) : 0;
}

/* harmony default export */ __webpack_exports__["default"] = (ThemeProvider);

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/ThemeProvider/index.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/ThemeProvider/index.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _ThemeProvider__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/ThemeProvider/ThemeProvider.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/ThemeProvider/nested.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/ThemeProvider/nested.js ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
/* harmony default export */ __webpack_exports__["default"] = (hasSymbol ? Symbol.for('mui.nested') : '__THEME_NESTED__');

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/createGenerateClassName/createGenerateClassName.js":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/createGenerateClassName/createGenerateClassName.js ***!
  \********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createGenerateClassName; }
/* harmony export */ });
/* harmony import */ var _ThemeProvider_nested__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ThemeProvider/nested */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/ThemeProvider/nested.js");

/**
 * This is the list of the style rule name we use as drop in replacement for the built-in
 * pseudo classes (:checked, :disabled, :focused, etc.).
 *
 * Why do they exist in the first place?
 * These classes are used at a specificity of 2.
 * It allows them to override previously definied styles as well as
 * being untouched by simple user overrides.
 */

var pseudoClasses = ['checked', 'disabled', 'error', 'focused', 'focusVisible', 'required', 'expanded', 'selected']; // Returns a function which generates unique class names based on counters.
// When new generator function is created, rule counter is reset.
// We need to reset the rule counter for SSR for each request.
//
// It's inspired by
// https://github.com/cssinjs/jss/blob/4e6a05dd3f7b6572fdd3ab216861d9e446c20331/src/utils/createGenerateClassName.js

function createGenerateClassName() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$disableGloba = options.disableGlobal,
      disableGlobal = _options$disableGloba === void 0 ? false : _options$disableGloba,
      _options$productionPr = options.productionPrefix,
      productionPrefix = _options$productionPr === void 0 ? 'jss' : _options$productionPr,
      _options$seed = options.seed,
      seed = _options$seed === void 0 ? '' : _options$seed;
  var seedPrefix = seed === '' ? '' : "".concat(seed, "-");
  var ruleCounter = 0;

  var getNextCounterId = function getNextCounterId() {
    ruleCounter += 1;

    if (true) {
      if (ruleCounter >= 1e10) {
        console.warn(['Material-UI: You might have a memory leak.', 'The ruleCounter is not supposed to grow that much.'].join(''));
      }
    }

    return ruleCounter;
  };

  return function (rule, styleSheet) {
    var name = styleSheet.options.name; // Is a global static MUI style?

    if (name && name.indexOf('Mui') === 0 && !styleSheet.options.link && !disableGlobal) {
      // We can use a shorthand class name, we never use the keys to style the components.
      if (pseudoClasses.indexOf(rule.key) !== -1) {
        return "Mui-".concat(rule.key);
      }

      var prefix = "".concat(seedPrefix).concat(name, "-").concat(rule.key);

      if (!styleSheet.options.theme[_ThemeProvider_nested__WEBPACK_IMPORTED_MODULE_0__.default] || seed !== '') {
        return prefix;
      }

      return "".concat(prefix, "-").concat(getNextCounterId());
    }

    if (false) {}

    var suffix = "".concat(rule.key, "-").concat(getNextCounterId()); // Help with debuggability.

    if (styleSheet.options.classNamePrefix) {
      return "".concat(seedPrefix).concat(styleSheet.options.classNamePrefix, "-").concat(suffix);
    }

    return "".concat(seedPrefix).concat(suffix);
  };
}

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/createGenerateClassName/index.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/createGenerateClassName/index.js ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _createGenerateClassName__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _createGenerateClassName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createGenerateClassName */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/createGenerateClassName/createGenerateClassName.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/createStyles/createStyles.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/createStyles/createStyles.js ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createStyles; }
/* harmony export */ });
function createStyles(styles) {
  return styles;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/createStyles/index.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/createStyles/index.js ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _createStyles__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _createStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createStyles */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/createStyles/createStyles.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/getStylesCreator/getStylesCreator.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/getStylesCreator/getStylesCreator.js ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getStylesCreator; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/core/node_modules/@material-ui/utils/index.js");
/* harmony import */ var _noopTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./noopTheme */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/getStylesCreator/noopTheme.js");




function getStylesCreator(stylesOrCreator) {
  var themingEnabled = typeof stylesOrCreator === 'function';

  if (true) {
    if ((0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__.default)(stylesOrCreator) !== 'object' && !themingEnabled) {
      console.error(['Material-UI: The `styles` argument provided is invalid.', 'You need to provide a function generating the styles or a styles object.'].join('\n'));
    }
  }

  return {
    create: function create(theme, name) {
      var styles;

      try {
        styles = themingEnabled ? stylesOrCreator(theme) : stylesOrCreator;
      } catch (err) {
        if (true) {
          if (themingEnabled === true && theme === _noopTheme__WEBPACK_IMPORTED_MODULE_2__.default) {
            // TODO: prepend error message/name instead
            console.error(['Material-UI: The `styles` argument provided is invalid.', 'You are providing a function without a theme in the context.', 'One of the parent elements needs to use a ThemeProvider.'].join('\n'));
          }
        }

        throw err;
      }

      if (!name || !theme.overrides || !theme.overrides[name]) {
        return styles;
      }

      var overrides = theme.overrides[name];

      var stylesWithOverrides = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, styles);

      Object.keys(overrides).forEach(function (key) {
        if (true) {
          if (!stylesWithOverrides[key]) {
            console.warn(['Material-UI: You are trying to override a style that does not exist.', "Fix the `".concat(key, "` key of `theme.overrides.").concat(name, "`.")].join('\n'));
          }
        }

        stylesWithOverrides[key] = (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_3__.deepmerge)(stylesWithOverrides[key], overrides[key]);
      });
      return stylesWithOverrides;
    },
    options: {}
  };
}

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/getStylesCreator/index.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/getStylesCreator/index.js ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _getStylesCreator__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _getStylesCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getStylesCreator */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/getStylesCreator/getStylesCreator.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/getStylesCreator/noopTheme.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/getStylesCreator/noopTheme.js ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// We use the same empty object to ref count the styles that don't need a theme object.
var noopTheme = {};
/* harmony default export */ __webpack_exports__["default"] = (noopTheme);

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/getThemeProps/getThemeProps.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/getThemeProps/getThemeProps.js ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getThemeProps; }
/* harmony export */ });
/* eslint-disable no-restricted-syntax */
function getThemeProps(params) {
  var theme = params.theme,
      name = params.name,
      props = params.props;

  if (!theme || !theme.props || !theme.props[name]) {
    return props;
  } // Resolve default props, code borrow from React source.
  // https://github.com/facebook/react/blob/15a8f031838a553e41c0b66eb1bcf1da8448104d/packages/react/src/ReactElement.js#L221


  var defaultProps = theme.props[name];
  var propName;

  for (propName in defaultProps) {
    if (props[propName] === undefined) {
      props[propName] = defaultProps[propName];
    }
  }

  return props;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/getThemeProps/index.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/getThemeProps/index.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _getThemeProps__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _getThemeProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getThemeProps */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/getThemeProps/getThemeProps.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/jssPreset/index.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/jssPreset/index.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _jssPreset__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _jssPreset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jssPreset */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/jssPreset/jssPreset.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/jssPreset/jssPreset.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/jssPreset/jssPreset.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ jssPreset; }
/* harmony export */ });
/* harmony import */ var jss_plugin_rule_value_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jss-plugin-rule-value-function */ "./node_modules/@material-ui/core/node_modules/jss-plugin-rule-value-function/dist/jss-plugin-rule-value-function.cjs.js");
/* harmony import */ var jss_plugin_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jss-plugin-global */ "./node_modules/@material-ui/core/node_modules/jss-plugin-global/dist/jss-plugin-global.cjs.js");
/* harmony import */ var jss_plugin_nested__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jss-plugin-nested */ "./node_modules/@material-ui/core/node_modules/jss-plugin-nested/dist/jss-plugin-nested.cjs.js");
/* harmony import */ var jss_plugin_camel_case__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jss-plugin-camel-case */ "./node_modules/@material-ui/core/node_modules/jss-plugin-camel-case/dist/jss-plugin-camel-case.cjs.js");
/* harmony import */ var jss_plugin_default_unit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jss-plugin-default-unit */ "./node_modules/@material-ui/core/node_modules/jss-plugin-default-unit/dist/jss-plugin-default-unit.cjs.js");
/* harmony import */ var jss_plugin_vendor_prefixer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jss-plugin-vendor-prefixer */ "./node_modules/@material-ui/core/node_modules/jss-plugin-vendor-prefixer/dist/jss-plugin-vendor-prefixer.cjs.js");
/* harmony import */ var jss_plugin_props_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jss-plugin-props-sort */ "./node_modules/@material-ui/core/node_modules/jss-plugin-props-sort/dist/jss-plugin-props-sort.cjs.js");






 // Subset of jss-preset-default with only the plugins the Material-UI components are using.

function jssPreset() {
  return {
    plugins: [(0,jss_plugin_rule_value_function__WEBPACK_IMPORTED_MODULE_0__.default)(), (0,jss_plugin_global__WEBPACK_IMPORTED_MODULE_1__.default)(), (0,jss_plugin_nested__WEBPACK_IMPORTED_MODULE_2__.default)(), (0,jss_plugin_camel_case__WEBPACK_IMPORTED_MODULE_3__.default)(), (0,jss_plugin_default_unit__WEBPACK_IMPORTED_MODULE_4__.default)(), // Disable the vendor prefixer server-side, it does nothing.
    // This way, we can get a performance boost.
    // In the documentation, we are using `autoprefixer` to solve this problem.
    typeof window === 'undefined' ? null : (0,jss_plugin_vendor_prefixer__WEBPACK_IMPORTED_MODULE_5__.default)(), (0,jss_plugin_props_sort__WEBPACK_IMPORTED_MODULE_6__.default)()]
  };
}

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/makeStyles/index.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/makeStyles/index.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _makeStyles__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeStyles */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/makeStyles/makeStyles.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/makeStyles/indexCounter.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/makeStyles/indexCounter.js ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "increment": function() { return /* binding */ increment; }
/* harmony export */ });
/* eslint-disable import/prefer-default-export */
// Global index counter to preserve source order.
// We create the style sheet during the creation of the component,
// children are handled after the parents, so the order of style elements would be parent->child.
// It is a problem though when a parent passes a className
// which needs to override any child's styles.
// StyleSheet of the child has a higher specificity, because of the source order.
// So our solution is to render sheets them in the reverse order child->sheet, so
// that parent has a higher specificity.
var indexCounter = -1e9;
function increment() {
  indexCounter += 1;

  if (true) {
    if (indexCounter >= 0) {
      console.warn(['Material-UI: You might have a memory leak.', 'The indexCounter is not supposed to grow that much.'].join('\n'));
    }
  }

  return indexCounter;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/makeStyles/makeStyles.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/makeStyles/makeStyles.js ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ makeStyles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jss */ "./node_modules/@material-ui/core/node_modules/jss/dist/jss.cjs.js");
/* harmony import */ var _mergeClasses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mergeClasses */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/mergeClasses/index.js");
/* harmony import */ var _multiKeyStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./multiKeyStore */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/makeStyles/multiKeyStore.js");
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../useTheme */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/useTheme/index.js");
/* harmony import */ var _StylesProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../StylesProvider */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/StylesProvider/index.js");
/* harmony import */ var _indexCounter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./indexCounter */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/makeStyles/indexCounter.js");
/* harmony import */ var _getStylesCreator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../getStylesCreator */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/getStylesCreator/index.js");
/* harmony import */ var _getStylesCreator_noopTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../getStylesCreator/noopTheme */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/getStylesCreator/noopTheme.js");












function getClasses(_ref, classes, Component) {
  var state = _ref.state,
      stylesOptions = _ref.stylesOptions;

  if (stylesOptions.disableGeneration) {
    return classes || {};
  }

  if (!state.cacheClasses) {
    state.cacheClasses = {
      // Cache for the finalized classes value.
      value: null,
      // Cache for the last used classes prop pointer.
      lastProp: null,
      // Cache for the last used rendered classes pointer.
      lastJSS: {}
    };
  } // Tracks if either the rendered classes or classes prop has changed,
  // requiring the generation of a new finalized classes object.


  var generate = false;

  if (state.classes !== state.cacheClasses.lastJSS) {
    state.cacheClasses.lastJSS = state.classes;
    generate = true;
  }

  if (classes !== state.cacheClasses.lastProp) {
    state.cacheClasses.lastProp = classes;
    generate = true;
  }

  if (generate) {
    state.cacheClasses.value = (0,_mergeClasses__WEBPACK_IMPORTED_MODULE_3__.default)({
      baseClasses: state.cacheClasses.lastJSS,
      newClasses: classes,
      Component: Component
    });
  }

  return state.cacheClasses.value;
}

function attach(_ref2, props) {
  var state = _ref2.state,
      theme = _ref2.theme,
      stylesOptions = _ref2.stylesOptions,
      stylesCreator = _ref2.stylesCreator,
      name = _ref2.name;

  if (stylesOptions.disableGeneration) {
    return;
  }

  var sheetManager = _multiKeyStore__WEBPACK_IMPORTED_MODULE_4__.default.get(stylesOptions.sheetsManager, stylesCreator, theme);

  if (!sheetManager) {
    sheetManager = {
      refs: 0,
      staticSheet: null,
      dynamicStyles: null
    };
    _multiKeyStore__WEBPACK_IMPORTED_MODULE_4__.default.set(stylesOptions.sheetsManager, stylesCreator, theme, sheetManager);
  }

  var options = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, stylesCreator.options, stylesOptions, {
    theme: theme,
    flip: typeof stylesOptions.flip === 'boolean' ? stylesOptions.flip : theme.direction === 'rtl'
  });

  options.generateId = options.serverGenerateClassName || options.generateClassName;
  var sheetsRegistry = stylesOptions.sheetsRegistry;

  if (sheetManager.refs === 0) {
    var staticSheet;

    if (stylesOptions.sheetsCache) {
      staticSheet = _multiKeyStore__WEBPACK_IMPORTED_MODULE_4__.default.get(stylesOptions.sheetsCache, stylesCreator, theme);
    }

    var styles = stylesCreator.create(theme, name);

    if (!staticSheet) {
      staticSheet = stylesOptions.jss.createStyleSheet(styles, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
        link: false
      }, options));
      staticSheet.attach();

      if (stylesOptions.sheetsCache) {
        _multiKeyStore__WEBPACK_IMPORTED_MODULE_4__.default.set(stylesOptions.sheetsCache, stylesCreator, theme, staticSheet);
      }
    }

    if (sheetsRegistry) {
      sheetsRegistry.add(staticSheet);
    }

    sheetManager.staticSheet = staticSheet;
    sheetManager.dynamicStyles = (0,jss__WEBPACK_IMPORTED_MODULE_5__.getDynamicStyles)(styles);
  }

  if (sheetManager.dynamicStyles) {
    var dynamicSheet = stylesOptions.jss.createStyleSheet(sheetManager.dynamicStyles, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({
      link: true
    }, options));
    dynamicSheet.update(props);
    dynamicSheet.attach();
    state.dynamicSheet = dynamicSheet;
    state.classes = (0,_mergeClasses__WEBPACK_IMPORTED_MODULE_3__.default)({
      baseClasses: sheetManager.staticSheet.classes,
      newClasses: dynamicSheet.classes
    });

    if (sheetsRegistry) {
      sheetsRegistry.add(dynamicSheet);
    }
  } else {
    state.classes = sheetManager.staticSheet.classes;
  }

  sheetManager.refs += 1;
}

function update(_ref3, props) {
  var state = _ref3.state;

  if (state.dynamicSheet) {
    state.dynamicSheet.update(props);
  }
}

function detach(_ref4) {
  var state = _ref4.state,
      theme = _ref4.theme,
      stylesOptions = _ref4.stylesOptions,
      stylesCreator = _ref4.stylesCreator;

  if (stylesOptions.disableGeneration) {
    return;
  }

  var sheetManager = _multiKeyStore__WEBPACK_IMPORTED_MODULE_4__.default.get(stylesOptions.sheetsManager, stylesCreator, theme);
  sheetManager.refs -= 1;
  var sheetsRegistry = stylesOptions.sheetsRegistry;

  if (sheetManager.refs === 0) {
    _multiKeyStore__WEBPACK_IMPORTED_MODULE_4__.default.delete(stylesOptions.sheetsManager, stylesCreator, theme);
    stylesOptions.jss.removeStyleSheet(sheetManager.staticSheet);

    if (sheetsRegistry) {
      sheetsRegistry.remove(sheetManager.staticSheet);
    }
  }

  if (state.dynamicSheet) {
    stylesOptions.jss.removeStyleSheet(state.dynamicSheet);

    if (sheetsRegistry) {
      sheetsRegistry.remove(state.dynamicSheet);
    }
  }
}

function useSynchronousEffect(func, values) {
  var key = react__WEBPACK_IMPORTED_MODULE_2___default().useRef([]);
  var output; // Store "generation" key. Just returns a new object every time

  var currentKey = react__WEBPACK_IMPORTED_MODULE_2___default().useMemo(function () {
    return {};
  }, values); // eslint-disable-line react-hooks/exhaustive-deps
  // "the first render", or "memo dropped the value"

  if (key.current !== currentKey) {
    key.current = currentKey;
    output = func();
  }

  react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(function () {
    return function () {
      if (output) {
        output();
      }
    };
  }, [currentKey] // eslint-disable-line react-hooks/exhaustive-deps
  );
}

function makeStyles(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var name = options.name,
      classNamePrefixOption = options.classNamePrefix,
      Component = options.Component,
      _options$defaultTheme = options.defaultTheme,
      defaultTheme = _options$defaultTheme === void 0 ? _getStylesCreator_noopTheme__WEBPACK_IMPORTED_MODULE_6__.default : _options$defaultTheme,
      stylesOptions2 = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(options, ["name", "classNamePrefix", "Component", "defaultTheme"]);

  var stylesCreator = (0,_getStylesCreator__WEBPACK_IMPORTED_MODULE_7__.default)(stylesOrCreator);
  var classNamePrefix = name || classNamePrefixOption || 'makeStyles';
  stylesCreator.options = {
    index: (0,_indexCounter__WEBPACK_IMPORTED_MODULE_8__.increment)(),
    name: name,
    meta: classNamePrefix,
    classNamePrefix: classNamePrefix
  };

  var useStyles = function useStyles() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var theme = (0,_useTheme__WEBPACK_IMPORTED_MODULE_9__.default)() || defaultTheme;

    var stylesOptions = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, react__WEBPACK_IMPORTED_MODULE_2___default().useContext(_StylesProvider__WEBPACK_IMPORTED_MODULE_10__.StylesContext), stylesOptions2);

    var instance = react__WEBPACK_IMPORTED_MODULE_2___default().useRef();
    var shouldUpdate = react__WEBPACK_IMPORTED_MODULE_2___default().useRef();
    useSynchronousEffect(function () {
      var current = {
        name: name,
        state: {},
        stylesCreator: stylesCreator,
        stylesOptions: stylesOptions,
        theme: theme
      };
      attach(current, props);
      shouldUpdate.current = false;
      instance.current = current;
      return function () {
        detach(current);
      };
    }, [theme, stylesCreator]);
    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(function () {
      if (shouldUpdate.current) {
        update(instance.current, props);
      }

      shouldUpdate.current = true;
    });
    var classes = getClasses(instance.current, props.classes, Component);

    if (true) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      react__WEBPACK_IMPORTED_MODULE_2___default().useDebugValue(classes);
    }

    return classes;
  };

  return useStyles;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/makeStyles/multiKeyStore.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/makeStyles/multiKeyStore.js ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Used https://github.com/thinkloop/multi-key-cache as inspiration
var multiKeyStore = {
  set: function set(cache, key1, key2, value) {
    var subCache = cache.get(key1);

    if (!subCache) {
      subCache = new Map();
      cache.set(key1, subCache);
    }

    subCache.set(key2, value);
  },
  get: function get(cache, key1, key2) {
    var subCache = cache.get(key1);
    return subCache ? subCache.get(key2) : undefined;
  },
  delete: function _delete(cache, key1, key2) {
    var subCache = cache.get(key1);
    subCache.delete(key2);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (multiKeyStore);

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/mergeClasses/index.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/mergeClasses/index.js ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _mergeClasses__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _mergeClasses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mergeClasses */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/mergeClasses/mergeClasses.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/mergeClasses/mergeClasses.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/mergeClasses/mergeClasses.js ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ mergeClasses; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/core/node_modules/@material-ui/utils/index.js");


function mergeClasses() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var baseClasses = options.baseClasses,
      newClasses = options.newClasses,
      Component = options.Component;

  if (!newClasses) {
    return baseClasses;
  }

  var nextClasses = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, baseClasses);

  if (true) {
    if (typeof newClasses === 'string') {
      console.error(["Material-UI: The value `".concat(newClasses, "` ") + "provided to the classes prop of ".concat((0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_1__.getDisplayName)(Component), " is incorrect."), 'You might want to use the className prop instead.'].join('\n'));
      return baseClasses;
    }
  }

  Object.keys(newClasses).forEach(function (key) {
    if (true) {
      if (!baseClasses[key] && newClasses[key]) {
        console.error(["Material-UI: The key `".concat(key, "` ") + "provided to the classes prop is not implemented in ".concat((0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_1__.getDisplayName)(Component), "."), "You can only override one of the following: ".concat(Object.keys(baseClasses).join(','), ".")].join('\n'));
      }

      if (newClasses[key] && typeof newClasses[key] !== 'string') {
        console.error(["Material-UI: The key `".concat(key, "` ") + "provided to the classes prop is not valid for ".concat((0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_1__.getDisplayName)(Component), "."), "You need to provide a non empty string instead of: ".concat(newClasses[key], ".")].join('\n'));
      }
    }

    if (newClasses[key]) {
      nextClasses[key] = "".concat(baseClasses[key], " ").concat(newClasses[key]);
    }
  });
  return nextClasses;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/styled/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/styled/index.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _styled__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styled */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/styled/styled.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/styled/styled.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/styled/styled.js ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ styled; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/core/node_modules/@material-ui/utils/index.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hoist-non-react-statics */ "hoist-non-react-statics");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../makeStyles */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/makeStyles/index.js");









function omit(input, fields) {
  var output = {};
  Object.keys(input).forEach(function (prop) {
    if (fields.indexOf(prop) === -1) {
      output[prop] = input[prop];
    }
  });
  return output;
} // styled-components's API removes the mapping between components and styles.
// Using components as a low-level styling construct can be simpler.


function styled(Component) {
  var componentCreator = function componentCreator(style) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var name = options.name,
        stylesOptions = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(options, ["name"]);

    if ( true && Component === undefined) {
      throw new Error(['You are calling styled(Component)(style) with an undefined component.', 'You may have forgotten to import it.'].join('\n'));
    }

    var classNamePrefix = name;

    if (true) {
      if (!name) {
        // Provide a better DX outside production.
        var displayName = (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_6__.getDisplayName)(Component);

        if (displayName !== undefined) {
          classNamePrefix = displayName;
        }
      }
    }

    var stylesOrCreator = typeof style === 'function' ? function (theme) {
      return {
        root: function root(props) {
          return style((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
            theme: theme
          }, props));
        }
      };
    } : {
      root: style
    };
    var useStyles = (0,_makeStyles__WEBPACK_IMPORTED_MODULE_7__.default)(stylesOrCreator, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      Component: Component,
      name: name || Component.displayName,
      classNamePrefix: classNamePrefix
    }, stylesOptions));
    var filterProps;
    var propTypes = {};

    if (style.filterProps) {
      filterProps = style.filterProps;
      delete style.filterProps;
    }
    /* eslint-disable react/forbid-foreign-prop-types */


    if (style.propTypes) {
      propTypes = style.propTypes;
      delete style.propTypes;
    }
    /* eslint-enable react/forbid-foreign-prop-types */


    var StyledComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().forwardRef(function StyledComponent(props, ref) {
      var children = props.children,
          classNameProp = props.className,
          clone = props.clone,
          ComponentProp = props.component,
          other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["children", "className", "clone", "component"]);

      var classes = useStyles(props);
      var className = clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes.root, classNameProp);
      var spread = other;

      if (filterProps) {
        spread = omit(spread, filterProps);
      }

      if (clone) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().cloneElement(children, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
          className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(children.props.className, className)
        }, spread));
      }

      if (typeof children === 'function') {
        return children((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
          className: className
        }, spread));
      }

      var FinalComponent = ComponentProp || Component;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(FinalComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
        ref: ref,
        className: className
      }, spread), children);
    });
     true ? StyledComponent.propTypes = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      /**
       * A render function or node.
       */
      children: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().node), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)]),

      /**
       * @ignore
       */
      className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),

      /**
       * If `true`, the component will recycle it's children HTML element.
       * It's using `React.cloneElement` internally.
       *
       * This prop will be deprecated and removed in v5
       */
      clone: (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_6__.chainPropTypes)((prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool), function (props) {
        if (props.clone && props.component) {
          return new Error('You can not use the clone and component prop at the same time.');
        }

        return null;
      }),

      /**
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      component: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().elementType)
    }, propTypes) : 0;

    if (true) {
      StyledComponent.displayName = "Styled(".concat(classNamePrefix, ")");
    }

    hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5___default()(StyledComponent, Component);
    return StyledComponent;
  };

  return componentCreator;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/useTheme/ThemeContext.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/useTheme/ThemeContext.js ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ThemeContext = react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null);

if (true) {
  ThemeContext.displayName = 'ThemeContext';
}

/* harmony default export */ __webpack_exports__["default"] = (ThemeContext);

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/useTheme/index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/useTheme/index.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _useTheme__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useTheme */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/useTheme/useTheme.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/useTheme/useTheme.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/useTheme/useTheme.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useTheme; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ThemeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ThemeContext */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/useTheme/ThemeContext.js");


function useTheme() {
  var theme = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(_ThemeContext__WEBPACK_IMPORTED_MODULE_1__.default);

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_0___default().useDebugValue(theme);
  }

  return theme;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/withStyles/index.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/withStyles/index.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _withStyles__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withStyles */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/withStyles/withStyles.js");


/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/withStyles/withStyles.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/withStyles/withStyles.js ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hoist-non-react-statics */ "hoist-non-react-statics");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/core/node_modules/@material-ui/utils/index.js");
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../makeStyles */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/makeStyles/index.js");
/* harmony import */ var _getThemeProps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../getThemeProps */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/getThemeProps/index.js");
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../useTheme */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/useTheme/index.js");








 // Link a style sheet with a component.
// It does not modify the component passed to it;
// instead, it returns a new component, with a `classes` property.

var withStyles = function withStyles(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (Component) {
    var defaultTheme = options.defaultTheme,
        _options$withTheme = options.withTheme,
        withTheme = _options$withTheme === void 0 ? false : _options$withTheme,
        name = options.name,
        stylesOptions = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(options, ["defaultTheme", "withTheme", "name"]);

    if (true) {
      if (Component === undefined) {
        throw new Error(['You are calling withStyles(styles)(Component) with an undefined component.', 'You may have forgotten to import it.'].join('\n'));
      }
    }

    var classNamePrefix = name;

    if (true) {
      if (!name) {
        // Provide a better DX outside production.
        var displayName = (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__.getDisplayName)(Component);

        if (displayName !== undefined) {
          classNamePrefix = displayName;
        }
      }
    }

    var useStyles = (0,_makeStyles__WEBPACK_IMPORTED_MODULE_6__.default)(stylesOrCreator, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      defaultTheme: defaultTheme,
      Component: Component,
      name: name || Component.displayName,
      classNamePrefix: classNamePrefix
    }, stylesOptions));
    var WithStyles = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().forwardRef(function WithStyles(props, ref) {
      var classesProp = props.classes,
          innerRef = props.innerRef,
          other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["classes", "innerRef"]); // The wrapper receives only user supplied props, which could be a subset of
      // the actual props Component might receive due to merging with defaultProps.
      // So copying it here would give us the same result in the wrapper as well.


      var classes = useStyles((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, Component.defaultProps, props));
      var theme;
      var more = other;

      if (typeof name === 'string' || withTheme) {
        // name and withTheme are invariant in the outer scope
        // eslint-disable-next-line react-hooks/rules-of-hooks
        theme = (0,_useTheme__WEBPACK_IMPORTED_MODULE_7__.default)() || defaultTheme;

        if (name) {
          more = (0,_getThemeProps__WEBPACK_IMPORTED_MODULE_8__.default)({
            theme: theme,
            name: name,
            props: other
          });
        } // Provide the theme to the wrapped component.
        // So we don't have to use the `withTheme()` Higher-order Component.


        if (withTheme && !more.theme) {
          more.theme = theme;
        }
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
        ref: innerRef || ref,
        classes: classes
      }, more));
    });
     true ? WithStyles.propTypes = {
      /**
       * Override or extend the styles applied to the component.
       */
      classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),

      /**
       * Use that prop to pass a ref to the decorated component.
       * @deprecated
       */
      innerRef: (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__.chainPropTypes)(prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)]), function (props) {
        if (props.innerRef == null) {
          return null;
        }

        return null; // return new Error(
        //   'Material-UI: The `innerRef` prop is deprecated and will be removed in v5. ' +
        //     'Refs are now automatically forwarded to the inner component.',
        // );
      })
    } : 0;

    if (true) {
      WithStyles.displayName = "WithStyles(".concat((0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__.getDisplayName)(Component), ")");
    }

    hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default()(WithStyles, Component);

    if (true) {
      // Exposed for test purposes.
      WithStyles.Naked = Component;
      WithStyles.options = options;
      WithStyles.useStyles = useStyles;
    }

    return WithStyles;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (withStyles);

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/withTheme/index.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/withTheme/index.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _withTheme__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _withTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withTheme */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/withTheme/withTheme.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _withTheme__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _withTheme__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);



/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/withTheme/withTheme.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/withTheme/withTheme.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "withThemeCreator": function() { return /* binding */ withThemeCreator; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hoist-non-react-statics */ "hoist-non-react-statics");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/core/node_modules/@material-ui/utils/index.js");
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../useTheme */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/useTheme/index.js");







function withThemeCreator() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaultTheme = options.defaultTheme;

  var withTheme = function withTheme(Component) {
    if (true) {
      if (Component === undefined) {
        throw new Error(['You are calling withTheme(Component) with an undefined component.', 'You may have forgotten to import it.'].join('\n'));
      }
    }

    var WithTheme = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().forwardRef(function WithTheme(props, ref) {
      var innerRef = props.innerRef,
          other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["innerRef"]);

      var theme = (0,_useTheme__WEBPACK_IMPORTED_MODULE_5__.default)() || defaultTheme;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
        theme: theme,
        ref: innerRef || ref
      }, other));
    });
     true ? WithTheme.propTypes = {
      /**
       * Use that prop to pass a ref to the decorated component.
       * @deprecated
       */
      innerRef: (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_6__.chainPropTypes)(prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)]), function (props) {
        if (props.innerRef == null) {
          return null;
        }

        return new Error('Material-UI: The `innerRef` prop is deprecated and will be removed in v5. ' + 'Refs are now automatically forwarded to the inner component.');
      })
    } : 0;

    if (true) {
      WithTheme.displayName = "WithTheme(".concat((0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_6__.getDisplayName)(Component), ")");
    }

    hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default()(WithTheme, Component);

    if (true) {
      // Exposed for test purposes.
      WithTheme.Naked = Component;
    }

    return WithTheme;
  };

  return withTheme;
} // Provide the theme object as a prop to the input component.
// It's an alternative API to useTheme().
// We encourage the usage of useTheme() where possible.

var withTheme = withThemeCreator();
/* harmony default export */ __webpack_exports__["default"] = (withTheme);

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/styles/index.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license Material-UI v4.11.4
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  createGenerateClassName: true,
  createStyles: true,
  getThemeProps: true,
  jssPreset: true,
  makeStyles: true,
  mergeClasses: true,
  ServerStyleSheets: true,
  styled: true,
  StylesProvider: true,
  ThemeProvider: true,
  useTheme: true,
  withStyles: true,
  withTheme: true
};
Object.defineProperty(exports, "createGenerateClassName", ({
  enumerable: true,
  get: function get() {
    return _createGenerateClassName.default;
  }
}));
Object.defineProperty(exports, "createStyles", ({
  enumerable: true,
  get: function get() {
    return _createStyles.default;
  }
}));
Object.defineProperty(exports, "getThemeProps", ({
  enumerable: true,
  get: function get() {
    return _getThemeProps.default;
  }
}));
Object.defineProperty(exports, "jssPreset", ({
  enumerable: true,
  get: function get() {
    return _jssPreset.default;
  }
}));
Object.defineProperty(exports, "makeStyles", ({
  enumerable: true,
  get: function get() {
    return _makeStyles.default;
  }
}));
Object.defineProperty(exports, "mergeClasses", ({
  enumerable: true,
  get: function get() {
    return _mergeClasses.default;
  }
}));
Object.defineProperty(exports, "ServerStyleSheets", ({
  enumerable: true,
  get: function get() {
    return _ServerStyleSheets.default;
  }
}));
Object.defineProperty(exports, "styled", ({
  enumerable: true,
  get: function get() {
    return _styled.default;
  }
}));
Object.defineProperty(exports, "StylesProvider", ({
  enumerable: true,
  get: function get() {
    return _StylesProvider.default;
  }
}));
Object.defineProperty(exports, "ThemeProvider", ({
  enumerable: true,
  get: function get() {
    return _ThemeProvider.default;
  }
}));
Object.defineProperty(exports, "useTheme", ({
  enumerable: true,
  get: function get() {
    return _useTheme.default;
  }
}));
Object.defineProperty(exports, "withStyles", ({
  enumerable: true,
  get: function get() {
    return _withStyles.default;
  }
}));
Object.defineProperty(exports, "withTheme", ({
  enumerable: true,
  get: function get() {
    return _withTheme.default;
  }
}));

var _utils = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/core/node_modules/@material-ui/utils/index.js");

var _createGenerateClassName = _interopRequireWildcard(__webpack_require__(/*! ./createGenerateClassName */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/createGenerateClassName/index.js"));

Object.keys(_createGenerateClassName).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _createGenerateClassName[key];
    }
  });
});

var _createStyles = _interopRequireWildcard(__webpack_require__(/*! ./createStyles */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/createStyles/index.js"));

Object.keys(_createStyles).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _createStyles[key];
    }
  });
});

var _getThemeProps = _interopRequireWildcard(__webpack_require__(/*! ./getThemeProps */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/getThemeProps/index.js"));

Object.keys(_getThemeProps).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _getThemeProps[key];
    }
  });
});

var _jssPreset = _interopRequireWildcard(__webpack_require__(/*! ./jssPreset */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/jssPreset/index.js"));

Object.keys(_jssPreset).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _jssPreset[key];
    }
  });
});

var _makeStyles = _interopRequireWildcard(__webpack_require__(/*! ./makeStyles */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/makeStyles/index.js"));

Object.keys(_makeStyles).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _makeStyles[key];
    }
  });
});

var _mergeClasses = _interopRequireWildcard(__webpack_require__(/*! ./mergeClasses */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/mergeClasses/index.js"));

Object.keys(_mergeClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _mergeClasses[key];
    }
  });
});

var _ServerStyleSheets = _interopRequireWildcard(__webpack_require__(/*! ./ServerStyleSheets */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/ServerStyleSheets/index.js"));

Object.keys(_ServerStyleSheets).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ServerStyleSheets[key];
    }
  });
});

var _styled = _interopRequireWildcard(__webpack_require__(/*! ./styled */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/styled/index.js"));

Object.keys(_styled).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _styled[key];
    }
  });
});

var _StylesProvider = _interopRequireWildcard(__webpack_require__(/*! ./StylesProvider */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/StylesProvider/index.js"));

Object.keys(_StylesProvider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _StylesProvider[key];
    }
  });
});

var _ThemeProvider = _interopRequireWildcard(__webpack_require__(/*! ./ThemeProvider */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/ThemeProvider/index.js"));

Object.keys(_ThemeProvider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ThemeProvider[key];
    }
  });
});

var _useTheme = _interopRequireWildcard(__webpack_require__(/*! ./useTheme */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/useTheme/index.js"));

Object.keys(_useTheme).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useTheme[key];
    }
  });
});

var _withStyles = _interopRequireWildcard(__webpack_require__(/*! ./withStyles */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/withStyles/index.js"));

Object.keys(_withStyles).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _withStyles[key];
    }
  });
});

var _withTheme = _interopRequireWildcard(__webpack_require__(/*! ./withTheme */ "./node_modules/@material-ui/core/node_modules/@material-ui/styles/esm/withTheme/index.js"));

Object.keys(_withTheme).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _withTheme[key];
    }
  });
});

/* eslint-disable import/export */

/* Warning if there are several instances of @material-ui/styles */
if ( true && typeof window !== 'undefined') {
  _utils.ponyfillGlobal['__@material-ui/styles-init__'] = _utils.ponyfillGlobal['__@material-ui/styles-init__'] || 0;

  if (_utils.ponyfillGlobal['__@material-ui/styles-init__'] === 1) {
    console.warn(['It looks like there are several instances of `@material-ui/styles` initialized in this application.', 'This may cause theme propagation issues, broken class names, ' + 'specificity issues, and makes your application bigger without a good reason.', '', 'See https://material-ui.com/r/styles-instance-warning for more info.'].join('\n'));
  }

  _utils.ponyfillGlobal['__@material-ui/styles-init__'] += 1;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/utils/HTMLElementType.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/utils/HTMLElementType.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = HTMLElementType;

function HTMLElementType(props, propName, componentName, location, propFullName) {
  if (false) {}

  var propValue = props[propName];
  var safePropName = propFullName || propName;

  if (propValue == null) {
    return null;
  }

  if (propValue && propValue.nodeType !== 1) {
    return new Error("Invalid ".concat(location, " `").concat(safePropName, "` supplied to `").concat(componentName, "`. ") + "Expected an HTMLElement.");
  }

  return null;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/utils/chainPropTypes.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/utils/chainPropTypes.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = chainPropTypes;

function chainPropTypes(propType1, propType2) {
  if (false) {}

  return function validate() {
    return propType1.apply(void 0, arguments) || propType2.apply(void 0, arguments);
  };
}

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/utils/deepmerge.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/utils/deepmerge.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isPlainObject = isPlainObject;
exports.default = deepmerge;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

function isPlainObject(item) {
  return item && (0, _typeof2.default)(item) === 'object' && item.constructor === Object;
}

function deepmerge(target, source) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    clone: true
  };
  var output = options.clone ? (0, _extends2.default)({}, target) : target;

  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach(function (key) {
      // Avoid prototype pollution
      if (key === '__proto__') {
        return;
      }

      if (isPlainObject(source[key]) && key in target) {
        output[key] = deepmerge(target[key], source[key], options);
      } else {
        output[key] = source[key];
      }
    });
  }

  return output;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/utils/elementAcceptingRef.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/utils/elementAcceptingRef.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _chainPropTypes = _interopRequireDefault(__webpack_require__(/*! ./chainPropTypes */ "./node_modules/@material-ui/core/node_modules/@material-ui/utils/chainPropTypes.js"));

function isClassComponent(elementType) {
  // elementType.prototype?.isReactComponent
  var _elementType$prototyp = elementType.prototype,
      prototype = _elementType$prototyp === void 0 ? {} : _elementType$prototyp;
  return Boolean(prototype.isReactComponent);
}

function acceptingRef(props, propName, componentName, location, propFullName) {
  var element = props[propName];
  var safePropName = propFullName || propName;

  if (element == null) {
    return null;
  }

  var warningHint;
  var elementType = element.type;
  /**
   * Blacklisting instead of whitelisting
   *
   * Blacklisting will miss some components, such as React.Fragment. Those will at least
   * trigger a warning in React.
   * We can't whitelist because there is no safe way to detect React.forwardRef
   * or class components. "Safe" means there's no public API.
   *
   */

  if (typeof elementType === 'function' && !isClassComponent(elementType)) {
    warningHint = 'Did you accidentally use a plain function component for an element instead?';
  }

  if (warningHint !== undefined) {
    return new Error("Invalid ".concat(location, " `").concat(safePropName, "` supplied to `").concat(componentName, "`. ") + "Expected an element that can hold a ref. ".concat(warningHint, " ") + 'For more information see https://material-ui.com/r/caveat-with-refs-guide');
  }

  return null;
}

var elementAcceptingRef = (0, _chainPropTypes.default)(_propTypes.default.element, acceptingRef);
elementAcceptingRef.isRequired = (0, _chainPropTypes.default)(_propTypes.default.element.isRequired, acceptingRef);
var _default = elementAcceptingRef;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/utils/elementTypeAcceptingRef.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/utils/elementTypeAcceptingRef.js ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "prop-types"));

var _chainPropTypes = _interopRequireDefault(__webpack_require__(/*! ./chainPropTypes */ "./node_modules/@material-ui/core/node_modules/@material-ui/utils/chainPropTypes.js"));

function isClassComponent(elementType) {
  // elementType.prototype?.isReactComponent
  var _elementType$prototyp = elementType.prototype,
      prototype = _elementType$prototyp === void 0 ? {} : _elementType$prototyp;
  return Boolean(prototype.isReactComponent);
}

function elementTypeAcceptingRef(props, propName, componentName, location, propFullName) {
  var propValue = props[propName];
  var safePropName = propFullName || propName;

  if (propValue == null) {
    return null;
  }

  var warningHint;
  /**
   * Blacklisting instead of whitelisting
   *
   * Blacklisting will miss some components, such as React.Fragment. Those will at least
   * trigger a warning in React.
   * We can't whitelist because there is no safe way to detect React.forwardRef
   * or class components. "Safe" means there's no public API.
   *
   */

  if (typeof propValue === 'function' && !isClassComponent(propValue)) {
    warningHint = 'Did you accidentally provide a plain function component instead?';
  }

  if (warningHint !== undefined) {
    return new Error("Invalid ".concat(location, " `").concat(safePropName, "` supplied to `").concat(componentName, "`. ") + "Expected an element type that can hold a ref. ".concat(warningHint, " ") + 'For more information see https://material-ui.com/r/caveat-with-refs-guide');
  }

  return null;
}

var _default = (0, _chainPropTypes.default)(PropTypes.elementType, elementTypeAcceptingRef);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/utils/exactProp.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/utils/exactProp.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = exactProp;
exports.specialProperty = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _extends3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

// This module is based on https://github.com/airbnb/prop-types-exact repository.
// However, in order to reduce the number of dependencies and to remove some extra safe checks
// the module was forked.
// Only exported for test purposes.
var specialProperty = "exact-prop: \u200B";
exports.specialProperty = specialProperty;

function exactProp(propTypes) {
  if (false) {}

  return (0, _extends3.default)({}, propTypes, (0, _defineProperty2.default)({}, specialProperty, function (props) {
    var unsupportedProps = Object.keys(props).filter(function (prop) {
      return !propTypes.hasOwnProperty(prop);
    });

    if (unsupportedProps.length > 0) {
      return new Error("The following props are not supported: ".concat(unsupportedProps.map(function (prop) {
        return "`".concat(prop, "`");
      }).join(', '), ". Please remove them."));
    }

    return null;
  }));
}

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/utils/formatMuiErrorMessage.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/utils/formatMuiErrorMessage.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = formatMuiErrorMessage;

/**
 * WARNING: Don't import this directly.
 * Use `MuiError` from `@material-ui/utils/macros/MuiError.macro` instead.
 * @param {number} code
 */
function formatMuiErrorMessage(code) {
  // Apply babel-plugin-transform-template-literals in loose mode
  // loose mode is safe iff we're concatenating primitives
  // see https://babeljs.io/docs/en/babel-plugin-transform-template-literals#loose

  /* eslint-disable prefer-template */
  var url = 'https://material-ui.com/production-error/?code=' + code;

  for (var i = 1; i < arguments.length; i += 1) {
    // rest params over-transpile for this case
    // eslint-disable-next-line prefer-rest-params
    url += '&args[]=' + encodeURIComponent(arguments[i]);
  }

  return 'Minified Material-UI error #' + code + '; visit ' + url + ' for the full message.';
  /* eslint-enable prefer-template */
}

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/utils/getDisplayName.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/utils/getDisplayName.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getFunctionName = getFunctionName;
exports.default = getDisplayName;

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _reactIs = __webpack_require__(/*! react-is */ "react-is");

// Simplified polyfill for IE 11 support
// https://github.com/JamesMGreene/Function.name/blob/58b314d4a983110c3682f1228f845d39ccca1817/Function.name.js#L3
var fnNameMatchRegex = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;

function getFunctionName(fn) {
  var match = "".concat(fn).match(fnNameMatchRegex);
  var name = match && match[1];
  return name || '';
}
/**
 * @param {function} Component
 * @param {string} fallback
 * @returns {string | undefined}
 */


function getFunctionComponentName(Component) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return Component.displayName || Component.name || getFunctionName(Component) || fallback;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = getFunctionComponentName(innerType);
  return outerType.displayName || (functionName !== '' ? "".concat(wrapperName, "(").concat(functionName, ")") : wrapperName);
}
/**
 * cherry-pick from
 * https://github.com/facebook/react/blob/769b1f270e1251d9dbdce0fcbd9e92e502d059b8/packages/shared/getComponentName.js
 * originally forked from recompose/getDisplayName with added IE 11 support
 *
 * @param {React.ReactType} Component
 * @returns {string | undefined}
 */


function getDisplayName(Component) {
  if (Component == null) {
    return undefined;
  }

  if (typeof Component === 'string') {
    return Component;
  }

  if (typeof Component === 'function') {
    return getFunctionComponentName(Component, 'Component');
  }

  if ((0, _typeof2.default)(Component) === 'object') {
    switch (Component.$$typeof) {
      case _reactIs.ForwardRef:
        return getWrappedName(Component, Component.render, 'ForwardRef');

      case _reactIs.Memo:
        return getWrappedName(Component, Component.type, 'memo');

      default:
        return undefined;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/utils/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/utils/index.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license Material-UI v4.11.2
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "chainPropTypes", ({
  enumerable: true,
  get: function get() {
    return _chainPropTypes.default;
  }
}));
Object.defineProperty(exports, "deepmerge", ({
  enumerable: true,
  get: function get() {
    return _deepmerge.default;
  }
}));
Object.defineProperty(exports, "elementAcceptingRef", ({
  enumerable: true,
  get: function get() {
    return _elementAcceptingRef.default;
  }
}));
Object.defineProperty(exports, "elementTypeAcceptingRef", ({
  enumerable: true,
  get: function get() {
    return _elementTypeAcceptingRef.default;
  }
}));
Object.defineProperty(exports, "exactProp", ({
  enumerable: true,
  get: function get() {
    return _exactProp.default;
  }
}));
Object.defineProperty(exports, "formatMuiErrorMessage", ({
  enumerable: true,
  get: function get() {
    return _formatMuiErrorMessage.default;
  }
}));
Object.defineProperty(exports, "getDisplayName", ({
  enumerable: true,
  get: function get() {
    return _getDisplayName.default;
  }
}));
Object.defineProperty(exports, "HTMLElementType", ({
  enumerable: true,
  get: function get() {
    return _HTMLElementType.default;
  }
}));
Object.defineProperty(exports, "ponyfillGlobal", ({
  enumerable: true,
  get: function get() {
    return _ponyfillGlobal.default;
  }
}));
Object.defineProperty(exports, "refType", ({
  enumerable: true,
  get: function get() {
    return _refType.default;
  }
}));

var _chainPropTypes = _interopRequireDefault(__webpack_require__(/*! ./chainPropTypes */ "./node_modules/@material-ui/core/node_modules/@material-ui/utils/chainPropTypes.js"));

var _deepmerge = _interopRequireDefault(__webpack_require__(/*! ./deepmerge */ "./node_modules/@material-ui/core/node_modules/@material-ui/utils/deepmerge.js"));

var _elementAcceptingRef = _interopRequireDefault(__webpack_require__(/*! ./elementAcceptingRef */ "./node_modules/@material-ui/core/node_modules/@material-ui/utils/elementAcceptingRef.js"));

var _elementTypeAcceptingRef = _interopRequireDefault(__webpack_require__(/*! ./elementTypeAcceptingRef */ "./node_modules/@material-ui/core/node_modules/@material-ui/utils/elementTypeAcceptingRef.js"));

var _exactProp = _interopRequireDefault(__webpack_require__(/*! ./exactProp */ "./node_modules/@material-ui/core/node_modules/@material-ui/utils/exactProp.js"));

var _formatMuiErrorMessage = _interopRequireDefault(__webpack_require__(/*! ./formatMuiErrorMessage */ "./node_modules/@material-ui/core/node_modules/@material-ui/utils/formatMuiErrorMessage.js"));

var _getDisplayName = _interopRequireDefault(__webpack_require__(/*! ./getDisplayName */ "./node_modules/@material-ui/core/node_modules/@material-ui/utils/getDisplayName.js"));

var _HTMLElementType = _interopRequireDefault(__webpack_require__(/*! ./HTMLElementType */ "./node_modules/@material-ui/core/node_modules/@material-ui/utils/HTMLElementType.js"));

var _ponyfillGlobal = _interopRequireDefault(__webpack_require__(/*! ./ponyfillGlobal */ "./node_modules/@material-ui/core/node_modules/@material-ui/utils/ponyfillGlobal.js"));

var _refType = _interopRequireDefault(__webpack_require__(/*! ./refType */ "./node_modules/@material-ui/core/node_modules/@material-ui/utils/refType.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/utils/ponyfillGlobal.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/utils/ponyfillGlobal.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

/* eslint-disable */
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var _default = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/@material-ui/utils/refType.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/@material-ui/utils/refType.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var refType = _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]);

var _default = refType;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/jss-plugin-camel-case/dist/jss-plugin-camel-case.cjs.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/jss-plugin-camel-case/dist/jss-plugin-camel-case.cjs.js ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var hyphenate = __webpack_require__(/*! hyphenate-style-name */ "hyphenate-style-name");

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var hyphenate__default = /*#__PURE__*/_interopDefaultLegacy(hyphenate);

/**
 * Convert camel cased property names to dash separated.
 *
 * @param {Object} style
 * @return {Object}
 */

function convertCase(style) {
  var converted = {};

  for (var prop in style) {
    var key = prop.indexOf('--') === 0 ? prop : hyphenate__default['default'](prop);
    converted[key] = style[prop];
  }

  if (style.fallbacks) {
    if (Array.isArray(style.fallbacks)) converted.fallbacks = style.fallbacks.map(convertCase);else converted.fallbacks = convertCase(style.fallbacks);
  }

  return converted;
}
/**
 * Allow camel cased property names by converting them back to dasherized.
 *
 * @param {Rule} rule
 */


function camelCase() {
  function onProcessStyle(style) {
    if (Array.isArray(style)) {
      // Handle rules like @font-face, which can have multiple styles in an array
      for (var index = 0; index < style.length; index++) {
        style[index] = convertCase(style[index]);
      }

      return style;
    }

    return convertCase(style);
  }

  function onChangeValue(value, prop, rule) {
    if (prop.indexOf('--') === 0) {
      return value;
    }

    var hyphenatedProp = hyphenate__default['default'](prop); // There was no camel case in place

    if (prop === hyphenatedProp) return value;
    rule.prop(hyphenatedProp, value); // Core will ignore that property value we set the proper one above.

    return null;
  }

  return {
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

exports.default = camelCase;


/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/jss-plugin-default-unit/dist/jss-plugin-default-unit.cjs.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/jss-plugin-default-unit/dist/jss-plugin-default-unit.cjs.js ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var jss = __webpack_require__(/*! jss */ "./node_modules/@material-ui/core/node_modules/jss/dist/jss.cjs.js");

var px = jss.hasCSSTOMSupport && CSS ? CSS.px : 'px';
var ms = jss.hasCSSTOMSupport && CSS ? CSS.ms : 'ms';
var percent = jss.hasCSSTOMSupport && CSS ? CSS.percent : '%';
/**
 * Generated jss-plugin-default-unit CSS property units
 *
 * @type object
 */

var defaultUnits = {
  // Animation properties
  'animation-delay': ms,
  'animation-duration': ms,
  // Background properties
  'background-position': px,
  'background-position-x': px,
  'background-position-y': px,
  'background-size': px,
  // Border Properties
  border: px,
  'border-bottom': px,
  'border-bottom-left-radius': px,
  'border-bottom-right-radius': px,
  'border-bottom-width': px,
  'border-left': px,
  'border-left-width': px,
  'border-radius': px,
  'border-right': px,
  'border-right-width': px,
  'border-top': px,
  'border-top-left-radius': px,
  'border-top-right-radius': px,
  'border-top-width': px,
  'border-width': px,
  'border-block': px,
  'border-block-end': px,
  'border-block-end-width': px,
  'border-block-start': px,
  'border-block-start-width': px,
  'border-block-width': px,
  'border-inline': px,
  'border-inline-end': px,
  'border-inline-end-width': px,
  'border-inline-start': px,
  'border-inline-start-width': px,
  'border-inline-width': px,
  'border-start-start-radius': px,
  'border-start-end-radius': px,
  'border-end-start-radius': px,
  'border-end-end-radius': px,
  // Margin properties
  margin: px,
  'margin-bottom': px,
  'margin-left': px,
  'margin-right': px,
  'margin-top': px,
  'margin-block': px,
  'margin-block-end': px,
  'margin-block-start': px,
  'margin-inline': px,
  'margin-inline-end': px,
  'margin-inline-start': px,
  // Padding properties
  padding: px,
  'padding-bottom': px,
  'padding-left': px,
  'padding-right': px,
  'padding-top': px,
  'padding-block': px,
  'padding-block-end': px,
  'padding-block-start': px,
  'padding-inline': px,
  'padding-inline-end': px,
  'padding-inline-start': px,
  // Mask properties
  'mask-position-x': px,
  'mask-position-y': px,
  'mask-size': px,
  // Width and height properties
  height: px,
  width: px,
  'min-height': px,
  'max-height': px,
  'min-width': px,
  'max-width': px,
  // Position properties
  bottom: px,
  left: px,
  top: px,
  right: px,
  inset: px,
  'inset-block': px,
  'inset-block-end': px,
  'inset-block-start': px,
  'inset-inline': px,
  'inset-inline-end': px,
  'inset-inline-start': px,
  // Shadow properties
  'box-shadow': px,
  'text-shadow': px,
  // Column properties
  'column-gap': px,
  'column-rule': px,
  'column-rule-width': px,
  'column-width': px,
  // Font and text properties
  'font-size': px,
  'font-size-delta': px,
  'letter-spacing': px,
  'text-decoration-thickness': px,
  'text-indent': px,
  'text-stroke': px,
  'text-stroke-width': px,
  'word-spacing': px,
  // Motion properties
  motion: px,
  'motion-offset': px,
  // Outline properties
  outline: px,
  'outline-offset': px,
  'outline-width': px,
  // Perspective properties
  perspective: px,
  'perspective-origin-x': percent,
  'perspective-origin-y': percent,
  // Transform properties
  'transform-origin': percent,
  'transform-origin-x': percent,
  'transform-origin-y': percent,
  'transform-origin-z': percent,
  // Transition properties
  'transition-delay': ms,
  'transition-duration': ms,
  // Alignment properties
  'vertical-align': px,
  'flex-basis': px,
  // Some random properties
  'shape-margin': px,
  size: px,
  gap: px,
  // Grid properties
  grid: px,
  'grid-gap': px,
  'row-gap': px,
  'grid-row-gap': px,
  'grid-column-gap': px,
  'grid-template-rows': px,
  'grid-template-columns': px,
  'grid-auto-rows': px,
  'grid-auto-columns': px,
  // Not existing properties.
  // Used to avoid issues with jss-plugin-expand integration.
  'box-shadow-x': px,
  'box-shadow-y': px,
  'box-shadow-blur': px,
  'box-shadow-spread': px,
  'font-line-height': px,
  'text-shadow-x': px,
  'text-shadow-y': px,
  'text-shadow-blur': px
};

/**
 * Clones the object and adds a camel cased property version.
 */
function addCamelCasedVersion(obj) {
  var regExp = /(-[a-z])/g;

  var replace = function replace(str) {
    return str[1].toUpperCase();
  };

  var newObj = {};

  for (var _key in obj) {
    newObj[_key] = obj[_key];
    newObj[_key.replace(regExp, replace)] = obj[_key];
  }

  return newObj;
}

var units = addCamelCasedVersion(defaultUnits);
/**
 * Recursive deep style passing function
 */

function iterate(prop, value, options) {
  if (value == null) return value;

  if (Array.isArray(value)) {
    for (var i = 0; i < value.length; i++) {
      value[i] = iterate(prop, value[i], options);
    }
  } else if (typeof value === 'object') {
    if (prop === 'fallbacks') {
      for (var innerProp in value) {
        value[innerProp] = iterate(innerProp, value[innerProp], options);
      }
    } else {
      for (var _innerProp in value) {
        value[_innerProp] = iterate(prop + "-" + _innerProp, value[_innerProp], options);
      }
    } // eslint-disable-next-line no-restricted-globals

  } else if (typeof value === 'number' && isNaN(value) === false) {
    var unit = options[prop] || units[prop]; // Add the unit if available, except for the special case of 0px.

    if (unit && !(value === 0 && unit === px)) {
      return typeof unit === 'function' ? unit(value).toString() : "" + value + unit;
    }

    return value.toString();
  }

  return value;
}
/**
 * Add unit to numeric values.
 */


function defaultUnit(options) {
  if (options === void 0) {
    options = {};
  }

  var camelCasedOptions = addCamelCasedVersion(options);

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;

    for (var prop in style) {
      style[prop] = iterate(prop, style[prop], camelCasedOptions);
    }

    return style;
  }

  function onChangeValue(value, prop) {
    return iterate(prop, value, camelCasedOptions);
  }

  return {
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

exports.default = defaultUnit;


/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/jss-plugin-global/dist/jss-plugin-global.cjs.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/jss-plugin-global/dist/jss-plugin-global.cjs.js ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var _extends = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
var jss = __webpack_require__(/*! jss */ "./node_modules/@material-ui/core/node_modules/jss/dist/jss.cjs.js");

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);

var at = '@global';
var atPrefix = '@global ';

var GlobalContainerRule =
/*#__PURE__*/
function () {
  function GlobalContainerRule(key, styles, options) {
    this.type = 'global';
    this.at = at;
    this.rules = void 0;
    this.options = void 0;
    this.key = void 0;
    this.isProcessed = false;
    this.key = key;
    this.options = options;
    this.rules = new jss.RuleList(_extends__default['default']({}, options, {
      parent: this
    }));

    for (var selector in styles) {
      this.rules.add(selector, styles[selector]);
    }

    this.rules.process();
  }
  /**
   * Get a rule.
   */


  var _proto = GlobalContainerRule.prototype;

  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  }
  /**
   * Create and register rule, run plugins.
   */
  ;

  _proto.addRule = function addRule(name, style, options) {
    var rule = this.rules.add(name, style, options);
    if (rule) this.options.jss.plugins.onProcessRule(rule);
    return rule;
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  }
  /**
   * Generates a CSS string.
   */
  ;

  _proto.toString = function toString() {
    return this.rules.toString();
  };

  return GlobalContainerRule;
}();

var GlobalPrefixedRule =
/*#__PURE__*/
function () {
  function GlobalPrefixedRule(key, style, options) {
    this.type = 'global';
    this.at = at;
    this.options = void 0;
    this.rule = void 0;
    this.isProcessed = false;
    this.key = void 0;
    this.key = key;
    this.options = options;
    var selector = key.substr(atPrefix.length);
    this.rule = options.jss.createRule(selector, style, _extends__default['default']({}, options, {
      parent: this
    }));
  }

  var _proto2 = GlobalPrefixedRule.prototype;

  _proto2.toString = function toString(options) {
    return this.rule ? this.rule.toString(options) : '';
  };

  return GlobalPrefixedRule;
}();

var separatorRegExp = /\s*,\s*/g;

function addScope(selector, scope) {
  var parts = selector.split(separatorRegExp);
  var scoped = '';

  for (var i = 0; i < parts.length; i++) {
    scoped += scope + " " + parts[i].trim();
    if (parts[i + 1]) scoped += ', ';
  }

  return scoped;
}

function handleNestedGlobalContainerRule(rule, sheet) {
  var options = rule.options,
      style = rule.style;
  var rules = style ? style[at] : null;
  if (!rules) return;

  for (var name in rules) {
    sheet.addRule(name, rules[name], _extends__default['default']({}, options, {
      selector: addScope(name, rule.selector)
    }));
  }

  delete style[at];
}

function handlePrefixedGlobalRule(rule, sheet) {
  var options = rule.options,
      style = rule.style;

  for (var prop in style) {
    if (prop[0] !== '@' || prop.substr(0, at.length) !== at) continue;
    var selector = addScope(prop.substr(at.length), rule.selector);
    sheet.addRule(selector, style[prop], _extends__default['default']({}, options, {
      selector: selector
    }));
    delete style[prop];
  }
}
/**
 * Convert nested rules to separate, remove them from original styles.
 *
 * @param {Rule} rule
 * @api public
 */


function jssGlobal() {
  function onCreateRule(name, styles, options) {
    if (!name) return null;

    if (name === at) {
      return new GlobalContainerRule(name, styles, options);
    }

    if (name[0] === '@' && name.substr(0, atPrefix.length) === atPrefix) {
      return new GlobalPrefixedRule(name, styles, options);
    }

    var parent = options.parent;

    if (parent) {
      if (parent.type === 'global' || parent.options.parent && parent.options.parent.type === 'global') {
        options.scoped = false;
      }
    }

    if (options.scoped === false) {
      options.selector = name;
    }

    return null;
  }

  function onProcessRule(rule, sheet) {
    if (rule.type !== 'style' || !sheet) return;
    handleNestedGlobalContainerRule(rule, sheet);
    handlePrefixedGlobalRule(rule, sheet);
  }

  return {
    onCreateRule: onCreateRule,
    onProcessRule: onProcessRule
  };
}

exports.default = jssGlobal;


/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/jss-plugin-nested/dist/jss-plugin-nested.cjs.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/jss-plugin-nested/dist/jss-plugin-nested.cjs.js ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var _extends = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
var warning = __webpack_require__(/*! tiny-warning */ "tiny-warning");

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);
var warning__default = /*#__PURE__*/_interopDefaultLegacy(warning);

var separatorRegExp = /\s*,\s*/g;
var parentRegExp = /&/g;
var refRegExp = /\$([\w-]+)/g;
/**
 * Convert nested rules to separate, remove them from original styles.
 *
 * @param {Rule} rule
 * @api public
 */

function jssNested() {
  // Get a function to be used for $ref replacement.
  function getReplaceRef(container, sheet) {
    return function (match, key) {
      var rule = container.getRule(key) || sheet && sheet.getRule(key);

      if (rule) {
        rule = rule;
        return rule.selector;
      }

       true ? warning__default['default'](false, "[JSS] Could not find the referenced rule \"" + key + "\" in \"" + (container.options.meta || container.toString()) + "\".") : 0;
      return key;
    };
  }

  function replaceParentRefs(nestedProp, parentProp) {
    var parentSelectors = parentProp.split(separatorRegExp);
    var nestedSelectors = nestedProp.split(separatorRegExp);
    var result = '';

    for (var i = 0; i < parentSelectors.length; i++) {
      var parent = parentSelectors[i];

      for (var j = 0; j < nestedSelectors.length; j++) {
        var nested = nestedSelectors[j];
        if (result) result += ', '; // Replace all & by the parent or prefix & with the parent.

        result += nested.indexOf('&') !== -1 ? nested.replace(parentRegExp, parent) : parent + " " + nested;
      }
    }

    return result;
  }

  function getOptions(rule, container, prevOptions) {
    // Options has been already created, now we only increase index.
    if (prevOptions) return _extends__default['default']({}, prevOptions, {
      index: prevOptions.index + 1 // $FlowFixMe[prop-missing]

    });
    var nestingLevel = rule.options.nestingLevel;
    nestingLevel = nestingLevel === undefined ? 1 : nestingLevel + 1;

    var options = _extends__default['default']({}, rule.options, {
      nestingLevel: nestingLevel,
      index: container.indexOf(rule) + 1 // We don't need the parent name to be set options for chlid.

    });

    delete options.name;
    return options;
  }

  function onProcessStyle(style, rule, sheet) {
    if (rule.type !== 'style') return style;
    var styleRule = rule;
    var container = styleRule.options.parent;
    var options;
    var replaceRef;

    for (var prop in style) {
      var isNested = prop.indexOf('&') !== -1;
      var isNestedConditional = prop[0] === '@';
      if (!isNested && !isNestedConditional) continue;
      options = getOptions(styleRule, container, options);

      if (isNested) {
        var selector = replaceParentRefs(prop, styleRule.selector); // Lazily create the ref replacer function just once for
        // all nested rules within the sheet.

        if (!replaceRef) replaceRef = getReplaceRef(container, sheet); // Replace all $refs.

        selector = selector.replace(refRegExp, replaceRef);
        container.addRule(selector, style[prop], _extends__default['default']({}, options, {
          selector: selector
        }));
      } else if (isNestedConditional) {
        // Place conditional right after the parent rule to ensure right ordering.
        container.addRule(prop, {}, options) // Flow expects more options but they aren't required
        // And flow doesn't know this will always be a StyleRule which has the addRule method
        // $FlowFixMe[incompatible-use]
        // $FlowFixMe[prop-missing]
        .addRule(styleRule.key, style[prop], {
          selector: styleRule.selector
        });
      }

      delete style[prop];
    }

    return style;
  }

  return {
    onProcessStyle: onProcessStyle
  };
}

exports.default = jssNested;


/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/jss-plugin-props-sort/dist/jss-plugin-props-sort.cjs.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/jss-plugin-props-sort/dist/jss-plugin-props-sort.cjs.js ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

/**
 * Sort props by length.
 */
function jssPropsSort() {
  var sort = function sort(prop0, prop1) {
    if (prop0.length === prop1.length) {
      return prop0 > prop1 ? 1 : -1;
    }

    return prop0.length - prop1.length;
  };

  return {
    onProcessStyle: function onProcessStyle(style, rule) {
      if (rule.type !== 'style') return style;
      var newStyle = {};
      var props = Object.keys(style).sort(sort);

      for (var i = 0; i < props.length; i++) {
        newStyle[props[i]] = style[props[i]];
      }

      return newStyle;
    }
  };
}

exports.default = jssPropsSort;


/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/jss-plugin-rule-value-function/dist/jss-plugin-rule-value-function.cjs.js":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/jss-plugin-rule-value-function/dist/jss-plugin-rule-value-function.cjs.js ***!
  \*******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var warning = __webpack_require__(/*! tiny-warning */ "tiny-warning");
var jss = __webpack_require__(/*! jss */ "./node_modules/@material-ui/core/node_modules/jss/dist/jss.cjs.js");

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var warning__default = /*#__PURE__*/_interopDefaultLegacy(warning);

var now = Date.now();
var fnValuesNs = "fnValues" + now;
var fnRuleNs = "fnStyle" + ++now;

var functionPlugin = function functionPlugin() {
  return {
    onCreateRule: function onCreateRule(name, decl, options) {
      if (typeof decl !== 'function') return null;
      var rule = jss.createRule(name, {}, options);
      rule[fnRuleNs] = decl;
      return rule;
    },
    onProcessStyle: function onProcessStyle(style, rule) {
      // We need to extract function values from the declaration, so that we can keep core unaware of them.
      // We need to do that only once.
      // We don't need to extract functions on each style update, since this can happen only once.
      // We don't support function values inside of function rules.
      if (fnValuesNs in rule || fnRuleNs in rule) return style;
      var fnValues = {};

      for (var prop in style) {
        var value = style[prop];
        if (typeof value !== 'function') continue;
        delete style[prop];
        fnValues[prop] = value;
      } // $FlowFixMe[prop-missing]


      rule[fnValuesNs] = fnValues;
      return style;
    },
    onUpdate: function onUpdate(data, rule, sheet, options) {
      var styleRule = rule; // $FlowFixMe[prop-missing]

      var fnRule = styleRule[fnRuleNs]; // If we have a style function, the entire rule is dynamic and style object
      // will be returned from that function.

      if (fnRule) {
        // Empty object will remove all currently defined props
        // in case function rule returns a falsy value.
        styleRule.style = fnRule(data) || {};

        if (true) {
          for (var prop in styleRule.style) {
            if (typeof styleRule.style[prop] === 'function') {
               true ? warning__default['default'](false, '[JSS] Function values inside function rules are not supported.') : 0;
              break;
            }
          }
        }
      } // $FlowFixMe[prop-missing]


      var fnValues = styleRule[fnValuesNs]; // If we have a fn values map, it is a rule with function values.

      if (fnValues) {
        for (var _prop in fnValues) {
          styleRule.prop(_prop, fnValues[_prop](data), options);
        }
      }
    }
  };
};

exports.default = functionPlugin;


/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/jss-plugin-vendor-prefixer/dist/jss-plugin-vendor-prefixer.cjs.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/jss-plugin-vendor-prefixer/dist/jss-plugin-vendor-prefixer.cjs.js ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var vendor = __webpack_require__(/*! css-vendor */ "css-vendor");
var jss = __webpack_require__(/*! jss */ "./node_modules/@material-ui/core/node_modules/jss/dist/jss.cjs.js");

/**
 * Add vendor prefix to a property name when needed.
 *
 * @api public
 */

function jssVendorPrefixer() {
  function onProcessRule(rule) {
    if (rule.type === 'keyframes') {
      var atRule = rule;
      atRule.at = vendor.supportedKeyframes(atRule.at);
    }
  }

  function prefixStyle(style) {
    for (var prop in style) {
      var value = style[prop];

      if (prop === 'fallbacks' && Array.isArray(value)) {
        style[prop] = value.map(prefixStyle);
        continue;
      }

      var changeProp = false;
      var supportedProp = vendor.supportedProperty(prop);
      if (supportedProp && supportedProp !== prop) changeProp = true;
      var changeValue = false;
      var supportedValue = vendor.supportedValue(supportedProp, jss.toCssValue(value));
      if (supportedValue && supportedValue !== value) changeValue = true;

      if (changeProp || changeValue) {
        if (changeProp) delete style[prop];
        style[supportedProp || prop] = supportedValue || value;
      }
    }

    return style;
  }

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;
    return prefixStyle(style);
  }

  function onChangeValue(value, prop) {
    return vendor.supportedValue(prop, jss.toCssValue(value)) || value;
  }

  return {
    onProcessRule: onProcessRule,
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

exports.default = jssVendorPrefixer;


/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/jss/dist/jss.cjs.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/jss/dist/jss.cjs.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var _extends = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
var isInBrowser = __webpack_require__(/*! is-in-browser */ "is-in-browser");
var warning = __webpack_require__(/*! tiny-warning */ "tiny-warning");
var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
var _inheritsLoose = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
var _assertThisInitialized = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
var _objectWithoutPropertiesLoose = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);
var isInBrowser__default = /*#__PURE__*/_interopDefaultLegacy(isInBrowser);
var warning__default = /*#__PURE__*/_interopDefaultLegacy(warning);
var _createClass__default = /*#__PURE__*/_interopDefaultLegacy(_createClass);
var _inheritsLoose__default = /*#__PURE__*/_interopDefaultLegacy(_inheritsLoose);
var _assertThisInitialized__default = /*#__PURE__*/_interopDefaultLegacy(_assertThisInitialized);
var _objectWithoutPropertiesLoose__default = /*#__PURE__*/_interopDefaultLegacy(_objectWithoutPropertiesLoose);

var plainObjectConstrurctor = {}.constructor;
function cloneStyle(style) {
  if (style == null || typeof style !== 'object') return style;
  if (Array.isArray(style)) return style.map(cloneStyle);
  if (style.constructor !== plainObjectConstrurctor) return style;
  var newStyle = {};

  for (var name in style) {
    newStyle[name] = cloneStyle(style[name]);
  }

  return newStyle;
}

/**
 * Create a rule instance.
 */

function createRule(name, decl, options) {
  if (name === void 0) {
    name = 'unnamed';
  }

  var jss = options.jss;
  var declCopy = cloneStyle(decl);
  var rule = jss.plugins.onCreateRule(name, declCopy, options);
  if (rule) return rule; // It is an at-rule and it has no instance.

  if (name[0] === '@') {
     true ? warning__default['default'](false, "[JSS] Unknown rule " + name) : 0;
  }

  return null;
}

var join = function join(value, by) {
  var result = '';

  for (var i = 0; i < value.length; i++) {
    // Remove !important from the value, it will be readded later.
    if (value[i] === '!important') break;
    if (result) result += by;
    result += value[i];
  }

  return result;
};

/**
 * Converts array values to string.
 *
 * `margin: [['5px', '10px']]` > `margin: 5px 10px;`
 * `border: ['1px', '2px']` > `border: 1px, 2px;`
 * `margin: [['5px', '10px'], '!important']` > `margin: 5px 10px !important;`
 * `color: ['red', !important]` > `color: red !important;`
 */
var toCssValue = function toCssValue(value, ignoreImportant) {
  if (ignoreImportant === void 0) {
    ignoreImportant = false;
  }

  if (!Array.isArray(value)) return value;
  var cssValue = ''; // Support space separated values via `[['5px', '10px']]`.

  if (Array.isArray(value[0])) {
    for (var i = 0; i < value.length; i++) {
      if (value[i] === '!important') break;
      if (cssValue) cssValue += ', ';
      cssValue += join(value[i], ' ');
    }
  } else cssValue = join(value, ', '); // Add !important, because it was ignored.


  if (!ignoreImportant && value[value.length - 1] === '!important') {
    cssValue += ' !important';
  }

  return cssValue;
};

/**
 * Indent a string.
 * http://jsperf.com/array-join-vs-for
 */
function indentStr(str, indent) {
  var result = '';

  for (var index = 0; index < indent; index++) {
    result += '  ';
  }

  return result + str;
}
/**
 * Converts a Rule to CSS string.
 */


function toCss(selector, style, options) {
  if (options === void 0) {
    options = {};
  }

  var result = '';
  if (!style) return result;
  var _options = options,
      _options$indent = _options.indent,
      indent = _options$indent === void 0 ? 0 : _options$indent;
  var fallbacks = style.fallbacks;
  if (selector) indent++; // Apply fallbacks first.

  if (fallbacks) {
    // Array syntax {fallbacks: [{prop: value}]}
    if (Array.isArray(fallbacks)) {
      for (var index = 0; index < fallbacks.length; index++) {
        var fallback = fallbacks[index];

        for (var prop in fallback) {
          var value = fallback[prop];

          if (value != null) {
            if (result) result += '\n';
            result += indentStr(prop + ": " + toCssValue(value) + ";", indent);
          }
        }
      }
    } else {
      // Object syntax {fallbacks: {prop: value}}
      for (var _prop in fallbacks) {
        var _value = fallbacks[_prop];

        if (_value != null) {
          if (result) result += '\n';
          result += indentStr(_prop + ": " + toCssValue(_value) + ";", indent);
        }
      }
    }
  }

  for (var _prop2 in style) {
    var _value2 = style[_prop2];

    if (_value2 != null && _prop2 !== 'fallbacks') {
      if (result) result += '\n';
      result += indentStr(_prop2 + ": " + toCssValue(_value2) + ";", indent);
    }
  } // Allow empty style in this case, because properties will be added dynamically.


  if (!result && !options.allowEmpty) return result; // When rule is being stringified before selector was defined.

  if (!selector) return result;
  indent--;
  if (result) result = "\n" + result + "\n";
  return indentStr(selector + " {" + result, indent) + indentStr('}', indent);
}

var escapeRegex = /([[\].#*$><+~=|^:(),"'`\s])/g;
var nativeEscape = typeof CSS !== 'undefined' && CSS.escape;
var escape = (function (str) {
  return nativeEscape ? nativeEscape(str) : str.replace(escapeRegex, '\\$1');
});

var BaseStyleRule =
/*#__PURE__*/
function () {
  function BaseStyleRule(key, style, options) {
    this.type = 'style';
    this.key = void 0;
    this.isProcessed = false;
    this.style = void 0;
    this.renderer = void 0;
    this.renderable = void 0;
    this.options = void 0;
    var sheet = options.sheet,
        Renderer = options.Renderer;
    this.key = key;
    this.options = options;
    this.style = style;
    if (sheet) this.renderer = sheet.renderer;else if (Renderer) this.renderer = new Renderer();
  }
  /**
   * Get or set a style property.
   */


  var _proto = BaseStyleRule.prototype;

  _proto.prop = function prop(name, value, options) {
    // It's a getter.
    if (value === undefined) return this.style[name]; // Don't do anything if the value has not changed.

    var force = options ? options.force : false;
    if (!force && this.style[name] === value) return this;
    var newValue = value;

    if (!options || options.process !== false) {
      newValue = this.options.jss.plugins.onChangeValue(value, name, this);
    }

    var isEmpty = newValue == null || newValue === false;
    var isDefined = name in this.style; // Value is empty and wasn't defined before.

    if (isEmpty && !isDefined && !force) return this; // We are going to remove this value.

    var remove = isEmpty && isDefined;
    if (remove) delete this.style[name];else this.style[name] = newValue; // Renderable is defined if StyleSheet option `link` is true.

    if (this.renderable && this.renderer) {
      if (remove) this.renderer.removeProperty(this.renderable, name);else this.renderer.setProperty(this.renderable, name, newValue);
      return this;
    }

    var sheet = this.options.sheet;

    if (sheet && sheet.attached) {
       true ? warning__default['default'](false, '[JSS] Rule is not linked. Missing sheet option "link: true".') : 0;
    }

    return this;
  };

  return BaseStyleRule;
}();
var StyleRule =
/*#__PURE__*/
function (_BaseStyleRule) {
  _inheritsLoose__default['default'](StyleRule, _BaseStyleRule);

  function StyleRule(key, style, options) {
    var _this;

    _this = _BaseStyleRule.call(this, key, style, options) || this;
    _this.selectorText = void 0;
    _this.id = void 0;
    _this.renderable = void 0;
    var selector = options.selector,
        scoped = options.scoped,
        sheet = options.sheet,
        generateId = options.generateId;

    if (selector) {
      _this.selectorText = selector;
    } else if (scoped !== false) {
      _this.id = generateId(_assertThisInitialized__default['default'](_assertThisInitialized__default['default'](_this)), sheet);
      _this.selectorText = "." + escape(_this.id);
    }

    return _this;
  }
  /**
   * Set selector string.
   * Attention: use this with caution. Most browsers didn't implement
   * selectorText setter, so this may result in rerendering of entire Style Sheet.
   */


  var _proto2 = StyleRule.prototype;

  /**
   * Apply rule to an element inline.
   */
  _proto2.applyTo = function applyTo(renderable) {
    var renderer = this.renderer;

    if (renderer) {
      var json = this.toJSON();

      for (var prop in json) {
        renderer.setProperty(renderable, prop, json[prop]);
      }
    }

    return this;
  }
  /**
   * Returns JSON representation of the rule.
   * Fallbacks are not supported.
   * Useful for inline styles.
   */
  ;

  _proto2.toJSON = function toJSON() {
    var json = {};

    for (var prop in this.style) {
      var value = this.style[prop];
      if (typeof value !== 'object') json[prop] = value;else if (Array.isArray(value)) json[prop] = toCssValue(value);
    }

    return json;
  }
  /**
   * Generates a CSS string.
   */
  ;

  _proto2.toString = function toString(options) {
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;
    var opts = link ? _extends__default['default']({}, options, {
      allowEmpty: true
    }) : options;
    return toCss(this.selectorText, this.style, opts);
  };

  _createClass__default['default'](StyleRule, [{
    key: "selector",
    set: function set(selector) {
      if (selector === this.selectorText) return;
      this.selectorText = selector;
      var renderer = this.renderer,
          renderable = this.renderable;
      if (!renderable || !renderer) return;
      var hasChanged = renderer.setSelector(renderable, selector); // If selector setter is not implemented, rerender the rule.

      if (!hasChanged) {
        renderer.replaceRule(renderable, this);
      }
    }
    /**
     * Get selector string.
     */
    ,
    get: function get() {
      return this.selectorText;
    }
  }]);

  return StyleRule;
}(BaseStyleRule);
var pluginStyleRule = {
  onCreateRule: function onCreateRule(name, style, options) {
    if (name[0] === '@' || options.parent && options.parent.type === 'keyframes') {
      return null;
    }

    return new StyleRule(name, style, options);
  }
};

var defaultToStringOptions = {
  indent: 1,
  children: true
};
var atRegExp = /@([\w-]+)/;
/**
 * Conditional rule for @media, @supports
 */

var ConditionalRule =
/*#__PURE__*/
function () {
  function ConditionalRule(key, styles, options) {
    this.type = 'conditional';
    this.at = void 0;
    this.key = void 0;
    this.query = void 0;
    this.rules = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key;
    var atMatch = key.match(atRegExp);
    this.at = atMatch ? atMatch[1] : 'unknown'; // Key might contain a unique suffix in case the `name` passed by user was duplicate.

    this.query = options.name || "@" + this.at;
    this.options = options;
    this.rules = new RuleList(_extends__default['default']({}, options, {
      parent: this
    }));

    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }

    this.rules.process();
  }
  /**
   * Get a rule.
   */


  var _proto = ConditionalRule.prototype;

  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  }
  /**
   * Create and register rule, run plugins.
   */
  ;

  _proto.addRule = function addRule(name, style, options) {
    var rule = this.rules.add(name, style, options);
    if (!rule) return null;
    this.options.jss.plugins.onProcessRule(rule);
    return rule;
  }
  /**
   * Generates a CSS string.
   */
  ;

  _proto.toString = function toString(options) {
    if (options === void 0) {
      options = defaultToStringOptions;
    }

    if (options.indent == null) options.indent = defaultToStringOptions.indent;
    if (options.children == null) options.children = defaultToStringOptions.children;

    if (options.children === false) {
      return this.query + " {}";
    }

    var children = this.rules.toString(options);
    return children ? this.query + " {\n" + children + "\n}" : '';
  };

  return ConditionalRule;
}();
var keyRegExp = /@media|@supports\s+/;
var pluginConditionalRule = {
  onCreateRule: function onCreateRule(key, styles, options) {
    return keyRegExp.test(key) ? new ConditionalRule(key, styles, options) : null;
  }
};

var defaultToStringOptions$1 = {
  indent: 1,
  children: true
};
var nameRegExp = /@keyframes\s+([\w-]+)/;
/**
 * Rule for @keyframes
 */

var KeyframesRule =
/*#__PURE__*/
function () {
  function KeyframesRule(key, frames, options) {
    this.type = 'keyframes';
    this.at = '@keyframes';
    this.key = void 0;
    this.name = void 0;
    this.id = void 0;
    this.rules = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    var nameMatch = key.match(nameRegExp);

    if (nameMatch && nameMatch[1]) {
      this.name = nameMatch[1];
    } else {
      this.name = 'noname';
       true ? warning__default['default'](false, "[JSS] Bad keyframes name " + key) : 0;
    }

    this.key = this.type + "-" + this.name;
    this.options = options;
    var scoped = options.scoped,
        sheet = options.sheet,
        generateId = options.generateId;
    this.id = scoped === false ? this.name : escape(generateId(this, sheet));
    this.rules = new RuleList(_extends__default['default']({}, options, {
      parent: this
    }));

    for (var name in frames) {
      this.rules.add(name, frames[name], _extends__default['default']({}, options, {
        parent: this
      }));
    }

    this.rules.process();
  }
  /**
   * Generates a CSS string.
   */


  var _proto = KeyframesRule.prototype;

  _proto.toString = function toString(options) {
    if (options === void 0) {
      options = defaultToStringOptions$1;
    }

    if (options.indent == null) options.indent = defaultToStringOptions$1.indent;
    if (options.children == null) options.children = defaultToStringOptions$1.children;

    if (options.children === false) {
      return this.at + " " + this.id + " {}";
    }

    var children = this.rules.toString(options);
    if (children) children = "\n" + children + "\n";
    return this.at + " " + this.id + " {" + children + "}";
  };

  return KeyframesRule;
}();
var keyRegExp$1 = /@keyframes\s+/;
var refRegExp = /\$([\w-]+)/g;

var findReferencedKeyframe = function findReferencedKeyframe(val, keyframes) {
  if (typeof val === 'string') {
    return val.replace(refRegExp, function (match, name) {
      if (name in keyframes) {
        return keyframes[name];
      }

       true ? warning__default['default'](false, "[JSS] Referenced keyframes rule \"" + name + "\" is not defined.") : 0;
      return match;
    });
  }

  return val;
};
/**
 * Replace the reference for a animation name.
 */


var replaceRef = function replaceRef(style, prop, keyframes) {
  var value = style[prop];
  var refKeyframe = findReferencedKeyframe(value, keyframes);

  if (refKeyframe !== value) {
    style[prop] = refKeyframe;
  }
};

var plugin = {
  onCreateRule: function onCreateRule(key, frames, options) {
    return typeof key === 'string' && keyRegExp$1.test(key) ? new KeyframesRule(key, frames, options) : null;
  },
  // Animation name ref replacer.
  onProcessStyle: function onProcessStyle(style, rule, sheet) {
    if (rule.type !== 'style' || !sheet) return style;
    if ('animation-name' in style) replaceRef(style, 'animation-name', sheet.keyframes);
    if ('animation' in style) replaceRef(style, 'animation', sheet.keyframes);
    return style;
  },
  onChangeValue: function onChangeValue(val, prop, rule) {
    var sheet = rule.options.sheet;

    if (!sheet) {
      return val;
    }

    switch (prop) {
      case 'animation':
        return findReferencedKeyframe(val, sheet.keyframes);

      case 'animation-name':
        return findReferencedKeyframe(val, sheet.keyframes);

      default:
        return val;
    }
  }
};

var KeyframeRule =
/*#__PURE__*/
function (_BaseStyleRule) {
  _inheritsLoose__default['default'](KeyframeRule, _BaseStyleRule);

  function KeyframeRule() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _BaseStyleRule.call.apply(_BaseStyleRule, [this].concat(args)) || this;
    _this.renderable = void 0;
    return _this;
  }

  var _proto = KeyframeRule.prototype;

  /**
   * Generates a CSS string.
   */
  _proto.toString = function toString(options) {
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;
    var opts = link ? _extends__default['default']({}, options, {
      allowEmpty: true
    }) : options;
    return toCss(this.key, this.style, opts);
  };

  return KeyframeRule;
}(BaseStyleRule);
var pluginKeyframeRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    if (options.parent && options.parent.type === 'keyframes') {
      return new KeyframeRule(key, style, options);
    }

    return null;
  }
};

var FontFaceRule =
/*#__PURE__*/
function () {
  function FontFaceRule(key, style, options) {
    this.type = 'font-face';
    this.at = '@font-face';
    this.key = void 0;
    this.style = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key;
    this.style = style;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */


  var _proto = FontFaceRule.prototype;

  _proto.toString = function toString(options) {
    if (Array.isArray(this.style)) {
      var str = '';

      for (var index = 0; index < this.style.length; index++) {
        str += toCss(this.at, this.style[index]);
        if (this.style[index + 1]) str += '\n';
      }

      return str;
    }

    return toCss(this.at, this.style, options);
  };

  return FontFaceRule;
}();
var keyRegExp$2 = /@font-face/;
var pluginFontFaceRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    return keyRegExp$2.test(key) ? new FontFaceRule(key, style, options) : null;
  }
};

var ViewportRule =
/*#__PURE__*/
function () {
  function ViewportRule(key, style, options) {
    this.type = 'viewport';
    this.at = '@viewport';
    this.key = void 0;
    this.style = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key;
    this.style = style;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */


  var _proto = ViewportRule.prototype;

  _proto.toString = function toString(options) {
    return toCss(this.key, this.style, options);
  };

  return ViewportRule;
}();
var pluginViewportRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    return key === '@viewport' || key === '@-ms-viewport' ? new ViewportRule(key, style, options) : null;
  }
};

var SimpleRule =
/*#__PURE__*/
function () {
  function SimpleRule(key, value, options) {
    this.type = 'simple';
    this.key = void 0;
    this.value = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key;
    this.value = value;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */
  // eslint-disable-next-line no-unused-vars


  var _proto = SimpleRule.prototype;

  _proto.toString = function toString(options) {
    if (Array.isArray(this.value)) {
      var str = '';

      for (var index = 0; index < this.value.length; index++) {
        str += this.key + " " + this.value[index] + ";";
        if (this.value[index + 1]) str += '\n';
      }

      return str;
    }

    return this.key + " " + this.value + ";";
  };

  return SimpleRule;
}();
var keysMap = {
  '@charset': true,
  '@import': true,
  '@namespace': true
};
var pluginSimpleRule = {
  onCreateRule: function onCreateRule(key, value, options) {
    return key in keysMap ? new SimpleRule(key, value, options) : null;
  }
};

var plugins = [pluginStyleRule, pluginConditionalRule, plugin, pluginKeyframeRule, pluginFontFaceRule, pluginViewportRule, pluginSimpleRule];

var defaultUpdateOptions = {
  process: true
};
var forceUpdateOptions = {
  force: true,
  process: true
  /**
   * Contains rules objects and allows adding/removing etc.
   * Is used for e.g. by `StyleSheet` or `ConditionalRule`.
   */

};

var RuleList =
/*#__PURE__*/
function () {
  // Rules registry for access by .get() method.
  // It contains the same rule registered by name and by selector.
  // Original styles object.
  // Used to ensure correct rules order.
  function RuleList(options) {
    this.map = {};
    this.raw = {};
    this.index = [];
    this.counter = 0;
    this.options = void 0;
    this.classes = void 0;
    this.keyframes = void 0;
    this.options = options;
    this.classes = options.classes;
    this.keyframes = options.keyframes;
  }
  /**
   * Create and register rule.
   *
   * Will not render after Style Sheet was rendered the first time.
   */


  var _proto = RuleList.prototype;

  _proto.add = function add(name, decl, ruleOptions) {
    var _this$options = this.options,
        parent = _this$options.parent,
        sheet = _this$options.sheet,
        jss = _this$options.jss,
        Renderer = _this$options.Renderer,
        generateId = _this$options.generateId,
        scoped = _this$options.scoped;

    var options = _extends__default['default']({
      classes: this.classes,
      parent: parent,
      sheet: sheet,
      jss: jss,
      Renderer: Renderer,
      generateId: generateId,
      scoped: scoped,
      name: name,
      keyframes: this.keyframes,
      selector: undefined
    }, ruleOptions); // When user uses .createStyleSheet(), duplicate names are not possible, but
    // `sheet.addRule()` opens the door for any duplicate rule name. When this happens
    // we need to make the key unique within this RuleList instance scope.


    var key = name;

    if (name in this.raw) {
      key = name + "-d" + this.counter++;
    } // We need to save the original decl before creating the rule
    // because cache plugin needs to use it as a key to return a cached rule.


    this.raw[key] = decl;

    if (key in this.classes) {
      // E.g. rules inside of @media container
      options.selector = "." + escape(this.classes[key]);
    }

    var rule = createRule(key, decl, options);
    if (!rule) return null;
    this.register(rule);
    var index = options.index === undefined ? this.index.length : options.index;
    this.index.splice(index, 0, rule);
    return rule;
  }
  /**
   * Get a rule.
   */
  ;

  _proto.get = function get(name) {
    return this.map[name];
  }
  /**
   * Delete a rule.
   */
  ;

  _proto.remove = function remove(rule) {
    this.unregister(rule);
    delete this.raw[rule.key];
    this.index.splice(this.index.indexOf(rule), 1);
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.index.indexOf(rule);
  }
  /**
   * Run `onProcessRule()` plugins on every rule.
   */
  ;

  _proto.process = function process() {
    var plugins = this.options.jss.plugins; // We need to clone array because if we modify the index somewhere else during a loop
    // we end up with very hard-to-track-down side effects.

    this.index.slice(0).forEach(plugins.onProcessRule, plugins);
  }
  /**
   * Register a rule in `.map`, `.classes` and `.keyframes` maps.
   */
  ;

  _proto.register = function register(rule) {
    this.map[rule.key] = rule;

    if (rule instanceof StyleRule) {
      this.map[rule.selector] = rule;
      if (rule.id) this.classes[rule.key] = rule.id;
    } else if (rule instanceof KeyframesRule && this.keyframes) {
      this.keyframes[rule.name] = rule.id;
    }
  }
  /**
   * Unregister a rule.
   */
  ;

  _proto.unregister = function unregister(rule) {
    delete this.map[rule.key];

    if (rule instanceof StyleRule) {
      delete this.map[rule.selector];
      delete this.classes[rule.key];
    } else if (rule instanceof KeyframesRule) {
      delete this.keyframes[rule.name];
    }
  }
  /**
   * Update the function values with a new data.
   */
  ;

  _proto.update = function update() {
    var name;
    var data;
    var options;

    if (typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'string') {
      name = arguments.length <= 0 ? undefined : arguments[0]; // $FlowFixMe[invalid-tuple-index]

      data = arguments.length <= 1 ? undefined : arguments[1]; // $FlowFixMe[invalid-tuple-index]

      options = arguments.length <= 2 ? undefined : arguments[2];
    } else {
      data = arguments.length <= 0 ? undefined : arguments[0]; // $FlowFixMe[invalid-tuple-index]

      options = arguments.length <= 1 ? undefined : arguments[1];
      name = null;
    }

    if (name) {
      this.updateOne(this.map[name], data, options);
    } else {
      for (var index = 0; index < this.index.length; index++) {
        this.updateOne(this.index[index], data, options);
      }
    }
  }
  /**
   * Execute plugins, update rule props.
   */
  ;

  _proto.updateOne = function updateOne(rule, data, options) {
    if (options === void 0) {
      options = defaultUpdateOptions;
    }

    var _this$options2 = this.options,
        plugins = _this$options2.jss.plugins,
        sheet = _this$options2.sheet; // It is a rules container like for e.g. ConditionalRule.

    if (rule.rules instanceof RuleList) {
      rule.rules.update(data, options);
      return;
    }

    var styleRule = rule;
    var style = styleRule.style;
    plugins.onUpdate(data, rule, sheet, options); // We rely on a new `style` ref in case it was mutated during onUpdate hook.

    if (options.process && style && style !== styleRule.style) {
      // We need to run the plugins in case new `style` relies on syntax plugins.
      plugins.onProcessStyle(styleRule.style, styleRule, sheet); // Update and add props.

      for (var prop in styleRule.style) {
        var nextValue = styleRule.style[prop];
        var prevValue = style[prop]; // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
        // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

        if (nextValue !== prevValue) {
          styleRule.prop(prop, nextValue, forceUpdateOptions);
        }
      } // Remove props.


      for (var _prop in style) {
        var _nextValue = styleRule.style[_prop];
        var _prevValue = style[_prop]; // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
        // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

        if (_nextValue == null && _nextValue !== _prevValue) {
          styleRule.prop(_prop, null, forceUpdateOptions);
        }
      }
    }
  }
  /**
   * Convert rules to a CSS string.
   */
  ;

  _proto.toString = function toString(options) {
    var str = '';
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;

    for (var index = 0; index < this.index.length; index++) {
      var rule = this.index[index];
      var css = rule.toString(options); // No need to render an empty rule.

      if (!css && !link) continue;
      if (str) str += '\n';
      str += css;
    }

    return str;
  };

  return RuleList;
}();

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(styles, options) {
    this.options = void 0;
    this.deployed = void 0;
    this.attached = void 0;
    this.rules = void 0;
    this.renderer = void 0;
    this.classes = void 0;
    this.keyframes = void 0;
    this.queue = void 0;
    this.attached = false;
    this.deployed = false;
    this.classes = {};
    this.keyframes = {};
    this.options = _extends__default['default']({}, options, {
      sheet: this,
      parent: this,
      classes: this.classes,
      keyframes: this.keyframes
    });

    if (options.Renderer) {
      this.renderer = new options.Renderer(this);
    }

    this.rules = new RuleList(this.options);

    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }

    this.rules.process();
  }
  /**
   * Attach renderable to the render tree.
   */


  var _proto = StyleSheet.prototype;

  _proto.attach = function attach() {
    if (this.attached) return this;
    if (this.renderer) this.renderer.attach();
    this.attached = true; // Order is important, because we can't use insertRule API if style element is not attached.

    if (!this.deployed) this.deploy();
    return this;
  }
  /**
   * Remove renderable from render tree.
   */
  ;

  _proto.detach = function detach() {
    if (!this.attached) return this;
    if (this.renderer) this.renderer.detach();
    this.attached = false;
    return this;
  }
  /**
   * Add a rule to the current stylesheet.
   * Will insert a rule also after the stylesheet has been rendered first time.
   */
  ;

  _proto.addRule = function addRule(name, decl, options) {
    var queue = this.queue; // Plugins can create rules.
    // In order to preserve the right order, we need to queue all `.addRule` calls,
    // which happen after the first `rules.add()` call.

    if (this.attached && !queue) this.queue = [];
    var rule = this.rules.add(name, decl, options);
    if (!rule) return null;
    this.options.jss.plugins.onProcessRule(rule);

    if (this.attached) {
      if (!this.deployed) return rule; // Don't insert rule directly if there is no stringified version yet.
      // It will be inserted all together when .attach is called.

      if (queue) queue.push(rule);else {
        this.insertRule(rule);

        if (this.queue) {
          this.queue.forEach(this.insertRule, this);
          this.queue = undefined;
        }
      }
      return rule;
    } // We can't add rules to a detached style node.
    // We will redeploy the sheet once user will attach it.


    this.deployed = false;
    return rule;
  }
  /**
   * Insert rule into the StyleSheet
   */
  ;

  _proto.insertRule = function insertRule(rule) {
    if (this.renderer) {
      this.renderer.insertRule(rule);
    }
  }
  /**
   * Create and add rules.
   * Will render also after Style Sheet was rendered the first time.
   */
  ;

  _proto.addRules = function addRules(styles, options) {
    var added = [];

    for (var name in styles) {
      var rule = this.addRule(name, styles[name], options);
      if (rule) added.push(rule);
    }

    return added;
  }
  /**
   * Get a rule by name.
   */
  ;

  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  }
  /**
   * Delete a rule by name.
   * Returns `true`: if rule has been deleted from the DOM.
   */
  ;

  _proto.deleteRule = function deleteRule(name) {
    var rule = typeof name === 'object' ? name : this.rules.get(name);

    if (!rule || // Style sheet was created without link: true and attached, in this case we
    // won't be able to remove the CSS rule from the DOM.
    this.attached && !rule.renderable) {
      return false;
    }

    this.rules.remove(rule);

    if (this.attached && rule.renderable && this.renderer) {
      return this.renderer.deleteRule(rule.renderable);
    }

    return true;
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  }
  /**
   * Deploy pure CSS string to a renderable.
   */
  ;

  _proto.deploy = function deploy() {
    if (this.renderer) this.renderer.deploy();
    this.deployed = true;
    return this;
  }
  /**
   * Update the function values with a new data.
   */
  ;

  _proto.update = function update() {
    var _this$rules;

    (_this$rules = this.rules).update.apply(_this$rules, arguments);

    return this;
  }
  /**
   * Updates a single rule.
   */
  ;

  _proto.updateOne = function updateOne(rule, data, options) {
    this.rules.updateOne(rule, data, options);
    return this;
  }
  /**
   * Convert rules to a CSS string.
   */
  ;

  _proto.toString = function toString(options) {
    return this.rules.toString(options);
  };

  return StyleSheet;
}();

var PluginsRegistry =
/*#__PURE__*/
function () {
  function PluginsRegistry() {
    this.plugins = {
      internal: [],
      external: []
    };
    this.registry = void 0;
  }

  var _proto = PluginsRegistry.prototype;

  /**
   * Call `onCreateRule` hooks and return an object if returned by a hook.
   */
  _proto.onCreateRule = function onCreateRule(name, decl, options) {
    for (var i = 0; i < this.registry.onCreateRule.length; i++) {
      var rule = this.registry.onCreateRule[i](name, decl, options);
      if (rule) return rule;
    }

    return null;
  }
  /**
   * Call `onProcessRule` hooks.
   */
  ;

  _proto.onProcessRule = function onProcessRule(rule) {
    if (rule.isProcessed) return;
    var sheet = rule.options.sheet;

    for (var i = 0; i < this.registry.onProcessRule.length; i++) {
      this.registry.onProcessRule[i](rule, sheet);
    }

    if (rule.style) this.onProcessStyle(rule.style, rule, sheet);
    rule.isProcessed = true;
  }
  /**
   * Call `onProcessStyle` hooks.
   */
  ;

  _proto.onProcessStyle = function onProcessStyle(style, rule, sheet) {
    for (var i = 0; i < this.registry.onProcessStyle.length; i++) {
      // $FlowFixMe[prop-missing]
      rule.style = this.registry.onProcessStyle[i](rule.style, rule, sheet);
    }
  }
  /**
   * Call `onProcessSheet` hooks.
   */
  ;

  _proto.onProcessSheet = function onProcessSheet(sheet) {
    for (var i = 0; i < this.registry.onProcessSheet.length; i++) {
      this.registry.onProcessSheet[i](sheet);
    }
  }
  /**
   * Call `onUpdate` hooks.
   */
  ;

  _proto.onUpdate = function onUpdate(data, rule, sheet, options) {
    for (var i = 0; i < this.registry.onUpdate.length; i++) {
      this.registry.onUpdate[i](data, rule, sheet, options);
    }
  }
  /**
   * Call `onChangeValue` hooks.
   */
  ;

  _proto.onChangeValue = function onChangeValue(value, prop, rule) {
    var processedValue = value;

    for (var i = 0; i < this.registry.onChangeValue.length; i++) {
      processedValue = this.registry.onChangeValue[i](processedValue, prop, rule);
    }

    return processedValue;
  }
  /**
   * Register a plugin.
   */
  ;

  _proto.use = function use(newPlugin, options) {
    if (options === void 0) {
      options = {
        queue: 'external'
      };
    }

    var plugins = this.plugins[options.queue]; // Avoids applying same plugin twice, at least based on ref.

    if (plugins.indexOf(newPlugin) !== -1) {
      return;
    }

    plugins.push(newPlugin);
    this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(function (registry, plugin) {
      for (var name in plugin) {
        if (name in registry) {
          registry[name].push(plugin[name]);
        } else {
           true ? warning__default['default'](false, "[JSS] Unknown hook \"" + name + "\".") : 0;
        }
      }

      return registry;
    }, {
      onCreateRule: [],
      onProcessRule: [],
      onProcessStyle: [],
      onProcessSheet: [],
      onChangeValue: [],
      onUpdate: []
    });
  };

  return PluginsRegistry;
}();

/**
 * Sheets registry to access them all at one place.
 */
var SheetsRegistry =
/*#__PURE__*/
function () {
  function SheetsRegistry() {
    this.registry = [];
  }

  var _proto = SheetsRegistry.prototype;

  /**
   * Register a Style Sheet.
   */
  _proto.add = function add(sheet) {
    var registry = this.registry;
    var index = sheet.options.index;
    if (registry.indexOf(sheet) !== -1) return;

    if (registry.length === 0 || index >= this.index) {
      registry.push(sheet);
      return;
    } // Find a position.


    for (var i = 0; i < registry.length; i++) {
      if (registry[i].options.index > index) {
        registry.splice(i, 0, sheet);
        return;
      }
    }
  }
  /**
   * Reset the registry.
   */
  ;

  _proto.reset = function reset() {
    this.registry = [];
  }
  /**
   * Remove a Style Sheet.
   */
  ;

  _proto.remove = function remove(sheet) {
    var index = this.registry.indexOf(sheet);
    this.registry.splice(index, 1);
  }
  /**
   * Convert all attached sheets to a CSS string.
   */
  ;

  _proto.toString = function toString(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        attached = _ref.attached,
        options = _objectWithoutPropertiesLoose__default['default'](_ref, ["attached"]);

    var css = '';

    for (var i = 0; i < this.registry.length; i++) {
      var sheet = this.registry[i];

      if (attached != null && sheet.attached !== attached) {
        continue;
      }

      if (css) css += '\n';
      css += sheet.toString(options);
    }

    return css;
  };

  _createClass__default['default'](SheetsRegistry, [{
    key: "index",

    /**
     * Current highest index number.
     */
    get: function get() {
      return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
    }
  }]);

  return SheetsRegistry;
}();

/**
 * This is a global sheets registry. Only DomRenderer will add sheets to it.
 * On the server one should use an own SheetsRegistry instance and add the
 * sheets to it, because you need to make sure to create a new registry for
 * each request in order to not leak sheets across requests.
 */

var registry = new SheetsRegistry();

/* eslint-disable */

/**
 * Now that `globalThis` is available on most platforms
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis#browser_compatibility)
 * we check for `globalThis` first. `globalThis` is necessary for jss
 * to run in Agoric's secure version of JavaScript (SES). Under SES,
 * `globalThis` exists, but `window`, `self`, and `Function('return
 * this')()` are all undefined for security reasons.
 *
 * https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
 */
var globalThis$1 = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' && window.Math === Math ? window : typeof self !== 'undefined' && self.Math === Math ? self : Function('return this')();

var ns = '2f1acc6c3a606b082e5eef5e54414ffb';
if (globalThis$1[ns] == null) globalThis$1[ns] = 0; // Bundle may contain multiple JSS versions at the same time. In order to identify
// the current version with just one short number and use it for classes generation
// we use a counter. Also it is more accurate, because user can manually reevaluate
// the module.

var moduleId = globalThis$1[ns]++;

var maxRules = 1e10;

/**
 * Returns a function which generates unique class names based on counters.
 * When new generator function is created, rule counter is reseted.
 * We need to reset the rule counter for SSR for each request.
 */
var createGenerateId = function createGenerateId(options) {
  if (options === void 0) {
    options = {};
  }

  var ruleCounter = 0;

  var generateId = function generateId(rule, sheet) {
    ruleCounter += 1;

    if (ruleCounter > maxRules) {
       true ? warning__default['default'](false, "[JSS] You might have a memory leak. Rule counter is at " + ruleCounter + ".") : 0;
    }

    var jssId = '';
    var prefix = '';

    if (sheet) {
      if (sheet.options.classNamePrefix) {
        prefix = sheet.options.classNamePrefix;
      }

      if (sheet.options.jss.id != null) {
        jssId = String(sheet.options.jss.id);
      }
    }

    if (options.minify) {
      // Using "c" because a number can't be the first char in a class name.
      return "" + (prefix || 'c') + moduleId + jssId + ruleCounter;
    }

    return prefix + rule.key + "-" + moduleId + (jssId ? "-" + jssId : '') + "-" + ruleCounter;
  };

  return generateId;
};

/**
 * Cache the value from the first time a function is called.
 */
var memoize = function memoize(fn) {
  var value;
  return function () {
    if (!value) value = fn();
    return value;
  };
};

/**
 * Get a style property value.
 */
var getPropertyValue = function getPropertyValue(cssRule, prop) {
  try {
    // Support CSSTOM.
    if (cssRule.attributeStyleMap) {
      return cssRule.attributeStyleMap.get(prop);
    }

    return cssRule.style.getPropertyValue(prop);
  } catch (err) {
    // IE may throw if property is unknown.
    return '';
  }
};

/**
 * Set a style property.
 */
var setProperty = function setProperty(cssRule, prop, value) {
  try {
    var cssValue = value;

    if (Array.isArray(value)) {
      cssValue = toCssValue(value, true);

      if (value[value.length - 1] === '!important') {
        cssRule.style.setProperty(prop, cssValue, 'important');
        return true;
      }
    } // Support CSSTOM.


    if (cssRule.attributeStyleMap) {
      cssRule.attributeStyleMap.set(prop, cssValue);
    } else {
      cssRule.style.setProperty(prop, cssValue);
    }
  } catch (err) {
    // IE may throw if property is unknown.
    return false;
  }

  return true;
};

/**
 * Remove a style property.
 */
var removeProperty = function removeProperty(cssRule, prop) {
  try {
    // Support CSSTOM.
    if (cssRule.attributeStyleMap) {
      cssRule.attributeStyleMap.delete(prop);
    } else {
      cssRule.style.removeProperty(prop);
    }
  } catch (err) {
     true ? warning__default['default'](false, "[JSS] DOMException \"" + err.message + "\" was thrown. Tried to remove property \"" + prop + "\".") : 0;
  }
};

/**
 * Set the selector.
 */
var setSelector = function setSelector(cssRule, selectorText) {
  cssRule.selectorText = selectorText; // Return false if setter was not successful.
  // Currently works in chrome only.

  return cssRule.selectorText === selectorText;
};
/**
 * Gets the `head` element upon the first call and caches it.
 * We assume it can't be null.
 */


var getHead = memoize(function () {
  return document.querySelector('head');
});
/**
 * Find attached sheet with an index higher than the passed one.
 */

function findHigherSheet(registry, options) {
  for (var i = 0; i < registry.length; i++) {
    var sheet = registry[i];

    if (sheet.attached && sheet.options.index > options.index && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }

  return null;
}
/**
 * Find attached sheet with the highest index.
 */


function findHighestSheet(registry, options) {
  for (var i = registry.length - 1; i >= 0; i--) {
    var sheet = registry[i];

    if (sheet.attached && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }

  return null;
}
/**
 * Find a comment with "jss" inside.
 */


function findCommentNode(text) {
  var head = getHead();

  for (var i = 0; i < head.childNodes.length; i++) {
    var node = head.childNodes[i];

    if (node.nodeType === 8 && node.nodeValue.trim() === text) {
      return node;
    }
  }

  return null;
}

/**
 * Find a node before which we can insert the sheet.
 */
function findPrevNode(options) {
  var registry$1 = registry.registry;

  if (registry$1.length > 0) {
    // Try to insert before the next higher sheet.
    var sheet = findHigherSheet(registry$1, options);

    if (sheet && sheet.renderer) {
      return {
        parent: sheet.renderer.element.parentNode,
        node: sheet.renderer.element
      };
    } // Otherwise insert after the last attached.


    sheet = findHighestSheet(registry$1, options);

    if (sheet && sheet.renderer) {
      return {
        parent: sheet.renderer.element.parentNode,
        node: sheet.renderer.element.nextSibling
      };
    }
  } // Try to find a comment placeholder if registry is empty.


  var insertionPoint = options.insertionPoint;

  if (insertionPoint && typeof insertionPoint === 'string') {
    var comment = findCommentNode(insertionPoint);

    if (comment) {
      return {
        parent: comment.parentNode,
        node: comment.nextSibling
      };
    } // If user specifies an insertion point and it can't be found in the document -
    // bad specificity issues may appear.


     true ? warning__default['default'](false, "[JSS] Insertion point \"" + insertionPoint + "\" not found.") : 0;
  }

  return false;
}
/**
 * Insert style element into the DOM.
 */


function insertStyle(style, options) {
  var insertionPoint = options.insertionPoint;
  var nextNode = findPrevNode(options);

  if (nextNode !== false && nextNode.parent) {
    nextNode.parent.insertBefore(style, nextNode.node);
    return;
  } // Works with iframes and any node types.


  if (insertionPoint && typeof insertionPoint.nodeType === 'number') {
    // https://stackoverflow.com/questions/41328728/force-casting-in-flow
    var insertionPointElement = insertionPoint;
    var parentNode = insertionPointElement.parentNode;
    if (parentNode) parentNode.insertBefore(style, insertionPointElement.nextSibling);else  true ? warning__default['default'](false, '[JSS] Insertion point is not in the DOM.') : 0;
    return;
  }

  getHead().appendChild(style);
}
/**
 * Read jss nonce setting from the page if the user has set it.
 */


var getNonce = memoize(function () {
  var node = document.querySelector('meta[property="csp-nonce"]');
  return node ? node.getAttribute('content') : null;
});

var _insertRule = function insertRule(container, rule, index) {
  try {
    if ('insertRule' in container) {
      var c = container;
      c.insertRule(rule, index);
    } // Keyframes rule.
    else if ('appendRule' in container) {
        var _c = container;

        _c.appendRule(rule);
      }
  } catch (err) {
     true ? warning__default['default'](false, "[JSS] " + err.message) : 0;
    return false;
  }

  return container.cssRules[index];
};

var getValidRuleInsertionIndex = function getValidRuleInsertionIndex(container, index) {
  var maxIndex = container.cssRules.length; // In case previous insertion fails, passed index might be wrong

  if (index === undefined || index > maxIndex) {
    // eslint-disable-next-line no-param-reassign
    return maxIndex;
  }

  return index;
};

var createStyle = function createStyle() {
  var el = document.createElement('style'); // Without it, IE will have a broken source order specificity if we
  // insert rules after we insert the style tag.
  // It seems to kick-off the source order specificity algorithm.

  el.textContent = '\n';
  return el;
};

var DomRenderer =
/*#__PURE__*/
function () {
  // HTMLStyleElement needs fixing https://github.com/facebook/flow/issues/2696
  // Will be empty if link: true option is not set, because
  // it is only for use together with insertRule API.
  function DomRenderer(sheet) {
    this.getPropertyValue = getPropertyValue;
    this.setProperty = setProperty;
    this.removeProperty = removeProperty;
    this.setSelector = setSelector;
    this.element = void 0;
    this.sheet = void 0;
    this.hasInsertedRules = false;
    this.cssRules = [];
    // There is no sheet when the renderer is used from a standalone StyleRule.
    if (sheet) registry.add(sheet);
    this.sheet = sheet;

    var _ref = this.sheet ? this.sheet.options : {},
        media = _ref.media,
        meta = _ref.meta,
        element = _ref.element;

    this.element = element || createStyle();
    this.element.setAttribute('data-jss', '');
    if (media) this.element.setAttribute('media', media);
    if (meta) this.element.setAttribute('data-meta', meta);
    var nonce = getNonce();
    if (nonce) this.element.setAttribute('nonce', nonce);
  }
  /**
   * Insert style element into render tree.
   */


  var _proto = DomRenderer.prototype;

  _proto.attach = function attach() {
    // In the case the element node is external and it is already in the DOM.
    if (this.element.parentNode || !this.sheet) return;
    insertStyle(this.element, this.sheet.options); // When rules are inserted using `insertRule` API, after `sheet.detach().attach()`
    // most browsers create a new CSSStyleSheet, except of all IEs.

    var deployed = Boolean(this.sheet && this.sheet.deployed);

    if (this.hasInsertedRules && deployed) {
      this.hasInsertedRules = false;
      this.deploy();
    }
  }
  /**
   * Remove style element from render tree.
   */
  ;

  _proto.detach = function detach() {
    if (!this.sheet) return;
    var parentNode = this.element.parentNode;
    if (parentNode) parentNode.removeChild(this.element); // In the most browsers, rules inserted using insertRule() API will be lost when style element is removed.
    // Though IE will keep them and we need a consistent behavior.

    if (this.sheet.options.link) {
      this.cssRules = [];
      this.element.textContent = '\n';
    }
  }
  /**
   * Inject CSS string into element.
   */
  ;

  _proto.deploy = function deploy() {
    var sheet = this.sheet;
    if (!sheet) return;

    if (sheet.options.link) {
      this.insertRules(sheet.rules);
      return;
    }

    this.element.textContent = "\n" + sheet.toString() + "\n";
  }
  /**
   * Insert RuleList into an element.
   */
  ;

  _proto.insertRules = function insertRules(rules, nativeParent) {
    for (var i = 0; i < rules.index.length; i++) {
      this.insertRule(rules.index[i], i, nativeParent);
    }
  }
  /**
   * Insert a rule into element.
   */
  ;

  _proto.insertRule = function insertRule(rule, index, nativeParent) {
    if (nativeParent === void 0) {
      nativeParent = this.element.sheet;
    }

    if (rule.rules) {
      var parent = rule;
      var latestNativeParent = nativeParent;

      if (rule.type === 'conditional' || rule.type === 'keyframes') {
        var _insertionIndex = getValidRuleInsertionIndex(nativeParent, index); // We need to render the container without children first.


        latestNativeParent = _insertRule(nativeParent, parent.toString({
          children: false
        }), _insertionIndex);

        if (latestNativeParent === false) {
          return false;
        }

        this.refCssRule(rule, _insertionIndex, latestNativeParent);
      }

      this.insertRules(parent.rules, latestNativeParent);
      return latestNativeParent;
    }

    var ruleStr = rule.toString();
    if (!ruleStr) return false;
    var insertionIndex = getValidRuleInsertionIndex(nativeParent, index);

    var nativeRule = _insertRule(nativeParent, ruleStr, insertionIndex);

    if (nativeRule === false) {
      return false;
    }

    this.hasInsertedRules = true;
    this.refCssRule(rule, insertionIndex, nativeRule);
    return nativeRule;
  };

  _proto.refCssRule = function refCssRule(rule, index, cssRule) {
    rule.renderable = cssRule; // We only want to reference the top level rules, deleteRule API doesn't support removing nested rules
    // like rules inside media queries or keyframes

    if (rule.options.parent instanceof StyleSheet) {
      this.cssRules[index] = cssRule;
    }
  }
  /**
   * Delete a rule.
   */
  ;

  _proto.deleteRule = function deleteRule(cssRule) {
    var sheet = this.element.sheet;
    var index = this.indexOf(cssRule);
    if (index === -1) return false;
    sheet.deleteRule(index);
    this.cssRules.splice(index, 1);
    return true;
  }
  /**
   * Get index of a CSS Rule.
   */
  ;

  _proto.indexOf = function indexOf(cssRule) {
    return this.cssRules.indexOf(cssRule);
  }
  /**
   * Generate a new CSS rule and replace the existing one.
   *
   * Only used for some old browsers because they can't set a selector.
   */
  ;

  _proto.replaceRule = function replaceRule(cssRule, rule) {
    var index = this.indexOf(cssRule);
    if (index === -1) return false;
    this.element.sheet.deleteRule(index);
    this.cssRules.splice(index, 1);
    return this.insertRule(rule, index);
  }
  /**
   * Get all rules elements.
   */
  ;

  _proto.getRules = function getRules() {
    return this.element.sheet.cssRules;
  };

  return DomRenderer;
}();

var instanceCounter = 0;

var Jss =
/*#__PURE__*/
function () {
  function Jss(options) {
    this.id = instanceCounter++;
    this.version = "10.7.1";
    this.plugins = new PluginsRegistry();
    this.options = {
      id: {
        minify: false
      },
      createGenerateId: createGenerateId,
      Renderer: isInBrowser__default['default'] ? DomRenderer : null,
      plugins: []
    };
    this.generateId = createGenerateId({
      minify: false
    });

    for (var i = 0; i < plugins.length; i++) {
      this.plugins.use(plugins[i], {
        queue: 'internal'
      });
    }

    this.setup(options);
  }
  /**
   * Prepares various options, applies plugins.
   * Should not be used twice on the same instance, because there is no plugins
   * deduplication logic.
   */


  var _proto = Jss.prototype;

  _proto.setup = function setup(options) {
    if (options === void 0) {
      options = {};
    }

    if (options.createGenerateId) {
      this.options.createGenerateId = options.createGenerateId;
    }

    if (options.id) {
      this.options.id = _extends__default['default']({}, this.options.id, options.id);
    }

    if (options.createGenerateId || options.id) {
      this.generateId = this.options.createGenerateId(this.options.id);
    }

    if (options.insertionPoint != null) this.options.insertionPoint = options.insertionPoint;

    if ('Renderer' in options) {
      this.options.Renderer = options.Renderer;
    } // eslint-disable-next-line prefer-spread


    if (options.plugins) this.use.apply(this, options.plugins);
    return this;
  }
  /**
   * Create a Style Sheet.
   */
  ;

  _proto.createStyleSheet = function createStyleSheet(styles, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        index = _options.index;

    if (typeof index !== 'number') {
      index = registry.index === 0 ? 0 : registry.index + 1;
    }

    var sheet = new StyleSheet(styles, _extends__default['default']({}, options, {
      jss: this,
      generateId: options.generateId || this.generateId,
      insertionPoint: this.options.insertionPoint,
      Renderer: this.options.Renderer,
      index: index
    }));
    this.plugins.onProcessSheet(sheet);
    return sheet;
  }
  /**
   * Detach the Style Sheet and remove it from the registry.
   */
  ;

  _proto.removeStyleSheet = function removeStyleSheet(sheet) {
    sheet.detach();
    registry.remove(sheet);
    return this;
  }
  /**
   * Create a rule without a Style Sheet.
   * [Deprecated] will be removed in the next major version.
   */
  ;

  _proto.createRule = function createRule$1(name, style, options) {
    if (style === void 0) {
      style = {};
    }

    if (options === void 0) {
      options = {};
    }

    // Enable rule without name for inline styles.
    if (typeof name === 'object') {
      // $FlowFixMe[incompatible-call]
      return this.createRule(undefined, name, style);
    } // $FlowFixMe[incompatible-type]


    var ruleOptions = _extends__default['default']({}, options, {
      name: name,
      jss: this,
      Renderer: this.options.Renderer
    });

    if (!ruleOptions.generateId) ruleOptions.generateId = this.generateId;
    if (!ruleOptions.classes) ruleOptions.classes = {};
    if (!ruleOptions.keyframes) ruleOptions.keyframes = {};

    var rule = createRule(name, style, ruleOptions);

    if (rule) this.plugins.onProcessRule(rule);
    return rule;
  }
  /**
   * Register plugin. Passed function will be invoked with a rule instance.
   */
  ;

  _proto.use = function use() {
    var _this = this;

    for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
      plugins[_key] = arguments[_key];
    }

    plugins.forEach(function (plugin) {
      _this.plugins.use(plugin);
    });
    return this;
  };

  return Jss;
}();

/**
 * Extracts a styles object with only props that contain function values.
 */
function getDynamicStyles(styles) {
  var to = null;

  for (var key in styles) {
    var value = styles[key];
    var type = typeof value;

    if (type === 'function') {
      if (!to) to = {};
      to[key] = value;
    } else if (type === 'object' && value !== null && !Array.isArray(value)) {
      var extracted = getDynamicStyles(value);

      if (extracted) {
        if (!to) to = {};
        to[key] = extracted;
      }
    }
  }

  return to;
}

/**
 * SheetsManager is like a WeakMap which is designed to count StyleSheet
 * instances and attach/detach automatically.
 */
var SheetsManager =
/*#__PURE__*/
function () {
  function SheetsManager() {
    this.length = 0;
    this.sheets = new WeakMap();
  }

  var _proto = SheetsManager.prototype;

  _proto.get = function get(key) {
    var entry = this.sheets.get(key);
    return entry && entry.sheet;
  };

  _proto.add = function add(key, sheet) {
    if (this.sheets.has(key)) return;
    this.length++;
    this.sheets.set(key, {
      sheet: sheet,
      refs: 0
    });
  };

  _proto.manage = function manage(key) {
    var entry = this.sheets.get(key);

    if (entry) {
      if (entry.refs === 0) {
        entry.sheet.attach();
      }

      entry.refs++;
      return entry.sheet;
    }

    warning__default['default'](false, "[JSS] SheetsManager: can't find sheet to manage");
    return undefined;
  };

  _proto.unmanage = function unmanage(key) {
    var entry = this.sheets.get(key);

    if (entry) {
      if (entry.refs > 0) {
        entry.refs--;
        if (entry.refs === 0) entry.sheet.detach();
      }
    } else {
      warning__default['default'](false, "SheetsManager: can't find sheet to unmanage");
    }
  };

  _createClass__default['default'](SheetsManager, [{
    key: "size",
    get: function get() {
      return this.length;
    }
  }]);

  return SheetsManager;
}();

/**
 * A better abstraction over CSS.
 *
 * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
 * @website https://github.com/cssinjs/jss
 * @license MIT
 */

/**
 * Export a constant indicating if this browser has CSSTOM support.
 * https://developers.google.com/web/updates/2018/03/cssom
 */
var hasCSSTOMSupport = typeof CSS === 'object' && CSS != null && 'number' in CSS;
/**
 * Creates a new instance of Jss.
 */

var create = function create(options) {
  return new Jss(options);
};
/**
 * A global Jss instance.
 */

var jss = create();

exports.RuleList = RuleList;
exports.SheetsManager = SheetsManager;
exports.SheetsRegistry = SheetsRegistry;
exports.create = create;
exports.createGenerateId = createGenerateId;
exports.createRule = createRule;
exports.default = jss;
exports.getDynamicStyles = getDynamicStyles;
exports.hasCSSTOMSupport = hasCSSTOMSupport;
exports.sheets = registry;
exports.toCssValue = toCssValue;


/***/ }),

/***/ "./api/authentication/login.js":
/*!*************************************!*\
  !*** ./api/authentication/login.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateToken": function() { return /* binding */ validateToken; },
/* harmony export */   "login": function() { return /* binding */ login; },
/* harmony export */   "signUp": function() { return /* binding */ signUp; }
/* harmony export */ });
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_0__);

const {
  publicRuntimeConfig
} = next_config__WEBPACK_IMPORTED_MODULE_0___default()();
const validateToken = async token => {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('authorization', 'Bearer ' + token);
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: null,
    redirect: 'follow'
  };
  const response = await fetch(`${publicRuntimeConfig.backend}/users/validateToken`, requestOptions);
  return response;
};
const login = async (email, password) => {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  var raw = JSON.stringify({
    email,
    password
  });
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  const response = await fetch(`${publicRuntimeConfig.backend}/users/login`, requestOptions);
  return response;
};
const signUp = async (name, email, userName, password) => {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  var raw = JSON.stringify({
    name,
    email,
    userName,
    password
  });
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  const response = await fetch(`${publicRuntimeConfig.backend}/users/signup`, requestOptions);
  return response;
};

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MyApp; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/theme */ "./src/theme.js");
/* harmony import */ var _api_authentication_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/authentication/login */ "./api/authentication/login.js");
/* harmony import */ var _src_resusable_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/resusable/spinner */ "./src/resusable/spinner.js");

var _jsxFileName = "D:\\client work\\pages\\_app.js";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function MyApp(props) {
  const {
    Component,
    pageProps
  } = props;
  const {
    0: loadingAuth,
    1: setLoadingAuth
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const {
    0: userToken,
    1: setUserToken
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []); // useEffect(() => {
  //   const fetchToken = async () => {
  //     // setIsLoading(false);
  //     let Token = null;
  //     try {
  //       Token = await localStorage.getItem('userToken');
  //     } catch (e) {
  //       console.log('Error Fetching Token');
  //       setLoadingAuth(false);
  //     }
  //     if (Token != null) {
  //       //validate Token Here from server or async storage to find user state
  //       //validating through server
  //       try {
  //         const response = await validateToken(Token);
  //         let result = await response.json();
  //         if (result.data?.data?.user !== null) {
  //           setUserToken(Token);
  //           setUser(result.data.data.user);
  //         }
  //         setLoadingAuth(false);
  //       } catch (e) {
  //         setLoadingAuth(false);
  //       }
  //     } else {
  //       setLoadingAuth(false);
  //     }
  //   };
  //   fetchToken();
  // }, []);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        className: "jsx-4154479630",
        children: "My page"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "viewport",
        content: "minimum-scale=1, initial-scale=1, width=device-width",
        className: "jsx-4154479630"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__.ThemeProvider, {
      theme: _src_theme__WEBPACK_IMPORTED_MODULE_5__.default,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this), loadingAuth ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_resusable_spinner__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 11
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread(_objectSpread({}, pageProps), {}, {
        user: user,
        setUser: setUser,
        userToken: userToken,
        setUserToken: setUserToken,
        className: "jsx-4154479630" + " " + (pageProps && pageProps.className != null && pageProps.className || "")
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "4154479630",
      children: "@font-face{font-family:'Averta';src:url('/fonts/AvertaDemoPECuttedDemo-Regular.otf');font-style:normal;font-weight:400;font-display:swap;}@font-face{font-family:'Averta Bold';src:url('/fonts/AvertaDemoPE-ExtraBold.otf');font-style:normal;font-weight:400;font-display:swap;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxjbGllbnQgd29ya1xccGFnZXNcXF9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEVrQixBQUdnQyxBQVFLLHFCQVAyQixLQVFSLDZDQUMzQixHQVJBLGVBU0YsR0FSQSxhQVNFLEdBUkEsZUFTcEIsR0FSQSIsImZpbGUiOiJEOlxcY2xpZW50IHdvcmtcXHBhZ2VzXFxfYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcbmltcG9ydCB0aGVtZSBmcm9tICcuLi9zcmMvdGhlbWUnO1xuaW1wb3J0IHsgdmFsaWRhdGVUb2tlbiB9IGZyb20gJy4uL2FwaS9hdXRoZW50aWNhdGlvbi9sb2dpbic7XG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9zcmMvcmVzdXNhYmxlL3NwaW5uZXInO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAocHJvcHMpIHtcbiAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gcHJvcHM7XG4gIGNvbnN0IFtsb2FkaW5nQXV0aCwgc2V0TG9hZGluZ0F1dGhdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3VzZXJUb2tlbiwgc2V0VXNlclRva2VuXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gUmVtb3ZlIHRoZSBzZXJ2ZXItc2lkZSBpbmplY3RlZCBDU1MuXG4gICAgY29uc3QganNzU3R5bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzcy1zZXJ2ZXItc2lkZScpO1xuICAgIGlmIChqc3NTdHlsZXMpIHtcbiAgICAgIGpzc1N0eWxlcy5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGpzc1N0eWxlcyk7XG4gICAgfVxuICB9LCBbXSk7XG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgY29uc3QgZmV0Y2hUb2tlbiA9IGFzeW5jICgpID0+IHtcbiAgLy8gICAgIC8vIHNldElzTG9hZGluZyhmYWxzZSk7XG4gIC8vICAgICBsZXQgVG9rZW4gPSBudWxsO1xuICAvLyAgICAgdHJ5IHtcbiAgLy8gICAgICAgVG9rZW4gPSBhd2FpdCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlclRva2VuJyk7XG4gIC8vICAgICB9IGNhdGNoIChlKSB7XG4gIC8vICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBGZXRjaGluZyBUb2tlbicpO1xuICAvLyAgICAgICBzZXRMb2FkaW5nQXV0aChmYWxzZSk7XG4gIC8vICAgICB9XG5cbiAgLy8gICAgIGlmIChUb2tlbiAhPSBudWxsKSB7XG4gIC8vICAgICAgIC8vdmFsaWRhdGUgVG9rZW4gSGVyZSBmcm9tIHNlcnZlciBvciBhc3luYyBzdG9yYWdlIHRvIGZpbmQgdXNlciBzdGF0ZVxuICAvLyAgICAgICAvL3ZhbGlkYXRpbmcgdGhyb3VnaCBzZXJ2ZXJcbiAgLy8gICAgICAgdHJ5IHtcbiAgLy8gICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHZhbGlkYXRlVG9rZW4oVG9rZW4pO1xuICAvLyAgICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIC8vICAgICAgICAgaWYgKHJlc3VsdC5kYXRhPy5kYXRhPy51c2VyICE9PSBudWxsKSB7XG4gIC8vICAgICAgICAgICBzZXRVc2VyVG9rZW4oVG9rZW4pO1xuICAvLyAgICAgICAgICAgc2V0VXNlcihyZXN1bHQuZGF0YS5kYXRhLnVzZXIpO1xuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgICBzZXRMb2FkaW5nQXV0aChmYWxzZSk7XG4gIC8vICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgLy8gICAgICAgICBzZXRMb2FkaW5nQXV0aChmYWxzZSk7XG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH0gZWxzZSB7XG4gIC8vICAgICAgIHNldExvYWRpbmdBdXRoKGZhbHNlKTtcbiAgLy8gICAgIH1cbiAgLy8gICB9O1xuICAvLyAgIGZldGNoVG9rZW4oKTtcbiAgLy8gfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TXkgcGFnZTwvdGl0bGU+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICBjb250ZW50PVwibWluaW11bS1zY2FsZT0xLCBpbml0aWFsLXNjYWxlPTEsIHdpZHRoPWRldmljZS13aWR0aFwiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICB7LyogQ3NzQmFzZWxpbmUga2lja3N0YXJ0IGFuIGVsZWdhbnQsIGNvbnNpc3RlbnQsIGFuZCBzaW1wbGUgYmFzZWxpbmUgdG8gYnVpbGQgdXBvbi4gKi99XG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICB7bG9hZGluZ0F1dGggPyAoXG4gICAgICAgICAgPExvYWRpbmcgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8Q29tcG9uZW50XG4gICAgICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICAgICAgdXNlcj17dXNlcn1cbiAgICAgICAgICAgIHNldFVzZXI9e3NldFVzZXJ9XG4gICAgICAgICAgICB1c2VyVG9rZW49e3VzZXJUb2tlbn1cbiAgICAgICAgICAgIHNldFVzZXJUb2tlbj17c2V0VXNlclRva2VufVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQXZlcnRhJztcbiAgICAgICAgICBzcmM6IHVybCgnL2ZvbnRzL0F2ZXJ0YURlbW9QRUN1dHRlZERlbW8tUmVndWxhci5vdGYnKTtcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7XG4gICAgICAgIH1cblxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ0F2ZXJ0YSBCb2xkJztcbiAgICAgICAgICBzcmM6IHVybCgnL2ZvbnRzL0F2ZXJ0YURlbW9QRS1FeHRyYUJvbGQub3RmJyk7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn1cblxuTXlBcHAucHJvcFR5cGVzID0ge1xuICBDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxuICBwYWdlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG4iXX0= */\n/*@ sourceURL=D:\\\\client work\\\\pages\\\\_app.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 5
  }, this);
}
MyApp.propTypes = {
  Component: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType.isRequired),
  pageProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object.isRequired)
};

/***/ }),

/***/ "./src/resusable/spinner.js":
/*!**********************************!*\
  !*** ./src/resusable/spinner.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Loading; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\client work\\src\\resusable\\spinner.js";


function Loading() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    style: {
      position: 'absolute',
      top: '50%',
      left: '47%'
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.CircularProgress, {
      size: "large"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/theme.js":
/*!**********************!*\
  !*** ./src/theme.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
 // Create a theme instance.

const darkGreen = '#088178';
const darkBlack = '#303538';
const light = '#fff';
const theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.createMuiTheme)({
  palette: {
    common: {
      primary: `${darkGreen}`,
      darkBlack: darkBlack,
      light: light
    },
    primary: {
      main: darkBlack
    },
    secondary: {
      main: `${light}`
    },
    background: {
      default: light
    }
  },
  typography: {
    h1: {
      fontFamily: 'Averta',
      fontWeight: 700,
      fontSize: '2.25rem',
      lineHeight: 1.5,
      color: darkBlack
    },
    h2: {
      fontFamily: 'Averta',
      fontSize: '1.4rem',
      color: '#504e4b',
      lineHeight: 1.5
    },
    h3: {
      fontFamily: 'Averta',
      fontSize: '0.75rem',
      color: '#000',
      lineHeight: '12px',
      fontWeight: 300,
      fontStyle: 'normal',
      letterSpacing: '.25px',
      textTransform: 'uppercase'
    },
    h4: {
      fontFamily: 'Raleway',
      fontSize: '1.75rem',
      fontWeight: 700
    },
    h6: {
      fontFamily: 'Averta',
      fontSize: '1.1rem',
      fontWeight: 500,
      lineHeight: 1.5
    },
    subtitle1: {
      fontFamily: 'Averta',
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.5
    },
    subtitle2: {
      fontFamily: 'Averta',
      fontSize: '1rem',
      fontWeight: 300,
      color: '#303538'
    },
    body1: {
      fontSize: '1.25rem',
      fontWeight: 300
    },
    caption: {
      fontFamily: 'Averta',
      fontSize: '1em',
      fontWeight: 700,
      color: darkGreen
    },
    label: {
      fontFamily: 'Averta',
      color: darkBlack,
      fontWeight: 700,
      fontSize: '14px'
    },
    input: {
      fontFamily: 'Averta',
      fontSize: '1rem',
      color: darkBlack,
      lineHeight: 1.4,
      '&:hover .MuiOutlinedInput-notchedOutline': {
        border: '1px solid #899298'
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        border: '1px solid #3c74cc',
        boxShadow: '0 0 0 3px #dceefc'
      }
    },
    button: {
      backgroundColor: darkGreen,
      fontFamily: 'Averta',
      color: light,
      fontSize: '1.2rem',
      textTransform: 'none',
      '&:hover': {
        border: '1px solid #899298',
        backgroundColor: darkGreen
      }
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core");;

/***/ }),

/***/ "@material-ui/system":
/*!**************************************!*\
  !*** external "@material-ui/system" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/system");;

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("clsx");;

/***/ }),

/***/ "css-vendor":
/*!*****************************!*\
  !*** external "css-vendor" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("css-vendor");;

/***/ }),

/***/ "hoist-non-react-statics":
/*!******************************************!*\
  !*** external "hoist-non-react-statics" ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("hoist-non-react-statics");;

/***/ }),

/***/ "hyphenate-style-name":
/*!***************************************!*\
  !*** external "hyphenate-style-name" ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = require("hyphenate-style-name");;

/***/ }),

/***/ "is-in-browser":
/*!********************************!*\
  !*** external "is-in-browser" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("is-in-browser");;

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/config");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/style");;

/***/ }),

/***/ "tiny-warning":
/*!*******************************!*\
  !*** external "tiny-warning" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("tiny-warning");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL25leHRqcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9uZXh0anMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL25leHRqcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovL25leHRqcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly9uZXh0anMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c0xvb3NlLmpzIiwid2VicGFjazovL25leHRqcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9uZXh0anMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovL25leHRqcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL25leHRqcy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vQ3NzQmFzZWxpbmUvQ3NzQmFzZWxpbmUuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9jb2xvcnMvYmx1ZS5qcyIsIndlYnBhY2s6Ly9uZXh0anMvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9jb2xvcnMvZ3JlZW4uanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9jb2xvcnMvZ3JleS5qcyIsIndlYnBhY2s6Ly9uZXh0anMvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2NvbG9ycy9pbmRpZ28uanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9jb2xvcnMvb3JhbmdlLmpzIiwid2VicGFjazovL25leHRqcy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vY29sb3JzL3BpbmsuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9jb2xvcnMvcmVkLmpzIiwid2VicGFjazovL25leHRqcy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2NvbG9yTWFuaXB1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvY3JlYXRlQnJlYWtwb2ludHMuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvY3JlYXRlTWl4aW5zLmpzIiwid2VicGFjazovL25leHRqcy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2NyZWF0ZU11aVN0cmljdE1vZGVUaGVtZS5qcyIsIndlYnBhY2s6Ly9uZXh0anMvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9jcmVhdGVQYWxldHRlLmpzIiwid2VicGFjazovL25leHRqcy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2NyZWF0ZVNwYWNpbmcuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvY3JlYXRlU3R5bGVzLmpzIiwid2VicGFjazovL25leHRqcy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2NyZWF0ZVRoZW1lLmpzIiwid2VicGFjazovL25leHRqcy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2NyZWF0ZVR5cG9ncmFwaHkuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvY3NzVXRpbHMuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvZGVmYXVsdFRoZW1lLmpzIiwid2VicGFjazovL25leHRqcy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2luZGV4LmpzIiwid2VicGFjazovL25leHRqcy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL21ha2VTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvcmVzcG9uc2l2ZUZvbnRTaXplcy5qcyIsIndlYnBhY2s6Ly9uZXh0anMvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9zaGFkb3dzLmpzIiwid2VicGFjazovL25leHRqcy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL3NoYXBlLmpzIiwid2VicGFjazovL25leHRqcy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL3N0eWxlZC5qcyIsIndlYnBhY2s6Ly9uZXh0anMvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy90cmFuc2l0aW9ucy5qcyIsIndlYnBhY2s6Ly9uZXh0anMvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy91c2VUaGVtZS5qcyIsIndlYnBhY2s6Ly9uZXh0anMvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy93aXRoU3R5bGVzLmpzIiwid2VicGFjazovL25leHRqcy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL3dpdGhUaGVtZS5qcyIsIndlYnBhY2s6Ly9uZXh0anMvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy96SW5kZXguanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvc3R5bGVzL2VzbS9TZXJ2ZXJTdHlsZVNoZWV0cy9TZXJ2ZXJTdHlsZVNoZWV0cy5qcyIsIndlYnBhY2s6Ly9uZXh0anMvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zdHlsZXMvZXNtL1N0eWxlc1Byb3ZpZGVyL1N0eWxlc1Byb3ZpZGVyLmpzIiwid2VicGFjazovL25leHRqcy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3N0eWxlcy9lc20vU3R5bGVzUHJvdmlkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvc3R5bGVzL2VzbS9UaGVtZVByb3ZpZGVyL1RoZW1lUHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvc3R5bGVzL2VzbS9UaGVtZVByb3ZpZGVyL25lc3RlZC5qcyIsIndlYnBhY2s6Ly9uZXh0anMvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zdHlsZXMvZXNtL2NyZWF0ZUdlbmVyYXRlQ2xhc3NOYW1lL2NyZWF0ZUdlbmVyYXRlQ2xhc3NOYW1lLmpzIiwid2VicGFjazovL25leHRqcy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3N0eWxlcy9lc20vY3JlYXRlU3R5bGVzL2NyZWF0ZVN0eWxlcy5qcyIsIndlYnBhY2s6Ly9uZXh0anMvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zdHlsZXMvZXNtL2dldFN0eWxlc0NyZWF0b3IvZ2V0U3R5bGVzQ3JlYXRvci5qcyIsIndlYnBhY2s6Ly9uZXh0anMvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zdHlsZXMvZXNtL2dldFN0eWxlc0NyZWF0b3Ivbm9vcFRoZW1lLmpzIiwid2VicGFjazovL25leHRqcy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3N0eWxlcy9lc20vZ2V0VGhlbWVQcm9wcy9nZXRUaGVtZVByb3BzLmpzIiwid2VicGFjazovL25leHRqcy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3N0eWxlcy9lc20vanNzUHJlc2V0L2pzc1ByZXNldC5qcyIsIndlYnBhY2s6Ly9uZXh0anMvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zdHlsZXMvZXNtL21ha2VTdHlsZXMvaW5kZXhDb3VudGVyLmpzIiwid2VicGFjazovL25leHRqcy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3N0eWxlcy9lc20vbWFrZVN0eWxlcy9tYWtlU3R5bGVzLmpzIiwid2VicGFjazovL25leHRqcy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3N0eWxlcy9lc20vbWFrZVN0eWxlcy9tdWx0aUtleVN0b3JlLmpzIiwid2VicGFjazovL25leHRqcy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3N0eWxlcy9lc20vbWVyZ2VDbGFzc2VzL21lcmdlQ2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly9uZXh0anMvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zdHlsZXMvZXNtL3N0eWxlZC9zdHlsZWQuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvc3R5bGVzL2VzbS91c2VUaGVtZS9UaGVtZUNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvc3R5bGVzL2VzbS91c2VUaGVtZS91c2VUaGVtZS5qcyIsIndlYnBhY2s6Ly9uZXh0anMvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zdHlsZXMvZXNtL3dpdGhTdHlsZXMvd2l0aFN0eWxlcy5qcyIsIndlYnBhY2s6Ly9uZXh0anMvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zdHlsZXMvZXNtL3dpdGhUaGVtZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9uZXh0anMvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9zdHlsZXMvZXNtL3dpdGhUaGVtZS93aXRoVGhlbWUuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvc3R5bGVzL2luZGV4LmpzIiwid2VicGFjazovL25leHRqcy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3V0aWxzL0hUTUxFbGVtZW50VHlwZS5qcyIsIndlYnBhY2s6Ly9uZXh0anMvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS91dGlscy9jaGFpblByb3BUeXBlcy5qcyIsIndlYnBhY2s6Ly9uZXh0anMvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS91dGlscy9kZWVwbWVyZ2UuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvdXRpbHMvZWxlbWVudEFjY2VwdGluZ1JlZi5qcyIsIndlYnBhY2s6Ly9uZXh0anMvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS91dGlscy9lbGVtZW50VHlwZUFjY2VwdGluZ1JlZi5qcyIsIndlYnBhY2s6Ly9uZXh0anMvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS91dGlscy9leGFjdFByb3AuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvdXRpbHMvZm9ybWF0TXVpRXJyb3JNZXNzYWdlLmpzIiwid2VicGFjazovL25leHRqcy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3V0aWxzL2dldERpc3BsYXlOYW1lLmpzIiwid2VicGFjazovL25leHRqcy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovL25leHRqcy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3V0aWxzL3BvbnlmaWxsR2xvYmFsLmpzIiwid2VicGFjazovL25leHRqcy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL3V0aWxzL3JlZlR5cGUuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL25vZGVfbW9kdWxlcy9qc3MtcGx1Z2luLWNhbWVsLWNhc2UvZGlzdC9qc3MtcGx1Z2luLWNhbWVsLWNhc2UuY2pzLmpzIiwid2VicGFjazovL25leHRqcy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9ub2RlX21vZHVsZXMvanNzLXBsdWdpbi1kZWZhdWx0LXVuaXQvZGlzdC9qc3MtcGx1Z2luLWRlZmF1bHQtdW5pdC5janMuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL25vZGVfbW9kdWxlcy9qc3MtcGx1Z2luLWdsb2JhbC9kaXN0L2pzcy1wbHVnaW4tZ2xvYmFsLmNqcy5qcyIsIndlYnBhY2s6Ly9uZXh0anMvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvbm9kZV9tb2R1bGVzL2pzcy1wbHVnaW4tbmVzdGVkL2Rpc3QvanNzLXBsdWdpbi1uZXN0ZWQuY2pzLmpzIiwid2VicGFjazovL25leHRqcy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9ub2RlX21vZHVsZXMvanNzLXBsdWdpbi1wcm9wcy1zb3J0L2Rpc3QvanNzLXBsdWdpbi1wcm9wcy1zb3J0LmNqcy5qcyIsIndlYnBhY2s6Ly9uZXh0anMvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvbm9kZV9tb2R1bGVzL2pzcy1wbHVnaW4tcnVsZS12YWx1ZS1mdW5jdGlvbi9kaXN0L2pzcy1wbHVnaW4tcnVsZS12YWx1ZS1mdW5jdGlvbi5janMuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL25vZGVfbW9kdWxlcy9qc3MtcGx1Z2luLXZlbmRvci1wcmVmaXhlci9kaXN0L2pzcy1wbHVnaW4tdmVuZG9yLXByZWZpeGVyLmNqcy5qcyIsIndlYnBhY2s6Ly9uZXh0anMvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvbm9kZV9tb2R1bGVzL2pzcy9kaXN0L2pzcy5janMuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vYXBpL2F1dGhlbnRpY2F0aW9uL2xvZ2luLmpzIiwid2VicGFjazovL25leHRqcy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLy4vc3JjL3Jlc3VzYWJsZS9zcGlubmVyLmpzIiwid2VicGFjazovL25leHRqcy8uL3NyYy90aGVtZS5qcyIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9zeXN0ZW1cIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJjbHN4XCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiY3NzLXZlbmRvclwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcImhvaXN0LW5vbi1yZWFjdC1zdGF0aWNzXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwiaHlwaGVuYXRlLXN0eWxlLW5hbWVcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJpcy1pbi1icm93c2VyXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwibmV4dC9jb25maWdcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL25leHRqcy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiIsIndlYnBhY2s6Ly9uZXh0anMvZXh0ZXJuYWwgXCJ0aW55LXdhcm5pbmdcIiJdLCJuYW1lcyI6WyJwdWJsaWNSdW50aW1lQ29uZmlnIiwiZ2V0Q29uZmlnIiwidmFsaWRhdGVUb2tlbiIsInRva2VuIiwibXlIZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsInJlcXVlc3RPcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJyZWRpcmVjdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJiYWNrZW5kIiwibG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwicmF3IiwiSlNPTiIsInN0cmluZ2lmeSIsInNpZ25VcCIsIm5hbWUiLCJ1c2VyTmFtZSIsIk15QXBwIiwicHJvcHMiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJsb2FkaW5nQXV0aCIsInNldExvYWRpbmdBdXRoIiwidXNlU3RhdGUiLCJ1c2VyIiwic2V0VXNlciIsInVzZXJUb2tlbiIsInNldFVzZXJUb2tlbiIsIlJlYWN0IiwianNzU3R5bGVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFyZW50RWxlbWVudCIsInJlbW92ZUNoaWxkIiwidGhlbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJpc1JlcXVpcmVkIiwiTG9hZGluZyIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImRhcmtHcmVlbiIsImRhcmtCbGFjayIsImxpZ2h0IiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwiY29tbW9uIiwicHJpbWFyeSIsIm1haW4iLCJzZWNvbmRhcnkiLCJiYWNrZ3JvdW5kIiwiZGVmYXVsdCIsInR5cG9ncmFwaHkiLCJoMSIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiY29sb3IiLCJoMiIsImgzIiwiZm9udFN0eWxlIiwibGV0dGVyU3BhY2luZyIsInRleHRUcmFuc2Zvcm0iLCJoNCIsImg2Iiwic3VidGl0bGUxIiwic3VidGl0bGUyIiwiYm9keTEiLCJjYXB0aW9uIiwibGFiZWwiLCJpbnB1dCIsImJvcmRlciIsImJveFNoYWRvdyIsImJ1dHRvbiIsImJhY2tncm91bmRDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7OztBQ1JBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhCOzs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUM7Ozs7Ozs7Ozs7Ozs7OztBQ2ZlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7O0FDZGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNiZTtBQUNmO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQm1HO0FBQ3BGO0FBQ2Y7QUFDQSxlQUFlLGdHQUE0QjtBQUMzQzs7QUFFQTtBQUNBOztBQUVBLGVBQWUsNkJBQTZCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7OztBQ2xCZTtBQUNmO0FB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QUMsOEVBQUs7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FB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QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBLHFEQUFxRDs7QUFFckQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVDQUF1Qzs7QUFFdkMscURBQXFEOztBQUVyRDtBQUNBLHdDQUF3QyxpQ0FBaUM7O0FBRXpFO0FBQ0Esc0VBQXNFO0FBQ3RFO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxNQUFNLEtBQXFDLHdHQUF3RyxDQUFNO0FBQ3pKOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0U7O0FBRWxFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtD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O0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwyQ0FBMkM7QUFDM0M7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLGVBQWU7QUFDcEI7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQ0FBMkM7QUFDM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQThEOztBQUU5RCw4REFBOEQ7O0FBRTlEO0FBQ0EsS0FBSztBQUNMLDhEQUE4RDs7QUFFOUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wseUJBQXlCLDJCQUEyQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpREFBaUQ7O0FBRWpEO0FBQ0E7QUFDQSxnRUFBZ0U7O0FBRWhFO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBLHNDQUFzQztBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsMkJBQTJCO0FBQ2xEO0FBQ0EsdUNBQXVDOztBQUV2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNDQUFzQztBQUN0Qzs7QUFFQSxrQ0FBa0M7QUFDbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsdUNBQXVDO0FBQzFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQix3Q0FBd0M7QUFDM0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQix5Q0FBeUM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQix5Q0FBeUM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsbUNBQW1DO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUJBQW1CLHdDQUF3QztBQUMzRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOENBQThDOztBQUU5QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxVQUFVLEtBQXFDLGdGQUFnRixDQUFNO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0wsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7O0FBRUE7O0FBRUEsbUJBQW1CLDBCQUEwQjtBQUM3Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLEtBQXFDLHVIQUF1SCxDQUFNO0FBQ3hLOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsSUFBSSxLQUFxQyw2SUFBNkksQ0FBTTtBQUM1TDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIscUJBQXFCO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsbUNBQW1DLFFBQVE7QUFDM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQSxpQkFBaUIsNEJBQTRCO0FBQzdDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR0EsSUFBSSxLQUFxQyx1R0FBdUcsQ0FBTTtBQUN0Sjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRkFBc0YsS0FBSyxLQUFxQyxvRkFBb0YsQ0FBTTtBQUMxTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsSUFBSSxLQUFxQyxnRUFBZ0UsQ0FBTTtBQUMvRztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwyQ0FBMkM7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLHdCQUF3QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7OztBQUc5RTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QjtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwsbUJBQW1CLG9CQUFvQjtBQUN2QztBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzRUFBc0U7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTCxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwwRUFBMEUsYUFBYTtBQUN2RjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtB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QSxpRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSwwQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59IiwiaW1wb3J0IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59IiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzOyIsImZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpO1xuICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcbiAgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHNMb29zZTsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgeyBleGFjdFByb3AgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuZXhwb3J0IHZhciBodG1sID0ge1xuICBXZWJraXRGb250U21vb3RoaW5nOiAnYW50aWFsaWFzZWQnLFxuICAvLyBBbnRpYWxpYXNpbmcuXG4gIE1vek9zeEZvbnRTbW9vdGhpbmc6ICdncmF5c2NhbGUnLFxuICAvLyBBbnRpYWxpYXNpbmcuXG4gIC8vIENoYW5nZSBmcm9tIGBib3gtc2l6aW5nOiBjb250ZW50LWJveGAgc28gdGhhdCBgd2lkdGhgXG4gIC8vIGlzIG5vdCBhZmZlY3RlZCBieSBgcGFkZGluZ2Agb3IgYGJvcmRlcmAuXG4gIGJveFNpemluZzogJ2JvcmRlci1ib3gnXG59O1xuZXhwb3J0IHZhciBib2R5ID0gZnVuY3Rpb24gYm9keSh0aGVtZSkge1xuICByZXR1cm4gX2V4dGVuZHMoe1xuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeVxuICB9LCB0aGVtZS50eXBvZ3JhcGh5LmJvZHkyLCB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQuZGVmYXVsdCxcbiAgICAnQG1lZGlhIHByaW50Jzoge1xuICAgICAgLy8gU2F2ZSBwcmludGVyIGluay5cbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGVcbiAgICB9XG4gIH0pO1xufTtcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgJ0BnbG9iYWwnOiB7XG4gICAgICBodG1sOiBodG1sLFxuICAgICAgJyosICo6OmJlZm9yZSwgKjo6YWZ0ZXInOiB7XG4gICAgICAgIGJveFNpemluZzogJ2luaGVyaXQnXG4gICAgICB9LFxuICAgICAgJ3N0cm9uZywgYic6IHtcbiAgICAgICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0Qm9sZFxuICAgICAgfSxcbiAgICAgIGJvZHk6IF9leHRlbmRzKHtcbiAgICAgICAgbWFyZ2luOiAwXG4gICAgICB9LCBib2R5KHRoZW1lKSwge1xuICAgICAgICAvLyBBZGQgc3VwcG9ydCBmb3IgZG9jdW1lbnQuYm9keS5yZXF1ZXN0RnVsbFNjcmVlbigpLlxuICAgICAgICAvLyBPdGhlciBlbGVtZW50cywgaWYgYmFja2dyb3VuZCB0cmFuc3BhcmVudCwgYXJlIG5vdCBzdXBwb3J0ZWQuXG4gICAgICAgICcmOjpiYWNrZHJvcCc6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9O1xufTtcbi8qKlxuICogS2lja3N0YXJ0IGFuIGVsZWdhbnQsIGNvbnNpc3RlbnQsIGFuZCBzaW1wbGUgYmFzZWxpbmUgdG8gYnVpbGQgdXBvbi5cbiAqL1xuXG5mdW5jdGlvbiBDc3NCYXNlbGluZShwcm9wcykge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuICB2YXIgX3Byb3BzJGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjaGlsZHJlbiA9IF9wcm9wcyRjaGlsZHJlbiA9PT0gdm9pZCAwID8gbnVsbCA6IF9wcm9wcyRjaGlsZHJlbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzO1xuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBjaGlsZHJlbik7XG59XG5cbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IENzc0Jhc2VsaW5lLnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIFlvdSBjYW4gd3JhcCBhIG5vZGUuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdFxufSA6IHZvaWQgMDtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIENzc0Jhc2VsaW5lWydwcm9wVHlwZXMnICsgJyddID0gZXhhY3RQcm9wKENzc0Jhc2VsaW5lLnByb3BUeXBlcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlDc3NCYXNlbGluZSdcbn0pKENzc0Jhc2VsaW5lKTsiLCJ2YXIgYmx1ZSA9IHtcbiAgNTA6ICcjZTNmMmZkJyxcbiAgMTAwOiAnI2JiZGVmYicsXG4gIDIwMDogJyM5MGNhZjknLFxuICAzMDA6ICcjNjRiNWY2JyxcbiAgNDAwOiAnIzQyYTVmNScsXG4gIDUwMDogJyMyMTk2ZjMnLFxuICA2MDA6ICcjMWU4OGU1JyxcbiAgNzAwOiAnIzE5NzZkMicsXG4gIDgwMDogJyMxNTY1YzAnLFxuICA5MDA6ICcjMGQ0N2ExJyxcbiAgQTEwMDogJyM4MmIxZmYnLFxuICBBMjAwOiAnIzQ0OGFmZicsXG4gIEE0MDA6ICcjMjk3OWZmJyxcbiAgQTcwMDogJyMyOTYyZmYnXG59O1xuZXhwb3J0IGRlZmF1bHQgYmx1ZTsiLCJ2YXIgY29tbW9uID0ge1xuICBibGFjazogJyMwMDAnLFxuICB3aGl0ZTogJyNmZmYnXG59O1xuZXhwb3J0IGRlZmF1bHQgY29tbW9uOyIsInZhciBncmVlbiA9IHtcbiAgNTA6ICcjZThmNWU5JyxcbiAgMTAwOiAnI2M4ZTZjOScsXG4gIDIwMDogJyNhNWQ2YTcnLFxuICAzMDA6ICcjODFjNzg0JyxcbiAgNDAwOiAnIzY2YmI2YScsXG4gIDUwMDogJyM0Y2FmNTAnLFxuICA2MDA6ICcjNDNhMDQ3JyxcbiAgNzAwOiAnIzM4OGUzYycsXG4gIDgwMDogJyMyZTdkMzInLFxuICA5MDA6ICcjMWI1ZTIwJyxcbiAgQTEwMDogJyNiOWY2Y2EnLFxuICBBMjAwOiAnIzY5ZjBhZScsXG4gIEE0MDA6ICcjMDBlNjc2JyxcbiAgQTcwMDogJyMwMGM4NTMnXG59O1xuZXhwb3J0IGRlZmF1bHQgZ3JlZW47IiwidmFyIGdyZXkgPSB7XG4gIDUwOiAnI2ZhZmFmYScsXG4gIDEwMDogJyNmNWY1ZjUnLFxuICAyMDA6ICcjZWVlZWVlJyxcbiAgMzAwOiAnI2UwZTBlMCcsXG4gIDQwMDogJyNiZGJkYmQnLFxuICA1MDA6ICcjOWU5ZTllJyxcbiAgNjAwOiAnIzc1NzU3NScsXG4gIDcwMDogJyM2MTYxNjEnLFxuICA4MDA6ICcjNDI0MjQyJyxcbiAgOTAwOiAnIzIxMjEyMScsXG4gIEExMDA6ICcjZDVkNWQ1JyxcbiAgQTIwMDogJyNhYWFhYWEnLFxuICBBNDAwOiAnIzMwMzAzMCcsXG4gIEE3MDA6ICcjNjE2MTYxJ1xufTtcbmV4cG9ydCBkZWZhdWx0IGdyZXk7IiwidmFyIGluZGlnbyA9IHtcbiAgNTA6ICcjZThlYWY2JyxcbiAgMTAwOiAnI2M1Y2FlOScsXG4gIDIwMDogJyM5ZmE4ZGEnLFxuICAzMDA6ICcjNzk4NmNiJyxcbiAgNDAwOiAnIzVjNmJjMCcsXG4gIDUwMDogJyMzZjUxYjUnLFxuICA2MDA6ICcjMzk0OWFiJyxcbiAgNzAwOiAnIzMwM2Y5ZicsXG4gIDgwMDogJyMyODM1OTMnLFxuICA5MDA6ICcjMWEyMzdlJyxcbiAgQTEwMDogJyM4YzllZmYnLFxuICBBMjAwOiAnIzUzNmRmZScsXG4gIEE0MDA6ICcjM2Q1YWZlJyxcbiAgQTcwMDogJyMzMDRmZmUnXG59O1xuZXhwb3J0IGRlZmF1bHQgaW5kaWdvOyIsInZhciBvcmFuZ2UgPSB7XG4gIDUwOiAnI2ZmZjNlMCcsXG4gIDEwMDogJyNmZmUwYjInLFxuICAyMDA6ICcjZmZjYzgwJyxcbiAgMzAwOiAnI2ZmYjc0ZCcsXG4gIDQwMDogJyNmZmE3MjYnLFxuICA1MDA6ICcjZmY5ODAwJyxcbiAgNjAwOiAnI2ZiOGMwMCcsXG4gIDcwMDogJyNmNTdjMDAnLFxuICA4MDA6ICcjZWY2YzAwJyxcbiAgOTAwOiAnI2U2NTEwMCcsXG4gIEExMDA6ICcjZmZkMTgwJyxcbiAgQTIwMDogJyNmZmFiNDAnLFxuICBBNDAwOiAnI2ZmOTEwMCcsXG4gIEE3MDA6ICcjZmY2ZDAwJ1xufTtcbmV4cG9ydCBkZWZhdWx0IG9yYW5nZTsiLCJ2YXIgcGluayA9IHtcbiAgNTA6ICcjZmNlNGVjJyxcbiAgMTAwOiAnI2Y4YmJkMCcsXG4gIDIwMDogJyNmNDhmYjEnLFxuICAzMDA6ICcjZjA2MjkyJyxcbiAgNDAwOiAnI2VjNDA3YScsXG4gIDUwMDogJyNlOTFlNjMnLFxuICA2MDA6ICcjZDgxYjYwJyxcbiAgNzAwOiAnI2MyMTg1YicsXG4gIDgwMDogJyNhZDE0NTcnLFxuICA5MDA6ICcjODgwZTRmJyxcbiAgQTEwMDogJyNmZjgwYWInLFxuICBBMjAwOiAnI2ZmNDA4MScsXG4gIEE0MDA6ICcjZjUwMDU3JyxcbiAgQTcwMDogJyNjNTExNjInXG59O1xuZXhwb3J0IGRlZmF1bHQgcGluazsiLCJ2YXIgcmVkID0ge1xuICA1MDogJyNmZmViZWUnLFxuICAxMDA6ICcjZmZjZGQyJyxcbiAgMjAwOiAnI2VmOWE5YScsXG4gIDMwMDogJyNlNTczNzMnLFxuICA0MDA6ICcjZWY1MzUwJyxcbiAgNTAwOiAnI2Y0NDMzNicsXG4gIDYwMDogJyNlNTM5MzUnLFxuICA3MDA6ICcjZDMyZjJmJyxcbiAgODAwOiAnI2M2MjgyOCcsXG4gIDkwMDogJyNiNzFjMWMnLFxuICBBMTAwOiAnI2ZmOGE4MCcsXG4gIEEyMDA6ICcjZmY1MjUyJyxcbiAgQTQwMDogJyNmZjE3NDQnLFxuICBBNzAwOiAnI2Q1MDAwMCdcbn07XG5leHBvcnQgZGVmYXVsdCByZWQ7IiwiaW1wb3J0IHsgZm9ybWF0TXVpRXJyb3JNZXNzYWdlIGFzIF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3V0aWxzXCI7XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5cbi8qKlxuICogUmV0dXJucyBhIG51bWJlciB3aG9zZSB2YWx1ZSBpcyBsaW1pdGVkIHRvIHRoZSBnaXZlbiByYW5nZS5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgVGhlIHZhbHVlIHRvIGJlIGNsYW1wZWRcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gVGhlIGxvd2VyIGJvdW5kYXJ5IG9mIHRoZSBvdXRwdXQgcmFuZ2VcbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggVGhlIHVwcGVyIGJvdW5kYXJ5IG9mIHRoZSBvdXRwdXQgcmFuZ2VcbiAqIEByZXR1cm5zIHtudW1iZXJ9IEEgbnVtYmVyIGluIHRoZSByYW5nZSBbbWluLCBtYXhdXG4gKi9cbmZ1bmN0aW9uIGNsYW1wKHZhbHVlKSB7XG4gIHZhciBtaW4gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG4gIHZhciBtYXggPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IDE7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAodmFsdWUgPCBtaW4gfHwgdmFsdWUgPiBtYXgpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJNYXRlcmlhbC1VSTogVGhlIHZhbHVlIHByb3ZpZGVkIFwiLmNvbmNhdCh2YWx1ZSwgXCIgaXMgb3V0IG9mIHJhbmdlIFtcIikuY29uY2F0KG1pbiwgXCIsIFwiKS5jb25jYXQobWF4LCBcIl0uXCIpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobWluLCB2YWx1ZSksIG1heCk7XG59XG4vKipcbiAqIENvbnZlcnRzIGEgY29sb3IgZnJvbSBDU1MgaGV4IGZvcm1hdCB0byBDU1MgcmdiIGZvcm1hdC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSBIZXggY29sb3IsIGkuZS4gI25ubiBvciAjbm5ubm5uXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIENTUyByZ2IgY29sb3Igc3RyaW5nXG4gKi9cblxuXG5leHBvcnQgZnVuY3Rpb24gaGV4VG9SZ2IoY29sb3IpIHtcbiAgY29sb3IgPSBjb2xvci5zdWJzdHIoMSk7XG4gIHZhciByZSA9IG5ldyBSZWdFeHAoXCIuezEsXCIuY29uY2F0KGNvbG9yLmxlbmd0aCA+PSA2ID8gMiA6IDEsIFwifVwiKSwgJ2cnKTtcbiAgdmFyIGNvbG9ycyA9IGNvbG9yLm1hdGNoKHJlKTtcblxuICBpZiAoY29sb3JzICYmIGNvbG9yc1swXS5sZW5ndGggPT09IDEpIHtcbiAgICBjb2xvcnMgPSBjb2xvcnMubWFwKGZ1bmN0aW9uIChuKSB7XG4gICAgICByZXR1cm4gbiArIG47XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gY29sb3JzID8gXCJyZ2JcIi5jb25jYXQoY29sb3JzLmxlbmd0aCA9PT0gNCA/ICdhJyA6ICcnLCBcIihcIikuY29uY2F0KGNvbG9ycy5tYXAoZnVuY3Rpb24gKG4sIGluZGV4KSB7XG4gICAgcmV0dXJuIGluZGV4IDwgMyA/IHBhcnNlSW50KG4sIDE2KSA6IE1hdGgucm91bmQocGFyc2VJbnQobiwgMTYpIC8gMjU1ICogMTAwMCkgLyAxMDAwO1xuICB9KS5qb2luKCcsICcpLCBcIilcIikgOiAnJztcbn1cblxuZnVuY3Rpb24gaW50VG9IZXgoaW50KSB7XG4gIHZhciBoZXggPSBpbnQudG9TdHJpbmcoMTYpO1xuICByZXR1cm4gaGV4Lmxlbmd0aCA9PT0gMSA/IFwiMFwiLmNvbmNhdChoZXgpIDogaGV4O1xufVxuLyoqXG4gKiBDb252ZXJ0cyBhIGNvbG9yIGZyb20gQ1NTIHJnYiBmb3JtYXQgdG8gQ1NTIGhleCBmb3JtYXQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gUkdCIGNvbG9yLCBpLmUuIHJnYihuLCBuLCBuKVxuICogQHJldHVybnMge3N0cmluZ30gQSBDU1MgcmdiIGNvbG9yIHN0cmluZywgaS5lLiAjbm5ubm5uXG4gKi9cblxuXG5leHBvcnQgZnVuY3Rpb24gcmdiVG9IZXgoY29sb3IpIHtcbiAgLy8gSWRlbXBvdGVudFxuICBpZiAoY29sb3IuaW5kZXhPZignIycpID09PSAwKSB7XG4gICAgcmV0dXJuIGNvbG9yO1xuICB9XG5cbiAgdmFyIF9kZWNvbXBvc2VDb2xvciA9IGRlY29tcG9zZUNvbG9yKGNvbG9yKSxcbiAgICAgIHZhbHVlcyA9IF9kZWNvbXBvc2VDb2xvci52YWx1ZXM7XG5cbiAgcmV0dXJuIFwiI1wiLmNvbmNhdCh2YWx1ZXMubWFwKGZ1bmN0aW9uIChuKSB7XG4gICAgcmV0dXJuIGludFRvSGV4KG4pO1xuICB9KS5qb2luKCcnKSk7XG59XG4vKipcbiAqIENvbnZlcnRzIGEgY29sb3IgZnJvbSBoc2wgZm9ybWF0IHRvIHJnYiBmb3JtYXQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gSFNMIGNvbG9yIHZhbHVlc1xuICogQHJldHVybnMge3N0cmluZ30gcmdiIGNvbG9yIHZhbHVlc1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBoc2xUb1JnYihjb2xvcikge1xuICBjb2xvciA9IGRlY29tcG9zZUNvbG9yKGNvbG9yKTtcbiAgdmFyIF9jb2xvciA9IGNvbG9yLFxuICAgICAgdmFsdWVzID0gX2NvbG9yLnZhbHVlcztcbiAgdmFyIGggPSB2YWx1ZXNbMF07XG4gIHZhciBzID0gdmFsdWVzWzFdIC8gMTAwO1xuICB2YXIgbCA9IHZhbHVlc1syXSAvIDEwMDtcbiAgdmFyIGEgPSBzICogTWF0aC5taW4obCwgMSAtIGwpO1xuXG4gIHZhciBmID0gZnVuY3Rpb24gZihuKSB7XG4gICAgdmFyIGsgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IChuICsgaCAvIDMwKSAlIDEyO1xuICAgIHJldHVybiBsIC0gYSAqIE1hdGgubWF4KE1hdGgubWluKGsgLSAzLCA5IC0gaywgMSksIC0xKTtcbiAgfTtcblxuICB2YXIgdHlwZSA9ICdyZ2InO1xuICB2YXIgcmdiID0gW01hdGgucm91bmQoZigwKSAqIDI1NSksIE1hdGgucm91bmQoZig4KSAqIDI1NSksIE1hdGgucm91bmQoZig0KSAqIDI1NSldO1xuXG4gIGlmIChjb2xvci50eXBlID09PSAnaHNsYScpIHtcbiAgICB0eXBlICs9ICdhJztcbiAgICByZ2IucHVzaCh2YWx1ZXNbM10pO1xuICB9XG5cbiAgcmV0dXJuIHJlY29tcG9zZUNvbG9yKHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIHZhbHVlczogcmdiXG4gIH0pO1xufVxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB3aXRoIHRoZSB0eXBlIGFuZCB2YWx1ZXMgb2YgYSBjb2xvci5cbiAqXG4gKiBOb3RlOiBEb2VzIG5vdCBzdXBwb3J0IHJnYiAlIHZhbHVlcy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSBDU1MgY29sb3IsIGkuZS4gb25lIG9mOiAjbm5uLCAjbm5ubm5uLCByZ2IoKSwgcmdiYSgpLCBoc2woKSwgaHNsYSgpXG4gKiBAcmV0dXJucyB7b2JqZWN0fSAtIEEgTVVJIGNvbG9yIG9iamVjdDoge3R5cGU6IHN0cmluZywgdmFsdWVzOiBudW1iZXJbXX1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZGVjb21wb3NlQ29sb3IoY29sb3IpIHtcbiAgLy8gSWRlbXBvdGVudFxuICBpZiAoY29sb3IudHlwZSkge1xuICAgIHJldHVybiBjb2xvcjtcbiAgfVxuXG4gIGlmIChjb2xvci5jaGFyQXQoMCkgPT09ICcjJykge1xuICAgIHJldHVybiBkZWNvbXBvc2VDb2xvcihoZXhUb1JnYihjb2xvcikpO1xuICB9XG5cbiAgdmFyIG1hcmtlciA9IGNvbG9yLmluZGV4T2YoJygnKTtcbiAgdmFyIHR5cGUgPSBjb2xvci5zdWJzdHJpbmcoMCwgbWFya2VyKTtcblxuICBpZiAoWydyZ2InLCAncmdiYScsICdoc2wnLCAnaHNsYSddLmluZGV4T2YodHlwZSkgPT09IC0xKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFwiTWF0ZXJpYWwtVUk6IFVuc3VwcG9ydGVkIGBcIi5jb25jYXQoY29sb3IsIFwiYCBjb2xvci5cXG5XZSBzdXBwb3J0IHRoZSBmb2xsb3dpbmcgZm9ybWF0czogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKS5cIikgOiBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlKDMsIGNvbG9yKSk7XG4gIH1cblxuICB2YXIgdmFsdWVzID0gY29sb3Iuc3Vic3RyaW5nKG1hcmtlciArIDEsIGNvbG9yLmxlbmd0aCAtIDEpLnNwbGl0KCcsJyk7XG4gIHZhbHVlcyA9IHZhbHVlcy5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIHZhbHVlczogdmFsdWVzXG4gIH07XG59XG4vKipcbiAqIENvbnZlcnRzIGEgY29sb3Igb2JqZWN0IHdpdGggdHlwZSBhbmQgdmFsdWVzIHRvIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb2xvciAtIERlY29tcG9zZWQgY29sb3JcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvci50eXBlIC0gT25lIG9mOiAncmdiJywgJ3JnYmEnLCAnaHNsJywgJ2hzbGEnXG4gKiBAcGFyYW0ge2FycmF5fSBjb2xvci52YWx1ZXMgLSBbbixuLG5dIG9yIFtuLG4sbixuXVxuICogQHJldHVybnMge3N0cmluZ30gQSBDU1MgY29sb3Igc3RyaW5nXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJlY29tcG9zZUNvbG9yKGNvbG9yKSB7XG4gIHZhciB0eXBlID0gY29sb3IudHlwZTtcbiAgdmFyIHZhbHVlcyA9IGNvbG9yLnZhbHVlcztcblxuICBpZiAodHlwZS5pbmRleE9mKCdyZ2InKSAhPT0gLTEpIHtcbiAgICAvLyBPbmx5IGNvbnZlcnQgdGhlIGZpcnN0IDMgdmFsdWVzIHRvIGludCAoaS5lLiBub3QgYWxwaGEpXG4gICAgdmFsdWVzID0gdmFsdWVzLm1hcChmdW5jdGlvbiAobiwgaSkge1xuICAgICAgcmV0dXJuIGkgPCAzID8gcGFyc2VJbnQobiwgMTApIDogbjtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0eXBlLmluZGV4T2YoJ2hzbCcpICE9PSAtMSkge1xuICAgIHZhbHVlc1sxXSA9IFwiXCIuY29uY2F0KHZhbHVlc1sxXSwgXCIlXCIpO1xuICAgIHZhbHVlc1syXSA9IFwiXCIuY29uY2F0KHZhbHVlc1syXSwgXCIlXCIpO1xuICB9XG5cbiAgcmV0dXJuIFwiXCIuY29uY2F0KHR5cGUsIFwiKFwiKS5jb25jYXQodmFsdWVzLmpvaW4oJywgJyksIFwiKVwiKTtcbn1cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgY29udHJhc3QgcmF0aW8gYmV0d2VlbiB0d28gY29sb3JzLlxuICpcbiAqIEZvcm11bGE6IGh0dHBzOi8vd3d3LnczLm9yZy9UUi9XQ0FHMjAtVEVDSFMvRzE3Lmh0bWwjRzE3LXRlc3RzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGZvcmVncm91bmQgLSBDU1MgY29sb3IsIGkuZS4gb25lIG9mOiAjbm5uLCAjbm5ubm5uLCByZ2IoKSwgcmdiYSgpLCBoc2woKSwgaHNsYSgpXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFja2dyb3VuZCAtIENTUyBjb2xvciwgaS5lLiBvbmUgb2Y6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKClcbiAqIEByZXR1cm5zIHtudW1iZXJ9IEEgY29udHJhc3QgcmF0aW8gdmFsdWUgaW4gdGhlIHJhbmdlIDAgLSAyMS5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29udHJhc3RSYXRpbyhmb3JlZ3JvdW5kLCBiYWNrZ3JvdW5kKSB7XG4gIHZhciBsdW1BID0gZ2V0THVtaW5hbmNlKGZvcmVncm91bmQpO1xuICB2YXIgbHVtQiA9IGdldEx1bWluYW5jZShiYWNrZ3JvdW5kKTtcbiAgcmV0dXJuIChNYXRoLm1heChsdW1BLCBsdW1CKSArIDAuMDUpIC8gKE1hdGgubWluKGx1bUEsIGx1bUIpICsgMC4wNSk7XG59XG4vKipcbiAqIFRoZSByZWxhdGl2ZSBicmlnaHRuZXNzIG9mIGFueSBwb2ludCBpbiBhIGNvbG9yIHNwYWNlLFxuICogbm9ybWFsaXplZCB0byAwIGZvciBkYXJrZXN0IGJsYWNrIGFuZCAxIGZvciBsaWdodGVzdCB3aGl0ZS5cbiAqXG4gKiBGb3JtdWxhOiBodHRwczovL3d3dy53My5vcmcvVFIvV0NBRzIwLVRFQ0hTL0cxNy5odG1sI0cxNy10ZXN0c1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIENTUyBjb2xvciwgaS5lLiBvbmUgb2Y6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKClcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSByZWxhdGl2ZSBicmlnaHRuZXNzIG9mIHRoZSBjb2xvciBpbiB0aGUgcmFuZ2UgMCAtIDFcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0THVtaW5hbmNlKGNvbG9yKSB7XG4gIGNvbG9yID0gZGVjb21wb3NlQ29sb3IoY29sb3IpO1xuICB2YXIgcmdiID0gY29sb3IudHlwZSA9PT0gJ2hzbCcgPyBkZWNvbXBvc2VDb2xvcihoc2xUb1JnYihjb2xvcikpLnZhbHVlcyA6IGNvbG9yLnZhbHVlcztcbiAgcmdiID0gcmdiLm1hcChmdW5jdGlvbiAodmFsKSB7XG4gICAgdmFsIC89IDI1NTsgLy8gbm9ybWFsaXplZFxuXG4gICAgcmV0dXJuIHZhbCA8PSAwLjAzOTI4ID8gdmFsIC8gMTIuOTIgOiBNYXRoLnBvdygodmFsICsgMC4wNTUpIC8gMS4wNTUsIDIuNCk7XG4gIH0pOyAvLyBUcnVuY2F0ZSBhdCAzIGRpZ2l0c1xuXG4gIHJldHVybiBOdW1iZXIoKDAuMjEyNiAqIHJnYlswXSArIDAuNzE1MiAqIHJnYlsxXSArIDAuMDcyMiAqIHJnYlsyXSkudG9GaXhlZCgzKSk7XG59XG4vKipcbiAqIERhcmtlbiBvciBsaWdodGVuIGEgY29sb3IsIGRlcGVuZGluZyBvbiBpdHMgbHVtaW5hbmNlLlxuICogTGlnaHQgY29sb3JzIGFyZSBkYXJrZW5lZCwgZGFyayBjb2xvcnMgYXJlIGxpZ2h0ZW5lZC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSBDU1MgY29sb3IsIGkuZS4gb25lIG9mOiAjbm5uLCAjbm5ubm5uLCByZ2IoKSwgcmdiYSgpLCBoc2woKSwgaHNsYSgpXG4gKiBAcGFyYW0ge251bWJlcn0gY29lZmZpY2llbnQ9MC4xNSAtIG11bHRpcGxpZXIgaW4gdGhlIHJhbmdlIDAgLSAxXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIENTUyBjb2xvciBzdHJpbmcuIEhleCBpbnB1dCB2YWx1ZXMgYXJlIHJldHVybmVkIGFzIHJnYlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBlbXBoYXNpemUoY29sb3IpIHtcbiAgdmFyIGNvZWZmaWNpZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwLjE1O1xuICByZXR1cm4gZ2V0THVtaW5hbmNlKGNvbG9yKSA+IDAuNSA/IGRhcmtlbihjb2xvciwgY29lZmZpY2llbnQpIDogbGlnaHRlbihjb2xvciwgY29lZmZpY2llbnQpO1xufVxudmFyIHdhcm5lZE9uY2UgPSBmYWxzZTtcbi8qKlxuICogU2V0IHRoZSBhYnNvbHV0ZSB0cmFuc3BhcmVuY3kgb2YgYSBjb2xvci5cbiAqIEFueSBleGlzdGluZyBhbHBoYSB2YWx1ZXMgYXJlIG92ZXJ3cml0dGVuLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIENTUyBjb2xvciwgaS5lLiBvbmUgb2Y6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKClcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSAtIHZhbHVlIHRvIHNldCB0aGUgYWxwaGEgY2hhbm5lbCB0byBpbiB0aGUgcmFuZ2UgMCAtMVxuICogQHJldHVybnMge3N0cmluZ30gQSBDU1MgY29sb3Igc3RyaW5nLiBIZXggaW5wdXQgdmFsdWVzIGFyZSByZXR1cm5lZCBhcyByZ2JcbiAqXG4gKiBAZGVwcmVjYXRlZFxuICogVXNlIGBpbXBvcnQgeyBhbHBoYSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydgIGluc3RlYWQuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZhZGUoY29sb3IsIHZhbHVlKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKCF3YXJuZWRPbmNlKSB7XG4gICAgICB3YXJuZWRPbmNlID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoWydNYXRlcmlhbC1VSTogVGhlIGBmYWRlYCBjb2xvciB1dGlsaXR5IHdhcyByZW5hbWVkIHRvIGBhbHBoYWAgdG8gYmV0dGVyIGRlc2NyaWJlIGl0cyBmdW5jdGlvbmFsaXR5LicsICcnLCBcIllvdSBzaG91bGQgdXNlIGBpbXBvcnQgeyBhbHBoYSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydgXCJdLmpvaW4oJ1xcbicpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYWxwaGEoY29sb3IsIHZhbHVlKTtcbn1cbi8qKlxuICogU2V0IHRoZSBhYnNvbHV0ZSB0cmFuc3BhcmVuY3kgb2YgYSBjb2xvci5cbiAqIEFueSBleGlzdGluZyBhbHBoYSB2YWx1ZSBpcyBvdmVyd3JpdHRlbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSBDU1MgY29sb3IsIGkuZS4gb25lIG9mOiAjbm5uLCAjbm5ubm5uLCByZ2IoKSwgcmdiYSgpLCBoc2woKSwgaHNsYSgpXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgLSB2YWx1ZSB0byBzZXQgdGhlIGFscGhhIGNoYW5uZWwgdG8gaW4gdGhlIHJhbmdlIDAtMVxuICogQHJldHVybnMge3N0cmluZ30gQSBDU1MgY29sb3Igc3RyaW5nLiBIZXggaW5wdXQgdmFsdWVzIGFyZSByZXR1cm5lZCBhcyByZ2JcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYWxwaGEoY29sb3IsIHZhbHVlKSB7XG4gIGNvbG9yID0gZGVjb21wb3NlQ29sb3IoY29sb3IpO1xuICB2YWx1ZSA9IGNsYW1wKHZhbHVlKTtcblxuICBpZiAoY29sb3IudHlwZSA9PT0gJ3JnYicgfHwgY29sb3IudHlwZSA9PT0gJ2hzbCcpIHtcbiAgICBjb2xvci50eXBlICs9ICdhJztcbiAgfVxuXG4gIGNvbG9yLnZhbHVlc1szXSA9IHZhbHVlO1xuICByZXR1cm4gcmVjb21wb3NlQ29sb3IoY29sb3IpO1xufVxuLyoqXG4gKiBEYXJrZW5zIGEgY29sb3IuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxuICogQHBhcmFtIHtudW1iZXJ9IGNvZWZmaWNpZW50IC0gbXVsdGlwbGllciBpbiB0aGUgcmFuZ2UgMCAtIDFcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgQ1NTIGNvbG9yIHN0cmluZy4gSGV4IGlucHV0IHZhbHVlcyBhcmUgcmV0dXJuZWQgYXMgcmdiXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRhcmtlbihjb2xvciwgY29lZmZpY2llbnQpIHtcbiAgY29sb3IgPSBkZWNvbXBvc2VDb2xvcihjb2xvcik7XG4gIGNvZWZmaWNpZW50ID0gY2xhbXAoY29lZmZpY2llbnQpO1xuXG4gIGlmIChjb2xvci50eXBlLmluZGV4T2YoJ2hzbCcpICE9PSAtMSkge1xuICAgIGNvbG9yLnZhbHVlc1syXSAqPSAxIC0gY29lZmZpY2llbnQ7XG4gIH0gZWxzZSBpZiAoY29sb3IudHlwZS5pbmRleE9mKCdyZ2InKSAhPT0gLTEpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDM7IGkgKz0gMSkge1xuICAgICAgY29sb3IudmFsdWVzW2ldICo9IDEgLSBjb2VmZmljaWVudDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVjb21wb3NlQ29sb3IoY29sb3IpO1xufVxuLyoqXG4gKiBMaWdodGVucyBhIGNvbG9yLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIENTUyBjb2xvciwgaS5lLiBvbmUgb2Y6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKClcbiAqIEBwYXJhbSB7bnVtYmVyfSBjb2VmZmljaWVudCAtIG11bHRpcGxpZXIgaW4gdGhlIHJhbmdlIDAgLSAxXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIENTUyBjb2xvciBzdHJpbmcuIEhleCBpbnB1dCB2YWx1ZXMgYXJlIHJldHVybmVkIGFzIHJnYlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBsaWdodGVuKGNvbG9yLCBjb2VmZmljaWVudCkge1xuICBjb2xvciA9IGRlY29tcG9zZUNvbG9yKGNvbG9yKTtcbiAgY29lZmZpY2llbnQgPSBjbGFtcChjb2VmZmljaWVudCk7XG5cbiAgaWYgKGNvbG9yLnR5cGUuaW5kZXhPZignaHNsJykgIT09IC0xKSB7XG4gICAgY29sb3IudmFsdWVzWzJdICs9ICgxMDAgLSBjb2xvci52YWx1ZXNbMl0pICogY29lZmZpY2llbnQ7XG4gIH0gZWxzZSBpZiAoY29sb3IudHlwZS5pbmRleE9mKCdyZ2InKSAhPT0gLTEpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDM7IGkgKz0gMSkge1xuICAgICAgY29sb3IudmFsdWVzW2ldICs9ICgyNTUgLSBjb2xvci52YWx1ZXNbaV0pICogY29lZmZpY2llbnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlY29tcG9zZUNvbG9yKGNvbG9yKTtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG4vLyBTb3J0ZWQgQVNDIGJ5IHNpemUuIFRoYXQncyBpbXBvcnRhbnQuXG4vLyBJdCBjYW4ndCBiZSBjb25maWd1cmVkIGFzIGl0J3MgdXNlZCBzdGF0aWNhbGx5IGZvciBwcm9wVHlwZXMuXG5leHBvcnQgdmFyIGtleXMgPSBbJ3hzJywgJ3NtJywgJ21kJywgJ2xnJywgJ3hsJ107IC8vIEtlZXAgaW4gbWluZCB0aGF0IEBtZWRpYSBpcyBpbmNsdXNpdmUgYnkgdGhlIENTUyBzcGVjaWZpY2F0aW9uLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVCcmVha3BvaW50cyhicmVha3BvaW50cykge1xuICB2YXIgX2JyZWFrcG9pbnRzJHZhbHVlcyA9IGJyZWFrcG9pbnRzLnZhbHVlcyxcbiAgICAgIHZhbHVlcyA9IF9icmVha3BvaW50cyR2YWx1ZXMgPT09IHZvaWQgMCA/IHtcbiAgICB4czogMCxcbiAgICBzbTogNjAwLFxuICAgIG1kOiA5NjAsXG4gICAgbGc6IDEyODAsXG4gICAgeGw6IDE5MjBcbiAgfSA6IF9icmVha3BvaW50cyR2YWx1ZXMsXG4gICAgICBfYnJlYWtwb2ludHMkdW5pdCA9IGJyZWFrcG9pbnRzLnVuaXQsXG4gICAgICB1bml0ID0gX2JyZWFrcG9pbnRzJHVuaXQgPT09IHZvaWQgMCA/ICdweCcgOiBfYnJlYWtwb2ludHMkdW5pdCxcbiAgICAgIF9icmVha3BvaW50cyRzdGVwID0gYnJlYWtwb2ludHMuc3RlcCxcbiAgICAgIHN0ZXAgPSBfYnJlYWtwb2ludHMkc3RlcCA9PT0gdm9pZCAwID8gNSA6IF9icmVha3BvaW50cyRzdGVwLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoYnJlYWtwb2ludHMsIFtcInZhbHVlc1wiLCBcInVuaXRcIiwgXCJzdGVwXCJdKTtcblxuICBmdW5jdGlvbiB1cChrZXkpIHtcbiAgICB2YXIgdmFsdWUgPSB0eXBlb2YgdmFsdWVzW2tleV0gPT09ICdudW1iZXInID8gdmFsdWVzW2tleV0gOiBrZXk7XG4gICAgcmV0dXJuIFwiQG1lZGlhIChtaW4td2lkdGg6XCIuY29uY2F0KHZhbHVlKS5jb25jYXQodW5pdCwgXCIpXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZG93bihrZXkpIHtcbiAgICB2YXIgZW5kSW5kZXggPSBrZXlzLmluZGV4T2Yoa2V5KSArIDE7XG4gICAgdmFyIHVwcGVyYm91bmQgPSB2YWx1ZXNba2V5c1tlbmRJbmRleF1dO1xuXG4gICAgaWYgKGVuZEluZGV4ID09PSBrZXlzLmxlbmd0aCkge1xuICAgICAgLy8geGwgZG93biBhcHBsaWVzIHRvIGFsbCBzaXplc1xuICAgICAgcmV0dXJuIHVwKCd4cycpO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZSA9IHR5cGVvZiB1cHBlcmJvdW5kID09PSAnbnVtYmVyJyAmJiBlbmRJbmRleCA+IDAgPyB1cHBlcmJvdW5kIDoga2V5O1xuICAgIHJldHVybiBcIkBtZWRpYSAobWF4LXdpZHRoOlwiLmNvbmNhdCh2YWx1ZSAtIHN0ZXAgLyAxMDApLmNvbmNhdCh1bml0LCBcIilcIik7XG4gIH1cblxuICBmdW5jdGlvbiBiZXR3ZWVuKHN0YXJ0LCBlbmQpIHtcbiAgICB2YXIgZW5kSW5kZXggPSBrZXlzLmluZGV4T2YoZW5kKTtcblxuICAgIGlmIChlbmRJbmRleCA9PT0ga2V5cy5sZW5ndGggLSAxKSB7XG4gICAgICByZXR1cm4gdXAoc3RhcnQpO1xuICAgIH1cblxuICAgIHJldHVybiBcIkBtZWRpYSAobWluLXdpZHRoOlwiLmNvbmNhdCh0eXBlb2YgdmFsdWVzW3N0YXJ0XSA9PT0gJ251bWJlcicgPyB2YWx1ZXNbc3RhcnRdIDogc3RhcnQpLmNvbmNhdCh1bml0LCBcIikgYW5kIFwiKSArIFwiKG1heC13aWR0aDpcIi5jb25jYXQoKGVuZEluZGV4ICE9PSAtMSAmJiB0eXBlb2YgdmFsdWVzW2tleXNbZW5kSW5kZXggKyAxXV0gPT09ICdudW1iZXInID8gdmFsdWVzW2tleXNbZW5kSW5kZXggKyAxXV0gOiBlbmQpIC0gc3RlcCAvIDEwMCkuY29uY2F0KHVuaXQsIFwiKVwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9ubHkoa2V5KSB7XG4gICAgcmV0dXJuIGJldHdlZW4oa2V5LCBrZXkpO1xuICB9XG5cbiAgdmFyIHdhcm5lZE9uY2UgPSBmYWxzZTtcblxuICBmdW5jdGlvbiB3aWR0aChrZXkpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKCF3YXJuZWRPbmNlKSB7XG4gICAgICAgIHdhcm5lZE9uY2UgPSB0cnVlO1xuICAgICAgICBjb25zb2xlLndhcm4oW1wiTWF0ZXJpYWwtVUk6IFRoZSBgdGhlbWUuYnJlYWtwb2ludHMud2lkdGhgIHV0aWxpdHkgaXMgZGVwcmVjYXRlZCBiZWNhdXNlIGl0J3MgcmVkdW5kYW50LlwiLCAnVXNlIHRoZSBgdGhlbWUuYnJlYWtwb2ludHMudmFsdWVzYCBpbnN0ZWFkLiddLmpvaW4oJ1xcbicpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzW2tleV07XG4gIH1cblxuICByZXR1cm4gX2V4dGVuZHMoe1xuICAgIGtleXM6IGtleXMsXG4gICAgdmFsdWVzOiB2YWx1ZXMsXG4gICAgdXA6IHVwLFxuICAgIGRvd246IGRvd24sXG4gICAgYmV0d2VlbjogYmV0d2VlbixcbiAgICBvbmx5OiBvbmx5LFxuICAgIHdpZHRoOiB3aWR0aFxuICB9LCBvdGhlcik7XG59IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWl4aW5zKGJyZWFrcG9pbnRzLCBzcGFjaW5nLCBtaXhpbnMpIHtcbiAgdmFyIF90b29sYmFyO1xuXG4gIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgZ3V0dGVyczogZnVuY3Rpb24gZ3V0dGVycygpIHtcbiAgICAgIHZhciBzdHlsZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgICAgY29uc29sZS53YXJuKFsnTWF0ZXJpYWwtVUk6IHRoZW1lLm1peGlucy5ndXR0ZXJzKCkgaXMgZGVwcmVjYXRlZC4nLCAnWW91IGNhbiB1c2UgdGhlIHNvdXJjZSBvZiB0aGUgbWl4aW4gZGlyZWN0bHk6JywgXCJcXG4gICAgICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZygyKSxcXG4gICAgICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXFxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xcbiAgICAgICAgcGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoMyksXFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMyksXFxuICAgICAgfSxcXG4gICAgICBcIl0uam9pbignXFxuJykpO1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgICAgcGFkZGluZ0xlZnQ6IHNwYWNpbmcoMiksXG4gICAgICAgIHBhZGRpbmdSaWdodDogc3BhY2luZygyKVxuICAgICAgfSwgc3R5bGVzLCBfZGVmaW5lUHJvcGVydHkoe30sIGJyZWFrcG9pbnRzLnVwKCdzbScpLCBfZXh0ZW5kcyh7XG4gICAgICAgIHBhZGRpbmdMZWZ0OiBzcGFjaW5nKDMpLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IHNwYWNpbmcoMylcbiAgICAgIH0sIHN0eWxlc1ticmVha3BvaW50cy51cCgnc20nKV0pKSk7XG4gICAgfSxcbiAgICB0b29sYmFyOiAoX3Rvb2xiYXIgPSB7XG4gICAgICBtaW5IZWlnaHQ6IDU2XG4gICAgfSwgX2RlZmluZVByb3BlcnR5KF90b29sYmFyLCBcIlwiLmNvbmNhdChicmVha3BvaW50cy51cCgneHMnKSwgXCIgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKSwge1xuICAgICAgbWluSGVpZ2h0OiA0OFxuICAgIH0pLCBfZGVmaW5lUHJvcGVydHkoX3Rvb2xiYXIsIGJyZWFrcG9pbnRzLnVwKCdzbScpLCB7XG4gICAgICBtaW5IZWlnaHQ6IDY0XG4gICAgfSksIF90b29sYmFyKVxuICB9LCBtaXhpbnMpO1xufSIsImltcG9ydCB7IGRlZXBtZXJnZSB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5pbXBvcnQgY3JlYXRlVGhlbWUgZnJvbSAnLi9jcmVhdGVUaGVtZSc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNdWlTdHJpY3RNb2RlVGhlbWUob3B0aW9ucykge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gY3JlYXRlVGhlbWUuYXBwbHkodm9pZCAwLCBbZGVlcG1lcmdlKHtcbiAgICB1bnN0YWJsZV9zdHJpY3RNb2RlOiB0cnVlXG4gIH0sIG9wdGlvbnMpXS5jb25jYXQoYXJncykpO1xufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCB7IGZvcm1hdE11aUVycm9yTWVzc2FnZSBhcyBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS91dGlsc1wiO1xuaW1wb3J0IHsgZGVlcG1lcmdlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCBjb21tb24gZnJvbSAnLi4vY29sb3JzL2NvbW1vbic7XG5pbXBvcnQgZ3JleSBmcm9tICcuLi9jb2xvcnMvZ3JleSc7XG5pbXBvcnQgaW5kaWdvIGZyb20gJy4uL2NvbG9ycy9pbmRpZ28nO1xuaW1wb3J0IHBpbmsgZnJvbSAnLi4vY29sb3JzL3BpbmsnO1xuaW1wb3J0IHJlZCBmcm9tICcuLi9jb2xvcnMvcmVkJztcbmltcG9ydCBvcmFuZ2UgZnJvbSAnLi4vY29sb3JzL29yYW5nZSc7XG5pbXBvcnQgYmx1ZSBmcm9tICcuLi9jb2xvcnMvYmx1ZSc7XG5pbXBvcnQgZ3JlZW4gZnJvbSAnLi4vY29sb3JzL2dyZWVuJztcbmltcG9ydCB7IGRhcmtlbiwgZ2V0Q29udHJhc3RSYXRpbywgbGlnaHRlbiB9IGZyb20gJy4vY29sb3JNYW5pcHVsYXRvcic7XG5leHBvcnQgdmFyIGxpZ2h0ID0ge1xuICAvLyBUaGUgY29sb3JzIHVzZWQgdG8gc3R5bGUgdGhlIHRleHQuXG4gIHRleHQ6IHtcbiAgICAvLyBUaGUgbW9zdCBpbXBvcnRhbnQgdGV4dC5cbiAgICBwcmltYXJ5OiAncmdiYSgwLCAwLCAwLCAwLjg3KScsXG4gICAgLy8gU2Vjb25kYXJ5IHRleHQuXG4gICAgc2Vjb25kYXJ5OiAncmdiYSgwLCAwLCAwLCAwLjU0KScsXG4gICAgLy8gRGlzYWJsZWQgdGV4dCBoYXZlIGV2ZW4gbG93ZXIgdmlzdWFsIHByb21pbmVuY2UuXG4gICAgZGlzYWJsZWQ6ICdyZ2JhKDAsIDAsIDAsIDAuMzgpJyxcbiAgICAvLyBUZXh0IGhpbnRzLlxuICAgIGhpbnQ6ICdyZ2JhKDAsIDAsIDAsIDAuMzgpJ1xuICB9LFxuICAvLyBUaGUgY29sb3IgdXNlZCB0byBkaXZpZGUgZGlmZmVyZW50IGVsZW1lbnRzLlxuICBkaXZpZGVyOiAncmdiYSgwLCAwLCAwLCAwLjEyKScsXG4gIC8vIFRoZSBiYWNrZ3JvdW5kIGNvbG9ycyB1c2VkIHRvIHN0eWxlIHRoZSBzdXJmYWNlcy5cbiAgLy8gQ29uc2lzdGVuY3kgYmV0d2VlbiB0aGVzZSB2YWx1ZXMgaXMgaW1wb3J0YW50LlxuICBiYWNrZ3JvdW5kOiB7XG4gICAgcGFwZXI6IGNvbW1vbi53aGl0ZSxcbiAgICBkZWZhdWx0OiBncmV5WzUwXVxuICB9LFxuICAvLyBUaGUgY29sb3JzIHVzZWQgdG8gc3R5bGUgdGhlIGFjdGlvbiBlbGVtZW50cy5cbiAgYWN0aW9uOiB7XG4gICAgLy8gVGhlIGNvbG9yIG9mIGFuIGFjdGl2ZSBhY3Rpb24gbGlrZSBhbiBpY29uIGJ1dHRvbi5cbiAgICBhY3RpdmU6ICdyZ2JhKDAsIDAsIDAsIDAuNTQpJyxcbiAgICAvLyBUaGUgY29sb3Igb2YgYW4gaG92ZXJlZCBhY3Rpb24uXG4gICAgaG92ZXI6ICdyZ2JhKDAsIDAsIDAsIDAuMDQpJyxcbiAgICBob3Zlck9wYWNpdHk6IDAuMDQsXG4gICAgLy8gVGhlIGNvbG9yIG9mIGEgc2VsZWN0ZWQgYWN0aW9uLlxuICAgIHNlbGVjdGVkOiAncmdiYSgwLCAwLCAwLCAwLjA4KScsXG4gICAgc2VsZWN0ZWRPcGFjaXR5OiAwLjA4LFxuICAgIC8vIFRoZSBjb2xvciBvZiBhIGRpc2FibGVkIGFjdGlvbi5cbiAgICBkaXNhYmxlZDogJ3JnYmEoMCwgMCwgMCwgMC4yNiknLFxuICAgIC8vIFRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIGEgZGlzYWJsZWQgYWN0aW9uLlxuICAgIGRpc2FibGVkQmFja2dyb3VuZDogJ3JnYmEoMCwgMCwgMCwgMC4xMiknLFxuICAgIGRpc2FibGVkT3BhY2l0eTogMC4zOCxcbiAgICBmb2N1czogJ3JnYmEoMCwgMCwgMCwgMC4xMiknLFxuICAgIGZvY3VzT3BhY2l0eTogMC4xMixcbiAgICBhY3RpdmF0ZWRPcGFjaXR5OiAwLjEyXG4gIH1cbn07XG5leHBvcnQgdmFyIGRhcmsgPSB7XG4gIHRleHQ6IHtcbiAgICBwcmltYXJ5OiBjb21tb24ud2hpdGUsXG4gICAgc2Vjb25kYXJ5OiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpJyxcbiAgICBkaXNhYmxlZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41KScsXG4gICAgaGludDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41KScsXG4gICAgaWNvbjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSdcbiAgfSxcbiAgZGl2aWRlcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMiknLFxuICBiYWNrZ3JvdW5kOiB7XG4gICAgcGFwZXI6IGdyZXlbODAwXSxcbiAgICBkZWZhdWx0OiAnIzMwMzAzMCdcbiAgfSxcbiAgYWN0aW9uOiB7XG4gICAgYWN0aXZlOiBjb21tb24ud2hpdGUsXG4gICAgaG92ZXI6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpJyxcbiAgICBob3Zlck9wYWNpdHk6IDAuMDgsXG4gICAgc2VsZWN0ZWQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTYpJyxcbiAgICBzZWxlY3RlZE9wYWNpdHk6IDAuMTYsXG4gICAgZGlzYWJsZWQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyknLFxuICAgIGRpc2FibGVkQmFja2dyb3VuZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMiknLFxuICAgIGRpc2FibGVkT3BhY2l0eTogMC4zOCxcbiAgICBmb2N1czogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMiknLFxuICAgIGZvY3VzT3BhY2l0eTogMC4xMixcbiAgICBhY3RpdmF0ZWRPcGFjaXR5OiAwLjI0XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGFkZExpZ2h0T3JEYXJrKGludGVudCwgZGlyZWN0aW9uLCBzaGFkZSwgdG9uYWxPZmZzZXQpIHtcbiAgdmFyIHRvbmFsT2Zmc2V0TGlnaHQgPSB0b25hbE9mZnNldC5saWdodCB8fCB0b25hbE9mZnNldDtcbiAgdmFyIHRvbmFsT2Zmc2V0RGFyayA9IHRvbmFsT2Zmc2V0LmRhcmsgfHwgdG9uYWxPZmZzZXQgKiAxLjU7XG5cbiAgaWYgKCFpbnRlbnRbZGlyZWN0aW9uXSkge1xuICAgIGlmIChpbnRlbnQuaGFzT3duUHJvcGVydHkoc2hhZGUpKSB7XG4gICAgICBpbnRlbnRbZGlyZWN0aW9uXSA9IGludGVudFtzaGFkZV07XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdsaWdodCcpIHtcbiAgICAgIGludGVudC5saWdodCA9IGxpZ2h0ZW4oaW50ZW50Lm1haW4sIHRvbmFsT2Zmc2V0TGlnaHQpO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnZGFyaycpIHtcbiAgICAgIGludGVudC5kYXJrID0gZGFya2VuKGludGVudC5tYWluLCB0b25hbE9mZnNldERhcmspO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQYWxldHRlKHBhbGV0dGUpIHtcbiAgdmFyIF9wYWxldHRlJHByaW1hcnkgPSBwYWxldHRlLnByaW1hcnksXG4gICAgICBwcmltYXJ5ID0gX3BhbGV0dGUkcHJpbWFyeSA9PT0gdm9pZCAwID8ge1xuICAgIGxpZ2h0OiBpbmRpZ29bMzAwXSxcbiAgICBtYWluOiBpbmRpZ29bNTAwXSxcbiAgICBkYXJrOiBpbmRpZ29bNzAwXVxuICB9IDogX3BhbGV0dGUkcHJpbWFyeSxcbiAgICAgIF9wYWxldHRlJHNlY29uZGFyeSA9IHBhbGV0dGUuc2Vjb25kYXJ5LFxuICAgICAgc2Vjb25kYXJ5ID0gX3BhbGV0dGUkc2Vjb25kYXJ5ID09PSB2b2lkIDAgPyB7XG4gICAgbGlnaHQ6IHBpbmsuQTIwMCxcbiAgICBtYWluOiBwaW5rLkE0MDAsXG4gICAgZGFyazogcGluay5BNzAwXG4gIH0gOiBfcGFsZXR0ZSRzZWNvbmRhcnksXG4gICAgICBfcGFsZXR0ZSRlcnJvciA9IHBhbGV0dGUuZXJyb3IsXG4gICAgICBlcnJvciA9IF9wYWxldHRlJGVycm9yID09PSB2b2lkIDAgPyB7XG4gICAgbGlnaHQ6IHJlZFszMDBdLFxuICAgIG1haW46IHJlZFs1MDBdLFxuICAgIGRhcms6IHJlZFs3MDBdXG4gIH0gOiBfcGFsZXR0ZSRlcnJvcixcbiAgICAgIF9wYWxldHRlJHdhcm5pbmcgPSBwYWxldHRlLndhcm5pbmcsXG4gICAgICB3YXJuaW5nID0gX3BhbGV0dGUkd2FybmluZyA9PT0gdm9pZCAwID8ge1xuICAgIGxpZ2h0OiBvcmFuZ2VbMzAwXSxcbiAgICBtYWluOiBvcmFuZ2VbNTAwXSxcbiAgICBkYXJrOiBvcmFuZ2VbNzAwXVxuICB9IDogX3BhbGV0dGUkd2FybmluZyxcbiAgICAgIF9wYWxldHRlJGluZm8gPSBwYWxldHRlLmluZm8sXG4gICAgICBpbmZvID0gX3BhbGV0dGUkaW5mbyA9PT0gdm9pZCAwID8ge1xuICAgIGxpZ2h0OiBibHVlWzMwMF0sXG4gICAgbWFpbjogYmx1ZVs1MDBdLFxuICAgIGRhcms6IGJsdWVbNzAwXVxuICB9IDogX3BhbGV0dGUkaW5mbyxcbiAgICAgIF9wYWxldHRlJHN1Y2Nlc3MgPSBwYWxldHRlLnN1Y2Nlc3MsXG4gICAgICBzdWNjZXNzID0gX3BhbGV0dGUkc3VjY2VzcyA9PT0gdm9pZCAwID8ge1xuICAgIGxpZ2h0OiBncmVlblszMDBdLFxuICAgIG1haW46IGdyZWVuWzUwMF0sXG4gICAgZGFyazogZ3JlZW5bNzAwXVxuICB9IDogX3BhbGV0dGUkc3VjY2VzcyxcbiAgICAgIF9wYWxldHRlJHR5cGUgPSBwYWxldHRlLnR5cGUsXG4gICAgICB0eXBlID0gX3BhbGV0dGUkdHlwZSA9PT0gdm9pZCAwID8gJ2xpZ2h0JyA6IF9wYWxldHRlJHR5cGUsXG4gICAgICBfcGFsZXR0ZSRjb250cmFzdFRocmUgPSBwYWxldHRlLmNvbnRyYXN0VGhyZXNob2xkLFxuICAgICAgY29udHJhc3RUaHJlc2hvbGQgPSBfcGFsZXR0ZSRjb250cmFzdFRocmUgPT09IHZvaWQgMCA/IDMgOiBfcGFsZXR0ZSRjb250cmFzdFRocmUsXG4gICAgICBfcGFsZXR0ZSR0b25hbE9mZnNldCA9IHBhbGV0dGUudG9uYWxPZmZzZXQsXG4gICAgICB0b25hbE9mZnNldCA9IF9wYWxldHRlJHRvbmFsT2Zmc2V0ID09PSB2b2lkIDAgPyAwLjIgOiBfcGFsZXR0ZSR0b25hbE9mZnNldCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHBhbGV0dGUsIFtcInByaW1hcnlcIiwgXCJzZWNvbmRhcnlcIiwgXCJlcnJvclwiLCBcIndhcm5pbmdcIiwgXCJpbmZvXCIsIFwic3VjY2Vzc1wiLCBcInR5cGVcIiwgXCJjb250cmFzdFRocmVzaG9sZFwiLCBcInRvbmFsT2Zmc2V0XCJdKTsgLy8gVXNlIHRoZSBzYW1lIGxvZ2ljIGFzXG4gIC8vIEJvb3RzdHJhcDogaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvMWQ2ZTM3MTBkZDQ0N2RlMWEyMDBmMjllOGZhNTIxZjhhMDkwOGY3MC9zY3NzL19mdW5jdGlvbnMuc2NzcyNMNTlcbiAgLy8gYW5kIG1hdGVyaWFsLWNvbXBvbmVudHMtd2ViIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvYWM0NmI4ODYzYzRkYWI5ZmMyMmM0YzY2MmRjNmJkMWI2NWRkNjUyZi9wYWNrYWdlcy9tZGMtdGhlbWUvX2Z1bmN0aW9ucy5zY3NzI0w1NFxuXG5cbiAgZnVuY3Rpb24gZ2V0Q29udHJhc3RUZXh0KGJhY2tncm91bmQpIHtcbiAgICB2YXIgY29udHJhc3RUZXh0ID0gZ2V0Q29udHJhc3RSYXRpbyhiYWNrZ3JvdW5kLCBkYXJrLnRleHQucHJpbWFyeSkgPj0gY29udHJhc3RUaHJlc2hvbGQgPyBkYXJrLnRleHQucHJpbWFyeSA6IGxpZ2h0LnRleHQucHJpbWFyeTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgY29udHJhc3QgPSBnZXRDb250cmFzdFJhdGlvKGJhY2tncm91bmQsIGNvbnRyYXN0VGV4dCk7XG5cbiAgICAgIGlmIChjb250cmFzdCA8IDMpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihbXCJNYXRlcmlhbC1VSTogVGhlIGNvbnRyYXN0IHJhdGlvIG9mIFwiLmNvbmNhdChjb250cmFzdCwgXCI6MSBmb3IgXCIpLmNvbmNhdChjb250cmFzdFRleHQsIFwiIG9uIFwiKS5jb25jYXQoYmFja2dyb3VuZCksICdmYWxscyBiZWxvdyB0aGUgV0NBRyByZWNvbW1lbmRlZCBhYnNvbHV0ZSBtaW5pbXVtIGNvbnRyYXN0IHJhdGlvIG9mIDM6MS4nLCAnaHR0cHM6Ly93d3cudzMub3JnL1RSLzIwMDgvUkVDLVdDQUcyMC0yMDA4MTIxMS8jdmlzdWFsLWF1ZGlvLWNvbnRyYXN0LWNvbnRyYXN0J10uam9pbignXFxuJykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb250cmFzdFRleHQ7XG4gIH1cblxuICB2YXIgYXVnbWVudENvbG9yID0gZnVuY3Rpb24gYXVnbWVudENvbG9yKGNvbG9yKSB7XG4gICAgdmFyIG1haW5TaGFkZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogNTAwO1xuICAgIHZhciBsaWdodFNoYWRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAzMDA7XG4gICAgdmFyIGRhcmtTaGFkZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogNzAwO1xuICAgIGNvbG9yID0gX2V4dGVuZHMoe30sIGNvbG9yKTtcblxuICAgIGlmICghY29sb3IubWFpbiAmJiBjb2xvclttYWluU2hhZGVdKSB7XG4gICAgICBjb2xvci5tYWluID0gY29sb3JbbWFpblNoYWRlXTtcbiAgICB9XG5cbiAgICBpZiAoIWNvbG9yLm1haW4pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBcIk1hdGVyaWFsLVVJOiBUaGUgY29sb3IgcHJvdmlkZWQgdG8gYXVnbWVudENvbG9yKGNvbG9yKSBpcyBpbnZhbGlkLlxcblRoZSBjb2xvciBvYmplY3QgbmVlZHMgdG8gaGF2ZSBhIGBtYWluYCBwcm9wZXJ0eSBvciBhIGBcIi5jb25jYXQobWFpblNoYWRlLCBcImAgcHJvcGVydHkuXCIpIDogX2Zvcm1hdE11aUVycm9yTWVzc2FnZSg0LCBtYWluU2hhZGUpKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbG9yLm1haW4gIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gXCJNYXRlcmlhbC1VSTogVGhlIGNvbG9yIHByb3ZpZGVkIHRvIGF1Z21lbnRDb2xvcihjb2xvcikgaXMgaW52YWxpZC5cXG5gY29sb3IubWFpbmAgc2hvdWxkIGJlIGEgc3RyaW5nLCBidXQgYFwiLmNvbmNhdChKU09OLnN0cmluZ2lmeShjb2xvci5tYWluKSwgXCJgIHdhcyBwcm92aWRlZCBpbnN0ZWFkLlxcblxcbkRpZCB5b3UgaW50ZW5kIHRvIHVzZSBvbmUgb2YgdGhlIGZvbGxvd2luZyBhcHByb2FjaGVzP1xcblxcbmltcG9ydCB7XFx4QTBncmVlbiB9IGZyb20gXFxcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1xcXCI7XFxuXFxuY29uc3QgdGhlbWUxID0gY3JlYXRlVGhlbWUoeyBwYWxldHRlOiB7XFxuICBwcmltYXJ5OiBncmVlbixcXG59IH0pO1xcblxcbmNvbnN0IHRoZW1lMiA9IGNyZWF0ZVRoZW1lKHsgcGFsZXR0ZToge1xcbiAgcHJpbWFyeTogeyBtYWluOiBncmVlbls1MDBdIH0sXFxufSB9KTtcIikgOiBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlKDUsIEpTT04uc3RyaW5naWZ5KGNvbG9yLm1haW4pKSk7XG4gICAgfVxuXG4gICAgYWRkTGlnaHRPckRhcmsoY29sb3IsICdsaWdodCcsIGxpZ2h0U2hhZGUsIHRvbmFsT2Zmc2V0KTtcbiAgICBhZGRMaWdodE9yRGFyayhjb2xvciwgJ2RhcmsnLCBkYXJrU2hhZGUsIHRvbmFsT2Zmc2V0KTtcblxuICAgIGlmICghY29sb3IuY29udHJhc3RUZXh0KSB7XG4gICAgICBjb2xvci5jb250cmFzdFRleHQgPSBnZXRDb250cmFzdFRleHQoY29sb3IubWFpbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbG9yO1xuICB9O1xuXG4gIHZhciB0eXBlcyA9IHtcbiAgICBkYXJrOiBkYXJrLFxuICAgIGxpZ2h0OiBsaWdodFxuICB9O1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKCF0eXBlc1t0eXBlXSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIk1hdGVyaWFsLVVJOiBUaGUgcGFsZXR0ZSB0eXBlIGBcIi5jb25jYXQodHlwZSwgXCJgIGlzIG5vdCBzdXBwb3J0ZWQuXCIpKTtcbiAgICB9XG4gIH1cblxuICB2YXIgcGFsZXR0ZU91dHB1dCA9IGRlZXBtZXJnZShfZXh0ZW5kcyh7XG4gICAgLy8gQSBjb2xsZWN0aW9uIG9mIGNvbW1vbiBjb2xvcnMuXG4gICAgY29tbW9uOiBjb21tb24sXG4gICAgLy8gVGhlIHBhbGV0dGUgdHlwZSwgY2FuIGJlIGxpZ2h0IG9yIGRhcmsuXG4gICAgdHlwZTogdHlwZSxcbiAgICAvLyBUaGUgY29sb3JzIHVzZWQgdG8gcmVwcmVzZW50IHByaW1hcnkgaW50ZXJmYWNlIGVsZW1lbnRzIGZvciBhIHVzZXIuXG4gICAgcHJpbWFyeTogYXVnbWVudENvbG9yKHByaW1hcnkpLFxuICAgIC8vIFRoZSBjb2xvcnMgdXNlZCB0byByZXByZXNlbnQgc2Vjb25kYXJ5IGludGVyZmFjZSBlbGVtZW50cyBmb3IgYSB1c2VyLlxuICAgIHNlY29uZGFyeTogYXVnbWVudENvbG9yKHNlY29uZGFyeSwgJ0E0MDAnLCAnQTIwMCcsICdBNzAwJyksXG4gICAgLy8gVGhlIGNvbG9ycyB1c2VkIHRvIHJlcHJlc2VudCBpbnRlcmZhY2UgZWxlbWVudHMgdGhhdCB0aGUgdXNlciBzaG91bGQgYmUgbWFkZSBhd2FyZSBvZi5cbiAgICBlcnJvcjogYXVnbWVudENvbG9yKGVycm9yKSxcbiAgICAvLyBUaGUgY29sb3JzIHVzZWQgdG8gcmVwcmVzZW50IHBvdGVudGlhbGx5IGRhbmdlcm91cyBhY3Rpb25zIG9yIGltcG9ydGFudCBtZXNzYWdlcy5cbiAgICB3YXJuaW5nOiBhdWdtZW50Q29sb3Iod2FybmluZyksXG4gICAgLy8gVGhlIGNvbG9ycyB1c2VkIHRvIHByZXNlbnQgaW5mb3JtYXRpb24gdG8gdGhlIHVzZXIgdGhhdCBpcyBuZXV0cmFsIGFuZCBub3QgbmVjZXNzYXJpbHkgaW1wb3J0YW50LlxuICAgIGluZm86IGF1Z21lbnRDb2xvcihpbmZvKSxcbiAgICAvLyBUaGUgY29sb3JzIHVzZWQgdG8gaW5kaWNhdGUgdGhlIHN1Y2Nlc3NmdWwgY29tcGxldGlvbiBvZiBhbiBhY3Rpb24gdGhhdCB1c2VyIHRyaWdnZXJlZC5cbiAgICBzdWNjZXNzOiBhdWdtZW50Q29sb3Ioc3VjY2VzcyksXG4gICAgLy8gVGhlIGdyZXkgY29sb3JzLlxuICAgIGdyZXk6IGdyZXksXG4gICAgLy8gVXNlZCBieSBgZ2V0Q29udHJhc3RUZXh0KClgIHRvIG1heGltaXplIHRoZSBjb250cmFzdCBiZXR3ZWVuXG4gICAgLy8gdGhlIGJhY2tncm91bmQgYW5kIHRoZSB0ZXh0LlxuICAgIGNvbnRyYXN0VGhyZXNob2xkOiBjb250cmFzdFRocmVzaG9sZCxcbiAgICAvLyBUYWtlcyBhIGJhY2tncm91bmQgY29sb3IgYW5kIHJldHVybnMgdGhlIHRleHQgY29sb3IgdGhhdCBtYXhpbWl6ZXMgdGhlIGNvbnRyYXN0LlxuICAgIGdldENvbnRyYXN0VGV4dDogZ2V0Q29udHJhc3RUZXh0LFxuICAgIC8vIEdlbmVyYXRlIGEgcmljaCBjb2xvciBvYmplY3QuXG4gICAgYXVnbWVudENvbG9yOiBhdWdtZW50Q29sb3IsXG4gICAgLy8gVXNlZCBieSB0aGUgZnVuY3Rpb25zIGJlbG93IHRvIHNoaWZ0IGEgY29sb3IncyBsdW1pbmFuY2UgYnkgYXBwcm94aW1hdGVseVxuICAgIC8vIHR3byBpbmRleGVzIHdpdGhpbiBpdHMgdG9uYWwgcGFsZXR0ZS5cbiAgICAvLyBFLmcuLCBzaGlmdCBmcm9tIFJlZCA1MDAgdG8gUmVkIDMwMCBvciBSZWQgNzAwLlxuICAgIHRvbmFsT2Zmc2V0OiB0b25hbE9mZnNldFxuICB9LCB0eXBlc1t0eXBlXSksIG90aGVyKTtcbiAgcmV0dXJuIHBhbGV0dGVPdXRwdXQ7XG59IiwiaW1wb3J0IHsgY3JlYXRlVW5hcnlTcGFjaW5nIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N5c3RlbSc7XG52YXIgd2Fybk9uY2U7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTcGFjaW5nKCkge1xuICB2YXIgc3BhY2luZ0lucHV0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiA4O1xuXG4gIC8vIEFscmVhZHkgdHJhbnNmb3JtZWQuXG4gIGlmIChzcGFjaW5nSW5wdXQubXVpKSB7XG4gICAgcmV0dXJuIHNwYWNpbmdJbnB1dDtcbiAgfSAvLyBNYXRlcmlhbCBEZXNpZ24gbGF5b3V0cyBhcmUgdmlzdWFsbHkgYmFsYW5jZWQuIE1vc3QgbWVhc3VyZW1lbnRzIGFsaWduIHRvIGFuIDhkcCBncmlkIGFwcGxpZWQsIHdoaWNoIGFsaWducyBib3RoIHNwYWNpbmcgYW5kIHRoZSBvdmVyYWxsIGxheW91dC5cbiAgLy8gU21hbGxlciBjb21wb25lbnRzLCBzdWNoIGFzIGljb25zIGFuZCB0eXBlLCBjYW4gYWxpZ24gdG8gYSA0ZHAgZ3JpZC5cbiAgLy8gaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vbGF5b3V0L3VuZGVyc3RhbmRpbmctbGF5b3V0Lmh0bWwjdXNhZ2VcblxuXG4gIHZhciB0cmFuc2Zvcm0gPSBjcmVhdGVVbmFyeVNwYWNpbmcoe1xuICAgIHNwYWNpbmc6IHNwYWNpbmdJbnB1dFxuICB9KTtcblxuICB2YXIgc3BhY2luZyA9IGZ1bmN0aW9uIHNwYWNpbmcoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoIShhcmdzLmxlbmd0aCA8PSA0KSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiTWF0ZXJpYWwtVUk6IFRvbyBtYW55IGFyZ3VtZW50cyBwcm92aWRlZCwgZXhwZWN0ZWQgYmV0d2VlbiAwIGFuZCA0LCBnb3QgXCIuY29uY2F0KGFyZ3MubGVuZ3RoKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdHJhbnNmb3JtKDEpO1xuICAgIH1cblxuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIHRyYW5zZm9ybShhcmdzWzBdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJncy5tYXAoZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gICAgICBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gYXJndW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIHZhciBvdXRwdXQgPSB0cmFuc2Zvcm0oYXJndW1lbnQpO1xuICAgICAgcmV0dXJuIHR5cGVvZiBvdXRwdXQgPT09ICdudW1iZXInID8gXCJcIi5jb25jYXQob3V0cHV0LCBcInB4XCIpIDogb3V0cHV0O1xuICAgIH0pLmpvaW4oJyAnKTtcbiAgfTsgLy8gQmFja3dhcmQgY29tcGF0aWJpbGl0eSwgdG8gcmVtb3ZlIGluIHY1LlxuXG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNwYWNpbmcsICd1bml0Jywge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKCF3YXJuT25jZSB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Rlc3QnKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihbJ01hdGVyaWFsLVVJOiB0aGVtZS5zcGFjaW5nLnVuaXQgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4nLCAnSXQgd2lsbCBiZSByZW1vdmVkIGluIHY1LicsICdZb3UgY2FuIHJlcGxhY2UgYHRoZW1lLnNwYWNpbmcudW5pdCAqIHlgIHdpdGggYHRoZW1lLnNwYWNpbmcoeSlgLicsICcnLCAnWW91IGNhbiB1c2UgdGhlIGBodHRwczovL2dpdGh1Yi5jb20vbXVpLW9yZy9tYXRlcmlhbC11aS90cmVlL21hc3Rlci9wYWNrYWdlcy9tYXRlcmlhbC11aS1jb2RlbW9kL1JFQURNRS5tZCN0aGVtZS1zcGFjaW5nLWFwaWAgbWlncmF0aW9uIGhlbHBlciB0byBtYWtlIHRoZSBwcm9jZXNzIHNtb290aGVyLiddLmpvaW4oJ1xcbicpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdhcm5PbmNlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNwYWNpbmdJbnB1dDtcbiAgICB9XG4gIH0pO1xuICBzcGFjaW5nLm11aSA9IHRydWU7XG4gIHJldHVybiBzcGFjaW5nO1xufSIsImltcG9ydCB7IGNyZWF0ZVN0eWxlcyBhcyBjcmVhdGVTdHlsZXNPcmlnaW5hbCB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnOyAvLyBsZXQgd2Fybk9uY2UgPSBmYWxzZTtcbi8vIFRvIHJlbW92ZSBpbiB2NVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTdHlsZXMoc3R5bGVzKSB7XG4gIC8vIHdhcm5pbmcoXG4gIC8vICAgd2Fybk9uY2UsXG4gIC8vICAgW1xuICAvLyAgICAgJ01hdGVyaWFsLVVJOiBjcmVhdGVTdHlsZXMgZnJvbSBAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMgaXMgZGVwcmVjYXRlZC4nLFxuICAvLyAgICAgJ1BsZWFzZSB1c2UgQG1hdGVyaWFsLXVpL3N0eWxlcy9jcmVhdGVTdHlsZXMnLFxuICAvLyAgIF0uam9pbignXFxuJyksXG4gIC8vICk7XG4gIC8vIHdhcm5PbmNlID0gdHJ1ZTtcbiAgcmV0dXJuIGNyZWF0ZVN0eWxlc09yaWdpbmFsKHN0eWxlcyk7XG59IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgeyBkZWVwbWVyZ2UgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IGNyZWF0ZUJyZWFrcG9pbnRzIGZyb20gJy4vY3JlYXRlQnJlYWtwb2ludHMnO1xuaW1wb3J0IGNyZWF0ZU1peGlucyBmcm9tICcuL2NyZWF0ZU1peGlucyc7XG5pbXBvcnQgY3JlYXRlUGFsZXR0ZSBmcm9tICcuL2NyZWF0ZVBhbGV0dGUnO1xuaW1wb3J0IGNyZWF0ZVR5cG9ncmFwaHkgZnJvbSAnLi9jcmVhdGVUeXBvZ3JhcGh5JztcbmltcG9ydCBzaGFkb3dzIGZyb20gJy4vc2hhZG93cyc7XG5pbXBvcnQgc2hhcGUgZnJvbSAnLi9zaGFwZSc7XG5pbXBvcnQgY3JlYXRlU3BhY2luZyBmcm9tICcuL2NyZWF0ZVNwYWNpbmcnO1xuaW1wb3J0IHRyYW5zaXRpb25zIGZyb20gJy4vdHJhbnNpdGlvbnMnO1xuaW1wb3J0IHpJbmRleCBmcm9tICcuL3pJbmRleCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRoZW1lKCkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgdmFyIF9vcHRpb25zJGJyZWFrcG9pbnRzID0gb3B0aW9ucy5icmVha3BvaW50cyxcbiAgICAgIGJyZWFrcG9pbnRzSW5wdXQgPSBfb3B0aW9ucyRicmVha3BvaW50cyA9PT0gdm9pZCAwID8ge30gOiBfb3B0aW9ucyRicmVha3BvaW50cyxcbiAgICAgIF9vcHRpb25zJG1peGlucyA9IG9wdGlvbnMubWl4aW5zLFxuICAgICAgbWl4aW5zSW5wdXQgPSBfb3B0aW9ucyRtaXhpbnMgPT09IHZvaWQgMCA/IHt9IDogX29wdGlvbnMkbWl4aW5zLFxuICAgICAgX29wdGlvbnMkcGFsZXR0ZSA9IG9wdGlvbnMucGFsZXR0ZSxcbiAgICAgIHBhbGV0dGVJbnB1dCA9IF9vcHRpb25zJHBhbGV0dGUgPT09IHZvaWQgMCA/IHt9IDogX29wdGlvbnMkcGFsZXR0ZSxcbiAgICAgIHNwYWNpbmdJbnB1dCA9IG9wdGlvbnMuc3BhY2luZyxcbiAgICAgIF9vcHRpb25zJHR5cG9ncmFwaHkgPSBvcHRpb25zLnR5cG9ncmFwaHksXG4gICAgICB0eXBvZ3JhcGh5SW5wdXQgPSBfb3B0aW9ucyR0eXBvZ3JhcGh5ID09PSB2b2lkIDAgPyB7fSA6IF9vcHRpb25zJHR5cG9ncmFwaHksXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvcHRpb25zLCBbXCJicmVha3BvaW50c1wiLCBcIm1peGluc1wiLCBcInBhbGV0dGVcIiwgXCJzcGFjaW5nXCIsIFwidHlwb2dyYXBoeVwiXSk7XG5cbiAgdmFyIHBhbGV0dGUgPSBjcmVhdGVQYWxldHRlKHBhbGV0dGVJbnB1dCk7XG4gIHZhciBicmVha3BvaW50cyA9IGNyZWF0ZUJyZWFrcG9pbnRzKGJyZWFrcG9pbnRzSW5wdXQpO1xuICB2YXIgc3BhY2luZyA9IGNyZWF0ZVNwYWNpbmcoc3BhY2luZ0lucHV0KTtcbiAgdmFyIG11aVRoZW1lID0gZGVlcG1lcmdlKHtcbiAgICBicmVha3BvaW50czogYnJlYWtwb2ludHMsXG4gICAgZGlyZWN0aW9uOiAnbHRyJyxcbiAgICBtaXhpbnM6IGNyZWF0ZU1peGlucyhicmVha3BvaW50cywgc3BhY2luZywgbWl4aW5zSW5wdXQpLFxuICAgIG92ZXJyaWRlczoge30sXG4gICAgLy8gSW5qZWN0IGN1c3RvbSBzdHlsZXNcbiAgICBwYWxldHRlOiBwYWxldHRlLFxuICAgIHByb3BzOiB7fSxcbiAgICAvLyBQcm92aWRlIGRlZmF1bHQgcHJvcHNcbiAgICBzaGFkb3dzOiBzaGFkb3dzLFxuICAgIHR5cG9ncmFwaHk6IGNyZWF0ZVR5cG9ncmFwaHkocGFsZXR0ZSwgdHlwb2dyYXBoeUlucHV0KSxcbiAgICBzcGFjaW5nOiBzcGFjaW5nLFxuICAgIHNoYXBlOiBzaGFwZSxcbiAgICB0cmFuc2l0aW9uczogdHJhbnNpdGlvbnMsXG4gICAgekluZGV4OiB6SW5kZXhcbiAgfSwgb3RoZXIpO1xuXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIG11aVRoZW1lID0gYXJncy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgYXJndW1lbnQpIHtcbiAgICByZXR1cm4gZGVlcG1lcmdlKGFjYywgYXJndW1lbnQpO1xuICB9LCBtdWlUaGVtZSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB2YXIgcHNldWRvQ2xhc3NlcyA9IFsnY2hlY2tlZCcsICdkaXNhYmxlZCcsICdlcnJvcicsICdmb2N1c2VkJywgJ2ZvY3VzVmlzaWJsZScsICdyZXF1aXJlZCcsICdleHBhbmRlZCcsICdzZWxlY3RlZCddO1xuXG4gICAgdmFyIHRyYXZlcnNlID0gZnVuY3Rpb24gdHJhdmVyc2Uobm9kZSwgcGFyZW50S2V5KSB7XG4gICAgICB2YXIgZGVwdGggPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IDE7XG4gICAgICB2YXIga2V5OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ3VhcmQtZm9yLWluLCBuby1yZXN0cmljdGVkLXN5bnRheFxuXG4gICAgICBmb3IgKGtleSBpbiBub2RlKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IG5vZGVba2V5XTtcblxuICAgICAgICBpZiAoZGVwdGggPT09IDEpIHtcbiAgICAgICAgICBpZiAoa2V5LmluZGV4T2YoJ011aScpID09PSAwICYmIGNoaWxkKSB7XG4gICAgICAgICAgICB0cmF2ZXJzZShjaGlsZCwga2V5LCBkZXB0aCArIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChwc2V1ZG9DbGFzc2VzLmluZGV4T2Yoa2V5KSAhPT0gLTEgJiYgT2JqZWN0LmtleXMoY2hpbGQpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihbXCJNYXRlcmlhbC1VSTogVGhlIGBcIi5jb25jYXQocGFyZW50S2V5LCBcImAgY29tcG9uZW50IGluY3JlYXNlcyBcIikgKyBcInRoZSBDU1Mgc3BlY2lmaWNpdHkgb2YgdGhlIGBcIi5jb25jYXQoa2V5LCBcImAgaW50ZXJuYWwgc3RhdGUuXCIpLCAnWW91IGNhbiBub3Qgb3ZlcnJpZGUgaXQgbGlrZSB0aGlzOiAnLCBKU09OLnN0cmluZ2lmeShub2RlLCBudWxsLCAyKSwgJycsICdJbnN0ZWFkLCB5b3UgbmVlZCB0byB1c2UgdGhlICRydWxlTmFtZSBzeW50YXg6JywgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICByb290OiBfZGVmaW5lUHJvcGVydHkoe30sIFwiJiRcIi5jb25jYXQoa2V5KSwgY2hpbGQpXG4gICAgICAgICAgICB9LCBudWxsLCAyKSwgJycsICdodHRwczovL21hdGVyaWFsLXVpLmNvbS9yL3BzZXVkby1jbGFzc2VzLWd1aWRlJ10uam9pbignXFxuJykpO1xuICAgICAgICAgIH0gLy8gUmVtb3ZlIHRoZSBzdHlsZSB0byBwcmV2ZW50IGdsb2JhbCBjb25mbGljdHMuXG5cblxuICAgICAgICAgIG5vZGVba2V5XSA9IHt9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRyYXZlcnNlKG11aVRoZW1lLm92ZXJyaWRlcyk7XG4gIH1cblxuICByZXR1cm4gbXVpVGhlbWU7XG59XG5cbnZhciB3YXJuZWRPbmNlID0gZmFsc2U7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTXVpVGhlbWUoKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKCF3YXJuZWRPbmNlKSB7XG4gICAgICB3YXJuZWRPbmNlID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoWydNYXRlcmlhbC1VSTogdGhlIGNyZWF0ZU11aVRoZW1lIGZ1bmN0aW9uIHdhcyByZW5hbWVkIHRvIGNyZWF0ZVRoZW1lLicsICcnLCBcIllvdSBzaG91bGQgdXNlIGBpbXBvcnQgeyBjcmVhdGVUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydgXCJdLmpvaW4oJ1xcbicpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY3JlYXRlVGhlbWUuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xufVxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVGhlbWU7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IHsgZGVlcG1lcmdlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcblxuZnVuY3Rpb24gcm91bmQodmFsdWUpIHtcbiAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiAxZTUpIC8gMWU1O1xufVxuXG52YXIgd2FybmVkT25jZSA9IGZhbHNlO1xuXG5mdW5jdGlvbiByb3VuZFdpdGhEZXByZWNhdGlvbldhcm5pbmcodmFsdWUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIXdhcm5lZE9uY2UpIHtcbiAgICAgIGNvbnNvbGUud2FybihbJ01hdGVyaWFsLVVJOiBUaGUgYHRoZW1lLnR5cG9ncmFwaHkucm91bmRgIGhlbHBlciBpcyBkZXByZWNhdGVkLicsICdIZWFkIHRvIGh0dHBzOi8vbWF0ZXJpYWwtdWkuY29tL3IvbWlncmF0aW9uLXY0LyN0aGVtZSBmb3IgYSBtaWdyYXRpb24gcGF0aC4nXS5qb2luKCdcXG4nKSk7XG4gICAgICB3YXJuZWRPbmNlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcm91bmQodmFsdWUpO1xufVxuXG52YXIgY2FzZUFsbENhcHMgPSB7XG4gIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnXG59O1xudmFyIGRlZmF1bHRGb250RmFtaWx5ID0gJ1wiUm9ib3RvXCIsIFwiSGVsdmV0aWNhXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZic7XG4vKipcbiAqIEBzZWUgQGxpbmt7aHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vdHlwb2dyYXBoeS90aGUtdHlwZS1zeXN0ZW0uaHRtbH1cbiAqIEBzZWUgQGxpbmt7aHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vdHlwb2dyYXBoeS91bmRlcnN0YW5kaW5nLXR5cG9ncmFwaHkuaHRtbH1cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUeXBvZ3JhcGh5KHBhbGV0dGUsIHR5cG9ncmFwaHkpIHtcbiAgdmFyIF9yZWYgPSB0eXBlb2YgdHlwb2dyYXBoeSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cG9ncmFwaHkocGFsZXR0ZSkgOiB0eXBvZ3JhcGh5LFxuICAgICAgX3JlZiRmb250RmFtaWx5ID0gX3JlZi5mb250RmFtaWx5LFxuICAgICAgZm9udEZhbWlseSA9IF9yZWYkZm9udEZhbWlseSA9PT0gdm9pZCAwID8gZGVmYXVsdEZvbnRGYW1pbHkgOiBfcmVmJGZvbnRGYW1pbHksXG4gICAgICBfcmVmJGZvbnRTaXplID0gX3JlZi5mb250U2l6ZSxcbiAgICAgIGZvbnRTaXplID0gX3JlZiRmb250U2l6ZSA9PT0gdm9pZCAwID8gMTQgOiBfcmVmJGZvbnRTaXplLFxuICAgICAgX3JlZiRmb250V2VpZ2h0TGlnaHQgPSBfcmVmLmZvbnRXZWlnaHRMaWdodCxcbiAgICAgIGZvbnRXZWlnaHRMaWdodCA9IF9yZWYkZm9udFdlaWdodExpZ2h0ID09PSB2b2lkIDAgPyAzMDAgOiBfcmVmJGZvbnRXZWlnaHRMaWdodCxcbiAgICAgIF9yZWYkZm9udFdlaWdodFJlZ3VsYSA9IF9yZWYuZm9udFdlaWdodFJlZ3VsYXIsXG4gICAgICBmb250V2VpZ2h0UmVndWxhciA9IF9yZWYkZm9udFdlaWdodFJlZ3VsYSA9PT0gdm9pZCAwID8gNDAwIDogX3JlZiRmb250V2VpZ2h0UmVndWxhLFxuICAgICAgX3JlZiRmb250V2VpZ2h0TWVkaXVtID0gX3JlZi5mb250V2VpZ2h0TWVkaXVtLFxuICAgICAgZm9udFdlaWdodE1lZGl1bSA9IF9yZWYkZm9udFdlaWdodE1lZGl1bSA9PT0gdm9pZCAwID8gNTAwIDogX3JlZiRmb250V2VpZ2h0TWVkaXVtLFxuICAgICAgX3JlZiRmb250V2VpZ2h0Qm9sZCA9IF9yZWYuZm9udFdlaWdodEJvbGQsXG4gICAgICBmb250V2VpZ2h0Qm9sZCA9IF9yZWYkZm9udFdlaWdodEJvbGQgPT09IHZvaWQgMCA/IDcwMCA6IF9yZWYkZm9udFdlaWdodEJvbGQsXG4gICAgICBfcmVmJGh0bWxGb250U2l6ZSA9IF9yZWYuaHRtbEZvbnRTaXplLFxuICAgICAgaHRtbEZvbnRTaXplID0gX3JlZiRodG1sRm9udFNpemUgPT09IHZvaWQgMCA/IDE2IDogX3JlZiRodG1sRm9udFNpemUsXG4gICAgICBhbGxWYXJpYW50cyA9IF9yZWYuYWxsVmFyaWFudHMsXG4gICAgICBweFRvUmVtMiA9IF9yZWYucHhUb1JlbSxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcImZvbnRGYW1pbHlcIiwgXCJmb250U2l6ZVwiLCBcImZvbnRXZWlnaHRMaWdodFwiLCBcImZvbnRXZWlnaHRSZWd1bGFyXCIsIFwiZm9udFdlaWdodE1lZGl1bVwiLCBcImZvbnRXZWlnaHRCb2xkXCIsIFwiaHRtbEZvbnRTaXplXCIsIFwiYWxsVmFyaWFudHNcIiwgXCJweFRvUmVtXCJdKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICh0eXBlb2YgZm9udFNpemUgIT09ICdudW1iZXInKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdNYXRlcmlhbC1VSTogYGZvbnRTaXplYCBpcyByZXF1aXJlZCB0byBiZSBhIG51bWJlci4nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGh0bWxGb250U2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ01hdGVyaWFsLVVJOiBgaHRtbEZvbnRTaXplYCBpcyByZXF1aXJlZCB0byBiZSBhIG51bWJlci4nKTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29lZiA9IGZvbnRTaXplIC8gMTQ7XG5cbiAgdmFyIHB4VG9SZW0gPSBweFRvUmVtMiB8fCBmdW5jdGlvbiAoc2l6ZSkge1xuICAgIHJldHVybiBcIlwiLmNvbmNhdChzaXplIC8gaHRtbEZvbnRTaXplICogY29lZiwgXCJyZW1cIik7XG4gIH07XG5cbiAgdmFyIGJ1aWxkVmFyaWFudCA9IGZ1bmN0aW9uIGJ1aWxkVmFyaWFudChmb250V2VpZ2h0LCBzaXplLCBsaW5lSGVpZ2h0LCBsZXR0ZXJTcGFjaW5nLCBjYXNpbmcpIHtcbiAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgZm9udEZhbWlseTogZm9udEZhbWlseSxcbiAgICAgIGZvbnRXZWlnaHQ6IGZvbnRXZWlnaHQsXG4gICAgICBmb250U2l6ZTogcHhUb1JlbShzaXplKSxcbiAgICAgIC8vIFVuaXRsZXNzIGZvbGxvd2luZyBodHRwczovL21leWVyd2ViLmNvbS9lcmljL3Rob3VnaHRzLzIwMDYvMDIvMDgvdW5pdGxlc3MtbGluZS1oZWlnaHRzL1xuICAgICAgbGluZUhlaWdodDogbGluZUhlaWdodFxuICAgIH0sIGZvbnRGYW1pbHkgPT09IGRlZmF1bHRGb250RmFtaWx5ID8ge1xuICAgICAgbGV0dGVyU3BhY2luZzogXCJcIi5jb25jYXQocm91bmQobGV0dGVyU3BhY2luZyAvIHNpemUpLCBcImVtXCIpXG4gICAgfSA6IHt9LCBjYXNpbmcsIGFsbFZhcmlhbnRzKTtcbiAgfTtcblxuICB2YXIgdmFyaWFudHMgPSB7XG4gICAgaDE6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0TGlnaHQsIDk2LCAxLjE2NywgLTEuNSksXG4gICAgaDI6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0TGlnaHQsIDYwLCAxLjIsIC0wLjUpLFxuICAgIGgzOiBidWlsZFZhcmlhbnQoZm9udFdlaWdodFJlZ3VsYXIsIDQ4LCAxLjE2NywgMCksXG4gICAgaDQ6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0UmVndWxhciwgMzQsIDEuMjM1LCAwLjI1KSxcbiAgICBoNTogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRSZWd1bGFyLCAyNCwgMS4zMzQsIDApLFxuICAgIGg2OiBidWlsZFZhcmlhbnQoZm9udFdlaWdodE1lZGl1bSwgMjAsIDEuNiwgMC4xNSksXG4gICAgc3VidGl0bGUxOiBidWlsZFZhcmlhbnQoZm9udFdlaWdodFJlZ3VsYXIsIDE2LCAxLjc1LCAwLjE1KSxcbiAgICBzdWJ0aXRsZTI6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0TWVkaXVtLCAxNCwgMS41NywgMC4xKSxcbiAgICBib2R5MTogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRSZWd1bGFyLCAxNiwgMS41LCAwLjE1KSxcbiAgICBib2R5MjogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRSZWd1bGFyLCAxNCwgMS40MywgMC4xNSksXG4gICAgYnV0dG9uOiBidWlsZFZhcmlhbnQoZm9udFdlaWdodE1lZGl1bSwgMTQsIDEuNzUsIDAuNCwgY2FzZUFsbENhcHMpLFxuICAgIGNhcHRpb246IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0UmVndWxhciwgMTIsIDEuNjYsIDAuNCksXG4gICAgb3ZlcmxpbmU6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0UmVndWxhciwgMTIsIDIuNjYsIDEsIGNhc2VBbGxDYXBzKVxuICB9O1xuICByZXR1cm4gZGVlcG1lcmdlKF9leHRlbmRzKHtcbiAgICBodG1sRm9udFNpemU6IGh0bWxGb250U2l6ZSxcbiAgICBweFRvUmVtOiBweFRvUmVtLFxuICAgIHJvdW5kOiByb3VuZFdpdGhEZXByZWNhdGlvbldhcm5pbmcsXG4gICAgLy8gVE9ETyB2NTogcmVtb3ZlXG4gICAgZm9udEZhbWlseTogZm9udEZhbWlseSxcbiAgICBmb250U2l6ZTogZm9udFNpemUsXG4gICAgZm9udFdlaWdodExpZ2h0OiBmb250V2VpZ2h0TGlnaHQsXG4gICAgZm9udFdlaWdodFJlZ3VsYXI6IGZvbnRXZWlnaHRSZWd1bGFyLFxuICAgIGZvbnRXZWlnaHRNZWRpdW06IGZvbnRXZWlnaHRNZWRpdW0sXG4gICAgZm9udFdlaWdodEJvbGQ6IGZvbnRXZWlnaHRCb2xkXG4gIH0sIHZhcmlhbnRzKSwgb3RoZXIsIHtcbiAgICBjbG9uZTogZmFsc2UgLy8gTm8gbmVlZCB0byBjbG9uZSBkZWVwXG5cbiAgfSk7XG59IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmV4cG9ydCBmdW5jdGlvbiBpc1VuaXRsZXNzKHZhbHVlKSB7XG4gIHJldHVybiBTdHJpbmcocGFyc2VGbG9hdCh2YWx1ZSkpLmxlbmd0aCA9PT0gU3RyaW5nKHZhbHVlKS5sZW5ndGg7XG59IC8vIFBvcnRlZCBmcm9tIENvbXBhc3Ncbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Db21wYXNzL2NvbXBhc3MvYmxvYi9tYXN0ZXIvY29yZS9zdHlsZXNoZWV0cy9jb21wYXNzL3R5cG9ncmFwaHkvX3VuaXRzLnNjc3Ncbi8vIEVtdWxhdGUgdGhlIHNhc3MgZnVuY3Rpb24gXCJ1bml0XCJcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVuaXQoaW5wdXQpIHtcbiAgcmV0dXJuIFN0cmluZyhpbnB1dCkubWF0Y2goL1tcXGQuXFwtK10qXFxzKiguKikvKVsxXSB8fCAnJztcbn0gLy8gRW11bGF0ZSB0aGUgc2FzcyBmdW5jdGlvbiBcInVuaXRsZXNzXCJcblxuZXhwb3J0IGZ1bmN0aW9uIHRvVW5pdGxlc3MobGVuZ3RoKSB7XG4gIHJldHVybiBwYXJzZUZsb2F0KGxlbmd0aCk7XG59IC8vIENvbnZlcnQgYW55IENTUyA8bGVuZ3RoPiBvciA8cGVyY2VudGFnZT4gdmFsdWUgdG8gYW55IGFub3RoZXIuXG4vLyBGcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9LeWxlQU1hdGhld3MvY29udmVydC1jc3MtbGVuZ3RoXG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0TGVuZ3RoKGJhc2VGb250U2l6ZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGxlbmd0aCwgdG9Vbml0KSB7XG4gICAgdmFyIGZyb21Vbml0ID0gZ2V0VW5pdChsZW5ndGgpOyAvLyBPcHRpbWl6ZSBmb3IgY2FzZXMgd2hlcmUgYGZyb21gIGFuZCBgdG9gIHVuaXRzIGFyZSBhY2NpZGVudGFsbHkgdGhlIHNhbWUuXG5cbiAgICBpZiAoZnJvbVVuaXQgPT09IHRvVW5pdCkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9IC8vIENvbnZlcnQgaW5wdXQgbGVuZ3RoIHRvIHBpeGVscy5cblxuXG4gICAgdmFyIHB4TGVuZ3RoID0gdG9Vbml0bGVzcyhsZW5ndGgpO1xuXG4gICAgaWYgKGZyb21Vbml0ICE9PSAncHgnKSB7XG4gICAgICBpZiAoZnJvbVVuaXQgPT09ICdlbScpIHtcbiAgICAgICAgcHhMZW5ndGggPSB0b1VuaXRsZXNzKGxlbmd0aCkgKiB0b1VuaXRsZXNzKGJhc2VGb250U2l6ZSk7XG4gICAgICB9IGVsc2UgaWYgKGZyb21Vbml0ID09PSAncmVtJykge1xuICAgICAgICBweExlbmd0aCA9IHRvVW5pdGxlc3MobGVuZ3RoKSAqIHRvVW5pdGxlc3MoYmFzZUZvbnRTaXplKTtcbiAgICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICAgIH1cbiAgICB9IC8vIENvbnZlcnQgbGVuZ3RoIGluIHBpeGVscyB0byB0aGUgb3V0cHV0IHVuaXRcblxuXG4gICAgdmFyIG91dHB1dExlbmd0aCA9IHB4TGVuZ3RoO1xuXG4gICAgaWYgKHRvVW5pdCAhPT0gJ3B4Jykge1xuICAgICAgaWYgKHRvVW5pdCA9PT0gJ2VtJykge1xuICAgICAgICBvdXRwdXRMZW5ndGggPSBweExlbmd0aCAvIHRvVW5pdGxlc3MoYmFzZUZvbnRTaXplKTtcbiAgICAgIH0gZWxzZSBpZiAodG9Vbml0ID09PSAncmVtJykge1xuICAgICAgICBvdXRwdXRMZW5ndGggPSBweExlbmd0aCAvIHRvVW5pdGxlc3MoYmFzZUZvbnRTaXplKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlRmxvYXQob3V0cHV0TGVuZ3RoLnRvRml4ZWQoNSkpICsgdG9Vbml0O1xuICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFsaWduUHJvcGVydHkoX3JlZikge1xuICB2YXIgc2l6ZSA9IF9yZWYuc2l6ZSxcbiAgICAgIGdyaWQgPSBfcmVmLmdyaWQ7XG4gIHZhciBzaXplQmVsb3cgPSBzaXplIC0gc2l6ZSAlIGdyaWQ7XG4gIHZhciBzaXplQWJvdmUgPSBzaXplQmVsb3cgKyBncmlkO1xuICByZXR1cm4gc2l6ZSAtIHNpemVCZWxvdyA8IHNpemVBYm92ZSAtIHNpemUgPyBzaXplQmVsb3cgOiBzaXplQWJvdmU7XG59IC8vIGZvbnRHcmlkIGZpbmRzIGEgbWluaW1hbCBncmlkIChpbiByZW0pIGZvciB0aGUgZm9udFNpemUgdmFsdWVzIHNvIHRoYXQgdGhlXG4vLyBsaW5lSGVpZ2h0IGZhbGxzIHVuZGVyIGEgeCBwaXhlbHMgZ3JpZCwgNHB4IGluIHRoZSBjYXNlIG9mIE1hdGVyaWFsIERlc2lnbixcbi8vIHdpdGhvdXQgY2hhbmdpbmcgdGhlIHJlbGF0aXZlIGxpbmUgaGVpZ2h0XG5cbmV4cG9ydCBmdW5jdGlvbiBmb250R3JpZChfcmVmMikge1xuICB2YXIgbGluZUhlaWdodCA9IF9yZWYyLmxpbmVIZWlnaHQsXG4gICAgICBwaXhlbHMgPSBfcmVmMi5waXhlbHMsXG4gICAgICBodG1sRm9udFNpemUgPSBfcmVmMi5odG1sRm9udFNpemU7XG4gIHJldHVybiBwaXhlbHMgLyAobGluZUhlaWdodCAqIGh0bWxGb250U2l6ZSk7XG59XG4vKipcbiAqIGdlbmVyYXRlIGEgcmVzcG9uc2l2ZSB2ZXJzaW9uIG9mIGEgZ2l2ZW4gQ1NTIHByb3BlcnR5XG4gKiBAZXhhbXBsZVxuICogcmVzcG9uc2l2ZVByb3BlcnR5KHtcbiAqICAgY3NzUHJvcGVydHk6ICdmb250U2l6ZScsXG4gKiAgIG1pbjogMTUsXG4gKiAgIG1heDogMjAsXG4gKiAgIHVuaXQ6ICdweCcsXG4gKiAgIGJyZWFrcG9pbnRzOiBbMzAwLCA2MDBdLFxuICogfSlcbiAqXG4gKiAvLyB0aGlzIHJldHVybnNcbiAqXG4gKiB7XG4gKiAgIGZvbnRTaXplOiAnMTVweCcsXG4gKiAgICdAbWVkaWEgKG1pbi13aWR0aDozMDBweCknOiB7XG4gKiAgICAgZm9udFNpemU6ICcxNy41cHgnLFxuICogICB9LFxuICogICAnQG1lZGlhIChtaW4td2lkdGg6NjAwcHgpJzoge1xuICogICAgIGZvbnRTaXplOiAnMjBweCcsXG4gKiAgIH0sXG4gKiB9XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5jc3NQcm9wZXJ0eSAtIFRoZSBDU1MgcHJvcGVydHkgdG8gYmUgbWFkZSByZXNwb25zaXZlXG4gKiBAcGFyYW0ge251bWJlcn0gcGFyYW1zLm1pbiAtIFRoZSBzbWFsbGVzdCB2YWx1ZSBvZiB0aGUgQ1NTIHByb3BlcnR5XG4gKiBAcGFyYW0ge251bWJlcn0gcGFyYW1zLm1heCAtIFRoZSBsYXJnZXN0IHZhbHVlIG9mIHRoZSBDU1MgcHJvcGVydHlcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcGFyYW1zLnVuaXRdIC0gVGhlIHVuaXQgdG8gYmUgdXNlZCBmb3IgdGhlIENTUyBwcm9wZXJ0eVxuICogQHBhcmFtIHtBcnJheS5udW1iZXJ9IFtwYXJhbXMuYnJlYWtwb2ludHNdICAtIEFuIGFycmF5IG9mIGJyZWFrcG9pbnRzXG4gKiBAcGFyYW0ge251bWJlcn0gW3BhcmFtcy5hbGlnblN0ZXBdIC0gUm91bmQgc2NhbGVkIHZhbHVlIHRvIGZhbGwgdW5kZXIgdGhpcyBncmlkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSByZXNwb25zaXZlIHN0eWxlcyBmb3Ige3BhcmFtcy5jc3NQcm9wZXJ0eX1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcmVzcG9uc2l2ZVByb3BlcnR5KF9yZWYzKSB7XG4gIHZhciBjc3NQcm9wZXJ0eSA9IF9yZWYzLmNzc1Byb3BlcnR5LFxuICAgICAgbWluID0gX3JlZjMubWluLFxuICAgICAgbWF4ID0gX3JlZjMubWF4LFxuICAgICAgX3JlZjMkdW5pdCA9IF9yZWYzLnVuaXQsXG4gICAgICB1bml0ID0gX3JlZjMkdW5pdCA9PT0gdm9pZCAwID8gJ3JlbScgOiBfcmVmMyR1bml0LFxuICAgICAgX3JlZjMkYnJlYWtwb2ludHMgPSBfcmVmMy5icmVha3BvaW50cyxcbiAgICAgIGJyZWFrcG9pbnRzID0gX3JlZjMkYnJlYWtwb2ludHMgPT09IHZvaWQgMCA/IFs2MDAsIDk2MCwgMTI4MF0gOiBfcmVmMyRicmVha3BvaW50cyxcbiAgICAgIF9yZWYzJHRyYW5zZm9ybSA9IF9yZWYzLnRyYW5zZm9ybSxcbiAgICAgIHRyYW5zZm9ybSA9IF9yZWYzJHRyYW5zZm9ybSA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWYzJHRyYW5zZm9ybTtcblxuICB2YXIgb3V0cHV0ID0gX2RlZmluZVByb3BlcnR5KHt9LCBjc3NQcm9wZXJ0eSwgXCJcIi5jb25jYXQobWluKS5jb25jYXQodW5pdCkpO1xuXG4gIHZhciBmYWN0b3IgPSAobWF4IC0gbWluKSAvIGJyZWFrcG9pbnRzW2JyZWFrcG9pbnRzLmxlbmd0aCAtIDFdO1xuICBicmVha3BvaW50cy5mb3JFYWNoKGZ1bmN0aW9uIChicmVha3BvaW50KSB7XG4gICAgdmFyIHZhbHVlID0gbWluICsgZmFjdG9yICogYnJlYWtwb2ludDtcblxuICAgIGlmICh0cmFuc2Zvcm0gIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdHJhbnNmb3JtKHZhbHVlKTtcbiAgICB9XG5cbiAgICBvdXRwdXRbXCJAbWVkaWEgKG1pbi13aWR0aDpcIi5jb25jYXQoYnJlYWtwb2ludCwgXCJweClcIildID0gX2RlZmluZVByb3BlcnR5KHt9LCBjc3NQcm9wZXJ0eSwgXCJcIi5jb25jYXQoTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMDAwKSAvIDEwMDAwKS5jb25jYXQodW5pdCkpO1xuICB9KTtcbiAgcmV0dXJuIG91dHB1dDtcbn0iLCJpbXBvcnQgY3JlYXRlVGhlbWUgZnJvbSAnLi9jcmVhdGVUaGVtZSc7XG52YXIgZGVmYXVsdFRoZW1lID0gY3JlYXRlVGhlbWUoKTtcbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRUaGVtZTsiLCJleHBvcnQgKiBmcm9tICcuL2NvbG9yTWFuaXB1bGF0b3InO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjcmVhdGVUaGVtZSwgY3JlYXRlTXVpVGhlbWUgfSBmcm9tICcuL2NyZWF0ZVRoZW1lJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZVxuXG5leHBvcnQgeyBkZWZhdWx0IGFzIHVuc3RhYmxlX2NyZWF0ZU11aVN0cmljdE1vZGVUaGVtZSB9IGZyb20gJy4vY3JlYXRlTXVpU3RyaWN0TW9kZVRoZW1lJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY3JlYXRlU3R5bGVzIH0gZnJvbSAnLi9jcmVhdGVTdHlsZXMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtYWtlU3R5bGVzIH0gZnJvbSAnLi9tYWtlU3R5bGVzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcmVzcG9uc2l2ZUZvbnRTaXplcyB9IGZyb20gJy4vcmVzcG9uc2l2ZUZvbnRTaXplcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHN0eWxlZCB9IGZyb20gJy4vc3R5bGVkJztcbmV4cG9ydCAqIGZyb20gJy4vdHJhbnNpdGlvbnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VUaGVtZSB9IGZyb20gJy4vdXNlVGhlbWUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoU3R5bGVzIH0gZnJvbSAnLi93aXRoU3R5bGVzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFRoZW1lIH0gZnJvbSAnLi93aXRoVGhlbWUnO1xuZXhwb3J0IHsgY3JlYXRlR2VuZXJhdGVDbGFzc05hbWUsIGpzc1ByZXNldCwgU2VydmVyU3R5bGVTaGVldHMsIFN0eWxlc1Byb3ZpZGVyLCBUaGVtZVByb3ZpZGVyIGFzIE11aVRoZW1lUHJvdmlkZXIsIFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMgYXMgbWFrZVN0eWxlc1dpdGhvdXREZWZhdWx0IH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XG5pbXBvcnQgZGVmYXVsdFRoZW1lIGZyb20gJy4vZGVmYXVsdFRoZW1lJztcblxuZnVuY3Rpb24gbWFrZVN0eWxlcyhzdHlsZXNPckNyZWF0b3IpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICByZXR1cm4gbWFrZVN0eWxlc1dpdGhvdXREZWZhdWx0KHN0eWxlc09yQ3JlYXRvciwgX2V4dGVuZHMoe1xuICAgIGRlZmF1bHRUaGVtZTogZGVmYXVsdFRoZW1lXG4gIH0sIG9wdGlvbnMpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFrZVN0eWxlczsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCB7IGZvcm1hdE11aUVycm9yTWVzc2FnZSBhcyBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS91dGlsc1wiO1xuaW1wb3J0IHsgaXNVbml0bGVzcywgY29udmVydExlbmd0aCwgcmVzcG9uc2l2ZVByb3BlcnR5LCBhbGlnblByb3BlcnR5LCBmb250R3JpZCB9IGZyb20gJy4vY3NzVXRpbHMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzcG9uc2l2ZUZvbnRTaXplcyh0aGVtZUlucHV0KSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgdmFyIF9vcHRpb25zJGJyZWFrcG9pbnRzID0gb3B0aW9ucy5icmVha3BvaW50cyxcbiAgICAgIGJyZWFrcG9pbnRzID0gX29wdGlvbnMkYnJlYWtwb2ludHMgPT09IHZvaWQgMCA/IFsnc20nLCAnbWQnLCAnbGcnXSA6IF9vcHRpb25zJGJyZWFrcG9pbnRzLFxuICAgICAgX29wdGlvbnMkZGlzYWJsZUFsaWduID0gb3B0aW9ucy5kaXNhYmxlQWxpZ24sXG4gICAgICBkaXNhYmxlQWxpZ24gPSBfb3B0aW9ucyRkaXNhYmxlQWxpZ24gPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkZGlzYWJsZUFsaWduLFxuICAgICAgX29wdGlvbnMkZmFjdG9yID0gb3B0aW9ucy5mYWN0b3IsXG4gICAgICBmYWN0b3IgPSBfb3B0aW9ucyRmYWN0b3IgPT09IHZvaWQgMCA/IDIgOiBfb3B0aW9ucyRmYWN0b3IsXG4gICAgICBfb3B0aW9ucyR2YXJpYW50cyA9IG9wdGlvbnMudmFyaWFudHMsXG4gICAgICB2YXJpYW50cyA9IF9vcHRpb25zJHZhcmlhbnRzID09PSB2b2lkIDAgPyBbJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2JywgJ3N1YnRpdGxlMScsICdzdWJ0aXRsZTInLCAnYm9keTEnLCAnYm9keTInLCAnY2FwdGlvbicsICdidXR0b24nLCAnb3ZlcmxpbmUnXSA6IF9vcHRpb25zJHZhcmlhbnRzO1xuXG4gIHZhciB0aGVtZSA9IF9leHRlbmRzKHt9LCB0aGVtZUlucHV0KTtcblxuICB0aGVtZS50eXBvZ3JhcGh5ID0gX2V4dGVuZHMoe30sIHRoZW1lLnR5cG9ncmFwaHkpO1xuICB2YXIgdHlwb2dyYXBoeSA9IHRoZW1lLnR5cG9ncmFwaHk7IC8vIENvbnZlcnQgYmV0d2VlbiBjc3MgbGVuZ3RocyBlLmcuIGVtLT5weCBvciBweC0+cmVtXG4gIC8vIFNldCB0aGUgYmFzZUZvbnRTaXplIGZvciB5b3VyIHByb2plY3QuIERlZmF1bHRzIHRvIDE2cHggKGFsc28gdGhlIGJyb3dzZXIgZGVmYXVsdCkuXG5cbiAgdmFyIGNvbnZlcnQgPSBjb252ZXJ0TGVuZ3RoKHR5cG9ncmFwaHkuaHRtbEZvbnRTaXplKTtcbiAgdmFyIGJyZWFrcG9pbnRWYWx1ZXMgPSBicmVha3BvaW50cy5tYXAoZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4gdGhlbWUuYnJlYWtwb2ludHMudmFsdWVzW3hdO1xuICB9KTtcbiAgdmFyaWFudHMuZm9yRWFjaChmdW5jdGlvbiAodmFyaWFudCkge1xuICAgIHZhciBzdHlsZSA9IHR5cG9ncmFwaHlbdmFyaWFudF07XG4gICAgdmFyIHJlbUZvbnRTaXplID0gcGFyc2VGbG9hdChjb252ZXJ0KHN0eWxlLmZvbnRTaXplLCAncmVtJykpO1xuXG4gICAgaWYgKHJlbUZvbnRTaXplIDw9IDEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbWF4Rm9udFNpemUgPSByZW1Gb250U2l6ZTtcbiAgICB2YXIgbWluRm9udFNpemUgPSAxICsgKG1heEZvbnRTaXplIC0gMSkgLyBmYWN0b3I7XG4gICAgdmFyIGxpbmVIZWlnaHQgPSBzdHlsZS5saW5lSGVpZ2h0O1xuXG4gICAgaWYgKCFpc1VuaXRsZXNzKGxpbmVIZWlnaHQpICYmICFkaXNhYmxlQWxpZ24pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBcIk1hdGVyaWFsLVVJOiBVbnN1cHBvcnRlZCBub24tdW5pdGxlc3MgbGluZSBoZWlnaHQgd2l0aCBncmlkIGFsaWdubWVudC5cXG5Vc2UgdW5pdGxlc3MgbGluZSBoZWlnaHRzIGluc3RlYWQuXCIgOiBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlKDYpKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzVW5pdGxlc3MobGluZUhlaWdodCkpIHtcbiAgICAgIC8vIG1ha2UgaXQgdW5pdGxlc3NcbiAgICAgIGxpbmVIZWlnaHQgPSBwYXJzZUZsb2F0KGNvbnZlcnQobGluZUhlaWdodCwgJ3JlbScpKSAvIHBhcnNlRmxvYXQocmVtRm9udFNpemUpO1xuICAgIH1cblxuICAgIHZhciB0cmFuc2Zvcm0gPSBudWxsO1xuXG4gICAgaWYgKCFkaXNhYmxlQWxpZ24pIHtcbiAgICAgIHRyYW5zZm9ybSA9IGZ1bmN0aW9uIHRyYW5zZm9ybSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gYWxpZ25Qcm9wZXJ0eSh7XG4gICAgICAgICAgc2l6ZTogdmFsdWUsXG4gICAgICAgICAgZ3JpZDogZm9udEdyaWQoe1xuICAgICAgICAgICAgcGl4ZWxzOiA0LFxuICAgICAgICAgICAgbGluZUhlaWdodDogbGluZUhlaWdodCxcbiAgICAgICAgICAgIGh0bWxGb250U2l6ZTogdHlwb2dyYXBoeS5odG1sRm9udFNpemVcbiAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdHlwb2dyYXBoeVt2YXJpYW50XSA9IF9leHRlbmRzKHt9LCBzdHlsZSwgcmVzcG9uc2l2ZVByb3BlcnR5KHtcbiAgICAgIGNzc1Byb3BlcnR5OiAnZm9udFNpemUnLFxuICAgICAgbWluOiBtaW5Gb250U2l6ZSxcbiAgICAgIG1heDogbWF4Rm9udFNpemUsXG4gICAgICB1bml0OiAncmVtJyxcbiAgICAgIGJyZWFrcG9pbnRzOiBicmVha3BvaW50VmFsdWVzLFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1cbiAgICB9KSk7XG4gIH0pO1xuICByZXR1cm4gdGhlbWU7XG59IiwidmFyIHNoYWRvd0tleVVtYnJhT3BhY2l0eSA9IDAuMjtcbnZhciBzaGFkb3dLZXlQZW51bWJyYU9wYWNpdHkgPSAwLjE0O1xudmFyIHNoYWRvd0FtYmllbnRTaGFkb3dPcGFjaXR5ID0gMC4xMjtcblxuZnVuY3Rpb24gY3JlYXRlU2hhZG93KCkge1xuICByZXR1cm4gW1wiXCIuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gMCA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1swXSwgXCJweCBcIikuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gMSA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1sxXSwgXCJweCBcIikuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gMiA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1syXSwgXCJweCBcIikuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gMyA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1szXSwgXCJweCByZ2JhKDAsMCwwLFwiKS5jb25jYXQoc2hhZG93S2V5VW1icmFPcGFjaXR5LCBcIilcIiksIFwiXCIuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gNCA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1s0XSwgXCJweCBcIikuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gNSA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1s1XSwgXCJweCBcIikuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gNiA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1s2XSwgXCJweCBcIikuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gNyA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1s3XSwgXCJweCByZ2JhKDAsMCwwLFwiKS5jb25jYXQoc2hhZG93S2V5UGVudW1icmFPcGFjaXR5LCBcIilcIiksIFwiXCIuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gOCA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1s4XSwgXCJweCBcIikuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gOSA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1s5XSwgXCJweCBcIikuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gMTAgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMTBdLCBcInB4IFwiKS5jb25jYXQoYXJndW1lbnRzLmxlbmd0aCA8PSAxMSA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1sxMV0sIFwicHggcmdiYSgwLDAsMCxcIikuY29uY2F0KHNoYWRvd0FtYmllbnRTaGFkb3dPcGFjaXR5LCBcIilcIildLmpvaW4oJywnKTtcbn0gLy8gVmFsdWVzIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL21hdGVyaWFsLWNvbXBvbmVudHMvbWF0ZXJpYWwtY29tcG9uZW50cy13ZWIvYmxvYi9iZTg3NDdmOTQ1NzQ2NjljYjVlN2FkZDFhN2M1NGZhNDFhODljZWM3L3BhY2thZ2VzL21kYy1lbGV2YXRpb24vX3ZhcmlhYmxlcy5zY3NzXG5cblxudmFyIHNoYWRvd3MgPSBbJ25vbmUnLCBjcmVhdGVTaGFkb3coMCwgMiwgMSwgLTEsIDAsIDEsIDEsIDAsIDAsIDEsIDMsIDApLCBjcmVhdGVTaGFkb3coMCwgMywgMSwgLTIsIDAsIDIsIDIsIDAsIDAsIDEsIDUsIDApLCBjcmVhdGVTaGFkb3coMCwgMywgMywgLTIsIDAsIDMsIDQsIDAsIDAsIDEsIDgsIDApLCBjcmVhdGVTaGFkb3coMCwgMiwgNCwgLTEsIDAsIDQsIDUsIDAsIDAsIDEsIDEwLCAwKSwgY3JlYXRlU2hhZG93KDAsIDMsIDUsIC0xLCAwLCA1LCA4LCAwLCAwLCAxLCAxNCwgMCksIGNyZWF0ZVNoYWRvdygwLCAzLCA1LCAtMSwgMCwgNiwgMTAsIDAsIDAsIDEsIDE4LCAwKSwgY3JlYXRlU2hhZG93KDAsIDQsIDUsIC0yLCAwLCA3LCAxMCwgMSwgMCwgMiwgMTYsIDEpLCBjcmVhdGVTaGFkb3coMCwgNSwgNSwgLTMsIDAsIDgsIDEwLCAxLCAwLCAzLCAxNCwgMiksIGNyZWF0ZVNoYWRvdygwLCA1LCA2LCAtMywgMCwgOSwgMTIsIDEsIDAsIDMsIDE2LCAyKSwgY3JlYXRlU2hhZG93KDAsIDYsIDYsIC0zLCAwLCAxMCwgMTQsIDEsIDAsIDQsIDE4LCAzKSwgY3JlYXRlU2hhZG93KDAsIDYsIDcsIC00LCAwLCAxMSwgMTUsIDEsIDAsIDQsIDIwLCAzKSwgY3JlYXRlU2hhZG93KDAsIDcsIDgsIC00LCAwLCAxMiwgMTcsIDIsIDAsIDUsIDIyLCA0KSwgY3JlYXRlU2hhZG93KDAsIDcsIDgsIC00LCAwLCAxMywgMTksIDIsIDAsIDUsIDI0LCA0KSwgY3JlYXRlU2hhZG93KDAsIDcsIDksIC00LCAwLCAxNCwgMjEsIDIsIDAsIDUsIDI2LCA0KSwgY3JlYXRlU2hhZG93KDAsIDgsIDksIC01LCAwLCAxNSwgMjIsIDIsIDAsIDYsIDI4LCA1KSwgY3JlYXRlU2hhZG93KDAsIDgsIDEwLCAtNSwgMCwgMTYsIDI0LCAyLCAwLCA2LCAzMCwgNSksIGNyZWF0ZVNoYWRvdygwLCA4LCAxMSwgLTUsIDAsIDE3LCAyNiwgMiwgMCwgNiwgMzIsIDUpLCBjcmVhdGVTaGFkb3coMCwgOSwgMTEsIC01LCAwLCAxOCwgMjgsIDIsIDAsIDcsIDM0LCA2KSwgY3JlYXRlU2hhZG93KDAsIDksIDEyLCAtNiwgMCwgMTksIDI5LCAyLCAwLCA3LCAzNiwgNiksIGNyZWF0ZVNoYWRvdygwLCAxMCwgMTMsIC02LCAwLCAyMCwgMzEsIDMsIDAsIDgsIDM4LCA3KSwgY3JlYXRlU2hhZG93KDAsIDEwLCAxMywgLTYsIDAsIDIxLCAzMywgMywgMCwgOCwgNDAsIDcpLCBjcmVhdGVTaGFkb3coMCwgMTAsIDE0LCAtNiwgMCwgMjIsIDM1LCAzLCAwLCA4LCA0MiwgNyksIGNyZWF0ZVNoYWRvdygwLCAxMSwgMTQsIC03LCAwLCAyMywgMzYsIDMsIDAsIDksIDQ0LCA4KSwgY3JlYXRlU2hhZG93KDAsIDExLCAxNSwgLTcsIDAsIDI0LCAzOCwgMywgMCwgOSwgNDYsIDgpXTtcbmV4cG9ydCBkZWZhdWx0IHNoYWRvd3M7IiwidmFyIHNoYXBlID0ge1xuICBib3JkZXJSYWRpdXM6IDRcbn07XG5leHBvcnQgZGVmYXVsdCBzaGFwZTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCB7IHN0eWxlZCBhcyBzdHlsZWRXaXRob3V0RGVmYXVsdCB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xuaW1wb3J0IGRlZmF1bHRUaGVtZSBmcm9tICcuL2RlZmF1bHRUaGVtZSc7XG5cbnZhciBzdHlsZWQgPSBmdW5jdGlvbiBzdHlsZWQoQ29tcG9uZW50KSB7XG4gIHZhciBjb21wb25lbnRDcmVhdG9yID0gc3R5bGVkV2l0aG91dERlZmF1bHQoQ29tcG9uZW50KTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHlsZSwgb3B0aW9ucykge1xuICAgIHJldHVybiBjb21wb25lbnRDcmVhdG9yKHN0eWxlLCBfZXh0ZW5kcyh7XG4gICAgICBkZWZhdWx0VGhlbWU6IGRlZmF1bHRUaGVtZVxuICAgIH0sIG9wdGlvbnMpKTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlZDsiLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuLy8gRm9sbG93IGh0dHBzOi8vbWF0ZXJpYWwuZ29vZ2xlLmNvbS9tb3Rpb24vZHVyYXRpb24tZWFzaW5nLmh0bWwjZHVyYXRpb24tZWFzaW5nLW5hdHVyYWwtZWFzaW5nLWN1cnZlc1xuLy8gdG8gbGVhcm4gdGhlIGNvbnRleHQgaW4gd2hpY2ggZWFjaCBlYXNpbmcgc2hvdWxkIGJlIHVzZWQuXG5leHBvcnQgdmFyIGVhc2luZyA9IHtcbiAgLy8gVGhpcyBpcyB0aGUgbW9zdCBjb21tb24gZWFzaW5nIGN1cnZlLlxuICBlYXNlSW5PdXQ6ICdjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpJyxcbiAgLy8gT2JqZWN0cyBlbnRlciB0aGUgc2NyZWVuIGF0IGZ1bGwgdmVsb2NpdHkgZnJvbSBvZmYtc2NyZWVuIGFuZFxuICAvLyBzbG93bHkgZGVjZWxlcmF0ZSB0byBhIHJlc3RpbmcgcG9pbnQuXG4gIGVhc2VPdXQ6ICdjdWJpYy1iZXppZXIoMC4wLCAwLCAwLjIsIDEpJyxcbiAgLy8gT2JqZWN0cyBsZWF2ZSB0aGUgc2NyZWVuIGF0IGZ1bGwgdmVsb2NpdHkuIFRoZXkgZG8gbm90IGRlY2VsZXJhdGUgd2hlbiBvZmYtc2NyZWVuLlxuICBlYXNlSW46ICdjdWJpYy1iZXppZXIoMC40LCAwLCAxLCAxKScsXG4gIC8vIFRoZSBzaGFycCBjdXJ2ZSBpcyB1c2VkIGJ5IG9iamVjdHMgdGhhdCBtYXkgcmV0dXJuIHRvIHRoZSBzY3JlZW4gYXQgYW55IHRpbWUuXG4gIHNoYXJwOiAnY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC42LCAxKSdcbn07IC8vIEZvbGxvdyBodHRwczovL21hdGVyaWFsLmlvL2d1aWRlbGluZXMvbW90aW9uL2R1cmF0aW9uLWVhc2luZy5odG1sI2R1cmF0aW9uLWVhc2luZy1jb21tb24tZHVyYXRpb25zXG4vLyB0byBsZWFybiB3aGVuIHVzZSB3aGF0IHRpbWluZ1xuXG5leHBvcnQgdmFyIGR1cmF0aW9uID0ge1xuICBzaG9ydGVzdDogMTUwLFxuICBzaG9ydGVyOiAyMDAsXG4gIHNob3J0OiAyNTAsXG4gIC8vIG1vc3QgYmFzaWMgcmVjb21tZW5kZWQgdGltaW5nXG4gIHN0YW5kYXJkOiAzMDAsXG4gIC8vIHRoaXMgaXMgdG8gYmUgdXNlZCBpbiBjb21wbGV4IGFuaW1hdGlvbnNcbiAgY29tcGxleDogMzc1LFxuICAvLyByZWNvbW1lbmRlZCB3aGVuIHNvbWV0aGluZyBpcyBlbnRlcmluZyBzY3JlZW5cbiAgZW50ZXJpbmdTY3JlZW46IDIyNSxcbiAgLy8gcmVjb21tZW5kZWQgd2hlbiBzb21ldGhpbmcgaXMgbGVhdmluZyBzY3JlZW5cbiAgbGVhdmluZ1NjcmVlbjogMTk1XG59O1xuXG5mdW5jdGlvbiBmb3JtYXRNcyhtaWxsaXNlY29uZHMpIHtcbiAgcmV0dXJuIFwiXCIuY29uY2F0KE1hdGgucm91bmQobWlsbGlzZWNvbmRzKSwgXCJtc1wiKTtcbn1cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd8QXJyYXl9IHByb3BzXG4gKiBAcGFyYW0ge29iamVjdH0gcGFyYW1cbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbS5wcm9wXG4gKiBAcGFyYW0ge251bWJlcn0gcGFyYW0uZHVyYXRpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbS5lYXNpbmdcbiAqIEBwYXJhbSB7bnVtYmVyfSBwYXJhbS5kZWxheVxuICovXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBlYXNpbmc6IGVhc2luZyxcbiAgZHVyYXRpb246IGR1cmF0aW9uLFxuICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFsnYWxsJ107XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgdmFyIF9vcHRpb25zJGR1cmF0aW9uID0gb3B0aW9ucy5kdXJhdGlvbixcbiAgICAgICAgZHVyYXRpb25PcHRpb24gPSBfb3B0aW9ucyRkdXJhdGlvbiA9PT0gdm9pZCAwID8gZHVyYXRpb24uc3RhbmRhcmQgOiBfb3B0aW9ucyRkdXJhdGlvbixcbiAgICAgICAgX29wdGlvbnMkZWFzaW5nID0gb3B0aW9ucy5lYXNpbmcsXG4gICAgICAgIGVhc2luZ09wdGlvbiA9IF9vcHRpb25zJGVhc2luZyA9PT0gdm9pZCAwID8gZWFzaW5nLmVhc2VJbk91dCA6IF9vcHRpb25zJGVhc2luZyxcbiAgICAgICAgX29wdGlvbnMkZGVsYXkgPSBvcHRpb25zLmRlbGF5LFxuICAgICAgICBkZWxheSA9IF9vcHRpb25zJGRlbGF5ID09PSB2b2lkIDAgPyAwIDogX29wdGlvbnMkZGVsYXksXG4gICAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9wdGlvbnMsIFtcImR1cmF0aW9uXCIsIFwiZWFzaW5nXCIsIFwiZGVsYXlcIl0pO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBpc1N0cmluZyA9IGZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xuICAgICAgfTtcblxuICAgICAgdmFyIGlzTnVtYmVyID0gZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KHZhbHVlKSk7XG4gICAgICB9O1xuXG4gICAgICBpZiAoIWlzU3RyaW5nKHByb3BzKSAmJiAhQXJyYXkuaXNBcnJheShwcm9wcykpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignTWF0ZXJpYWwtVUk6IEFyZ3VtZW50IFwicHJvcHNcIiBtdXN0IGJlIGEgc3RyaW5nIG9yIEFycmF5LicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTnVtYmVyKGR1cmF0aW9uT3B0aW9uKSAmJiAhaXNTdHJpbmcoZHVyYXRpb25PcHRpb24pKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNYXRlcmlhbC1VSTogQXJndW1lbnQgXFxcImR1cmF0aW9uXFxcIiBtdXN0IGJlIGEgbnVtYmVyIG9yIGEgc3RyaW5nIGJ1dCBmb3VuZCBcIi5jb25jYXQoZHVyYXRpb25PcHRpb24sIFwiLlwiKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNTdHJpbmcoZWFzaW5nT3B0aW9uKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdNYXRlcmlhbC1VSTogQXJndW1lbnQgXCJlYXNpbmdcIiBtdXN0IGJlIGEgc3RyaW5nLicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTnVtYmVyKGRlbGF5KSAmJiAhaXNTdHJpbmcoZGVsYXkpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ01hdGVyaWFsLVVJOiBBcmd1bWVudCBcImRlbGF5XCIgbXVzdCBiZSBhIG51bWJlciBvciBhIHN0cmluZy4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKE9iamVjdC5rZXlzKG90aGVyKS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk1hdGVyaWFsLVVJOiBVbnJlY29nbml6ZWQgYXJndW1lbnQocykgW1wiLmNvbmNhdChPYmplY3Qua2V5cyhvdGhlcikuam9pbignLCcpLCBcIl0uXCIpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKEFycmF5LmlzQXJyYXkocHJvcHMpID8gcHJvcHMgOiBbcHJvcHNdKS5tYXAoZnVuY3Rpb24gKGFuaW1hdGVkUHJvcCkge1xuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KGFuaW1hdGVkUHJvcCwgXCIgXCIpLmNvbmNhdCh0eXBlb2YgZHVyYXRpb25PcHRpb24gPT09ICdzdHJpbmcnID8gZHVyYXRpb25PcHRpb24gOiBmb3JtYXRNcyhkdXJhdGlvbk9wdGlvbiksIFwiIFwiKS5jb25jYXQoZWFzaW5nT3B0aW9uLCBcIiBcIikuY29uY2F0KHR5cGVvZiBkZWxheSA9PT0gJ3N0cmluZycgPyBkZWxheSA6IGZvcm1hdE1zKGRlbGF5KSk7XG4gICAgfSkuam9pbignLCcpO1xuICB9LFxuICBnZXRBdXRvSGVpZ2h0RHVyYXRpb246IGZ1bmN0aW9uIGdldEF1dG9IZWlnaHREdXJhdGlvbihoZWlnaHQpIHtcbiAgICBpZiAoIWhlaWdodCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgdmFyIGNvbnN0YW50ID0gaGVpZ2h0IC8gMzY7IC8vIGh0dHBzOi8vd3d3LndvbGZyYW1hbHBoYS5jb20vaW5wdXQvP2k9KDQrJTJCKzE1KyorKHgrJTJGKzM2KykrKiorMC4yNSslMkIrKHgrJTJGKzM2KSslMkYrNSkrKisxMFxuXG4gICAgcmV0dXJuIE1hdGgucm91bmQoKDQgKyAxNSAqIE1hdGgucG93KGNvbnN0YW50LCAwLjI1KSArIGNvbnN0YW50IC8gNSkgKiAxMCk7XG4gIH1cbn07IiwiaW1wb3J0IHsgdXNlVGhlbWUgYXMgdXNlVGhlbWVXaXRob3V0RGVmYXVsdCB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBkZWZhdWx0VGhlbWUgZnJvbSAnLi9kZWZhdWx0VGhlbWUnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlVGhlbWUoKSB7XG4gIHZhciB0aGVtZSA9IHVzZVRoZW1lV2l0aG91dERlZmF1bHQoKSB8fCBkZWZhdWx0VGhlbWU7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBSZWFjdC51c2VEZWJ1Z1ZhbHVlKHRoZW1lKTtcbiAgfVxuXG4gIHJldHVybiB0aGVtZTtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCB7IHdpdGhTdHlsZXMgYXMgd2l0aFN0eWxlc1dpdGhvdXREZWZhdWx0IH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XG5pbXBvcnQgZGVmYXVsdFRoZW1lIGZyb20gJy4vZGVmYXVsdFRoZW1lJztcblxuZnVuY3Rpb24gd2l0aFN0eWxlcyhzdHlsZXNPckNyZWF0b3IsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHdpdGhTdHlsZXNXaXRob3V0RGVmYXVsdChzdHlsZXNPckNyZWF0b3IsIF9leHRlbmRzKHtcbiAgICBkZWZhdWx0VGhlbWU6IGRlZmF1bHRUaGVtZVxuICB9LCBvcHRpb25zKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXM7IiwiaW1wb3J0IHsgd2l0aFRoZW1lQ3JlYXRvciB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xuaW1wb3J0IGRlZmF1bHRUaGVtZSBmcm9tICcuL2RlZmF1bHRUaGVtZSc7XG52YXIgd2l0aFRoZW1lID0gd2l0aFRoZW1lQ3JlYXRvcih7XG4gIGRlZmF1bHRUaGVtZTogZGVmYXVsdFRoZW1lXG59KTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZTsiLCIvLyBXZSBuZWVkIHRvIGNlbnRyYWxpemUgdGhlIHpJbmRleCBkZWZpbml0aW9ucyBhcyB0aGV5IHdvcmtcbi8vIGxpa2UgZ2xvYmFsIHZhbHVlcyBpbiB0aGUgYnJvd3Nlci5cbnZhciB6SW5kZXggPSB7XG4gIG1vYmlsZVN0ZXBwZXI6IDEwMDAsXG4gIHNwZWVkRGlhbDogMTA1MCxcbiAgYXBwQmFyOiAxMTAwLFxuICBkcmF3ZXI6IDEyMDAsXG4gIG1vZGFsOiAxMzAwLFxuICBzbmFja2JhcjogMTQwMCxcbiAgdG9vbHRpcDogMTUwMFxufTtcbmV4cG9ydCBkZWZhdWx0IHpJbmRleDsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrXCI7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNoZWV0c1JlZ2lzdHJ5IH0gZnJvbSAnanNzJztcbmltcG9ydCBTdHlsZXNQcm92aWRlciBmcm9tICcuLi9TdHlsZXNQcm92aWRlcic7XG5pbXBvcnQgY3JlYXRlR2VuZXJhdGVDbGFzc05hbWUgZnJvbSAnLi4vY3JlYXRlR2VuZXJhdGVDbGFzc05hbWUnO1xuXG52YXIgU2VydmVyU3R5bGVTaGVldHMgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTZXJ2ZXJTdHlsZVNoZWV0cygpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2VydmVyU3R5bGVTaGVldHMpO1xuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTZXJ2ZXJTdHlsZVNoZWV0cywgW3tcbiAgICBrZXk6IFwiY29sbGVjdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb2xsZWN0KGNoaWxkcmVuKSB7XG4gICAgICAvLyBUaGlzIGlzIG5lZWRlZCBpbiBvcmRlciB0byBkZWR1cGxpY2F0ZSB0aGUgaW5qZWN0aW9uIG9mIENTUyBpbiB0aGUgcGFnZS5cbiAgICAgIHZhciBzaGVldHNNYW5hZ2VyID0gbmV3IE1hcCgpOyAvLyBUaGlzIGlzIG5lZWRlZCBpbiBvcmRlciB0byBpbmplY3QgdGhlIGNyaXRpY2FsIENTUy5cblxuICAgICAgdGhpcy5zaGVldHNSZWdpc3RyeSA9IG5ldyBTaGVldHNSZWdpc3RyeSgpOyAvLyBBIG5ldyBjbGFzcyBuYW1lIGdlbmVyYXRvclxuXG4gICAgICB2YXIgZ2VuZXJhdGVDbGFzc05hbWUgPSBjcmVhdGVHZW5lcmF0ZUNsYXNzTmFtZSgpO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlc1Byb3ZpZGVyLCBfZXh0ZW5kcyh7XG4gICAgICAgIHNoZWV0c01hbmFnZXI6IHNoZWV0c01hbmFnZXIsXG4gICAgICAgIHNlcnZlckdlbmVyYXRlQ2xhc3NOYW1lOiBnZW5lcmF0ZUNsYXNzTmFtZSxcbiAgICAgICAgc2hlZXRzUmVnaXN0cnk6IHRoaXMuc2hlZXRzUmVnaXN0cnlcbiAgICAgIH0sIHRoaXMub3B0aW9ucyksIGNoaWxkcmVuKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidG9TdHJpbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zaGVldHNSZWdpc3RyeSA/IHRoaXMuc2hlZXRzUmVnaXN0cnkudG9TdHJpbmcoKSA6ICcnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRTdHlsZUVsZW1lbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U3R5bGVFbGVtZW50KHByb3BzKSB7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJywgX2V4dGVuZHMoe1xuICAgICAgICBpZDogJ2pzcy1zZXJ2ZXItc2lkZScsXG4gICAgICAgIGtleTogJ2pzcy1zZXJ2ZXItc2lkZScsXG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG4gICAgICAgICAgX19odG1sOiB0aGlzLnRvU3RyaW5nKClcbiAgICAgICAgfVxuICAgICAgfSwgcHJvcHMpKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU2VydmVyU3R5bGVTaGVldHM7XG59KCk7XG5cbmV4cG9ydCB7IFNlcnZlclN0eWxlU2hlZXRzIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGV4YWN0UHJvcCB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5pbXBvcnQgY3JlYXRlR2VuZXJhdGVDbGFzc05hbWUgZnJvbSAnLi4vY3JlYXRlR2VuZXJhdGVDbGFzc05hbWUnO1xuaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSAnanNzJztcbmltcG9ydCBqc3NQcmVzZXQgZnJvbSAnLi4vanNzUHJlc2V0JzsgLy8gRGVmYXVsdCBKU1MgaW5zdGFuY2UuXG5cbnZhciBqc3MgPSBjcmVhdGUoanNzUHJlc2V0KCkpOyAvLyBVc2UgYSBzaW5nbGV0b24gb3IgdGhlIHByb3ZpZGVkIG9uZSBieSB0aGUgY29udGV4dC5cbi8vXG4vLyBUaGUgY291bnRlci1iYXNlZCBhcHByb2FjaCBkb2Vzbid0IHRvbGVyYXRlIGFueSBtaXN0YWtlLlxuLy8gSXQncyBtdWNoIHNhZmVyIHRvIHVzZSB0aGUgc2FtZSBjb3VudGVyIGV2ZXJ5d2hlcmUuXG5cbnZhciBnZW5lcmF0ZUNsYXNzTmFtZSA9IGNyZWF0ZUdlbmVyYXRlQ2xhc3NOYW1lKCk7IC8vIEV4cG9ydGVkIGZvciB0ZXN0IHB1cnBvc2VzXG5cbmV4cG9ydCB2YXIgc2hlZXRzTWFuYWdlciA9IG5ldyBNYXAoKTtcbnZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgZGlzYWJsZUdlbmVyYXRpb246IGZhbHNlLFxuICBnZW5lcmF0ZUNsYXNzTmFtZTogZ2VuZXJhdGVDbGFzc05hbWUsXG4gIGpzczoganNzLFxuICBzaGVldHNDYWNoZTogbnVsbCxcbiAgc2hlZXRzTWFuYWdlcjogc2hlZXRzTWFuYWdlcixcbiAgc2hlZXRzUmVnaXN0cnk6IG51bGxcbn07XG5leHBvcnQgdmFyIFN0eWxlc0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGRlZmF1bHRPcHRpb25zKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgU3R5bGVzQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdTdHlsZXNDb250ZXh0Jztcbn1cblxudmFyIGluamVjdEZpcnN0Tm9kZTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0eWxlc1Byb3ZpZGVyKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgX3Byb3BzJGluamVjdEZpcnN0ID0gcHJvcHMuaW5qZWN0Rmlyc3QsXG4gICAgICBpbmplY3RGaXJzdCA9IF9wcm9wcyRpbmplY3RGaXJzdCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkaW5qZWN0Rmlyc3QsXG4gICAgICBfcHJvcHMkZGlzYWJsZUdlbmVyYXQgPSBwcm9wcy5kaXNhYmxlR2VuZXJhdGlvbixcbiAgICAgIGRpc2FibGVHZW5lcmF0aW9uID0gX3Byb3BzJGRpc2FibGVHZW5lcmF0ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlR2VuZXJhdCxcbiAgICAgIGxvY2FsT3B0aW9ucyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2hpbGRyZW5cIiwgXCJpbmplY3RGaXJzdFwiLCBcImRpc2FibGVHZW5lcmF0aW9uXCJdKTtcblxuICB2YXIgb3V0ZXJPcHRpb25zID0gUmVhY3QudXNlQ29udGV4dChTdHlsZXNDb250ZXh0KTtcblxuICB2YXIgY29udGV4dCA9IF9leHRlbmRzKHt9LCBvdXRlck9wdGlvbnMsIHtcbiAgICBkaXNhYmxlR2VuZXJhdGlvbjogZGlzYWJsZUdlbmVyYXRpb25cbiAgfSwgbG9jYWxPcHRpb25zKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyAmJiAhY29udGV4dC5zaGVldHNNYW5hZ2VyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdNYXRlcmlhbC1VSTogWW91IG5lZWQgdG8gdXNlIHRoZSBTZXJ2ZXJTdHlsZVNoZWV0cyBBUEkgd2hlbiByZW5kZXJpbmcgb24gdGhlIHNlcnZlci4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChjb250ZXh0Lmpzcy5vcHRpb25zLmluc2VydGlvblBvaW50ICYmIGluamVjdEZpcnN0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdNYXRlcmlhbC1VSTogWW91IGNhbm5vdCB1c2UgYSBjdXN0b20gaW5zZXJ0aW9uUG9pbnQgYW5kIDxTdHlsZXNDb250ZXh0IGluamVjdEZpcnN0PiBhdCB0aGUgc2FtZSB0aW1lLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGluamVjdEZpcnN0ICYmIGxvY2FsT3B0aW9ucy5qc3MpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ01hdGVyaWFsLVVJOiBZb3UgY2Fubm90IHVzZSB0aGUganNzIGFuZCBpbmplY3RGaXJzdCBwcm9wcyBhdCB0aGUgc2FtZSB0aW1lLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29udGV4dC5qc3Mub3B0aW9ucy5pbnNlcnRpb25Qb2ludCAmJiBpbmplY3RGaXJzdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICghaW5qZWN0Rmlyc3ROb2RlKSB7XG4gICAgICB2YXIgaGVhZCA9IGRvY3VtZW50LmhlYWQ7XG4gICAgICBpbmplY3RGaXJzdE5vZGUgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCdtdWktaW5qZWN0LWZpcnN0Jyk7XG4gICAgICBoZWFkLmluc2VydEJlZm9yZShpbmplY3RGaXJzdE5vZGUsIGhlYWQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgY29udGV4dC5qc3MgPSBjcmVhdGUoe1xuICAgICAgcGx1Z2luczoganNzUHJlc2V0KCkucGx1Z2lucyxcbiAgICAgIGluc2VydGlvblBvaW50OiBpbmplY3RGaXJzdE5vZGVcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZXNDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGNvbnRleHRcbiAgfSwgY2hpbGRyZW4pO1xufVxucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gU3R5bGVzUHJvdmlkZXIucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogWW91ciBjb21wb25lbnQgdHJlZS5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBZb3UgY2FuIGRpc2FibGUgdGhlIGdlbmVyYXRpb24gb2YgdGhlIHN0eWxlcyB3aXRoIHRoaXMgb3B0aW9uLlxuICAgKiBJdCBjYW4gYmUgdXNlZnVsIHdoZW4gdHJhdmVyc2luZyB0aGUgUmVhY3QgdHJlZSBvdXRzaWRlIG9mIHRoZSBIVE1MXG4gICAqIHJlbmRlcmluZyBzdGVwIG9uIHRoZSBzZXJ2ZXIuXG4gICAqIExldCdzIHNheSB5b3UgYXJlIHVzaW5nIHJlYWN0LWFwb2xsbyB0byBleHRyYWN0IGFsbFxuICAgKiB0aGUgcXVlcmllcyBtYWRlIGJ5IHRoZSBpbnRlcmZhY2Ugc2VydmVyLXNpZGUgLSB5b3UgY2FuIHNpZ25pZmljYW50bHkgc3BlZWQgdXAgdGhlIHRyYXZlcnNhbCB3aXRoIHRoaXMgcHJvcC5cbiAgICovXG4gIGRpc2FibGVHZW5lcmF0aW9uOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSlNTJ3MgY2xhc3MgbmFtZSBnZW5lcmF0b3IuXG4gICAqL1xuICBnZW5lcmF0ZUNsYXNzTmFtZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEJ5IGRlZmF1bHQsIHRoZSBzdHlsZXMgYXJlIGluamVjdGVkIGxhc3QgaW4gdGhlIDxoZWFkPiBlbGVtZW50IG9mIHRoZSBwYWdlLlxuICAgKiBBcyBhIHJlc3VsdCwgdGhleSBnYWluIG1vcmUgc3BlY2lmaWNpdHkgdGhhbiBhbnkgb3RoZXIgc3R5bGUgc2hlZXQuXG4gICAqIElmIHlvdSB3YW50IHRvIG92ZXJyaWRlIE1hdGVyaWFsLVVJJ3Mgc3R5bGVzLCBzZXQgdGhpcyBwcm9wLlxuICAgKi9cbiAgaW5qZWN0Rmlyc3Q6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBKU1MncyBpbnN0YW5jZS5cbiAgICovXG4gIGpzczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgc2VydmVyR2VuZXJhdGVDbGFzc05hbWU6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqXG4gICAqIEJldGEgZmVhdHVyZS5cbiAgICpcbiAgICogQ2FjaGUgZm9yIHRoZSBzaGVldHMuXG4gICAqL1xuICBzaGVldHNDYWNoZTogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKlxuICAgKiBUaGUgc2hlZXRzTWFuYWdlciBpcyB1c2VkIHRvIGRlZHVwbGljYXRlIHN0eWxlIHNoZWV0IGluamVjdGlvbiBpbiB0aGUgcGFnZS5cbiAgICogSXQncyBkZWR1cGxpY2F0aW5nIHVzaW5nIHRoZSAodGhlbWUsIHN0eWxlcykgY291cGxlLlxuICAgKiBPbiB0aGUgc2VydmVyLCB5b3Ugc2hvdWxkIHByb3ZpZGUgYSBuZXcgaW5zdGFuY2UgZm9yIGVhY2ggcmVxdWVzdC5cbiAgICovXG4gIHNoZWV0c01hbmFnZXI6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICpcbiAgICogQ29sbGVjdCB0aGUgc2hlZXRzLlxuICAgKi9cbiAgc2hlZXRzUmVnaXN0cnk6IFByb3BUeXBlcy5vYmplY3Rcbn0gOiB2b2lkIDA7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFN0eWxlc1Byb3ZpZGVyLnByb3BUeXBlcyA9IGV4YWN0UHJvcChTdHlsZXNQcm92aWRlci5wcm9wVHlwZXMpIDogdm9pZCAwO1xufSIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1N0eWxlc1Byb3ZpZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vU3R5bGVzUHJvdmlkZXInOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBleGFjdFByb3AgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IFRoZW1lQ29udGV4dCBmcm9tICcuLi91c2VUaGVtZS9UaGVtZUNvbnRleHQnO1xuaW1wb3J0IHVzZVRoZW1lIGZyb20gJy4uL3VzZVRoZW1lJztcbmltcG9ydCBuZXN0ZWQgZnJvbSAnLi9uZXN0ZWQnOyAvLyBUbyBzdXBwb3J0IGNvbXBvc2l0aW9uIG9mIHRoZW1lLlxuXG5mdW5jdGlvbiBtZXJnZU91dGVyTG9jYWxUaGVtZShvdXRlclRoZW1lLCBsb2NhbFRoZW1lKSB7XG4gIGlmICh0eXBlb2YgbG9jYWxUaGVtZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBtZXJnZWRUaGVtZSA9IGxvY2FsVGhlbWUob3V0ZXJUaGVtZSk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKCFtZXJnZWRUaGVtZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFsnTWF0ZXJpYWwtVUk6IFlvdSBzaG91bGQgcmV0dXJuIGFuIG9iamVjdCBmcm9tIHlvdXIgdGhlbWUgZnVuY3Rpb24sIGkuZS4nLCAnPFRoZW1lUHJvdmlkZXIgdGhlbWU9eygpID0+ICh7fSl9IC8+J10uam9pbignXFxuJykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXJnZWRUaGVtZTtcbiAgfVxuXG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgb3V0ZXJUaGVtZSwgbG9jYWxUaGVtZSk7XG59XG4vKipcbiAqIFRoaXMgY29tcG9uZW50IHRha2VzIGEgYHRoZW1lYCBwcm9wLlxuICogSXQgbWFrZXMgdGhlIGB0aGVtZWAgYXZhaWxhYmxlIGRvd24gdGhlIFJlYWN0IHRyZWUgdGhhbmtzIHRvIFJlYWN0IGNvbnRleHQuXG4gKiBUaGlzIGNvbXBvbmVudCBzaG91bGQgcHJlZmVyYWJseSBiZSB1c2VkIGF0ICoqdGhlIHJvb3Qgb2YgeW91ciBjb21wb25lbnQgdHJlZSoqLlxuICovXG5cblxuZnVuY3Rpb24gVGhlbWVQcm92aWRlcihwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGxvY2FsVGhlbWUgPSBwcm9wcy50aGVtZTtcbiAgdmFyIG91dGVyVGhlbWUgPSB1c2VUaGVtZSgpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKG91dGVyVGhlbWUgPT09IG51bGwgJiYgdHlwZW9mIGxvY2FsVGhlbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoWydNYXRlcmlhbC1VSTogWW91IGFyZSBwcm92aWRpbmcgYSB0aGVtZSBmdW5jdGlvbiBwcm9wIHRvIHRoZSBUaGVtZVByb3ZpZGVyIGNvbXBvbmVudDonLCAnPFRoZW1lUHJvdmlkZXIgdGhlbWU9e291dGVyVGhlbWUgPT4gb3V0ZXJUaGVtZX0gLz4nLCAnJywgJ0hvd2V2ZXIsIG5vIG91dGVyIHRoZW1lIGlzIHByZXNlbnQuJywgJ01ha2Ugc3VyZSBhIHRoZW1lIGlzIGFscmVhZHkgaW5qZWN0ZWQgaGlnaGVyIGluIHRoZSBSZWFjdCB0cmVlICcgKyAnb3IgcHJvdmlkZSBhIHRoZW1lIG9iamVjdC4nXS5qb2luKCdcXG4nKSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHRoZW1lID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG91dHB1dCA9IG91dGVyVGhlbWUgPT09IG51bGwgPyBsb2NhbFRoZW1lIDogbWVyZ2VPdXRlckxvY2FsVGhlbWUob3V0ZXJUaGVtZSwgbG9jYWxUaGVtZSk7XG5cbiAgICBpZiAob3V0cHV0ICE9IG51bGwpIHtcbiAgICAgIG91dHB1dFtuZXN0ZWRdID0gb3V0ZXJUaGVtZSAhPT0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0cHV0O1xuICB9LCBbbG9jYWxUaGVtZSwgb3V0ZXJUaGVtZV0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVGhlbWVDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IHRoZW1lXG4gIH0sIGNoaWxkcmVuKTtcbn1cblxucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVGhlbWVQcm92aWRlci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBZb3VyIGNvbXBvbmVudCB0cmVlLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIEEgdGhlbWUgb2JqZWN0LiBZb3UgY2FuIHByb3ZpZGUgYSBmdW5jdGlvbiB0byBleHRlbmQgdGhlIG91dGVyIHRoZW1lLlxuICAgKi9cbiAgdGhlbWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5mdW5jXSkuaXNSZXF1aXJlZFxufSA6IHZvaWQgMDtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVGhlbWVQcm92aWRlci5wcm9wVHlwZXMgPSBleGFjdFByb3AoVGhlbWVQcm92aWRlci5wcm9wVHlwZXMpIDogdm9pZCAwO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZVByb3ZpZGVyOyIsInZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG5leHBvcnQgZGVmYXVsdCBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdtdWkubmVzdGVkJykgOiAnX19USEVNRV9ORVNURURfXyc7IiwiaW1wb3J0IG5lc3RlZCBmcm9tICcuLi9UaGVtZVByb3ZpZGVyL25lc3RlZCc7XG4vKipcbiAqIFRoaXMgaXMgdGhlIGxpc3Qgb2YgdGhlIHN0eWxlIHJ1bGUgbmFtZSB3ZSB1c2UgYXMgZHJvcCBpbiByZXBsYWNlbWVudCBmb3IgdGhlIGJ1aWx0LWluXG4gKiBwc2V1ZG8gY2xhc3NlcyAoOmNoZWNrZWQsIDpkaXNhYmxlZCwgOmZvY3VzZWQsIGV0Yy4pLlxuICpcbiAqIFdoeSBkbyB0aGV5IGV4aXN0IGluIHRoZSBmaXJzdCBwbGFjZT9cbiAqIFRoZXNlIGNsYXNzZXMgYXJlIHVzZWQgYXQgYSBzcGVjaWZpY2l0eSBvZiAyLlxuICogSXQgYWxsb3dzIHRoZW0gdG8gb3ZlcnJpZGUgcHJldmlvdXNseSBkZWZpbmllZCBzdHlsZXMgYXMgd2VsbCBhc1xuICogYmVpbmcgdW50b3VjaGVkIGJ5IHNpbXBsZSB1c2VyIG92ZXJyaWRlcy5cbiAqL1xuXG52YXIgcHNldWRvQ2xhc3NlcyA9IFsnY2hlY2tlZCcsICdkaXNhYmxlZCcsICdlcnJvcicsICdmb2N1c2VkJywgJ2ZvY3VzVmlzaWJsZScsICdyZXF1aXJlZCcsICdleHBhbmRlZCcsICdzZWxlY3RlZCddOyAvLyBSZXR1cm5zIGEgZnVuY3Rpb24gd2hpY2ggZ2VuZXJhdGVzIHVuaXF1ZSBjbGFzcyBuYW1lcyBiYXNlZCBvbiBjb3VudGVycy5cbi8vIFdoZW4gbmV3IGdlbmVyYXRvciBmdW5jdGlvbiBpcyBjcmVhdGVkLCBydWxlIGNvdW50ZXIgaXMgcmVzZXQuXG4vLyBXZSBuZWVkIHRvIHJlc2V0IHRoZSBydWxlIGNvdW50ZXIgZm9yIFNTUiBmb3IgZWFjaCByZXF1ZXN0LlxuLy9cbi8vIEl0J3MgaW5zcGlyZWQgYnlcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9jc3NpbmpzL2pzcy9ibG9iLzRlNmEwNWRkM2Y3YjY1NzJmZGQzYWIyMTY4NjFkOWU0NDZjMjAzMzEvc3JjL3V0aWxzL2NyZWF0ZUdlbmVyYXRlQ2xhc3NOYW1lLmpzXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUdlbmVyYXRlQ2xhc3NOYW1lKCkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gIHZhciBfb3B0aW9ucyRkaXNhYmxlR2xvYmEgPSBvcHRpb25zLmRpc2FibGVHbG9iYWwsXG4gICAgICBkaXNhYmxlR2xvYmFsID0gX29wdGlvbnMkZGlzYWJsZUdsb2JhID09PSB2b2lkIDAgPyBmYWxzZSA6IF9vcHRpb25zJGRpc2FibGVHbG9iYSxcbiAgICAgIF9vcHRpb25zJHByb2R1Y3Rpb25QciA9IG9wdGlvbnMucHJvZHVjdGlvblByZWZpeCxcbiAgICAgIHByb2R1Y3Rpb25QcmVmaXggPSBfb3B0aW9ucyRwcm9kdWN0aW9uUHIgPT09IHZvaWQgMCA/ICdqc3MnIDogX29wdGlvbnMkcHJvZHVjdGlvblByLFxuICAgICAgX29wdGlvbnMkc2VlZCA9IG9wdGlvbnMuc2VlZCxcbiAgICAgIHNlZWQgPSBfb3B0aW9ucyRzZWVkID09PSB2b2lkIDAgPyAnJyA6IF9vcHRpb25zJHNlZWQ7XG4gIHZhciBzZWVkUHJlZml4ID0gc2VlZCA9PT0gJycgPyAnJyA6IFwiXCIuY29uY2F0KHNlZWQsIFwiLVwiKTtcbiAgdmFyIHJ1bGVDb3VudGVyID0gMDtcblxuICB2YXIgZ2V0TmV4dENvdW50ZXJJZCA9IGZ1bmN0aW9uIGdldE5leHRDb3VudGVySWQoKSB7XG4gICAgcnVsZUNvdW50ZXIgKz0gMTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAocnVsZUNvdW50ZXIgPj0gMWUxMCkge1xuICAgICAgICBjb25zb2xlLndhcm4oWydNYXRlcmlhbC1VSTogWW91IG1pZ2h0IGhhdmUgYSBtZW1vcnkgbGVhay4nLCAnVGhlIHJ1bGVDb3VudGVyIGlzIG5vdCBzdXBwb3NlZCB0byBncm93IHRoYXQgbXVjaC4nXS5qb2luKCcnKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVDb3VudGVyO1xuICB9O1xuXG4gIHJldHVybiBmdW5jdGlvbiAocnVsZSwgc3R5bGVTaGVldCkge1xuICAgIHZhciBuYW1lID0gc3R5bGVTaGVldC5vcHRpb25zLm5hbWU7IC8vIElzIGEgZ2xvYmFsIHN0YXRpYyBNVUkgc3R5bGU/XG5cbiAgICBpZiAobmFtZSAmJiBuYW1lLmluZGV4T2YoJ011aScpID09PSAwICYmICFzdHlsZVNoZWV0Lm9wdGlvbnMubGluayAmJiAhZGlzYWJsZUdsb2JhbCkge1xuICAgICAgLy8gV2UgY2FuIHVzZSBhIHNob3J0aGFuZCBjbGFzcyBuYW1lLCB3ZSBuZXZlciB1c2UgdGhlIGtleXMgdG8gc3R5bGUgdGhlIGNvbXBvbmVudHMuXG4gICAgICBpZiAocHNldWRvQ2xhc3Nlcy5pbmRleE9mKHJ1bGUua2V5KSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIFwiTXVpLVwiLmNvbmNhdChydWxlLmtleSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBwcmVmaXggPSBcIlwiLmNvbmNhdChzZWVkUHJlZml4KS5jb25jYXQobmFtZSwgXCItXCIpLmNvbmNhdChydWxlLmtleSk7XG5cbiAgICAgIGlmICghc3R5bGVTaGVldC5vcHRpb25zLnRoZW1lW25lc3RlZF0gfHwgc2VlZCAhPT0gJycpIHtcbiAgICAgICAgcmV0dXJuIHByZWZpeDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHByZWZpeCwgXCItXCIpLmNvbmNhdChnZXROZXh0Q291bnRlcklkKCkpO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm4gXCJcIi5jb25jYXQoc2VlZFByZWZpeCkuY29uY2F0KHByb2R1Y3Rpb25QcmVmaXgpLmNvbmNhdChnZXROZXh0Q291bnRlcklkKCkpO1xuICAgIH1cblxuICAgIHZhciBzdWZmaXggPSBcIlwiLmNvbmNhdChydWxlLmtleSwgXCItXCIpLmNvbmNhdChnZXROZXh0Q291bnRlcklkKCkpOyAvLyBIZWxwIHdpdGggZGVidWdnYWJpbGl0eS5cblxuICAgIGlmIChzdHlsZVNoZWV0Lm9wdGlvbnMuY2xhc3NOYW1lUHJlZml4KSB7XG4gICAgICByZXR1cm4gXCJcIi5jb25jYXQoc2VlZFByZWZpeCkuY29uY2F0KHN0eWxlU2hlZXQub3B0aW9ucy5jbGFzc05hbWVQcmVmaXgsIFwiLVwiKS5jb25jYXQoc3VmZml4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gXCJcIi5jb25jYXQoc2VlZFByZWZpeCkuY29uY2F0KHN1ZmZpeCk7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU3R5bGVzKHN0eWxlcykge1xuICByZXR1cm4gc3R5bGVzO1xufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IHsgZGVlcG1lcmdlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCBub29wVGhlbWUgZnJvbSAnLi9ub29wVGhlbWUnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0U3R5bGVzQ3JlYXRvcihzdHlsZXNPckNyZWF0b3IpIHtcbiAgdmFyIHRoZW1pbmdFbmFibGVkID0gdHlwZW9mIHN0eWxlc09yQ3JlYXRvciA9PT0gJ2Z1bmN0aW9uJztcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChfdHlwZW9mKHN0eWxlc09yQ3JlYXRvcikgIT09ICdvYmplY3QnICYmICF0aGVtaW5nRW5hYmxlZCkge1xuICAgICAgY29uc29sZS5lcnJvcihbJ01hdGVyaWFsLVVJOiBUaGUgYHN0eWxlc2AgYXJndW1lbnQgcHJvdmlkZWQgaXMgaW52YWxpZC4nLCAnWW91IG5lZWQgdG8gcHJvdmlkZSBhIGZ1bmN0aW9uIGdlbmVyYXRpbmcgdGhlIHN0eWxlcyBvciBhIHN0eWxlcyBvYmplY3QuJ10uam9pbignXFxuJykpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUodGhlbWUsIG5hbWUpIHtcbiAgICAgIHZhciBzdHlsZXM7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHN0eWxlcyA9IHRoZW1pbmdFbmFibGVkID8gc3R5bGVzT3JDcmVhdG9yKHRoZW1lKSA6IHN0eWxlc09yQ3JlYXRvcjtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGlmICh0aGVtaW5nRW5hYmxlZCA9PT0gdHJ1ZSAmJiB0aGVtZSA9PT0gbm9vcFRoZW1lKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiBwcmVwZW5kIGVycm9yIG1lc3NhZ2UvbmFtZSBpbnN0ZWFkXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFsnTWF0ZXJpYWwtVUk6IFRoZSBgc3R5bGVzYCBhcmd1bWVudCBwcm92aWRlZCBpcyBpbnZhbGlkLicsICdZb3UgYXJlIHByb3ZpZGluZyBhIGZ1bmN0aW9uIHdpdGhvdXQgYSB0aGVtZSBpbiB0aGUgY29udGV4dC4nLCAnT25lIG9mIHRoZSBwYXJlbnQgZWxlbWVudHMgbmVlZHMgdG8gdXNlIGEgVGhlbWVQcm92aWRlci4nXS5qb2luKCdcXG4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW5hbWUgfHwgIXRoZW1lLm92ZXJyaWRlcyB8fCAhdGhlbWUub3ZlcnJpZGVzW25hbWVdKSB7XG4gICAgICAgIHJldHVybiBzdHlsZXM7XG4gICAgICB9XG5cbiAgICAgIHZhciBvdmVycmlkZXMgPSB0aGVtZS5vdmVycmlkZXNbbmFtZV07XG5cbiAgICAgIHZhciBzdHlsZXNXaXRoT3ZlcnJpZGVzID0gX2V4dGVuZHMoe30sIHN0eWxlcyk7XG5cbiAgICAgIE9iamVjdC5rZXlzKG92ZXJyaWRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgaWYgKCFzdHlsZXNXaXRoT3ZlcnJpZGVzW2tleV0pIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihbJ01hdGVyaWFsLVVJOiBZb3UgYXJlIHRyeWluZyB0byBvdmVycmlkZSBhIHN0eWxlIHRoYXQgZG9lcyBub3QgZXhpc3QuJywgXCJGaXggdGhlIGBcIi5jb25jYXQoa2V5LCBcImAga2V5IG9mIGB0aGVtZS5vdmVycmlkZXMuXCIpLmNvbmNhdChuYW1lLCBcImAuXCIpXS5qb2luKCdcXG4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc3R5bGVzV2l0aE92ZXJyaWRlc1trZXldID0gZGVlcG1lcmdlKHN0eWxlc1dpdGhPdmVycmlkZXNba2V5XSwgb3ZlcnJpZGVzW2tleV0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gc3R5bGVzV2l0aE92ZXJyaWRlcztcbiAgICB9LFxuICAgIG9wdGlvbnM6IHt9XG4gIH07XG59IiwiLy8gV2UgdXNlIHRoZSBzYW1lIGVtcHR5IG9iamVjdCB0byByZWYgY291bnQgdGhlIHN0eWxlcyB0aGF0IGRvbid0IG5lZWQgYSB0aGVtZSBvYmplY3QuXG52YXIgbm9vcFRoZW1lID0ge307XG5leHBvcnQgZGVmYXVsdCBub29wVGhlbWU7IiwiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRoZW1lUHJvcHMocGFyYW1zKSB7XG4gIHZhciB0aGVtZSA9IHBhcmFtcy50aGVtZSxcbiAgICAgIG5hbWUgPSBwYXJhbXMubmFtZSxcbiAgICAgIHByb3BzID0gcGFyYW1zLnByb3BzO1xuXG4gIGlmICghdGhlbWUgfHwgIXRoZW1lLnByb3BzIHx8ICF0aGVtZS5wcm9wc1tuYW1lXSkge1xuICAgIHJldHVybiBwcm9wcztcbiAgfSAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHMsIGNvZGUgYm9ycm93IGZyb20gUmVhY3Qgc291cmNlLlxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi8xNWE4ZjAzMTgzOGE1NTNlNDFjMGI2NmViMWJjZjFkYTg0NDgxMDRkL3BhY2thZ2VzL3JlYWN0L3NyYy9SZWFjdEVsZW1lbnQuanMjTDIyMVxuXG5cbiAgdmFyIGRlZmF1bHRQcm9wcyA9IHRoZW1lLnByb3BzW25hbWVdO1xuICB2YXIgcHJvcE5hbWU7XG5cbiAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzO1xufSIsImltcG9ydCBmdW5jdGlvbnMgZnJvbSAnanNzLXBsdWdpbi1ydWxlLXZhbHVlLWZ1bmN0aW9uJztcbmltcG9ydCBnbG9iYWwgZnJvbSAnanNzLXBsdWdpbi1nbG9iYWwnO1xuaW1wb3J0IG5lc3RlZCBmcm9tICdqc3MtcGx1Z2luLW5lc3RlZCc7XG5pbXBvcnQgY2FtZWxDYXNlIGZyb20gJ2pzcy1wbHVnaW4tY2FtZWwtY2FzZSc7XG5pbXBvcnQgZGVmYXVsdFVuaXQgZnJvbSAnanNzLXBsdWdpbi1kZWZhdWx0LXVuaXQnO1xuaW1wb3J0IHZlbmRvclByZWZpeGVyIGZyb20gJ2pzcy1wbHVnaW4tdmVuZG9yLXByZWZpeGVyJztcbmltcG9ydCBwcm9wc1NvcnQgZnJvbSAnanNzLXBsdWdpbi1wcm9wcy1zb3J0JzsgLy8gU3Vic2V0IG9mIGpzcy1wcmVzZXQtZGVmYXVsdCB3aXRoIG9ubHkgdGhlIHBsdWdpbnMgdGhlIE1hdGVyaWFsLVVJIGNvbXBvbmVudHMgYXJlIHVzaW5nLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBqc3NQcmVzZXQoKSB7XG4gIHJldHVybiB7XG4gICAgcGx1Z2luczogW2Z1bmN0aW9ucygpLCBnbG9iYWwoKSwgbmVzdGVkKCksIGNhbWVsQ2FzZSgpLCBkZWZhdWx0VW5pdCgpLCAvLyBEaXNhYmxlIHRoZSB2ZW5kb3IgcHJlZml4ZXIgc2VydmVyLXNpZGUsIGl0IGRvZXMgbm90aGluZy5cbiAgICAvLyBUaGlzIHdheSwgd2UgY2FuIGdldCBhIHBlcmZvcm1hbmNlIGJvb3N0LlxuICAgIC8vIEluIHRoZSBkb2N1bWVudGF0aW9uLCB3ZSBhcmUgdXNpbmcgYGF1dG9wcmVmaXhlcmAgdG8gc29sdmUgdGhpcyBwcm9ibGVtLlxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHZlbmRvclByZWZpeGVyKCksIHByb3BzU29ydCgpXVxuICB9O1xufSIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbi8vIEdsb2JhbCBpbmRleCBjb3VudGVyIHRvIHByZXNlcnZlIHNvdXJjZSBvcmRlci5cbi8vIFdlIGNyZWF0ZSB0aGUgc3R5bGUgc2hlZXQgZHVyaW5nIHRoZSBjcmVhdGlvbiBvZiB0aGUgY29tcG9uZW50LFxuLy8gY2hpbGRyZW4gYXJlIGhhbmRsZWQgYWZ0ZXIgdGhlIHBhcmVudHMsIHNvIHRoZSBvcmRlciBvZiBzdHlsZSBlbGVtZW50cyB3b3VsZCBiZSBwYXJlbnQtPmNoaWxkLlxuLy8gSXQgaXMgYSBwcm9ibGVtIHRob3VnaCB3aGVuIGEgcGFyZW50IHBhc3NlcyBhIGNsYXNzTmFtZVxuLy8gd2hpY2ggbmVlZHMgdG8gb3ZlcnJpZGUgYW55IGNoaWxkJ3Mgc3R5bGVzLlxuLy8gU3R5bGVTaGVldCBvZiB0aGUgY2hpbGQgaGFzIGEgaGlnaGVyIHNwZWNpZmljaXR5LCBiZWNhdXNlIG9mIHRoZSBzb3VyY2Ugb3JkZXIuXG4vLyBTbyBvdXIgc29sdXRpb24gaXMgdG8gcmVuZGVyIHNoZWV0cyB0aGVtIGluIHRoZSByZXZlcnNlIG9yZGVyIGNoaWxkLT5zaGVldCwgc29cbi8vIHRoYXQgcGFyZW50IGhhcyBhIGhpZ2hlciBzcGVjaWZpY2l0eS5cbnZhciBpbmRleENvdW50ZXIgPSAtMWU5O1xuZXhwb3J0IGZ1bmN0aW9uIGluY3JlbWVudCgpIHtcbiAgaW5kZXhDb3VudGVyICs9IDE7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoaW5kZXhDb3VudGVyID49IDApIHtcbiAgICAgIGNvbnNvbGUud2FybihbJ01hdGVyaWFsLVVJOiBZb3UgbWlnaHQgaGF2ZSBhIG1lbW9yeSBsZWFrLicsICdUaGUgaW5kZXhDb3VudGVyIGlzIG5vdCBzdXBwb3NlZCB0byBncm93IHRoYXQgbXVjaC4nXS5qb2luKCdcXG4nKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGluZGV4Q291bnRlcjtcbn0iLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0RHluYW1pY1N0eWxlcyB9IGZyb20gJ2pzcyc7XG5pbXBvcnQgbWVyZ2VDbGFzc2VzIGZyb20gJy4uL21lcmdlQ2xhc3Nlcyc7XG5pbXBvcnQgbXVsdGlLZXlTdG9yZSBmcm9tICcuL211bHRpS2V5U3RvcmUnO1xuaW1wb3J0IHVzZVRoZW1lIGZyb20gJy4uL3VzZVRoZW1lJztcbmltcG9ydCB7IFN0eWxlc0NvbnRleHQgfSBmcm9tICcuLi9TdHlsZXNQcm92aWRlcic7XG5pbXBvcnQgeyBpbmNyZW1lbnQgfSBmcm9tICcuL2luZGV4Q291bnRlcic7XG5pbXBvcnQgZ2V0U3R5bGVzQ3JlYXRvciBmcm9tICcuLi9nZXRTdHlsZXNDcmVhdG9yJztcbmltcG9ydCBub29wVGhlbWUgZnJvbSAnLi4vZ2V0U3R5bGVzQ3JlYXRvci9ub29wVGhlbWUnO1xuXG5mdW5jdGlvbiBnZXRDbGFzc2VzKF9yZWYsIGNsYXNzZXMsIENvbXBvbmVudCkge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgc3R5bGVzT3B0aW9ucyA9IF9yZWYuc3R5bGVzT3B0aW9ucztcblxuICBpZiAoc3R5bGVzT3B0aW9ucy5kaXNhYmxlR2VuZXJhdGlvbikge1xuICAgIHJldHVybiBjbGFzc2VzIHx8IHt9O1xuICB9XG5cbiAgaWYgKCFzdGF0ZS5jYWNoZUNsYXNzZXMpIHtcbiAgICBzdGF0ZS5jYWNoZUNsYXNzZXMgPSB7XG4gICAgICAvLyBDYWNoZSBmb3IgdGhlIGZpbmFsaXplZCBjbGFzc2VzIHZhbHVlLlxuICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAvLyBDYWNoZSBmb3IgdGhlIGxhc3QgdXNlZCBjbGFzc2VzIHByb3AgcG9pbnRlci5cbiAgICAgIGxhc3RQcm9wOiBudWxsLFxuICAgICAgLy8gQ2FjaGUgZm9yIHRoZSBsYXN0IHVzZWQgcmVuZGVyZWQgY2xhc3NlcyBwb2ludGVyLlxuICAgICAgbGFzdEpTUzoge31cbiAgICB9O1xuICB9IC8vIFRyYWNrcyBpZiBlaXRoZXIgdGhlIHJlbmRlcmVkIGNsYXNzZXMgb3IgY2xhc3NlcyBwcm9wIGhhcyBjaGFuZ2VkLFxuICAvLyByZXF1aXJpbmcgdGhlIGdlbmVyYXRpb24gb2YgYSBuZXcgZmluYWxpemVkIGNsYXNzZXMgb2JqZWN0LlxuXG5cbiAgdmFyIGdlbmVyYXRlID0gZmFsc2U7XG5cbiAgaWYgKHN0YXRlLmNsYXNzZXMgIT09IHN0YXRlLmNhY2hlQ2xhc3Nlcy5sYXN0SlNTKSB7XG4gICAgc3RhdGUuY2FjaGVDbGFzc2VzLmxhc3RKU1MgPSBzdGF0ZS5jbGFzc2VzO1xuICAgIGdlbmVyYXRlID0gdHJ1ZTtcbiAgfVxuXG4gIGlmIChjbGFzc2VzICE9PSBzdGF0ZS5jYWNoZUNsYXNzZXMubGFzdFByb3ApIHtcbiAgICBzdGF0ZS5jYWNoZUNsYXNzZXMubGFzdFByb3AgPSBjbGFzc2VzO1xuICAgIGdlbmVyYXRlID0gdHJ1ZTtcbiAgfVxuXG4gIGlmIChnZW5lcmF0ZSkge1xuICAgIHN0YXRlLmNhY2hlQ2xhc3Nlcy52YWx1ZSA9IG1lcmdlQ2xhc3Nlcyh7XG4gICAgICBiYXNlQ2xhc3Nlczogc3RhdGUuY2FjaGVDbGFzc2VzLmxhc3RKU1MsXG4gICAgICBuZXdDbGFzc2VzOiBjbGFzc2VzLFxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZS5jYWNoZUNsYXNzZXMudmFsdWU7XG59XG5cbmZ1bmN0aW9uIGF0dGFjaChfcmVmMiwgcHJvcHMpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGUsXG4gICAgICB0aGVtZSA9IF9yZWYyLnRoZW1lLFxuICAgICAgc3R5bGVzT3B0aW9ucyA9IF9yZWYyLnN0eWxlc09wdGlvbnMsXG4gICAgICBzdHlsZXNDcmVhdG9yID0gX3JlZjIuc3R5bGVzQ3JlYXRvcixcbiAgICAgIG5hbWUgPSBfcmVmMi5uYW1lO1xuXG4gIGlmIChzdHlsZXNPcHRpb25zLmRpc2FibGVHZW5lcmF0aW9uKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHNoZWV0TWFuYWdlciA9IG11bHRpS2V5U3RvcmUuZ2V0KHN0eWxlc09wdGlvbnMuc2hlZXRzTWFuYWdlciwgc3R5bGVzQ3JlYXRvciwgdGhlbWUpO1xuXG4gIGlmICghc2hlZXRNYW5hZ2VyKSB7XG4gICAgc2hlZXRNYW5hZ2VyID0ge1xuICAgICAgcmVmczogMCxcbiAgICAgIHN0YXRpY1NoZWV0OiBudWxsLFxuICAgICAgZHluYW1pY1N0eWxlczogbnVsbFxuICAgIH07XG4gICAgbXVsdGlLZXlTdG9yZS5zZXQoc3R5bGVzT3B0aW9ucy5zaGVldHNNYW5hZ2VyLCBzdHlsZXNDcmVhdG9yLCB0aGVtZSwgc2hlZXRNYW5hZ2VyKTtcbiAgfVxuXG4gIHZhciBvcHRpb25zID0gX2V4dGVuZHMoe30sIHN0eWxlc0NyZWF0b3Iub3B0aW9ucywgc3R5bGVzT3B0aW9ucywge1xuICAgIHRoZW1lOiB0aGVtZSxcbiAgICBmbGlwOiB0eXBlb2Ygc3R5bGVzT3B0aW9ucy5mbGlwID09PSAnYm9vbGVhbicgPyBzdHlsZXNPcHRpb25zLmZsaXAgOiB0aGVtZS5kaXJlY3Rpb24gPT09ICdydGwnXG4gIH0pO1xuXG4gIG9wdGlvbnMuZ2VuZXJhdGVJZCA9IG9wdGlvbnMuc2VydmVyR2VuZXJhdGVDbGFzc05hbWUgfHwgb3B0aW9ucy5nZW5lcmF0ZUNsYXNzTmFtZTtcbiAgdmFyIHNoZWV0c1JlZ2lzdHJ5ID0gc3R5bGVzT3B0aW9ucy5zaGVldHNSZWdpc3RyeTtcblxuICBpZiAoc2hlZXRNYW5hZ2VyLnJlZnMgPT09IDApIHtcbiAgICB2YXIgc3RhdGljU2hlZXQ7XG5cbiAgICBpZiAoc3R5bGVzT3B0aW9ucy5zaGVldHNDYWNoZSkge1xuICAgICAgc3RhdGljU2hlZXQgPSBtdWx0aUtleVN0b3JlLmdldChzdHlsZXNPcHRpb25zLnNoZWV0c0NhY2hlLCBzdHlsZXNDcmVhdG9yLCB0aGVtZSk7XG4gICAgfVxuXG4gICAgdmFyIHN0eWxlcyA9IHN0eWxlc0NyZWF0b3IuY3JlYXRlKHRoZW1lLCBuYW1lKTtcblxuICAgIGlmICghc3RhdGljU2hlZXQpIHtcbiAgICAgIHN0YXRpY1NoZWV0ID0gc3R5bGVzT3B0aW9ucy5qc3MuY3JlYXRlU3R5bGVTaGVldChzdHlsZXMsIF9leHRlbmRzKHtcbiAgICAgICAgbGluazogZmFsc2VcbiAgICAgIH0sIG9wdGlvbnMpKTtcbiAgICAgIHN0YXRpY1NoZWV0LmF0dGFjaCgpO1xuXG4gICAgICBpZiAoc3R5bGVzT3B0aW9ucy5zaGVldHNDYWNoZSkge1xuICAgICAgICBtdWx0aUtleVN0b3JlLnNldChzdHlsZXNPcHRpb25zLnNoZWV0c0NhY2hlLCBzdHlsZXNDcmVhdG9yLCB0aGVtZSwgc3RhdGljU2hlZXQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzaGVldHNSZWdpc3RyeSkge1xuICAgICAgc2hlZXRzUmVnaXN0cnkuYWRkKHN0YXRpY1NoZWV0KTtcbiAgICB9XG5cbiAgICBzaGVldE1hbmFnZXIuc3RhdGljU2hlZXQgPSBzdGF0aWNTaGVldDtcbiAgICBzaGVldE1hbmFnZXIuZHluYW1pY1N0eWxlcyA9IGdldER5bmFtaWNTdHlsZXMoc3R5bGVzKTtcbiAgfVxuXG4gIGlmIChzaGVldE1hbmFnZXIuZHluYW1pY1N0eWxlcykge1xuICAgIHZhciBkeW5hbWljU2hlZXQgPSBzdHlsZXNPcHRpb25zLmpzcy5jcmVhdGVTdHlsZVNoZWV0KHNoZWV0TWFuYWdlci5keW5hbWljU3R5bGVzLCBfZXh0ZW5kcyh7XG4gICAgICBsaW5rOiB0cnVlXG4gICAgfSwgb3B0aW9ucykpO1xuICAgIGR5bmFtaWNTaGVldC51cGRhdGUocHJvcHMpO1xuICAgIGR5bmFtaWNTaGVldC5hdHRhY2goKTtcbiAgICBzdGF0ZS5keW5hbWljU2hlZXQgPSBkeW5hbWljU2hlZXQ7XG4gICAgc3RhdGUuY2xhc3NlcyA9IG1lcmdlQ2xhc3Nlcyh7XG4gICAgICBiYXNlQ2xhc3Nlczogc2hlZXRNYW5hZ2VyLnN0YXRpY1NoZWV0LmNsYXNzZXMsXG4gICAgICBuZXdDbGFzc2VzOiBkeW5hbWljU2hlZXQuY2xhc3Nlc1xuICAgIH0pO1xuXG4gICAgaWYgKHNoZWV0c1JlZ2lzdHJ5KSB7XG4gICAgICBzaGVldHNSZWdpc3RyeS5hZGQoZHluYW1pY1NoZWV0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc3RhdGUuY2xhc3NlcyA9IHNoZWV0TWFuYWdlci5zdGF0aWNTaGVldC5jbGFzc2VzO1xuICB9XG5cbiAgc2hlZXRNYW5hZ2VyLnJlZnMgKz0gMTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlKF9yZWYzLCBwcm9wcykge1xuICB2YXIgc3RhdGUgPSBfcmVmMy5zdGF0ZTtcblxuICBpZiAoc3RhdGUuZHluYW1pY1NoZWV0KSB7XG4gICAgc3RhdGUuZHluYW1pY1NoZWV0LnVwZGF0ZShwcm9wcyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGV0YWNoKF9yZWY0KSB7XG4gIHZhciBzdGF0ZSA9IF9yZWY0LnN0YXRlLFxuICAgICAgdGhlbWUgPSBfcmVmNC50aGVtZSxcbiAgICAgIHN0eWxlc09wdGlvbnMgPSBfcmVmNC5zdHlsZXNPcHRpb25zLFxuICAgICAgc3R5bGVzQ3JlYXRvciA9IF9yZWY0LnN0eWxlc0NyZWF0b3I7XG5cbiAgaWYgKHN0eWxlc09wdGlvbnMuZGlzYWJsZUdlbmVyYXRpb24pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgc2hlZXRNYW5hZ2VyID0gbXVsdGlLZXlTdG9yZS5nZXQoc3R5bGVzT3B0aW9ucy5zaGVldHNNYW5hZ2VyLCBzdHlsZXNDcmVhdG9yLCB0aGVtZSk7XG4gIHNoZWV0TWFuYWdlci5yZWZzIC09IDE7XG4gIHZhciBzaGVldHNSZWdpc3RyeSA9IHN0eWxlc09wdGlvbnMuc2hlZXRzUmVnaXN0cnk7XG5cbiAgaWYgKHNoZWV0TWFuYWdlci5yZWZzID09PSAwKSB7XG4gICAgbXVsdGlLZXlTdG9yZS5kZWxldGUoc3R5bGVzT3B0aW9ucy5zaGVldHNNYW5hZ2VyLCBzdHlsZXNDcmVhdG9yLCB0aGVtZSk7XG4gICAgc3R5bGVzT3B0aW9ucy5qc3MucmVtb3ZlU3R5bGVTaGVldChzaGVldE1hbmFnZXIuc3RhdGljU2hlZXQpO1xuXG4gICAgaWYgKHNoZWV0c1JlZ2lzdHJ5KSB7XG4gICAgICBzaGVldHNSZWdpc3RyeS5yZW1vdmUoc2hlZXRNYW5hZ2VyLnN0YXRpY1NoZWV0KTtcbiAgICB9XG4gIH1cblxuICBpZiAoc3RhdGUuZHluYW1pY1NoZWV0KSB7XG4gICAgc3R5bGVzT3B0aW9ucy5qc3MucmVtb3ZlU3R5bGVTaGVldChzdGF0ZS5keW5hbWljU2hlZXQpO1xuXG4gICAgaWYgKHNoZWV0c1JlZ2lzdHJ5KSB7XG4gICAgICBzaGVldHNSZWdpc3RyeS5yZW1vdmUoc3RhdGUuZHluYW1pY1NoZWV0KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdXNlU3luY2hyb25vdXNFZmZlY3QoZnVuYywgdmFsdWVzKSB7XG4gIHZhciBrZXkgPSBSZWFjdC51c2VSZWYoW10pO1xuICB2YXIgb3V0cHV0OyAvLyBTdG9yZSBcImdlbmVyYXRpb25cIiBrZXkuIEp1c3QgcmV0dXJucyBhIG5ldyBvYmplY3QgZXZlcnkgdGltZVxuXG4gIHZhciBjdXJyZW50S2V5ID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9LCB2YWx1ZXMpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICAvLyBcInRoZSBmaXJzdCByZW5kZXJcIiwgb3IgXCJtZW1vIGRyb3BwZWQgdGhlIHZhbHVlXCJcblxuICBpZiAoa2V5LmN1cnJlbnQgIT09IGN1cnJlbnRLZXkpIHtcbiAgICBrZXkuY3VycmVudCA9IGN1cnJlbnRLZXk7XG4gICAgb3V0cHV0ID0gZnVuYygpO1xuICB9XG5cbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKG91dHB1dCkge1xuICAgICAgICBvdXRwdXQoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBbY3VycmVudEtleV0gLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFrZVN0eWxlcyhzdHlsZXNPckNyZWF0b3IpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gIHZhciBuYW1lID0gb3B0aW9ucy5uYW1lLFxuICAgICAgY2xhc3NOYW1lUHJlZml4T3B0aW9uID0gb3B0aW9ucy5jbGFzc05hbWVQcmVmaXgsXG4gICAgICBDb21wb25lbnQgPSBvcHRpb25zLkNvbXBvbmVudCxcbiAgICAgIF9vcHRpb25zJGRlZmF1bHRUaGVtZSA9IG9wdGlvbnMuZGVmYXVsdFRoZW1lLFxuICAgICAgZGVmYXVsdFRoZW1lID0gX29wdGlvbnMkZGVmYXVsdFRoZW1lID09PSB2b2lkIDAgPyBub29wVGhlbWUgOiBfb3B0aW9ucyRkZWZhdWx0VGhlbWUsXG4gICAgICBzdHlsZXNPcHRpb25zMiA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvcHRpb25zLCBbXCJuYW1lXCIsIFwiY2xhc3NOYW1lUHJlZml4XCIsIFwiQ29tcG9uZW50XCIsIFwiZGVmYXVsdFRoZW1lXCJdKTtcblxuICB2YXIgc3R5bGVzQ3JlYXRvciA9IGdldFN0eWxlc0NyZWF0b3Ioc3R5bGVzT3JDcmVhdG9yKTtcbiAgdmFyIGNsYXNzTmFtZVByZWZpeCA9IG5hbWUgfHwgY2xhc3NOYW1lUHJlZml4T3B0aW9uIHx8ICdtYWtlU3R5bGVzJztcbiAgc3R5bGVzQ3JlYXRvci5vcHRpb25zID0ge1xuICAgIGluZGV4OiBpbmNyZW1lbnQoKSxcbiAgICBuYW1lOiBuYW1lLFxuICAgIG1ldGE6IGNsYXNzTmFtZVByZWZpeCxcbiAgICBjbGFzc05hbWVQcmVmaXg6IGNsYXNzTmFtZVByZWZpeFxuICB9O1xuXG4gIHZhciB1c2VTdHlsZXMgPSBmdW5jdGlvbiB1c2VTdHlsZXMoKSB7XG4gICAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICB2YXIgdGhlbWUgPSB1c2VUaGVtZSgpIHx8IGRlZmF1bHRUaGVtZTtcblxuICAgIHZhciBzdHlsZXNPcHRpb25zID0gX2V4dGVuZHMoe30sIFJlYWN0LnVzZUNvbnRleHQoU3R5bGVzQ29udGV4dCksIHN0eWxlc09wdGlvbnMyKTtcblxuICAgIHZhciBpbnN0YW5jZSA9IFJlYWN0LnVzZVJlZigpO1xuICAgIHZhciBzaG91bGRVcGRhdGUgPSBSZWFjdC51c2VSZWYoKTtcbiAgICB1c2VTeW5jaHJvbm91c0VmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgY3VycmVudCA9IHtcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgc3RhdGU6IHt9LFxuICAgICAgICBzdHlsZXNDcmVhdG9yOiBzdHlsZXNDcmVhdG9yLFxuICAgICAgICBzdHlsZXNPcHRpb25zOiBzdHlsZXNPcHRpb25zLFxuICAgICAgICB0aGVtZTogdGhlbWVcbiAgICAgIH07XG4gICAgICBhdHRhY2goY3VycmVudCwgcHJvcHMpO1xuICAgICAgc2hvdWxkVXBkYXRlLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgIGluc3RhbmNlLmN1cnJlbnQgPSBjdXJyZW50O1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGV0YWNoKGN1cnJlbnQpO1xuICAgICAgfTtcbiAgICB9LCBbdGhlbWUsIHN0eWxlc0NyZWF0b3JdKTtcbiAgICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHNob3VsZFVwZGF0ZS5jdXJyZW50KSB7XG4gICAgICAgIHVwZGF0ZShpbnN0YW5jZS5jdXJyZW50LCBwcm9wcyk7XG4gICAgICB9XG5cbiAgICAgIHNob3VsZFVwZGF0ZS5jdXJyZW50ID0gdHJ1ZTtcbiAgICB9KTtcbiAgICB2YXIgY2xhc3NlcyA9IGdldENsYXNzZXMoaW5zdGFuY2UuY3VycmVudCwgcHJvcHMuY2xhc3NlcywgQ29tcG9uZW50KTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICAgIFJlYWN0LnVzZURlYnVnVmFsdWUoY2xhc3Nlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH07XG5cbiAgcmV0dXJuIHVzZVN0eWxlcztcbn0iLCIvLyBVc2VkIGh0dHBzOi8vZ2l0aHViLmNvbS90aGlua2xvb3AvbXVsdGkta2V5LWNhY2hlIGFzIGluc3BpcmF0aW9uXG52YXIgbXVsdGlLZXlTdG9yZSA9IHtcbiAgc2V0OiBmdW5jdGlvbiBzZXQoY2FjaGUsIGtleTEsIGtleTIsIHZhbHVlKSB7XG4gICAgdmFyIHN1YkNhY2hlID0gY2FjaGUuZ2V0KGtleTEpO1xuXG4gICAgaWYgKCFzdWJDYWNoZSkge1xuICAgICAgc3ViQ2FjaGUgPSBuZXcgTWFwKCk7XG4gICAgICBjYWNoZS5zZXQoa2V5MSwgc3ViQ2FjaGUpO1xuICAgIH1cblxuICAgIHN1YkNhY2hlLnNldChrZXkyLCB2YWx1ZSk7XG4gIH0sXG4gIGdldDogZnVuY3Rpb24gZ2V0KGNhY2hlLCBrZXkxLCBrZXkyKSB7XG4gICAgdmFyIHN1YkNhY2hlID0gY2FjaGUuZ2V0KGtleTEpO1xuICAgIHJldHVybiBzdWJDYWNoZSA/IHN1YkNhY2hlLmdldChrZXkyKSA6IHVuZGVmaW5lZDtcbiAgfSxcbiAgZGVsZXRlOiBmdW5jdGlvbiBfZGVsZXRlKGNhY2hlLCBrZXkxLCBrZXkyKSB7XG4gICAgdmFyIHN1YkNhY2hlID0gY2FjaGUuZ2V0KGtleTEpO1xuICAgIHN1YkNhY2hlLmRlbGV0ZShrZXkyKTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IG11bHRpS2V5U3RvcmU7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgeyBnZXREaXNwbGF5TmFtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZXJnZUNsYXNzZXMoKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgdmFyIGJhc2VDbGFzc2VzID0gb3B0aW9ucy5iYXNlQ2xhc3NlcyxcbiAgICAgIG5ld0NsYXNzZXMgPSBvcHRpb25zLm5ld0NsYXNzZXMsXG4gICAgICBDb21wb25lbnQgPSBvcHRpb25zLkNvbXBvbmVudDtcblxuICBpZiAoIW5ld0NsYXNzZXMpIHtcbiAgICByZXR1cm4gYmFzZUNsYXNzZXM7XG4gIH1cblxuICB2YXIgbmV4dENsYXNzZXMgPSBfZXh0ZW5kcyh7fSwgYmFzZUNsYXNzZXMpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKHR5cGVvZiBuZXdDbGFzc2VzID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc29sZS5lcnJvcihbXCJNYXRlcmlhbC1VSTogVGhlIHZhbHVlIGBcIi5jb25jYXQobmV3Q2xhc3NlcywgXCJgIFwiKSArIFwicHJvdmlkZWQgdG8gdGhlIGNsYXNzZXMgcHJvcCBvZiBcIi5jb25jYXQoZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KSwgXCIgaXMgaW5jb3JyZWN0LlwiKSwgJ1lvdSBtaWdodCB3YW50IHRvIHVzZSB0aGUgY2xhc3NOYW1lIHByb3AgaW5zdGVhZC4nXS5qb2luKCdcXG4nKSk7XG4gICAgICByZXR1cm4gYmFzZUNsYXNzZXM7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMobmV3Q2xhc3NlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICghYmFzZUNsYXNzZXNba2V5XSAmJiBuZXdDbGFzc2VzW2tleV0pIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihbXCJNYXRlcmlhbC1VSTogVGhlIGtleSBgXCIuY29uY2F0KGtleSwgXCJgIFwiKSArIFwicHJvdmlkZWQgdG8gdGhlIGNsYXNzZXMgcHJvcCBpcyBub3QgaW1wbGVtZW50ZWQgaW4gXCIuY29uY2F0KGdldERpc3BsYXlOYW1lKENvbXBvbmVudCksIFwiLlwiKSwgXCJZb3UgY2FuIG9ubHkgb3ZlcnJpZGUgb25lIG9mIHRoZSBmb2xsb3dpbmc6IFwiLmNvbmNhdChPYmplY3Qua2V5cyhiYXNlQ2xhc3Nlcykuam9pbignLCcpLCBcIi5cIildLmpvaW4oJ1xcbicpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5ld0NsYXNzZXNba2V5XSAmJiB0eXBlb2YgbmV3Q2xhc3Nlc1trZXldICE9PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKFtcIk1hdGVyaWFsLVVJOiBUaGUga2V5IGBcIi5jb25jYXQoa2V5LCBcImAgXCIpICsgXCJwcm92aWRlZCB0byB0aGUgY2xhc3NlcyBwcm9wIGlzIG5vdCB2YWxpZCBmb3IgXCIuY29uY2F0KGdldERpc3BsYXlOYW1lKENvbXBvbmVudCksIFwiLlwiKSwgXCJZb3UgbmVlZCB0byBwcm92aWRlIGEgbm9uIGVtcHR5IHN0cmluZyBpbnN0ZWFkIG9mOiBcIi5jb25jYXQobmV3Q2xhc3Nlc1trZXldLCBcIi5cIildLmpvaW4oJ1xcbicpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobmV3Q2xhc3Nlc1trZXldKSB7XG4gICAgICBuZXh0Q2xhc3Nlc1trZXldID0gXCJcIi5jb25jYXQoYmFzZUNsYXNzZXNba2V5XSwgXCIgXCIpLmNvbmNhdChuZXdDbGFzc2VzW2tleV0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBuZXh0Q2xhc3Nlcztcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY2hhaW5Qcm9wVHlwZXMsIGdldERpc3BsYXlOYW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCBob2lzdE5vblJlYWN0U3RhdGljcyBmcm9tICdob2lzdC1ub24tcmVhY3Qtc3RhdGljcyc7XG5pbXBvcnQgbWFrZVN0eWxlcyBmcm9tICcuLi9tYWtlU3R5bGVzJztcblxuZnVuY3Rpb24gb21pdChpbnB1dCwgZmllbGRzKSB7XG4gIHZhciBvdXRwdXQgPSB7fTtcbiAgT2JqZWN0LmtleXMoaW5wdXQpLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICBpZiAoZmllbGRzLmluZGV4T2YocHJvcCkgPT09IC0xKSB7XG4gICAgICBvdXRwdXRbcHJvcF0gPSBpbnB1dFtwcm9wXTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gb3V0cHV0O1xufSAvLyBzdHlsZWQtY29tcG9uZW50cydzIEFQSSByZW1vdmVzIHRoZSBtYXBwaW5nIGJldHdlZW4gY29tcG9uZW50cyBhbmQgc3R5bGVzLlxuLy8gVXNpbmcgY29tcG9uZW50cyBhcyBhIGxvdy1sZXZlbCBzdHlsaW5nIGNvbnN0cnVjdCBjYW4gYmUgc2ltcGxlci5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdHlsZWQoQ29tcG9uZW50KSB7XG4gIHZhciBjb21wb25lbnRDcmVhdG9yID0gZnVuY3Rpb24gY29tcG9uZW50Q3JlYXRvcihzdHlsZSkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgIHZhciBuYW1lID0gb3B0aW9ucy5uYW1lLFxuICAgICAgICBzdHlsZXNPcHRpb25zID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9wdGlvbnMsIFtcIm5hbWVcIl0pO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgQ29tcG9uZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihbJ1lvdSBhcmUgY2FsbGluZyBzdHlsZWQoQ29tcG9uZW50KShzdHlsZSkgd2l0aCBhbiB1bmRlZmluZWQgY29tcG9uZW50LicsICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIGltcG9ydCBpdC4nXS5qb2luKCdcXG4nKSk7XG4gICAgfVxuXG4gICAgdmFyIGNsYXNzTmFtZVByZWZpeCA9IG5hbWU7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgIC8vIFByb3ZpZGUgYSBiZXR0ZXIgRFggb3V0c2lkZSBwcm9kdWN0aW9uLlxuICAgICAgICB2YXIgZGlzcGxheU5hbWUgPSBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpO1xuXG4gICAgICAgIGlmIChkaXNwbGF5TmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY2xhc3NOYW1lUHJlZml4ID0gZGlzcGxheU5hbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgc3R5bGVzT3JDcmVhdG9yID0gdHlwZW9mIHN0eWxlID09PSAnZnVuY3Rpb24nID8gZnVuY3Rpb24gKHRoZW1lKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByb290OiBmdW5jdGlvbiByb290KHByb3BzKSB7XG4gICAgICAgICAgcmV0dXJuIHN0eWxlKF9leHRlbmRzKHtcbiAgICAgICAgICAgIHRoZW1lOiB0aGVtZVxuICAgICAgICAgIH0sIHByb3BzKSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSA6IHtcbiAgICAgIHJvb3Q6IHN0eWxlXG4gICAgfTtcbiAgICB2YXIgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXNPckNyZWF0b3IsIF9leHRlbmRzKHtcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50LFxuICAgICAgbmFtZTogbmFtZSB8fCBDb21wb25lbnQuZGlzcGxheU5hbWUsXG4gICAgICBjbGFzc05hbWVQcmVmaXg6IGNsYXNzTmFtZVByZWZpeFxuICAgIH0sIHN0eWxlc09wdGlvbnMpKTtcbiAgICB2YXIgZmlsdGVyUHJvcHM7XG4gICAgdmFyIHByb3BUeXBlcyA9IHt9O1xuXG4gICAgaWYgKHN0eWxlLmZpbHRlclByb3BzKSB7XG4gICAgICBmaWx0ZXJQcm9wcyA9IHN0eWxlLmZpbHRlclByb3BzO1xuICAgICAgZGVsZXRlIHN0eWxlLmZpbHRlclByb3BzO1xuICAgIH1cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9mb3JiaWQtZm9yZWlnbi1wcm9wLXR5cGVzICovXG5cblxuICAgIGlmIChzdHlsZS5wcm9wVHlwZXMpIHtcbiAgICAgIHByb3BUeXBlcyA9IHN0eWxlLnByb3BUeXBlcztcbiAgICAgIGRlbGV0ZSBzdHlsZS5wcm9wVHlwZXM7XG4gICAgfVxuICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QvZm9yYmlkLWZvcmVpZ24tcHJvcC10eXBlcyAqL1xuXG5cbiAgICB2YXIgU3R5bGVkQ29tcG9uZW50ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gU3R5bGVkQ29tcG9uZW50KHByb3BzLCByZWYpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIGNsYXNzTmFtZVByb3AgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgY2xvbmUgPSBwcm9wcy5jbG9uZSxcbiAgICAgICAgICBDb21wb25lbnRQcm9wID0gcHJvcHMuY29tcG9uZW50LFxuICAgICAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjaGlsZHJlblwiLCBcImNsYXNzTmFtZVwiLCBcImNsb25lXCIsIFwiY29tcG9uZW50XCJdKTtcblxuICAgICAgdmFyIGNsYXNzZXMgPSB1c2VTdHlsZXMocHJvcHMpO1xuICAgICAgdmFyIGNsYXNzTmFtZSA9IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWVQcm9wKTtcbiAgICAgIHZhciBzcHJlYWQgPSBvdGhlcjtcblxuICAgICAgaWYgKGZpbHRlclByb3BzKSB7XG4gICAgICAgIHNwcmVhZCA9IG9taXQoc3ByZWFkLCBmaWx0ZXJQcm9wcyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjbG9uZSkge1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwgX2V4dGVuZHMoe1xuICAgICAgICAgIGNsYXNzTmFtZTogY2xzeChjaGlsZHJlbi5wcm9wcy5jbGFzc05hbWUsIGNsYXNzTmFtZSlcbiAgICAgICAgfSwgc3ByZWFkKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuKF9leHRlbmRzKHtcbiAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVxuICAgICAgICB9LCBzcHJlYWQpKTtcbiAgICAgIH1cblxuICAgICAgdmFyIEZpbmFsQ29tcG9uZW50ID0gQ29tcG9uZW50UHJvcCB8fCBDb21wb25lbnQ7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRmluYWxDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICAgICAgcmVmOiByZWYsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lXG4gICAgICB9LCBzcHJlYWQpLCBjaGlsZHJlbik7XG4gICAgfSk7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gU3R5bGVkQ29tcG9uZW50LnByb3BUeXBlcyA9IF9leHRlbmRzKHtcbiAgICAgIC8qKlxuICAgICAgICogQSByZW5kZXIgZnVuY3Rpb24gb3Igbm9kZS5cbiAgICAgICAqL1xuICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuZnVuY10pLFxuXG4gICAgICAvKipcbiAgICAgICAqIEBpZ25vcmVcbiAgICAgICAqL1xuICAgICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgICAvKipcbiAgICAgICAqIElmIGB0cnVlYCwgdGhlIGNvbXBvbmVudCB3aWxsIHJlY3ljbGUgaXQncyBjaGlsZHJlbiBIVE1MIGVsZW1lbnQuXG4gICAgICAgKiBJdCdzIHVzaW5nIGBSZWFjdC5jbG9uZUVsZW1lbnRgIGludGVybmFsbHkuXG4gICAgICAgKlxuICAgICAgICogVGhpcyBwcm9wIHdpbGwgYmUgZGVwcmVjYXRlZCBhbmQgcmVtb3ZlZCBpbiB2NVxuICAgICAgICovXG4gICAgICBjbG9uZTogY2hhaW5Qcm9wVHlwZXMoUHJvcFR5cGVzLmJvb2wsIGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICBpZiAocHJvcHMuY2xvbmUgJiYgcHJvcHMuY29tcG9uZW50KSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignWW91IGNhbiBub3QgdXNlIHRoZSBjbG9uZSBhbmQgY29tcG9uZW50IHByb3AgYXQgdGhlIHNhbWUgdGltZS4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSksXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgICAgICogRWl0aGVyIGEgc3RyaW5nIHRvIHVzZSBhIEhUTUwgZWxlbWVudCBvciBhIGNvbXBvbmVudC5cbiAgICAgICAqL1xuICAgICAgY29tcG9uZW50OiBQcm9wVHlwZXNcbiAgICAgIC8qIEB0eXBlc2NyaXB0LXRvLXByb3B0eXBlcy1pZ25vcmUgKi9cbiAgICAgIC5lbGVtZW50VHlwZVxuICAgIH0sIHByb3BUeXBlcykgOiB2b2lkIDA7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgU3R5bGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lID0gXCJTdHlsZWQoXCIuY29uY2F0KGNsYXNzTmFtZVByZWZpeCwgXCIpXCIpO1xuICAgIH1cblxuICAgIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKFN0eWxlZENvbXBvbmVudCwgQ29tcG9uZW50KTtcbiAgICByZXR1cm4gU3R5bGVkQ29tcG9uZW50O1xuICB9O1xuXG4gIHJldHVybiBjb21wb25lbnRDcmVhdG9yO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG52YXIgVGhlbWVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgVGhlbWVDb250ZXh0LmRpc3BsYXlOYW1lID0gJ1RoZW1lQ29udGV4dCc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lQ29udGV4dDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRoZW1lQ29udGV4dCBmcm9tICcuL1RoZW1lQ29udGV4dCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VUaGVtZSgpIHtcbiAgdmFyIHRoZW1lID0gUmVhY3QudXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgUmVhY3QudXNlRGVidWdWYWx1ZSh0aGVtZSk7XG4gIH1cblxuICByZXR1cm4gdGhlbWU7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgaG9pc3ROb25SZWFjdFN0YXRpY3MgZnJvbSAnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnO1xuaW1wb3J0IHsgY2hhaW5Qcm9wVHlwZXMsIGdldERpc3BsYXlOYW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCBtYWtlU3R5bGVzIGZyb20gJy4uL21ha2VTdHlsZXMnO1xuaW1wb3J0IGdldFRoZW1lUHJvcHMgZnJvbSAnLi4vZ2V0VGhlbWVQcm9wcyc7XG5pbXBvcnQgdXNlVGhlbWUgZnJvbSAnLi4vdXNlVGhlbWUnOyAvLyBMaW5rIGEgc3R5bGUgc2hlZXQgd2l0aCBhIGNvbXBvbmVudC5cbi8vIEl0IGRvZXMgbm90IG1vZGlmeSB0aGUgY29tcG9uZW50IHBhc3NlZCB0byBpdDtcbi8vIGluc3RlYWQsIGl0IHJldHVybnMgYSBuZXcgY29tcG9uZW50LCB3aXRoIGEgYGNsYXNzZXNgIHByb3BlcnR5LlxuXG52YXIgd2l0aFN0eWxlcyA9IGZ1bmN0aW9uIHdpdGhTdHlsZXMoc3R5bGVzT3JDcmVhdG9yKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChDb21wb25lbnQpIHtcbiAgICB2YXIgZGVmYXVsdFRoZW1lID0gb3B0aW9ucy5kZWZhdWx0VGhlbWUsXG4gICAgICAgIF9vcHRpb25zJHdpdGhUaGVtZSA9IG9wdGlvbnMud2l0aFRoZW1lLFxuICAgICAgICB3aXRoVGhlbWUgPSBfb3B0aW9ucyR3aXRoVGhlbWUgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkd2l0aFRoZW1lLFxuICAgICAgICBuYW1lID0gb3B0aW9ucy5uYW1lLFxuICAgICAgICBzdHlsZXNPcHRpb25zID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9wdGlvbnMsIFtcImRlZmF1bHRUaGVtZVwiLCBcIndpdGhUaGVtZVwiLCBcIm5hbWVcIl0pO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChDb21wb25lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoWydZb3UgYXJlIGNhbGxpbmcgd2l0aFN0eWxlcyhzdHlsZXMpKENvbXBvbmVudCkgd2l0aCBhbiB1bmRlZmluZWQgY29tcG9uZW50LicsICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIGltcG9ydCBpdC4nXS5qb2luKCdcXG4nKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNsYXNzTmFtZVByZWZpeCA9IG5hbWU7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgIC8vIFByb3ZpZGUgYSBiZXR0ZXIgRFggb3V0c2lkZSBwcm9kdWN0aW9uLlxuICAgICAgICB2YXIgZGlzcGxheU5hbWUgPSBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpO1xuXG4gICAgICAgIGlmIChkaXNwbGF5TmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY2xhc3NOYW1lUHJlZml4ID0gZGlzcGxheU5hbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXNPckNyZWF0b3IsIF9leHRlbmRzKHtcbiAgICAgIGRlZmF1bHRUaGVtZTogZGVmYXVsdFRoZW1lLFxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQsXG4gICAgICBuYW1lOiBuYW1lIHx8IENvbXBvbmVudC5kaXNwbGF5TmFtZSxcbiAgICAgIGNsYXNzTmFtZVByZWZpeDogY2xhc3NOYW1lUHJlZml4XG4gICAgfSwgc3R5bGVzT3B0aW9ucykpO1xuICAgIHZhciBXaXRoU3R5bGVzID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gV2l0aFN0eWxlcyhwcm9wcywgcmVmKSB7XG4gICAgICB2YXIgY2xhc3Nlc1Byb3AgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNsYXNzZXNcIiwgXCJpbm5lclJlZlwiXSk7IC8vIFRoZSB3cmFwcGVyIHJlY2VpdmVzIG9ubHkgdXNlciBzdXBwbGllZCBwcm9wcywgd2hpY2ggY291bGQgYmUgYSBzdWJzZXQgb2ZcbiAgICAgIC8vIHRoZSBhY3R1YWwgcHJvcHMgQ29tcG9uZW50IG1pZ2h0IHJlY2VpdmUgZHVlIHRvIG1lcmdpbmcgd2l0aCBkZWZhdWx0UHJvcHMuXG4gICAgICAvLyBTbyBjb3B5aW5nIGl0IGhlcmUgd291bGQgZ2l2ZSB1cyB0aGUgc2FtZSByZXN1bHQgaW4gdGhlIHdyYXBwZXIgYXMgd2VsbC5cblxuXG4gICAgICB2YXIgY2xhc3NlcyA9IHVzZVN0eWxlcyhfZXh0ZW5kcyh7fSwgQ29tcG9uZW50LmRlZmF1bHRQcm9wcywgcHJvcHMpKTtcbiAgICAgIHZhciB0aGVtZTtcbiAgICAgIHZhciBtb3JlID0gb3RoZXI7XG5cbiAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycgfHwgd2l0aFRoZW1lKSB7XG4gICAgICAgIC8vIG5hbWUgYW5kIHdpdGhUaGVtZSBhcmUgaW52YXJpYW50IGluIHRoZSBvdXRlciBzY29wZVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICAgICAgdGhlbWUgPSB1c2VUaGVtZSgpIHx8IGRlZmF1bHRUaGVtZTtcblxuICAgICAgICBpZiAobmFtZSkge1xuICAgICAgICAgIG1vcmUgPSBnZXRUaGVtZVByb3BzKHtcbiAgICAgICAgICAgIHRoZW1lOiB0aGVtZSxcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICBwcm9wczogb3RoZXJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSAvLyBQcm92aWRlIHRoZSB0aGVtZSB0byB0aGUgd3JhcHBlZCBjb21wb25lbnQuXG4gICAgICAgIC8vIFNvIHdlIGRvbid0IGhhdmUgdG8gdXNlIHRoZSBgd2l0aFRoZW1lKClgIEhpZ2hlci1vcmRlciBDb21wb25lbnQuXG5cblxuICAgICAgICBpZiAod2l0aFRoZW1lICYmICFtb3JlLnRoZW1lKSB7XG4gICAgICAgICAgbW9yZS50aGVtZSA9IHRoZW1lO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICAgICAgcmVmOiBpbm5lclJlZiB8fCByZWYsXG4gICAgICAgIGNsYXNzZXM6IGNsYXNzZXNcbiAgICAgIH0sIG1vcmUpKTtcbiAgICB9KTtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBXaXRoU3R5bGVzLnByb3BUeXBlcyA9IHtcbiAgICAgIC8qKlxuICAgICAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgICAgICovXG4gICAgICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gICAgICAvKipcbiAgICAgICAqIFVzZSB0aGF0IHByb3AgdG8gcGFzcyBhIHJlZiB0byB0aGUgZGVjb3JhdGVkIGNvbXBvbmVudC5cbiAgICAgICAqIEBkZXByZWNhdGVkXG4gICAgICAgKi9cbiAgICAgIGlubmVyUmVmOiBjaGFpblByb3BUeXBlcyhQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLm9iamVjdF0pLCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzLmlubmVyUmVmID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsOyAvLyByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICAvLyAgICdNYXRlcmlhbC1VSTogVGhlIGBpbm5lclJlZmAgcHJvcCBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdjUuICcgK1xuICAgICAgICAvLyAgICAgJ1JlZnMgYXJlIG5vdyBhdXRvbWF0aWNhbGx5IGZvcndhcmRlZCB0byB0aGUgaW5uZXIgY29tcG9uZW50LicsXG4gICAgICAgIC8vICk7XG4gICAgICB9KVxuICAgIH0gOiB2b2lkIDA7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgV2l0aFN0eWxlcy5kaXNwbGF5TmFtZSA9IFwiV2l0aFN0eWxlcyhcIi5jb25jYXQoZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KSwgXCIpXCIpO1xuICAgIH1cblxuICAgIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKFdpdGhTdHlsZXMsIENvbXBvbmVudCk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gRXhwb3NlZCBmb3IgdGVzdCBwdXJwb3Nlcy5cbiAgICAgIFdpdGhTdHlsZXMuTmFrZWQgPSBDb21wb25lbnQ7XG4gICAgICBXaXRoU3R5bGVzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgV2l0aFN0eWxlcy51c2VTdHlsZXMgPSB1c2VTdHlsZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIFdpdGhTdHlsZXM7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL3dpdGhUaGVtZSc7XG5leHBvcnQgKiBmcm9tICcuL3dpdGhUaGVtZSc7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgaG9pc3ROb25SZWFjdFN0YXRpY3MgZnJvbSAnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnO1xuaW1wb3J0IHsgY2hhaW5Qcm9wVHlwZXMsIGdldERpc3BsYXlOYW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCB1c2VUaGVtZSBmcm9tICcuLi91c2VUaGVtZSc7XG5leHBvcnQgZnVuY3Rpb24gd2l0aFRoZW1lQ3JlYXRvcigpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICB2YXIgZGVmYXVsdFRoZW1lID0gb3B0aW9ucy5kZWZhdWx0VGhlbWU7XG5cbiAgdmFyIHdpdGhUaGVtZSA9IGZ1bmN0aW9uIHdpdGhUaGVtZShDb21wb25lbnQpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKENvbXBvbmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihbJ1lvdSBhcmUgY2FsbGluZyB3aXRoVGhlbWUoQ29tcG9uZW50KSB3aXRoIGFuIHVuZGVmaW5lZCBjb21wb25lbnQuJywgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gaW1wb3J0IGl0LiddLmpvaW4oJ1xcbicpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgV2l0aFRoZW1lID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gV2l0aFRoZW1lKHByb3BzLCByZWYpIHtcbiAgICAgIHZhciBpbm5lclJlZiA9IHByb3BzLmlubmVyUmVmLFxuICAgICAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJpbm5lclJlZlwiXSk7XG5cbiAgICAgIHZhciB0aGVtZSA9IHVzZVRoZW1lKCkgfHwgZGVmYXVsdFRoZW1lO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgICAgICB0aGVtZTogdGhlbWUsXG4gICAgICAgIHJlZjogaW5uZXJSZWYgfHwgcmVmXG4gICAgICB9LCBvdGhlcikpO1xuICAgIH0pO1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFdpdGhUaGVtZS5wcm9wVHlwZXMgPSB7XG4gICAgICAvKipcbiAgICAgICAqIFVzZSB0aGF0IHByb3AgdG8gcGFzcyBhIHJlZiB0byB0aGUgZGVjb3JhdGVkIGNvbXBvbmVudC5cbiAgICAgICAqIEBkZXByZWNhdGVkXG4gICAgICAgKi9cbiAgICAgIGlubmVyUmVmOiBjaGFpblByb3BUeXBlcyhQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLm9iamVjdF0pLCBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzLmlubmVyUmVmID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ01hdGVyaWFsLVVJOiBUaGUgYGlubmVyUmVmYCBwcm9wIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB2NS4gJyArICdSZWZzIGFyZSBub3cgYXV0b21hdGljYWxseSBmb3J3YXJkZWQgdG8gdGhlIGlubmVyIGNvbXBvbmVudC4nKTtcbiAgICAgIH0pXG4gICAgfSA6IHZvaWQgMDtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBXaXRoVGhlbWUuZGlzcGxheU5hbWUgPSBcIldpdGhUaGVtZShcIi5jb25jYXQoZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KSwgXCIpXCIpO1xuICAgIH1cblxuICAgIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKFdpdGhUaGVtZSwgQ29tcG9uZW50KTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyBFeHBvc2VkIGZvciB0ZXN0IHB1cnBvc2VzLlxuICAgICAgV2l0aFRoZW1lLk5ha2VkID0gQ29tcG9uZW50O1xuICAgIH1cblxuICAgIHJldHVybiBXaXRoVGhlbWU7XG4gIH07XG5cbiAgcmV0dXJuIHdpdGhUaGVtZTtcbn0gLy8gUHJvdmlkZSB0aGUgdGhlbWUgb2JqZWN0IGFzIGEgcHJvcCB0byB0aGUgaW5wdXQgY29tcG9uZW50LlxuLy8gSXQncyBhbiBhbHRlcm5hdGl2ZSBBUEkgdG8gdXNlVGhlbWUoKS5cbi8vIFdlIGVuY291cmFnZSB0aGUgdXNhZ2Ugb2YgdXNlVGhlbWUoKSB3aGVyZSBwb3NzaWJsZS5cblxudmFyIHdpdGhUaGVtZSA9IHdpdGhUaGVtZUNyZWF0b3IoKTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZTsiLCIvKiogQGxpY2Vuc2UgTWF0ZXJpYWwtVUkgdjQuMTEuNFxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBfZXhwb3J0TmFtZXMgPSB7XG4gIGNyZWF0ZUdlbmVyYXRlQ2xhc3NOYW1lOiB0cnVlLFxuICBjcmVhdGVTdHlsZXM6IHRydWUsXG4gIGdldFRoZW1lUHJvcHM6IHRydWUsXG4gIGpzc1ByZXNldDogdHJ1ZSxcbiAgbWFrZVN0eWxlczogdHJ1ZSxcbiAgbWVyZ2VDbGFzc2VzOiB0cnVlLFxuICBTZXJ2ZXJTdHlsZVNoZWV0czogdHJ1ZSxcbiAgc3R5bGVkOiB0cnVlLFxuICBTdHlsZXNQcm92aWRlcjogdHJ1ZSxcbiAgVGhlbWVQcm92aWRlcjogdHJ1ZSxcbiAgdXNlVGhlbWU6IHRydWUsXG4gIHdpdGhTdHlsZXM6IHRydWUsXG4gIHdpdGhUaGVtZTogdHJ1ZVxufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImNyZWF0ZUdlbmVyYXRlQ2xhc3NOYW1lXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9jcmVhdGVHZW5lcmF0ZUNsYXNzTmFtZS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImNyZWF0ZVN0eWxlc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfY3JlYXRlU3R5bGVzLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZ2V0VGhlbWVQcm9wc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfZ2V0VGhlbWVQcm9wcy5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImpzc1ByZXNldFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfanNzUHJlc2V0LmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwibWFrZVN0eWxlc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfbWFrZVN0eWxlcy5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIm1lcmdlQ2xhc3Nlc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfbWVyZ2VDbGFzc2VzLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiU2VydmVyU3R5bGVTaGVldHNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX1NlcnZlclN0eWxlU2hlZXRzLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwic3R5bGVkXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9zdHlsZWQuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJTdHlsZXNQcm92aWRlclwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfU3R5bGVzUHJvdmlkZXIuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJUaGVtZVByb3ZpZGVyXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9UaGVtZVByb3ZpZGVyLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidXNlVGhlbWVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3VzZVRoZW1lLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwid2l0aFN0eWxlc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfd2l0aFN0eWxlcy5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIndpdGhUaGVtZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfd2l0aFRoZW1lLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS91dGlsc1wiKTtcblxudmFyIF9jcmVhdGVHZW5lcmF0ZUNsYXNzTmFtZSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL2NyZWF0ZUdlbmVyYXRlQ2xhc3NOYW1lXCIpKTtcblxuT2JqZWN0LmtleXMoX2NyZWF0ZUdlbmVyYXRlQ2xhc3NOYW1lKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9leHBvcnROYW1lcywga2V5KSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfY3JlYXRlR2VuZXJhdGVDbGFzc05hbWVba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfY3JlYXRlU3R5bGVzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vY3JlYXRlU3R5bGVzXCIpKTtcblxuT2JqZWN0LmtleXMoX2NyZWF0ZVN0eWxlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfZXhwb3J0TmFtZXMsIGtleSkpIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2NyZWF0ZVN0eWxlc1trZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF9nZXRUaGVtZVByb3BzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vZ2V0VGhlbWVQcm9wc1wiKSk7XG5cbk9iamVjdC5rZXlzKF9nZXRUaGVtZVByb3BzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9leHBvcnROYW1lcywga2V5KSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfZ2V0VGhlbWVQcm9wc1trZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF9qc3NQcmVzZXQgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9qc3NQcmVzZXRcIikpO1xuXG5PYmplY3Qua2V5cyhfanNzUHJlc2V0KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9leHBvcnROYW1lcywga2V5KSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfanNzUHJlc2V0W2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX21ha2VTdHlsZXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9tYWtlU3R5bGVzXCIpKTtcblxuT2JqZWN0LmtleXMoX21ha2VTdHlsZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX2V4cG9ydE5hbWVzLCBrZXkpKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9tYWtlU3R5bGVzW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX21lcmdlQ2xhc3NlcyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL21lcmdlQ2xhc3Nlc1wiKSk7XG5cbk9iamVjdC5rZXlzKF9tZXJnZUNsYXNzZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX2V4cG9ydE5hbWVzLCBrZXkpKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9tZXJnZUNsYXNzZXNba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfU2VydmVyU3R5bGVTaGVldHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9TZXJ2ZXJTdHlsZVNoZWV0c1wiKSk7XG5cbk9iamVjdC5rZXlzKF9TZXJ2ZXJTdHlsZVNoZWV0cykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfZXhwb3J0TmFtZXMsIGtleSkpIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX1NlcnZlclN0eWxlU2hlZXRzW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX3N0eWxlZCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL3N0eWxlZFwiKSk7XG5cbk9iamVjdC5rZXlzKF9zdHlsZWQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX2V4cG9ydE5hbWVzLCBrZXkpKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9zdHlsZWRba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfU3R5bGVzUHJvdmlkZXIgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9TdHlsZXNQcm92aWRlclwiKSk7XG5cbk9iamVjdC5rZXlzKF9TdHlsZXNQcm92aWRlcikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfZXhwb3J0TmFtZXMsIGtleSkpIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX1N0eWxlc1Byb3ZpZGVyW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX1RoZW1lUHJvdmlkZXIgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9UaGVtZVByb3ZpZGVyXCIpKTtcblxuT2JqZWN0LmtleXMoX1RoZW1lUHJvdmlkZXIpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX2V4cG9ydE5hbWVzLCBrZXkpKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9UaGVtZVByb3ZpZGVyW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX3VzZVRoZW1lID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vdXNlVGhlbWVcIikpO1xuXG5PYmplY3Qua2V5cyhfdXNlVGhlbWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX2V4cG9ydE5hbWVzLCBrZXkpKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF91c2VUaGVtZVtrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF93aXRoU3R5bGVzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vd2l0aFN0eWxlc1wiKSk7XG5cbk9iamVjdC5rZXlzKF93aXRoU3R5bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9leHBvcnROYW1lcywga2V5KSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfd2l0aFN0eWxlc1trZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF93aXRoVGhlbWUgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi93aXRoVGhlbWVcIikpO1xuXG5PYmplY3Qua2V5cyhfd2l0aFRoZW1lKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9leHBvcnROYW1lcywga2V5KSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfd2l0aFRoZW1lW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXhwb3J0ICovXG5cbi8qIFdhcm5pbmcgaWYgdGhlcmUgYXJlIHNldmVyYWwgaW5zdGFuY2VzIG9mIEBtYXRlcmlhbC11aS9zdHlsZXMgKi9cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgX3V0aWxzLnBvbnlmaWxsR2xvYmFsWydfX0BtYXRlcmlhbC11aS9zdHlsZXMtaW5pdF9fJ10gPSBfdXRpbHMucG9ueWZpbGxHbG9iYWxbJ19fQG1hdGVyaWFsLXVpL3N0eWxlcy1pbml0X18nXSB8fCAwO1xuXG4gIGlmIChfdXRpbHMucG9ueWZpbGxHbG9iYWxbJ19fQG1hdGVyaWFsLXVpL3N0eWxlcy1pbml0X18nXSA9PT0gMSkge1xuICAgIGNvbnNvbGUud2FybihbJ0l0IGxvb2tzIGxpa2UgdGhlcmUgYXJlIHNldmVyYWwgaW5zdGFuY2VzIG9mIGBAbWF0ZXJpYWwtdWkvc3R5bGVzYCBpbml0aWFsaXplZCBpbiB0aGlzIGFwcGxpY2F0aW9uLicsICdUaGlzIG1heSBjYXVzZSB0aGVtZSBwcm9wYWdhdGlvbiBpc3N1ZXMsIGJyb2tlbiBjbGFzcyBuYW1lcywgJyArICdzcGVjaWZpY2l0eSBpc3N1ZXMsIGFuZCBtYWtlcyB5b3VyIGFwcGxpY2F0aW9uIGJpZ2dlciB3aXRob3V0IGEgZ29vZCByZWFzb24uJywgJycsICdTZWUgaHR0cHM6Ly9tYXRlcmlhbC11aS5jb20vci9zdHlsZXMtaW5zdGFuY2Utd2FybmluZyBmb3IgbW9yZSBpbmZvLiddLmpvaW4oJ1xcbicpKTtcbiAgfVxuXG4gIF91dGlscy5wb255ZmlsbEdsb2JhbFsnX19AbWF0ZXJpYWwtdWkvc3R5bGVzLWluaXRfXyddICs9IDE7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBIVE1MRWxlbWVudFR5cGU7XG5cbmZ1bmN0aW9uIEhUTUxFbGVtZW50VHlwZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gIHZhciBzYWZlUHJvcE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgaWYgKHByb3BWYWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAocHJvcFZhbHVlICYmIHByb3BWYWx1ZS5ub2RlVHlwZSAhPT0gMSkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoXCJJbnZhbGlkIFwiLmNvbmNhdChsb2NhdGlvbiwgXCIgYFwiKS5jb25jYXQoc2FmZVByb3BOYW1lLCBcImAgc3VwcGxpZWQgdG8gYFwiKS5jb25jYXQoY29tcG9uZW50TmFtZSwgXCJgLiBcIikgKyBcIkV4cGVjdGVkIGFuIEhUTUxFbGVtZW50LlwiKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gY2hhaW5Qcm9wVHlwZXM7XG5cbmZ1bmN0aW9uIGNoYWluUHJvcFR5cGVzKHByb3BUeXBlMSwgcHJvcFR5cGUyKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gdmFsaWRhdGUoKSB7XG4gICAgcmV0dXJuIHByb3BUeXBlMS5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cykgfHwgcHJvcFR5cGUyLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgfTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmlzUGxhaW5PYmplY3QgPSBpc1BsYWluT2JqZWN0O1xuZXhwb3J0cy5kZWZhdWx0ID0gZGVlcG1lcmdlO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF90eXBlb2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIikpO1xuXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KGl0ZW0pIHtcbiAgcmV0dXJuIGl0ZW0gJiYgKDAsIF90eXBlb2YyLmRlZmF1bHQpKGl0ZW0pID09PSAnb2JqZWN0JyAmJiBpdGVtLmNvbnN0cnVjdG9yID09PSBPYmplY3Q7XG59XG5cbmZ1bmN0aW9uIGRlZXBtZXJnZSh0YXJnZXQsIHNvdXJjZSkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge1xuICAgIGNsb25lOiB0cnVlXG4gIH07XG4gIHZhciBvdXRwdXQgPSBvcHRpb25zLmNsb25lID8gKDAsIF9leHRlbmRzMi5kZWZhdWx0KSh7fSwgdGFyZ2V0KSA6IHRhcmdldDtcblxuICBpZiAoaXNQbGFpbk9iamVjdCh0YXJnZXQpICYmIGlzUGxhaW5PYmplY3Qoc291cmNlKSkge1xuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAvLyBBdm9pZCBwcm90b3R5cGUgcG9sbHV0aW9uXG4gICAgICBpZiAoa2V5ID09PSAnX19wcm90b19fJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChpc1BsYWluT2JqZWN0KHNvdXJjZVtrZXldKSAmJiBrZXkgaW4gdGFyZ2V0KSB7XG4gICAgICAgIG91dHB1dFtrZXldID0gZGVlcG1lcmdlKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSwgb3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvdXRwdXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfcHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbnZhciBfY2hhaW5Qcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2NoYWluUHJvcFR5cGVzXCIpKTtcblxuZnVuY3Rpb24gaXNDbGFzc0NvbXBvbmVudChlbGVtZW50VHlwZSkge1xuICAvLyBlbGVtZW50VHlwZS5wcm90b3R5cGU/LmlzUmVhY3RDb21wb25lbnRcbiAgdmFyIF9lbGVtZW50VHlwZSRwcm90b3R5cCA9IGVsZW1lbnRUeXBlLnByb3RvdHlwZSxcbiAgICAgIHByb3RvdHlwZSA9IF9lbGVtZW50VHlwZSRwcm90b3R5cCA9PT0gdm9pZCAwID8ge30gOiBfZWxlbWVudFR5cGUkcHJvdG90eXA7XG4gIHJldHVybiBCb29sZWFuKHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gYWNjZXB0aW5nUmVmKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICB2YXIgZWxlbWVudCA9IHByb3BzW3Byb3BOYW1lXTtcbiAgdmFyIHNhZmVQcm9wTmFtZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcblxuICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgd2FybmluZ0hpbnQ7XG4gIHZhciBlbGVtZW50VHlwZSA9IGVsZW1lbnQudHlwZTtcbiAgLyoqXG4gICAqIEJsYWNrbGlzdGluZyBpbnN0ZWFkIG9mIHdoaXRlbGlzdGluZ1xuICAgKlxuICAgKiBCbGFja2xpc3Rpbmcgd2lsbCBtaXNzIHNvbWUgY29tcG9uZW50cywgc3VjaCBhcyBSZWFjdC5GcmFnbWVudC4gVGhvc2Ugd2lsbCBhdCBsZWFzdFxuICAgKiB0cmlnZ2VyIGEgd2FybmluZyBpbiBSZWFjdC5cbiAgICogV2UgY2FuJ3Qgd2hpdGVsaXN0IGJlY2F1c2UgdGhlcmUgaXMgbm8gc2FmZSB3YXkgdG8gZGV0ZWN0IFJlYWN0LmZvcndhcmRSZWZcbiAgICogb3IgY2xhc3MgY29tcG9uZW50cy4gXCJTYWZlXCIgbWVhbnMgdGhlcmUncyBubyBwdWJsaWMgQVBJLlxuICAgKlxuICAgKi9cblxuICBpZiAodHlwZW9mIGVsZW1lbnRUeXBlID09PSAnZnVuY3Rpb24nICYmICFpc0NsYXNzQ29tcG9uZW50KGVsZW1lbnRUeXBlKSkge1xuICAgIHdhcm5pbmdIaW50ID0gJ0RpZCB5b3UgYWNjaWRlbnRhbGx5IHVzZSBhIHBsYWluIGZ1bmN0aW9uIGNvbXBvbmVudCBmb3IgYW4gZWxlbWVudCBpbnN0ZWFkPyc7XG4gIH1cblxuICBpZiAod2FybmluZ0hpbnQgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoXCJJbnZhbGlkIFwiLmNvbmNhdChsb2NhdGlvbiwgXCIgYFwiKS5jb25jYXQoc2FmZVByb3BOYW1lLCBcImAgc3VwcGxpZWQgdG8gYFwiKS5jb25jYXQoY29tcG9uZW50TmFtZSwgXCJgLiBcIikgKyBcIkV4cGVjdGVkIGFuIGVsZW1lbnQgdGhhdCBjYW4gaG9sZCBhIHJlZi4gXCIuY29uY2F0KHdhcm5pbmdIaW50LCBcIiBcIikgKyAnRm9yIG1vcmUgaW5mb3JtYXRpb24gc2VlIGh0dHBzOi8vbWF0ZXJpYWwtdWkuY29tL3IvY2F2ZWF0LXdpdGgtcmVmcy1ndWlkZScpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBlbGVtZW50QWNjZXB0aW5nUmVmID0gKDAsIF9jaGFpblByb3BUeXBlcy5kZWZhdWx0KShfcHJvcFR5cGVzLmRlZmF1bHQuZWxlbWVudCwgYWNjZXB0aW5nUmVmKTtcbmVsZW1lbnRBY2NlcHRpbmdSZWYuaXNSZXF1aXJlZCA9ICgwLCBfY2hhaW5Qcm9wVHlwZXMuZGVmYXVsdCkoX3Byb3BUeXBlcy5kZWZhdWx0LmVsZW1lbnQuaXNSZXF1aXJlZCwgYWNjZXB0aW5nUmVmKTtcbnZhciBfZGVmYXVsdCA9IGVsZW1lbnRBY2NlcHRpbmdSZWY7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBQcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbnZhciBfY2hhaW5Qcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2NoYWluUHJvcFR5cGVzXCIpKTtcblxuZnVuY3Rpb24gaXNDbGFzc0NvbXBvbmVudChlbGVtZW50VHlwZSkge1xuICAvLyBlbGVtZW50VHlwZS5wcm90b3R5cGU/LmlzUmVhY3RDb21wb25lbnRcbiAgdmFyIF9lbGVtZW50VHlwZSRwcm90b3R5cCA9IGVsZW1lbnRUeXBlLnByb3RvdHlwZSxcbiAgICAgIHByb3RvdHlwZSA9IF9lbGVtZW50VHlwZSRwcm90b3R5cCA9PT0gdm9pZCAwID8ge30gOiBfZWxlbWVudFR5cGUkcHJvdG90eXA7XG4gIHJldHVybiBCb29sZWFuKHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gZWxlbWVudFR5cGVBY2NlcHRpbmdSZWYocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gIHZhciBzYWZlUHJvcE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgaWYgKHByb3BWYWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgd2FybmluZ0hpbnQ7XG4gIC8qKlxuICAgKiBCbGFja2xpc3RpbmcgaW5zdGVhZCBvZiB3aGl0ZWxpc3RpbmdcbiAgICpcbiAgICogQmxhY2tsaXN0aW5nIHdpbGwgbWlzcyBzb21lIGNvbXBvbmVudHMsIHN1Y2ggYXMgUmVhY3QuRnJhZ21lbnQuIFRob3NlIHdpbGwgYXQgbGVhc3RcbiAgICogdHJpZ2dlciBhIHdhcm5pbmcgaW4gUmVhY3QuXG4gICAqIFdlIGNhbid0IHdoaXRlbGlzdCBiZWNhdXNlIHRoZXJlIGlzIG5vIHNhZmUgd2F5IHRvIGRldGVjdCBSZWFjdC5mb3J3YXJkUmVmXG4gICAqIG9yIGNsYXNzIGNvbXBvbmVudHMuIFwiU2FmZVwiIG1lYW5zIHRoZXJlJ3Mgbm8gcHVibGljIEFQSS5cbiAgICpcbiAgICovXG5cbiAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICdmdW5jdGlvbicgJiYgIWlzQ2xhc3NDb21wb25lbnQocHJvcFZhbHVlKSkge1xuICAgIHdhcm5pbmdIaW50ID0gJ0RpZCB5b3UgYWNjaWRlbnRhbGx5IHByb3ZpZGUgYSBwbGFpbiBmdW5jdGlvbiBjb21wb25lbnQgaW5zdGVhZD8nO1xuICB9XG5cbiAgaWYgKHdhcm5pbmdIaW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKFwiSW52YWxpZCBcIi5jb25jYXQobG9jYXRpb24sIFwiIGBcIikuY29uY2F0KHNhZmVQcm9wTmFtZSwgXCJgIHN1cHBsaWVkIHRvIGBcIikuY29uY2F0KGNvbXBvbmVudE5hbWUsIFwiYC4gXCIpICsgXCJFeHBlY3RlZCBhbiBlbGVtZW50IHR5cGUgdGhhdCBjYW4gaG9sZCBhIHJlZi4gXCIuY29uY2F0KHdhcm5pbmdIaW50LCBcIiBcIikgKyAnRm9yIG1vcmUgaW5mb3JtYXRpb24gc2VlIGh0dHBzOi8vbWF0ZXJpYWwtdWkuY29tL3IvY2F2ZWF0LXdpdGgtcmVmcy1ndWlkZScpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY2hhaW5Qcm9wVHlwZXMuZGVmYXVsdCkoUHJvcFR5cGVzLmVsZW1lbnRUeXBlLCBlbGVtZW50VHlwZUFjY2VwdGluZ1JlZik7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGV4YWN0UHJvcDtcbmV4cG9ydHMuc3BlY2lhbFByb3BlcnR5ID0gdm9pZCAwO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIikpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxuLy8gVGhpcyBtb2R1bGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2FpcmJuYi9wcm9wLXR5cGVzLWV4YWN0IHJlcG9zaXRvcnkuXG4vLyBIb3dldmVyLCBpbiBvcmRlciB0byByZWR1Y2UgdGhlIG51bWJlciBvZiBkZXBlbmRlbmNpZXMgYW5kIHRvIHJlbW92ZSBzb21lIGV4dHJhIHNhZmUgY2hlY2tzXG4vLyB0aGUgbW9kdWxlIHdhcyBmb3JrZWQuXG4vLyBPbmx5IGV4cG9ydGVkIGZvciB0ZXN0IHB1cnBvc2VzLlxudmFyIHNwZWNpYWxQcm9wZXJ0eSA9IFwiZXhhY3QtcHJvcDogXFx1MjAwQlwiO1xuZXhwb3J0cy5zcGVjaWFsUHJvcGVydHkgPSBzcGVjaWFsUHJvcGVydHk7XG5cbmZ1bmN0aW9uIGV4YWN0UHJvcChwcm9wVHlwZXMpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICByZXR1cm4gcHJvcFR5cGVzO1xuICB9XG5cbiAgcmV0dXJuICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe30sIHByb3BUeXBlcywgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkoe30sIHNwZWNpYWxQcm9wZXJ0eSwgZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIHVuc3VwcG9ydGVkUHJvcHMgPSBPYmplY3Qua2V5cyhwcm9wcykuZmlsdGVyKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICByZXR1cm4gIXByb3BUeXBlcy5oYXNPd25Qcm9wZXJ0eShwcm9wKTtcbiAgICB9KTtcblxuICAgIGlmICh1bnN1cHBvcnRlZFByb3BzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXCJUaGUgZm9sbG93aW5nIHByb3BzIGFyZSBub3Qgc3VwcG9ydGVkOiBcIi5jb25jYXQodW5zdXBwb3J0ZWRQcm9wcy5tYXAoZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgcmV0dXJuIFwiYFwiLmNvbmNhdChwcm9wLCBcImBcIik7XG4gICAgICB9KS5qb2luKCcsICcpLCBcIi4gUGxlYXNlIHJlbW92ZSB0aGVtLlwiKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH0pKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGZvcm1hdE11aUVycm9yTWVzc2FnZTtcblxuLyoqXG4gKiBXQVJOSU5HOiBEb24ndCBpbXBvcnQgdGhpcyBkaXJlY3RseS5cbiAqIFVzZSBgTXVpRXJyb3JgIGZyb20gYEBtYXRlcmlhbC11aS91dGlscy9tYWNyb3MvTXVpRXJyb3IubWFjcm9gIGluc3RlYWQuXG4gKiBAcGFyYW0ge251bWJlcn0gY29kZVxuICovXG5mdW5jdGlvbiBmb3JtYXRNdWlFcnJvck1lc3NhZ2UoY29kZSkge1xuICAvLyBBcHBseSBiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXRlbXBsYXRlLWxpdGVyYWxzIGluIGxvb3NlIG1vZGVcbiAgLy8gbG9vc2UgbW9kZSBpcyBzYWZlIGlmZiB3ZSdyZSBjb25jYXRlbmF0aW5nIHByaW1pdGl2ZXNcbiAgLy8gc2VlIGh0dHBzOi8vYmFiZWxqcy5pby9kb2NzL2VuL2JhYmVsLXBsdWdpbi10cmFuc2Zvcm0tdGVtcGxhdGUtbGl0ZXJhbHMjbG9vc2VcblxuICAvKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItdGVtcGxhdGUgKi9cbiAgdmFyIHVybCA9ICdodHRwczovL21hdGVyaWFsLXVpLmNvbS9wcm9kdWN0aW9uLWVycm9yLz9jb2RlPScgKyBjb2RlO1xuXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgLy8gcmVzdCBwYXJhbXMgb3Zlci10cmFuc3BpbGUgZm9yIHRoaXMgY2FzZVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItcmVzdC1wYXJhbXNcbiAgICB1cmwgKz0gJyZhcmdzW109JyArIGVuY29kZVVSSUNvbXBvbmVudChhcmd1bWVudHNbaV0pO1xuICB9XG5cbiAgcmV0dXJuICdNaW5pZmllZCBNYXRlcmlhbC1VSSBlcnJvciAjJyArIGNvZGUgKyAnOyB2aXNpdCAnICsgdXJsICsgJyBmb3IgdGhlIGZ1bGwgbWVzc2FnZS4nO1xuICAvKiBlc2xpbnQtZW5hYmxlIHByZWZlci10ZW1wbGF0ZSAqL1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0RnVuY3Rpb25OYW1lID0gZ2V0RnVuY3Rpb25OYW1lO1xuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0RGlzcGxheU5hbWU7XG5cbnZhciBfdHlwZW9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpKTtcblxudmFyIF9yZWFjdElzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpO1xuXG4vLyBTaW1wbGlmaWVkIHBvbHlmaWxsIGZvciBJRSAxMSBzdXBwb3J0XG4vLyBodHRwczovL2dpdGh1Yi5jb20vSmFtZXNNR3JlZW5lL0Z1bmN0aW9uLm5hbWUvYmxvYi81OGIzMTRkNGE5ODMxMTBjMzY4MmYxMjI4Zjg0NWQzOWNjY2ExODE3L0Z1bmN0aW9uLm5hbWUuanMjTDNcbnZhciBmbk5hbWVNYXRjaFJlZ2V4ID0gL15cXHMqZnVuY3Rpb24oPzpcXHN8XFxzKlxcL1xcKi4qXFwqXFwvXFxzKikrKFteKFxccy9dKilcXHMqLztcblxuZnVuY3Rpb24gZ2V0RnVuY3Rpb25OYW1lKGZuKSB7XG4gIHZhciBtYXRjaCA9IFwiXCIuY29uY2F0KGZuKS5tYXRjaChmbk5hbWVNYXRjaFJlZ2V4KTtcbiAgdmFyIG5hbWUgPSBtYXRjaCAmJiBtYXRjaFsxXTtcbiAgcmV0dXJuIG5hbWUgfHwgJyc7XG59XG4vKipcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IENvbXBvbmVudFxuICogQHBhcmFtIHtzdHJpbmd9IGZhbGxiYWNrXG4gKiBAcmV0dXJucyB7c3RyaW5nIHwgdW5kZWZpbmVkfVxuICovXG5cblxuZnVuY3Rpb24gZ2V0RnVuY3Rpb25Db21wb25lbnROYW1lKENvbXBvbmVudCkge1xuICB2YXIgZmFsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICcnO1xuICByZXR1cm4gQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8IGdldEZ1bmN0aW9uTmFtZShDb21wb25lbnQpIHx8IGZhbGxiYWNrO1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGdldEZ1bmN0aW9uQ29tcG9uZW50TmFtZShpbm5lclR5cGUpO1xuICByZXR1cm4gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lIHx8IChmdW5jdGlvbk5hbWUgIT09ICcnID8gXCJcIi5jb25jYXQod3JhcHBlck5hbWUsIFwiKFwiKS5jb25jYXQoZnVuY3Rpb25OYW1lLCBcIilcIikgOiB3cmFwcGVyTmFtZSk7XG59XG4vKipcbiAqIGNoZXJyeS1waWNrIGZyb21cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iLzc2OWIxZjI3MGUxMjUxZDlkYmRjZTBmY2JkOWU5MmU1MDJkMDU5YjgvcGFja2FnZXMvc2hhcmVkL2dldENvbXBvbmVudE5hbWUuanNcbiAqIG9yaWdpbmFsbHkgZm9ya2VkIGZyb20gcmVjb21wb3NlL2dldERpc3BsYXlOYW1lIHdpdGggYWRkZWQgSUUgMTEgc3VwcG9ydFxuICpcbiAqIEBwYXJhbSB7UmVhY3QuUmVhY3RUeXBlfSBDb21wb25lbnRcbiAqIEByZXR1cm5zIHtzdHJpbmcgfCB1bmRlZmluZWR9XG4gKi9cblxuXG5mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpIHtcbiAgaWYgKENvbXBvbmVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBDb21wb25lbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIENvbXBvbmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBnZXRGdW5jdGlvbkNvbXBvbmVudE5hbWUoQ29tcG9uZW50LCAnQ29tcG9uZW50Jyk7XG4gIH1cblxuICBpZiAoKDAsIF90eXBlb2YyLmRlZmF1bHQpKENvbXBvbmVudCkgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoIChDb21wb25lbnQuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgX3JlYWN0SXMuRm9yd2FyZFJlZjpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKENvbXBvbmVudCwgQ29tcG9uZW50LnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBfcmVhY3RJcy5NZW1vOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUoQ29tcG9uZW50LCBDb21wb25lbnQudHlwZSwgJ21lbW8nKTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSIsIi8qKiBAbGljZW5zZSBNYXRlcmlhbC1VSSB2NC4xMS4yXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImNoYWluUHJvcFR5cGVzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9jaGFpblByb3BUeXBlcy5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImRlZXBtZXJnZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfZGVlcG1lcmdlLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZWxlbWVudEFjY2VwdGluZ1JlZlwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfZWxlbWVudEFjY2VwdGluZ1JlZi5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImVsZW1lbnRUeXBlQWNjZXB0aW5nUmVmXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9lbGVtZW50VHlwZUFjY2VwdGluZ1JlZi5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImV4YWN0UHJvcFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfZXhhY3RQcm9wLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZm9ybWF0TXVpRXJyb3JNZXNzYWdlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJnZXREaXNwbGF5TmFtZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfZ2V0RGlzcGxheU5hbWUuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJIVE1MRWxlbWVudFR5cGVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX0hUTUxFbGVtZW50VHlwZS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInBvbnlmaWxsR2xvYmFsXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9wb255ZmlsbEdsb2JhbC5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInJlZlR5cGVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3JlZlR5cGUuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfY2hhaW5Qcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2NoYWluUHJvcFR5cGVzXCIpKTtcblxudmFyIF9kZWVwbWVyZ2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2RlZXBtZXJnZVwiKSk7XG5cbnZhciBfZWxlbWVudEFjY2VwdGluZ1JlZiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vZWxlbWVudEFjY2VwdGluZ1JlZlwiKSk7XG5cbnZhciBfZWxlbWVudFR5cGVBY2NlcHRpbmdSZWYgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2VsZW1lbnRUeXBlQWNjZXB0aW5nUmVmXCIpKTtcblxudmFyIF9leGFjdFByb3AgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2V4YWN0UHJvcFwiKSk7XG5cbnZhciBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9mb3JtYXRNdWlFcnJvck1lc3NhZ2VcIikpO1xuXG52YXIgX2dldERpc3BsYXlOYW1lID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9nZXREaXNwbGF5TmFtZVwiKSk7XG5cbnZhciBfSFRNTEVsZW1lbnRUeXBlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9IVE1MRWxlbWVudFR5cGVcIikpO1xuXG52YXIgX3BvbnlmaWxsR2xvYmFsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9wb255ZmlsbEdsb2JhbFwiKSk7XG5cbnZhciBfcmVmVHlwZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcmVmVHlwZVwiKSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIF9kZWZhdWx0ID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3Byb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG52YXIgcmVmVHlwZSA9IF9wcm9wVHlwZXMuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMuZGVmYXVsdC5mdW5jLCBfcHJvcFR5cGVzLmRlZmF1bHQub2JqZWN0XSk7XG5cbnZhciBfZGVmYXVsdCA9IHJlZlR5cGU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBoeXBoZW5hdGUgPSByZXF1aXJlKCdoeXBoZW5hdGUtc3R5bGUtbmFtZScpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcERlZmF1bHRMZWdhY3kgKGUpIHsgcmV0dXJuIGUgJiYgdHlwZW9mIGUgPT09ICdvYmplY3QnICYmICdkZWZhdWx0JyBpbiBlID8gZSA6IHsgJ2RlZmF1bHQnOiBlIH07IH1cblxudmFyIGh5cGhlbmF0ZV9fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHRMZWdhY3koaHlwaGVuYXRlKTtcblxuLyoqXG4gKiBDb252ZXJ0IGNhbWVsIGNhc2VkIHByb3BlcnR5IG5hbWVzIHRvIGRhc2ggc2VwYXJhdGVkLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdHlsZVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5cbmZ1bmN0aW9uIGNvbnZlcnRDYXNlKHN0eWxlKSB7XG4gIHZhciBjb252ZXJ0ZWQgPSB7fTtcblxuICBmb3IgKHZhciBwcm9wIGluIHN0eWxlKSB7XG4gICAgdmFyIGtleSA9IHByb3AuaW5kZXhPZignLS0nKSA9PT0gMCA/IHByb3AgOiBoeXBoZW5hdGVfX2RlZmF1bHRbJ2RlZmF1bHQnXShwcm9wKTtcbiAgICBjb252ZXJ0ZWRba2V5XSA9IHN0eWxlW3Byb3BdO1xuICB9XG5cbiAgaWYgKHN0eWxlLmZhbGxiYWNrcykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHN0eWxlLmZhbGxiYWNrcykpIGNvbnZlcnRlZC5mYWxsYmFja3MgPSBzdHlsZS5mYWxsYmFja3MubWFwKGNvbnZlcnRDYXNlKTtlbHNlIGNvbnZlcnRlZC5mYWxsYmFja3MgPSBjb252ZXJ0Q2FzZShzdHlsZS5mYWxsYmFja3MpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnZlcnRlZDtcbn1cbi8qKlxuICogQWxsb3cgY2FtZWwgY2FzZWQgcHJvcGVydHkgbmFtZXMgYnkgY29udmVydGluZyB0aGVtIGJhY2sgdG8gZGFzaGVyaXplZC5cbiAqXG4gKiBAcGFyYW0ge1J1bGV9IHJ1bGVcbiAqL1xuXG5cbmZ1bmN0aW9uIGNhbWVsQ2FzZSgpIHtcbiAgZnVuY3Rpb24gb25Qcm9jZXNzU3R5bGUoc3R5bGUpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzdHlsZSkpIHtcbiAgICAgIC8vIEhhbmRsZSBydWxlcyBsaWtlIEBmb250LWZhY2UsIHdoaWNoIGNhbiBoYXZlIG11bHRpcGxlIHN0eWxlcyBpbiBhbiBhcnJheVxuICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHN0eWxlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBzdHlsZVtpbmRleF0gPSBjb252ZXJ0Q2FzZShzdHlsZVtpbmRleF0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3R5bGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnZlcnRDYXNlKHN0eWxlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlVmFsdWUodmFsdWUsIHByb3AsIHJ1bGUpIHtcbiAgICBpZiAocHJvcC5pbmRleE9mKCctLScpID09PSAwKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgdmFyIGh5cGhlbmF0ZWRQcm9wID0gaHlwaGVuYXRlX19kZWZhdWx0WydkZWZhdWx0J10ocHJvcCk7IC8vIFRoZXJlIHdhcyBubyBjYW1lbCBjYXNlIGluIHBsYWNlXG5cbiAgICBpZiAocHJvcCA9PT0gaHlwaGVuYXRlZFByb3ApIHJldHVybiB2YWx1ZTtcbiAgICBydWxlLnByb3AoaHlwaGVuYXRlZFByb3AsIHZhbHVlKTsgLy8gQ29yZSB3aWxsIGlnbm9yZSB0aGF0IHByb3BlcnR5IHZhbHVlIHdlIHNldCB0aGUgcHJvcGVyIG9uZSBhYm92ZS5cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBvblByb2Nlc3NTdHlsZTogb25Qcm9jZXNzU3R5bGUsXG4gICAgb25DaGFuZ2VWYWx1ZTogb25DaGFuZ2VWYWx1ZVxuICB9O1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBjYW1lbENhc2U7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBqc3MgPSByZXF1aXJlKCdqc3MnKTtcblxudmFyIHB4ID0ganNzLmhhc0NTU1RPTVN1cHBvcnQgJiYgQ1NTID8gQ1NTLnB4IDogJ3B4JztcbnZhciBtcyA9IGpzcy5oYXNDU1NUT01TdXBwb3J0ICYmIENTUyA/IENTUy5tcyA6ICdtcyc7XG52YXIgcGVyY2VudCA9IGpzcy5oYXNDU1NUT01TdXBwb3J0ICYmIENTUyA/IENTUy5wZXJjZW50IDogJyUnO1xuLyoqXG4gKiBHZW5lcmF0ZWQganNzLXBsdWdpbi1kZWZhdWx0LXVuaXQgQ1NTIHByb3BlcnR5IHVuaXRzXG4gKlxuICogQHR5cGUgb2JqZWN0XG4gKi9cblxudmFyIGRlZmF1bHRVbml0cyA9IHtcbiAgLy8gQW5pbWF0aW9uIHByb3BlcnRpZXNcbiAgJ2FuaW1hdGlvbi1kZWxheSc6IG1zLFxuICAnYW5pbWF0aW9uLWR1cmF0aW9uJzogbXMsXG4gIC8vIEJhY2tncm91bmQgcHJvcGVydGllc1xuICAnYmFja2dyb3VuZC1wb3NpdGlvbic6IHB4LFxuICAnYmFja2dyb3VuZC1wb3NpdGlvbi14JzogcHgsXG4gICdiYWNrZ3JvdW5kLXBvc2l0aW9uLXknOiBweCxcbiAgJ2JhY2tncm91bmQtc2l6ZSc6IHB4LFxuICAvLyBCb3JkZXIgUHJvcGVydGllc1xuICBib3JkZXI6IHB4LFxuICAnYm9yZGVyLWJvdHRvbSc6IHB4LFxuICAnYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cyc6IHB4LFxuICAnYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMnOiBweCxcbiAgJ2JvcmRlci1ib3R0b20td2lkdGgnOiBweCxcbiAgJ2JvcmRlci1sZWZ0JzogcHgsXG4gICdib3JkZXItbGVmdC13aWR0aCc6IHB4LFxuICAnYm9yZGVyLXJhZGl1cyc6IHB4LFxuICAnYm9yZGVyLXJpZ2h0JzogcHgsXG4gICdib3JkZXItcmlnaHQtd2lkdGgnOiBweCxcbiAgJ2JvcmRlci10b3AnOiBweCxcbiAgJ2JvcmRlci10b3AtbGVmdC1yYWRpdXMnOiBweCxcbiAgJ2JvcmRlci10b3AtcmlnaHQtcmFkaXVzJzogcHgsXG4gICdib3JkZXItdG9wLXdpZHRoJzogcHgsXG4gICdib3JkZXItd2lkdGgnOiBweCxcbiAgJ2JvcmRlci1ibG9jayc6IHB4LFxuICAnYm9yZGVyLWJsb2NrLWVuZCc6IHB4LFxuICAnYm9yZGVyLWJsb2NrLWVuZC13aWR0aCc6IHB4LFxuICAnYm9yZGVyLWJsb2NrLXN0YXJ0JzogcHgsXG4gICdib3JkZXItYmxvY2stc3RhcnQtd2lkdGgnOiBweCxcbiAgJ2JvcmRlci1ibG9jay13aWR0aCc6IHB4LFxuICAnYm9yZGVyLWlubGluZSc6IHB4LFxuICAnYm9yZGVyLWlubGluZS1lbmQnOiBweCxcbiAgJ2JvcmRlci1pbmxpbmUtZW5kLXdpZHRoJzogcHgsXG4gICdib3JkZXItaW5saW5lLXN0YXJ0JzogcHgsXG4gICdib3JkZXItaW5saW5lLXN0YXJ0LXdpZHRoJzogcHgsXG4gICdib3JkZXItaW5saW5lLXdpZHRoJzogcHgsXG4gICdib3JkZXItc3RhcnQtc3RhcnQtcmFkaXVzJzogcHgsXG4gICdib3JkZXItc3RhcnQtZW5kLXJhZGl1cyc6IHB4LFxuICAnYm9yZGVyLWVuZC1zdGFydC1yYWRpdXMnOiBweCxcbiAgJ2JvcmRlci1lbmQtZW5kLXJhZGl1cyc6IHB4LFxuICAvLyBNYXJnaW4gcHJvcGVydGllc1xuICBtYXJnaW46IHB4LFxuICAnbWFyZ2luLWJvdHRvbSc6IHB4LFxuICAnbWFyZ2luLWxlZnQnOiBweCxcbiAgJ21hcmdpbi1yaWdodCc6IHB4LFxuICAnbWFyZ2luLXRvcCc6IHB4LFxuICAnbWFyZ2luLWJsb2NrJzogcHgsXG4gICdtYXJnaW4tYmxvY2stZW5kJzogcHgsXG4gICdtYXJnaW4tYmxvY2stc3RhcnQnOiBweCxcbiAgJ21hcmdpbi1pbmxpbmUnOiBweCxcbiAgJ21hcmdpbi1pbmxpbmUtZW5kJzogcHgsXG4gICdtYXJnaW4taW5saW5lLXN0YXJ0JzogcHgsXG4gIC8vIFBhZGRpbmcgcHJvcGVydGllc1xuICBwYWRkaW5nOiBweCxcbiAgJ3BhZGRpbmctYm90dG9tJzogcHgsXG4gICdwYWRkaW5nLWxlZnQnOiBweCxcbiAgJ3BhZGRpbmctcmlnaHQnOiBweCxcbiAgJ3BhZGRpbmctdG9wJzogcHgsXG4gICdwYWRkaW5nLWJsb2NrJzogcHgsXG4gICdwYWRkaW5nLWJsb2NrLWVuZCc6IHB4LFxuICAncGFkZGluZy1ibG9jay1zdGFydCc6IHB4LFxuICAncGFkZGluZy1pbmxpbmUnOiBweCxcbiAgJ3BhZGRpbmctaW5saW5lLWVuZCc6IHB4LFxuICAncGFkZGluZy1pbmxpbmUtc3RhcnQnOiBweCxcbiAgLy8gTWFzayBwcm9wZXJ0aWVzXG4gICdtYXNrLXBvc2l0aW9uLXgnOiBweCxcbiAgJ21hc2stcG9zaXRpb24teSc6IHB4LFxuICAnbWFzay1zaXplJzogcHgsXG4gIC8vIFdpZHRoIGFuZCBoZWlnaHQgcHJvcGVydGllc1xuICBoZWlnaHQ6IHB4LFxuICB3aWR0aDogcHgsXG4gICdtaW4taGVpZ2h0JzogcHgsXG4gICdtYXgtaGVpZ2h0JzogcHgsXG4gICdtaW4td2lkdGgnOiBweCxcbiAgJ21heC13aWR0aCc6IHB4LFxuICAvLyBQb3NpdGlvbiBwcm9wZXJ0aWVzXG4gIGJvdHRvbTogcHgsXG4gIGxlZnQ6IHB4LFxuICB0b3A6IHB4LFxuICByaWdodDogcHgsXG4gIGluc2V0OiBweCxcbiAgJ2luc2V0LWJsb2NrJzogcHgsXG4gICdpbnNldC1ibG9jay1lbmQnOiBweCxcbiAgJ2luc2V0LWJsb2NrLXN0YXJ0JzogcHgsXG4gICdpbnNldC1pbmxpbmUnOiBweCxcbiAgJ2luc2V0LWlubGluZS1lbmQnOiBweCxcbiAgJ2luc2V0LWlubGluZS1zdGFydCc6IHB4LFxuICAvLyBTaGFkb3cgcHJvcGVydGllc1xuICAnYm94LXNoYWRvdyc6IHB4LFxuICAndGV4dC1zaGFkb3cnOiBweCxcbiAgLy8gQ29sdW1uIHByb3BlcnRpZXNcbiAgJ2NvbHVtbi1nYXAnOiBweCxcbiAgJ2NvbHVtbi1ydWxlJzogcHgsXG4gICdjb2x1bW4tcnVsZS13aWR0aCc6IHB4LFxuICAnY29sdW1uLXdpZHRoJzogcHgsXG4gIC8vIEZvbnQgYW5kIHRleHQgcHJvcGVydGllc1xuICAnZm9udC1zaXplJzogcHgsXG4gICdmb250LXNpemUtZGVsdGEnOiBweCxcbiAgJ2xldHRlci1zcGFjaW5nJzogcHgsXG4gICd0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzJzogcHgsXG4gICd0ZXh0LWluZGVudCc6IHB4LFxuICAndGV4dC1zdHJva2UnOiBweCxcbiAgJ3RleHQtc3Ryb2tlLXdpZHRoJzogcHgsXG4gICd3b3JkLXNwYWNpbmcnOiBweCxcbiAgLy8gTW90aW9uIHByb3BlcnRpZXNcbiAgbW90aW9uOiBweCxcbiAgJ21vdGlvbi1vZmZzZXQnOiBweCxcbiAgLy8gT3V0bGluZSBwcm9wZXJ0aWVzXG4gIG91dGxpbmU6IHB4LFxuICAnb3V0bGluZS1vZmZzZXQnOiBweCxcbiAgJ291dGxpbmUtd2lkdGgnOiBweCxcbiAgLy8gUGVyc3BlY3RpdmUgcHJvcGVydGllc1xuICBwZXJzcGVjdGl2ZTogcHgsXG4gICdwZXJzcGVjdGl2ZS1vcmlnaW4teCc6IHBlcmNlbnQsXG4gICdwZXJzcGVjdGl2ZS1vcmlnaW4teSc6IHBlcmNlbnQsXG4gIC8vIFRyYW5zZm9ybSBwcm9wZXJ0aWVzXG4gICd0cmFuc2Zvcm0tb3JpZ2luJzogcGVyY2VudCxcbiAgJ3RyYW5zZm9ybS1vcmlnaW4teCc6IHBlcmNlbnQsXG4gICd0cmFuc2Zvcm0tb3JpZ2luLXknOiBwZXJjZW50LFxuICAndHJhbnNmb3JtLW9yaWdpbi16JzogcGVyY2VudCxcbiAgLy8gVHJhbnNpdGlvbiBwcm9wZXJ0aWVzXG4gICd0cmFuc2l0aW9uLWRlbGF5JzogbXMsXG4gICd0cmFuc2l0aW9uLWR1cmF0aW9uJzogbXMsXG4gIC8vIEFsaWdubWVudCBwcm9wZXJ0aWVzXG4gICd2ZXJ0aWNhbC1hbGlnbic6IHB4LFxuICAnZmxleC1iYXNpcyc6IHB4LFxuICAvLyBTb21lIHJhbmRvbSBwcm9wZXJ0aWVzXG4gICdzaGFwZS1tYXJnaW4nOiBweCxcbiAgc2l6ZTogcHgsXG4gIGdhcDogcHgsXG4gIC8vIEdyaWQgcHJvcGVydGllc1xuICBncmlkOiBweCxcbiAgJ2dyaWQtZ2FwJzogcHgsXG4gICdyb3ctZ2FwJzogcHgsXG4gICdncmlkLXJvdy1nYXAnOiBweCxcbiAgJ2dyaWQtY29sdW1uLWdhcCc6IHB4LFxuICAnZ3JpZC10ZW1wbGF0ZS1yb3dzJzogcHgsXG4gICdncmlkLXRlbXBsYXRlLWNvbHVtbnMnOiBweCxcbiAgJ2dyaWQtYXV0by1yb3dzJzogcHgsXG4gICdncmlkLWF1dG8tY29sdW1ucyc6IHB4LFxuICAvLyBOb3QgZXhpc3RpbmcgcHJvcGVydGllcy5cbiAgLy8gVXNlZCB0byBhdm9pZCBpc3N1ZXMgd2l0aCBqc3MtcGx1Z2luLWV4cGFuZCBpbnRlZ3JhdGlvbi5cbiAgJ2JveC1zaGFkb3cteCc6IHB4LFxuICAnYm94LXNoYWRvdy15JzogcHgsXG4gICdib3gtc2hhZG93LWJsdXInOiBweCxcbiAgJ2JveC1zaGFkb3ctc3ByZWFkJzogcHgsXG4gICdmb250LWxpbmUtaGVpZ2h0JzogcHgsXG4gICd0ZXh0LXNoYWRvdy14JzogcHgsXG4gICd0ZXh0LXNoYWRvdy15JzogcHgsXG4gICd0ZXh0LXNoYWRvdy1ibHVyJzogcHhcbn07XG5cbi8qKlxuICogQ2xvbmVzIHRoZSBvYmplY3QgYW5kIGFkZHMgYSBjYW1lbCBjYXNlZCBwcm9wZXJ0eSB2ZXJzaW9uLlxuICovXG5mdW5jdGlvbiBhZGRDYW1lbENhc2VkVmVyc2lvbihvYmopIHtcbiAgdmFyIHJlZ0V4cCA9IC8oLVthLXpdKS9nO1xuXG4gIHZhciByZXBsYWNlID0gZnVuY3Rpb24gcmVwbGFjZShzdHIpIHtcbiAgICByZXR1cm4gc3RyWzFdLnRvVXBwZXJDYXNlKCk7XG4gIH07XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuXG4gIGZvciAodmFyIF9rZXkgaW4gb2JqKSB7XG4gICAgbmV3T2JqW19rZXldID0gb2JqW19rZXldO1xuICAgIG5ld09ialtfa2V5LnJlcGxhY2UocmVnRXhwLCByZXBsYWNlKV0gPSBvYmpbX2tleV07XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG52YXIgdW5pdHMgPSBhZGRDYW1lbENhc2VkVmVyc2lvbihkZWZhdWx0VW5pdHMpO1xuLyoqXG4gKiBSZWN1cnNpdmUgZGVlcCBzdHlsZSBwYXNzaW5nIGZ1bmN0aW9uXG4gKi9cblxuZnVuY3Rpb24gaXRlcmF0ZShwcm9wLCB2YWx1ZSwgb3B0aW9ucykge1xuICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIHZhbHVlO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbHVlW2ldID0gaXRlcmF0ZShwcm9wLCB2YWx1ZVtpXSwgb3B0aW9ucyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICBpZiAocHJvcCA9PT0gJ2ZhbGxiYWNrcycpIHtcbiAgICAgIGZvciAodmFyIGlubmVyUHJvcCBpbiB2YWx1ZSkge1xuICAgICAgICB2YWx1ZVtpbm5lclByb3BdID0gaXRlcmF0ZShpbm5lclByb3AsIHZhbHVlW2lubmVyUHJvcF0sIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBfaW5uZXJQcm9wIGluIHZhbHVlKSB7XG4gICAgICAgIHZhbHVlW19pbm5lclByb3BdID0gaXRlcmF0ZShwcm9wICsgXCItXCIgKyBfaW5uZXJQcm9wLCB2YWx1ZVtfaW5uZXJQcm9wXSwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzXG5cbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIGlzTmFOKHZhbHVlKSA9PT0gZmFsc2UpIHtcbiAgICB2YXIgdW5pdCA9IG9wdGlvbnNbcHJvcF0gfHwgdW5pdHNbcHJvcF07IC8vIEFkZCB0aGUgdW5pdCBpZiBhdmFpbGFibGUsIGV4Y2VwdCBmb3IgdGhlIHNwZWNpYWwgY2FzZSBvZiAwcHguXG5cbiAgICBpZiAodW5pdCAmJiAhKHZhbHVlID09PSAwICYmIHVuaXQgPT09IHB4KSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB1bml0ID09PSAnZnVuY3Rpb24nID8gdW5pdCh2YWx1ZSkudG9TdHJpbmcoKSA6IFwiXCIgKyB2YWx1ZSArIHVuaXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG4vKipcbiAqIEFkZCB1bml0IHRvIG51bWVyaWMgdmFsdWVzLlxuICovXG5cblxuZnVuY3Rpb24gZGVmYXVsdFVuaXQob3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIGNhbWVsQ2FzZWRPcHRpb25zID0gYWRkQ2FtZWxDYXNlZFZlcnNpb24ob3B0aW9ucyk7XG5cbiAgZnVuY3Rpb24gb25Qcm9jZXNzU3R5bGUoc3R5bGUsIHJ1bGUpIHtcbiAgICBpZiAocnVsZS50eXBlICE9PSAnc3R5bGUnKSByZXR1cm4gc3R5bGU7XG5cbiAgICBmb3IgKHZhciBwcm9wIGluIHN0eWxlKSB7XG4gICAgICBzdHlsZVtwcm9wXSA9IGl0ZXJhdGUocHJvcCwgc3R5bGVbcHJvcF0sIGNhbWVsQ2FzZWRPcHRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGU7XG4gIH1cblxuICBmdW5jdGlvbiBvbkNoYW5nZVZhbHVlKHZhbHVlLCBwcm9wKSB7XG4gICAgcmV0dXJuIGl0ZXJhdGUocHJvcCwgdmFsdWUsIGNhbWVsQ2FzZWRPcHRpb25zKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgb25Qcm9jZXNzU3R5bGU6IG9uUHJvY2Vzc1N0eWxlLFxuICAgIG9uQ2hhbmdlVmFsdWU6IG9uQ2hhbmdlVmFsdWVcbiAgfTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZGVmYXVsdFVuaXQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBfZXh0ZW5kcyA9IHJlcXVpcmUoJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xudmFyIGpzcyA9IHJlcXVpcmUoJ2pzcycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcERlZmF1bHRMZWdhY3kgKGUpIHsgcmV0dXJuIGUgJiYgdHlwZW9mIGUgPT09ICdvYmplY3QnICYmICdkZWZhdWx0JyBpbiBlID8gZSA6IHsgJ2RlZmF1bHQnOiBlIH07IH1cblxudmFyIF9leHRlbmRzX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdExlZ2FjeShfZXh0ZW5kcyk7XG5cbnZhciBhdCA9ICdAZ2xvYmFsJztcbnZhciBhdFByZWZpeCA9ICdAZ2xvYmFsICc7XG5cbnZhciBHbG9iYWxDb250YWluZXJSdWxlID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gR2xvYmFsQ29udGFpbmVyUnVsZShrZXksIHN0eWxlcywgb3B0aW9ucykge1xuICAgIHRoaXMudHlwZSA9ICdnbG9iYWwnO1xuICAgIHRoaXMuYXQgPSBhdDtcbiAgICB0aGlzLnJ1bGVzID0gdm9pZCAwO1xuICAgIHRoaXMub3B0aW9ucyA9IHZvaWQgMDtcbiAgICB0aGlzLmtleSA9IHZvaWQgMDtcbiAgICB0aGlzLmlzUHJvY2Vzc2VkID0gZmFsc2U7XG4gICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLnJ1bGVzID0gbmV3IGpzcy5SdWxlTGlzdChfZXh0ZW5kc19fZGVmYXVsdFsnZGVmYXVsdCddKHt9LCBvcHRpb25zLCB7XG4gICAgICBwYXJlbnQ6IHRoaXNcbiAgICB9KSk7XG5cbiAgICBmb3IgKHZhciBzZWxlY3RvciBpbiBzdHlsZXMpIHtcbiAgICAgIHRoaXMucnVsZXMuYWRkKHNlbGVjdG9yLCBzdHlsZXNbc2VsZWN0b3JdKTtcbiAgICB9XG5cbiAgICB0aGlzLnJ1bGVzLnByb2Nlc3MoKTtcbiAgfVxuICAvKipcbiAgICogR2V0IGEgcnVsZS5cbiAgICovXG5cblxuICB2YXIgX3Byb3RvID0gR2xvYmFsQ29udGFpbmVyUnVsZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmdldFJ1bGUgPSBmdW5jdGlvbiBnZXRSdWxlKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcy5nZXQobmFtZSk7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZSBhbmQgcmVnaXN0ZXIgcnVsZSwgcnVuIHBsdWdpbnMuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmFkZFJ1bGUgPSBmdW5jdGlvbiBhZGRSdWxlKG5hbWUsIHN0eWxlLCBvcHRpb25zKSB7XG4gICAgdmFyIHJ1bGUgPSB0aGlzLnJ1bGVzLmFkZChuYW1lLCBzdHlsZSwgb3B0aW9ucyk7XG4gICAgaWYgKHJ1bGUpIHRoaXMub3B0aW9ucy5qc3MucGx1Z2lucy5vblByb2Nlc3NSdWxlKHJ1bGUpO1xuICAgIHJldHVybiBydWxlO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgaW5kZXggb2YgYSBydWxlLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5pbmRleE9mID0gZnVuY3Rpb24gaW5kZXhPZihydWxlKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZXMuaW5kZXhPZihydWxlKTtcbiAgfVxuICAvKipcbiAgICogR2VuZXJhdGVzIGEgQ1NTIHN0cmluZy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcy50b1N0cmluZygpO1xuICB9O1xuXG4gIHJldHVybiBHbG9iYWxDb250YWluZXJSdWxlO1xufSgpO1xuXG52YXIgR2xvYmFsUHJlZml4ZWRSdWxlID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gR2xvYmFsUHJlZml4ZWRSdWxlKGtleSwgc3R5bGUsIG9wdGlvbnMpIHtcbiAgICB0aGlzLnR5cGUgPSAnZ2xvYmFsJztcbiAgICB0aGlzLmF0ID0gYXQ7XG4gICAgdGhpcy5vcHRpb25zID0gdm9pZCAwO1xuICAgIHRoaXMucnVsZSA9IHZvaWQgMDtcbiAgICB0aGlzLmlzUHJvY2Vzc2VkID0gZmFsc2U7XG4gICAgdGhpcy5rZXkgPSB2b2lkIDA7XG4gICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB2YXIgc2VsZWN0b3IgPSBrZXkuc3Vic3RyKGF0UHJlZml4Lmxlbmd0aCk7XG4gICAgdGhpcy5ydWxlID0gb3B0aW9ucy5qc3MuY3JlYXRlUnVsZShzZWxlY3Rvciwgc3R5bGUsIF9leHRlbmRzX19kZWZhdWx0WydkZWZhdWx0J10oe30sIG9wdGlvbnMsIHtcbiAgICAgIHBhcmVudDogdGhpc1xuICAgIH0pKTtcbiAgfVxuXG4gIHZhciBfcHJvdG8yID0gR2xvYmFsUHJlZml4ZWRSdWxlLnByb3RvdHlwZTtcblxuICBfcHJvdG8yLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcob3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLnJ1bGUgPyB0aGlzLnJ1bGUudG9TdHJpbmcob3B0aW9ucykgOiAnJztcbiAgfTtcblxuICByZXR1cm4gR2xvYmFsUHJlZml4ZWRSdWxlO1xufSgpO1xuXG52YXIgc2VwYXJhdG9yUmVnRXhwID0gL1xccyosXFxzKi9nO1xuXG5mdW5jdGlvbiBhZGRTY29wZShzZWxlY3Rvciwgc2NvcGUpIHtcbiAgdmFyIHBhcnRzID0gc2VsZWN0b3Iuc3BsaXQoc2VwYXJhdG9yUmVnRXhwKTtcbiAgdmFyIHNjb3BlZCA9ICcnO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBzY29wZWQgKz0gc2NvcGUgKyBcIiBcIiArIHBhcnRzW2ldLnRyaW0oKTtcbiAgICBpZiAocGFydHNbaSArIDFdKSBzY29wZWQgKz0gJywgJztcbiAgfVxuXG4gIHJldHVybiBzY29wZWQ7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU5lc3RlZEdsb2JhbENvbnRhaW5lclJ1bGUocnVsZSwgc2hlZXQpIHtcbiAgdmFyIG9wdGlvbnMgPSBydWxlLm9wdGlvbnMsXG4gICAgICBzdHlsZSA9IHJ1bGUuc3R5bGU7XG4gIHZhciBydWxlcyA9IHN0eWxlID8gc3R5bGVbYXRdIDogbnVsbDtcbiAgaWYgKCFydWxlcykgcmV0dXJuO1xuXG4gIGZvciAodmFyIG5hbWUgaW4gcnVsZXMpIHtcbiAgICBzaGVldC5hZGRSdWxlKG5hbWUsIHJ1bGVzW25hbWVdLCBfZXh0ZW5kc19fZGVmYXVsdFsnZGVmYXVsdCddKHt9LCBvcHRpb25zLCB7XG4gICAgICBzZWxlY3RvcjogYWRkU2NvcGUobmFtZSwgcnVsZS5zZWxlY3RvcilcbiAgICB9KSk7XG4gIH1cblxuICBkZWxldGUgc3R5bGVbYXRdO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVQcmVmaXhlZEdsb2JhbFJ1bGUocnVsZSwgc2hlZXQpIHtcbiAgdmFyIG9wdGlvbnMgPSBydWxlLm9wdGlvbnMsXG4gICAgICBzdHlsZSA9IHJ1bGUuc3R5bGU7XG5cbiAgZm9yICh2YXIgcHJvcCBpbiBzdHlsZSkge1xuICAgIGlmIChwcm9wWzBdICE9PSAnQCcgfHwgcHJvcC5zdWJzdHIoMCwgYXQubGVuZ3RoKSAhPT0gYXQpIGNvbnRpbnVlO1xuICAgIHZhciBzZWxlY3RvciA9IGFkZFNjb3BlKHByb3Auc3Vic3RyKGF0Lmxlbmd0aCksIHJ1bGUuc2VsZWN0b3IpO1xuICAgIHNoZWV0LmFkZFJ1bGUoc2VsZWN0b3IsIHN0eWxlW3Byb3BdLCBfZXh0ZW5kc19fZGVmYXVsdFsnZGVmYXVsdCddKHt9LCBvcHRpb25zLCB7XG4gICAgICBzZWxlY3Rvcjogc2VsZWN0b3JcbiAgICB9KSk7XG4gICAgZGVsZXRlIHN0eWxlW3Byb3BdO1xuICB9XG59XG4vKipcbiAqIENvbnZlcnQgbmVzdGVkIHJ1bGVzIHRvIHNlcGFyYXRlLCByZW1vdmUgdGhlbSBmcm9tIG9yaWdpbmFsIHN0eWxlcy5cbiAqXG4gKiBAcGFyYW0ge1J1bGV9IHJ1bGVcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuXG5mdW5jdGlvbiBqc3NHbG9iYWwoKSB7XG4gIGZ1bmN0aW9uIG9uQ3JlYXRlUnVsZShuYW1lLCBzdHlsZXMsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW5hbWUpIHJldHVybiBudWxsO1xuXG4gICAgaWYgKG5hbWUgPT09IGF0KSB7XG4gICAgICByZXR1cm4gbmV3IEdsb2JhbENvbnRhaW5lclJ1bGUobmFtZSwgc3R5bGVzLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZiAobmFtZVswXSA9PT0gJ0AnICYmIG5hbWUuc3Vic3RyKDAsIGF0UHJlZml4Lmxlbmd0aCkgPT09IGF0UHJlZml4KSB7XG4gICAgICByZXR1cm4gbmV3IEdsb2JhbFByZWZpeGVkUnVsZShuYW1lLCBzdHlsZXMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHZhciBwYXJlbnQgPSBvcHRpb25zLnBhcmVudDtcblxuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIGlmIChwYXJlbnQudHlwZSA9PT0gJ2dsb2JhbCcgfHwgcGFyZW50Lm9wdGlvbnMucGFyZW50ICYmIHBhcmVudC5vcHRpb25zLnBhcmVudC50eXBlID09PSAnZ2xvYmFsJykge1xuICAgICAgICBvcHRpb25zLnNjb3BlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLnNjb3BlZCA9PT0gZmFsc2UpIHtcbiAgICAgIG9wdGlvbnMuc2VsZWN0b3IgPSBuYW1lO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Qcm9jZXNzUnVsZShydWxlLCBzaGVldCkge1xuICAgIGlmIChydWxlLnR5cGUgIT09ICdzdHlsZScgfHwgIXNoZWV0KSByZXR1cm47XG4gICAgaGFuZGxlTmVzdGVkR2xvYmFsQ29udGFpbmVyUnVsZShydWxlLCBzaGVldCk7XG4gICAgaGFuZGxlUHJlZml4ZWRHbG9iYWxSdWxlKHJ1bGUsIHNoZWV0KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgb25DcmVhdGVSdWxlOiBvbkNyZWF0ZVJ1bGUsXG4gICAgb25Qcm9jZXNzUnVsZTogb25Qcm9jZXNzUnVsZVxuICB9O1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBqc3NHbG9iYWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBfZXh0ZW5kcyA9IHJlcXVpcmUoJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xudmFyIHdhcm5pbmcgPSByZXF1aXJlKCd0aW55LXdhcm5pbmcnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BEZWZhdWx0TGVnYWN5IChlKSB7IHJldHVybiBlICYmIHR5cGVvZiBlID09PSAnb2JqZWN0JyAmJiAnZGVmYXVsdCcgaW4gZSA/IGUgOiB7ICdkZWZhdWx0JzogZSB9OyB9XG5cbnZhciBfZXh0ZW5kc19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHRMZWdhY3koX2V4dGVuZHMpO1xudmFyIHdhcm5pbmdfX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BEZWZhdWx0TGVnYWN5KHdhcm5pbmcpO1xuXG52YXIgc2VwYXJhdG9yUmVnRXhwID0gL1xccyosXFxzKi9nO1xudmFyIHBhcmVudFJlZ0V4cCA9IC8mL2c7XG52YXIgcmVmUmVnRXhwID0gL1xcJChbXFx3LV0rKS9nO1xuLyoqXG4gKiBDb252ZXJ0IG5lc3RlZCBydWxlcyB0byBzZXBhcmF0ZSwgcmVtb3ZlIHRoZW0gZnJvbSBvcmlnaW5hbCBzdHlsZXMuXG4gKlxuICogQHBhcmFtIHtSdWxlfSBydWxlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGpzc05lc3RlZCgpIHtcbiAgLy8gR2V0IGEgZnVuY3Rpb24gdG8gYmUgdXNlZCBmb3IgJHJlZiByZXBsYWNlbWVudC5cbiAgZnVuY3Rpb24gZ2V0UmVwbGFjZVJlZihjb250YWluZXIsIHNoZWV0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChtYXRjaCwga2V5KSB7XG4gICAgICB2YXIgcnVsZSA9IGNvbnRhaW5lci5nZXRSdWxlKGtleSkgfHwgc2hlZXQgJiYgc2hlZXQuZ2V0UnVsZShrZXkpO1xuXG4gICAgICBpZiAocnVsZSkge1xuICAgICAgICBydWxlID0gcnVsZTtcbiAgICAgICAgcmV0dXJuIHJ1bGUuc2VsZWN0b3I7XG4gICAgICB9XG5cbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmdfX2RlZmF1bHRbJ2RlZmF1bHQnXShmYWxzZSwgXCJbSlNTXSBDb3VsZCBub3QgZmluZCB0aGUgcmVmZXJlbmNlZCBydWxlIFxcXCJcIiArIGtleSArIFwiXFxcIiBpbiBcXFwiXCIgKyAoY29udGFpbmVyLm9wdGlvbnMubWV0YSB8fCBjb250YWluZXIudG9TdHJpbmcoKSkgKyBcIlxcXCIuXCIpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVwbGFjZVBhcmVudFJlZnMobmVzdGVkUHJvcCwgcGFyZW50UHJvcCkge1xuICAgIHZhciBwYXJlbnRTZWxlY3RvcnMgPSBwYXJlbnRQcm9wLnNwbGl0KHNlcGFyYXRvclJlZ0V4cCk7XG4gICAgdmFyIG5lc3RlZFNlbGVjdG9ycyA9IG5lc3RlZFByb3Auc3BsaXQoc2VwYXJhdG9yUmVnRXhwKTtcbiAgICB2YXIgcmVzdWx0ID0gJyc7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcmVudFNlbGVjdG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHBhcmVudCA9IHBhcmVudFNlbGVjdG9yc1tpXTtcblxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBuZXN0ZWRTZWxlY3RvcnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgdmFyIG5lc3RlZCA9IG5lc3RlZFNlbGVjdG9yc1tqXTtcbiAgICAgICAgaWYgKHJlc3VsdCkgcmVzdWx0ICs9ICcsICc7IC8vIFJlcGxhY2UgYWxsICYgYnkgdGhlIHBhcmVudCBvciBwcmVmaXggJiB3aXRoIHRoZSBwYXJlbnQuXG5cbiAgICAgICAgcmVzdWx0ICs9IG5lc3RlZC5pbmRleE9mKCcmJykgIT09IC0xID8gbmVzdGVkLnJlcGxhY2UocGFyZW50UmVnRXhwLCBwYXJlbnQpIDogcGFyZW50ICsgXCIgXCIgKyBuZXN0ZWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE9wdGlvbnMocnVsZSwgY29udGFpbmVyLCBwcmV2T3B0aW9ucykge1xuICAgIC8vIE9wdGlvbnMgaGFzIGJlZW4gYWxyZWFkeSBjcmVhdGVkLCBub3cgd2Ugb25seSBpbmNyZWFzZSBpbmRleC5cbiAgICBpZiAocHJldk9wdGlvbnMpIHJldHVybiBfZXh0ZW5kc19fZGVmYXVsdFsnZGVmYXVsdCddKHt9LCBwcmV2T3B0aW9ucywge1xuICAgICAgaW5kZXg6IHByZXZPcHRpb25zLmluZGV4ICsgMSAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cblxuICAgIH0pO1xuICAgIHZhciBuZXN0aW5nTGV2ZWwgPSBydWxlLm9wdGlvbnMubmVzdGluZ0xldmVsO1xuICAgIG5lc3RpbmdMZXZlbCA9IG5lc3RpbmdMZXZlbCA9PT0gdW5kZWZpbmVkID8gMSA6IG5lc3RpbmdMZXZlbCArIDE7XG5cbiAgICB2YXIgb3B0aW9ucyA9IF9leHRlbmRzX19kZWZhdWx0WydkZWZhdWx0J10oe30sIHJ1bGUub3B0aW9ucywge1xuICAgICAgbmVzdGluZ0xldmVsOiBuZXN0aW5nTGV2ZWwsXG4gICAgICBpbmRleDogY29udGFpbmVyLmluZGV4T2YocnVsZSkgKyAxIC8vIFdlIGRvbid0IG5lZWQgdGhlIHBhcmVudCBuYW1lIHRvIGJlIHNldCBvcHRpb25zIGZvciBjaGxpZC5cblxuICAgIH0pO1xuXG4gICAgZGVsZXRlIG9wdGlvbnMubmFtZTtcbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uUHJvY2Vzc1N0eWxlKHN0eWxlLCBydWxlLCBzaGVldCkge1xuICAgIGlmIChydWxlLnR5cGUgIT09ICdzdHlsZScpIHJldHVybiBzdHlsZTtcbiAgICB2YXIgc3R5bGVSdWxlID0gcnVsZTtcbiAgICB2YXIgY29udGFpbmVyID0gc3R5bGVSdWxlLm9wdGlvbnMucGFyZW50O1xuICAgIHZhciBvcHRpb25zO1xuICAgIHZhciByZXBsYWNlUmVmO1xuXG4gICAgZm9yICh2YXIgcHJvcCBpbiBzdHlsZSkge1xuICAgICAgdmFyIGlzTmVzdGVkID0gcHJvcC5pbmRleE9mKCcmJykgIT09IC0xO1xuICAgICAgdmFyIGlzTmVzdGVkQ29uZGl0aW9uYWwgPSBwcm9wWzBdID09PSAnQCc7XG4gICAgICBpZiAoIWlzTmVzdGVkICYmICFpc05lc3RlZENvbmRpdGlvbmFsKSBjb250aW51ZTtcbiAgICAgIG9wdGlvbnMgPSBnZXRPcHRpb25zKHN0eWxlUnVsZSwgY29udGFpbmVyLCBvcHRpb25zKTtcblxuICAgICAgaWYgKGlzTmVzdGVkKSB7XG4gICAgICAgIHZhciBzZWxlY3RvciA9IHJlcGxhY2VQYXJlbnRSZWZzKHByb3AsIHN0eWxlUnVsZS5zZWxlY3Rvcik7IC8vIExhemlseSBjcmVhdGUgdGhlIHJlZiByZXBsYWNlciBmdW5jdGlvbiBqdXN0IG9uY2UgZm9yXG4gICAgICAgIC8vIGFsbCBuZXN0ZWQgcnVsZXMgd2l0aGluIHRoZSBzaGVldC5cblxuICAgICAgICBpZiAoIXJlcGxhY2VSZWYpIHJlcGxhY2VSZWYgPSBnZXRSZXBsYWNlUmVmKGNvbnRhaW5lciwgc2hlZXQpOyAvLyBSZXBsYWNlIGFsbCAkcmVmcy5cblxuICAgICAgICBzZWxlY3RvciA9IHNlbGVjdG9yLnJlcGxhY2UocmVmUmVnRXhwLCByZXBsYWNlUmVmKTtcbiAgICAgICAgY29udGFpbmVyLmFkZFJ1bGUoc2VsZWN0b3IsIHN0eWxlW3Byb3BdLCBfZXh0ZW5kc19fZGVmYXVsdFsnZGVmYXVsdCddKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yXG4gICAgICAgIH0pKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNOZXN0ZWRDb25kaXRpb25hbCkge1xuICAgICAgICAvLyBQbGFjZSBjb25kaXRpb25hbCByaWdodCBhZnRlciB0aGUgcGFyZW50IHJ1bGUgdG8gZW5zdXJlIHJpZ2h0IG9yZGVyaW5nLlxuICAgICAgICBjb250YWluZXIuYWRkUnVsZShwcm9wLCB7fSwgb3B0aW9ucykgLy8gRmxvdyBleHBlY3RzIG1vcmUgb3B0aW9ucyBidXQgdGhleSBhcmVuJ3QgcmVxdWlyZWRcbiAgICAgICAgLy8gQW5kIGZsb3cgZG9lc24ndCBrbm93IHRoaXMgd2lsbCBhbHdheXMgYmUgYSBTdHlsZVJ1bGUgd2hpY2ggaGFzIHRoZSBhZGRSdWxlIG1ldGhvZFxuICAgICAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS11c2VdXG4gICAgICAgIC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICAgICAgICAuYWRkUnVsZShzdHlsZVJ1bGUua2V5LCBzdHlsZVtwcm9wXSwge1xuICAgICAgICAgIHNlbGVjdG9yOiBzdHlsZVJ1bGUuc2VsZWN0b3JcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGRlbGV0ZSBzdHlsZVtwcm9wXTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG9uUHJvY2Vzc1N0eWxlOiBvblByb2Nlc3NTdHlsZVxuICB9O1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBqc3NOZXN0ZWQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbi8qKlxuICogU29ydCBwcm9wcyBieSBsZW5ndGguXG4gKi9cbmZ1bmN0aW9uIGpzc1Byb3BzU29ydCgpIHtcbiAgdmFyIHNvcnQgPSBmdW5jdGlvbiBzb3J0KHByb3AwLCBwcm9wMSkge1xuICAgIGlmIChwcm9wMC5sZW5ndGggPT09IHByb3AxLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHByb3AwID4gcHJvcDEgPyAxIDogLTE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3AwLmxlbmd0aCAtIHByb3AxLmxlbmd0aDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG9uUHJvY2Vzc1N0eWxlOiBmdW5jdGlvbiBvblByb2Nlc3NTdHlsZShzdHlsZSwgcnVsZSkge1xuICAgICAgaWYgKHJ1bGUudHlwZSAhPT0gJ3N0eWxlJykgcmV0dXJuIHN0eWxlO1xuICAgICAgdmFyIG5ld1N0eWxlID0ge307XG4gICAgICB2YXIgcHJvcHMgPSBPYmplY3Qua2V5cyhzdHlsZSkuc29ydChzb3J0KTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBuZXdTdHlsZVtwcm9wc1tpXV0gPSBzdHlsZVtwcm9wc1tpXV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXdTdHlsZTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGpzc1Byb3BzU29ydDtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHdhcm5pbmcgPSByZXF1aXJlKCd0aW55LXdhcm5pbmcnKTtcbnZhciBqc3MgPSByZXF1aXJlKCdqc3MnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BEZWZhdWx0TGVnYWN5IChlKSB7IHJldHVybiBlICYmIHR5cGVvZiBlID09PSAnb2JqZWN0JyAmJiAnZGVmYXVsdCcgaW4gZSA/IGUgOiB7ICdkZWZhdWx0JzogZSB9OyB9XG5cbnZhciB3YXJuaW5nX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdExlZ2FjeSh3YXJuaW5nKTtcblxudmFyIG5vdyA9IERhdGUubm93KCk7XG52YXIgZm5WYWx1ZXNOcyA9IFwiZm5WYWx1ZXNcIiArIG5vdztcbnZhciBmblJ1bGVOcyA9IFwiZm5TdHlsZVwiICsgKytub3c7XG5cbnZhciBmdW5jdGlvblBsdWdpbiA9IGZ1bmN0aW9uIGZ1bmN0aW9uUGx1Z2luKCkge1xuICByZXR1cm4ge1xuICAgIG9uQ3JlYXRlUnVsZTogZnVuY3Rpb24gb25DcmVhdGVSdWxlKG5hbWUsIGRlY2wsIG9wdGlvbnMpIHtcbiAgICAgIGlmICh0eXBlb2YgZGVjbCAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIG51bGw7XG4gICAgICB2YXIgcnVsZSA9IGpzcy5jcmVhdGVSdWxlKG5hbWUsIHt9LCBvcHRpb25zKTtcbiAgICAgIHJ1bGVbZm5SdWxlTnNdID0gZGVjbDtcbiAgICAgIHJldHVybiBydWxlO1xuICAgIH0sXG4gICAgb25Qcm9jZXNzU3R5bGU6IGZ1bmN0aW9uIG9uUHJvY2Vzc1N0eWxlKHN0eWxlLCBydWxlKSB7XG4gICAgICAvLyBXZSBuZWVkIHRvIGV4dHJhY3QgZnVuY3Rpb24gdmFsdWVzIGZyb20gdGhlIGRlY2xhcmF0aW9uLCBzbyB0aGF0IHdlIGNhbiBrZWVwIGNvcmUgdW5hd2FyZSBvZiB0aGVtLlxuICAgICAgLy8gV2UgbmVlZCB0byBkbyB0aGF0IG9ubHkgb25jZS5cbiAgICAgIC8vIFdlIGRvbid0IG5lZWQgdG8gZXh0cmFjdCBmdW5jdGlvbnMgb24gZWFjaCBzdHlsZSB1cGRhdGUsIHNpbmNlIHRoaXMgY2FuIGhhcHBlbiBvbmx5IG9uY2UuXG4gICAgICAvLyBXZSBkb24ndCBzdXBwb3J0IGZ1bmN0aW9uIHZhbHVlcyBpbnNpZGUgb2YgZnVuY3Rpb24gcnVsZXMuXG4gICAgICBpZiAoZm5WYWx1ZXNOcyBpbiBydWxlIHx8IGZuUnVsZU5zIGluIHJ1bGUpIHJldHVybiBzdHlsZTtcbiAgICAgIHZhciBmblZhbHVlcyA9IHt9O1xuXG4gICAgICBmb3IgKHZhciBwcm9wIGluIHN0eWxlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHN0eWxlW3Byb3BdO1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nKSBjb250aW51ZTtcbiAgICAgICAgZGVsZXRlIHN0eWxlW3Byb3BdO1xuICAgICAgICBmblZhbHVlc1twcm9wXSA9IHZhbHVlO1xuICAgICAgfSAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cblxuXG4gICAgICBydWxlW2ZuVmFsdWVzTnNdID0gZm5WYWx1ZXM7XG4gICAgICByZXR1cm4gc3R5bGU7XG4gICAgfSxcbiAgICBvblVwZGF0ZTogZnVuY3Rpb24gb25VcGRhdGUoZGF0YSwgcnVsZSwgc2hlZXQsIG9wdGlvbnMpIHtcbiAgICAgIHZhciBzdHlsZVJ1bGUgPSBydWxlOyAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cblxuICAgICAgdmFyIGZuUnVsZSA9IHN0eWxlUnVsZVtmblJ1bGVOc107IC8vIElmIHdlIGhhdmUgYSBzdHlsZSBmdW5jdGlvbiwgdGhlIGVudGlyZSBydWxlIGlzIGR5bmFtaWMgYW5kIHN0eWxlIG9iamVjdFxuICAgICAgLy8gd2lsbCBiZSByZXR1cm5lZCBmcm9tIHRoYXQgZnVuY3Rpb24uXG5cbiAgICAgIGlmIChmblJ1bGUpIHtcbiAgICAgICAgLy8gRW1wdHkgb2JqZWN0IHdpbGwgcmVtb3ZlIGFsbCBjdXJyZW50bHkgZGVmaW5lZCBwcm9wc1xuICAgICAgICAvLyBpbiBjYXNlIGZ1bmN0aW9uIHJ1bGUgcmV0dXJucyBhIGZhbHN5IHZhbHVlLlxuICAgICAgICBzdHlsZVJ1bGUuc3R5bGUgPSBmblJ1bGUoZGF0YSkgfHwge307XG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBzdHlsZVJ1bGUuc3R5bGUpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3R5bGVSdWxlLnN0eWxlW3Byb3BdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmdfX2RlZmF1bHRbJ2RlZmF1bHQnXShmYWxzZSwgJ1tKU1NdIEZ1bmN0aW9uIHZhbHVlcyBpbnNpZGUgZnVuY3Rpb24gcnVsZXMgYXJlIG5vdCBzdXBwb3J0ZWQuJykgOiB2b2lkIDA7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cblxuXG4gICAgICB2YXIgZm5WYWx1ZXMgPSBzdHlsZVJ1bGVbZm5WYWx1ZXNOc107IC8vIElmIHdlIGhhdmUgYSBmbiB2YWx1ZXMgbWFwLCBpdCBpcyBhIHJ1bGUgd2l0aCBmdW5jdGlvbiB2YWx1ZXMuXG5cbiAgICAgIGlmIChmblZhbHVlcykge1xuICAgICAgICBmb3IgKHZhciBfcHJvcCBpbiBmblZhbHVlcykge1xuICAgICAgICAgIHN0eWxlUnVsZS5wcm9wKF9wcm9wLCBmblZhbHVlc1tfcHJvcF0oZGF0YSksIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb25QbHVnaW47XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciB2ZW5kb3IgPSByZXF1aXJlKCdjc3MtdmVuZG9yJyk7XG52YXIganNzID0gcmVxdWlyZSgnanNzJyk7XG5cbi8qKlxuICogQWRkIHZlbmRvciBwcmVmaXggdG8gYSBwcm9wZXJ0eSBuYW1lIHdoZW4gbmVlZGVkLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24ganNzVmVuZG9yUHJlZml4ZXIoKSB7XG4gIGZ1bmN0aW9uIG9uUHJvY2Vzc1J1bGUocnVsZSkge1xuICAgIGlmIChydWxlLnR5cGUgPT09ICdrZXlmcmFtZXMnKSB7XG4gICAgICB2YXIgYXRSdWxlID0gcnVsZTtcbiAgICAgIGF0UnVsZS5hdCA9IHZlbmRvci5zdXBwb3J0ZWRLZXlmcmFtZXMoYXRSdWxlLmF0KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcmVmaXhTdHlsZShzdHlsZSkge1xuICAgIGZvciAodmFyIHByb3AgaW4gc3R5bGUpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHN0eWxlW3Byb3BdO1xuXG4gICAgICBpZiAocHJvcCA9PT0gJ2ZhbGxiYWNrcycgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgc3R5bGVbcHJvcF0gPSB2YWx1ZS5tYXAocHJlZml4U3R5bGUpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNoYW5nZVByb3AgPSBmYWxzZTtcbiAgICAgIHZhciBzdXBwb3J0ZWRQcm9wID0gdmVuZG9yLnN1cHBvcnRlZFByb3BlcnR5KHByb3ApO1xuICAgICAgaWYgKHN1cHBvcnRlZFByb3AgJiYgc3VwcG9ydGVkUHJvcCAhPT0gcHJvcCkgY2hhbmdlUHJvcCA9IHRydWU7XG4gICAgICB2YXIgY2hhbmdlVmFsdWUgPSBmYWxzZTtcbiAgICAgIHZhciBzdXBwb3J0ZWRWYWx1ZSA9IHZlbmRvci5zdXBwb3J0ZWRWYWx1ZShzdXBwb3J0ZWRQcm9wLCBqc3MudG9Dc3NWYWx1ZSh2YWx1ZSkpO1xuICAgICAgaWYgKHN1cHBvcnRlZFZhbHVlICYmIHN1cHBvcnRlZFZhbHVlICE9PSB2YWx1ZSkgY2hhbmdlVmFsdWUgPSB0cnVlO1xuXG4gICAgICBpZiAoY2hhbmdlUHJvcCB8fCBjaGFuZ2VWYWx1ZSkge1xuICAgICAgICBpZiAoY2hhbmdlUHJvcCkgZGVsZXRlIHN0eWxlW3Byb3BdO1xuICAgICAgICBzdHlsZVtzdXBwb3J0ZWRQcm9wIHx8IHByb3BdID0gc3VwcG9ydGVkVmFsdWUgfHwgdmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Qcm9jZXNzU3R5bGUoc3R5bGUsIHJ1bGUpIHtcbiAgICBpZiAocnVsZS50eXBlICE9PSAnc3R5bGUnKSByZXR1cm4gc3R5bGU7XG4gICAgcmV0dXJuIHByZWZpeFN0eWxlKHN0eWxlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlVmFsdWUodmFsdWUsIHByb3ApIHtcbiAgICByZXR1cm4gdmVuZG9yLnN1cHBvcnRlZFZhbHVlKHByb3AsIGpzcy50b0Nzc1ZhbHVlKHZhbHVlKSkgfHwgdmFsdWU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG9uUHJvY2Vzc1J1bGU6IG9uUHJvY2Vzc1J1bGUsXG4gICAgb25Qcm9jZXNzU3R5bGU6IG9uUHJvY2Vzc1N0eWxlLFxuICAgIG9uQ2hhbmdlVmFsdWU6IG9uQ2hhbmdlVmFsdWVcbiAgfTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0ganNzVmVuZG9yUHJlZml4ZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBfZXh0ZW5kcyA9IHJlcXVpcmUoJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xudmFyIGlzSW5Ccm93c2VyID0gcmVxdWlyZSgnaXMtaW4tYnJvd3NlcicpO1xudmFyIHdhcm5pbmcgPSByZXF1aXJlKCd0aW55LXdhcm5pbmcnKTtcbnZhciBfY3JlYXRlQ2xhc3MgPSByZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG52YXIgX2luaGVyaXRzTG9vc2UgPSByZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzTG9vc2UnKTtcbnZhciBfYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQnKTtcbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSA9IHJlcXVpcmUoJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZScpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcERlZmF1bHRMZWdhY3kgKGUpIHsgcmV0dXJuIGUgJiYgdHlwZW9mIGUgPT09ICdvYmplY3QnICYmICdkZWZhdWx0JyBpbiBlID8gZSA6IHsgJ2RlZmF1bHQnOiBlIH07IH1cblxudmFyIF9leHRlbmRzX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdExlZ2FjeShfZXh0ZW5kcyk7XG52YXIgaXNJbkJyb3dzZXJfX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BEZWZhdWx0TGVnYWN5KGlzSW5Ccm93c2VyKTtcbnZhciB3YXJuaW5nX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdExlZ2FjeSh3YXJuaW5nKTtcbnZhciBfY3JlYXRlQ2xhc3NfX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BEZWZhdWx0TGVnYWN5KF9jcmVhdGVDbGFzcyk7XG52YXIgX2luaGVyaXRzTG9vc2VfX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BEZWZhdWx0TGVnYWN5KF9pbmhlcml0c0xvb3NlKTtcbnZhciBfYXNzZXJ0VGhpc0luaXRpYWxpemVkX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdExlZ2FjeShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKTtcbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZV9fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHRMZWdhY3koX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UpO1xuXG52YXIgcGxhaW5PYmplY3RDb25zdHJ1cmN0b3IgPSB7fS5jb25zdHJ1Y3RvcjtcbmZ1bmN0aW9uIGNsb25lU3R5bGUoc3R5bGUpIHtcbiAgaWYgKHN0eWxlID09IG51bGwgfHwgdHlwZW9mIHN0eWxlICE9PSAnb2JqZWN0JykgcmV0dXJuIHN0eWxlO1xuICBpZiAoQXJyYXkuaXNBcnJheShzdHlsZSkpIHJldHVybiBzdHlsZS5tYXAoY2xvbmVTdHlsZSk7XG4gIGlmIChzdHlsZS5jb25zdHJ1Y3RvciAhPT0gcGxhaW5PYmplY3RDb25zdHJ1cmN0b3IpIHJldHVybiBzdHlsZTtcbiAgdmFyIG5ld1N0eWxlID0ge307XG5cbiAgZm9yICh2YXIgbmFtZSBpbiBzdHlsZSkge1xuICAgIG5ld1N0eWxlW25hbWVdID0gY2xvbmVTdHlsZShzdHlsZVtuYW1lXSk7XG4gIH1cblxuICByZXR1cm4gbmV3U3R5bGU7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgcnVsZSBpbnN0YW5jZS5cbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVSdWxlKG5hbWUsIGRlY2wsIG9wdGlvbnMpIHtcbiAgaWYgKG5hbWUgPT09IHZvaWQgMCkge1xuICAgIG5hbWUgPSAndW5uYW1lZCc7XG4gIH1cblxuICB2YXIganNzID0gb3B0aW9ucy5qc3M7XG4gIHZhciBkZWNsQ29weSA9IGNsb25lU3R5bGUoZGVjbCk7XG4gIHZhciBydWxlID0ganNzLnBsdWdpbnMub25DcmVhdGVSdWxlKG5hbWUsIGRlY2xDb3B5LCBvcHRpb25zKTtcbiAgaWYgKHJ1bGUpIHJldHVybiBydWxlOyAvLyBJdCBpcyBhbiBhdC1ydWxlIGFuZCBpdCBoYXMgbm8gaW5zdGFuY2UuXG5cbiAgaWYgKG5hbWVbMF0gPT09ICdAJykge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmdfX2RlZmF1bHRbJ2RlZmF1bHQnXShmYWxzZSwgXCJbSlNTXSBVbmtub3duIHJ1bGUgXCIgKyBuYW1lKSA6IHZvaWQgMDtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgam9pbiA9IGZ1bmN0aW9uIGpvaW4odmFsdWUsIGJ5KSB7XG4gIHZhciByZXN1bHQgPSAnJztcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gUmVtb3ZlICFpbXBvcnRhbnQgZnJvbSB0aGUgdmFsdWUsIGl0IHdpbGwgYmUgcmVhZGRlZCBsYXRlci5cbiAgICBpZiAodmFsdWVbaV0gPT09ICchaW1wb3J0YW50JykgYnJlYWs7XG4gICAgaWYgKHJlc3VsdCkgcmVzdWx0ICs9IGJ5O1xuICAgIHJlc3VsdCArPSB2YWx1ZVtpXTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIENvbnZlcnRzIGFycmF5IHZhbHVlcyB0byBzdHJpbmcuXG4gKlxuICogYG1hcmdpbjogW1snNXB4JywgJzEwcHgnXV1gID4gYG1hcmdpbjogNXB4IDEwcHg7YFxuICogYGJvcmRlcjogWycxcHgnLCAnMnB4J11gID4gYGJvcmRlcjogMXB4LCAycHg7YFxuICogYG1hcmdpbjogW1snNXB4JywgJzEwcHgnXSwgJyFpbXBvcnRhbnQnXWAgPiBgbWFyZ2luOiA1cHggMTBweCAhaW1wb3J0YW50O2BcbiAqIGBjb2xvcjogWydyZWQnLCAhaW1wb3J0YW50XWAgPiBgY29sb3I6IHJlZCAhaW1wb3J0YW50O2BcbiAqL1xudmFyIHRvQ3NzVmFsdWUgPSBmdW5jdGlvbiB0b0Nzc1ZhbHVlKHZhbHVlLCBpZ25vcmVJbXBvcnRhbnQpIHtcbiAgaWYgKGlnbm9yZUltcG9ydGFudCA9PT0gdm9pZCAwKSB7XG4gICAgaWdub3JlSW1wb3J0YW50ID0gZmFsc2U7XG4gIH1cblxuICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gIHZhciBjc3NWYWx1ZSA9ICcnOyAvLyBTdXBwb3J0IHNwYWNlIHNlcGFyYXRlZCB2YWx1ZXMgdmlhIGBbWyc1cHgnLCAnMTBweCddXWAuXG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWVbMF0pKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHZhbHVlW2ldID09PSAnIWltcG9ydGFudCcpIGJyZWFrO1xuICAgICAgaWYgKGNzc1ZhbHVlKSBjc3NWYWx1ZSArPSAnLCAnO1xuICAgICAgY3NzVmFsdWUgKz0gam9pbih2YWx1ZVtpXSwgJyAnKTtcbiAgICB9XG4gIH0gZWxzZSBjc3NWYWx1ZSA9IGpvaW4odmFsdWUsICcsICcpOyAvLyBBZGQgIWltcG9ydGFudCwgYmVjYXVzZSBpdCB3YXMgaWdub3JlZC5cblxuXG4gIGlmICghaWdub3JlSW1wb3J0YW50ICYmIHZhbHVlW3ZhbHVlLmxlbmd0aCAtIDFdID09PSAnIWltcG9ydGFudCcpIHtcbiAgICBjc3NWYWx1ZSArPSAnICFpbXBvcnRhbnQnO1xuICB9XG5cbiAgcmV0dXJuIGNzc1ZhbHVlO1xufTtcblxuLyoqXG4gKiBJbmRlbnQgYSBzdHJpbmcuXG4gKiBodHRwOi8vanNwZXJmLmNvbS9hcnJheS1qb2luLXZzLWZvclxuICovXG5mdW5jdGlvbiBpbmRlbnRTdHIoc3RyLCBpbmRlbnQpIHtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuXG4gIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBpbmRlbnQ7IGluZGV4KyspIHtcbiAgICByZXN1bHQgKz0gJyAgJztcbiAgfVxuXG4gIHJldHVybiByZXN1bHQgKyBzdHI7XG59XG4vKipcbiAqIENvbnZlcnRzIGEgUnVsZSB0byBDU1Mgc3RyaW5nLlxuICovXG5cblxuZnVuY3Rpb24gdG9Dc3Moc2VsZWN0b3IsIHN0eWxlLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgcmVzdWx0ID0gJyc7XG4gIGlmICghc3R5bGUpIHJldHVybiByZXN1bHQ7XG4gIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMsXG4gICAgICBfb3B0aW9ucyRpbmRlbnQgPSBfb3B0aW9ucy5pbmRlbnQsXG4gICAgICBpbmRlbnQgPSBfb3B0aW9ucyRpbmRlbnQgPT09IHZvaWQgMCA/IDAgOiBfb3B0aW9ucyRpbmRlbnQ7XG4gIHZhciBmYWxsYmFja3MgPSBzdHlsZS5mYWxsYmFja3M7XG4gIGlmIChzZWxlY3RvcikgaW5kZW50Kys7IC8vIEFwcGx5IGZhbGxiYWNrcyBmaXJzdC5cblxuICBpZiAoZmFsbGJhY2tzKSB7XG4gICAgLy8gQXJyYXkgc3ludGF4IHtmYWxsYmFja3M6IFt7cHJvcDogdmFsdWV9XX1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShmYWxsYmFja3MpKSB7XG4gICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgZmFsbGJhY2tzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICB2YXIgZmFsbGJhY2sgPSBmYWxsYmFja3NbaW5kZXhdO1xuXG4gICAgICAgIGZvciAodmFyIHByb3AgaW4gZmFsbGJhY2spIHtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBmYWxsYmFja1twcm9wXTtcblxuICAgICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSByZXN1bHQgKz0gJ1xcbic7XG4gICAgICAgICAgICByZXN1bHQgKz0gaW5kZW50U3RyKHByb3AgKyBcIjogXCIgKyB0b0Nzc1ZhbHVlKHZhbHVlKSArIFwiO1wiLCBpbmRlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBPYmplY3Qgc3ludGF4IHtmYWxsYmFja3M6IHtwcm9wOiB2YWx1ZX19XG4gICAgICBmb3IgKHZhciBfcHJvcCBpbiBmYWxsYmFja3MpIHtcbiAgICAgICAgdmFyIF92YWx1ZSA9IGZhbGxiYWNrc1tfcHJvcF07XG5cbiAgICAgICAgaWYgKF92YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgaWYgKHJlc3VsdCkgcmVzdWx0ICs9ICdcXG4nO1xuICAgICAgICAgIHJlc3VsdCArPSBpbmRlbnRTdHIoX3Byb3AgKyBcIjogXCIgKyB0b0Nzc1ZhbHVlKF92YWx1ZSkgKyBcIjtcIiwgaW5kZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIF9wcm9wMiBpbiBzdHlsZSkge1xuICAgIHZhciBfdmFsdWUyID0gc3R5bGVbX3Byb3AyXTtcblxuICAgIGlmIChfdmFsdWUyICE9IG51bGwgJiYgX3Byb3AyICE9PSAnZmFsbGJhY2tzJykge1xuICAgICAgaWYgKHJlc3VsdCkgcmVzdWx0ICs9ICdcXG4nO1xuICAgICAgcmVzdWx0ICs9IGluZGVudFN0cihfcHJvcDIgKyBcIjogXCIgKyB0b0Nzc1ZhbHVlKF92YWx1ZTIpICsgXCI7XCIsIGluZGVudCk7XG4gICAgfVxuICB9IC8vIEFsbG93IGVtcHR5IHN0eWxlIGluIHRoaXMgY2FzZSwgYmVjYXVzZSBwcm9wZXJ0aWVzIHdpbGwgYmUgYWRkZWQgZHluYW1pY2FsbHkuXG5cblxuICBpZiAoIXJlc3VsdCAmJiAhb3B0aW9ucy5hbGxvd0VtcHR5KSByZXR1cm4gcmVzdWx0OyAvLyBXaGVuIHJ1bGUgaXMgYmVpbmcgc3RyaW5naWZpZWQgYmVmb3JlIHNlbGVjdG9yIHdhcyBkZWZpbmVkLlxuXG4gIGlmICghc2VsZWN0b3IpIHJldHVybiByZXN1bHQ7XG4gIGluZGVudC0tO1xuICBpZiAocmVzdWx0KSByZXN1bHQgPSBcIlxcblwiICsgcmVzdWx0ICsgXCJcXG5cIjtcbiAgcmV0dXJuIGluZGVudFN0cihzZWxlY3RvciArIFwiIHtcIiArIHJlc3VsdCwgaW5kZW50KSArIGluZGVudFN0cignfScsIGluZGVudCk7XG59XG5cbnZhciBlc2NhcGVSZWdleCA9IC8oW1tcXF0uIyokPjwrfj18XjooKSxcIidgXFxzXSkvZztcbnZhciBuYXRpdmVFc2NhcGUgPSB0eXBlb2YgQ1NTICE9PSAndW5kZWZpbmVkJyAmJiBDU1MuZXNjYXBlO1xudmFyIGVzY2FwZSA9IChmdW5jdGlvbiAoc3RyKSB7XG4gIHJldHVybiBuYXRpdmVFc2NhcGUgPyBuYXRpdmVFc2NhcGUoc3RyKSA6IHN0ci5yZXBsYWNlKGVzY2FwZVJlZ2V4LCAnXFxcXCQxJyk7XG59KTtcblxudmFyIEJhc2VTdHlsZVJ1bGUgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBCYXNlU3R5bGVSdWxlKGtleSwgc3R5bGUsIG9wdGlvbnMpIHtcbiAgICB0aGlzLnR5cGUgPSAnc3R5bGUnO1xuICAgIHRoaXMua2V5ID0gdm9pZCAwO1xuICAgIHRoaXMuaXNQcm9jZXNzZWQgPSBmYWxzZTtcbiAgICB0aGlzLnN0eWxlID0gdm9pZCAwO1xuICAgIHRoaXMucmVuZGVyZXIgPSB2b2lkIDA7XG4gICAgdGhpcy5yZW5kZXJhYmxlID0gdm9pZCAwO1xuICAgIHRoaXMub3B0aW9ucyA9IHZvaWQgMDtcbiAgICB2YXIgc2hlZXQgPSBvcHRpb25zLnNoZWV0LFxuICAgICAgICBSZW5kZXJlciA9IG9wdGlvbnMuUmVuZGVyZXI7XG4gICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLnN0eWxlID0gc3R5bGU7XG4gICAgaWYgKHNoZWV0KSB0aGlzLnJlbmRlcmVyID0gc2hlZXQucmVuZGVyZXI7ZWxzZSBpZiAoUmVuZGVyZXIpIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoKTtcbiAgfVxuICAvKipcbiAgICogR2V0IG9yIHNldCBhIHN0eWxlIHByb3BlcnR5LlxuICAgKi9cblxuXG4gIHZhciBfcHJvdG8gPSBCYXNlU3R5bGVSdWxlLnByb3RvdHlwZTtcblxuICBfcHJvdG8ucHJvcCA9IGZ1bmN0aW9uIHByb3AobmFtZSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICAvLyBJdCdzIGEgZ2V0dGVyLlxuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcy5zdHlsZVtuYW1lXTsgLy8gRG9uJ3QgZG8gYW55dGhpbmcgaWYgdGhlIHZhbHVlIGhhcyBub3QgY2hhbmdlZC5cblxuICAgIHZhciBmb3JjZSA9IG9wdGlvbnMgPyBvcHRpb25zLmZvcmNlIDogZmFsc2U7XG4gICAgaWYgKCFmb3JjZSAmJiB0aGlzLnN0eWxlW25hbWVdID09PSB2YWx1ZSkgcmV0dXJuIHRoaXM7XG4gICAgdmFyIG5ld1ZhbHVlID0gdmFsdWU7XG5cbiAgICBpZiAoIW9wdGlvbnMgfHwgb3B0aW9ucy5wcm9jZXNzICE9PSBmYWxzZSkge1xuICAgICAgbmV3VmFsdWUgPSB0aGlzLm9wdGlvbnMuanNzLnBsdWdpbnMub25DaGFuZ2VWYWx1ZSh2YWx1ZSwgbmFtZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgdmFyIGlzRW1wdHkgPSBuZXdWYWx1ZSA9PSBudWxsIHx8IG5ld1ZhbHVlID09PSBmYWxzZTtcbiAgICB2YXIgaXNEZWZpbmVkID0gbmFtZSBpbiB0aGlzLnN0eWxlOyAvLyBWYWx1ZSBpcyBlbXB0eSBhbmQgd2Fzbid0IGRlZmluZWQgYmVmb3JlLlxuXG4gICAgaWYgKGlzRW1wdHkgJiYgIWlzRGVmaW5lZCAmJiAhZm9yY2UpIHJldHVybiB0aGlzOyAvLyBXZSBhcmUgZ29pbmcgdG8gcmVtb3ZlIHRoaXMgdmFsdWUuXG5cbiAgICB2YXIgcmVtb3ZlID0gaXNFbXB0eSAmJiBpc0RlZmluZWQ7XG4gICAgaWYgKHJlbW92ZSkgZGVsZXRlIHRoaXMuc3R5bGVbbmFtZV07ZWxzZSB0aGlzLnN0eWxlW25hbWVdID0gbmV3VmFsdWU7IC8vIFJlbmRlcmFibGUgaXMgZGVmaW5lZCBpZiBTdHlsZVNoZWV0IG9wdGlvbiBgbGlua2AgaXMgdHJ1ZS5cblxuICAgIGlmICh0aGlzLnJlbmRlcmFibGUgJiYgdGhpcy5yZW5kZXJlcikge1xuICAgICAgaWYgKHJlbW92ZSkgdGhpcy5yZW5kZXJlci5yZW1vdmVQcm9wZXJ0eSh0aGlzLnJlbmRlcmFibGUsIG5hbWUpO2Vsc2UgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLnJlbmRlcmFibGUsIG5hbWUsIG5ld1ZhbHVlKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHZhciBzaGVldCA9IHRoaXMub3B0aW9ucy5zaGVldDtcblxuICAgIGlmIChzaGVldCAmJiBzaGVldC5hdHRhY2hlZCkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZ19fZGVmYXVsdFsnZGVmYXVsdCddKGZhbHNlLCAnW0pTU10gUnVsZSBpcyBub3QgbGlua2VkLiBNaXNzaW5nIHNoZWV0IG9wdGlvbiBcImxpbms6IHRydWVcIi4nKSA6IHZvaWQgMDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICByZXR1cm4gQmFzZVN0eWxlUnVsZTtcbn0oKTtcbnZhciBTdHlsZVJ1bGUgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9CYXNlU3R5bGVSdWxlKSB7XG4gIF9pbmhlcml0c0xvb3NlX19kZWZhdWx0WydkZWZhdWx0J10oU3R5bGVSdWxlLCBfQmFzZVN0eWxlUnVsZSk7XG5cbiAgZnVuY3Rpb24gU3R5bGVSdWxlKGtleSwgc3R5bGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9CYXNlU3R5bGVSdWxlLmNhbGwodGhpcywga2V5LCBzdHlsZSwgb3B0aW9ucykgfHwgdGhpcztcbiAgICBfdGhpcy5zZWxlY3RvclRleHQgPSB2b2lkIDA7XG4gICAgX3RoaXMuaWQgPSB2b2lkIDA7XG4gICAgX3RoaXMucmVuZGVyYWJsZSA9IHZvaWQgMDtcbiAgICB2YXIgc2VsZWN0b3IgPSBvcHRpb25zLnNlbGVjdG9yLFxuICAgICAgICBzY29wZWQgPSBvcHRpb25zLnNjb3BlZCxcbiAgICAgICAgc2hlZXQgPSBvcHRpb25zLnNoZWV0LFxuICAgICAgICBnZW5lcmF0ZUlkID0gb3B0aW9ucy5nZW5lcmF0ZUlkO1xuXG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICBfdGhpcy5zZWxlY3RvclRleHQgPSBzZWxlY3RvcjtcbiAgICB9IGVsc2UgaWYgKHNjb3BlZCAhPT0gZmFsc2UpIHtcbiAgICAgIF90aGlzLmlkID0gZ2VuZXJhdGVJZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkX19kZWZhdWx0WydkZWZhdWx0J10oX2Fzc2VydFRoaXNJbml0aWFsaXplZF9fZGVmYXVsdFsnZGVmYXVsdCddKF90aGlzKSksIHNoZWV0KTtcbiAgICAgIF90aGlzLnNlbGVjdG9yVGV4dCA9IFwiLlwiICsgZXNjYXBlKF90aGlzLmlkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgLyoqXG4gICAqIFNldCBzZWxlY3RvciBzdHJpbmcuXG4gICAqIEF0dGVudGlvbjogdXNlIHRoaXMgd2l0aCBjYXV0aW9uLiBNb3N0IGJyb3dzZXJzIGRpZG4ndCBpbXBsZW1lbnRcbiAgICogc2VsZWN0b3JUZXh0IHNldHRlciwgc28gdGhpcyBtYXkgcmVzdWx0IGluIHJlcmVuZGVyaW5nIG9mIGVudGlyZSBTdHlsZSBTaGVldC5cbiAgICovXG5cblxuICB2YXIgX3Byb3RvMiA9IFN0eWxlUnVsZS5wcm90b3R5cGU7XG5cbiAgLyoqXG4gICAqIEFwcGx5IHJ1bGUgdG8gYW4gZWxlbWVudCBpbmxpbmUuXG4gICAqL1xuICBfcHJvdG8yLmFwcGx5VG8gPSBmdW5jdGlvbiBhcHBseVRvKHJlbmRlcmFibGUpIHtcbiAgICB2YXIgcmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyO1xuXG4gICAgaWYgKHJlbmRlcmVyKSB7XG4gICAgICB2YXIganNvbiA9IHRoaXMudG9KU09OKCk7XG5cbiAgICAgIGZvciAodmFyIHByb3AgaW4ganNvbikge1xuICAgICAgICByZW5kZXJlci5zZXRQcm9wZXJ0eShyZW5kZXJhYmxlLCBwcm9wLCBqc29uW3Byb3BdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBydWxlLlxuICAgKiBGYWxsYmFja3MgYXJlIG5vdCBzdXBwb3J0ZWQuXG4gICAqIFVzZWZ1bCBmb3IgaW5saW5lIHN0eWxlcy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8yLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICB2YXIganNvbiA9IHt9O1xuXG4gICAgZm9yICh2YXIgcHJvcCBpbiB0aGlzLnN0eWxlKSB7XG4gICAgICB2YXIgdmFsdWUgPSB0aGlzLnN0eWxlW3Byb3BdO1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIGpzb25bcHJvcF0gPSB2YWx1ZTtlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkganNvbltwcm9wXSA9IHRvQ3NzVmFsdWUodmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiBqc29uO1xuICB9XG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgYSBDU1Mgc3RyaW5nLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90bzIudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyhvcHRpb25zKSB7XG4gICAgdmFyIHNoZWV0ID0gdGhpcy5vcHRpb25zLnNoZWV0O1xuICAgIHZhciBsaW5rID0gc2hlZXQgPyBzaGVldC5vcHRpb25zLmxpbmsgOiBmYWxzZTtcbiAgICB2YXIgb3B0cyA9IGxpbmsgPyBfZXh0ZW5kc19fZGVmYXVsdFsnZGVmYXVsdCddKHt9LCBvcHRpb25zLCB7XG4gICAgICBhbGxvd0VtcHR5OiB0cnVlXG4gICAgfSkgOiBvcHRpb25zO1xuICAgIHJldHVybiB0b0Nzcyh0aGlzLnNlbGVjdG9yVGV4dCwgdGhpcy5zdHlsZSwgb3B0cyk7XG4gIH07XG5cbiAgX2NyZWF0ZUNsYXNzX19kZWZhdWx0WydkZWZhdWx0J10oU3R5bGVSdWxlLCBbe1xuICAgIGtleTogXCJzZWxlY3RvclwiLFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHNlbGVjdG9yKSB7XG4gICAgICBpZiAoc2VsZWN0b3IgPT09IHRoaXMuc2VsZWN0b3JUZXh0KSByZXR1cm47XG4gICAgICB0aGlzLnNlbGVjdG9yVGV4dCA9IHNlbGVjdG9yO1xuICAgICAgdmFyIHJlbmRlcmVyID0gdGhpcy5yZW5kZXJlcixcbiAgICAgICAgICByZW5kZXJhYmxlID0gdGhpcy5yZW5kZXJhYmxlO1xuICAgICAgaWYgKCFyZW5kZXJhYmxlIHx8ICFyZW5kZXJlcikgcmV0dXJuO1xuICAgICAgdmFyIGhhc0NoYW5nZWQgPSByZW5kZXJlci5zZXRTZWxlY3RvcihyZW5kZXJhYmxlLCBzZWxlY3Rvcik7IC8vIElmIHNlbGVjdG9yIHNldHRlciBpcyBub3QgaW1wbGVtZW50ZWQsIHJlcmVuZGVyIHRoZSBydWxlLlxuXG4gICAgICBpZiAoIWhhc0NoYW5nZWQpIHtcbiAgICAgICAgcmVuZGVyZXIucmVwbGFjZVJ1bGUocmVuZGVyYWJsZSwgdGhpcyk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBzZWxlY3RvciBzdHJpbmcuXG4gICAgICovXG4gICAgLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0b3JUZXh0O1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTdHlsZVJ1bGU7XG59KEJhc2VTdHlsZVJ1bGUpO1xudmFyIHBsdWdpblN0eWxlUnVsZSA9IHtcbiAgb25DcmVhdGVSdWxlOiBmdW5jdGlvbiBvbkNyZWF0ZVJ1bGUobmFtZSwgc3R5bGUsIG9wdGlvbnMpIHtcbiAgICBpZiAobmFtZVswXSA9PT0gJ0AnIHx8IG9wdGlvbnMucGFyZW50ICYmIG9wdGlvbnMucGFyZW50LnR5cGUgPT09ICdrZXlmcmFtZXMnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFN0eWxlUnVsZShuYW1lLCBzdHlsZSwgb3B0aW9ucyk7XG4gIH1cbn07XG5cbnZhciBkZWZhdWx0VG9TdHJpbmdPcHRpb25zID0ge1xuICBpbmRlbnQ6IDEsXG4gIGNoaWxkcmVuOiB0cnVlXG59O1xudmFyIGF0UmVnRXhwID0gL0AoW1xcdy1dKykvO1xuLyoqXG4gKiBDb25kaXRpb25hbCBydWxlIGZvciBAbWVkaWEsIEBzdXBwb3J0c1xuICovXG5cbnZhciBDb25kaXRpb25hbFJ1bGUgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBDb25kaXRpb25hbFJ1bGUoa2V5LCBzdHlsZXMsIG9wdGlvbnMpIHtcbiAgICB0aGlzLnR5cGUgPSAnY29uZGl0aW9uYWwnO1xuICAgIHRoaXMuYXQgPSB2b2lkIDA7XG4gICAgdGhpcy5rZXkgPSB2b2lkIDA7XG4gICAgdGhpcy5xdWVyeSA9IHZvaWQgMDtcbiAgICB0aGlzLnJ1bGVzID0gdm9pZCAwO1xuICAgIHRoaXMub3B0aW9ucyA9IHZvaWQgMDtcbiAgICB0aGlzLmlzUHJvY2Vzc2VkID0gZmFsc2U7XG4gICAgdGhpcy5yZW5kZXJhYmxlID0gdm9pZCAwO1xuICAgIHRoaXMua2V5ID0ga2V5O1xuICAgIHZhciBhdE1hdGNoID0ga2V5Lm1hdGNoKGF0UmVnRXhwKTtcbiAgICB0aGlzLmF0ID0gYXRNYXRjaCA/IGF0TWF0Y2hbMV0gOiAndW5rbm93bic7IC8vIEtleSBtaWdodCBjb250YWluIGEgdW5pcXVlIHN1ZmZpeCBpbiBjYXNlIHRoZSBgbmFtZWAgcGFzc2VkIGJ5IHVzZXIgd2FzIGR1cGxpY2F0ZS5cblxuICAgIHRoaXMucXVlcnkgPSBvcHRpb25zLm5hbWUgfHwgXCJAXCIgKyB0aGlzLmF0O1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5ydWxlcyA9IG5ldyBSdWxlTGlzdChfZXh0ZW5kc19fZGVmYXVsdFsnZGVmYXVsdCddKHt9LCBvcHRpb25zLCB7XG4gICAgICBwYXJlbnQ6IHRoaXNcbiAgICB9KSk7XG5cbiAgICBmb3IgKHZhciBuYW1lIGluIHN0eWxlcykge1xuICAgICAgdGhpcy5ydWxlcy5hZGQobmFtZSwgc3R5bGVzW25hbWVdKTtcbiAgICB9XG5cbiAgICB0aGlzLnJ1bGVzLnByb2Nlc3MoKTtcbiAgfVxuICAvKipcbiAgICogR2V0IGEgcnVsZS5cbiAgICovXG5cblxuICB2YXIgX3Byb3RvID0gQ29uZGl0aW9uYWxSdWxlLnByb3RvdHlwZTtcblxuICBfcHJvdG8uZ2V0UnVsZSA9IGZ1bmN0aW9uIGdldFJ1bGUobmFtZSkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVzLmdldChuYW1lKTtcbiAgfVxuICAvKipcbiAgICogR2V0IGluZGV4IG9mIGEgcnVsZS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uaW5kZXhPZiA9IGZ1bmN0aW9uIGluZGV4T2YocnVsZSkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVzLmluZGV4T2YocnVsZSk7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZSBhbmQgcmVnaXN0ZXIgcnVsZSwgcnVuIHBsdWdpbnMuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmFkZFJ1bGUgPSBmdW5jdGlvbiBhZGRSdWxlKG5hbWUsIHN0eWxlLCBvcHRpb25zKSB7XG4gICAgdmFyIHJ1bGUgPSB0aGlzLnJ1bGVzLmFkZChuYW1lLCBzdHlsZSwgb3B0aW9ucyk7XG4gICAgaWYgKCFydWxlKSByZXR1cm4gbnVsbDtcbiAgICB0aGlzLm9wdGlvbnMuanNzLnBsdWdpbnMub25Qcm9jZXNzUnVsZShydWxlKTtcbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuICAvKipcbiAgICogR2VuZXJhdGVzIGEgQ1NTIHN0cmluZy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyhvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IGRlZmF1bHRUb1N0cmluZ09wdGlvbnM7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuaW5kZW50ID09IG51bGwpIG9wdGlvbnMuaW5kZW50ID0gZGVmYXVsdFRvU3RyaW5nT3B0aW9ucy5pbmRlbnQ7XG4gICAgaWYgKG9wdGlvbnMuY2hpbGRyZW4gPT0gbnVsbCkgb3B0aW9ucy5jaGlsZHJlbiA9IGRlZmF1bHRUb1N0cmluZ09wdGlvbnMuY2hpbGRyZW47XG5cbiAgICBpZiAob3B0aW9ucy5jaGlsZHJlbiA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiB0aGlzLnF1ZXJ5ICsgXCIge31cIjtcbiAgICB9XG5cbiAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLnJ1bGVzLnRvU3RyaW5nKG9wdGlvbnMpO1xuICAgIHJldHVybiBjaGlsZHJlbiA/IHRoaXMucXVlcnkgKyBcIiB7XFxuXCIgKyBjaGlsZHJlbiArIFwiXFxufVwiIDogJyc7XG4gIH07XG5cbiAgcmV0dXJuIENvbmRpdGlvbmFsUnVsZTtcbn0oKTtcbnZhciBrZXlSZWdFeHAgPSAvQG1lZGlhfEBzdXBwb3J0c1xccysvO1xudmFyIHBsdWdpbkNvbmRpdGlvbmFsUnVsZSA9IHtcbiAgb25DcmVhdGVSdWxlOiBmdW5jdGlvbiBvbkNyZWF0ZVJ1bGUoa2V5LCBzdHlsZXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4ga2V5UmVnRXhwLnRlc3Qoa2V5KSA/IG5ldyBDb25kaXRpb25hbFJ1bGUoa2V5LCBzdHlsZXMsIG9wdGlvbnMpIDogbnVsbDtcbiAgfVxufTtcblxudmFyIGRlZmF1bHRUb1N0cmluZ09wdGlvbnMkMSA9IHtcbiAgaW5kZW50OiAxLFxuICBjaGlsZHJlbjogdHJ1ZVxufTtcbnZhciBuYW1lUmVnRXhwID0gL0BrZXlmcmFtZXNcXHMrKFtcXHctXSspLztcbi8qKlxuICogUnVsZSBmb3IgQGtleWZyYW1lc1xuICovXG5cbnZhciBLZXlmcmFtZXNSdWxlID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gS2V5ZnJhbWVzUnVsZShrZXksIGZyYW1lcywgb3B0aW9ucykge1xuICAgIHRoaXMudHlwZSA9ICdrZXlmcmFtZXMnO1xuICAgIHRoaXMuYXQgPSAnQGtleWZyYW1lcyc7XG4gICAgdGhpcy5rZXkgPSB2b2lkIDA7XG4gICAgdGhpcy5uYW1lID0gdm9pZCAwO1xuICAgIHRoaXMuaWQgPSB2b2lkIDA7XG4gICAgdGhpcy5ydWxlcyA9IHZvaWQgMDtcbiAgICB0aGlzLm9wdGlvbnMgPSB2b2lkIDA7XG4gICAgdGhpcy5pc1Byb2Nlc3NlZCA9IGZhbHNlO1xuICAgIHRoaXMucmVuZGVyYWJsZSA9IHZvaWQgMDtcbiAgICB2YXIgbmFtZU1hdGNoID0ga2V5Lm1hdGNoKG5hbWVSZWdFeHApO1xuXG4gICAgaWYgKG5hbWVNYXRjaCAmJiBuYW1lTWF0Y2hbMV0pIHtcbiAgICAgIHRoaXMubmFtZSA9IG5hbWVNYXRjaFsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5uYW1lID0gJ25vbmFtZSc7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nX19kZWZhdWx0WydkZWZhdWx0J10oZmFsc2UsIFwiW0pTU10gQmFkIGtleWZyYW1lcyBuYW1lIFwiICsga2V5KSA6IHZvaWQgMDtcbiAgICB9XG5cbiAgICB0aGlzLmtleSA9IHRoaXMudHlwZSArIFwiLVwiICsgdGhpcy5uYW1lO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdmFyIHNjb3BlZCA9IG9wdGlvbnMuc2NvcGVkLFxuICAgICAgICBzaGVldCA9IG9wdGlvbnMuc2hlZXQsXG4gICAgICAgIGdlbmVyYXRlSWQgPSBvcHRpb25zLmdlbmVyYXRlSWQ7XG4gICAgdGhpcy5pZCA9IHNjb3BlZCA9PT0gZmFsc2UgPyB0aGlzLm5hbWUgOiBlc2NhcGUoZ2VuZXJhdGVJZCh0aGlzLCBzaGVldCkpO1xuICAgIHRoaXMucnVsZXMgPSBuZXcgUnVsZUxpc3QoX2V4dGVuZHNfX2RlZmF1bHRbJ2RlZmF1bHQnXSh7fSwgb3B0aW9ucywge1xuICAgICAgcGFyZW50OiB0aGlzXG4gICAgfSkpO1xuXG4gICAgZm9yICh2YXIgbmFtZSBpbiBmcmFtZXMpIHtcbiAgICAgIHRoaXMucnVsZXMuYWRkKG5hbWUsIGZyYW1lc1tuYW1lXSwgX2V4dGVuZHNfX2RlZmF1bHRbJ2RlZmF1bHQnXSh7fSwgb3B0aW9ucywge1xuICAgICAgICBwYXJlbnQ6IHRoaXNcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICB0aGlzLnJ1bGVzLnByb2Nlc3MoKTtcbiAgfVxuICAvKipcbiAgICogR2VuZXJhdGVzIGEgQ1NTIHN0cmluZy5cbiAgICovXG5cblxuICB2YXIgX3Byb3RvID0gS2V5ZnJhbWVzUnVsZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSBkZWZhdWx0VG9TdHJpbmdPcHRpb25zJDE7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuaW5kZW50ID09IG51bGwpIG9wdGlvbnMuaW5kZW50ID0gZGVmYXVsdFRvU3RyaW5nT3B0aW9ucyQxLmluZGVudDtcbiAgICBpZiAob3B0aW9ucy5jaGlsZHJlbiA9PSBudWxsKSBvcHRpb25zLmNoaWxkcmVuID0gZGVmYXVsdFRvU3RyaW5nT3B0aW9ucyQxLmNoaWxkcmVuO1xuXG4gICAgaWYgKG9wdGlvbnMuY2hpbGRyZW4gPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5hdCArIFwiIFwiICsgdGhpcy5pZCArIFwiIHt9XCI7XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkcmVuID0gdGhpcy5ydWxlcy50b1N0cmluZyhvcHRpb25zKTtcbiAgICBpZiAoY2hpbGRyZW4pIGNoaWxkcmVuID0gXCJcXG5cIiArIGNoaWxkcmVuICsgXCJcXG5cIjtcbiAgICByZXR1cm4gdGhpcy5hdCArIFwiIFwiICsgdGhpcy5pZCArIFwiIHtcIiArIGNoaWxkcmVuICsgXCJ9XCI7XG4gIH07XG5cbiAgcmV0dXJuIEtleWZyYW1lc1J1bGU7XG59KCk7XG52YXIga2V5UmVnRXhwJDEgPSAvQGtleWZyYW1lc1xccysvO1xudmFyIHJlZlJlZ0V4cCA9IC9cXCQoW1xcdy1dKykvZztcblxudmFyIGZpbmRSZWZlcmVuY2VkS2V5ZnJhbWUgPSBmdW5jdGlvbiBmaW5kUmVmZXJlbmNlZEtleWZyYW1lKHZhbCwga2V5ZnJhbWVzKSB7XG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWwucmVwbGFjZShyZWZSZWdFeHAsIGZ1bmN0aW9uIChtYXRjaCwgbmFtZSkge1xuICAgICAgaWYgKG5hbWUgaW4ga2V5ZnJhbWVzKSB7XG4gICAgICAgIHJldHVybiBrZXlmcmFtZXNbbmFtZV07XG4gICAgICB9XG5cbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmdfX2RlZmF1bHRbJ2RlZmF1bHQnXShmYWxzZSwgXCJbSlNTXSBSZWZlcmVuY2VkIGtleWZyYW1lcyBydWxlIFxcXCJcIiArIG5hbWUgKyBcIlxcXCIgaXMgbm90IGRlZmluZWQuXCIpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIG1hdGNoO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn07XG4vKipcbiAqIFJlcGxhY2UgdGhlIHJlZmVyZW5jZSBmb3IgYSBhbmltYXRpb24gbmFtZS5cbiAqL1xuXG5cbnZhciByZXBsYWNlUmVmID0gZnVuY3Rpb24gcmVwbGFjZVJlZihzdHlsZSwgcHJvcCwga2V5ZnJhbWVzKSB7XG4gIHZhciB2YWx1ZSA9IHN0eWxlW3Byb3BdO1xuICB2YXIgcmVmS2V5ZnJhbWUgPSBmaW5kUmVmZXJlbmNlZEtleWZyYW1lKHZhbHVlLCBrZXlmcmFtZXMpO1xuXG4gIGlmIChyZWZLZXlmcmFtZSAhPT0gdmFsdWUpIHtcbiAgICBzdHlsZVtwcm9wXSA9IHJlZktleWZyYW1lO1xuICB9XG59O1xuXG52YXIgcGx1Z2luID0ge1xuICBvbkNyZWF0ZVJ1bGU6IGZ1bmN0aW9uIG9uQ3JlYXRlUnVsZShrZXksIGZyYW1lcywgb3B0aW9ucykge1xuICAgIHJldHVybiB0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyAmJiBrZXlSZWdFeHAkMS50ZXN0KGtleSkgPyBuZXcgS2V5ZnJhbWVzUnVsZShrZXksIGZyYW1lcywgb3B0aW9ucykgOiBudWxsO1xuICB9LFxuICAvLyBBbmltYXRpb24gbmFtZSByZWYgcmVwbGFjZXIuXG4gIG9uUHJvY2Vzc1N0eWxlOiBmdW5jdGlvbiBvblByb2Nlc3NTdHlsZShzdHlsZSwgcnVsZSwgc2hlZXQpIHtcbiAgICBpZiAocnVsZS50eXBlICE9PSAnc3R5bGUnIHx8ICFzaGVldCkgcmV0dXJuIHN0eWxlO1xuICAgIGlmICgnYW5pbWF0aW9uLW5hbWUnIGluIHN0eWxlKSByZXBsYWNlUmVmKHN0eWxlLCAnYW5pbWF0aW9uLW5hbWUnLCBzaGVldC5rZXlmcmFtZXMpO1xuICAgIGlmICgnYW5pbWF0aW9uJyBpbiBzdHlsZSkgcmVwbGFjZVJlZihzdHlsZSwgJ2FuaW1hdGlvbicsIHNoZWV0LmtleWZyYW1lcyk7XG4gICAgcmV0dXJuIHN0eWxlO1xuICB9LFxuICBvbkNoYW5nZVZhbHVlOiBmdW5jdGlvbiBvbkNoYW5nZVZhbHVlKHZhbCwgcHJvcCwgcnVsZSkge1xuICAgIHZhciBzaGVldCA9IHJ1bGUub3B0aW9ucy5zaGVldDtcblxuICAgIGlmICghc2hlZXQpIHtcbiAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuXG4gICAgc3dpdGNoIChwcm9wKSB7XG4gICAgICBjYXNlICdhbmltYXRpb24nOlxuICAgICAgICByZXR1cm4gZmluZFJlZmVyZW5jZWRLZXlmcmFtZSh2YWwsIHNoZWV0LmtleWZyYW1lcyk7XG5cbiAgICAgIGNhc2UgJ2FuaW1hdGlvbi1uYW1lJzpcbiAgICAgICAgcmV0dXJuIGZpbmRSZWZlcmVuY2VkS2V5ZnJhbWUodmFsLCBzaGVldC5rZXlmcmFtZXMpO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdmFsO1xuICAgIH1cbiAgfVxufTtcblxudmFyIEtleWZyYW1lUnVsZSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX0Jhc2VTdHlsZVJ1bGUpIHtcbiAgX2luaGVyaXRzTG9vc2VfX2RlZmF1bHRbJ2RlZmF1bHQnXShLZXlmcmFtZVJ1bGUsIF9CYXNlU3R5bGVSdWxlKTtcblxuICBmdW5jdGlvbiBLZXlmcmFtZVJ1bGUoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX0Jhc2VTdHlsZVJ1bGUuY2FsbC5hcHBseShfQmFzZVN0eWxlUnVsZSwgW3RoaXNdLmNvbmNhdChhcmdzKSkgfHwgdGhpcztcbiAgICBfdGhpcy5yZW5kZXJhYmxlID0gdm9pZCAwO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBLZXlmcmFtZVJ1bGUucHJvdG90eXBlO1xuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgYSBDU1Mgc3RyaW5nLlxuICAgKi9cbiAgX3Byb3RvLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcob3B0aW9ucykge1xuICAgIHZhciBzaGVldCA9IHRoaXMub3B0aW9ucy5zaGVldDtcbiAgICB2YXIgbGluayA9IHNoZWV0ID8gc2hlZXQub3B0aW9ucy5saW5rIDogZmFsc2U7XG4gICAgdmFyIG9wdHMgPSBsaW5rID8gX2V4dGVuZHNfX2RlZmF1bHRbJ2RlZmF1bHQnXSh7fSwgb3B0aW9ucywge1xuICAgICAgYWxsb3dFbXB0eTogdHJ1ZVxuICAgIH0pIDogb3B0aW9ucztcbiAgICByZXR1cm4gdG9Dc3ModGhpcy5rZXksIHRoaXMuc3R5bGUsIG9wdHMpO1xuICB9O1xuXG4gIHJldHVybiBLZXlmcmFtZVJ1bGU7XG59KEJhc2VTdHlsZVJ1bGUpO1xudmFyIHBsdWdpbktleWZyYW1lUnVsZSA9IHtcbiAgb25DcmVhdGVSdWxlOiBmdW5jdGlvbiBvbkNyZWF0ZVJ1bGUoa2V5LCBzdHlsZSwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLnBhcmVudCAmJiBvcHRpb25zLnBhcmVudC50eXBlID09PSAna2V5ZnJhbWVzJykge1xuICAgICAgcmV0dXJuIG5ldyBLZXlmcmFtZVJ1bGUoa2V5LCBzdHlsZSwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbnZhciBGb250RmFjZVJ1bGUgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBGb250RmFjZVJ1bGUoa2V5LCBzdHlsZSwgb3B0aW9ucykge1xuICAgIHRoaXMudHlwZSA9ICdmb250LWZhY2UnO1xuICAgIHRoaXMuYXQgPSAnQGZvbnQtZmFjZSc7XG4gICAgdGhpcy5rZXkgPSB2b2lkIDA7XG4gICAgdGhpcy5zdHlsZSA9IHZvaWQgMDtcbiAgICB0aGlzLm9wdGlvbnMgPSB2b2lkIDA7XG4gICAgdGhpcy5pc1Byb2Nlc3NlZCA9IGZhbHNlO1xuICAgIHRoaXMucmVuZGVyYWJsZSA9IHZvaWQgMDtcbiAgICB0aGlzLmtleSA9IGtleTtcbiAgICB0aGlzLnN0eWxlID0gc3R5bGU7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuICAvKipcbiAgICogR2VuZXJhdGVzIGEgQ1NTIHN0cmluZy5cbiAgICovXG5cblxuICB2YXIgX3Byb3RvID0gRm9udEZhY2VSdWxlLnByb3RvdHlwZTtcblxuICBfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyhvcHRpb25zKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5zdHlsZSkpIHtcbiAgICAgIHZhciBzdHIgPSAnJztcblxuICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuc3R5bGUubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIHN0ciArPSB0b0Nzcyh0aGlzLmF0LCB0aGlzLnN0eWxlW2luZGV4XSk7XG4gICAgICAgIGlmICh0aGlzLnN0eWxlW2luZGV4ICsgMV0pIHN0ciArPSAnXFxuJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9Dc3ModGhpcy5hdCwgdGhpcy5zdHlsZSwgb3B0aW9ucyk7XG4gIH07XG5cbiAgcmV0dXJuIEZvbnRGYWNlUnVsZTtcbn0oKTtcbnZhciBrZXlSZWdFeHAkMiA9IC9AZm9udC1mYWNlLztcbnZhciBwbHVnaW5Gb250RmFjZVJ1bGUgPSB7XG4gIG9uQ3JlYXRlUnVsZTogZnVuY3Rpb24gb25DcmVhdGVSdWxlKGtleSwgc3R5bGUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4ga2V5UmVnRXhwJDIudGVzdChrZXkpID8gbmV3IEZvbnRGYWNlUnVsZShrZXksIHN0eWxlLCBvcHRpb25zKSA6IG51bGw7XG4gIH1cbn07XG5cbnZhciBWaWV3cG9ydFJ1bGUgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBWaWV3cG9ydFJ1bGUoa2V5LCBzdHlsZSwgb3B0aW9ucykge1xuICAgIHRoaXMudHlwZSA9ICd2aWV3cG9ydCc7XG4gICAgdGhpcy5hdCA9ICdAdmlld3BvcnQnO1xuICAgIHRoaXMua2V5ID0gdm9pZCAwO1xuICAgIHRoaXMuc3R5bGUgPSB2b2lkIDA7XG4gICAgdGhpcy5vcHRpb25zID0gdm9pZCAwO1xuICAgIHRoaXMuaXNQcm9jZXNzZWQgPSBmYWxzZTtcbiAgICB0aGlzLnJlbmRlcmFibGUgPSB2b2lkIDA7XG4gICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBhIENTUyBzdHJpbmcuXG4gICAqL1xuXG5cbiAgdmFyIF9wcm90byA9IFZpZXdwb3J0UnVsZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcob3B0aW9ucykge1xuICAgIHJldHVybiB0b0Nzcyh0aGlzLmtleSwgdGhpcy5zdHlsZSwgb3B0aW9ucyk7XG4gIH07XG5cbiAgcmV0dXJuIFZpZXdwb3J0UnVsZTtcbn0oKTtcbnZhciBwbHVnaW5WaWV3cG9ydFJ1bGUgPSB7XG4gIG9uQ3JlYXRlUnVsZTogZnVuY3Rpb24gb25DcmVhdGVSdWxlKGtleSwgc3R5bGUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4ga2V5ID09PSAnQHZpZXdwb3J0JyB8fCBrZXkgPT09ICdALW1zLXZpZXdwb3J0JyA/IG5ldyBWaWV3cG9ydFJ1bGUoa2V5LCBzdHlsZSwgb3B0aW9ucykgOiBudWxsO1xuICB9XG59O1xuXG52YXIgU2ltcGxlUnVsZSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFNpbXBsZVJ1bGUoa2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICAgIHRoaXMudHlwZSA9ICdzaW1wbGUnO1xuICAgIHRoaXMua2V5ID0gdm9pZCAwO1xuICAgIHRoaXMudmFsdWUgPSB2b2lkIDA7XG4gICAgdGhpcy5vcHRpb25zID0gdm9pZCAwO1xuICAgIHRoaXMuaXNQcm9jZXNzZWQgPSBmYWxzZTtcbiAgICB0aGlzLnJlbmRlcmFibGUgPSB2b2lkIDA7XG4gICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBhIENTUyBzdHJpbmcuXG4gICAqL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcblxuXG4gIHZhciBfcHJvdG8gPSBTaW1wbGVSdWxlLnByb3RvdHlwZTtcblxuICBfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyhvcHRpb25zKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy52YWx1ZSkpIHtcbiAgICAgIHZhciBzdHIgPSAnJztcblxuICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMudmFsdWUubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIHN0ciArPSB0aGlzLmtleSArIFwiIFwiICsgdGhpcy52YWx1ZVtpbmRleF0gKyBcIjtcIjtcbiAgICAgICAgaWYgKHRoaXMudmFsdWVbaW5kZXggKyAxXSkgc3RyICs9ICdcXG4nO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmtleSArIFwiIFwiICsgdGhpcy52YWx1ZSArIFwiO1wiO1xuICB9O1xuXG4gIHJldHVybiBTaW1wbGVSdWxlO1xufSgpO1xudmFyIGtleXNNYXAgPSB7XG4gICdAY2hhcnNldCc6IHRydWUsXG4gICdAaW1wb3J0JzogdHJ1ZSxcbiAgJ0BuYW1lc3BhY2UnOiB0cnVlXG59O1xudmFyIHBsdWdpblNpbXBsZVJ1bGUgPSB7XG4gIG9uQ3JlYXRlUnVsZTogZnVuY3Rpb24gb25DcmVhdGVSdWxlKGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4ga2V5IGluIGtleXNNYXAgPyBuZXcgU2ltcGxlUnVsZShrZXksIHZhbHVlLCBvcHRpb25zKSA6IG51bGw7XG4gIH1cbn07XG5cbnZhciBwbHVnaW5zID0gW3BsdWdpblN0eWxlUnVsZSwgcGx1Z2luQ29uZGl0aW9uYWxSdWxlLCBwbHVnaW4sIHBsdWdpbktleWZyYW1lUnVsZSwgcGx1Z2luRm9udEZhY2VSdWxlLCBwbHVnaW5WaWV3cG9ydFJ1bGUsIHBsdWdpblNpbXBsZVJ1bGVdO1xuXG52YXIgZGVmYXVsdFVwZGF0ZU9wdGlvbnMgPSB7XG4gIHByb2Nlc3M6IHRydWVcbn07XG52YXIgZm9yY2VVcGRhdGVPcHRpb25zID0ge1xuICBmb3JjZTogdHJ1ZSxcbiAgcHJvY2VzczogdHJ1ZVxuICAvKipcbiAgICogQ29udGFpbnMgcnVsZXMgb2JqZWN0cyBhbmQgYWxsb3dzIGFkZGluZy9yZW1vdmluZyBldGMuXG4gICAqIElzIHVzZWQgZm9yIGUuZy4gYnkgYFN0eWxlU2hlZXRgIG9yIGBDb25kaXRpb25hbFJ1bGVgLlxuICAgKi9cblxufTtcblxudmFyIFJ1bGVMaXN0ID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgLy8gUnVsZXMgcmVnaXN0cnkgZm9yIGFjY2VzcyBieSAuZ2V0KCkgbWV0aG9kLlxuICAvLyBJdCBjb250YWlucyB0aGUgc2FtZSBydWxlIHJlZ2lzdGVyZWQgYnkgbmFtZSBhbmQgYnkgc2VsZWN0b3IuXG4gIC8vIE9yaWdpbmFsIHN0eWxlcyBvYmplY3QuXG4gIC8vIFVzZWQgdG8gZW5zdXJlIGNvcnJlY3QgcnVsZXMgb3JkZXIuXG4gIGZ1bmN0aW9uIFJ1bGVMaXN0KG9wdGlvbnMpIHtcbiAgICB0aGlzLm1hcCA9IHt9O1xuICAgIHRoaXMucmF3ID0ge307XG4gICAgdGhpcy5pbmRleCA9IFtdO1xuICAgIHRoaXMuY291bnRlciA9IDA7XG4gICAgdGhpcy5vcHRpb25zID0gdm9pZCAwO1xuICAgIHRoaXMuY2xhc3NlcyA9IHZvaWQgMDtcbiAgICB0aGlzLmtleWZyYW1lcyA9IHZvaWQgMDtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMuY2xhc3NlcyA9IG9wdGlvbnMuY2xhc3NlcztcbiAgICB0aGlzLmtleWZyYW1lcyA9IG9wdGlvbnMua2V5ZnJhbWVzO1xuICB9XG4gIC8qKlxuICAgKiBDcmVhdGUgYW5kIHJlZ2lzdGVyIHJ1bGUuXG4gICAqXG4gICAqIFdpbGwgbm90IHJlbmRlciBhZnRlciBTdHlsZSBTaGVldCB3YXMgcmVuZGVyZWQgdGhlIGZpcnN0IHRpbWUuXG4gICAqL1xuXG5cbiAgdmFyIF9wcm90byA9IFJ1bGVMaXN0LnByb3RvdHlwZTtcblxuICBfcHJvdG8uYWRkID0gZnVuY3Rpb24gYWRkKG5hbWUsIGRlY2wsIHJ1bGVPcHRpb25zKSB7XG4gICAgdmFyIF90aGlzJG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgIHBhcmVudCA9IF90aGlzJG9wdGlvbnMucGFyZW50LFxuICAgICAgICBzaGVldCA9IF90aGlzJG9wdGlvbnMuc2hlZXQsXG4gICAgICAgIGpzcyA9IF90aGlzJG9wdGlvbnMuanNzLFxuICAgICAgICBSZW5kZXJlciA9IF90aGlzJG9wdGlvbnMuUmVuZGVyZXIsXG4gICAgICAgIGdlbmVyYXRlSWQgPSBfdGhpcyRvcHRpb25zLmdlbmVyYXRlSWQsXG4gICAgICAgIHNjb3BlZCA9IF90aGlzJG9wdGlvbnMuc2NvcGVkO1xuXG4gICAgdmFyIG9wdGlvbnMgPSBfZXh0ZW5kc19fZGVmYXVsdFsnZGVmYXVsdCddKHtcbiAgICAgIGNsYXNzZXM6IHRoaXMuY2xhc3NlcyxcbiAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgc2hlZXQ6IHNoZWV0LFxuICAgICAganNzOiBqc3MsXG4gICAgICBSZW5kZXJlcjogUmVuZGVyZXIsXG4gICAgICBnZW5lcmF0ZUlkOiBnZW5lcmF0ZUlkLFxuICAgICAgc2NvcGVkOiBzY29wZWQsXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAga2V5ZnJhbWVzOiB0aGlzLmtleWZyYW1lcyxcbiAgICAgIHNlbGVjdG9yOiB1bmRlZmluZWRcbiAgICB9LCBydWxlT3B0aW9ucyk7IC8vIFdoZW4gdXNlciB1c2VzIC5jcmVhdGVTdHlsZVNoZWV0KCksIGR1cGxpY2F0ZSBuYW1lcyBhcmUgbm90IHBvc3NpYmxlLCBidXRcbiAgICAvLyBgc2hlZXQuYWRkUnVsZSgpYCBvcGVucyB0aGUgZG9vciBmb3IgYW55IGR1cGxpY2F0ZSBydWxlIG5hbWUuIFdoZW4gdGhpcyBoYXBwZW5zXG4gICAgLy8gd2UgbmVlZCB0byBtYWtlIHRoZSBrZXkgdW5pcXVlIHdpdGhpbiB0aGlzIFJ1bGVMaXN0IGluc3RhbmNlIHNjb3BlLlxuXG5cbiAgICB2YXIga2V5ID0gbmFtZTtcblxuICAgIGlmIChuYW1lIGluIHRoaXMucmF3KSB7XG4gICAgICBrZXkgPSBuYW1lICsgXCItZFwiICsgdGhpcy5jb3VudGVyKys7XG4gICAgfSAvLyBXZSBuZWVkIHRvIHNhdmUgdGhlIG9yaWdpbmFsIGRlY2wgYmVmb3JlIGNyZWF0aW5nIHRoZSBydWxlXG4gICAgLy8gYmVjYXVzZSBjYWNoZSBwbHVnaW4gbmVlZHMgdG8gdXNlIGl0IGFzIGEga2V5IHRvIHJldHVybiBhIGNhY2hlZCBydWxlLlxuXG5cbiAgICB0aGlzLnJhd1trZXldID0gZGVjbDtcblxuICAgIGlmIChrZXkgaW4gdGhpcy5jbGFzc2VzKSB7XG4gICAgICAvLyBFLmcuIHJ1bGVzIGluc2lkZSBvZiBAbWVkaWEgY29udGFpbmVyXG4gICAgICBvcHRpb25zLnNlbGVjdG9yID0gXCIuXCIgKyBlc2NhcGUodGhpcy5jbGFzc2VzW2tleV0pO1xuICAgIH1cblxuICAgIHZhciBydWxlID0gY3JlYXRlUnVsZShrZXksIGRlY2wsIG9wdGlvbnMpO1xuICAgIGlmICghcnVsZSkgcmV0dXJuIG51bGw7XG4gICAgdGhpcy5yZWdpc3RlcihydWxlKTtcbiAgICB2YXIgaW5kZXggPSBvcHRpb25zLmluZGV4ID09PSB1bmRlZmluZWQgPyB0aGlzLmluZGV4Lmxlbmd0aCA6IG9wdGlvbnMuaW5kZXg7XG4gICAgdGhpcy5pbmRleC5zcGxpY2UoaW5kZXgsIDAsIHJ1bGUpO1xuICAgIHJldHVybiBydWxlO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgYSBydWxlLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5nZXQgPSBmdW5jdGlvbiBnZXQobmFtZSkge1xuICAgIHJldHVybiB0aGlzLm1hcFtuYW1lXTtcbiAgfVxuICAvKipcbiAgICogRGVsZXRlIGEgcnVsZS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKHJ1bGUpIHtcbiAgICB0aGlzLnVucmVnaXN0ZXIocnVsZSk7XG4gICAgZGVsZXRlIHRoaXMucmF3W3J1bGUua2V5XTtcbiAgICB0aGlzLmluZGV4LnNwbGljZSh0aGlzLmluZGV4LmluZGV4T2YocnVsZSksIDEpO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgaW5kZXggb2YgYSBydWxlLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5pbmRleE9mID0gZnVuY3Rpb24gaW5kZXhPZihydWxlKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXguaW5kZXhPZihydWxlKTtcbiAgfVxuICAvKipcbiAgICogUnVuIGBvblByb2Nlc3NSdWxlKClgIHBsdWdpbnMgb24gZXZlcnkgcnVsZS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucHJvY2VzcyA9IGZ1bmN0aW9uIHByb2Nlc3MoKSB7XG4gICAgdmFyIHBsdWdpbnMgPSB0aGlzLm9wdGlvbnMuanNzLnBsdWdpbnM7IC8vIFdlIG5lZWQgdG8gY2xvbmUgYXJyYXkgYmVjYXVzZSBpZiB3ZSBtb2RpZnkgdGhlIGluZGV4IHNvbWV3aGVyZSBlbHNlIGR1cmluZyBhIGxvb3BcbiAgICAvLyB3ZSBlbmQgdXAgd2l0aCB2ZXJ5IGhhcmQtdG8tdHJhY2stZG93biBzaWRlIGVmZmVjdHMuXG5cbiAgICB0aGlzLmluZGV4LnNsaWNlKDApLmZvckVhY2gocGx1Z2lucy5vblByb2Nlc3NSdWxlLCBwbHVnaW5zKTtcbiAgfVxuICAvKipcbiAgICogUmVnaXN0ZXIgYSBydWxlIGluIGAubWFwYCwgYC5jbGFzc2VzYCBhbmQgYC5rZXlmcmFtZXNgIG1hcHMuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnJlZ2lzdGVyID0gZnVuY3Rpb24gcmVnaXN0ZXIocnVsZSkge1xuICAgIHRoaXMubWFwW3J1bGUua2V5XSA9IHJ1bGU7XG5cbiAgICBpZiAocnVsZSBpbnN0YW5jZW9mIFN0eWxlUnVsZSkge1xuICAgICAgdGhpcy5tYXBbcnVsZS5zZWxlY3Rvcl0gPSBydWxlO1xuICAgICAgaWYgKHJ1bGUuaWQpIHRoaXMuY2xhc3Nlc1tydWxlLmtleV0gPSBydWxlLmlkO1xuICAgIH0gZWxzZSBpZiAocnVsZSBpbnN0YW5jZW9mIEtleWZyYW1lc1J1bGUgJiYgdGhpcy5rZXlmcmFtZXMpIHtcbiAgICAgIHRoaXMua2V5ZnJhbWVzW3J1bGUubmFtZV0gPSBydWxlLmlkO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogVW5yZWdpc3RlciBhIHJ1bGUuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnVucmVnaXN0ZXIgPSBmdW5jdGlvbiB1bnJlZ2lzdGVyKHJ1bGUpIHtcbiAgICBkZWxldGUgdGhpcy5tYXBbcnVsZS5rZXldO1xuXG4gICAgaWYgKHJ1bGUgaW5zdGFuY2VvZiBTdHlsZVJ1bGUpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLm1hcFtydWxlLnNlbGVjdG9yXTtcbiAgICAgIGRlbGV0ZSB0aGlzLmNsYXNzZXNbcnVsZS5rZXldO1xuICAgIH0gZWxzZSBpZiAocnVsZSBpbnN0YW5jZW9mIEtleWZyYW1lc1J1bGUpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmtleWZyYW1lc1tydWxlLm5hbWVdO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogVXBkYXRlIHRoZSBmdW5jdGlvbiB2YWx1ZXMgd2l0aCBhIG5ldyBkYXRhLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgdmFyIG5hbWU7XG4gICAgdmFyIGRhdGE7XG4gICAgdmFyIG9wdGlvbnM7XG5cbiAgICBpZiAodHlwZW9mIChhcmd1bWVudHMubGVuZ3RoIDw9IDAgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMF0pID09PSAnc3RyaW5nJykge1xuICAgICAgbmFtZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1swXTsgLy8gJEZsb3dGaXhNZVtpbnZhbGlkLXR1cGxlLWluZGV4XVxuXG4gICAgICBkYXRhID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzFdOyAvLyAkRmxvd0ZpeE1lW2ludmFsaWQtdHVwbGUtaW5kZXhdXG5cbiAgICAgIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDIgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMl07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMF07IC8vICRGbG93Rml4TWVbaW52YWxpZC10dXBsZS1pbmRleF1cblxuICAgICAgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1sxXTtcbiAgICAgIG5hbWUgPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChuYW1lKSB7XG4gICAgICB0aGlzLnVwZGF0ZU9uZSh0aGlzLm1hcFtuYW1lXSwgZGF0YSwgb3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmluZGV4Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICB0aGlzLnVwZGF0ZU9uZSh0aGlzLmluZGV4W2luZGV4XSwgZGF0YSwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBFeGVjdXRlIHBsdWdpbnMsIHVwZGF0ZSBydWxlIHByb3BzLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by51cGRhdGVPbmUgPSBmdW5jdGlvbiB1cGRhdGVPbmUocnVsZSwgZGF0YSwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSBkZWZhdWx0VXBkYXRlT3B0aW9ucztcbiAgICB9XG5cbiAgICB2YXIgX3RoaXMkb3B0aW9uczIgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgIHBsdWdpbnMgPSBfdGhpcyRvcHRpb25zMi5qc3MucGx1Z2lucyxcbiAgICAgICAgc2hlZXQgPSBfdGhpcyRvcHRpb25zMi5zaGVldDsgLy8gSXQgaXMgYSBydWxlcyBjb250YWluZXIgbGlrZSBmb3IgZS5nLiBDb25kaXRpb25hbFJ1bGUuXG5cbiAgICBpZiAocnVsZS5ydWxlcyBpbnN0YW5jZW9mIFJ1bGVMaXN0KSB7XG4gICAgICBydWxlLnJ1bGVzLnVwZGF0ZShkYXRhLCBvcHRpb25zKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgc3R5bGVSdWxlID0gcnVsZTtcbiAgICB2YXIgc3R5bGUgPSBzdHlsZVJ1bGUuc3R5bGU7XG4gICAgcGx1Z2lucy5vblVwZGF0ZShkYXRhLCBydWxlLCBzaGVldCwgb3B0aW9ucyk7IC8vIFdlIHJlbHkgb24gYSBuZXcgYHN0eWxlYCByZWYgaW4gY2FzZSBpdCB3YXMgbXV0YXRlZCBkdXJpbmcgb25VcGRhdGUgaG9vay5cblxuICAgIGlmIChvcHRpb25zLnByb2Nlc3MgJiYgc3R5bGUgJiYgc3R5bGUgIT09IHN0eWxlUnVsZS5zdHlsZSkge1xuICAgICAgLy8gV2UgbmVlZCB0byBydW4gdGhlIHBsdWdpbnMgaW4gY2FzZSBuZXcgYHN0eWxlYCByZWxpZXMgb24gc3ludGF4IHBsdWdpbnMuXG4gICAgICBwbHVnaW5zLm9uUHJvY2Vzc1N0eWxlKHN0eWxlUnVsZS5zdHlsZSwgc3R5bGVSdWxlLCBzaGVldCk7IC8vIFVwZGF0ZSBhbmQgYWRkIHByb3BzLlxuXG4gICAgICBmb3IgKHZhciBwcm9wIGluIHN0eWxlUnVsZS5zdHlsZSkge1xuICAgICAgICB2YXIgbmV4dFZhbHVlID0gc3R5bGVSdWxlLnN0eWxlW3Byb3BdO1xuICAgICAgICB2YXIgcHJldlZhbHVlID0gc3R5bGVbcHJvcF07IC8vIFdlIG5lZWQgdG8gdXNlIGBmb3JjZTogdHJ1ZWAgYmVjYXVzZSBgcnVsZS5zdHlsZWAgaGFzIGJlZW4gdXBkYXRlZCBkdXJpbmcgb25VcGRhdGUgaG9vaywgc28gYHJ1bGUucHJvcCgpYCB3aWxsIG5vdCB1cGRhdGUgdGhlIENTU09NIHJ1bGUuXG4gICAgICAgIC8vIFdlIGRvIHRoaXMgY29tcGFyaXNvbiB0byBhdm9pZCB1bm5lZWRlZCBgcnVsZS5wcm9wKClgIGNhbGxzLCBzaW5jZSB3ZSBoYXZlIHRoZSBvbGQgYHN0eWxlYCBvYmplY3QgaGVyZS5cblxuICAgICAgICBpZiAobmV4dFZhbHVlICE9PSBwcmV2VmFsdWUpIHtcbiAgICAgICAgICBzdHlsZVJ1bGUucHJvcChwcm9wLCBuZXh0VmFsdWUsIGZvcmNlVXBkYXRlT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gUmVtb3ZlIHByb3BzLlxuXG5cbiAgICAgIGZvciAodmFyIF9wcm9wIGluIHN0eWxlKSB7XG4gICAgICAgIHZhciBfbmV4dFZhbHVlID0gc3R5bGVSdWxlLnN0eWxlW19wcm9wXTtcbiAgICAgICAgdmFyIF9wcmV2VmFsdWUgPSBzdHlsZVtfcHJvcF07IC8vIFdlIG5lZWQgdG8gdXNlIGBmb3JjZTogdHJ1ZWAgYmVjYXVzZSBgcnVsZS5zdHlsZWAgaGFzIGJlZW4gdXBkYXRlZCBkdXJpbmcgb25VcGRhdGUgaG9vaywgc28gYHJ1bGUucHJvcCgpYCB3aWxsIG5vdCB1cGRhdGUgdGhlIENTU09NIHJ1bGUuXG4gICAgICAgIC8vIFdlIGRvIHRoaXMgY29tcGFyaXNvbiB0byBhdm9pZCB1bm5lZWRlZCBgcnVsZS5wcm9wKClgIGNhbGxzLCBzaW5jZSB3ZSBoYXZlIHRoZSBvbGQgYHN0eWxlYCBvYmplY3QgaGVyZS5cblxuICAgICAgICBpZiAoX25leHRWYWx1ZSA9PSBudWxsICYmIF9uZXh0VmFsdWUgIT09IF9wcmV2VmFsdWUpIHtcbiAgICAgICAgICBzdHlsZVJ1bGUucHJvcChfcHJvcCwgbnVsbCwgZm9yY2VVcGRhdGVPcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvKipcbiAgICogQ29udmVydCBydWxlcyB0byBhIENTUyBzdHJpbmcuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcob3B0aW9ucykge1xuICAgIHZhciBzdHIgPSAnJztcbiAgICB2YXIgc2hlZXQgPSB0aGlzLm9wdGlvbnMuc2hlZXQ7XG4gICAgdmFyIGxpbmsgPSBzaGVldCA/IHNoZWV0Lm9wdGlvbnMubGluayA6IGZhbHNlO1xuXG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuaW5kZXgubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB2YXIgcnVsZSA9IHRoaXMuaW5kZXhbaW5kZXhdO1xuICAgICAgdmFyIGNzcyA9IHJ1bGUudG9TdHJpbmcob3B0aW9ucyk7IC8vIE5vIG5lZWQgdG8gcmVuZGVyIGFuIGVtcHR5IHJ1bGUuXG5cbiAgICAgIGlmICghY3NzICYmICFsaW5rKSBjb250aW51ZTtcbiAgICAgIGlmIChzdHIpIHN0ciArPSAnXFxuJztcbiAgICAgIHN0ciArPSBjc3M7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cjtcbiAgfTtcblxuICByZXR1cm4gUnVsZUxpc3Q7XG59KCk7XG5cbnZhciBTdHlsZVNoZWV0ID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU3R5bGVTaGVldChzdHlsZXMsIG9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB2b2lkIDA7XG4gICAgdGhpcy5kZXBsb3llZCA9IHZvaWQgMDtcbiAgICB0aGlzLmF0dGFjaGVkID0gdm9pZCAwO1xuICAgIHRoaXMucnVsZXMgPSB2b2lkIDA7XG4gICAgdGhpcy5yZW5kZXJlciA9IHZvaWQgMDtcbiAgICB0aGlzLmNsYXNzZXMgPSB2b2lkIDA7XG4gICAgdGhpcy5rZXlmcmFtZXMgPSB2b2lkIDA7XG4gICAgdGhpcy5xdWV1ZSA9IHZvaWQgMDtcbiAgICB0aGlzLmF0dGFjaGVkID0gZmFsc2U7XG4gICAgdGhpcy5kZXBsb3llZCA9IGZhbHNlO1xuICAgIHRoaXMuY2xhc3NlcyA9IHt9O1xuICAgIHRoaXMua2V5ZnJhbWVzID0ge307XG4gICAgdGhpcy5vcHRpb25zID0gX2V4dGVuZHNfX2RlZmF1bHRbJ2RlZmF1bHQnXSh7fSwgb3B0aW9ucywge1xuICAgICAgc2hlZXQ6IHRoaXMsXG4gICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICBjbGFzc2VzOiB0aGlzLmNsYXNzZXMsXG4gICAgICBrZXlmcmFtZXM6IHRoaXMua2V5ZnJhbWVzXG4gICAgfSk7XG5cbiAgICBpZiAob3B0aW9ucy5SZW5kZXJlcikge1xuICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBvcHRpb25zLlJlbmRlcmVyKHRoaXMpO1xuICAgIH1cblxuICAgIHRoaXMucnVsZXMgPSBuZXcgUnVsZUxpc3QodGhpcy5vcHRpb25zKTtcblxuICAgIGZvciAodmFyIG5hbWUgaW4gc3R5bGVzKSB7XG4gICAgICB0aGlzLnJ1bGVzLmFkZChuYW1lLCBzdHlsZXNbbmFtZV0pO1xuICAgIH1cblxuICAgIHRoaXMucnVsZXMucHJvY2VzcygpO1xuICB9XG4gIC8qKlxuICAgKiBBdHRhY2ggcmVuZGVyYWJsZSB0byB0aGUgcmVuZGVyIHRyZWUuXG4gICAqL1xuXG5cbiAgdmFyIF9wcm90byA9IFN0eWxlU2hlZXQucHJvdG90eXBlO1xuXG4gIF9wcm90by5hdHRhY2ggPSBmdW5jdGlvbiBhdHRhY2goKSB7XG4gICAgaWYgKHRoaXMuYXR0YWNoZWQpIHJldHVybiB0aGlzO1xuICAgIGlmICh0aGlzLnJlbmRlcmVyKSB0aGlzLnJlbmRlcmVyLmF0dGFjaCgpO1xuICAgIHRoaXMuYXR0YWNoZWQgPSB0cnVlOyAvLyBPcmRlciBpcyBpbXBvcnRhbnQsIGJlY2F1c2Ugd2UgY2FuJ3QgdXNlIGluc2VydFJ1bGUgQVBJIGlmIHN0eWxlIGVsZW1lbnQgaXMgbm90IGF0dGFjaGVkLlxuXG4gICAgaWYgKCF0aGlzLmRlcGxveWVkKSB0aGlzLmRlcGxveSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxuICAgKiBSZW1vdmUgcmVuZGVyYWJsZSBmcm9tIHJlbmRlciB0cmVlLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5kZXRhY2ggPSBmdW5jdGlvbiBkZXRhY2goKSB7XG4gICAgaWYgKCF0aGlzLmF0dGFjaGVkKSByZXR1cm4gdGhpcztcbiAgICBpZiAodGhpcy5yZW5kZXJlcikgdGhpcy5yZW5kZXJlci5kZXRhY2goKTtcbiAgICB0aGlzLmF0dGFjaGVkID0gZmFsc2U7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXG4gICAqIEFkZCBhIHJ1bGUgdG8gdGhlIGN1cnJlbnQgc3R5bGVzaGVldC5cbiAgICogV2lsbCBpbnNlcnQgYSBydWxlIGFsc28gYWZ0ZXIgdGhlIHN0eWxlc2hlZXQgaGFzIGJlZW4gcmVuZGVyZWQgZmlyc3QgdGltZS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uYWRkUnVsZSA9IGZ1bmN0aW9uIGFkZFJ1bGUobmFtZSwgZGVjbCwgb3B0aW9ucykge1xuICAgIHZhciBxdWV1ZSA9IHRoaXMucXVldWU7IC8vIFBsdWdpbnMgY2FuIGNyZWF0ZSBydWxlcy5cbiAgICAvLyBJbiBvcmRlciB0byBwcmVzZXJ2ZSB0aGUgcmlnaHQgb3JkZXIsIHdlIG5lZWQgdG8gcXVldWUgYWxsIGAuYWRkUnVsZWAgY2FsbHMsXG4gICAgLy8gd2hpY2ggaGFwcGVuIGFmdGVyIHRoZSBmaXJzdCBgcnVsZXMuYWRkKClgIGNhbGwuXG5cbiAgICBpZiAodGhpcy5hdHRhY2hlZCAmJiAhcXVldWUpIHRoaXMucXVldWUgPSBbXTtcbiAgICB2YXIgcnVsZSA9IHRoaXMucnVsZXMuYWRkKG5hbWUsIGRlY2wsIG9wdGlvbnMpO1xuICAgIGlmICghcnVsZSkgcmV0dXJuIG51bGw7XG4gICAgdGhpcy5vcHRpb25zLmpzcy5wbHVnaW5zLm9uUHJvY2Vzc1J1bGUocnVsZSk7XG5cbiAgICBpZiAodGhpcy5hdHRhY2hlZCkge1xuICAgICAgaWYgKCF0aGlzLmRlcGxveWVkKSByZXR1cm4gcnVsZTsgLy8gRG9uJ3QgaW5zZXJ0IHJ1bGUgZGlyZWN0bHkgaWYgdGhlcmUgaXMgbm8gc3RyaW5naWZpZWQgdmVyc2lvbiB5ZXQuXG4gICAgICAvLyBJdCB3aWxsIGJlIGluc2VydGVkIGFsbCB0b2dldGhlciB3aGVuIC5hdHRhY2ggaXMgY2FsbGVkLlxuXG4gICAgICBpZiAocXVldWUpIHF1ZXVlLnB1c2gocnVsZSk7ZWxzZSB7XG4gICAgICAgIHRoaXMuaW5zZXJ0UnVsZShydWxlKTtcblxuICAgICAgICBpZiAodGhpcy5xdWV1ZSkge1xuICAgICAgICAgIHRoaXMucXVldWUuZm9yRWFjaCh0aGlzLmluc2VydFJ1bGUsIHRoaXMpO1xuICAgICAgICAgIHRoaXMucXVldWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBydWxlO1xuICAgIH0gLy8gV2UgY2FuJ3QgYWRkIHJ1bGVzIHRvIGEgZGV0YWNoZWQgc3R5bGUgbm9kZS5cbiAgICAvLyBXZSB3aWxsIHJlZGVwbG95IHRoZSBzaGVldCBvbmNlIHVzZXIgd2lsbCBhdHRhY2ggaXQuXG5cblxuICAgIHRoaXMuZGVwbG95ZWQgPSBmYWxzZTtcbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuICAvKipcbiAgICogSW5zZXJ0IHJ1bGUgaW50byB0aGUgU3R5bGVTaGVldFxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5pbnNlcnRSdWxlID0gZnVuY3Rpb24gaW5zZXJ0UnVsZShydWxlKSB7XG4gICAgaWYgKHRoaXMucmVuZGVyZXIpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuaW5zZXJ0UnVsZShydWxlKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZSBhbmQgYWRkIHJ1bGVzLlxuICAgKiBXaWxsIHJlbmRlciBhbHNvIGFmdGVyIFN0eWxlIFNoZWV0IHdhcyByZW5kZXJlZCB0aGUgZmlyc3QgdGltZS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uYWRkUnVsZXMgPSBmdW5jdGlvbiBhZGRSdWxlcyhzdHlsZXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgYWRkZWQgPSBbXTtcblxuICAgIGZvciAodmFyIG5hbWUgaW4gc3R5bGVzKSB7XG4gICAgICB2YXIgcnVsZSA9IHRoaXMuYWRkUnVsZShuYW1lLCBzdHlsZXNbbmFtZV0sIG9wdGlvbnMpO1xuICAgICAgaWYgKHJ1bGUpIGFkZGVkLnB1c2gocnVsZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZGVkO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgYSBydWxlIGJ5IG5hbWUuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmdldFJ1bGUgPSBmdW5jdGlvbiBnZXRSdWxlKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcy5nZXQobmFtZSk7XG4gIH1cbiAgLyoqXG4gICAqIERlbGV0ZSBhIHJ1bGUgYnkgbmFtZS5cbiAgICogUmV0dXJucyBgdHJ1ZWA6IGlmIHJ1bGUgaGFzIGJlZW4gZGVsZXRlZCBmcm9tIHRoZSBET00uXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmRlbGV0ZVJ1bGUgPSBmdW5jdGlvbiBkZWxldGVSdWxlKG5hbWUpIHtcbiAgICB2YXIgcnVsZSA9IHR5cGVvZiBuYW1lID09PSAnb2JqZWN0JyA/IG5hbWUgOiB0aGlzLnJ1bGVzLmdldChuYW1lKTtcblxuICAgIGlmICghcnVsZSB8fCAvLyBTdHlsZSBzaGVldCB3YXMgY3JlYXRlZCB3aXRob3V0IGxpbms6IHRydWUgYW5kIGF0dGFjaGVkLCBpbiB0aGlzIGNhc2Ugd2VcbiAgICAvLyB3b24ndCBiZSBhYmxlIHRvIHJlbW92ZSB0aGUgQ1NTIHJ1bGUgZnJvbSB0aGUgRE9NLlxuICAgIHRoaXMuYXR0YWNoZWQgJiYgIXJ1bGUucmVuZGVyYWJsZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMucnVsZXMucmVtb3ZlKHJ1bGUpO1xuXG4gICAgaWYgKHRoaXMuYXR0YWNoZWQgJiYgcnVsZS5yZW5kZXJhYmxlICYmIHRoaXMucmVuZGVyZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLmRlbGV0ZVJ1bGUocnVsZS5yZW5kZXJhYmxlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvKipcbiAgICogR2V0IGluZGV4IG9mIGEgcnVsZS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uaW5kZXhPZiA9IGZ1bmN0aW9uIGluZGV4T2YocnVsZSkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVzLmluZGV4T2YocnVsZSk7XG4gIH1cbiAgLyoqXG4gICAqIERlcGxveSBwdXJlIENTUyBzdHJpbmcgdG8gYSByZW5kZXJhYmxlLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5kZXBsb3kgPSBmdW5jdGlvbiBkZXBsb3koKSB7XG4gICAgaWYgKHRoaXMucmVuZGVyZXIpIHRoaXMucmVuZGVyZXIuZGVwbG95KCk7XG4gICAgdGhpcy5kZXBsb3llZCA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgZnVuY3Rpb24gdmFsdWVzIHdpdGggYSBuZXcgZGF0YS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8udXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBfdGhpcyRydWxlcztcblxuICAgIChfdGhpcyRydWxlcyA9IHRoaXMucnVsZXMpLnVwZGF0ZS5hcHBseShfdGhpcyRydWxlcywgYXJndW1lbnRzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxuICAgKiBVcGRhdGVzIGEgc2luZ2xlIHJ1bGUuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnVwZGF0ZU9uZSA9IGZ1bmN0aW9uIHVwZGF0ZU9uZShydWxlLCBkYXRhLCBvcHRpb25zKSB7XG4gICAgdGhpcy5ydWxlcy51cGRhdGVPbmUocnVsZSwgZGF0YSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXG4gICAqIENvbnZlcnQgcnVsZXMgdG8gYSBDU1Mgc3RyaW5nLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcy50b1N0cmluZyhvcHRpb25zKTtcbiAgfTtcblxuICByZXR1cm4gU3R5bGVTaGVldDtcbn0oKTtcblxudmFyIFBsdWdpbnNSZWdpc3RyeSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFBsdWdpbnNSZWdpc3RyeSgpIHtcbiAgICB0aGlzLnBsdWdpbnMgPSB7XG4gICAgICBpbnRlcm5hbDogW10sXG4gICAgICBleHRlcm5hbDogW11cbiAgICB9O1xuICAgIHRoaXMucmVnaXN0cnkgPSB2b2lkIDA7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gUGx1Z2luc1JlZ2lzdHJ5LnByb3RvdHlwZTtcblxuICAvKipcbiAgICogQ2FsbCBgb25DcmVhdGVSdWxlYCBob29rcyBhbmQgcmV0dXJuIGFuIG9iamVjdCBpZiByZXR1cm5lZCBieSBhIGhvb2suXG4gICAqL1xuICBfcHJvdG8ub25DcmVhdGVSdWxlID0gZnVuY3Rpb24gb25DcmVhdGVSdWxlKG5hbWUsIGRlY2wsIG9wdGlvbnMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucmVnaXN0cnkub25DcmVhdGVSdWxlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcnVsZSA9IHRoaXMucmVnaXN0cnkub25DcmVhdGVSdWxlW2ldKG5hbWUsIGRlY2wsIG9wdGlvbnMpO1xuICAgICAgaWYgKHJ1bGUpIHJldHVybiBydWxlO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIC8qKlxuICAgKiBDYWxsIGBvblByb2Nlc3NSdWxlYCBob29rcy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8ub25Qcm9jZXNzUnVsZSA9IGZ1bmN0aW9uIG9uUHJvY2Vzc1J1bGUocnVsZSkge1xuICAgIGlmIChydWxlLmlzUHJvY2Vzc2VkKSByZXR1cm47XG4gICAgdmFyIHNoZWV0ID0gcnVsZS5vcHRpb25zLnNoZWV0O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJlZ2lzdHJ5Lm9uUHJvY2Vzc1J1bGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMucmVnaXN0cnkub25Qcm9jZXNzUnVsZVtpXShydWxlLCBzaGVldCk7XG4gICAgfVxuXG4gICAgaWYgKHJ1bGUuc3R5bGUpIHRoaXMub25Qcm9jZXNzU3R5bGUocnVsZS5zdHlsZSwgcnVsZSwgc2hlZXQpO1xuICAgIHJ1bGUuaXNQcm9jZXNzZWQgPSB0cnVlO1xuICB9XG4gIC8qKlxuICAgKiBDYWxsIGBvblByb2Nlc3NTdHlsZWAgaG9va3MuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLm9uUHJvY2Vzc1N0eWxlID0gZnVuY3Rpb24gb25Qcm9jZXNzU3R5bGUoc3R5bGUsIHJ1bGUsIHNoZWV0KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJlZ2lzdHJ5Lm9uUHJvY2Vzc1N0eWxlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cbiAgICAgIHJ1bGUuc3R5bGUgPSB0aGlzLnJlZ2lzdHJ5Lm9uUHJvY2Vzc1N0eWxlW2ldKHJ1bGUuc3R5bGUsIHJ1bGUsIHNoZWV0KTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIENhbGwgYG9uUHJvY2Vzc1NoZWV0YCBob29rcy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8ub25Qcm9jZXNzU2hlZXQgPSBmdW5jdGlvbiBvblByb2Nlc3NTaGVldChzaGVldCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yZWdpc3RyeS5vblByb2Nlc3NTaGVldC5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5yZWdpc3RyeS5vblByb2Nlc3NTaGVldFtpXShzaGVldCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBDYWxsIGBvblVwZGF0ZWAgaG9va3MuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLm9uVXBkYXRlID0gZnVuY3Rpb24gb25VcGRhdGUoZGF0YSwgcnVsZSwgc2hlZXQsIG9wdGlvbnMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucmVnaXN0cnkub25VcGRhdGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMucmVnaXN0cnkub25VcGRhdGVbaV0oZGF0YSwgcnVsZSwgc2hlZXQsIG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQ2FsbCBgb25DaGFuZ2VWYWx1ZWAgaG9va3MuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLm9uQ2hhbmdlVmFsdWUgPSBmdW5jdGlvbiBvbkNoYW5nZVZhbHVlKHZhbHVlLCBwcm9wLCBydWxlKSB7XG4gICAgdmFyIHByb2Nlc3NlZFZhbHVlID0gdmFsdWU7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucmVnaXN0cnkub25DaGFuZ2VWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgcHJvY2Vzc2VkVmFsdWUgPSB0aGlzLnJlZ2lzdHJ5Lm9uQ2hhbmdlVmFsdWVbaV0ocHJvY2Vzc2VkVmFsdWUsIHByb3AsIHJ1bGUpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9jZXNzZWRWYWx1ZTtcbiAgfVxuICAvKipcbiAgICogUmVnaXN0ZXIgYSBwbHVnaW4uXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnVzZSA9IGZ1bmN0aW9uIHVzZShuZXdQbHVnaW4sIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge1xuICAgICAgICBxdWV1ZTogJ2V4dGVybmFsJ1xuICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgcGx1Z2lucyA9IHRoaXMucGx1Z2luc1tvcHRpb25zLnF1ZXVlXTsgLy8gQXZvaWRzIGFwcGx5aW5nIHNhbWUgcGx1Z2luIHR3aWNlLCBhdCBsZWFzdCBiYXNlZCBvbiByZWYuXG5cbiAgICBpZiAocGx1Z2lucy5pbmRleE9mKG5ld1BsdWdpbikgIT09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcGx1Z2lucy5wdXNoKG5ld1BsdWdpbik7XG4gICAgdGhpcy5yZWdpc3RyeSA9IFtdLmNvbmNhdCh0aGlzLnBsdWdpbnMuZXh0ZXJuYWwsIHRoaXMucGx1Z2lucy5pbnRlcm5hbCkucmVkdWNlKGZ1bmN0aW9uIChyZWdpc3RyeSwgcGx1Z2luKSB7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIHBsdWdpbikge1xuICAgICAgICBpZiAobmFtZSBpbiByZWdpc3RyeSkge1xuICAgICAgICAgIHJlZ2lzdHJ5W25hbWVdLnB1c2gocGx1Z2luW25hbWVdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nX19kZWZhdWx0WydkZWZhdWx0J10oZmFsc2UsIFwiW0pTU10gVW5rbm93biBob29rIFxcXCJcIiArIG5hbWUgKyBcIlxcXCIuXCIpIDogdm9pZCAwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZWdpc3RyeTtcbiAgICB9LCB7XG4gICAgICBvbkNyZWF0ZVJ1bGU6IFtdLFxuICAgICAgb25Qcm9jZXNzUnVsZTogW10sXG4gICAgICBvblByb2Nlc3NTdHlsZTogW10sXG4gICAgICBvblByb2Nlc3NTaGVldDogW10sXG4gICAgICBvbkNoYW5nZVZhbHVlOiBbXSxcbiAgICAgIG9uVXBkYXRlOiBbXVxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBQbHVnaW5zUmVnaXN0cnk7XG59KCk7XG5cbi8qKlxuICogU2hlZXRzIHJlZ2lzdHJ5IHRvIGFjY2VzcyB0aGVtIGFsbCBhdCBvbmUgcGxhY2UuXG4gKi9cbnZhciBTaGVldHNSZWdpc3RyeSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFNoZWV0c1JlZ2lzdHJ5KCkge1xuICAgIHRoaXMucmVnaXN0cnkgPSBbXTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBTaGVldHNSZWdpc3RyeS5wcm90b3R5cGU7XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgU3R5bGUgU2hlZXQuXG4gICAqL1xuICBfcHJvdG8uYWRkID0gZnVuY3Rpb24gYWRkKHNoZWV0KSB7XG4gICAgdmFyIHJlZ2lzdHJ5ID0gdGhpcy5yZWdpc3RyeTtcbiAgICB2YXIgaW5kZXggPSBzaGVldC5vcHRpb25zLmluZGV4O1xuICAgIGlmIChyZWdpc3RyeS5pbmRleE9mKHNoZWV0KSAhPT0gLTEpIHJldHVybjtcblxuICAgIGlmIChyZWdpc3RyeS5sZW5ndGggPT09IDAgfHwgaW5kZXggPj0gdGhpcy5pbmRleCkge1xuICAgICAgcmVnaXN0cnkucHVzaChzaGVldCk7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBGaW5kIGEgcG9zaXRpb24uXG5cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVnaXN0cnkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyZWdpc3RyeVtpXS5vcHRpb25zLmluZGV4ID4gaW5kZXgpIHtcbiAgICAgICAgcmVnaXN0cnkuc3BsaWNlKGksIDAsIHNoZWV0KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvKipcbiAgICogUmVzZXQgdGhlIHJlZ2lzdHJ5LlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5yZXNldCA9IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIHRoaXMucmVnaXN0cnkgPSBbXTtcbiAgfVxuICAvKipcbiAgICogUmVtb3ZlIGEgU3R5bGUgU2hlZXQuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZShzaGVldCkge1xuICAgIHZhciBpbmRleCA9IHRoaXMucmVnaXN0cnkuaW5kZXhPZihzaGVldCk7XG4gICAgdGhpcy5yZWdpc3RyeS5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG4gIC8qKlxuICAgKiBDb252ZXJ0IGFsbCBhdHRhY2hlZCBzaGVldHMgdG8gYSBDU1Mgc3RyaW5nLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKF90ZW1wKSB7XG4gICAgdmFyIF9yZWYgPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcCxcbiAgICAgICAgYXR0YWNoZWQgPSBfcmVmLmF0dGFjaGVkLFxuICAgICAgICBvcHRpb25zID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VfX2RlZmF1bHRbJ2RlZmF1bHQnXShfcmVmLCBbXCJhdHRhY2hlZFwiXSk7XG5cbiAgICB2YXIgY3NzID0gJyc7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucmVnaXN0cnkubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzaGVldCA9IHRoaXMucmVnaXN0cnlbaV07XG5cbiAgICAgIGlmIChhdHRhY2hlZCAhPSBudWxsICYmIHNoZWV0LmF0dGFjaGVkICE9PSBhdHRhY2hlZCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNzcykgY3NzICs9ICdcXG4nO1xuICAgICAgY3NzICs9IHNoZWV0LnRvU3RyaW5nKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBjc3M7XG4gIH07XG5cbiAgX2NyZWF0ZUNsYXNzX19kZWZhdWx0WydkZWZhdWx0J10oU2hlZXRzUmVnaXN0cnksIFt7XG4gICAga2V5OiBcImluZGV4XCIsXG5cbiAgICAvKipcbiAgICAgKiBDdXJyZW50IGhpZ2hlc3QgaW5kZXggbnVtYmVyLlxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMucmVnaXN0cnkubGVuZ3RoID09PSAwID8gMCA6IHRoaXMucmVnaXN0cnlbdGhpcy5yZWdpc3RyeS5sZW5ndGggLSAxXS5vcHRpb25zLmluZGV4O1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTaGVldHNSZWdpc3RyeTtcbn0oKTtcblxuLyoqXG4gKiBUaGlzIGlzIGEgZ2xvYmFsIHNoZWV0cyByZWdpc3RyeS4gT25seSBEb21SZW5kZXJlciB3aWxsIGFkZCBzaGVldHMgdG8gaXQuXG4gKiBPbiB0aGUgc2VydmVyIG9uZSBzaG91bGQgdXNlIGFuIG93biBTaGVldHNSZWdpc3RyeSBpbnN0YW5jZSBhbmQgYWRkIHRoZVxuICogc2hlZXRzIHRvIGl0LCBiZWNhdXNlIHlvdSBuZWVkIHRvIG1ha2Ugc3VyZSB0byBjcmVhdGUgYSBuZXcgcmVnaXN0cnkgZm9yXG4gKiBlYWNoIHJlcXVlc3QgaW4gb3JkZXIgdG8gbm90IGxlYWsgc2hlZXRzIGFjcm9zcyByZXF1ZXN0cy5cbiAqL1xuXG52YXIgcmVnaXN0cnkgPSBuZXcgU2hlZXRzUmVnaXN0cnkoKTtcblxuLyogZXNsaW50LWRpc2FibGUgKi9cblxuLyoqXG4gKiBOb3cgdGhhdCBgZ2xvYmFsVGhpc2AgaXMgYXZhaWxhYmxlIG9uIG1vc3QgcGxhdGZvcm1zXG4gKiAoaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvZ2xvYmFsVGhpcyNicm93c2VyX2NvbXBhdGliaWxpdHkpXG4gKiB3ZSBjaGVjayBmb3IgYGdsb2JhbFRoaXNgIGZpcnN0LiBgZ2xvYmFsVGhpc2AgaXMgbmVjZXNzYXJ5IGZvciBqc3NcbiAqIHRvIHJ1biBpbiBBZ29yaWMncyBzZWN1cmUgdmVyc2lvbiBvZiBKYXZhU2NyaXB0IChTRVMpLiBVbmRlciBTRVMsXG4gKiBgZ2xvYmFsVGhpc2AgZXhpc3RzLCBidXQgYHdpbmRvd2AsIGBzZWxmYCwgYW5kIGBGdW5jdGlvbigncmV0dXJuXG4gKiB0aGlzJykoKWAgYXJlIGFsbCB1bmRlZmluZWQgZm9yIHNlY3VyaXR5IHJlYXNvbnMuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbiAqL1xudmFyIGdsb2JhbFRoaXMkMSA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PT0gTWF0aCA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxudmFyIG5zID0gJzJmMWFjYzZjM2E2MDZiMDgyZTVlZWY1ZTU0NDE0ZmZiJztcbmlmIChnbG9iYWxUaGlzJDFbbnNdID09IG51bGwpIGdsb2JhbFRoaXMkMVtuc10gPSAwOyAvLyBCdW5kbGUgbWF5IGNvbnRhaW4gbXVsdGlwbGUgSlNTIHZlcnNpb25zIGF0IHRoZSBzYW1lIHRpbWUuIEluIG9yZGVyIHRvIGlkZW50aWZ5XG4vLyB0aGUgY3VycmVudCB2ZXJzaW9uIHdpdGgganVzdCBvbmUgc2hvcnQgbnVtYmVyIGFuZCB1c2UgaXQgZm9yIGNsYXNzZXMgZ2VuZXJhdGlvblxuLy8gd2UgdXNlIGEgY291bnRlci4gQWxzbyBpdCBpcyBtb3JlIGFjY3VyYXRlLCBiZWNhdXNlIHVzZXIgY2FuIG1hbnVhbGx5IHJlZXZhbHVhdGVcbi8vIHRoZSBtb2R1bGUuXG5cbnZhciBtb2R1bGVJZCA9IGdsb2JhbFRoaXMkMVtuc10rKztcblxudmFyIG1heFJ1bGVzID0gMWUxMDtcblxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gd2hpY2ggZ2VuZXJhdGVzIHVuaXF1ZSBjbGFzcyBuYW1lcyBiYXNlZCBvbiBjb3VudGVycy5cbiAqIFdoZW4gbmV3IGdlbmVyYXRvciBmdW5jdGlvbiBpcyBjcmVhdGVkLCBydWxlIGNvdW50ZXIgaXMgcmVzZXRlZC5cbiAqIFdlIG5lZWQgdG8gcmVzZXQgdGhlIHJ1bGUgY291bnRlciBmb3IgU1NSIGZvciBlYWNoIHJlcXVlc3QuXG4gKi9cbnZhciBjcmVhdGVHZW5lcmF0ZUlkID0gZnVuY3Rpb24gY3JlYXRlR2VuZXJhdGVJZChvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgcnVsZUNvdW50ZXIgPSAwO1xuXG4gIHZhciBnZW5lcmF0ZUlkID0gZnVuY3Rpb24gZ2VuZXJhdGVJZChydWxlLCBzaGVldCkge1xuICAgIHJ1bGVDb3VudGVyICs9IDE7XG5cbiAgICBpZiAocnVsZUNvdW50ZXIgPiBtYXhSdWxlcykge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZ19fZGVmYXVsdFsnZGVmYXVsdCddKGZhbHNlLCBcIltKU1NdIFlvdSBtaWdodCBoYXZlIGEgbWVtb3J5IGxlYWsuIFJ1bGUgY291bnRlciBpcyBhdCBcIiArIHJ1bGVDb3VudGVyICsgXCIuXCIpIDogdm9pZCAwO1xuICAgIH1cblxuICAgIHZhciBqc3NJZCA9ICcnO1xuICAgIHZhciBwcmVmaXggPSAnJztcblxuICAgIGlmIChzaGVldCkge1xuICAgICAgaWYgKHNoZWV0Lm9wdGlvbnMuY2xhc3NOYW1lUHJlZml4KSB7XG4gICAgICAgIHByZWZpeCA9IHNoZWV0Lm9wdGlvbnMuY2xhc3NOYW1lUHJlZml4O1xuICAgICAgfVxuXG4gICAgICBpZiAoc2hlZXQub3B0aW9ucy5qc3MuaWQgIT0gbnVsbCkge1xuICAgICAgICBqc3NJZCA9IFN0cmluZyhzaGVldC5vcHRpb25zLmpzcy5pZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMubWluaWZ5KSB7XG4gICAgICAvLyBVc2luZyBcImNcIiBiZWNhdXNlIGEgbnVtYmVyIGNhbid0IGJlIHRoZSBmaXJzdCBjaGFyIGluIGEgY2xhc3MgbmFtZS5cbiAgICAgIHJldHVybiBcIlwiICsgKHByZWZpeCB8fCAnYycpICsgbW9kdWxlSWQgKyBqc3NJZCArIHJ1bGVDb3VudGVyO1xuICAgIH1cblxuICAgIHJldHVybiBwcmVmaXggKyBydWxlLmtleSArIFwiLVwiICsgbW9kdWxlSWQgKyAoanNzSWQgPyBcIi1cIiArIGpzc0lkIDogJycpICsgXCItXCIgKyBydWxlQ291bnRlcjtcbiAgfTtcblxuICByZXR1cm4gZ2VuZXJhdGVJZDtcbn07XG5cbi8qKlxuICogQ2FjaGUgdGhlIHZhbHVlIGZyb20gdGhlIGZpcnN0IHRpbWUgYSBmdW5jdGlvbiBpcyBjYWxsZWQuXG4gKi9cbnZhciBtZW1vaXplID0gZnVuY3Rpb24gbWVtb2l6ZShmbikge1xuICB2YXIgdmFsdWU7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF2YWx1ZSkgdmFsdWUgPSBmbigpO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcbn07XG5cbi8qKlxuICogR2V0IGEgc3R5bGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbnZhciBnZXRQcm9wZXJ0eVZhbHVlID0gZnVuY3Rpb24gZ2V0UHJvcGVydHlWYWx1ZShjc3NSdWxlLCBwcm9wKSB7XG4gIHRyeSB7XG4gICAgLy8gU3VwcG9ydCBDU1NUT00uXG4gICAgaWYgKGNzc1J1bGUuYXR0cmlidXRlU3R5bGVNYXApIHtcbiAgICAgIHJldHVybiBjc3NSdWxlLmF0dHJpYnV0ZVN0eWxlTWFwLmdldChwcm9wKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3NzUnVsZS5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKHByb3ApO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBJRSBtYXkgdGhyb3cgaWYgcHJvcGVydHkgaXMgdW5rbm93bi5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn07XG5cbi8qKlxuICogU2V0IGEgc3R5bGUgcHJvcGVydHkuXG4gKi9cbnZhciBzZXRQcm9wZXJ0eSA9IGZ1bmN0aW9uIHNldFByb3BlcnR5KGNzc1J1bGUsIHByb3AsIHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgdmFyIGNzc1ZhbHVlID0gdmFsdWU7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIGNzc1ZhbHVlID0gdG9Dc3NWYWx1ZSh2YWx1ZSwgdHJ1ZSk7XG5cbiAgICAgIGlmICh2YWx1ZVt2YWx1ZS5sZW5ndGggLSAxXSA9PT0gJyFpbXBvcnRhbnQnKSB7XG4gICAgICAgIGNzc1J1bGUuc3R5bGUuc2V0UHJvcGVydHkocHJvcCwgY3NzVmFsdWUsICdpbXBvcnRhbnQnKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSAvLyBTdXBwb3J0IENTU1RPTS5cblxuXG4gICAgaWYgKGNzc1J1bGUuYXR0cmlidXRlU3R5bGVNYXApIHtcbiAgICAgIGNzc1J1bGUuYXR0cmlidXRlU3R5bGVNYXAuc2V0KHByb3AsIGNzc1ZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3NzUnVsZS5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wLCBjc3NWYWx1ZSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBJRSBtYXkgdGhyb3cgaWYgcHJvcGVydHkgaXMgdW5rbm93bi5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGEgc3R5bGUgcHJvcGVydHkuXG4gKi9cbnZhciByZW1vdmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIHJlbW92ZVByb3BlcnR5KGNzc1J1bGUsIHByb3ApIHtcbiAgdHJ5IHtcbiAgICAvLyBTdXBwb3J0IENTU1RPTS5cbiAgICBpZiAoY3NzUnVsZS5hdHRyaWJ1dGVTdHlsZU1hcCkge1xuICAgICAgY3NzUnVsZS5hdHRyaWJ1dGVTdHlsZU1hcC5kZWxldGUocHJvcCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNzc1J1bGUuc3R5bGUucmVtb3ZlUHJvcGVydHkocHJvcCk7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nX19kZWZhdWx0WydkZWZhdWx0J10oZmFsc2UsIFwiW0pTU10gRE9NRXhjZXB0aW9uIFxcXCJcIiArIGVyci5tZXNzYWdlICsgXCJcXFwiIHdhcyB0aHJvd24uIFRyaWVkIHRvIHJlbW92ZSBwcm9wZXJ0eSBcXFwiXCIgKyBwcm9wICsgXCJcXFwiLlwiKSA6IHZvaWQgMDtcbiAgfVxufTtcblxuLyoqXG4gKiBTZXQgdGhlIHNlbGVjdG9yLlxuICovXG52YXIgc2V0U2VsZWN0b3IgPSBmdW5jdGlvbiBzZXRTZWxlY3Rvcihjc3NSdWxlLCBzZWxlY3RvclRleHQpIHtcbiAgY3NzUnVsZS5zZWxlY3RvclRleHQgPSBzZWxlY3RvclRleHQ7IC8vIFJldHVybiBmYWxzZSBpZiBzZXR0ZXIgd2FzIG5vdCBzdWNjZXNzZnVsLlxuICAvLyBDdXJyZW50bHkgd29ya3MgaW4gY2hyb21lIG9ubHkuXG5cbiAgcmV0dXJuIGNzc1J1bGUuc2VsZWN0b3JUZXh0ID09PSBzZWxlY3RvclRleHQ7XG59O1xuLyoqXG4gKiBHZXRzIHRoZSBgaGVhZGAgZWxlbWVudCB1cG9uIHRoZSBmaXJzdCBjYWxsIGFuZCBjYWNoZXMgaXQuXG4gKiBXZSBhc3N1bWUgaXQgY2FuJ3QgYmUgbnVsbC5cbiAqL1xuXG5cbnZhciBnZXRIZWFkID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJyk7XG59KTtcbi8qKlxuICogRmluZCBhdHRhY2hlZCBzaGVldCB3aXRoIGFuIGluZGV4IGhpZ2hlciB0aGFuIHRoZSBwYXNzZWQgb25lLlxuICovXG5cbmZ1bmN0aW9uIGZpbmRIaWdoZXJTaGVldChyZWdpc3RyeSwgb3B0aW9ucykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJlZ2lzdHJ5Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNoZWV0ID0gcmVnaXN0cnlbaV07XG5cbiAgICBpZiAoc2hlZXQuYXR0YWNoZWQgJiYgc2hlZXQub3B0aW9ucy5pbmRleCA+IG9wdGlvbnMuaW5kZXggJiYgc2hlZXQub3B0aW9ucy5pbnNlcnRpb25Qb2ludCA9PT0gb3B0aW9ucy5pbnNlcnRpb25Qb2ludCkge1xuICAgICAgcmV0dXJuIHNoZWV0O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuLyoqXG4gKiBGaW5kIGF0dGFjaGVkIHNoZWV0IHdpdGggdGhlIGhpZ2hlc3QgaW5kZXguXG4gKi9cblxuXG5mdW5jdGlvbiBmaW5kSGlnaGVzdFNoZWV0KHJlZ2lzdHJ5LCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGkgPSByZWdpc3RyeS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHZhciBzaGVldCA9IHJlZ2lzdHJ5W2ldO1xuXG4gICAgaWYgKHNoZWV0LmF0dGFjaGVkICYmIHNoZWV0Lm9wdGlvbnMuaW5zZXJ0aW9uUG9pbnQgPT09IG9wdGlvbnMuaW5zZXJ0aW9uUG9pbnQpIHtcbiAgICAgIHJldHVybiBzaGVldDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cbi8qKlxuICogRmluZCBhIGNvbW1lbnQgd2l0aCBcImpzc1wiIGluc2lkZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIGZpbmRDb21tZW50Tm9kZSh0ZXh0KSB7XG4gIHZhciBoZWFkID0gZ2V0SGVhZCgpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaGVhZC5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIG5vZGUgPSBoZWFkLmNoaWxkTm9kZXNbaV07XG5cbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gOCAmJiBub2RlLm5vZGVWYWx1ZS50cmltKCkgPT09IHRleHQpIHtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIEZpbmQgYSBub2RlIGJlZm9yZSB3aGljaCB3ZSBjYW4gaW5zZXJ0IHRoZSBzaGVldC5cbiAqL1xuZnVuY3Rpb24gZmluZFByZXZOb2RlKG9wdGlvbnMpIHtcbiAgdmFyIHJlZ2lzdHJ5JDEgPSByZWdpc3RyeS5yZWdpc3RyeTtcblxuICBpZiAocmVnaXN0cnkkMS5sZW5ndGggPiAwKSB7XG4gICAgLy8gVHJ5IHRvIGluc2VydCBiZWZvcmUgdGhlIG5leHQgaGlnaGVyIHNoZWV0LlxuICAgIHZhciBzaGVldCA9IGZpbmRIaWdoZXJTaGVldChyZWdpc3RyeSQxLCBvcHRpb25zKTtcblxuICAgIGlmIChzaGVldCAmJiBzaGVldC5yZW5kZXJlcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFyZW50OiBzaGVldC5yZW5kZXJlci5lbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgIG5vZGU6IHNoZWV0LnJlbmRlcmVyLmVsZW1lbnRcbiAgICAgIH07XG4gICAgfSAvLyBPdGhlcndpc2UgaW5zZXJ0IGFmdGVyIHRoZSBsYXN0IGF0dGFjaGVkLlxuXG5cbiAgICBzaGVldCA9IGZpbmRIaWdoZXN0U2hlZXQocmVnaXN0cnkkMSwgb3B0aW9ucyk7XG5cbiAgICBpZiAoc2hlZXQgJiYgc2hlZXQucmVuZGVyZXIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhcmVudDogc2hlZXQucmVuZGVyZXIuZWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICBub2RlOiBzaGVldC5yZW5kZXJlci5lbGVtZW50Lm5leHRTaWJsaW5nXG4gICAgICB9O1xuICAgIH1cbiAgfSAvLyBUcnkgdG8gZmluZCBhIGNvbW1lbnQgcGxhY2Vob2xkZXIgaWYgcmVnaXN0cnkgaXMgZW1wdHkuXG5cblxuICB2YXIgaW5zZXJ0aW9uUG9pbnQgPSBvcHRpb25zLmluc2VydGlvblBvaW50O1xuXG4gIGlmIChpbnNlcnRpb25Qb2ludCAmJiB0eXBlb2YgaW5zZXJ0aW9uUG9pbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIGNvbW1lbnQgPSBmaW5kQ29tbWVudE5vZGUoaW5zZXJ0aW9uUG9pbnQpO1xuXG4gICAgaWYgKGNvbW1lbnQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhcmVudDogY29tbWVudC5wYXJlbnROb2RlLFxuICAgICAgICBub2RlOiBjb21tZW50Lm5leHRTaWJsaW5nXG4gICAgICB9O1xuICAgIH0gLy8gSWYgdXNlciBzcGVjaWZpZXMgYW4gaW5zZXJ0aW9uIHBvaW50IGFuZCBpdCBjYW4ndCBiZSBmb3VuZCBpbiB0aGUgZG9jdW1lbnQgLVxuICAgIC8vIGJhZCBzcGVjaWZpY2l0eSBpc3N1ZXMgbWF5IGFwcGVhci5cblxuXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZ19fZGVmYXVsdFsnZGVmYXVsdCddKGZhbHNlLCBcIltKU1NdIEluc2VydGlvbiBwb2ludCBcXFwiXCIgKyBpbnNlcnRpb25Qb2ludCArIFwiXFxcIiBub3QgZm91bmQuXCIpIDogdm9pZCAwO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuLyoqXG4gKiBJbnNlcnQgc3R5bGUgZWxlbWVudCBpbnRvIHRoZSBET00uXG4gKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZShzdHlsZSwgb3B0aW9ucykge1xuICB2YXIgaW5zZXJ0aW9uUG9pbnQgPSBvcHRpb25zLmluc2VydGlvblBvaW50O1xuICB2YXIgbmV4dE5vZGUgPSBmaW5kUHJldk5vZGUob3B0aW9ucyk7XG5cbiAgaWYgKG5leHROb2RlICE9PSBmYWxzZSAmJiBuZXh0Tm9kZS5wYXJlbnQpIHtcbiAgICBuZXh0Tm9kZS5wYXJlbnQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0Tm9kZS5ub2RlKTtcbiAgICByZXR1cm47XG4gIH0gLy8gV29ya3Mgd2l0aCBpZnJhbWVzIGFuZCBhbnkgbm9kZSB0eXBlcy5cblxuXG4gIGlmIChpbnNlcnRpb25Qb2ludCAmJiB0eXBlb2YgaW5zZXJ0aW9uUG9pbnQubm9kZVR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDEzMjg3MjgvZm9yY2UtY2FzdGluZy1pbi1mbG93XG4gICAgdmFyIGluc2VydGlvblBvaW50RWxlbWVudCA9IGluc2VydGlvblBvaW50O1xuICAgIHZhciBwYXJlbnROb2RlID0gaW5zZXJ0aW9uUG9pbnRFbGVtZW50LnBhcmVudE5vZGU7XG4gICAgaWYgKHBhcmVudE5vZGUpIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHN0eWxlLCBpbnNlcnRpb25Qb2ludEVsZW1lbnQubmV4dFNpYmxpbmcpO2Vsc2UgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZ19fZGVmYXVsdFsnZGVmYXVsdCddKGZhbHNlLCAnW0pTU10gSW5zZXJ0aW9uIHBvaW50IGlzIG5vdCBpbiB0aGUgRE9NLicpIDogdm9pZCAwO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGdldEhlYWQoKS5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG4vKipcbiAqIFJlYWQganNzIG5vbmNlIHNldHRpbmcgZnJvbSB0aGUgcGFnZSBpZiB0aGUgdXNlciBoYXMgc2V0IGl0LlxuICovXG5cblxudmFyIGdldE5vbmNlID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG4gIHZhciBub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtwcm9wZXJ0eT1cImNzcC1ub25jZVwiXScpO1xuICByZXR1cm4gbm9kZSA/IG5vZGUuZ2V0QXR0cmlidXRlKCdjb250ZW50JykgOiBudWxsO1xufSk7XG5cbnZhciBfaW5zZXJ0UnVsZSA9IGZ1bmN0aW9uIGluc2VydFJ1bGUoY29udGFpbmVyLCBydWxlLCBpbmRleCkge1xuICB0cnkge1xuICAgIGlmICgnaW5zZXJ0UnVsZScgaW4gY29udGFpbmVyKSB7XG4gICAgICB2YXIgYyA9IGNvbnRhaW5lcjtcbiAgICAgIGMuaW5zZXJ0UnVsZShydWxlLCBpbmRleCk7XG4gICAgfSAvLyBLZXlmcmFtZXMgcnVsZS5cbiAgICBlbHNlIGlmICgnYXBwZW5kUnVsZScgaW4gY29udGFpbmVyKSB7XG4gICAgICAgIHZhciBfYyA9IGNvbnRhaW5lcjtcblxuICAgICAgICBfYy5hcHBlbmRSdWxlKHJ1bGUpO1xuICAgICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nX19kZWZhdWx0WydkZWZhdWx0J10oZmFsc2UsIFwiW0pTU10gXCIgKyBlcnIubWVzc2FnZSkgOiB2b2lkIDA7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRhaW5lci5jc3NSdWxlc1tpbmRleF07XG59O1xuXG52YXIgZ2V0VmFsaWRSdWxlSW5zZXJ0aW9uSW5kZXggPSBmdW5jdGlvbiBnZXRWYWxpZFJ1bGVJbnNlcnRpb25JbmRleChjb250YWluZXIsIGluZGV4KSB7XG4gIHZhciBtYXhJbmRleCA9IGNvbnRhaW5lci5jc3NSdWxlcy5sZW5ndGg7IC8vIEluIGNhc2UgcHJldmlvdXMgaW5zZXJ0aW9uIGZhaWxzLCBwYXNzZWQgaW5kZXggbWlnaHQgYmUgd3JvbmdcblxuICBpZiAoaW5kZXggPT09IHVuZGVmaW5lZCB8fCBpbmRleCA+IG1heEluZGV4KSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgcmV0dXJuIG1heEluZGV4O1xuICB9XG5cbiAgcmV0dXJuIGluZGV4O1xufTtcblxudmFyIGNyZWF0ZVN0eWxlID0gZnVuY3Rpb24gY3JlYXRlU3R5bGUoKSB7XG4gIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7IC8vIFdpdGhvdXQgaXQsIElFIHdpbGwgaGF2ZSBhIGJyb2tlbiBzb3VyY2Ugb3JkZXIgc3BlY2lmaWNpdHkgaWYgd2VcbiAgLy8gaW5zZXJ0IHJ1bGVzIGFmdGVyIHdlIGluc2VydCB0aGUgc3R5bGUgdGFnLlxuICAvLyBJdCBzZWVtcyB0byBraWNrLW9mZiB0aGUgc291cmNlIG9yZGVyIHNwZWNpZmljaXR5IGFsZ29yaXRobS5cblxuICBlbC50ZXh0Q29udGVudCA9ICdcXG4nO1xuICByZXR1cm4gZWw7XG59O1xuXG52YXIgRG9tUmVuZGVyZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICAvLyBIVE1MU3R5bGVFbGVtZW50IG5lZWRzIGZpeGluZyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmxvdy9pc3N1ZXMvMjY5NlxuICAvLyBXaWxsIGJlIGVtcHR5IGlmIGxpbms6IHRydWUgb3B0aW9uIGlzIG5vdCBzZXQsIGJlY2F1c2VcbiAgLy8gaXQgaXMgb25seSBmb3IgdXNlIHRvZ2V0aGVyIHdpdGggaW5zZXJ0UnVsZSBBUEkuXG4gIGZ1bmN0aW9uIERvbVJlbmRlcmVyKHNoZWV0KSB7XG4gICAgdGhpcy5nZXRQcm9wZXJ0eVZhbHVlID0gZ2V0UHJvcGVydHlWYWx1ZTtcbiAgICB0aGlzLnNldFByb3BlcnR5ID0gc2V0UHJvcGVydHk7XG4gICAgdGhpcy5yZW1vdmVQcm9wZXJ0eSA9IHJlbW92ZVByb3BlcnR5O1xuICAgIHRoaXMuc2V0U2VsZWN0b3IgPSBzZXRTZWxlY3RvcjtcbiAgICB0aGlzLmVsZW1lbnQgPSB2b2lkIDA7XG4gICAgdGhpcy5zaGVldCA9IHZvaWQgMDtcbiAgICB0aGlzLmhhc0luc2VydGVkUnVsZXMgPSBmYWxzZTtcbiAgICB0aGlzLmNzc1J1bGVzID0gW107XG4gICAgLy8gVGhlcmUgaXMgbm8gc2hlZXQgd2hlbiB0aGUgcmVuZGVyZXIgaXMgdXNlZCBmcm9tIGEgc3RhbmRhbG9uZSBTdHlsZVJ1bGUuXG4gICAgaWYgKHNoZWV0KSByZWdpc3RyeS5hZGQoc2hlZXQpO1xuICAgIHRoaXMuc2hlZXQgPSBzaGVldDtcblxuICAgIHZhciBfcmVmID0gdGhpcy5zaGVldCA/IHRoaXMuc2hlZXQub3B0aW9ucyA6IHt9LFxuICAgICAgICBtZWRpYSA9IF9yZWYubWVkaWEsXG4gICAgICAgIG1ldGEgPSBfcmVmLm1ldGEsXG4gICAgICAgIGVsZW1lbnQgPSBfcmVmLmVsZW1lbnQ7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50IHx8IGNyZWF0ZVN0eWxlKCk7XG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1qc3MnLCAnJyk7XG4gICAgaWYgKG1lZGlhKSB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgICBpZiAobWV0YSkgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1tZXRhJywgbWV0YSk7XG4gICAgdmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcbiAgICBpZiAobm9uY2UpIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25vbmNlJywgbm9uY2UpO1xuICB9XG4gIC8qKlxuICAgKiBJbnNlcnQgc3R5bGUgZWxlbWVudCBpbnRvIHJlbmRlciB0cmVlLlxuICAgKi9cblxuXG4gIHZhciBfcHJvdG8gPSBEb21SZW5kZXJlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmF0dGFjaCA9IGZ1bmN0aW9uIGF0dGFjaCgpIHtcbiAgICAvLyBJbiB0aGUgY2FzZSB0aGUgZWxlbWVudCBub2RlIGlzIGV4dGVybmFsIGFuZCBpdCBpcyBhbHJlYWR5IGluIHRoZSBET00uXG4gICAgaWYgKHRoaXMuZWxlbWVudC5wYXJlbnROb2RlIHx8ICF0aGlzLnNoZWV0KSByZXR1cm47XG4gICAgaW5zZXJ0U3R5bGUodGhpcy5lbGVtZW50LCB0aGlzLnNoZWV0Lm9wdGlvbnMpOyAvLyBXaGVuIHJ1bGVzIGFyZSBpbnNlcnRlZCB1c2luZyBgaW5zZXJ0UnVsZWAgQVBJLCBhZnRlciBgc2hlZXQuZGV0YWNoKCkuYXR0YWNoKClgXG4gICAgLy8gbW9zdCBicm93c2VycyBjcmVhdGUgYSBuZXcgQ1NTU3R5bGVTaGVldCwgZXhjZXB0IG9mIGFsbCBJRXMuXG5cbiAgICB2YXIgZGVwbG95ZWQgPSBCb29sZWFuKHRoaXMuc2hlZXQgJiYgdGhpcy5zaGVldC5kZXBsb3llZCk7XG5cbiAgICBpZiAodGhpcy5oYXNJbnNlcnRlZFJ1bGVzICYmIGRlcGxveWVkKSB7XG4gICAgICB0aGlzLmhhc0luc2VydGVkUnVsZXMgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVwbG95KCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBSZW1vdmUgc3R5bGUgZWxlbWVudCBmcm9tIHJlbmRlciB0cmVlLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5kZXRhY2ggPSBmdW5jdGlvbiBkZXRhY2goKSB7XG4gICAgaWYgKCF0aGlzLnNoZWV0KSByZXR1cm47XG4gICAgdmFyIHBhcmVudE5vZGUgPSB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICBpZiAocGFyZW50Tm9kZSkgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpOyAvLyBJbiB0aGUgbW9zdCBicm93c2VycywgcnVsZXMgaW5zZXJ0ZWQgdXNpbmcgaW5zZXJ0UnVsZSgpIEFQSSB3aWxsIGJlIGxvc3Qgd2hlbiBzdHlsZSBlbGVtZW50IGlzIHJlbW92ZWQuXG4gICAgLy8gVGhvdWdoIElFIHdpbGwga2VlcCB0aGVtIGFuZCB3ZSBuZWVkIGEgY29uc2lzdGVudCBiZWhhdmlvci5cblxuICAgIGlmICh0aGlzLnNoZWV0Lm9wdGlvbnMubGluaykge1xuICAgICAgdGhpcy5jc3NSdWxlcyA9IFtdO1xuICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ1xcbic7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBJbmplY3QgQ1NTIHN0cmluZyBpbnRvIGVsZW1lbnQuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmRlcGxveSA9IGZ1bmN0aW9uIGRlcGxveSgpIHtcbiAgICB2YXIgc2hlZXQgPSB0aGlzLnNoZWV0O1xuICAgIGlmICghc2hlZXQpIHJldHVybjtcblxuICAgIGlmIChzaGVldC5vcHRpb25zLmxpbmspIHtcbiAgICAgIHRoaXMuaW5zZXJ0UnVsZXMoc2hlZXQucnVsZXMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9IFwiXFxuXCIgKyBzaGVldC50b1N0cmluZygpICsgXCJcXG5cIjtcbiAgfVxuICAvKipcbiAgICogSW5zZXJ0IFJ1bGVMaXN0IGludG8gYW4gZWxlbWVudC5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uaW5zZXJ0UnVsZXMgPSBmdW5jdGlvbiBpbnNlcnRSdWxlcyhydWxlcywgbmF0aXZlUGFyZW50KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBydWxlcy5pbmRleC5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5pbnNlcnRSdWxlKHJ1bGVzLmluZGV4W2ldLCBpLCBuYXRpdmVQYXJlbnQpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogSW5zZXJ0IGEgcnVsZSBpbnRvIGVsZW1lbnQuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmluc2VydFJ1bGUgPSBmdW5jdGlvbiBpbnNlcnRSdWxlKHJ1bGUsIGluZGV4LCBuYXRpdmVQYXJlbnQpIHtcbiAgICBpZiAobmF0aXZlUGFyZW50ID09PSB2b2lkIDApIHtcbiAgICAgIG5hdGl2ZVBhcmVudCA9IHRoaXMuZWxlbWVudC5zaGVldDtcbiAgICB9XG5cbiAgICBpZiAocnVsZS5ydWxlcykge1xuICAgICAgdmFyIHBhcmVudCA9IHJ1bGU7XG4gICAgICB2YXIgbGF0ZXN0TmF0aXZlUGFyZW50ID0gbmF0aXZlUGFyZW50O1xuXG4gICAgICBpZiAocnVsZS50eXBlID09PSAnY29uZGl0aW9uYWwnIHx8IHJ1bGUudHlwZSA9PT0gJ2tleWZyYW1lcycpIHtcbiAgICAgICAgdmFyIF9pbnNlcnRpb25JbmRleCA9IGdldFZhbGlkUnVsZUluc2VydGlvbkluZGV4KG5hdGl2ZVBhcmVudCwgaW5kZXgpOyAvLyBXZSBuZWVkIHRvIHJlbmRlciB0aGUgY29udGFpbmVyIHdpdGhvdXQgY2hpbGRyZW4gZmlyc3QuXG5cblxuICAgICAgICBsYXRlc3ROYXRpdmVQYXJlbnQgPSBfaW5zZXJ0UnVsZShuYXRpdmVQYXJlbnQsIHBhcmVudC50b1N0cmluZyh7XG4gICAgICAgICAgY2hpbGRyZW46IGZhbHNlXG4gICAgICAgIH0pLCBfaW5zZXJ0aW9uSW5kZXgpO1xuXG4gICAgICAgIGlmIChsYXRlc3ROYXRpdmVQYXJlbnQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZWZDc3NSdWxlKHJ1bGUsIF9pbnNlcnRpb25JbmRleCwgbGF0ZXN0TmF0aXZlUGFyZW50KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pbnNlcnRSdWxlcyhwYXJlbnQucnVsZXMsIGxhdGVzdE5hdGl2ZVBhcmVudCk7XG4gICAgICByZXR1cm4gbGF0ZXN0TmF0aXZlUGFyZW50O1xuICAgIH1cblxuICAgIHZhciBydWxlU3RyID0gcnVsZS50b1N0cmluZygpO1xuICAgIGlmICghcnVsZVN0cikgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBpbnNlcnRpb25JbmRleCA9IGdldFZhbGlkUnVsZUluc2VydGlvbkluZGV4KG5hdGl2ZVBhcmVudCwgaW5kZXgpO1xuXG4gICAgdmFyIG5hdGl2ZVJ1bGUgPSBfaW5zZXJ0UnVsZShuYXRpdmVQYXJlbnQsIHJ1bGVTdHIsIGluc2VydGlvbkluZGV4KTtcblxuICAgIGlmIChuYXRpdmVSdWxlID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMuaGFzSW5zZXJ0ZWRSdWxlcyA9IHRydWU7XG4gICAgdGhpcy5yZWZDc3NSdWxlKHJ1bGUsIGluc2VydGlvbkluZGV4LCBuYXRpdmVSdWxlKTtcbiAgICByZXR1cm4gbmF0aXZlUnVsZTtcbiAgfTtcblxuICBfcHJvdG8ucmVmQ3NzUnVsZSA9IGZ1bmN0aW9uIHJlZkNzc1J1bGUocnVsZSwgaW5kZXgsIGNzc1J1bGUpIHtcbiAgICBydWxlLnJlbmRlcmFibGUgPSBjc3NSdWxlOyAvLyBXZSBvbmx5IHdhbnQgdG8gcmVmZXJlbmNlIHRoZSB0b3AgbGV2ZWwgcnVsZXMsIGRlbGV0ZVJ1bGUgQVBJIGRvZXNuJ3Qgc3VwcG9ydCByZW1vdmluZyBuZXN0ZWQgcnVsZXNcbiAgICAvLyBsaWtlIHJ1bGVzIGluc2lkZSBtZWRpYSBxdWVyaWVzIG9yIGtleWZyYW1lc1xuXG4gICAgaWYgKHJ1bGUub3B0aW9ucy5wYXJlbnQgaW5zdGFuY2VvZiBTdHlsZVNoZWV0KSB7XG4gICAgICB0aGlzLmNzc1J1bGVzW2luZGV4XSA9IGNzc1J1bGU7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBEZWxldGUgYSBydWxlLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5kZWxldGVSdWxlID0gZnVuY3Rpb24gZGVsZXRlUnVsZShjc3NSdWxlKSB7XG4gICAgdmFyIHNoZWV0ID0gdGhpcy5lbGVtZW50LnNoZWV0O1xuICAgIHZhciBpbmRleCA9IHRoaXMuaW5kZXhPZihjc3NSdWxlKTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSByZXR1cm4gZmFsc2U7XG4gICAgc2hlZXQuZGVsZXRlUnVsZShpbmRleCk7XG4gICAgdGhpcy5jc3NSdWxlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgaW5kZXggb2YgYSBDU1MgUnVsZS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uaW5kZXhPZiA9IGZ1bmN0aW9uIGluZGV4T2YoY3NzUnVsZSkge1xuICAgIHJldHVybiB0aGlzLmNzc1J1bGVzLmluZGV4T2YoY3NzUnVsZSk7XG4gIH1cbiAgLyoqXG4gICAqIEdlbmVyYXRlIGEgbmV3IENTUyBydWxlIGFuZCByZXBsYWNlIHRoZSBleGlzdGluZyBvbmUuXG4gICAqXG4gICAqIE9ubHkgdXNlZCBmb3Igc29tZSBvbGQgYnJvd3NlcnMgYmVjYXVzZSB0aGV5IGNhbid0IHNldCBhIHNlbGVjdG9yLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5yZXBsYWNlUnVsZSA9IGZ1bmN0aW9uIHJlcGxhY2VSdWxlKGNzc1J1bGUsIHJ1bGUpIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLmluZGV4T2YoY3NzUnVsZSk7XG4gICAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuIGZhbHNlO1xuICAgIHRoaXMuZWxlbWVudC5zaGVldC5kZWxldGVSdWxlKGluZGV4KTtcbiAgICB0aGlzLmNzc1J1bGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgcmV0dXJuIHRoaXMuaW5zZXJ0UnVsZShydWxlLCBpbmRleCk7XG4gIH1cbiAgLyoqXG4gICAqIEdldCBhbGwgcnVsZXMgZWxlbWVudHMuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmdldFJ1bGVzID0gZnVuY3Rpb24gZ2V0UnVsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5zaGVldC5jc3NSdWxlcztcbiAgfTtcblxuICByZXR1cm4gRG9tUmVuZGVyZXI7XG59KCk7XG5cbnZhciBpbnN0YW5jZUNvdW50ZXIgPSAwO1xuXG52YXIgSnNzID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gSnNzKG9wdGlvbnMpIHtcbiAgICB0aGlzLmlkID0gaW5zdGFuY2VDb3VudGVyKys7XG4gICAgdGhpcy52ZXJzaW9uID0gXCIxMC43LjFcIjtcbiAgICB0aGlzLnBsdWdpbnMgPSBuZXcgUGx1Z2luc1JlZ2lzdHJ5KCk7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgaWQ6IHtcbiAgICAgICAgbWluaWZ5OiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGNyZWF0ZUdlbmVyYXRlSWQ6IGNyZWF0ZUdlbmVyYXRlSWQsXG4gICAgICBSZW5kZXJlcjogaXNJbkJyb3dzZXJfX2RlZmF1bHRbJ2RlZmF1bHQnXSA/IERvbVJlbmRlcmVyIDogbnVsbCxcbiAgICAgIHBsdWdpbnM6IFtdXG4gICAgfTtcbiAgICB0aGlzLmdlbmVyYXRlSWQgPSBjcmVhdGVHZW5lcmF0ZUlkKHtcbiAgICAgIG1pbmlmeTogZmFsc2VcbiAgICB9KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGx1Z2lucy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5wbHVnaW5zLnVzZShwbHVnaW5zW2ldLCB7XG4gICAgICAgIHF1ZXVlOiAnaW50ZXJuYWwnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnNldHVwKG9wdGlvbnMpO1xuICB9XG4gIC8qKlxuICAgKiBQcmVwYXJlcyB2YXJpb3VzIG9wdGlvbnMsIGFwcGxpZXMgcGx1Z2lucy5cbiAgICogU2hvdWxkIG5vdCBiZSB1c2VkIHR3aWNlIG9uIHRoZSBzYW1lIGluc3RhbmNlLCBiZWNhdXNlIHRoZXJlIGlzIG5vIHBsdWdpbnNcbiAgICogZGVkdXBsaWNhdGlvbiBsb2dpYy5cbiAgICovXG5cblxuICB2YXIgX3Byb3RvID0gSnNzLnByb3RvdHlwZTtcblxuICBfcHJvdG8uc2V0dXAgPSBmdW5jdGlvbiBzZXR1cChvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmNyZWF0ZUdlbmVyYXRlSWQpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5jcmVhdGVHZW5lcmF0ZUlkID0gb3B0aW9ucy5jcmVhdGVHZW5lcmF0ZUlkO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmlkKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuaWQgPSBfZXh0ZW5kc19fZGVmYXVsdFsnZGVmYXVsdCddKHt9LCB0aGlzLm9wdGlvbnMuaWQsIG9wdGlvbnMuaWQpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmNyZWF0ZUdlbmVyYXRlSWQgfHwgb3B0aW9ucy5pZCkge1xuICAgICAgdGhpcy5nZW5lcmF0ZUlkID0gdGhpcy5vcHRpb25zLmNyZWF0ZUdlbmVyYXRlSWQodGhpcy5vcHRpb25zLmlkKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5pbnNlcnRpb25Qb2ludCAhPSBudWxsKSB0aGlzLm9wdGlvbnMuaW5zZXJ0aW9uUG9pbnQgPSBvcHRpb25zLmluc2VydGlvblBvaW50O1xuXG4gICAgaWYgKCdSZW5kZXJlcicgaW4gb3B0aW9ucykge1xuICAgICAgdGhpcy5vcHRpb25zLlJlbmRlcmVyID0gb3B0aW9ucy5SZW5kZXJlcjtcbiAgICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItc3ByZWFkXG5cblxuICAgIGlmIChvcHRpb25zLnBsdWdpbnMpIHRoaXMudXNlLmFwcGx5KHRoaXMsIG9wdGlvbnMucGx1Z2lucyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZSBhIFN0eWxlIFNoZWV0LlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5jcmVhdGVTdHlsZVNoZWV0ID0gZnVuY3Rpb24gY3JlYXRlU3R5bGVTaGVldChzdHlsZXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgICAgaW5kZXggPSBfb3B0aW9ucy5pbmRleDtcblxuICAgIGlmICh0eXBlb2YgaW5kZXggIT09ICdudW1iZXInKSB7XG4gICAgICBpbmRleCA9IHJlZ2lzdHJ5LmluZGV4ID09PSAwID8gMCA6IHJlZ2lzdHJ5LmluZGV4ICsgMTtcbiAgICB9XG5cbiAgICB2YXIgc2hlZXQgPSBuZXcgU3R5bGVTaGVldChzdHlsZXMsIF9leHRlbmRzX19kZWZhdWx0WydkZWZhdWx0J10oe30sIG9wdGlvbnMsIHtcbiAgICAgIGpzczogdGhpcyxcbiAgICAgIGdlbmVyYXRlSWQ6IG9wdGlvbnMuZ2VuZXJhdGVJZCB8fCB0aGlzLmdlbmVyYXRlSWQsXG4gICAgICBpbnNlcnRpb25Qb2ludDogdGhpcy5vcHRpb25zLmluc2VydGlvblBvaW50LFxuICAgICAgUmVuZGVyZXI6IHRoaXMub3B0aW9ucy5SZW5kZXJlcixcbiAgICAgIGluZGV4OiBpbmRleFxuICAgIH0pKTtcbiAgICB0aGlzLnBsdWdpbnMub25Qcm9jZXNzU2hlZXQoc2hlZXQpO1xuICAgIHJldHVybiBzaGVldDtcbiAgfVxuICAvKipcbiAgICogRGV0YWNoIHRoZSBTdHlsZSBTaGVldCBhbmQgcmVtb3ZlIGl0IGZyb20gdGhlIHJlZ2lzdHJ5LlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5yZW1vdmVTdHlsZVNoZWV0ID0gZnVuY3Rpb24gcmVtb3ZlU3R5bGVTaGVldChzaGVldCkge1xuICAgIHNoZWV0LmRldGFjaCgpO1xuICAgIHJlZ2lzdHJ5LnJlbW92ZShzaGVldCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHJ1bGUgd2l0aG91dCBhIFN0eWxlIFNoZWV0LlxuICAgKiBbRGVwcmVjYXRlZF0gd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHZlcnNpb24uXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmNyZWF0ZVJ1bGUgPSBmdW5jdGlvbiBjcmVhdGVSdWxlJDEobmFtZSwgc3R5bGUsIG9wdGlvbnMpIHtcbiAgICBpZiAoc3R5bGUgPT09IHZvaWQgMCkge1xuICAgICAgc3R5bGUgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgLy8gRW5hYmxlIHJ1bGUgd2l0aG91dCBuYW1lIGZvciBpbmxpbmUgc3R5bGVzLlxuICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhbGxdXG4gICAgICByZXR1cm4gdGhpcy5jcmVhdGVSdWxlKHVuZGVmaW5lZCwgbmFtZSwgc3R5bGUpO1xuICAgIH0gLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtdHlwZV1cblxuXG4gICAgdmFyIHJ1bGVPcHRpb25zID0gX2V4dGVuZHNfX2RlZmF1bHRbJ2RlZmF1bHQnXSh7fSwgb3B0aW9ucywge1xuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGpzczogdGhpcyxcbiAgICAgIFJlbmRlcmVyOiB0aGlzLm9wdGlvbnMuUmVuZGVyZXJcbiAgICB9KTtcblxuICAgIGlmICghcnVsZU9wdGlvbnMuZ2VuZXJhdGVJZCkgcnVsZU9wdGlvbnMuZ2VuZXJhdGVJZCA9IHRoaXMuZ2VuZXJhdGVJZDtcbiAgICBpZiAoIXJ1bGVPcHRpb25zLmNsYXNzZXMpIHJ1bGVPcHRpb25zLmNsYXNzZXMgPSB7fTtcbiAgICBpZiAoIXJ1bGVPcHRpb25zLmtleWZyYW1lcykgcnVsZU9wdGlvbnMua2V5ZnJhbWVzID0ge307XG5cbiAgICB2YXIgcnVsZSA9IGNyZWF0ZVJ1bGUobmFtZSwgc3R5bGUsIHJ1bGVPcHRpb25zKTtcblxuICAgIGlmIChydWxlKSB0aGlzLnBsdWdpbnMub25Qcm9jZXNzUnVsZShydWxlKTtcbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuICAvKipcbiAgICogUmVnaXN0ZXIgcGx1Z2luLiBQYXNzZWQgZnVuY3Rpb24gd2lsbCBiZSBpbnZva2VkIHdpdGggYSBydWxlIGluc3RhbmNlLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by51c2UgPSBmdW5jdGlvbiB1c2UoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwbHVnaW5zID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgcGx1Z2luc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBwbHVnaW5zLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgX3RoaXMucGx1Z2lucy51c2UocGx1Z2luKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICByZXR1cm4gSnNzO1xufSgpO1xuXG4vKipcbiAqIEV4dHJhY3RzIGEgc3R5bGVzIG9iamVjdCB3aXRoIG9ubHkgcHJvcHMgdGhhdCBjb250YWluIGZ1bmN0aW9uIHZhbHVlcy5cbiAqL1xuZnVuY3Rpb24gZ2V0RHluYW1pY1N0eWxlcyhzdHlsZXMpIHtcbiAgdmFyIHRvID0gbnVsbDtcblxuICBmb3IgKHZhciBrZXkgaW4gc3R5bGVzKSB7XG4gICAgdmFyIHZhbHVlID0gc3R5bGVzW2tleV07XG4gICAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG5cbiAgICBpZiAodHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKCF0bykgdG8gPSB7fTtcbiAgICAgIHRvW2tleV0gPSB2YWx1ZTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFyIGV4dHJhY3RlZCA9IGdldER5bmFtaWNTdHlsZXModmFsdWUpO1xuXG4gICAgICBpZiAoZXh0cmFjdGVkKSB7XG4gICAgICAgIGlmICghdG8pIHRvID0ge307XG4gICAgICAgIHRvW2tleV0gPSBleHRyYWN0ZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRvO1xufVxuXG4vKipcbiAqIFNoZWV0c01hbmFnZXIgaXMgbGlrZSBhIFdlYWtNYXAgd2hpY2ggaXMgZGVzaWduZWQgdG8gY291bnQgU3R5bGVTaGVldFxuICogaW5zdGFuY2VzIGFuZCBhdHRhY2gvZGV0YWNoIGF1dG9tYXRpY2FsbHkuXG4gKi9cbnZhciBTaGVldHNNYW5hZ2VyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU2hlZXRzTWFuYWdlcigpIHtcbiAgICB0aGlzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5zaGVldHMgPSBuZXcgV2Vha01hcCgpO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFNoZWV0c01hbmFnZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5nZXQgPSBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgdmFyIGVudHJ5ID0gdGhpcy5zaGVldHMuZ2V0KGtleSk7XG4gICAgcmV0dXJuIGVudHJ5ICYmIGVudHJ5LnNoZWV0O1xuICB9O1xuXG4gIF9wcm90by5hZGQgPSBmdW5jdGlvbiBhZGQoa2V5LCBzaGVldCkge1xuICAgIGlmICh0aGlzLnNoZWV0cy5oYXMoa2V5KSkgcmV0dXJuO1xuICAgIHRoaXMubGVuZ3RoKys7XG4gICAgdGhpcy5zaGVldHMuc2V0KGtleSwge1xuICAgICAgc2hlZXQ6IHNoZWV0LFxuICAgICAgcmVmczogMFxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5tYW5hZ2UgPSBmdW5jdGlvbiBtYW5hZ2Uoa2V5KSB7XG4gICAgdmFyIGVudHJ5ID0gdGhpcy5zaGVldHMuZ2V0KGtleSk7XG5cbiAgICBpZiAoZW50cnkpIHtcbiAgICAgIGlmIChlbnRyeS5yZWZzID09PSAwKSB7XG4gICAgICAgIGVudHJ5LnNoZWV0LmF0dGFjaCgpO1xuICAgICAgfVxuXG4gICAgICBlbnRyeS5yZWZzKys7XG4gICAgICByZXR1cm4gZW50cnkuc2hlZXQ7XG4gICAgfVxuXG4gICAgd2FybmluZ19fZGVmYXVsdFsnZGVmYXVsdCddKGZhbHNlLCBcIltKU1NdIFNoZWV0c01hbmFnZXI6IGNhbid0IGZpbmQgc2hlZXQgdG8gbWFuYWdlXCIpO1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH07XG5cbiAgX3Byb3RvLnVubWFuYWdlID0gZnVuY3Rpb24gdW5tYW5hZ2Uoa2V5KSB7XG4gICAgdmFyIGVudHJ5ID0gdGhpcy5zaGVldHMuZ2V0KGtleSk7XG5cbiAgICBpZiAoZW50cnkpIHtcbiAgICAgIGlmIChlbnRyeS5yZWZzID4gMCkge1xuICAgICAgICBlbnRyeS5yZWZzLS07XG4gICAgICAgIGlmIChlbnRyeS5yZWZzID09PSAwKSBlbnRyeS5zaGVldC5kZXRhY2goKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgd2FybmluZ19fZGVmYXVsdFsnZGVmYXVsdCddKGZhbHNlLCBcIlNoZWV0c01hbmFnZXI6IGNhbid0IGZpbmQgc2hlZXQgdG8gdW5tYW5hZ2VcIik7XG4gICAgfVxuICB9O1xuXG4gIF9jcmVhdGVDbGFzc19fZGVmYXVsdFsnZGVmYXVsdCddKFNoZWV0c01hbmFnZXIsIFt7XG4gICAga2V5OiBcInNpemVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmxlbmd0aDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU2hlZXRzTWFuYWdlcjtcbn0oKTtcblxuLyoqXG4gKiBBIGJldHRlciBhYnN0cmFjdGlvbiBvdmVyIENTUy5cbiAqXG4gKiBAY29weXJpZ2h0IE9sZWcgSXNvbmVuIChTbG9ib2Rza29pKSAvIElzb25lbiAyMDE0LXByZXNlbnRcbiAqIEB3ZWJzaXRlIGh0dHBzOi8vZ2l0aHViLmNvbS9jc3NpbmpzL2pzc1xuICogQGxpY2Vuc2UgTUlUXG4gKi9cblxuLyoqXG4gKiBFeHBvcnQgYSBjb25zdGFudCBpbmRpY2F0aW5nIGlmIHRoaXMgYnJvd3NlciBoYXMgQ1NTVE9NIHN1cHBvcnQuXG4gKiBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvdXBkYXRlcy8yMDE4LzAzL2Nzc29tXG4gKi9cbnZhciBoYXNDU1NUT01TdXBwb3J0ID0gdHlwZW9mIENTUyA9PT0gJ29iamVjdCcgJiYgQ1NTICE9IG51bGwgJiYgJ251bWJlcicgaW4gQ1NTO1xuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIEpzcy5cbiAqL1xuXG52YXIgY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKG9wdGlvbnMpIHtcbiAgcmV0dXJuIG5ldyBKc3Mob3B0aW9ucyk7XG59O1xuLyoqXG4gKiBBIGdsb2JhbCBKc3MgaW5zdGFuY2UuXG4gKi9cblxudmFyIGpzcyA9IGNyZWF0ZSgpO1xuXG5leHBvcnRzLlJ1bGVMaXN0ID0gUnVsZUxpc3Q7XG5leHBvcnRzLlNoZWV0c01hbmFnZXIgPSBTaGVldHNNYW5hZ2VyO1xuZXhwb3J0cy5TaGVldHNSZWdpc3RyeSA9IFNoZWV0c1JlZ2lzdHJ5O1xuZXhwb3J0cy5jcmVhdGUgPSBjcmVhdGU7XG5leHBvcnRzLmNyZWF0ZUdlbmVyYXRlSWQgPSBjcmVhdGVHZW5lcmF0ZUlkO1xuZXhwb3J0cy5jcmVhdGVSdWxlID0gY3JlYXRlUnVsZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGpzcztcbmV4cG9ydHMuZ2V0RHluYW1pY1N0eWxlcyA9IGdldER5bmFtaWNTdHlsZXM7XG5leHBvcnRzLmhhc0NTU1RPTVN1cHBvcnQgPSBoYXNDU1NUT01TdXBwb3J0O1xuZXhwb3J0cy5zaGVldHMgPSByZWdpc3RyeTtcbmV4cG9ydHMudG9Dc3NWYWx1ZSA9IHRvQ3NzVmFsdWU7XG4iLCJpbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJztcclxuY29uc3QgeyBwdWJsaWNSdW50aW1lQ29uZmlnIH0gPSBnZXRDb25maWcoKTtcclxuXHJcbmV4cG9ydCBjb25zdCB2YWxpZGF0ZVRva2VuID0gYXN5bmMgKHRva2VuKSA9PiB7XHJcbiAgdmFyIG15SGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgbXlIZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuICBteUhlYWRlcnMuYXBwZW5kKCdhdXRob3JpemF0aW9uJywgJ0JlYXJlciAnICsgdG9rZW4pO1xyXG5cclxuICB2YXIgcmVxdWVzdE9wdGlvbnMgPSB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGhlYWRlcnM6IG15SGVhZGVycyxcclxuICAgIGJvZHk6IG51bGwsXHJcbiAgICByZWRpcmVjdDogJ2ZvbGxvdycsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgIGAke3B1YmxpY1J1bnRpbWVDb25maWcuYmFja2VuZH0vdXNlcnMvdmFsaWRhdGVUb2tlbmAsXHJcbiAgICByZXF1ZXN0T3B0aW9uc1xyXG4gICk7XHJcblxyXG4gIHJldHVybiByZXNwb25zZTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGxvZ2luID0gYXN5bmMgKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xyXG4gIHZhciBteUhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gIG15SGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgdmFyIHJhdyA9IEpTT04uc3RyaW5naWZ5KHtcclxuICAgIGVtYWlsLFxyXG4gICAgcGFzc3dvcmQsXHJcbiAgfSk7XHJcblxyXG4gIHZhciByZXF1ZXN0T3B0aW9ucyA9IHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgaGVhZGVyczogbXlIZWFkZXJzLFxyXG4gICAgYm9keTogcmF3LFxyXG4gICAgcmVkaXJlY3Q6ICdmb2xsb3cnLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICBgJHtwdWJsaWNSdW50aW1lQ29uZmlnLmJhY2tlbmR9L3VzZXJzL2xvZ2luYCxcclxuICAgIHJlcXVlc3RPcHRpb25zXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHJlc3BvbnNlO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpZ25VcCA9IGFzeW5jIChuYW1lLCBlbWFpbCwgdXNlck5hbWUsIHBhc3N3b3JkKSA9PiB7XHJcbiAgdmFyIG15SGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgbXlIZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuICB2YXIgcmF3ID0gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgbmFtZSxcclxuICAgIGVtYWlsLFxyXG4gICAgdXNlck5hbWUsXHJcbiAgICBwYXNzd29yZCxcclxuICB9KTtcclxuXHJcbiAgdmFyIHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBoZWFkZXJzOiBteUhlYWRlcnMsXHJcbiAgICBib2R5OiByYXcsXHJcbiAgICByZWRpcmVjdDogJ2ZvbGxvdycsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgIGAke3B1YmxpY1J1bnRpbWVDb25maWcuYmFja2VuZH0vdXNlcnMvc2lnbnVwYCxcclxuICAgIHJlcXVlc3RPcHRpb25zXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHJlc3BvbnNlO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3NyYy90aGVtZSc7XG5pbXBvcnQgeyB2YWxpZGF0ZVRva2VuIH0gZnJvbSAnLi4vYXBpL2F1dGhlbnRpY2F0aW9uL2xvZ2luJztcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL3NyYy9yZXN1c2FibGUvc3Bpbm5lcic7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcChwcm9wcykge1xuICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSBwcm9wcztcbiAgY29uc3QgW2xvYWRpbmdBdXRoLCBzZXRMb2FkaW5nQXV0aF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbdXNlclRva2VuLCBzZXRVc2VyVG9rZW5dID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBSZW1vdmUgdGhlIHNlcnZlci1zaWRlIGluamVjdGVkIENTUy5cbiAgICBjb25zdCBqc3NTdHlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanNzLXNlcnZlci1zaWRlJyk7XG4gICAgaWYgKGpzc1N0eWxlcykge1xuICAgICAganNzU3R5bGVzLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoanNzU3R5bGVzKTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBjb25zdCBmZXRjaFRva2VuID0gYXN5bmMgKCkgPT4ge1xuICAvLyAgICAgLy8gc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgLy8gICAgIGxldCBUb2tlbiA9IG51bGw7XG4gIC8vICAgICB0cnkge1xuICAvLyAgICAgICBUb2tlbiA9IGF3YWl0IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyVG9rZW4nKTtcbiAgLy8gICAgIH0gY2F0Y2ggKGUpIHtcbiAgLy8gICAgICAgY29uc29sZS5sb2coJ0Vycm9yIEZldGNoaW5nIFRva2VuJyk7XG4gIC8vICAgICAgIHNldExvYWRpbmdBdXRoKGZhbHNlKTtcbiAgLy8gICAgIH1cblxuICAvLyAgICAgaWYgKFRva2VuICE9IG51bGwpIHtcbiAgLy8gICAgICAgLy92YWxpZGF0ZSBUb2tlbiBIZXJlIGZyb20gc2VydmVyIG9yIGFzeW5jIHN0b3JhZ2UgdG8gZmluZCB1c2VyIHN0YXRlXG4gIC8vICAgICAgIC8vdmFsaWRhdGluZyB0aHJvdWdoIHNlcnZlclxuICAvLyAgICAgICB0cnkge1xuICAvLyAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdmFsaWRhdGVUb2tlbihUb2tlbik7XG4gIC8vICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgLy8gICAgICAgICBpZiAocmVzdWx0LmRhdGE/LmRhdGE/LnVzZXIgIT09IG51bGwpIHtcbiAgLy8gICAgICAgICAgIHNldFVzZXJUb2tlbihUb2tlbik7XG4gIC8vICAgICAgICAgICBzZXRVc2VyKHJlc3VsdC5kYXRhLmRhdGEudXNlcik7XG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICAgIHNldExvYWRpbmdBdXRoKGZhbHNlKTtcbiAgLy8gICAgICAgfSBjYXRjaCAoZSkge1xuICAvLyAgICAgICAgIHNldExvYWRpbmdBdXRoKGZhbHNlKTtcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgc2V0TG9hZGluZ0F1dGgoZmFsc2UpO1xuICAvLyAgICAgfVxuICAvLyAgIH07XG4gIC8vICAgZmV0Y2hUb2tlbigpO1xuICAvLyB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5NeSBwYWdlPC90aXRsZT5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJtaW5pbXVtLXNjYWxlPTEsIGluaXRpYWwtc2NhbGU9MSwgd2lkdGg9ZGV2aWNlLXdpZHRoXCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIHsvKiBDc3NCYXNlbGluZSBraWNrc3RhcnQgYW4gZWxlZ2FudCwgY29uc2lzdGVudCwgYW5kIHNpbXBsZSBiYXNlbGluZSB0byBidWlsZCB1cG9uLiAqL31cbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICAgIHtsb2FkaW5nQXV0aCA/IChcbiAgICAgICAgICA8TG9hZGluZyAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxDb21wb25lbnRcbiAgICAgICAgICAgIHsuLi5wYWdlUHJvcHN9XG4gICAgICAgICAgICB1c2VyPXt1c2VyfVxuICAgICAgICAgICAgc2V0VXNlcj17c2V0VXNlcn1cbiAgICAgICAgICAgIHVzZXJUb2tlbj17dXNlclRva2VufVxuICAgICAgICAgICAgc2V0VXNlclRva2VuPXtzZXRVc2VyVG9rZW59XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdBdmVydGEnO1xuICAgICAgICAgIHNyYzogdXJsKCcvZm9udHMvQXZlcnRhRGVtb1BFQ3V0dGVkRGVtby1SZWd1bGFyLm90ZicpO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQXZlcnRhIEJvbGQnO1xuICAgICAgICAgIHNyYzogdXJsKCcvZm9udHMvQXZlcnRhRGVtb1BFLUV4dHJhQm9sZC5vdGYnKTtcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufVxuXG5NeUFwcC5wcm9wVHlwZXMgPSB7XG4gIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXG4gIHBhZ2VQcm9wczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENpcmN1bGFyUHJvZ3Jlc3MgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2FkaW5nKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6ICc1MCUnLCBsZWZ0OiAnNDclJyB9fT5cclxuICAgICAgPENpcmN1bGFyUHJvZ3Jlc3Mgc2l6ZT1cImxhcmdlXCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG4vLyBDcmVhdGUgYSB0aGVtZSBpbnN0YW5jZS5cblxuY29uc3QgZGFya0dyZWVuID0gJyMwODgxNzgnO1xuY29uc3QgZGFya0JsYWNrID0gJyMzMDM1MzgnO1xuY29uc3QgbGlnaHQgPSAnI2ZmZic7XG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIGNvbW1vbjoge1xuICAgICAgcHJpbWFyeTogYCR7ZGFya0dyZWVufWAsXG4gICAgICBkYXJrQmxhY2s6IGRhcmtCbGFjayxcbiAgICAgIGxpZ2h0OiBsaWdodCxcbiAgICB9LFxuICAgIHByaW1hcnk6IHtcbiAgICAgIG1haW46IGRhcmtCbGFjayxcbiAgICB9LFxuICAgIHNlY29uZGFyeToge1xuICAgICAgbWFpbjogYCR7bGlnaHR9YCxcbiAgICB9LFxuICAgIGJhY2tncm91bmQ6IHtcbiAgICAgIGRlZmF1bHQ6IGxpZ2h0LFxuICAgIH0sXG4gIH0sXG4gIHR5cG9ncmFwaHk6IHtcbiAgICBoMToge1xuICAgICAgZm9udEZhbWlseTogJ0F2ZXJ0YScsXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICBmb250U2l6ZTogJzIuMjVyZW0nLFxuICAgICAgbGluZUhlaWdodDogMS41LFxuICAgICAgY29sb3I6IGRhcmtCbGFjayxcbiAgICB9LFxuICAgIGgyOiB7XG4gICAgICBmb250RmFtaWx5OiAnQXZlcnRhJyxcbiAgICAgIGZvbnRTaXplOiAnMS40cmVtJyxcbiAgICAgIGNvbG9yOiAnIzUwNGU0YicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjUsXG4gICAgfSxcbiAgICBoMzoge1xuICAgICAgZm9udEZhbWlseTogJ0F2ZXJ0YScsXG4gICAgICBmb250U2l6ZTogJzAuNzVyZW0nLFxuICAgICAgY29sb3I6ICcjMDAwJyxcbiAgICAgIGxpbmVIZWlnaHQ6ICcxMnB4JyxcbiAgICAgIGZvbnRXZWlnaHQ6IDMwMCxcbiAgICAgIGZvbnRTdHlsZTogJ25vcm1hbCcsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLjI1cHgnLFxuICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgfSxcbiAgICBoNDoge1xuICAgICAgZm9udEZhbWlseTogJ1JhbGV3YXknLFxuICAgICAgZm9udFNpemU6ICcxLjc1cmVtJyxcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICB9LFxuICAgIGg2OiB7XG4gICAgICBmb250RmFtaWx5OiAnQXZlcnRhJyxcbiAgICAgIGZvbnRTaXplOiAnMS4xcmVtJyxcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNSxcbiAgICB9LFxuICAgIHN1YnRpdGxlMToge1xuICAgICAgZm9udEZhbWlseTogJ0F2ZXJ0YScsXG4gICAgICBmb250U2l6ZTogJzEuMjVyZW0nLFxuICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgbGluZUhlaWdodDogMS41LFxuICAgIH0sXG4gICAgc3VidGl0bGUyOiB7XG4gICAgICBmb250RmFtaWx5OiAnQXZlcnRhJyxcbiAgICAgIGZvbnRTaXplOiAnMXJlbScsXG4gICAgICBmb250V2VpZ2h0OiAzMDAsXG4gICAgICBjb2xvcjogJyMzMDM1MzgnLFxuICAgIH0sXG4gICAgYm9keTE6IHtcbiAgICAgIGZvbnRTaXplOiAnMS4yNXJlbScsXG4gICAgICBmb250V2VpZ2h0OiAzMDAsXG4gICAgfSxcbiAgICBjYXB0aW9uOiB7XG4gICAgICBmb250RmFtaWx5OiAnQXZlcnRhJyxcbiAgICAgIGZvbnRTaXplOiAnMWVtJyxcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgIGNvbG9yOiBkYXJrR3JlZW4sXG4gICAgfSxcbiAgICBsYWJlbDoge1xuICAgICAgZm9udEZhbWlseTogJ0F2ZXJ0YScsXG4gICAgICBjb2xvcjogZGFya0JsYWNrLFxuICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICB9LFxuICAgIGlucHV0OiB7XG4gICAgICBmb250RmFtaWx5OiAnQXZlcnRhJyxcbiAgICAgIGZvbnRTaXplOiAnMXJlbScsXG4gICAgICBjb2xvcjogZGFya0JsYWNrLFxuICAgICAgbGluZUhlaWdodDogMS40LFxuICAgICAgJyY6aG92ZXIgLk11aU91dGxpbmVkSW5wdXQtbm90Y2hlZE91dGxpbmUnOiB7XG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjODk5Mjk4JyxcbiAgICAgIH0sXG4gICAgICAnJi5NdWktZm9jdXNlZCAuTXVpT3V0bGluZWRJbnB1dC1ub3RjaGVkT3V0bGluZSc6IHtcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICMzYzc0Y2MnLFxuICAgICAgICBib3hTaGFkb3c6ICcwIDAgMCAzcHggI2RjZWVmYycsXG4gICAgICB9LFxuICAgIH0sXG4gICAgYnV0dG9uOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGRhcmtHcmVlbixcbiAgICAgIGZvbnRGYW1pbHk6ICdBdmVydGEnLFxuICAgICAgY29sb3I6IGxpZ2h0LFxuICAgICAgZm9udFNpemU6ICcxLjJyZW0nLFxuICAgICAgdGV4dFRyYW5zZm9ybTogJ25vbmUnLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjODk5Mjk4JyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBkYXJrR3JlZW4sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL3N5c3RlbVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xzeFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3NzLXZlbmRvclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh5cGhlbmF0ZS1zdHlsZS1uYW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpcy1pbi1icm93c2VyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2NvbmZpZ1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidGlueS13YXJuaW5nXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9