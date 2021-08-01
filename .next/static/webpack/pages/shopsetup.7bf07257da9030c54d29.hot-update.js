self["webpackHotUpdate_N_E"]("pages/shopsetup",{

/***/ "./pages/shopsetup.js":
/*!****************************!*\
  !*** ./pages/shopsetup.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ shopsetup; }
/* harmony export */ });
/* harmony import */ var D_client_work_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_resusable_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/resusable/header */ "./src/resusable/header.js");
/* harmony import */ var _src_resusable_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/resusable/footer */ "./src/resusable/footer.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Create */ "./node_modules/@material-ui/icons/Create.js");
/* harmony import */ var _src_components_shopsetup_Dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/shopsetup/Dialog */ "./src/components/shopsetup/Dialog.js");
/* harmony import */ var _src_components_shopsetup_ShopNameDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/shopsetup/ShopNameDialog */ "./src/components/shopsetup/ShopNameDialog.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\client work\\pages\\shopsetup.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_client_work_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__.makeStyles)(function (theme) {
  return {
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(4),
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  };
});
function shopsetup(props) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
      Bunner = _useState[0],
      setBunner = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
      Profile = _useState2[0],
      setProfile = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("Shop Name here"),
      shopname = _useState3[0],
      setShopName = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("user your description here"),
      desc = _useState4[0],
      setDesc = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),
      manager = _useState5[0],
      setManager = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      user = _useState6[0],
      setUser = _useState6[1]; // const [profileimg, setProfileImg] = useState(null);


  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
      error = _useState7[0],
      setError = _useState7[1];

  var BannerhandleImage = function BannerhandleImage(e) {
    var selected = e.target.files[0];
    console.log(selected);
    var AllowTypes = ["image/png", "image/jpeg", "image/jpg"];

    if (selected && AllowTypes.includes(selected.type)) {
      var reader = new FileReader();

      reader.onloadend = function () {
        setBunner(reader.result);
      };

      reader.readAsDataURL(selected);
    } else {
      setError("File not Supported");
    }
  };

  var ProfilehandleImage = function ProfilehandleImage(e) {
    var selected = e.target.files[0];
    console.log(selected);
    var AllowTypes = ["image/png", "image/jpeg", "image/jpg"];

    if (selected && AllowTypes.includes(selected.type)) {
      var reader = new FileReader();

      reader.onloadend = function () {
        setProfile(reader.result);
      };

      reader.readAsDataURL(selected);
    } else {
      setError("File not Supported");
    }
  };

  var addProducts = function addProducts() {
    alert("Product has been added");
  };

  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {
    container: true,
    direction: "column",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {
      item: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_resusable_header__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread({}, props), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {
      item: true,
      xs: 12,
      xl: 12,
      lg: 12,
      md: 12,
      sm: 12,
      container: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__.default // className={classes.paper}
      , {
        style: {
          backgroundImage: "url(".concat(Bunner, ")"),
          backgroundColor: Bunner ? null : "#edf1f7",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "192px",
          width: "100%",
          marginBottom: "60px" // width: "1328px",

        },
        xs: 12,
        xl: 12,
        lg: 12,
        md: 12,
        sm: 6,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__.default, {
          style: {
            height: "192px",
            width: "387px",
            margin: "0 auto",
            backgroundColor: "transparent",
            backgroundSize: "cover",
            border: "none"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            // className={classes.paper}
            style: {
              position: "absolute",
              height: "113px",
              width: "358px",
              margin: "10px 15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "transparent",
              opacity: 0.8
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              children: [manager ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
                  onChange: BannerhandleImage,
                  accept: "image/*",
                  className: classes.input,
                  style: {
                    display: "none"
                  },
                  id: "raised-button-file",
                  multiple: true,
                  type: "file"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
                  htmlFor: "raised-button-file",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__.default, {
                    variant: "raised",
                    component: "span",
                    className: classes.button,
                    style: {
                      backgroundColor: "#3d3030",
                      color: "white"
                    },
                    children: "Upload Banner"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 127,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 126,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                  variant: "h6",
                  align: "center",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_components_shopsetup_Dialog__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 138,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 137,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 19
              }, this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                style: {
                  position: "relative"
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                  style: {
                    position: manager ? "absolute" : "relative",
                    borderRadius: "50%",
                    marginTop: manager ? "40px" : null,
                    marginLeft: manager ? "35px" : null,
                    top: manager ? null : "125px",
                    border: "1px solid gray"
                  },
                  width: "100px",
                  height: "100px",
                  src: Profile
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 143,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 17
              }, this), manager ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                style: {
                  position: "absolute",
                  marginTop: "100px",
                  marginLeft: "120px"
                },
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  style: {
                    display: "none"
                  },
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
                    onChange: ProfilehandleImage,
                    accept: "image/*",
                    className: classes.input,
                    style: {
                      display: "none"
                    },
                    id: "raised-button-file1",
                    multiple: true,
                    type: "file"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 168,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 167,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
                  htmlFor: "raised-button-file1",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_11__.default, {
                    style: {
                      color: "#305085",
                      fontSize: "25px"
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 179,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 178,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 19
              }, this) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {
      item: true,
      xs: 12,
      xl: 12,
      lg: 12,
      md: 12,
      sm: 12,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {
        variant: "h5",
        component: "h2",
        align: "center",
        children: shopname
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {
        align: "center",
        children: desc
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {
        children: manager ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "10px 0"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_11__.default, {
            style: {
              color: "#305085",
              fontSize: "15px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_components_shopsetup_ShopNameDialog__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 15
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 13
        }, this) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {
      item: true,
      xs: 12,
      xl: 12,
      lg: 12,
      md: 12,
      sm: 12,
      children: manager ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__.default, {
        style: {
          height: "200px",
          margin: "20px 50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid grey"
        },
        onClick: addProducts,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {
          children: "Add Products"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 11
      }, this) : null
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {
      item: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_resusable_footer__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 5
  }, this);
}

_s(shopsetup, "pm5GZaVEKcktO68/1obIFKyFCUk=", false, function () {
  return [useStyles];
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcHNldHVwLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4R3JvdyIsInBhcGVyIiwicGFkZGluZyIsInNwYWNpbmciLCJ0ZXh0QWxpZ24iLCJjb2xvciIsInBhbGV0dGUiLCJ0ZXh0Iiwic2Vjb25kYXJ5Iiwic2hvcHNldHVwIiwicHJvcHMiLCJ1c2VTdGF0ZSIsIkJ1bm5lciIsInNldEJ1bm5lciIsIlByb2ZpbGUiLCJzZXRQcm9maWxlIiwic2hvcG5hbWUiLCJzZXRTaG9wTmFtZSIsImRlc2MiLCJzZXREZXNjIiwibWFuYWdlciIsInNldE1hbmFnZXIiLCJ1c2VyIiwic2V0VXNlciIsImVycm9yIiwic2V0RXJyb3IiLCJCYW5uZXJoYW5kbGVJbWFnZSIsImUiLCJzZWxlY3RlZCIsInRhcmdldCIsImZpbGVzIiwiY29uc29sZSIsImxvZyIsIkFsbG93VHlwZXMiLCJpbmNsdWRlcyIsInR5cGUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkZW5kIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsIlByb2ZpbGVoYW5kbGVJbWFnZSIsImFkZFByb2R1Y3RzIiwiYWxlcnQiLCJjbGFzc2VzIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiaGVpZ2h0Iiwid2lkdGgiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW4iLCJib3JkZXIiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJvcGFjaXR5IiwiaW5wdXQiLCJidXR0b24iLCJib3JkZXJSYWRpdXMiLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwidG9wIiwiZm9udFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsUUFBSSxFQUFFO0FBQ0pDLGNBQVEsRUFBRTtBQUROLEtBRGlDO0FBSXZDQyxTQUFLLEVBQUU7QUFDTEMsYUFBTyxFQUFFSixLQUFLLENBQUNLLE9BQU4sQ0FBYyxDQUFkLENBREo7QUFFTEMsZUFBUyxFQUFFLFFBRk47QUFHTEMsV0FBSyxFQUFFUCxLQUFLLENBQUNRLE9BQU4sQ0FBY0MsSUFBZCxDQUFtQkM7QUFIckI7QUFKZ0MsR0FBWjtBQUFBLENBQUQsQ0FBNUI7QUFXZSxTQUFTQyxTQUFULENBQW1CQyxLQUFuQixFQUEwQjtBQUFBOztBQUFBLGtCQUNYQywrQ0FBUSxDQUFDLEVBQUQsQ0FERztBQUFBLE1BQ2hDQyxNQURnQztBQUFBLE1BQ3hCQyxTQUR3Qjs7QUFBQSxtQkFFVEYsK0NBQVEsQ0FBQyxFQUFELENBRkM7QUFBQSxNQUVoQ0csT0FGZ0M7QUFBQSxNQUV2QkMsVUFGdUI7O0FBQUEsbUJBR1BKLCtDQUFRLENBQUMsZ0JBQUQsQ0FIRDtBQUFBLE1BR2hDSyxRQUhnQztBQUFBLE1BR3RCQyxXQUhzQjs7QUFBQSxtQkFJZk4sK0NBQVEsQ0FBQyw0QkFBRCxDQUpPO0FBQUEsTUFJaENPLElBSmdDO0FBQUEsTUFJMUJDLE9BSjBCOztBQUFBLG1CQUtUUiwrQ0FBUSxDQUFDLElBQUQsQ0FMQztBQUFBLE1BS2hDUyxPQUxnQztBQUFBLE1BS3ZCQyxVQUx1Qjs7QUFBQSxtQkFNZlYsK0NBQVEsQ0FBQyxLQUFELENBTk87QUFBQSxNQU1oQ1csSUFOZ0M7QUFBQSxNQU0xQkMsT0FOMEIsa0JBT3ZDOzs7QUFQdUMsbUJBUWJaLCtDQUFRLENBQUMsRUFBRCxDQVJLO0FBQUEsTUFRaENhLEtBUmdDO0FBQUEsTUFRekJDLFFBUnlCOztBQVV2QyxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLENBQUQsRUFBTztBQUMvQixRQUFNQyxRQUFRLEdBQUdELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFULENBQWUsQ0FBZixDQUFqQjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUosUUFBWjtBQUNBLFFBQU1LLFVBQVUsR0FBRyxDQUFDLFdBQUQsRUFBYyxZQUFkLEVBQTRCLFdBQTVCLENBQW5COztBQUNBLFFBQUlMLFFBQVEsSUFBSUssVUFBVSxDQUFDQyxRQUFYLENBQW9CTixRQUFRLENBQUNPLElBQTdCLENBQWhCLEVBQW9EO0FBQ2xELFVBQUlDLE1BQU0sR0FBRyxJQUFJQyxVQUFKLEVBQWI7O0FBQ0FELFlBQU0sQ0FBQ0UsU0FBUCxHQUFtQixZQUFNO0FBQ3ZCekIsaUJBQVMsQ0FBQ3VCLE1BQU0sQ0FBQ0csTUFBUixDQUFUO0FBQ0QsT0FGRDs7QUFHQUgsWUFBTSxDQUFDSSxhQUFQLENBQXFCWixRQUFyQjtBQUNELEtBTkQsTUFNTztBQUNMSCxjQUFRLENBQUMsb0JBQUQsQ0FBUjtBQUNEO0FBQ0YsR0FiRDs7QUFjQSxNQUFNZ0Isa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDZCxDQUFELEVBQU87QUFDaEMsUUFBTUMsUUFBUSxHQUFHRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBVCxDQUFlLENBQWYsQ0FBakI7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlKLFFBQVo7QUFDQSxRQUFNSyxVQUFVLEdBQUcsQ0FBQyxXQUFELEVBQWMsWUFBZCxFQUE0QixXQUE1QixDQUFuQjs7QUFDQSxRQUFJTCxRQUFRLElBQUlLLFVBQVUsQ0FBQ0MsUUFBWCxDQUFvQk4sUUFBUSxDQUFDTyxJQUE3QixDQUFoQixFQUFvRDtBQUNsRCxVQUFJQyxNQUFNLEdBQUcsSUFBSUMsVUFBSixFQUFiOztBQUNBRCxZQUFNLENBQUNFLFNBQVAsR0FBbUIsWUFBTTtBQUN2QnZCLGtCQUFVLENBQUNxQixNQUFNLENBQUNHLE1BQVIsQ0FBVjtBQUNELE9BRkQ7O0FBR0FILFlBQU0sQ0FBQ0ksYUFBUCxDQUFxQlosUUFBckI7QUFDRCxLQU5ELE1BTU87QUFDTEgsY0FBUSxDQUFDLG9CQUFELENBQVI7QUFDRDtBQUNGLEdBYkQ7O0FBY0EsTUFBTWlCLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJDLFNBQUssQ0FBQyx3QkFBRCxDQUFMO0FBQ0QsR0FGRDs7QUFHQSxNQUFNQyxPQUFPLEdBQUdoRCxTQUFTLEVBQXpCO0FBQ0Esc0JBQ0UsOERBQUMsbURBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsYUFBUyxFQUFDLFFBQTFCO0FBQUEsNEJBQ0UsOERBQUMsbURBQUQ7QUFBTSxVQUFJLE1BQVY7QUFBQSw2QkFDRSw4REFBQywwREFBRCxvQkFBWWMsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUUsOERBQUMsbURBQUQ7QUFBTSxVQUFJLE1BQVY7QUFBVyxRQUFFLEVBQUUsRUFBZjtBQUFtQixRQUFFLEVBQUUsRUFBdkI7QUFBMkIsUUFBRSxFQUFFLEVBQS9CO0FBQW1DLFFBQUUsRUFBRSxFQUF2QztBQUEyQyxRQUFFLEVBQUUsRUFBL0M7QUFBbUQsZUFBUyxNQUE1RDtBQUFBLDZCQUNFLDhEQUFDLDREQUFELENBQ0U7QUFERjtBQUdFLGFBQUssRUFBRTtBQUNMbUMseUJBQWUsZ0JBQVNqQyxNQUFULE1BRFY7QUFFTGtDLHlCQUFlLEVBQUVsQyxNQUFNLEdBQUcsSUFBSCxHQUFVLFNBRjVCO0FBR0xtQyx3QkFBYyxFQUFFLE9BSFg7QUFJTEMsMEJBQWdCLEVBQUUsV0FKYjtBQUtMQyxnQkFBTSxFQUFFLE9BTEg7QUFNTEMsZUFBSyxFQUFFLE1BTkY7QUFPTEMsc0JBQVksRUFBRSxNQVBULENBUUw7O0FBUkssU0FIVDtBQWFFLFVBQUUsRUFBRSxFQWJOO0FBY0UsVUFBRSxFQUFFLEVBZE47QUFlRSxVQUFFLEVBQUUsRUFmTjtBQWdCRSxVQUFFLEVBQUUsRUFoQk47QUFpQkUsVUFBRSxFQUFFLENBakJOO0FBQUEsK0JBbUJFLDhEQUFDLDREQUFEO0FBQ0UsZUFBSyxFQUFFO0FBQ0xGLGtCQUFNLEVBQUUsT0FESDtBQUVMQyxpQkFBSyxFQUFFLE9BRkY7QUFHTEUsa0JBQU0sRUFBRSxRQUhIO0FBSUxOLDJCQUFlLEVBQUUsYUFKWjtBQUtMQywwQkFBYyxFQUFFLE9BTFg7QUFNTE0sa0JBQU0sRUFBRTtBQU5ILFdBRFQ7QUFBQSxpQ0FVRTtBQUNFO0FBQ0EsaUJBQUssRUFBRTtBQUNMQyxzQkFBUSxFQUFFLFVBREw7QUFFTEwsb0JBQU0sRUFBRSxPQUZIO0FBR0xDLG1CQUFLLEVBQUUsT0FIRjtBQUlMRSxvQkFBTSxFQUFFLFdBSkg7QUFLTEcscUJBQU8sRUFBRSxNQUxKO0FBTUxDLDRCQUFjLEVBQUUsUUFOWDtBQU9MQyx3QkFBVSxFQUFFLFFBUFA7QUFRTFgsNkJBQWUsRUFBRSxhQVJaO0FBU0xZLHFCQUFPLEVBQUU7QUFUSixhQUZUO0FBQUEsbUNBY0U7QUFBQSx5QkFDR3RDLE9BQU8sZ0JBQ047QUFBQSx3Q0FDRTtBQUNFLDBCQUFRLEVBQUVNLGlCQURaO0FBRUUsd0JBQU0sRUFBQyxTQUZUO0FBR0UsMkJBQVMsRUFBRWtCLE9BQU8sQ0FBQ2UsS0FIckI7QUFJRSx1QkFBSyxFQUFFO0FBQUVKLDJCQUFPLEVBQUU7QUFBWCxtQkFKVDtBQUtFLG9CQUFFLEVBQUMsb0JBTEw7QUFNRSwwQkFBUSxNQU5WO0FBT0Usc0JBQUksRUFBQztBQVBQO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsZUFVRTtBQUFPLHlCQUFPLEVBQUMsb0JBQWY7QUFBQSx5Q0FDRSw4REFBQyw4REFBRDtBQUNFLDJCQUFPLEVBQUMsUUFEVjtBQUVFLDZCQUFTLEVBQUMsTUFGWjtBQUdFLDZCQUFTLEVBQUVYLE9BQU8sQ0FBQ2dCLE1BSHJCO0FBSUUseUJBQUssRUFBRTtBQUFFZCxxQ0FBZSxFQUFFLFNBQW5CO0FBQThCekMsMkJBQUssRUFBRTtBQUFyQyxxQkFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBVkYsZUFxQkUsOERBQUMseURBQUQ7QUFBWSx5QkFBTyxFQUFDLElBQXBCO0FBQXlCLHVCQUFLLEVBQUMsUUFBL0I7QUFBQSx5Q0FDRSw4REFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURNLEdBMEJKLElBM0JOLGVBNEJFO0FBQUsscUJBQUssRUFBRTtBQUFFaUQsMEJBQVEsRUFBRTtBQUFaLGlCQUFaO0FBQUEsdUNBQ0U7QUFDRSx1QkFBSyxFQUFFO0FBQ0xBLDRCQUFRLEVBQUVsQyxPQUFPLEdBQUcsVUFBSCxHQUFnQixVQUQ1QjtBQUVMeUMsZ0NBQVksRUFBRSxLQUZUO0FBR0xDLDZCQUFTLEVBQUUxQyxPQUFPLEdBQUcsTUFBSCxHQUFZLElBSHpCO0FBSUwyQyw4QkFBVSxFQUFFM0MsT0FBTyxHQUFHLE1BQUgsR0FBWSxJQUoxQjtBQU1MNEMsdUJBQUcsRUFBRTVDLE9BQU8sR0FBRyxJQUFILEdBQVUsT0FOakI7QUFPTGlDLDBCQUFNLEVBQUU7QUFQSCxtQkFEVDtBQVVFLHVCQUFLLEVBQUMsT0FWUjtBQVdFLHdCQUFNLEVBQUMsT0FYVDtBQVlFLHFCQUFHLEVBQUV2QztBQVpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQTVCRixFQTZDR00sT0FBTyxnQkFDTjtBQUNFLHFCQUFLLEVBQUU7QUFDTGtDLDBCQUFRLEVBQUUsVUFETDtBQUVMUSwyQkFBUyxFQUFFLE9BRk47QUFHTEMsNEJBQVUsRUFBRTtBQUhQLGlCQURUO0FBQUEsd0NBT0U7QUFBSyx1QkFBSyxFQUFFO0FBQUVSLDJCQUFPLEVBQUU7QUFBWCxtQkFBWjtBQUFBLHlDQUNFO0FBQ0UsNEJBQVEsRUFBRWQsa0JBRFo7QUFFRSwwQkFBTSxFQUFDLFNBRlQ7QUFHRSw2QkFBUyxFQUFFRyxPQUFPLENBQUNlLEtBSHJCO0FBSUUseUJBQUssRUFBRTtBQUFFSiw2QkFBTyxFQUFFO0FBQVgscUJBSlQ7QUFLRSxzQkFBRSxFQUFDLHFCQUxMO0FBTUUsNEJBQVEsTUFOVjtBQU9FLHdCQUFJLEVBQUM7QUFQUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFQRixlQWtCRTtBQUFPLHlCQUFPLEVBQUMscUJBQWY7QUFBQSx5Q0FDRSw4REFBQywrREFBRDtBQUNFLHlCQUFLLEVBQUU7QUFBRWxELDJCQUFLLEVBQUUsU0FBVDtBQUFvQjRELDhCQUFRLEVBQUU7QUFBOUI7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURNLEdBeUJKLElBdEVOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUE0SEUsOERBQUMsbURBQUQ7QUFBTSxVQUFJLE1BQVY7QUFBVyxRQUFFLEVBQUUsRUFBZjtBQUFtQixRQUFFLEVBQUUsRUFBdkI7QUFBMkIsUUFBRSxFQUFFLEVBQS9CO0FBQW1DLFFBQUUsRUFBRSxFQUF2QztBQUEyQyxRQUFFLEVBQUUsRUFBL0M7QUFBQSw4QkFDRSw4REFBQyx5REFBRDtBQUFZLGVBQU8sRUFBQyxJQUFwQjtBQUF5QixpQkFBUyxFQUFDLElBQW5DO0FBQXdDLGFBQUssRUFBQyxRQUE5QztBQUFBLGtCQUNHakQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRSw4REFBQyx5REFBRDtBQUFZLGFBQUssRUFBQyxRQUFsQjtBQUFBLGtCQUE0QkU7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBS0UsOERBQUMseURBQUQ7QUFBQSxrQkFDR0UsT0FBTyxnQkFDTjtBQUNFLGVBQUssRUFBRTtBQUNMbUMsbUJBQU8sRUFBRSxNQURKO0FBRUxFLHNCQUFVLEVBQUUsUUFGUDtBQUdMRCwwQkFBYyxFQUFFLFFBSFg7QUFJTEosa0JBQU0sRUFBRTtBQUpILFdBRFQ7QUFBQSxrQ0FRRSw4REFBQywrREFBRDtBQUFZLGlCQUFLLEVBQUU7QUFBRS9DLG1CQUFLLEVBQUUsU0FBVDtBQUFvQjRELHNCQUFRLEVBQUU7QUFBOUI7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFSRixlQVNFLDhEQUFDLDZFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVEYsRUFTcUIsR0FUckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURNLEdBWUo7QUFiTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBNUhGLGVBaUpFLDhEQUFDLG1EQUFEO0FBQU0sVUFBSSxNQUFWO0FBQVcsUUFBRSxFQUFFLEVBQWY7QUFBbUIsUUFBRSxFQUFFLEVBQXZCO0FBQTJCLFFBQUUsRUFBRSxFQUEvQjtBQUFtQyxRQUFFLEVBQUUsRUFBdkM7QUFBMkMsUUFBRSxFQUFFLEVBQS9DO0FBQUEsZ0JBQ0c3QyxPQUFPLGdCQUNOLDhEQUFDLDREQUFEO0FBQ0UsYUFBSyxFQUFFO0FBQ0w2QixnQkFBTSxFQUFFLE9BREg7QUFFTEcsZ0JBQU0sRUFBRSxXQUZIO0FBR0xHLGlCQUFPLEVBQUUsTUFISjtBQUlMQyx3QkFBYyxFQUFFLFFBSlg7QUFLTEMsb0JBQVUsRUFBRSxRQUxQO0FBTUxKLGdCQUFNLEVBQUU7QUFOSCxTQURUO0FBU0UsZUFBTyxFQUFFWCxXQVRYO0FBQUEsK0JBV0UsOERBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRE0sR0FjSjtBQWZOO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqSkYsZUFrS0UsOERBQUMsbURBQUQ7QUFBTSxVQUFJLE1BQVY7QUFBQSw2QkFDRSw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxLRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXdLRDs7R0FsTnVCakMsUztVQXlDTmIsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaG9wc2V0dXAuN2JmMDcyNTdkYTkwMzBjNTRkMjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9zcmMvcmVzdXNhYmxlL2hlYWRlclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9zcmMvcmVzdXNhYmxlL2Zvb3RlclwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgeyBHcmlkLCBUeXBvZ3JhcGh5LCB1c2VUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlua1wiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgQ3JlYXRlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NyZWF0ZVwiO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9zaG9wc2V0dXAvRGlhbG9nXCI7XHJcbmltcG9ydCBTaG9wTmFtZURpYWxvZyBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvc2hvcHNldHVwL1Nob3BOYW1lRGlhbG9nXCI7XHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gIH0sXHJcbiAgcGFwZXI6IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaG9wc2V0dXAocHJvcHMpIHtcclxuICBjb25zdCBbQnVubmVyLCBzZXRCdW5uZXJdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW1Byb2ZpbGUsIHNldFByb2ZpbGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Nob3BuYW1lLCBzZXRTaG9wTmFtZV0gPSB1c2VTdGF0ZShcIlNob3AgTmFtZSBoZXJlXCIpO1xyXG4gIGNvbnN0IFtkZXNjLCBzZXREZXNjXSA9IHVzZVN0YXRlKFwidXNlciB5b3VyIGRlc2NyaXB0aW9uIGhlcmVcIik7XHJcbiAgY29uc3QgW21hbmFnZXIsIHNldE1hbmFnZXJdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIC8vIGNvbnN0IFtwcm9maWxlaW1nLCBzZXRQcm9maWxlSW1nXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IEJhbm5lcmhhbmRsZUltYWdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBjb25zb2xlLmxvZyhzZWxlY3RlZCk7XHJcbiAgICBjb25zdCBBbGxvd1R5cGVzID0gW1wiaW1hZ2UvcG5nXCIsIFwiaW1hZ2UvanBlZ1wiLCBcImltYWdlL2pwZ1wiXTtcclxuICAgIGlmIChzZWxlY3RlZCAmJiBBbGxvd1R5cGVzLmluY2x1ZGVzKHNlbGVjdGVkLnR5cGUpKSB7XHJcbiAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEJ1bm5lcihyZWFkZXIucmVzdWx0KTtcclxuICAgICAgfTtcclxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoc2VsZWN0ZWQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0RXJyb3IoXCJGaWxlIG5vdCBTdXBwb3J0ZWRcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBQcm9maWxlaGFuZGxlSW1hZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkKTtcclxuICAgIGNvbnN0IEFsbG93VHlwZXMgPSBbXCJpbWFnZS9wbmdcIiwgXCJpbWFnZS9qcGVnXCIsIFwiaW1hZ2UvanBnXCJdO1xyXG4gICAgaWYgKHNlbGVjdGVkICYmIEFsbG93VHlwZXMuaW5jbHVkZXMoc2VsZWN0ZWQudHlwZSkpIHtcclxuICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0UHJvZmlsZShyZWFkZXIucmVzdWx0KTtcclxuICAgICAgfTtcclxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoc2VsZWN0ZWQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0RXJyb3IoXCJGaWxlIG5vdCBTdXBwb3J0ZWRcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBhZGRQcm9kdWN0cyA9ICgpID0+IHtcclxuICAgIGFsZXJ0KFwiUHJvZHVjdCBoYXMgYmVlbiBhZGRlZFwiKTtcclxuICB9O1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj1cImNvbHVtblwiPlxyXG4gICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgIDxIZWFkZXIgey4uLnByb3BzfSAvPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSB4bD17MTJ9IGxnPXsxMn0gbWQ9ezEyfSBzbT17MTJ9IGNvbnRhaW5lcj5cclxuICAgICAgICA8UGFwZXJcclxuICAgICAgICAgIC8vIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn1cclxuXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtCdW5uZXJ9KWAsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogQnVubmVyID8gbnVsbCA6IFwiI2VkZjFmN1wiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTkycHhcIixcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNjBweFwiLFxyXG4gICAgICAgICAgICAvLyB3aWR0aDogXCIxMzI4cHhcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICB4bD17MTJ9XHJcbiAgICAgICAgICBsZz17MTJ9XHJcbiAgICAgICAgICBtZD17MTJ9XHJcbiAgICAgICAgICBzbT17Nn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8UGFwZXJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTkycHhcIixcclxuICAgICAgICAgICAgICB3aWR0aDogXCIzODdweFwiLFxyXG4gICAgICAgICAgICAgIG1hcmdpbjogXCIwIGF1dG9cIixcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAvLyBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTEzcHhcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjM1OHB4XCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IFwiMTBweCAxNXB4XCIsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC44LFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge21hbmFnZXIgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17QmFubmVyaGFuZGxlSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInJhaXNlZC1idXR0b24tZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyYWlzZWQtYnV0dG9uLWZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInJhaXNlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzNkMzAzMFwiLCBjb2xvcjogXCJ3aGl0ZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVwbG9hZCBCYW5uZXJcclxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RGlhbG9nIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBtYW5hZ2VyID8gXCJhYnNvbHV0ZVwiIDogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBtYW5hZ2VyID8gXCI0MHB4XCIgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogbWFuYWdlciA/IFwiMzVweFwiIDogbnVsbCxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IG1hbmFnZXIgPyBudWxsIDogXCIxMjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmF5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtQcm9maWxlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAge21hbmFnZXIgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIxMDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIxMjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtQcm9maWxlaGFuZGxlSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicmFpc2VkLWJ1dHRvbi1maWxlMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyYWlzZWQtYnV0dG9uLWZpbGUxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q3JlYXRlSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCIjMzA1MDg1XCIsIGZvbnRTaXplOiBcIjI1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgPC9QYXBlcj5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0geGw9ezEyfSBsZz17MTJ9IG1kPXsxMn0gc209ezEyfT5cclxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJoMlwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICB7c2hvcG5hbWV9XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGFsaWduPVwiY2VudGVyXCI+e2Rlc2N9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5PlxyXG4gICAgICAgICAge21hbmFnZXIgPyAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IFwiMTBweCAwXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxDcmVhdGVJY29uIHN0eWxlPXt7IGNvbG9yOiBcIiMzMDUwODVcIiwgZm9udFNpemU6IFwiMTVweFwiIH19IC8+XHJcbiAgICAgICAgICAgICAgPFNob3BOYW1lRGlhbG9nIC8+e1wiIFwifVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0geGw9ezEyfSBsZz17MTJ9IG1kPXsxMn0gc209ezEyfT5cclxuICAgICAgICB7bWFuYWdlciA/IChcclxuICAgICAgICAgIDxQYXBlclxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGhlaWdodDogXCIyMDBweFwiLFxyXG4gICAgICAgICAgICAgIG1hcmdpbjogXCIyMHB4IDUwcHhcIixcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JleVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXthZGRQcm9kdWN0c31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHk+QWRkIFByb2R1Y3RzPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9HcmlkPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==