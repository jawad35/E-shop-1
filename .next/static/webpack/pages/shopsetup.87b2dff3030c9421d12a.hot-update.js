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
                    lineNumber: 141,
                    columnNumber: 21
                  }, this)
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
        lineNumber: 169,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {
        align: "center",
        children: desc
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
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
            lineNumber: 183,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_components_shopsetup_ShopNameDialog__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 15
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 13
        }, this) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 168,
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
          lineNumber: 202,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 11
      }, this) : null
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {
      item: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_resusable_footer__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 206,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcHNldHVwLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4R3JvdyIsInBhcGVyIiwicGFkZGluZyIsInNwYWNpbmciLCJ0ZXh0QWxpZ24iLCJjb2xvciIsInBhbGV0dGUiLCJ0ZXh0Iiwic2Vjb25kYXJ5Iiwic2hvcHNldHVwIiwicHJvcHMiLCJ1c2VTdGF0ZSIsIkJ1bm5lciIsInNldEJ1bm5lciIsIlByb2ZpbGUiLCJzZXRQcm9maWxlIiwic2hvcG5hbWUiLCJzZXRTaG9wTmFtZSIsImRlc2MiLCJzZXREZXNjIiwibWFuYWdlciIsInNldE1hbmFnZXIiLCJ1c2VyIiwic2V0VXNlciIsImVycm9yIiwic2V0RXJyb3IiLCJCYW5uZXJoYW5kbGVJbWFnZSIsImUiLCJzZWxlY3RlZCIsInRhcmdldCIsImZpbGVzIiwiQWxsb3dUeXBlcyIsImluY2x1ZGVzIiwidHlwZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWRlbmQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwiUHJvZmlsZWhhbmRsZUltYWdlIiwiYWRkUHJvZHVjdHMiLCJhbGVydCIsImNsYXNzZXMiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRSZXBlYXQiLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbiIsInBvc2l0aW9uIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImJhY2tncm91bmRDb2xvciIsIm9wYWNpdHkiLCJpbnB1dCIsImJ1dHRvbiIsImJvcmRlclJhZGl1cyIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJ0b3AiLCJib3JkZXIiLCJmb250U2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtB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QUFBO0FBQUE7QUFBQTtBQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FETSxHQWNKO0FBZk47QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTNIRixlQTRJRSw4REFBQyxtREFBRDtBQUFNLFVBQUksTUFBVjtBQUFBLDZCQUNFLDhEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBNUlGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa0pEOztHQTVMdUIvQixTO1VBeUNOYixTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Nob3BzZXR1cC44N2IyZGZmMzAzMGM5NDIxZDEyYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL3NyYy9yZXN1c2FibGUvaGVhZGVyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL3NyYy9yZXN1c2FibGUvZm9vdGVyXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCB7IEdyaWQsIFR5cG9ncmFwaHksIHVzZVRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaW5rXCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCBDcmVhdGVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ3JlYXRlXCI7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL3Nob3BzZXR1cC9EaWFsb2dcIjtcclxuaW1wb3J0IFNob3BOYW1lRGlhbG9nIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9zaG9wc2V0dXAvU2hvcE5hbWVEaWFsb2dcIjtcclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgfSxcclxuICBwYXBlcjoge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg0KSxcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNob3BzZXR1cChwcm9wcykge1xyXG4gIGNvbnN0IFtCdW5uZXIsIHNldEJ1bm5lcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbUHJvZmlsZSwgc2V0UHJvZmlsZV0gPSB1c2VTdGF0ZShcclxuICAgIFwiaHR0cHM6Ly93d3cud2hhdHNhcHBwcm9maWxlZHBpbWFnZXMuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIxLzA3L1doYXRzYXBwLURQLUltYWdlcy00LTMwMHgyNzkuZ2lmXCJcclxuICApO1xyXG4gIGNvbnN0IFtzaG9wbmFtZSwgc2V0U2hvcE5hbWVdID0gdXNlU3RhdGUoXCJTaG9wIE5hbWUgaGVyZVwiKTtcclxuICBjb25zdCBbZGVzYywgc2V0RGVzY10gPSB1c2VTdGF0ZShcInVzZXIgeW91ciBkZXNjcmlwdGlvbiBoZXJlXCIpO1xyXG4gIGNvbnN0IFttYW5hZ2VyLCBzZXRNYW5hZ2VyXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAvLyBjb25zdCBbcHJvZmlsZWltZywgc2V0UHJvZmlsZUltZ10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBCYW5uZXJoYW5kbGVJbWFnZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZCA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgY29uc3QgQWxsb3dUeXBlcyA9IFtcImltYWdlL3BuZ1wiLCBcImltYWdlL2pwZWdcIiwgXCJpbWFnZS9qcGdcIl07XHJcbiAgICBpZiAoc2VsZWN0ZWQgJiYgQWxsb3dUeXBlcy5pbmNsdWRlcyhzZWxlY3RlZC50eXBlKSkge1xyXG4gICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcclxuICAgICAgICBzZXRCdW5uZXIocmVhZGVyLnJlc3VsdCk7XHJcbiAgICAgIH07XHJcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKHNlbGVjdGVkKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEVycm9yKFwiRmlsZSBub3QgU3VwcG9ydGVkXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgUHJvZmlsZWhhbmRsZUltYWdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBjb25zdCBBbGxvd1R5cGVzID0gW1wiaW1hZ2UvcG5nXCIsIFwiaW1hZ2UvanBlZ1wiLCBcImltYWdlL2pwZ1wiXTtcclxuICAgIGlmIChzZWxlY3RlZCAmJiBBbGxvd1R5cGVzLmluY2x1ZGVzKHNlbGVjdGVkLnR5cGUpKSB7XHJcbiAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFByb2ZpbGUocmVhZGVyLnJlc3VsdCk7XHJcbiAgICAgIH07XHJcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKHNlbGVjdGVkKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEVycm9yKFwiRmlsZSBub3QgU3VwcG9ydGVkXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgYWRkUHJvZHVjdHMgPSAoKSA9PiB7XHJcbiAgICBhbGVydChcIlByb2R1Y3QgaGFzIGJlZW4gYWRkZWRcIik7XHJcbiAgfTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249XCJjb2x1bW5cIj5cclxuICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICA8SGVhZGVyIHsuLi5wcm9wc30gLz5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0geGw9ezEyfSBsZz17MTJ9IG1kPXsxMn0gc209ezEyfSBjb250YWluZXI+XHJcbiAgICAgICAgPFBhcGVyXHJcbiAgICAgICAgICAvLyBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9XHJcbiAgICAgICAgICBvbkNoYW5nZT17QmFubmVyaGFuZGxlSW1hZ2V9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtCdW5uZXJ9KWAsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgIGhlaWdodDogXCIxOTJweFwiLFxyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI2MHB4XCIsXHJcbiAgICAgICAgICAgIC8vIHdpZHRoOiBcIjEzMjhweFwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHhzPXsxMn1cclxuICAgICAgICAgIHhsPXsxMn1cclxuICAgICAgICAgIGxnPXsxMn1cclxuICAgICAgICAgIG1kPXsxMn1cclxuICAgICAgICAgIHNtPXs2fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxQYXBlclxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGhlaWdodDogXCIxOTJweFwiLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjM4N3B4XCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBcIjAgYXV0b1wiLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke1Byb2ZpbGV9KWAsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIC8vIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn1cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMTNweFwiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMzU4cHhcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogXCIxMHB4IDE1cHhcIixcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjgsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7bWFuYWdlciA/IChcclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwicmFpc2VkLWJ1dHRvbi1maWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJhaXNlZC1idXR0b24tZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwicmFpc2VkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjM2QzMDMwXCIsIGNvbG9yOiBcIndoaXRlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVXBsb2FkIEJhbm5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxEaWFsb2cgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IG1hbmFnZXIgPyBcImFic29sdXRlXCIgOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBtYW5hZ2VyID8gXCI0MHB4XCIgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBtYW5hZ2VyID8gXCIzNXB4XCIgOiBudWxsLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBtYW5hZ2VyID8gbnVsbCA6IFwiMTI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmF5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2Nkbi5ub2hhdC5jYy90aHVtYi9mLzcyMC9jb212ZWN0ZWV6eTU4NTMyOS5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8Q3JlYXRlSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiIzMwNTA4NVwiLCBmb250U2l6ZTogXCIxNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICA8L1BhcGVyPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSB4bD17MTJ9IGxnPXsxMn0gbWQ9ezEyfSBzbT17MTJ9PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImgyXCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgIHtzaG9wbmFtZX1cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgYWxpZ249XCJjZW50ZXJcIj57ZGVzY308L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPFR5cG9ncmFwaHk+XHJcbiAgICAgICAgICB7bWFuYWdlciA/IChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogXCIxMHB4IDBcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPENyZWF0ZUljb24gc3R5bGU9e3sgY29sb3I6IFwiIzMwNTA4NVwiLCBmb250U2l6ZTogXCIxNXB4XCIgfX0gLz5cclxuICAgICAgICAgICAgICA8U2hvcE5hbWVEaWFsb2cgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSB4bD17MTJ9IGxnPXsxMn0gbWQ9ezEyfSBzbT17MTJ9PlxyXG4gICAgICAgIHttYW5hZ2VyID8gKFxyXG4gICAgICAgICAgPFBhcGVyXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjIwMHB4XCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBcIjIwcHggNTBweFwiLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2FkZFByb2R1Y3RzfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeT5BZGQgUHJvZHVjdHM8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9