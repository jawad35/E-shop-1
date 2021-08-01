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
          onChange: ProfilehandleImage,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcHNldHVwLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4R3JvdyIsInBhcGVyIiwicGFkZGluZyIsInNwYWNpbmciLCJ0ZXh0QWxpZ24iLCJjb2xvciIsInBhbGV0dGUiLCJ0ZXh0Iiwic2Vjb25kYXJ5Iiwic2hvcHNldHVwIiwicHJvcHMiLCJ1c2VTdGF0ZSIsIkJ1bm5lciIsInNldEJ1bm5lciIsIlByb2ZpbGUiLCJzZXRQcm9maWxlIiwic2hvcG5hbWUiLCJzZXRTaG9wTmFtZSIsImRlc2MiLCJzZXREZXNjIiwibWFuYWdlciIsInNldE1hbmFnZXIiLCJ1c2VyIiwic2V0VXNlciIsImVycm9yIiwic2V0RXJyb3IiLCJCYW5uZXJoYW5kbGVJbWFnZSIsImUiLCJzZWxlY3RlZCIsInRhcmdldCIsImZpbGVzIiwiQWxsb3dUeXBlcyIsImluY2x1ZGVzIiwidHlwZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWRlbmQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwiUHJvZmlsZWhhbmRsZUltYWdlIiwiYWRkUHJvZHVjdHMiLCJhbGVydCIsImNsYXNzZXMiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRSZXBlYXQiLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbiIsInBvc2l0aW9uIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImJhY2tncm91bmRDb2xvciIsIm9wYWNpdHkiLCJpbnB1dCIsImJ1dHRvbiIsImJvcmRlclJhZGl1cyIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJib3JkZXIiLCJmb250U2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0dBbEx1Qi9CLFM7VUF5Q05iLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2hvcHNldHVwLjkzMTg5MjRhZWMyMzYwNWFmMDM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vc3JjL3Jlc3VzYWJsZS9oZWFkZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vc3JjL3Jlc3VzYWJsZS9mb290ZXJcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IHsgR3JpZCwgVHlwb2dyYXBoeSwgdXNlVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmtcIjtcclxuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IENyZWF0ZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DcmVhdGVcIjtcclxuaW1wb3J0IERpYWxvZyBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvc2hvcHNldHVwL0RpYWxvZ1wiO1xyXG5pbXBvcnQgU2hvcE5hbWVEaWFsb2cgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL3Nob3BzZXR1cC9TaG9wTmFtZURpYWxvZ1wiO1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICB9LFxyXG4gIHBhcGVyOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hvcHNldHVwKHByb3BzKSB7XHJcbiAgY29uc3QgW0J1bm5lciwgc2V0QnVubmVyXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtQcm9maWxlLCBzZXRQcm9maWxlXSA9IHVzZVN0YXRlKFxyXG4gICAgXCJodHRwczovL3d3dy53aGF0c2FwcHByb2ZpbGVkcGltYWdlcy5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDcvV2hhdHNhcHAtRFAtSW1hZ2VzLTQtMzAweDI3OS5naWZcIlxyXG4gICk7XHJcbiAgY29uc3QgW3Nob3BuYW1lLCBzZXRTaG9wTmFtZV0gPSB1c2VTdGF0ZShcIlNob3AgTmFtZSBoZXJlXCIpO1xyXG4gIGNvbnN0IFtkZXNjLCBzZXREZXNjXSA9IHVzZVN0YXRlKFwidXNlciB5b3VyIGRlc2NyaXB0aW9uIGhlcmVcIik7XHJcbiAgY29uc3QgW21hbmFnZXIsIHNldE1hbmFnZXJdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIC8vIGNvbnN0IFtwcm9maWxlaW1nLCBzZXRQcm9maWxlSW1nXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IEJhbm5lcmhhbmRsZUltYWdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBjb25zdCBBbGxvd1R5cGVzID0gW1wiaW1hZ2UvcG5nXCIsIFwiaW1hZ2UvanBlZ1wiLCBcImltYWdlL2pwZ1wiXTtcclxuICAgIGlmIChzZWxlY3RlZCAmJiBBbGxvd1R5cGVzLmluY2x1ZGVzKHNlbGVjdGVkLnR5cGUpKSB7XHJcbiAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEJ1bm5lcihyZWFkZXIucmVzdWx0KTtcclxuICAgICAgfTtcclxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoc2VsZWN0ZWQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0RXJyb3IoXCJGaWxlIG5vdCBTdXBwb3J0ZWRcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBQcm9maWxlaGFuZGxlSW1hZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgIGNvbnN0IEFsbG93VHlwZXMgPSBbXCJpbWFnZS9wbmdcIiwgXCJpbWFnZS9qcGVnXCIsIFwiaW1hZ2UvanBnXCJdO1xyXG4gICAgaWYgKHNlbGVjdGVkICYmIEFsbG93VHlwZXMuaW5jbHVkZXMoc2VsZWN0ZWQudHlwZSkpIHtcclxuICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0UHJvZmlsZShyZWFkZXIucmVzdWx0KTtcclxuICAgICAgfTtcclxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoc2VsZWN0ZWQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0RXJyb3IoXCJGaWxlIG5vdCBTdXBwb3J0ZWRcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBhZGRQcm9kdWN0cyA9ICgpID0+IHtcclxuICAgIGFsZXJ0KFwiUHJvZHVjdCBoYXMgYmVlbiBhZGRlZFwiKTtcclxuICB9O1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj1cImNvbHVtblwiPlxyXG4gICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgIDxIZWFkZXIgey4uLnByb3BzfSAvPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSB4bD17MTJ9IGxnPXsxMn0gbWQ9ezEyfSBzbT17MTJ9IGNvbnRhaW5lcj5cclxuICAgICAgICA8UGFwZXJcclxuICAgICAgICAgIC8vIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtCYW5uZXJoYW5kbGVJbWFnZX1cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke0J1bm5lcn0pYCxcclxuICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgaGVpZ2h0OiBcIjE5MnB4XCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjYwcHhcIixcclxuICAgICAgICAgICAgLy8gd2lkdGg6IFwiMTMyOHB4XCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgeGw9ezEyfVxyXG4gICAgICAgICAgbGc9ezEyfVxyXG4gICAgICAgICAgbWQ9ezEyfVxyXG4gICAgICAgICAgc209ezZ9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFBhcGVyXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtQcm9maWxlaGFuZGxlSW1hZ2V9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE5MnB4XCIsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMzg3cHhcIixcclxuICAgICAgICAgICAgICBtYXJnaW46IFwiMCBhdXRvXCIsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7UHJvZmlsZX0pYCxcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bWFuYWdlciA/IChcclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAvLyBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTEzcHhcIixcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMzU4cHhcIixcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjEwcHggMTVweFwiLFxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjgsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwicmFpc2VkLWJ1dHRvbi1maWxlXCJcclxuICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyYWlzZWQtYnV0dG9uLWZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwicmFpc2VkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjM2QzMDMwXCIsIGNvbG9yOiBcIndoaXRlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBVcGxvYWQgQmFubmVyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaWFsb2cgLz5cclxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMzVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGdyYXlcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vY2RuLm5vaGF0LmNjL3RodW1iL2YvNzIwL2NvbXZlY3RlZXp5NTg1MzI5LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgIDwvUGFwZXI+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHhsPXsxMn0gbGc9ezEyfSBtZD17MTJ9IHNtPXsxMn0+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiaDJcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAge3Nob3BuYW1lfVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8VHlwb2dyYXBoeSBhbGlnbj1cImNlbnRlclwiPntkZXNjfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8VHlwb2dyYXBoeT5cclxuICAgICAgICAgIHttYW5hZ2VyID8gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIjEwcHggMFwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8Q3JlYXRlSWNvbiBzdHlsZT17eyBjb2xvcjogXCIjMzA1MDg1XCIsIGZvbnRTaXplOiBcIjE1cHhcIiB9fSAvPlxyXG4gICAgICAgICAgICAgIDxTaG9wTmFtZURpYWxvZyAvPntcIiBcIn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHhsPXsxMn0gbGc9ezEyfSBtZD17MTJ9IHNtPXsxMn0+XHJcbiAgICAgICAge21hbmFnZXIgPyAoXHJcbiAgICAgICAgICA8UGFwZXJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjAwcHhcIixcclxuICAgICAgICAgICAgICBtYXJnaW46IFwiMjBweCA1MHB4XCIsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGdyZXlcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25DbGljaz17YWRkUHJvZHVjdHN9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5PkFkZCBQcm9kdWN0czwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvR3JpZD5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=