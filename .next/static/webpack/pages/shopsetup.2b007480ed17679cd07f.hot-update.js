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

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
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
            overflow: "hidden",
            backgroundImage: "url(".concat(Profile, ")"),
            backgroundSize: "cover"
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
                  src: "https://cdn.nohat.cc/thumb/f/720/comvecteezy585329.jpg"
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
                  marginLeft: "130px"
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

_s(shopsetup, "3p0RvpFCm+97YugRm8dhYzYB7yk=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcHNldHVwLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4R3JvdyIsInBhcGVyIiwicGFkZGluZyIsInNwYWNpbmciLCJ0ZXh0QWxpZ24iLCJjb2xvciIsInBhbGV0dGUiLCJ0ZXh0Iiwic2Vjb25kYXJ5Iiwic2hvcHNldHVwIiwicHJvcHMiLCJ1c2VTdGF0ZSIsIkJ1bm5lciIsInNldEJ1bm5lciIsIlByb2ZpbGUiLCJzZXRQcm9maWxlIiwic2hvcG5hbWUiLCJzZXRTaG9wTmFtZSIsImRlc2MiLCJzZXREZXNjIiwibWFuYWdlciIsInNldE1hbmFnZXIiLCJ1c2VyIiwic2V0VXNlciIsImVycm9yIiwic2V0RXJyb3IiLCJCYW5uZXJoYW5kbGVJbWFnZSIsImUiLCJzZWxlY3RlZCIsInRhcmdldCIsImZpbGVzIiwiY29uc29sZSIsImxvZyIsIkFsbG93VHlwZXMiLCJpbmNsdWRlcyIsInR5cGUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkZW5kIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsIlByb2ZpbGVoYW5kbGVJbWFnZSIsImFkZFByb2R1Y3RzIiwiYWxlcnQiLCJjbGFzc2VzIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiaGVpZ2h0Iiwid2lkdGgiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW4iLCJvdmVyZmxvdyIsInBvc2l0aW9uIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIm9wYWNpdHkiLCJpbnB1dCIsImJ1dHRvbiIsImJvcmRlclJhZGl1cyIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJ0b3AiLCJib3JkZXIiLCJmb250U2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbEtGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBd0tEOztHQWxOdUJqQyxTO1VBeUNOYixTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Nob3BzZXR1cC4yYjAwNzQ4MGVkMTc2NzljZDA3Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL3NyYy9yZXN1c2FibGUvaGVhZGVyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL3NyYy9yZXN1c2FibGUvZm9vdGVyXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCB7IEdyaWQsIFR5cG9ncmFwaHksIHVzZVRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaW5rXCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCBDcmVhdGVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ3JlYXRlXCI7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL3Nob3BzZXR1cC9EaWFsb2dcIjtcclxuaW1wb3J0IFNob3BOYW1lRGlhbG9nIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9zaG9wc2V0dXAvU2hvcE5hbWVEaWFsb2dcIjtcclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgfSxcclxuICBwYXBlcjoge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg0KSxcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNob3BzZXR1cChwcm9wcykge1xyXG4gIGNvbnN0IFtCdW5uZXIsIHNldEJ1bm5lcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbUHJvZmlsZSwgc2V0UHJvZmlsZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc2hvcG5hbWUsIHNldFNob3BOYW1lXSA9IHVzZVN0YXRlKFwiU2hvcCBOYW1lIGhlcmVcIik7XHJcbiAgY29uc3QgW2Rlc2MsIHNldERlc2NdID0gdXNlU3RhdGUoXCJ1c2VyIHlvdXIgZGVzY3JpcHRpb24gaGVyZVwiKTtcclxuICBjb25zdCBbbWFuYWdlciwgc2V0TWFuYWdlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIC8vIGNvbnN0IFtwcm9maWxlaW1nLCBzZXRQcm9maWxlSW1nXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IEJhbm5lcmhhbmRsZUltYWdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBjb25zb2xlLmxvZyhzZWxlY3RlZCk7XHJcbiAgICBjb25zdCBBbGxvd1R5cGVzID0gW1wiaW1hZ2UvcG5nXCIsIFwiaW1hZ2UvanBlZ1wiLCBcImltYWdlL2pwZ1wiXTtcclxuICAgIGlmIChzZWxlY3RlZCAmJiBBbGxvd1R5cGVzLmluY2x1ZGVzKHNlbGVjdGVkLnR5cGUpKSB7XHJcbiAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEJ1bm5lcihyZWFkZXIucmVzdWx0KTtcclxuICAgICAgfTtcclxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoc2VsZWN0ZWQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0RXJyb3IoXCJGaWxlIG5vdCBTdXBwb3J0ZWRcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBQcm9maWxlaGFuZGxlSW1hZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkKTtcclxuICAgIGNvbnN0IEFsbG93VHlwZXMgPSBbXCJpbWFnZS9wbmdcIiwgXCJpbWFnZS9qcGVnXCIsIFwiaW1hZ2UvanBnXCJdO1xyXG4gICAgaWYgKHNlbGVjdGVkICYmIEFsbG93VHlwZXMuaW5jbHVkZXMoc2VsZWN0ZWQudHlwZSkpIHtcclxuICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0UHJvZmlsZShyZWFkZXIucmVzdWx0KTtcclxuICAgICAgfTtcclxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoc2VsZWN0ZWQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0RXJyb3IoXCJGaWxlIG5vdCBTdXBwb3J0ZWRcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBhZGRQcm9kdWN0cyA9ICgpID0+IHtcclxuICAgIGFsZXJ0KFwiUHJvZHVjdCBoYXMgYmVlbiBhZGRlZFwiKTtcclxuICB9O1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj1cImNvbHVtblwiPlxyXG4gICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgIDxIZWFkZXIgey4uLnByb3BzfSAvPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSB4bD17MTJ9IGxnPXsxMn0gbWQ9ezEyfSBzbT17MTJ9IGNvbnRhaW5lcj5cclxuICAgICAgICA8UGFwZXJcclxuICAgICAgICAgIC8vIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn1cclxuXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtCdW5uZXJ9KWAsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogQnVubmVyID8gbnVsbCA6IFwiI2VkZjFmN1wiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTkycHhcIixcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNjBweFwiLFxyXG4gICAgICAgICAgICAvLyB3aWR0aDogXCIxMzI4cHhcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICB4bD17MTJ9XHJcbiAgICAgICAgICBsZz17MTJ9XHJcbiAgICAgICAgICBtZD17MTJ9XHJcbiAgICAgICAgICBzbT17Nn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8UGFwZXJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTkycHhcIixcclxuICAgICAgICAgICAgICB3aWR0aDogXCIzODdweFwiLFxyXG4gICAgICAgICAgICAgIG1hcmdpbjogXCIwIGF1dG9cIixcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtQcm9maWxlfSlgLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAvLyBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTEzcHhcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjM1OHB4XCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IFwiMTBweCAxNXB4XCIsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC44LFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge21hbmFnZXIgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17QmFubmVyaGFuZGxlSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInJhaXNlZC1idXR0b24tZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyYWlzZWQtYnV0dG9uLWZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInJhaXNlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzNkMzAzMFwiLCBjb2xvcjogXCJ3aGl0ZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVwbG9hZCBCYW5uZXJcclxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RGlhbG9nIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBtYW5hZ2VyID8gXCJhYnNvbHV0ZVwiIDogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBtYW5hZ2VyID8gXCI0MHB4XCIgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogbWFuYWdlciA/IFwiMzVweFwiIDogbnVsbCxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IG1hbmFnZXIgPyBudWxsIDogXCIxMjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmF5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG4ubm9oYXQuY2MvdGh1bWIvZi83MjAvY29tdmVjdGVlenk1ODUzMjkuanBnXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHttYW5hZ2VyID8gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMTAwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMTMwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17UHJvZmlsZWhhbmRsZUltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInJhaXNlZC1idXR0b24tZmlsZTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmFpc2VkLWJ1dHRvbi1maWxlMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENyZWF0ZUljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiIzMwNTA4NVwiLCBmb250U2l6ZTogXCIyNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgIDwvUGFwZXI+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHhsPXsxMn0gbGc9ezEyfSBtZD17MTJ9IHNtPXsxMn0+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiaDJcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAge3Nob3BuYW1lfVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8VHlwb2dyYXBoeSBhbGlnbj1cImNlbnRlclwiPntkZXNjfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8VHlwb2dyYXBoeT5cclxuICAgICAgICAgIHttYW5hZ2VyID8gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIjEwcHggMFwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8Q3JlYXRlSWNvbiBzdHlsZT17eyBjb2xvcjogXCIjMzA1MDg1XCIsIGZvbnRTaXplOiBcIjE1cHhcIiB9fSAvPlxyXG4gICAgICAgICAgICAgIDxTaG9wTmFtZURpYWxvZyAvPntcIiBcIn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHhsPXsxMn0gbGc9ezEyfSBtZD17MTJ9IHNtPXsxMn0+XHJcbiAgICAgICAge21hbmFnZXIgPyAoXHJcbiAgICAgICAgICA8UGFwZXJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjAwcHhcIixcclxuICAgICAgICAgICAgICBtYXJnaW46IFwiMjBweCA1MHB4XCIsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGdyZXlcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25DbGljaz17YWRkUHJvZHVjdHN9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5PkFkZCBQcm9kdWN0czwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvR3JpZD5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=