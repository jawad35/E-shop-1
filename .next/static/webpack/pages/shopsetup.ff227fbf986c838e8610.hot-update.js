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
                lineNumber: 114,
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
                  lineNumber: 123,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                variant: "h6",
                align: "center",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_components_shopsetup_Dialog__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
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
                  lineNumber: 138,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
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
        lineNumber: 163,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {
        align: "center",
        children: desc
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 166,
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
            lineNumber: 177,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_components_shopsetup_ShopNameDialog__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 15
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 13
        }, this) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 162,
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
          lineNumber: 196,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 11
      }, this) : null
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {
      item: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_resusable_footer__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 200,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcHNldHVwLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4R3JvdyIsInBhcGVyIiwicGFkZGluZyIsInNwYWNpbmciLCJ0ZXh0QWxpZ24iLCJjb2xvciIsInBhbGV0dGUiLCJ0ZXh0Iiwic2Vjb25kYXJ5Iiwic2hvcHNldHVwIiwicHJvcHMiLCJ1c2VTdGF0ZSIsIkJ1bm5lciIsInNldEJ1bm5lciIsIlByb2ZpbGUiLCJzZXRQcm9maWxlIiwic2hvcG5hbWUiLCJzZXRTaG9wTmFtZSIsImRlc2MiLCJzZXREZXNjIiwibWFuYWdlciIsInNldE1hbmFnZXIiLCJ1c2VyIiwic2V0VXNlciIsImVycm9yIiwic2V0RXJyb3IiLCJCYW5uZXJoYW5kbGVJbWFnZSIsImUiLCJzZWxlY3RlZCIsInRhcmdldCIsImZpbGVzIiwiQWxsb3dUeXBlcyIsImluY2x1ZGVzIiwidHlwZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWRlbmQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwiUHJvZmlsZWhhbmRsZUltYWdlIiwiYWRkUHJvZHVjdHMiLCJhbGVydCIsImNsYXNzZXMiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRSZXBlYXQiLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbiIsInBvc2l0aW9uIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImJhY2tncm91bmRDb2xvciIsIm9wYWNpdHkiLCJpbnB1dCIsImJ1dHRvbiIsImJvcmRlclJhZGl1cyIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJib3JkZXIiLCJmb250U2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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ZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Nob3BzZXR1cC5mZjIyN2ZiZjk4NmM4MzhlODYxMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL3NyYy9yZXN1c2FibGUvaGVhZGVyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL3NyYy9yZXN1c2FibGUvZm9vdGVyXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCB7IEdyaWQsIFR5cG9ncmFwaHksIHVzZVRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaW5rXCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCBDcmVhdGVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ3JlYXRlXCI7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL3Nob3BzZXR1cC9EaWFsb2dcIjtcclxuaW1wb3J0IFNob3BOYW1lRGlhbG9nIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9zaG9wc2V0dXAvU2hvcE5hbWVEaWFsb2dcIjtcclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgfSxcclxuICBwYXBlcjoge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg0KSxcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNob3BzZXR1cChwcm9wcykge1xyXG4gIGNvbnN0IFtCdW5uZXIsIHNldEJ1bm5lcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbUHJvZmlsZSwgc2V0UHJvZmlsZV0gPSB1c2VTdGF0ZShcclxuICAgIFwiaHR0cHM6Ly93d3cud2hhdHNhcHBwcm9maWxlZHBpbWFnZXMuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIxLzA3L1doYXRzYXBwLURQLUltYWdlcy00LTMwMHgyNzkuZ2lmXCJcclxuICApO1xyXG4gIGNvbnN0IFtzaG9wbmFtZSwgc2V0U2hvcE5hbWVdID0gdXNlU3RhdGUoXCJTaG9wIE5hbWUgaGVyZVwiKTtcclxuICBjb25zdCBbZGVzYywgc2V0RGVzY10gPSB1c2VTdGF0ZShcInVzZXIgeW91ciBkZXNjcmlwdGlvbiBoZXJlXCIpO1xyXG4gIGNvbnN0IFttYW5hZ2VyLCBzZXRNYW5hZ2VyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgLy8gY29uc3QgW3Byb2ZpbGVpbWcsIHNldFByb2ZpbGVJbWddID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgQmFubmVyaGFuZGxlSW1hZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgIGNvbnN0IEFsbG93VHlwZXMgPSBbXCJpbWFnZS9wbmdcIiwgXCJpbWFnZS9qcGVnXCIsIFwiaW1hZ2UvanBnXCJdO1xyXG4gICAgaWYgKHNlbGVjdGVkICYmIEFsbG93VHlwZXMuaW5jbHVkZXMoc2VsZWN0ZWQudHlwZSkpIHtcclxuICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0QnVubmVyKHJlYWRlci5yZXN1bHQpO1xyXG4gICAgICB9O1xyXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChzZWxlY3RlZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRFcnJvcihcIkZpbGUgbm90IFN1cHBvcnRlZFwiKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IFByb2ZpbGVoYW5kbGVJbWFnZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZCA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgY29uc3QgQWxsb3dUeXBlcyA9IFtcImltYWdlL3BuZ1wiLCBcImltYWdlL2pwZWdcIiwgXCJpbWFnZS9qcGdcIl07XHJcbiAgICBpZiAoc2VsZWN0ZWQgJiYgQWxsb3dUeXBlcy5pbmNsdWRlcyhzZWxlY3RlZC50eXBlKSkge1xyXG4gICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcclxuICAgICAgICBzZXRQcm9maWxlKHJlYWRlci5yZXN1bHQpO1xyXG4gICAgICB9O1xyXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChzZWxlY3RlZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRFcnJvcihcIkZpbGUgbm90IFN1cHBvcnRlZFwiKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGFkZFByb2R1Y3RzID0gKCkgPT4ge1xyXG4gICAgYWxlcnQoXCJQcm9kdWN0IGhhcyBiZWVuIGFkZGVkXCIpO1xyXG4gIH07XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPVwiY29sdW1uXCI+XHJcbiAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgPEhlYWRlciB7Li4ucHJvcHN9IC8+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHhsPXsxMn0gbGc9ezEyfSBtZD17MTJ9IHNtPXsxMn0gY29udGFpbmVyPlxyXG4gICAgICAgIDxQYXBlclxyXG4gICAgICAgICAgLy8gY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e0Jhbm5lcmhhbmRsZUltYWdlfVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7QnVubmVyfSlgLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTkycHhcIixcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNjBweFwiLFxyXG4gICAgICAgICAgICAvLyB3aWR0aDogXCIxMzI4cHhcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICB4bD17MTJ9XHJcbiAgICAgICAgICBsZz17MTJ9XHJcbiAgICAgICAgICBtZD17MTJ9XHJcbiAgICAgICAgICBzbT17Nn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8UGFwZXJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTkycHhcIixcclxuICAgICAgICAgICAgICB3aWR0aDogXCIzODdweFwiLFxyXG4gICAgICAgICAgICAgIG1hcmdpbjogXCIwIGF1dG9cIixcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtQcm9maWxlfSlgLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHttYW5hZ2VyID8gKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIC8vIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMTNweFwiLFxyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIzNThweFwiLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMTBweCAxNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuOCxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJyYWlzZWQtYnV0dG9uLWZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG11bHRpcGxlXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJhaXNlZC1idXR0b24tZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJyYWlzZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiMzZDMwMzBcIiwgY29sb3I6IFwid2hpdGVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIFVwbG9hZCBCYW5uZXJcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpYWxvZyAvPlxyXG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIzNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgZ3JheVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG4ubm9oYXQuY2MvdGh1bWIvZi83MjAvY29tdmVjdGVlenk1ODUzMjkuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgey8qIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8Q3JlYXRlSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiIzMwNTA4NVwiLCBmb250U2l6ZTogXCIxNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgIDwvUGFwZXI+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHhsPXsxMn0gbGc9ezEyfSBtZD17MTJ9IHNtPXsxMn0+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiaDJcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAge3Nob3BuYW1lfVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8VHlwb2dyYXBoeSBhbGlnbj1cImNlbnRlclwiPntkZXNjfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8VHlwb2dyYXBoeT5cclxuICAgICAgICAgIHttYW5hZ2VyID8gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIjEwcHggMFwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8Q3JlYXRlSWNvbiBzdHlsZT17eyBjb2xvcjogXCIjMzA1MDg1XCIsIGZvbnRTaXplOiBcIjE1cHhcIiB9fSAvPlxyXG4gICAgICAgICAgICAgIDxTaG9wTmFtZURpYWxvZyAvPntcIiBcIn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHhsPXsxMn0gbGc9ezEyfSBtZD17MTJ9IHNtPXsxMn0+XHJcbiAgICAgICAge21hbmFnZXIgPyAoXHJcbiAgICAgICAgICA8UGFwZXJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjAwcHhcIixcclxuICAgICAgICAgICAgICBtYXJnaW46IFwiMjBweCA1MHB4XCIsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGdyZXlcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25DbGljaz17YWRkUHJvZHVjdHN9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5PkFkZCBQcm9kdWN0czwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvR3JpZD5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=