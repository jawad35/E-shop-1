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
                  lineNumber: 116,
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
                    lineNumber: 126,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 125,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                  variant: "h6",
                  align: "center",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_components_shopsetup_Dialog__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 137,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 136,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 115,
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
                  lineNumber: 142,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 141,
                columnNumber: 17
              }, this), manger ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
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
                    lineNumber: 167,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 166,
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
                    lineNumber: 178,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 177,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 159,
                columnNumber: 19
              }, this) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
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
        lineNumber: 190,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {
        align: "center",
        children: desc
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 193,
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
            lineNumber: 204,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_components_shopsetup_ShopNameDialog__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 15
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 13
        }, this) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 189,
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
          lineNumber: 223,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 11
      }, this) : null
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {
      item: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_resusable_footer__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 227,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcHNldHVwLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4R3JvdyIsInBhcGVyIiwicGFkZGluZyIsInNwYWNpbmciLCJ0ZXh0QWxpZ24iLCJjb2xvciIsInBhbGV0dGUiLCJ0ZXh0Iiwic2Vjb25kYXJ5Iiwic2hvcHNldHVwIiwicHJvcHMiLCJ1c2VTdGF0ZSIsIkJ1bm5lciIsInNldEJ1bm5lciIsIlByb2ZpbGUiLCJzZXRQcm9maWxlIiwic2hvcG5hbWUiLCJzZXRTaG9wTmFtZSIsImRlc2MiLCJzZXREZXNjIiwibWFuYWdlciIsInNldE1hbmFnZXIiLCJ1c2VyIiwic2V0VXNlciIsImVycm9yIiwic2V0RXJyb3IiLCJCYW5uZXJoYW5kbGVJbWFnZSIsImUiLCJzZWxlY3RlZCIsInRhcmdldCIsImZpbGVzIiwiY29uc29sZSIsImxvZyIsIkFsbG93VHlwZXMiLCJpbmNsdWRlcyIsInR5cGUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkZW5kIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsIlByb2ZpbGVoYW5kbGVJbWFnZSIsImFkZFByb2R1Y3RzIiwiYWxlcnQiLCJjbGFzc2VzIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiaGVpZ2h0Iiwid2lkdGgiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW4iLCJvdmVyZmxvdyIsInBvc2l0aW9uIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImJhY2tncm91bmRDb2xvciIsIm9wYWNpdHkiLCJpbnB1dCIsImJ1dHRvbiIsImJvcmRlclJhZGl1cyIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJ0b3AiLCJib3JkZXIiLCJtYW5nZXIiLCJmb250U2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXVLRDs7R0FqTnVCakMsUztVQXlDTmIsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaG9wc2V0dXAuYWQxNTc0MmRlMWMxOTlhYmVjNDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9zcmMvcmVzdXNhYmxlL2hlYWRlclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9zcmMvcmVzdXNhYmxlL2Zvb3RlclwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgeyBHcmlkLCBUeXBvZ3JhcGh5LCB1c2VUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlua1wiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgQ3JlYXRlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NyZWF0ZVwiO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9zaG9wc2V0dXAvRGlhbG9nXCI7XHJcbmltcG9ydCBTaG9wTmFtZURpYWxvZyBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvc2hvcHNldHVwL1Nob3BOYW1lRGlhbG9nXCI7XHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gIH0sXHJcbiAgcGFwZXI6IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaG9wc2V0dXAocHJvcHMpIHtcclxuICBjb25zdCBbQnVubmVyLCBzZXRCdW5uZXJdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW1Byb2ZpbGUsIHNldFByb2ZpbGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Nob3BuYW1lLCBzZXRTaG9wTmFtZV0gPSB1c2VTdGF0ZShcIlNob3AgTmFtZSBoZXJlXCIpO1xyXG4gIGNvbnN0IFtkZXNjLCBzZXREZXNjXSA9IHVzZVN0YXRlKFwidXNlciB5b3VyIGRlc2NyaXB0aW9uIGhlcmVcIik7XHJcbiAgY29uc3QgW21hbmFnZXIsIHNldE1hbmFnZXJdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIC8vIGNvbnN0IFtwcm9maWxlaW1nLCBzZXRQcm9maWxlSW1nXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IEJhbm5lcmhhbmRsZUltYWdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBjb25zb2xlLmxvZyhzZWxlY3RlZCk7XHJcbiAgICBjb25zdCBBbGxvd1R5cGVzID0gW1wiaW1hZ2UvcG5nXCIsIFwiaW1hZ2UvanBlZ1wiLCBcImltYWdlL2pwZ1wiXTtcclxuICAgIGlmIChzZWxlY3RlZCAmJiBBbGxvd1R5cGVzLmluY2x1ZGVzKHNlbGVjdGVkLnR5cGUpKSB7XHJcbiAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEJ1bm5lcihyZWFkZXIucmVzdWx0KTtcclxuICAgICAgfTtcclxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoc2VsZWN0ZWQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0RXJyb3IoXCJGaWxlIG5vdCBTdXBwb3J0ZWRcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBQcm9maWxlaGFuZGxlSW1hZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkKTtcclxuICAgIGNvbnN0IEFsbG93VHlwZXMgPSBbXCJpbWFnZS9wbmdcIiwgXCJpbWFnZS9qcGVnXCIsIFwiaW1hZ2UvanBnXCJdO1xyXG4gICAgaWYgKHNlbGVjdGVkICYmIEFsbG93VHlwZXMuaW5jbHVkZXMoc2VsZWN0ZWQudHlwZSkpIHtcclxuICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0UHJvZmlsZShyZWFkZXIucmVzdWx0KTtcclxuICAgICAgfTtcclxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoc2VsZWN0ZWQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0RXJyb3IoXCJGaWxlIG5vdCBTdXBwb3J0ZWRcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBhZGRQcm9kdWN0cyA9ICgpID0+IHtcclxuICAgIGFsZXJ0KFwiUHJvZHVjdCBoYXMgYmVlbiBhZGRlZFwiKTtcclxuICB9O1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj1cImNvbHVtblwiPlxyXG4gICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgIDxIZWFkZXIgey4uLnByb3BzfSAvPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSB4bD17MTJ9IGxnPXsxMn0gbWQ9ezEyfSBzbT17MTJ9IGNvbnRhaW5lcj5cclxuICAgICAgICA8UGFwZXJcclxuICAgICAgICAgIC8vIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn1cclxuXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtCdW5uZXJ9KWAsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgIGhlaWdodDogXCIxOTJweFwiLFxyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI2MHB4XCIsXHJcbiAgICAgICAgICAgIC8vIHdpZHRoOiBcIjEzMjhweFwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHhzPXsxMn1cclxuICAgICAgICAgIHhsPXsxMn1cclxuICAgICAgICAgIGxnPXsxMn1cclxuICAgICAgICAgIG1kPXsxMn1cclxuICAgICAgICAgIHNtPXs2fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxQYXBlclxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGhlaWdodDogXCIxOTJweFwiLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjM4N3B4XCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBcIjAgYXV0b1wiLFxyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke1Byb2ZpbGV9KWAsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIC8vIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn1cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMTNweFwiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMzU4cHhcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogXCIxMHB4IDE1cHhcIixcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjgsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7bWFuYWdlciA/IChcclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtCYW5uZXJoYW5kbGVJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwicmFpc2VkLWJ1dHRvbi1maWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJhaXNlZC1idXR0b24tZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwicmFpc2VkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjM2QzMDMwXCIsIGNvbG9yOiBcIndoaXRlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVXBsb2FkIEJhbm5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxEaWFsb2cgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IG1hbmFnZXIgPyBcImFic29sdXRlXCIgOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IG1hbmFnZXIgPyBcIjQwcHhcIiA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBtYW5hZ2VyID8gXCIzNXB4XCIgOiBudWxsLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIHRvcDogbWFuYWdlciA/IG51bGwgOiBcIjEyNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGdyYXlcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2Nkbi5ub2hhdC5jYy90aHVtYi9mLzcyMC9jb212ZWN0ZWV6eTU4NTMyOS5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAge21hbmdlciA/IChcclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjEwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjEzMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e1Byb2ZpbGVoYW5kbGVJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJyYWlzZWQtYnV0dG9uLWZpbGUxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJhaXNlZC1idXR0b24tZmlsZTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDcmVhdGVJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIiMzMDUwODVcIiwgZm9udFNpemU6IFwiMjVweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICA8L1BhcGVyPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSB4bD17MTJ9IGxnPXsxMn0gbWQ9ezEyfSBzbT17MTJ9PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImgyXCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgIHtzaG9wbmFtZX1cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgYWxpZ249XCJjZW50ZXJcIj57ZGVzY308L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPFR5cG9ncmFwaHk+XHJcbiAgICAgICAgICB7bWFuYWdlciA/IChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogXCIxMHB4IDBcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPENyZWF0ZUljb24gc3R5bGU9e3sgY29sb3I6IFwiIzMwNTA4NVwiLCBmb250U2l6ZTogXCIxNXB4XCIgfX0gLz5cclxuICAgICAgICAgICAgICA8U2hvcE5hbWVEaWFsb2cgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSB4bD17MTJ9IGxnPXsxMn0gbWQ9ezEyfSBzbT17MTJ9PlxyXG4gICAgICAgIHttYW5hZ2VyID8gKFxyXG4gICAgICAgICAgPFBhcGVyXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjIwMHB4XCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBcIjIwcHggNTBweFwiLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2FkZFByb2R1Y3RzfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeT5BZGQgUHJvZHVjdHM8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9