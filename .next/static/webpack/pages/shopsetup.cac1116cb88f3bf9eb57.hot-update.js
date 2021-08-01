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
          onChange: ProfileHandleChange,
          style: {
            height: "192px",
            width: "387px",
            margin: "0 auto",
            backgroundImage: "url(".concat(Profile, ")"),
            backgroundSize: "cover"
          },
          children: manager ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
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
                columnNumber: 19
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
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                variant: "h6",
                align: "center",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_components_shopsetup_Dialog__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 135,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                  style: {
                    position: "absolute",
                    borderRadius: "50%",
                    marginTop: "40px",
                    marginLeft: "35px",
                    border: "1px solid gray"
                  },
                  width: "100px",
                  height: "100px",
                  src: "https://cdn.nohat.cc/thumb/f/720/comvecteezy585329.jpg"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 138,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 15
          }, this) : null
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
        lineNumber: 159,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {
        align: "center",
        children: desc
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
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
            lineNumber: 173,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_components_shopsetup_ShopNameDialog__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 15
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 13
        }, this) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 158,
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
          lineNumber: 192,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 11
      }, this) : null
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {
      item: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_resusable_footer__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 5
  }, this);
}

_s(shopsetup, "AysN9Rz8o53QteNltZWQrYfPZeY=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcHNldHVwLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4R3JvdyIsInBhcGVyIiwicGFkZGluZyIsInNwYWNpbmciLCJ0ZXh0QWxpZ24iLCJjb2xvciIsInBhbGV0dGUiLCJ0ZXh0Iiwic2Vjb25kYXJ5Iiwic2hvcHNldHVwIiwicHJvcHMiLCJ1c2VTdGF0ZSIsIkJ1bm5lciIsInNldEJ1bm5lciIsIlByb2ZpbGUiLCJzZXRQcm9maWxlIiwic2hvcG5hbWUiLCJzZXRTaG9wTmFtZSIsImRlc2MiLCJzZXREZXNjIiwibWFuYWdlciIsInNldE1hbmFnZXIiLCJ1c2VyIiwic2V0VXNlciIsImVycm9yIiwic2V0RXJyb3IiLCJCYW5uZXJoYW5kbGVJbWFnZSIsImUiLCJzZWxlY3RlZCIsInRhcmdldCIsImZpbGVzIiwiQWxsb3dUeXBlcyIsImluY2x1ZGVzIiwidHlwZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWRlbmQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwiUHJvZmlsZWhhbmRsZUltYWdlIiwiYWRkUHJvZHVjdHMiLCJhbGVydCIsImNsYXNzZXMiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRSZXBlYXQiLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcmdpbkJvdHRvbSIsIlByb2ZpbGVIYW5kbGVDaGFuZ2UiLCJtYXJnaW4iLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvcGFjaXR5IiwiaW5wdXQiLCJidXR0b24iLCJib3JkZXJSYWRpdXMiLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwiYm9yZGVyIiwiZm9udFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7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QTtBQUFBO0FBQUEsVUFERjtBQXdJRDs7R0FsTHVCL0IsUztVQXlDTmIsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaG9wc2V0dXAuY2FjMTExNmNiODhmM2JmOWViNTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9zcmMvcmVzdXNhYmxlL2hlYWRlclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9zcmMvcmVzdXNhYmxlL2Zvb3RlclwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgeyBHcmlkLCBUeXBvZ3JhcGh5LCB1c2VUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlua1wiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgQ3JlYXRlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NyZWF0ZVwiO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9zaG9wc2V0dXAvRGlhbG9nXCI7XHJcbmltcG9ydCBTaG9wTmFtZURpYWxvZyBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvc2hvcHNldHVwL1Nob3BOYW1lRGlhbG9nXCI7XHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gIH0sXHJcbiAgcGFwZXI6IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaG9wc2V0dXAocHJvcHMpIHtcclxuICBjb25zdCBbQnVubmVyLCBzZXRCdW5uZXJdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW1Byb2ZpbGUsIHNldFByb2ZpbGVdID0gdXNlU3RhdGUoXHJcbiAgICBcImh0dHBzOi8vd3d3LndoYXRzYXBwcHJvZmlsZWRwaW1hZ2VzLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMS8wNy9XaGF0c2FwcC1EUC1JbWFnZXMtNC0zMDB4Mjc5LmdpZlwiXHJcbiAgKTtcclxuICBjb25zdCBbc2hvcG5hbWUsIHNldFNob3BOYW1lXSA9IHVzZVN0YXRlKFwiU2hvcCBOYW1lIGhlcmVcIik7XHJcbiAgY29uc3QgW2Rlc2MsIHNldERlc2NdID0gdXNlU3RhdGUoXCJ1c2VyIHlvdXIgZGVzY3JpcHRpb24gaGVyZVwiKTtcclxuICBjb25zdCBbbWFuYWdlciwgc2V0TWFuYWdlcl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgLy8gY29uc3QgW3Byb2ZpbGVpbWcsIHNldFByb2ZpbGVJbWddID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgQmFubmVyaGFuZGxlSW1hZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgIGNvbnN0IEFsbG93VHlwZXMgPSBbXCJpbWFnZS9wbmdcIiwgXCJpbWFnZS9qcGVnXCIsIFwiaW1hZ2UvanBnXCJdO1xyXG4gICAgaWYgKHNlbGVjdGVkICYmIEFsbG93VHlwZXMuaW5jbHVkZXMoc2VsZWN0ZWQudHlwZSkpIHtcclxuICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0QnVubmVyKHJlYWRlci5yZXN1bHQpO1xyXG4gICAgICB9O1xyXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChzZWxlY3RlZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRFcnJvcihcIkZpbGUgbm90IFN1cHBvcnRlZFwiKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IFByb2ZpbGVoYW5kbGVJbWFnZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZCA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgY29uc3QgQWxsb3dUeXBlcyA9IFtcImltYWdlL3BuZ1wiLCBcImltYWdlL2pwZWdcIiwgXCJpbWFnZS9qcGdcIl07XHJcbiAgICBpZiAoc2VsZWN0ZWQgJiYgQWxsb3dUeXBlcy5pbmNsdWRlcyhzZWxlY3RlZC50eXBlKSkge1xyXG4gICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcclxuICAgICAgICBzZXRQcm9maWxlKHJlYWRlci5yZXN1bHQpO1xyXG4gICAgICB9O1xyXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChzZWxlY3RlZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRFcnJvcihcIkZpbGUgbm90IFN1cHBvcnRlZFwiKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGFkZFByb2R1Y3RzID0gKCkgPT4ge1xyXG4gICAgYWxlcnQoXCJQcm9kdWN0IGhhcyBiZWVuIGFkZGVkXCIpO1xyXG4gIH07XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPVwiY29sdW1uXCI+XHJcbiAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgPEhlYWRlciB7Li4ucHJvcHN9IC8+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHhsPXsxMn0gbGc9ezEyfSBtZD17MTJ9IHNtPXsxMn0gY29udGFpbmVyPlxyXG4gICAgICAgIDxQYXBlclxyXG4gICAgICAgICAgLy8gY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e0Jhbm5lcmhhbmRsZUltYWdlfVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7QnVubmVyfSlgLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTkycHhcIixcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNjBweFwiLFxyXG4gICAgICAgICAgICAvLyB3aWR0aDogXCIxMzI4cHhcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICB4bD17MTJ9XHJcbiAgICAgICAgICBsZz17MTJ9XHJcbiAgICAgICAgICBtZD17MTJ9XHJcbiAgICAgICAgICBzbT17Nn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8UGFwZXJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e1Byb2ZpbGVIYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE5MnB4XCIsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMzg3cHhcIixcclxuICAgICAgICAgICAgICBtYXJnaW46IFwiMCBhdXRvXCIsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7UHJvZmlsZX0pYCxcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bWFuYWdlciA/IChcclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAvLyBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTEzcHhcIixcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMzU4cHhcIixcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjEwcHggMTVweFwiLFxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjgsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwicmFpc2VkLWJ1dHRvbi1maWxlXCJcclxuICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyYWlzZWQtYnV0dG9uLWZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwicmFpc2VkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjM2QzMDMwXCIsIGNvbG9yOiBcIndoaXRlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBVcGxvYWQgQmFubmVyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaWFsb2cgLz5cclxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMzVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGdyYXlcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vY2RuLm5vaGF0LmNjL3RodW1iL2YvNzIwL2NvbXZlY3RlZXp5NTg1MzI5LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgIDwvUGFwZXI+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHhsPXsxMn0gbGc9ezEyfSBtZD17MTJ9IHNtPXsxMn0+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiaDJcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAge3Nob3BuYW1lfVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8VHlwb2dyYXBoeSBhbGlnbj1cImNlbnRlclwiPntkZXNjfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8VHlwb2dyYXBoeT5cclxuICAgICAgICAgIHttYW5hZ2VyID8gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIjEwcHggMFwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8Q3JlYXRlSWNvbiBzdHlsZT17eyBjb2xvcjogXCIjMzA1MDg1XCIsIGZvbnRTaXplOiBcIjE1cHhcIiB9fSAvPlxyXG4gICAgICAgICAgICAgIDxTaG9wTmFtZURpYWxvZyAvPntcIiBcIn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHhsPXsxMn0gbGc9ezEyfSBtZD17MTJ9IHNtPXsxMn0+XHJcbiAgICAgICAge21hbmFnZXIgPyAoXHJcbiAgICAgICAgICA8UGFwZXJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjAwcHhcIixcclxuICAgICAgICAgICAgICBtYXJnaW46IFwiMjBweCA1MHB4XCIsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGdyZXlcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25DbGljaz17YWRkUHJvZHVjdHN9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5PkFkZCBQcm9kdWN0czwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvR3JpZD5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=