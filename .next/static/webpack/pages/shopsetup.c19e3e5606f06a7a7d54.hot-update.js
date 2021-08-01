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

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/07/Whatsapp-DP-Images-4-300x279.gif"),
      Profile = _useState2[0],
      setProfile = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("Shop Name here"),
      shopname = _useState3[0],
      setShopName = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("user your description here"),
      desc = _useState4[0],
      setDesc = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
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
        onChange: BannerhandleImage,
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
              opacity: 0.8,
              border: "1px solid black"
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              children: [manager ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
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
                    lineNumber: 125,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                  variant: "h6",
                  align: "center",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_components_shopsetup_Dialog__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 136,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 135,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 19
              }, this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
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
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
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
        lineNumber: 170,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {
        align: "center",
        children: desc
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
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
            lineNumber: 184,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_components_shopsetup_ShopNameDialog__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 15
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 13
        }, this) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 169,
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
          lineNumber: 203,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 11
      }, this) : null
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {
      item: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_resusable_footer__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 5
  }, this);
}

_s(shopsetup, "+gVlSCzhJBJqGTXA0aANfS93GLI=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcHNldHVwLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4R3JvdyIsInBhcGVyIiwicGFkZGluZyIsInNwYWNpbmciLCJ0ZXh0QWxpZ24iLCJjb2xvciIsInBhbGV0dGUiLCJ0ZXh0Iiwic2Vjb25kYXJ5Iiwic2hvcHNldHVwIiwicHJvcHMiLCJ1c2VTdGF0ZSIsIkJ1bm5lciIsInNldEJ1bm5lciIsIlByb2ZpbGUiLCJzZXRQcm9maWxlIiwic2hvcG5hbWUiLCJzZXRTaG9wTmFtZSIsImRlc2MiLCJzZXREZXNjIiwibWFuYWdlciIsInNldE1hbmFnZXIiLCJ1c2VyIiwic2V0VXNlciIsImVycm9yIiwic2V0RXJyb3IiLCJCYW5uZXJoYW5kbGVJbWFnZSIsImUiLCJzZWxlY3RlZCIsInRhcmdldCIsImZpbGVzIiwiQWxsb3dUeXBlcyIsImluY2x1ZGVzIiwidHlwZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWRlbmQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwiUHJvZmlsZWhhbmRsZUltYWdlIiwiYWRkUHJvZHVjdHMiLCJhbGVydCIsImNsYXNzZXMiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRSZXBlYXQiLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbiIsInBvc2l0aW9uIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImJhY2tncm91bmRDb2xvciIsIm9wYWNpdHkiLCJib3JkZXIiLCJpbnB1dCIsImJ1dHRvbiIsImJvcmRlclJhZGl1cyIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJ0b3AiLCJmb250U2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRE0sR0FjSjtBQWZOO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE1SEYsZUE2SUUsOERBQUMsbURBQUQ7QUFBTSxVQUFJLE1BQVY7QUFBQSw2QkFDRSw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTdJRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1KRDs7R0E3THVCL0IsUztVQXlDTmIsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaG9wc2V0dXAuYzE5ZTNlNTYwNmYwNmE3YTdkNTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9zcmMvcmVzdXNhYmxlL2hlYWRlclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9zcmMvcmVzdXNhYmxlL2Zvb3RlclwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgeyBHcmlkLCBUeXBvZ3JhcGh5LCB1c2VUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlua1wiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgQ3JlYXRlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NyZWF0ZVwiO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9zaG9wc2V0dXAvRGlhbG9nXCI7XHJcbmltcG9ydCBTaG9wTmFtZURpYWxvZyBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvc2hvcHNldHVwL1Nob3BOYW1lRGlhbG9nXCI7XHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gIH0sXHJcbiAgcGFwZXI6IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaG9wc2V0dXAocHJvcHMpIHtcclxuICBjb25zdCBbQnVubmVyLCBzZXRCdW5uZXJdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW1Byb2ZpbGUsIHNldFByb2ZpbGVdID0gdXNlU3RhdGUoXHJcbiAgICBcImh0dHBzOi8vd3d3LndoYXRzYXBwcHJvZmlsZWRwaW1hZ2VzLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMS8wNy9XaGF0c2FwcC1EUC1JbWFnZXMtNC0zMDB4Mjc5LmdpZlwiXHJcbiAgKTtcclxuICBjb25zdCBbc2hvcG5hbWUsIHNldFNob3BOYW1lXSA9IHVzZVN0YXRlKFwiU2hvcCBOYW1lIGhlcmVcIik7XHJcbiAgY29uc3QgW2Rlc2MsIHNldERlc2NdID0gdXNlU3RhdGUoXCJ1c2VyIHlvdXIgZGVzY3JpcHRpb24gaGVyZVwiKTtcclxuICBjb25zdCBbbWFuYWdlciwgc2V0TWFuYWdlcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAvLyBjb25zdCBbcHJvZmlsZWltZywgc2V0UHJvZmlsZUltZ10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBCYW5uZXJoYW5kbGVJbWFnZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZCA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgY29uc3QgQWxsb3dUeXBlcyA9IFtcImltYWdlL3BuZ1wiLCBcImltYWdlL2pwZWdcIiwgXCJpbWFnZS9qcGdcIl07XHJcbiAgICBpZiAoc2VsZWN0ZWQgJiYgQWxsb3dUeXBlcy5pbmNsdWRlcyhzZWxlY3RlZC50eXBlKSkge1xyXG4gICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcclxuICAgICAgICBzZXRCdW5uZXIocmVhZGVyLnJlc3VsdCk7XHJcbiAgICAgIH07XHJcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKHNlbGVjdGVkKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEVycm9yKFwiRmlsZSBub3QgU3VwcG9ydGVkXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgUHJvZmlsZWhhbmRsZUltYWdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBjb25zdCBBbGxvd1R5cGVzID0gW1wiaW1hZ2UvcG5nXCIsIFwiaW1hZ2UvanBlZ1wiLCBcImltYWdlL2pwZ1wiXTtcclxuICAgIGlmIChzZWxlY3RlZCAmJiBBbGxvd1R5cGVzLmluY2x1ZGVzKHNlbGVjdGVkLnR5cGUpKSB7XHJcbiAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFByb2ZpbGUocmVhZGVyLnJlc3VsdCk7XHJcbiAgICAgIH07XHJcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKHNlbGVjdGVkKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEVycm9yKFwiRmlsZSBub3QgU3VwcG9ydGVkXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgYWRkUHJvZHVjdHMgPSAoKSA9PiB7XHJcbiAgICBhbGVydChcIlByb2R1Y3QgaGFzIGJlZW4gYWRkZWRcIik7XHJcbiAgfTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249XCJjb2x1bW5cIj5cclxuICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICA8SGVhZGVyIHsuLi5wcm9wc30gLz5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0geGw9ezEyfSBsZz17MTJ9IG1kPXsxMn0gc209ezEyfSBjb250YWluZXI+XHJcbiAgICAgICAgPFBhcGVyXHJcbiAgICAgICAgICAvLyBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9XHJcbiAgICAgICAgICBvbkNoYW5nZT17QmFubmVyaGFuZGxlSW1hZ2V9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtCdW5uZXJ9KWAsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgIGhlaWdodDogXCIxOTJweFwiLFxyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI2MHB4XCIsXHJcbiAgICAgICAgICAgIC8vIHdpZHRoOiBcIjEzMjhweFwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHhzPXsxMn1cclxuICAgICAgICAgIHhsPXsxMn1cclxuICAgICAgICAgIGxnPXsxMn1cclxuICAgICAgICAgIG1kPXsxMn1cclxuICAgICAgICAgIHNtPXs2fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxQYXBlclxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGhlaWdodDogXCIxOTJweFwiLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjM4N3B4XCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBcIjAgYXV0b1wiLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke1Byb2ZpbGV9KWAsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIC8vIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn1cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMTNweFwiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMzU4cHhcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogXCIxMHB4IDE1cHhcIixcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjgsXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGJsYWNrXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7bWFuYWdlciA/IChcclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwicmFpc2VkLWJ1dHRvbi1maWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJhaXNlZC1idXR0b24tZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwicmFpc2VkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjM2QzMDMwXCIsIGNvbG9yOiBcIndoaXRlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVXBsb2FkIEJhbm5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxEaWFsb2cgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IG1hbmFnZXIgPyBcImFic29sdXRlXCIgOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBtYW5hZ2VyID8gXCI0MHB4XCIgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBtYW5hZ2VyID8gXCIzNXB4XCIgOiBudWxsLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBtYW5hZ2VyID8gbnVsbCA6IFwiMTI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmF5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2Nkbi5ub2hhdC5jYy90aHVtYi9mLzcyMC9jb212ZWN0ZWV6eTU4NTMyOS5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8Q3JlYXRlSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiIzMwNTA4NVwiLCBmb250U2l6ZTogXCIxNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICA8L1BhcGVyPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSB4bD17MTJ9IGxnPXsxMn0gbWQ9ezEyfSBzbT17MTJ9PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImgyXCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgIHtzaG9wbmFtZX1cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgYWxpZ249XCJjZW50ZXJcIj57ZGVzY308L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPFR5cG9ncmFwaHk+XHJcbiAgICAgICAgICB7bWFuYWdlciA/IChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogXCIxMHB4IDBcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPENyZWF0ZUljb24gc3R5bGU9e3sgY29sb3I6IFwiIzMwNTA4NVwiLCBmb250U2l6ZTogXCIxNXB4XCIgfX0gLz5cclxuICAgICAgICAgICAgICA8U2hvcE5hbWVEaWFsb2cgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSB4bD17MTJ9IGxnPXsxMn0gbWQ9ezEyfSBzbT17MTJ9PlxyXG4gICAgICAgIHttYW5hZ2VyID8gKFxyXG4gICAgICAgICAgPFBhcGVyXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjIwMHB4XCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBcIjIwcHggNTBweFwiLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2FkZFByb2R1Y3RzfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeT5BZGQgUHJvZHVjdHM8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9