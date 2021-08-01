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
              opacity: 0.8
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
                  lineNumber: 115,
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
                    lineNumber: 124,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 123,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                  variant: "h6",
                  align: "center",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_components_shopsetup_Dialog__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 135,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 19
              }, this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                  style: {
                    position: "absolute",
                    borderRadius: "50%",
                    // marginTop: "40px",
                    // marginLeft: "35px",
                    border: "1px solid gray"
                  },
                  width: "100px",
                  height: "100px",
                  src: "https://cdn.nohat.cc/thumb/f/720/comvecteezy585329.jpg"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 140,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 112,
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
        lineNumber: 164,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {
        align: "center",
        children: desc
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 167,
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
            lineNumber: 178,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_components_shopsetup_ShopNameDialog__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 15
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 13
        }, this) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 163,
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
          lineNumber: 197,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 11
      }, this) : null
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {
      item: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_resusable_footer__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 5
  }, this);
}

_s(shopsetup, "SFikCmMHHkc1dJnXSUbkzWyu/dY=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcHNldHVwLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4R3JvdyIsInBhcGVyIiwicGFkZGluZyIsInNwYWNpbmciLCJ0ZXh0QWxpZ24iLCJjb2xvciIsInBhbGV0dGUiLCJ0ZXh0Iiwic2Vjb25kYXJ5Iiwic2hvcHNldHVwIiwicHJvcHMiLCJ1c2VTdGF0ZSIsIkJ1bm5lciIsInNldEJ1bm5lciIsIlByb2ZpbGUiLCJzZXRQcm9maWxlIiwic2hvcG5hbWUiLCJzZXRTaG9wTmFtZSIsImRlc2MiLCJzZXREZXNjIiwibWFuYWdlciIsInNldE1hbmFnZXIiLCJ1c2VyIiwic2V0VXNlciIsImVycm9yIiwic2V0RXJyb3IiLCJCYW5uZXJoYW5kbGVJbWFnZSIsImUiLCJzZWxlY3RlZCIsInRhcmdldCIsImZpbGVzIiwiQWxsb3dUeXBlcyIsImluY2x1ZGVzIiwidHlwZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWRlbmQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwiUHJvZmlsZWhhbmRsZUltYWdlIiwiYWRkUHJvZHVjdHMiLCJhbGVydCIsImNsYXNzZXMiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRSZXBlYXQiLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbiIsInBvc2l0aW9uIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImJhY2tncm91bmRDb2xvciIsIm9wYWNpdHkiLCJpbnB1dCIsImJ1dHRvbiIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsImZvbnRTaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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YWNrL3BhZ2VzL3Nob3BzZXR1cC5iNGRjZGEwYTU0YWFmZmY1OGFkZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL3NyYy9yZXN1c2FibGUvaGVhZGVyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL3NyYy9yZXN1c2FibGUvZm9vdGVyXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCB7IEdyaWQsIFR5cG9ncmFwaHksIHVzZVRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaW5rXCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCBDcmVhdGVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ3JlYXRlXCI7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL3Nob3BzZXR1cC9EaWFsb2dcIjtcclxuaW1wb3J0IFNob3BOYW1lRGlhbG9nIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9zaG9wc2V0dXAvU2hvcE5hbWVEaWFsb2dcIjtcclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgfSxcclxuICBwYXBlcjoge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg0KSxcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNob3BzZXR1cChwcm9wcykge1xyXG4gIGNvbnN0IFtCdW5uZXIsIHNldEJ1bm5lcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbUHJvZmlsZSwgc2V0UHJvZmlsZV0gPSB1c2VTdGF0ZShcclxuICAgIFwiaHR0cHM6Ly93d3cud2hhdHNhcHBwcm9maWxlZHBpbWFnZXMuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIxLzA3L1doYXRzYXBwLURQLUltYWdlcy00LTMwMHgyNzkuZ2lmXCJcclxuICApO1xyXG4gIGNvbnN0IFtzaG9wbmFtZSwgc2V0U2hvcE5hbWVdID0gdXNlU3RhdGUoXCJTaG9wIE5hbWUgaGVyZVwiKTtcclxuICBjb25zdCBbZGVzYywgc2V0RGVzY10gPSB1c2VTdGF0ZShcInVzZXIgeW91ciBkZXNjcmlwdGlvbiBoZXJlXCIpO1xyXG4gIGNvbnN0IFttYW5hZ2VyLCBzZXRNYW5hZ2VyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgLy8gY29uc3QgW3Byb2ZpbGVpbWcsIHNldFByb2ZpbGVJbWddID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgQmFubmVyaGFuZGxlSW1hZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgIGNvbnN0IEFsbG93VHlwZXMgPSBbXCJpbWFnZS9wbmdcIiwgXCJpbWFnZS9qcGVnXCIsIFwiaW1hZ2UvanBnXCJdO1xyXG4gICAgaWYgKHNlbGVjdGVkICYmIEFsbG93VHlwZXMuaW5jbHVkZXMoc2VsZWN0ZWQudHlwZSkpIHtcclxuICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0QnVubmVyKHJlYWRlci5yZXN1bHQpO1xyXG4gICAgICB9O1xyXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChzZWxlY3RlZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRFcnJvcihcIkZpbGUgbm90IFN1cHBvcnRlZFwiKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IFByb2ZpbGVoYW5kbGVJbWFnZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZCA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgY29uc3QgQWxsb3dUeXBlcyA9IFtcImltYWdlL3BuZ1wiLCBcImltYWdlL2pwZWdcIiwgXCJpbWFnZS9qcGdcIl07XHJcbiAgICBpZiAoc2VsZWN0ZWQgJiYgQWxsb3dUeXBlcy5pbmNsdWRlcyhzZWxlY3RlZC50eXBlKSkge1xyXG4gICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcclxuICAgICAgICBzZXRQcm9maWxlKHJlYWRlci5yZXN1bHQpO1xyXG4gICAgICB9O1xyXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChzZWxlY3RlZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRFcnJvcihcIkZpbGUgbm90IFN1cHBvcnRlZFwiKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGFkZFByb2R1Y3RzID0gKCkgPT4ge1xyXG4gICAgYWxlcnQoXCJQcm9kdWN0IGhhcyBiZWVuIGFkZGVkXCIpO1xyXG4gIH07XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPVwiY29sdW1uXCI+XHJcbiAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgPEhlYWRlciB7Li4ucHJvcHN9IC8+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHhsPXsxMn0gbGc9ezEyfSBtZD17MTJ9IHNtPXsxMn0gY29udGFpbmVyPlxyXG4gICAgICAgIDxQYXBlclxyXG4gICAgICAgICAgLy8gY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e0Jhbm5lcmhhbmRsZUltYWdlfVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7QnVubmVyfSlgLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTkycHhcIixcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNjBweFwiLFxyXG4gICAgICAgICAgICAvLyB3aWR0aDogXCIxMzI4cHhcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICB4bD17MTJ9XHJcbiAgICAgICAgICBsZz17MTJ9XHJcbiAgICAgICAgICBtZD17MTJ9XHJcbiAgICAgICAgICBzbT17Nn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8UGFwZXJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTkycHhcIixcclxuICAgICAgICAgICAgICB3aWR0aDogXCIzODdweFwiLFxyXG4gICAgICAgICAgICAgIG1hcmdpbjogXCIwIGF1dG9cIixcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtQcm9maWxlfSlgLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAvLyBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTEzcHhcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjM1OHB4XCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IFwiMTBweCAxNXB4XCIsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC44LFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge21hbmFnZXIgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInJhaXNlZC1idXR0b24tZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyYWlzZWQtYnV0dG9uLWZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInJhaXNlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzNkMzAzMFwiLCBjb2xvcjogXCJ3aGl0ZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVwbG9hZCBCYW5uZXJcclxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RGlhbG9nIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luVG9wOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIG1hcmdpbkxlZnQ6IFwiMzVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmF5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG4ubm9oYXQuY2MvdGh1bWIvZi83MjAvY29tdmVjdGVlenk1ODUzMjkuanBnXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8Q3JlYXRlSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiIzMwNTA4NVwiLCBmb250U2l6ZTogXCIxNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICA8L1BhcGVyPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSB4bD17MTJ9IGxnPXsxMn0gbWQ9ezEyfSBzbT17MTJ9PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImgyXCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgIHtzaG9wbmFtZX1cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgYWxpZ249XCJjZW50ZXJcIj57ZGVzY308L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPFR5cG9ncmFwaHk+XHJcbiAgICAgICAgICB7bWFuYWdlciA/IChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogXCIxMHB4IDBcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPENyZWF0ZUljb24gc3R5bGU9e3sgY29sb3I6IFwiIzMwNTA4NVwiLCBmb250U2l6ZTogXCIxNXB4XCIgfX0gLz5cclxuICAgICAgICAgICAgICA8U2hvcE5hbWVEaWFsb2cgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSB4bD17MTJ9IGxnPXsxMn0gbWQ9ezEyfSBzbT17MTJ9PlxyXG4gICAgICAgIHttYW5hZ2VyID8gKFxyXG4gICAgICAgICAgPFBhcGVyXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjIwMHB4XCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBcIjIwcHggNTBweFwiLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2FkZFByb2R1Y3RzfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeT5BZGQgUHJvZHVjdHM8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9