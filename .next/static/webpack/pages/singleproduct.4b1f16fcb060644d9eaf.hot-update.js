self["webpackHotUpdate_N_E"]("pages/singleproduct",{

/***/ "./node_modules/@material-ui/icons/Remove.js":
/*!***************************************************!*\
  !*** ./node_modules/@material-ui/icons/Remove.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M19 13H5v-2h14v2z"
}), 'Remove');

exports.default = _default;

/***/ }),

/***/ "./pages/singleproduct.js":
/*!********************************!*\
  !*** ./pages/singleproduct.js ***!
  \********************************/
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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _src_components_singleproduct_ImageCarousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/singleproduct/ImageCarousel */ "./src/components/singleproduct/ImageCarousel.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Remove */ "./node_modules/@material-ui/icons/Remove.js");
/* harmony import */ var _material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/NavigateNext */ "./node_modules/@material-ui/icons/NavigateNext.js");
/* harmony import */ var _material_ui_core_Breadcrumbs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Breadcrumbs */ "./node_modules/@material-ui/core/esm/Breadcrumbs/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var _material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/lab/Rating */ "./node_modules/@material-ui/lab/esm/Rating/index.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _src_components_singleproduct_CommentSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/singleproduct/CommentSection */ "./src/components/singleproduct/CommentSection.js");
/* harmony import */ var _material_ui_icons_DateRange__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/DateRange */ "./node_modules/@material-ui/icons/DateRange.js");
/* harmony import */ var _material_ui_icons_SwapHoriz__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/SwapHoriz */ "./node_modules/@material-ui/icons/SwapHoriz.js");
/* harmony import */ var _material_ui_icons_InsertDriveFile__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/InsertDriveFile */ "./node_modules/@material-ui/icons/InsertDriveFile.js");
/* harmony import */ var _material_ui_icons_DeviceHub__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/icons/DeviceHub */ "./node_modules/@material-ui/icons/DeviceHub.js");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/Chip */ "./node_modules/@material-ui/core/esm/Chip/index.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.mjs");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Radio */ "./node_modules/@material-ui/core/esm/Radio/index.js");
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/RadioGroup */ "./node_modules/@material-ui/core/esm/RadioGroup/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\client work\\pages\\singleproduct.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_client_work_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }














 // icons







 // Radio button






function shopsetup(props) {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
      images = _useState[0],
      setImages = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(3),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
      count = _useState3[0],
      setCounter = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("Commercial"),
      com = _useState4[0],
      setCom = _useState4[1];

  var handleChange = function handleChange(event) {
    setCom(event.target.value);
  };

  var handleAdd = function handleAdd() {
    setCounter(count + 1);
  };

  var handleSub = function handleSub() {
    setCounter(count - 1);
  };

  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  var sample = {
    title: "new bundle 38 in 1 -9000 graphics",
    productCategory: "Graphics",
    shop: {
      id: "1",
      shopName: "Graphics guro",
      shopDescription: "Some best selling things"
    },
    videoUrl: "",
    //if there is video url show video instead of images
    images: ["anyimage..png", "anyimage.png"],
    description: "",
    details: "<div >hi,<h1 >hello</h1><div>",
    file: "",
    fileSize: "591KB",
    personalLicence: "49",
    commercialLicence: "59",
    extendedCommercialLicence: "69",
    date: Date.now(),
    compatibleWith: ["Adobe PhotoShop", "Illustrator", "After effect", "Adobe XD"],
    layered: false,
    //if true display it in product specs
    tileable: false,
    //if true display it in product specs
    vector: true,
    //if true display it in product specs
    tags: ["Bundle", "Whole Shop", "Gradient"],
    reviews: [{
      name: "Jem Thamos",
      profile: "https://1.bp.blogspot.com/-2rmt55p4Jgc/XmSUgHGmaaI/AAAAAAAAPRw/rF-e1cRuLEI7AnWw-gMsMsEc1irlJuhWwCLcBGAsYHQ/s1600/Lovely%2BDP%2BFor%2BWhatsapp%2BProfile%2B%2B%252823%2529.jpg",
      //if there is no photo use any sample user photo
      message: "Perfect",
      rating: 4,
      date: new Date() //should be in format 1 min ago

    }, {
      name: "Jem Thamos",
      profile: "https://1.bp.blogspot.com/-2rmt55p4Jgc/XmSUgHGmaaI/AAAAAAAAPRw/rF-e1cRuLEI7AnWw-gMsMsEc1irlJuhWwCLcBGAsYHQ/s1600/Lovely%2BDP%2BFor%2BWhatsapp%2BProfile%2B%2B%252823%2529.jpg",
      //if there is no photo use any sample user photo
      message: "Perfect",
      rating: 3,
      date: new Date() //should be in format 1 min ago

    }]
  }; // const returnAggregate = () => {
  //   sample.reviews.reduce((review, total) => {
  //     return total.rating + review.rating;
  //   }) / sample.reviews.length;
  // };
  // useEffect(() => {
  //   console.log(returnAggregate());
  // });

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {
    container: true,
    direction: "column",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {
      item: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_resusable_header__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread({}, props), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Container, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {
        container: true,
        item: true,
        style: {
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "10px",
          paddingBottom: "10px"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Breadcrumbs__WEBPACK_IMPORTED_MODULE_9__.default, {
          separator: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_10__.default, {
            fontSize: "small"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 24
          }, this),
          "aria-label": "breadcrumb",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_11__.default, {
            color: "inherit",
            href: "/",
            onClick: handleClick,
            children: sample.productCategory
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_11__.default, {
            color: "inherit",
            href: "/getting-started/installation/",
            onClick: handleClick,
            children: "PhotoShop"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {
          children: "Starting At $67"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {
        item: true,
        container: true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {
          item: true,
          xs: 12,
          sm: 12,
          md: 12,
          lg: 8,
          xl: 8,
          style: {
            padding: "0 20px"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_components_singleproduct_ImageCarousel__WEBPACK_IMPORTED_MODULE_5__.default, {
            images: images
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {
          item: true,
          xs: 12,
          sm: 6,
          md: 5,
          xl: 4,
          lg: 4,
          style: {
            margin: "0px auto"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Paper, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__.default, {
              p: 2,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                style: {
                  fontWeight: "600"
                },
                children: sample.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 176,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__.default, {
              component: "fieldset",
              borderColor: "transparent",
              display: "flex",
              alignItems: "center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_13__.default, {
                style: {
                  fontSize: "16px"
                },
                name: "read-only",
                value: value,
                readOnly: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 187,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__.default, {
                style: {
                  color: "#32a889"
                },
                pl: 2,
                children: [Object.keys(sample.reviews).length, " Review"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 193,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__.default, {
              display: "flex",
              mx: 2,
              children: ["By", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__.default, {
                style: {
                  color: "#32a889"
                },
                pl: 2,
                children: "Sami Karachi"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 199,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 197,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__.default, {
              px: 2,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Divider, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 204,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__.default, {
              display: "flex",
              justifyContent: "space-between",
              px: 2,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__.default, {
                display: "flex",
                justifyContent: "space-between",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                  variant: "h6",
                  children: "License Type"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 208,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                  variant: "h6",
                  style: {
                    color: "#32a889",
                    marginLeft: "5px"
                  },
                  children: "what"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 209,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 207,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__.default, {
                style: {
                  display: "flex",
                  alignItems: "center"
                },
                children: [count !== 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_14__.default, {
                  onClick: handleSub,
                  style: {
                    color: "#32a889"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 218,
                  columnNumber: 21
                }, this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                  variant: "h6",
                  children: [count, " seat"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 223,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_15__.default, {
                  onClick: handleAdd,
                  style: {
                    color: "#32a889"
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 224,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 216,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__.default, {
              mx: 2,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_16__.default, {
                component: "fieldset",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_17__.default, {
                  "aria-label": "gender",
                  name: "gender1",
                  value: com,
                  onChange: handleChange,
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__.default, {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_18__.default, {
                      value: "Commercial",
                      control: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_19__.default, {
                        style: {
                          color: "#32a889"
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 242,
                        columnNumber: 34
                      }, this),
                      label: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                        style: {
                          fontSize: "16px",
                          fontWeight: "600",
                          display: "flex"
                        },
                        children: "Commercial"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 244,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 240,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__.default, {
                      style: {
                        fontWeight: "600"
                      },
                      children: ["$", sample.commercialLicence]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 255,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 235,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__.default, {
                    display: "flex",
                    alignItems: "center",
                    alignContent: "center",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_18__.default, {
                      value: "Extended Commercial",
                      control: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_19__.default, {
                        style: {
                          color: "#32a889"
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 266,
                        columnNumber: 34
                      }, this),
                      label: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                        style: {
                          fontSize: "16px",
                          fontWeight: "600",
                          display: "flex"
                        },
                        children: "Extended Commercial"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 268,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 264,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__.default, {
                      style: {
                        fontWeight: "600"
                      },
                      children: ["$", sample.extendedCommercialLicence]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 279,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 259,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 229,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 228,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 227,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__.default, {
              px: 2,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Divider, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 287,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 286,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__.default, {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              m: 2,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__.default, {
                display: "flex",
                justifyContent: "center",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__.default, {
                  children: "Personal Project?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 296,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__.default, {
                  variant: "subtitle1",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                    style: {
                      color: "#32a889"
                    },
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_11__.default, {
                      href: "/",
                      children: "Get a Personal License"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 299,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 298,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 297,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 295,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__.default, {
                children: ["$", sample.personalLicence]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 303,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 289,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__.default, {
              m: 2,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__.default, {
                my: 1,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Button, {
                  style: {
                    backgroundColor: "#32a889",
                    color: "white"
                  },
                  fullWidth: true,
                  variant: "contained",
                  children: "Add to Cart"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 307,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 306,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__.default, {
                my: 3,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Button, {
                  fullWidth: true,
                  style: {
                    border: "2px solid #32a889",
                    backgroundColor: "white",
                    marginBottom: "20px",
                    color: "#32a889"
                  },
                  variant: "contained",
                  children: "Buy Now"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 316,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 315,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 305,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {
        container: true,
        direction: "row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {
          item: true,
          xl: 8,
          lg: 8,
          md: 8,
          sm: 12,
          xs: 12,
          justifyContent: "center",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__.default, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {
              style: {
                fontWeight: "600"
              },
              children: "About the Product"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 344,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              children: ["All my new collections related to other the bundle", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_11__.default, {
                href: "/",
                children: "this is a link"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 349,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 347,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__.default, {
              mr: 2,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Divider, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 352,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 351,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_7__.default)(sample.details)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 355,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 343,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 334,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {
          spacing: 4,
          item: true,
          xl: 4,
          lg: 4,
          md: 4,
          sm: 12,
          xs: 12,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__.default, {
            mx: 2,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__.default, {
              mb: 2,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                style: {
                  fontWeight: "600"
                },
                children: "Product Specs"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 362,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 361,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__.default, {
              display: "flex",
              alignItems: "center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_icons_DateRange__WEBPACK_IMPORTED_MODULE_20__.default, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 367,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__.default, {
                ml: 2,
                width: "70%",
                children: sample.date
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 368,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 366,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__.default, {
              display: "flex",
              alignItems: "center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_icons_SwapHoriz__WEBPACK_IMPORTED_MODULE_21__.default, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 373,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__.default, {
                ml: 2,
                width: "70%",
                children: "text here"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 374,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 372,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__.default, {
              display: "flex",
              alignItems: "center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_icons_InsertDriveFile__WEBPACK_IMPORTED_MODULE_22__.default, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 379,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__.default, {
                ml: 2,
                width: "70%",
                children: ["File Size ", sample.fileSize]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 380,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 378,
              columnNumber: 15
            }, this), sample.vector ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__.default, {
              display: "flex",
              alignItems: "center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_icons_DeviceHub__WEBPACK_IMPORTED_MODULE_23__.default, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 386,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__.default, {
                ml: 2,
                width: "70%",
                children: "Vector"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 387,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 385,
              columnNumber: 17
            }, this) : null]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 360,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 359,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {
          container: true,
          item: true,
          lg: 4,
          xl: 4,
          sm: 12,
          md: 4,
          xs: 12,
          style: {
            marginTop: "50px"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {
            variant: "subtitle1",
            style: {
              marginBottom: "10px"
            },
            children: "Meet The Shop"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 404,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Paper, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__.default, {
              justifyContent: "center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                style: {
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px"
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                  src: "https://1.bp.blogspot.com/-2rmt55p4Jgc/XmSUgHGmaaI/AAAAAAAAPRw/rF-e1cRuLEI7AnWw-gMsMsEc1irlJuhWwCLcBGAsYHQ/s1600/Lovely%2BDP%2BFor%2BWhatsapp%2BProfile%2B%2B%252823%2529.jpg",
                  alt: "profile",
                  width: "60px",
                  height: "60px"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 416,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 409,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
                style: {
                  textAlign: "center"
                },
                children: "Text hello"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 423,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                style: {
                  textAlign: "center"
                },
                children: "Moment.js is a legacy project, now in maintenance mode. In most cases, you should choose a different library."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 424,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                style: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "50px"
                },
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Button, {
                  variant: "contained",
                  style: {
                    backgroundColor: "#32a889",
                    fontSize: "15px",
                    marginRight: "5px",
                    color: "white"
                  },
                  children: "+ Follow"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 436,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Button, {
                  variant: "contained",
                  style: {
                    border: "1px solid #32a889",
                    fontSize: "15px",
                    backgroundColor: "white",
                    color: "#32a889"
                  },
                  children: "Message"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 447,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 428,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 408,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 407,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 394,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {
          item: true,
          xl: 12,
          lg: 12,
          md: 12,
          sm: 12,
          xs: 12,
          style: {
            marginTop: "100px"
          },
          children: sample.reviews.map(function (review) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_components_singleproduct_CommentSection__WEBPACK_IMPORTED_MODULE_6__.default, {
              image: review.profile,
              name: review.name,
              rating: review.rating,
              message: review.message,
              date: review.date
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 472,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 462,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {
          container: true,
          item: true,
          style: {
            display: "block",
            margin: "100px 0px"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {
            style: {
              fontWeight: "600"
            },
            children: "Keep Exploring"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 487,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_12__.default, {
            my: 2,
            children: sample.tags.map(function (tag) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_24__.default, {
                  style: {
                    backgroundColor: "#cce0ff",
                    border: "none",
                    margin: "5px 2px"
                  },
                  label: tag,
                  variant: "outlined"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 493,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 492,
                columnNumber: 17
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 490,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 482,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 333,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {
      item: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_resusable_footer__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 509,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 508,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 119,
    columnNumber: 5
  }, this);
}

_s(shopsetup, "OOd5V7CqZ/UfpGAdVAlDvcaNo9s=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9pY29ucy9SZW1vdmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NpbmdsZXByb2R1Y3QuanMiXSwibmFtZXMiOlsic2hvcHNldHVwIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImltYWdlcyIsInNldEltYWdlcyIsInZhbHVlIiwic2V0VmFsdWUiLCJjb3VudCIsInNldENvdW50ZXIiLCJjb20iLCJzZXRDb20iLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsImhhbmRsZUFkZCIsImhhbmRsZVN1YiIsImhhbmRsZUNsaWNrIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwiaW5mbyIsInNhbXBsZSIsInRpdGxlIiwicHJvZHVjdENhdGVnb3J5Iiwic2hvcCIsImlkIiwic2hvcE5hbWUiLCJzaG9wRGVzY3JpcHRpb24iLCJ2aWRlb1VybCIsImRlc2NyaXB0aW9uIiwiZGV0YWlscyIsImZpbGUiLCJmaWxlU2l6ZSIsInBlcnNvbmFsTGljZW5jZSIsImNvbW1lcmNpYWxMaWNlbmNlIiwiZXh0ZW5kZWRDb21tZXJjaWFsTGljZW5jZSIsImRhdGUiLCJEYXRlIiwibm93IiwiY29tcGF0aWJsZVdpdGgiLCJsYXllcmVkIiwidGlsZWFibGUiLCJ2ZWN0b3IiLCJ0YWdzIiwicmV2aWV3cyIsIm5hbWUiLCJwcm9maWxlIiwibWVzc2FnZSIsInJhdGluZyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZyIsIm1hcmdpbiIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImNvbG9yIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsIm1hcmdpbkxlZnQiLCJhbGlnbkl0ZW1zIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyIiwibWFyZ2luQm90dG9tIiwiaHRtbF9QYXJzZXIiLCJtYXJnaW5Ub3AiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5SaWdodCIsIm1hcCIsInJldmlldyIsInRhZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWE7O0FBRWIsNkJBQTZCLG1CQUFPLENBQUMsb0hBQThDOztBQUVuRiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixlQUFlOztBQUVmLG9DQUFvQyxtQkFBTyxDQUFDLDRDQUFPOztBQUVuRCw0Q0FBNEMsbUJBQU8sQ0FBQyx1RkFBdUI7O0FBRTNFO0FBQ0E7QUFDQSxDQUFDOztBQUVELGVBQWUsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQmY7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS2UsU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDWEMsK0NBQVEsQ0FBQyxFQUFELENBREc7QUFBQSxNQUNoQ0MsTUFEZ0M7QUFBQSxNQUN4QkMsU0FEd0I7O0FBQUEsbUJBRWJGLCtDQUFRLENBQUMsQ0FBRCxDQUZLO0FBQUEsTUFFaENHLEtBRmdDO0FBQUEsTUFFekJDLFFBRnlCOztBQUFBLG1CQUdYSiwrQ0FBUSxDQUFDLENBQUQsQ0FIRztBQUFBLE1BR2hDSyxLQUhnQztBQUFBLE1BR3pCQyxVQUh5Qjs7QUFBQSxtQkFJakJOLCtDQUFRLENBQUMsWUFBRCxDQUpTO0FBQUEsTUFJaENPLEdBSmdDO0FBQUEsTUFJM0JDLE1BSjJCOztBQU12QyxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFDOUJGLFVBQU0sQ0FBQ0UsS0FBSyxDQUFDQyxNQUFOLENBQWFSLEtBQWQsQ0FBTjtBQUNELEdBRkQ7O0FBR0EsTUFBTVMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0Qk4sY0FBVSxDQUFDRCxLQUFLLEdBQUcsQ0FBVCxDQUFWO0FBQ0QsR0FGRDs7QUFHQSxNQUFNUSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCUCxjQUFVLENBQUNELEtBQUssR0FBRyxDQUFULENBQVY7QUFDRCxHQUZEOztBQUlBLFdBQVNTLFdBQVQsQ0FBcUJKLEtBQXJCLEVBQTRCO0FBQzFCQSxTQUFLLENBQUNLLGNBQU47QUFDQUMsV0FBTyxDQUFDQyxJQUFSLENBQWEsMkJBQWI7QUFDRDs7QUFFRCxNQUFNQyxNQUFNLEdBQUc7QUFDYkMsU0FBSyxFQUFFLG1DQURNO0FBRWJDLG1CQUFlLEVBQUUsVUFGSjtBQUdiQyxRQUFJLEVBQUU7QUFDSkMsUUFBRSxFQUFFLEdBREE7QUFFSkMsY0FBUSxFQUFFLGVBRk47QUFHSkMscUJBQWUsRUFBRTtBQUhiLEtBSE87QUFRYkMsWUFBUSxFQUFFLEVBUkc7QUFRQztBQUNkeEIsVUFBTSxFQUFFLENBQUMsZUFBRCxFQUFrQixjQUFsQixDQVRLO0FBVWJ5QixlQUFXLEVBQUUsRUFWQTtBQVdiQyxXQUFPLEVBQUUsK0JBWEk7QUFZYkMsUUFBSSxFQUFFLEVBWk87QUFhYkMsWUFBUSxFQUFFLE9BYkc7QUFjYkMsbUJBQWUsRUFBRSxJQWRKO0FBZWJDLHFCQUFpQixFQUFFLElBZk47QUFnQmJDLDZCQUF5QixFQUFFLElBaEJkO0FBaUJiQyxRQUFJLEVBQUVDLElBQUksQ0FBQ0MsR0FBTCxFQWpCTztBQWtCYkMsa0JBQWMsRUFBRSxDQUNkLGlCQURjLEVBRWQsYUFGYyxFQUdkLGNBSGMsRUFJZCxVQUpjLENBbEJIO0FBd0JiQyxXQUFPLEVBQUUsS0F4Qkk7QUF3Qkc7QUFDaEJDLFlBQVEsRUFBRSxLQXpCRztBQXlCSTtBQUNqQkMsVUFBTSxFQUFFLElBMUJLO0FBMEJDO0FBQ2RDLFFBQUksRUFBRSxDQUFDLFFBQUQsRUFBVyxZQUFYLEVBQXlCLFVBQXpCLENBM0JPO0FBNEJiQyxXQUFPLEVBQUUsQ0FDUDtBQUNFQyxVQUFJLEVBQUUsWUFEUjtBQUVFQyxhQUFPLEVBQ0wsK0tBSEo7QUFHcUw7QUFDbkxDLGFBQU8sRUFBRSxTQUpYO0FBS0VDLFlBQU0sRUFBRSxDQUxWO0FBTUVaLFVBQUksRUFBRSxJQUFJQyxJQUFKLEVBTlIsQ0FNb0I7O0FBTnBCLEtBRE8sRUFTUDtBQUNFUSxVQUFJLEVBQUUsWUFEUjtBQUVFQyxhQUFPLEVBQ0wsK0tBSEo7QUFHcUw7QUFDbkxDLGFBQU8sRUFBRSxTQUpYO0FBS0VDLFlBQU0sRUFBRSxDQUxWO0FBTUVaLFVBQUksRUFBRSxJQUFJQyxJQUFKLEVBTlIsQ0FNb0I7O0FBTnBCLEtBVE87QUE1QkksR0FBZixDQXJCdUMsQ0FvRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQ0UsOERBQUMsbURBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsYUFBUyxFQUFDLFFBQTFCO0FBQUEsNEJBQ0UsOERBQUMsbURBQUQ7QUFBTSxVQUFJLE1BQVY7QUFBQSw2QkFDRSw4REFBQywwREFBRCxvQkFBWW5DLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFLDhEQUFDLHdEQUFEO0FBQUEsOEJBQ0UsOERBQUMsbURBQUQ7QUFDRSxpQkFBUyxNQURYO0FBRUUsWUFBSSxNQUZOO0FBR0UsYUFBSyxFQUFFO0FBQ0wrQyxpQkFBTyxFQUFFLE1BREo7QUFFTEMsd0JBQWMsRUFBRSxlQUZYO0FBR0xDLG9CQUFVLEVBQUUsTUFIUDtBQUlMQyx1QkFBYSxFQUFFO0FBSlYsU0FIVDtBQUFBLGdDQVVFLDhEQUFDLGtFQUFEO0FBQ0UsbUJBQVMsZUFBRSw4REFBQyxxRUFBRDtBQUFrQixvQkFBUSxFQUFDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRGI7QUFFRSx3QkFBVyxZQUZiO0FBQUEsa0NBSUUsOERBQUMsNERBQUQ7QUFBTSxpQkFBSyxFQUFDLFNBQVo7QUFBc0IsZ0JBQUksRUFBQyxHQUEzQjtBQUErQixtQkFBTyxFQUFFbkMsV0FBeEM7QUFBQSxzQkFDR0ksTUFBTSxDQUFDRTtBQURWO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkYsZUFPRSw4REFBQyw0REFBRDtBQUNFLGlCQUFLLEVBQUMsU0FEUjtBQUVFLGdCQUFJLEVBQUMsZ0NBRlA7QUFHRSxtQkFBTyxFQUFFTixXQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWRixlQXlCRSw4REFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF6QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUE0QkUsOERBQUMsbURBQUQ7QUFBTSxZQUFJLE1BQVY7QUFBVyxpQkFBUyxNQUFwQjtBQUFBLGdDQUNFLDhEQUFDLG1EQUFEO0FBQ0UsY0FBSSxNQUROO0FBRUUsWUFBRSxFQUFFLEVBRk47QUFHRSxZQUFFLEVBQUUsRUFITjtBQUlFLFlBQUUsRUFBRSxFQUpOO0FBS0UsWUFBRSxFQUFFLENBTE47QUFNRSxZQUFFLEVBQUUsQ0FOTjtBQU9FLGVBQUssRUFBRTtBQUFFb0MsbUJBQU8sRUFBRTtBQUFYLFdBUFQ7QUFBQSxpQ0FTRSw4REFBQyxnRkFBRDtBQUFlLGtCQUFNLEVBQUVqRDtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQVlFLDhEQUFDLG1EQUFEO0FBQ0UsY0FBSSxNQUROO0FBRUUsWUFBRSxFQUFFLEVBRk47QUFHRSxZQUFFLEVBQUUsQ0FITjtBQUlFLFlBQUUsRUFBRSxDQUpOO0FBS0UsWUFBRSxFQUFFLENBTE47QUFNRSxZQUFFLEVBQUUsQ0FOTjtBQU9FLGVBQUssRUFBRTtBQUNMa0Qsa0JBQU0sRUFBRTtBQURILFdBUFQ7QUFBQSxpQ0FXRSw4REFBQyxvREFBRDtBQUFBLG9DQUNFLDhEQUFDLDJEQUFEO0FBQUssZUFBQyxFQUFFLENBQVI7QUFBQSxxQ0FDRSw4REFBQyx5REFBRDtBQUFZLHFCQUFLLEVBQUU7QUFBRUMsNEJBQVUsRUFBRTtBQUFkLGlCQUFuQjtBQUFBLDBCQUNHbEMsTUFBTSxDQUFDQztBQURWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBT0UsOERBQUMsMkRBQUQ7QUFDRSx1QkFBUyxFQUFDLFVBRFo7QUFFRSx5QkFBVyxFQUFDLGFBRmQ7QUFHRSxxQkFBTyxFQUFDLE1BSFY7QUFJRSx3QkFBVSxFQUFDLFFBSmI7QUFBQSxzQ0FNRSw4REFBQyw2REFBRDtBQUNFLHFCQUFLLEVBQUU7QUFBRWtDLDBCQUFRLEVBQUU7QUFBWixpQkFEVDtBQUVFLG9CQUFJLEVBQUMsV0FGUDtBQUdFLHFCQUFLLEVBQUVsRCxLQUhUO0FBSUUsd0JBQVE7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQU5GLGVBWUUsOERBQUMsMkRBQUQ7QUFBSyxxQkFBSyxFQUFFO0FBQUVtRCx1QkFBSyxFQUFFO0FBQVQsaUJBQVo7QUFBa0Msa0JBQUUsRUFBRSxDQUF0QztBQUFBLDJCQUNHQyxNQUFNLENBQUNDLElBQVAsQ0FBWXRDLE1BQU0sQ0FBQ3VCLE9BQW5CLEVBQTRCZ0IsTUFEL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFQRixlQXVCRSw4REFBQywyREFBRDtBQUFLLHFCQUFPLEVBQUMsTUFBYjtBQUFvQixnQkFBRSxFQUFFLENBQXhCO0FBQUEsNENBRUUsOERBQUMsMkRBQUQ7QUFBSyxxQkFBSyxFQUFFO0FBQUVILHVCQUFLLEVBQUU7QUFBVCxpQkFBWjtBQUFrQyxrQkFBRSxFQUFFLENBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkF2QkYsZUE2QkUsOERBQUMsMkRBQUQ7QUFBSyxnQkFBRSxFQUFFLENBQVQ7QUFBQSxxQ0FDRSw4REFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkE3QkYsZUFnQ0UsOERBQUMsMkRBQUQ7QUFBSyxxQkFBTyxFQUFDLE1BQWI7QUFBb0IsNEJBQWMsRUFBQyxlQUFuQztBQUFtRCxnQkFBRSxFQUFFLENBQXZEO0FBQUEsc0NBQ0UsOERBQUMsMkRBQUQ7QUFBSyx1QkFBTyxFQUFDLE1BQWI7QUFBb0IsOEJBQWMsRUFBQyxlQUFuQztBQUFBLHdDQUNFLDhEQUFDLHlEQUFEO0FBQVkseUJBQU8sRUFBQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixlQUVFLDhEQUFDLHlEQUFEO0FBQ0UseUJBQU8sRUFBQyxJQURWO0FBRUUsdUJBQUssRUFBRTtBQUFFQSx5QkFBSyxFQUFFLFNBQVQ7QUFBb0JJLDhCQUFVLEVBQUU7QUFBaEMsbUJBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBVUUsOERBQUMsMkRBQUQ7QUFBSyxxQkFBSyxFQUFFO0FBQUVaLHlCQUFPLEVBQUUsTUFBWDtBQUFtQmEsNEJBQVUsRUFBRTtBQUEvQixpQkFBWjtBQUFBLDJCQUNHdEQsS0FBSyxLQUFLLENBQVYsZ0JBQ0MsOERBQUMsK0RBQUQ7QUFDRSx5QkFBTyxFQUFFUSxTQURYO0FBRUUsdUJBQUssRUFBRTtBQUFFeUMseUJBQUssRUFBRTtBQUFUO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERCxHQUtHLElBTk4sZUFPRSw4REFBQyx5REFBRDtBQUFZLHlCQUFPLEVBQUMsSUFBcEI7QUFBQSw2QkFBMEJqRCxLQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBUEYsZUFRRSw4REFBQyw0REFBRDtBQUFTLHlCQUFPLEVBQUVPLFNBQWxCO0FBQTZCLHVCQUFLLEVBQUU7QUFBRTBDLHlCQUFLLEVBQUU7QUFBVDtBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBaENGLGVBcURFLDhEQUFDLDJEQUFEO0FBQUssZ0JBQUUsRUFBRSxDQUFUO0FBQUEscUNBQ0UsOERBQUMsbUVBQUQ7QUFBYSx5QkFBUyxFQUFDLFVBQXZCO0FBQUEsdUNBQ0UsOERBQUMsa0VBQUQ7QUFDRSxnQ0FBVyxRQURiO0FBRUUsc0JBQUksRUFBQyxTQUZQO0FBR0UsdUJBQUssRUFBRS9DLEdBSFQ7QUFJRSwwQkFBUSxFQUFFRSxZQUpaO0FBQUEsMENBTUUsOERBQUMsMkRBQUQ7QUFDRSwyQkFBTyxFQUFDLE1BRFY7QUFFRSxrQ0FBYyxFQUFDLGVBRmpCO0FBR0UsOEJBQVUsRUFBQyxRQUhiO0FBQUEsNENBS0UsOERBQUMsd0VBQUQ7QUFDRSwyQkFBSyxFQUFDLFlBRFI7QUFFRSw2QkFBTyxlQUFFLDhEQUFDLDZEQUFEO0FBQU8sNkJBQUssRUFBRTtBQUFFNkMsK0JBQUssRUFBRTtBQUFUO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFGWDtBQUdFLDJCQUFLLGVBQ0g7QUFDRSw2QkFBSyxFQUFFO0FBQ0xELGtDQUFRLEVBQUUsTUFETDtBQUVMRCxvQ0FBVSxFQUFFLEtBRlA7QUFHTE4saUNBQU8sRUFBRTtBQUhKLHlCQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFMRixlQW9CRSw4REFBQywyREFBRDtBQUFLLDJCQUFLLEVBQUU7QUFBRU0sa0NBQVUsRUFBRTtBQUFkLHVCQUFaO0FBQUEsc0NBQ0lsQyxNQUFNLENBQUNhLGlCQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQU5GLGVBOEJFLDhEQUFDLDJEQUFEO0FBQ0UsMkJBQU8sRUFBQyxNQURWO0FBRUUsOEJBQVUsRUFBQyxRQUZiO0FBR0UsZ0NBQVksRUFBQyxRQUhmO0FBQUEsNENBS0UsOERBQUMsd0VBQUQ7QUFDRSwyQkFBSyxFQUFDLHFCQURSO0FBRUUsNkJBQU8sZUFBRSw4REFBQyw2REFBRDtBQUFPLDZCQUFLLEVBQUU7QUFBRXVCLCtCQUFLLEVBQUU7QUFBVDtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBRlg7QUFHRSwyQkFBSyxlQUNIO0FBQ0UsNkJBQUssRUFBRTtBQUNMRCxrQ0FBUSxFQUFFLE1BREw7QUFFTEQsb0NBQVUsRUFBRSxLQUZQO0FBR0xOLGlDQUFPLEVBQUU7QUFISix5QkFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBTEYsZUFvQkUsOERBQUMsMkRBQUQ7QUFBSywyQkFBSyxFQUFFO0FBQUVNLGtDQUFVLEVBQUU7QUFBZCx1QkFBWjtBQUFBLHNDQUNJbEMsTUFBTSxDQUFDYyx5QkFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkE5QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBckRGLGVBZ0hFLDhEQUFDLDJEQUFEO0FBQUssZ0JBQUUsRUFBRSxDQUFUO0FBQUEscUNBQ0UsOERBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBaEhGLGVBbUhFLDhEQUFDLDJEQUFEO0FBQ0UscUJBQU8sRUFBQyxNQURWO0FBRUUsNEJBQWMsRUFBQyxlQUZqQjtBQUdFLHdCQUFVLEVBQUMsUUFIYjtBQUlFLGVBQUMsRUFBRSxDQUpMO0FBQUEsc0NBTUUsOERBQUMsMkRBQUQ7QUFBSyx1QkFBTyxFQUFDLE1BQWI7QUFBb0IsOEJBQWMsRUFBQyxRQUFuQztBQUFBLHdDQUNFLDhEQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLGVBRUUsOERBQUMsMkRBQUQ7QUFBSyx5QkFBTyxFQUFDLFdBQWI7QUFBQSx5Q0FDRTtBQUFNLHlCQUFLLEVBQUU7QUFBRXNCLDJCQUFLLEVBQUU7QUFBVCxxQkFBYjtBQUFBLDJDQUNFLDhEQUFDLDREQUFEO0FBQU0sMEJBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQU5GLGVBY0UsOERBQUMsMkRBQUQ7QUFBQSxnQ0FBT3BDLE1BQU0sQ0FBQ1ksZUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQW5IRixlQW1JRSw4REFBQywyREFBRDtBQUFLLGVBQUMsRUFBRSxDQUFSO0FBQUEsc0NBQ0UsOERBQUMsMkRBQUQ7QUFBSyxrQkFBRSxFQUFFLENBQVQ7QUFBQSx1Q0FDRSw4REFBQyxxREFBRDtBQUNFLHVCQUFLLEVBQUU7QUFBRThCLG1DQUFlLEVBQUUsU0FBbkI7QUFBOEJOLHlCQUFLLEVBQUU7QUFBckMsbUJBRFQ7QUFFRSwyQkFBUyxFQUFFLElBRmI7QUFHRSx5QkFBTyxFQUFDLFdBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBVUUsOERBQUMsMkRBQUQ7QUFBSyxrQkFBRSxFQUFFLENBQVQ7QUFBQSx1Q0FDRSw4REFBQyxxREFBRDtBQUNFLDJCQUFTLEVBQUUsSUFEYjtBQUVFLHVCQUFLLEVBQUU7QUFDTE8sMEJBQU0sRUFBRSxtQkFESDtBQUVMRCxtQ0FBZSxFQUFFLE9BRlo7QUFHTEUsZ0NBQVksRUFBRSxNQUhUO0FBSUxSLHlCQUFLLEVBQUU7QUFKRixtQkFGVDtBQVFFLHlCQUFPLEVBQUMsV0FSVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQW5JRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTVCRixlQWtORSw4REFBQyxtREFBRDtBQUFNLGlCQUFTLE1BQWY7QUFBZ0IsaUJBQVMsRUFBQyxLQUExQjtBQUFBLGdDQUNFLDhEQUFDLG1EQUFEO0FBQ0UsY0FBSSxNQUROO0FBRUUsWUFBRSxFQUFFLENBRk47QUFHRSxZQUFFLEVBQUUsQ0FITjtBQUlFLFlBQUUsRUFBRSxDQUpOO0FBS0UsWUFBRSxFQUFFLEVBTE47QUFNRSxZQUFFLEVBQUUsRUFOTjtBQU9FLHdCQUFjLEVBQUMsUUFQakI7QUFBQSxpQ0FTRSw4REFBQywyREFBRDtBQUFBLG9DQUNFLDhEQUFDLHlEQUFEO0FBQVksbUJBQUssRUFBRTtBQUFFRiwwQkFBVSxFQUFFO0FBQWQsZUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFJRTtBQUFBLCtFQUNxRCxHQURyRCxlQUVFLDhEQUFDLDREQUFEO0FBQU0sb0JBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKRixlQVFFLDhEQUFDLDJEQUFEO0FBQUssZ0JBQUUsRUFBRSxDQUFUO0FBQUEscUNBQ0UsOERBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUkYsZUFZRTtBQUFBLHdCQUFJVywwREFBVyxDQUFDN0MsTUFBTSxDQUFDUyxPQUFSO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBMEJFLDhEQUFDLG1EQUFEO0FBQU0saUJBQU8sRUFBRSxDQUFmO0FBQWtCLGNBQUksTUFBdEI7QUFBdUIsWUFBRSxFQUFFLENBQTNCO0FBQThCLFlBQUUsRUFBRSxDQUFsQztBQUFxQyxZQUFFLEVBQUUsQ0FBekM7QUFBNEMsWUFBRSxFQUFFLEVBQWhEO0FBQW9ELFlBQUUsRUFBRSxFQUF4RDtBQUFBLGlDQUNFLDhEQUFDLDJEQUFEO0FBQUssY0FBRSxFQUFFLENBQVQ7QUFBQSxvQ0FDRSw4REFBQywyREFBRDtBQUFLLGdCQUFFLEVBQUUsQ0FBVDtBQUFBLHFDQUNFLDhEQUFDLHlEQUFEO0FBQVkscUJBQUssRUFBRTtBQUFFeUIsNEJBQVUsRUFBRTtBQUFkLGlCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFNRSw4REFBQywyREFBRDtBQUFLLHFCQUFPLEVBQUMsTUFBYjtBQUFvQix3QkFBVSxFQUFDLFFBQS9CO0FBQUEsc0NBQ0UsOERBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQUVFLDhEQUFDLDJEQUFEO0FBQUssa0JBQUUsRUFBRSxDQUFUO0FBQVkscUJBQUssRUFBQyxLQUFsQjtBQUFBLDBCQUNHbEMsTUFBTSxDQUFDZTtBQURWO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQU5GLGVBWUUsOERBQUMsMkRBQUQ7QUFBSyxxQkFBTyxFQUFDLE1BQWI7QUFBb0Isd0JBQVUsRUFBQyxRQUEvQjtBQUFBLHNDQUNFLDhEQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFFRSw4REFBQywyREFBRDtBQUFLLGtCQUFFLEVBQUUsQ0FBVDtBQUFZLHFCQUFLLEVBQUMsS0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVpGLGVBa0JFLDhEQUFDLDJEQUFEO0FBQUsscUJBQU8sRUFBQyxNQUFiO0FBQW9CLHdCQUFVLEVBQUMsUUFBL0I7QUFBQSxzQ0FDRSw4REFBQyx3RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBRUUsOERBQUMsMkRBQUQ7QUFBSyxrQkFBRSxFQUFFLENBQVQ7QUFBWSxxQkFBSyxFQUFDLEtBQWxCO0FBQUEseUNBQ2FmLE1BQU0sQ0FBQ1csUUFEcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFsQkYsRUF3QkdYLE1BQU0sQ0FBQ3FCLE1BQVAsZ0JBQ0MsOERBQUMsMkRBQUQ7QUFBSyxxQkFBTyxFQUFDLE1BQWI7QUFBb0Isd0JBQVUsRUFBQyxRQUEvQjtBQUFBLHNDQUNFLDhEQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFFRSw4REFBQywyREFBRDtBQUFLLGtCQUFFLEVBQUUsQ0FBVDtBQUFZLHFCQUFLLEVBQUMsS0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURELEdBT0csSUEvQk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkExQkYsZUE2REUsOERBQUMsbURBQUQ7QUFDRSxtQkFBUyxNQURYO0FBRUUsY0FBSSxNQUZOO0FBR0UsWUFBRSxFQUFFLENBSE47QUFJRSxZQUFFLEVBQUUsQ0FKTjtBQUtFLFlBQUUsRUFBRSxFQUxOO0FBTUUsWUFBRSxFQUFFLENBTk47QUFPRSxZQUFFLEVBQUUsRUFQTjtBQVFFLGVBQUssRUFBRTtBQUFFeUIscUJBQVMsRUFBRTtBQUFiLFdBUlQ7QUFBQSxrQ0FVRSw4REFBQyx5REFBRDtBQUFZLG1CQUFPLEVBQUMsV0FBcEI7QUFBZ0MsaUJBQUssRUFBRTtBQUFFRiwwQkFBWSxFQUFFO0FBQWhCLGFBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVZGLGVBYUUsOERBQUMsb0RBQUQ7QUFBQSxtQ0FDRSw4REFBQywyREFBRDtBQUFLLDRCQUFjLEVBQUMsUUFBcEI7QUFBQSxzQ0FDRTtBQUNFLHFCQUFLLEVBQUU7QUFDTGhCLHlCQUFPLEVBQUUsTUFESjtBQUVMQyxnQ0FBYyxFQUFFLFFBRlg7QUFHTGlCLDJCQUFTLEVBQUU7QUFITixpQkFEVDtBQUFBLHVDQU9FO0FBQ0UscUJBQUcsRUFBQywrS0FETjtBQUVFLHFCQUFHLEVBQUMsU0FGTjtBQUdFLHVCQUFLLEVBQUMsTUFIUjtBQUlFLHdCQUFNLEVBQUM7QUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQWVFO0FBQUkscUJBQUssRUFBRTtBQUFFQywyQkFBUyxFQUFFO0FBQWIsaUJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBZkYsZUFnQkU7QUFBRyxxQkFBSyxFQUFFO0FBQUVBLDJCQUFTLEVBQUU7QUFBYixpQkFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFoQkYsZUFvQkU7QUFDRSxxQkFBSyxFQUFFO0FBQ0xuQix5QkFBTyxFQUFFLE1BREo7QUFFTEMsZ0NBQWMsRUFBRSxRQUZYO0FBR0xZLDRCQUFVLEVBQUUsUUFIUDtBQUlMUix3QkFBTSxFQUFFO0FBSkgsaUJBRFQ7QUFBQSx3Q0FRRSw4REFBQyxxREFBRDtBQUNFLHlCQUFPLEVBQUMsV0FEVjtBQUVFLHVCQUFLLEVBQUU7QUFDTFMsbUNBQWUsRUFBRSxTQURaO0FBRUxQLDRCQUFRLEVBQUUsTUFGTDtBQUdMYSwrQkFBVyxFQUFFLEtBSFI7QUFJTFoseUJBQUssRUFBRTtBQUpGLG1CQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQVJGLGVBbUJFLDhEQUFDLHFEQUFEO0FBQ0UseUJBQU8sRUFBQyxXQURWO0FBRUUsdUJBQUssRUFBRTtBQUNMTywwQkFBTSxFQUFFLG1CQURIO0FBRUxSLDRCQUFRLEVBQUUsTUFGTDtBQUdMTyxtQ0FBZSxFQUFFLE9BSFo7QUFJTE4seUJBQUssRUFBRTtBQUpGLG1CQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTdERixlQWlJRSw4REFBQyxtREFBRDtBQUNFLGNBQUksTUFETjtBQUVFLFlBQUUsRUFBRSxFQUZOO0FBR0UsWUFBRSxFQUFFLEVBSE47QUFJRSxZQUFFLEVBQUUsRUFKTjtBQUtFLFlBQUUsRUFBRSxFQUxOO0FBTUUsWUFBRSxFQUFFLEVBTk47QUFPRSxlQUFLLEVBQUU7QUFBRVUscUJBQVMsRUFBRTtBQUFiLFdBUFQ7QUFBQSxvQkFTRzlDLE1BQU0sQ0FBQ3VCLE9BQVAsQ0FBZTBCLEdBQWYsQ0FBbUIsVUFBQ0MsTUFBRDtBQUFBLGdDQUNsQiw4REFBQyxpRkFBRDtBQUNFLG1CQUFLLEVBQUVBLE1BQU0sQ0FBQ3pCLE9BRGhCO0FBRUUsa0JBQUksRUFBRXlCLE1BQU0sQ0FBQzFCLElBRmY7QUFHRSxvQkFBTSxFQUFFMEIsTUFBTSxDQUFDdkIsTUFIakI7QUFJRSxxQkFBTyxFQUFFdUIsTUFBTSxDQUFDeEIsT0FKbEI7QUFLRSxrQkFBSSxFQUFFd0IsTUFBTSxDQUFDbkM7QUFMZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURrQjtBQUFBLFdBQW5CO0FBVEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFqSUYsZUFxSkUsOERBQUMsbURBQUQ7QUFDRSxtQkFBUyxNQURYO0FBRUUsY0FBSSxNQUZOO0FBR0UsZUFBSyxFQUFFO0FBQUVhLG1CQUFPLEVBQUUsT0FBWDtBQUFvQkssa0JBQU0sRUFBRTtBQUE1QixXQUhUO0FBQUEsa0NBS0UsOERBQUMseURBQUQ7QUFBWSxpQkFBSyxFQUFFO0FBQUVDLHdCQUFVLEVBQUU7QUFBZCxhQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMRixlQVFFLDhEQUFDLDJEQUFEO0FBQUssY0FBRSxFQUFFLENBQVQ7QUFBQSxzQkFDR2xDLE1BQU0sQ0FBQ3NCLElBQVAsQ0FBWTJCLEdBQVosQ0FBZ0IsVUFBQ0UsR0FBRDtBQUFBLGtDQUNmO0FBQUEsdUNBQ0UsOERBQUMsNERBQUQ7QUFDRSx1QkFBSyxFQUFFO0FBQ0xULG1DQUFlLEVBQUUsU0FEWjtBQUVMQywwQkFBTSxFQUFFLE1BRkg7QUFHTFYsMEJBQU0sRUFBRTtBQUhILG1CQURUO0FBTUUsdUJBQUssRUFBRWtCLEdBTlQ7QUFPRSx5QkFBTyxFQUFDO0FBUFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRGU7QUFBQSxhQUFoQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXJKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFxWUUsOERBQUMsbURBQUQ7QUFBTSxVQUFJLE1BQVY7QUFBQSw2QkFDRSw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXJZRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTJZRDs7R0F4ZHVCdkUsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaW5nbGVwcm9kdWN0LjRiMWYxNmZjYjA2MDY0NGQ5ZWFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY3JlYXRlU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvblwiKSk7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY3JlYXRlU3ZnSWNvbi5kZWZhdWx0KShfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTE5IDEzSDV2LTJoMTR2MnpcIlxufSksICdSZW1vdmUnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vc3JjL3Jlc3VzYWJsZS9oZWFkZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vc3JjL3Jlc3VzYWJsZS9mb290ZXJcIjtcclxuaW1wb3J0IHtcclxuICBCdXR0b24sXHJcbiAgR3JpZCxcclxuICBUeXBvZ3JhcGh5LFxyXG4gIFBhcGVyLFxyXG4gIERpdmlkZXIsXHJcbiAgQ29udGFpbmVyLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgSW1hZ2VDYXJvdXNlbCBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvc2luZ2xlcHJvZHVjdC9JbWFnZUNhcm91c2VsXCI7XHJcbmltcG9ydCBCb3ggZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiO1xyXG5pbXBvcnQgUmVtb3ZlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1JlbW92ZVwiO1xyXG5cclxuaW1wb3J0IE5hdmlnYXRlTmV4dEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9OYXZpZ2F0ZU5leHRcIjtcclxuaW1wb3J0IEJyZWFkY3J1bWJzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CcmVhZGNydW1ic1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlua1wiO1xyXG5pbXBvcnQgU2hhcmVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2hhcmVcIjtcclxuaW1wb3J0IFJhdGluZyBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYi9SYXRpbmdcIjtcclxuaW1wb3J0IEFkZEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BZGRcIjtcclxuaW1wb3J0IENvbW1lbnRFeGFtcGxlTWV0YWRhdGEgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL3NpbmdsZXByb2R1Y3QvQ29tbWVudFNlY3Rpb25cIjtcclxuLy8gaWNvbnNcclxuaW1wb3J0IERhdGVSYW5nZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9EYXRlUmFuZ2VcIjtcclxuaW1wb3J0IFN3YXBIb3Jpekljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Td2FwSG9yaXpcIjtcclxuaW1wb3J0IFdvcmtPdXRsaW5lSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1dvcmtPdXRsaW5lXCI7XHJcbmltcG9ydCBJbnNlcnREcml2ZUZpbGVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSW5zZXJ0RHJpdmVGaWxlXCI7XHJcbmltcG9ydCBEZXZpY2VIdWJJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRGV2aWNlSHViXCI7XHJcbmltcG9ydCBDaGlwIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DaGlwXCI7XHJcbmltcG9ydCBodG1sX1BhcnNlciBmcm9tIFwiaHRtbC1yZWFjdC1wYXJzZXJcIjtcclxuLy8gUmFkaW8gYnV0dG9uXHJcbmltcG9ydCBSYWRpbyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9cIjtcclxuaW1wb3J0IFJhZGlvR3JvdXAgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1JhZGlvR3JvdXBcIjtcclxuaW1wb3J0IEZvcm1Db250cm9sTGFiZWwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWxcIjtcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbFwiO1xyXG5pbXBvcnQge1xyXG4gIEFkZEJveFJvdW5kZWQsXHJcbiAgVGV4dFJvdGF0aW9uQW5nbGVkb3duT3V0bGluZWQsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hvcHNldHVwKHByb3BzKSB7XHJcbiAgY29uc3QgW2ltYWdlcywgc2V0SW1hZ2VzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoMyk7XHJcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudGVyXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtjb20sIHNldENvbV0gPSB1c2VTdGF0ZShcIkNvbW1lcmNpYWxcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0Q29tKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVBZGQgPSAoKSA9PiB7XHJcbiAgICBzZXRDb3VudGVyKGNvdW50ICsgMSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVTdWIgPSAoKSA9PiB7XHJcbiAgICBzZXRDb3VudGVyKGNvdW50IC0gMSk7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmluZm8oXCJZb3UgY2xpY2tlZCBhIGJyZWFkY3J1bWIuXCIpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2FtcGxlID0ge1xyXG4gICAgdGl0bGU6IFwibmV3IGJ1bmRsZSAzOCBpbiAxIC05MDAwIGdyYXBoaWNzXCIsXHJcbiAgICBwcm9kdWN0Q2F0ZWdvcnk6IFwiR3JhcGhpY3NcIixcclxuICAgIHNob3A6IHtcclxuICAgICAgaWQ6IFwiMVwiLFxyXG4gICAgICBzaG9wTmFtZTogXCJHcmFwaGljcyBndXJvXCIsXHJcbiAgICAgIHNob3BEZXNjcmlwdGlvbjogXCJTb21lIGJlc3Qgc2VsbGluZyB0aGluZ3NcIixcclxuICAgIH0sXHJcbiAgICB2aWRlb1VybDogXCJcIiwgLy9pZiB0aGVyZSBpcyB2aWRlbyB1cmwgc2hvdyB2aWRlbyBpbnN0ZWFkIG9mIGltYWdlc1xyXG4gICAgaW1hZ2VzOiBbXCJhbnlpbWFnZS4ucG5nXCIsIFwiYW55aW1hZ2UucG5nXCJdLFxyXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICBkZXRhaWxzOiBcIjxkaXYgPmhpLDxoMSA+aGVsbG88L2gxPjxkaXY+XCIsXHJcbiAgICBmaWxlOiBcIlwiLFxyXG4gICAgZmlsZVNpemU6IFwiNTkxS0JcIixcclxuICAgIHBlcnNvbmFsTGljZW5jZTogXCI0OVwiLFxyXG4gICAgY29tbWVyY2lhbExpY2VuY2U6IFwiNTlcIixcclxuICAgIGV4dGVuZGVkQ29tbWVyY2lhbExpY2VuY2U6IFwiNjlcIixcclxuICAgIGRhdGU6IERhdGUubm93KCksXHJcbiAgICBjb21wYXRpYmxlV2l0aDogW1xyXG4gICAgICBcIkFkb2JlIFBob3RvU2hvcFwiLFxyXG4gICAgICBcIklsbHVzdHJhdG9yXCIsXHJcbiAgICAgIFwiQWZ0ZXIgZWZmZWN0XCIsXHJcbiAgICAgIFwiQWRvYmUgWERcIixcclxuICAgIF0sXHJcbiAgICBsYXllcmVkOiBmYWxzZSwgLy9pZiB0cnVlIGRpc3BsYXkgaXQgaW4gcHJvZHVjdCBzcGVjc1xyXG4gICAgdGlsZWFibGU6IGZhbHNlLCAvL2lmIHRydWUgZGlzcGxheSBpdCBpbiBwcm9kdWN0IHNwZWNzXHJcbiAgICB2ZWN0b3I6IHRydWUsIC8vaWYgdHJ1ZSBkaXNwbGF5IGl0IGluIHByb2R1Y3Qgc3BlY3NcclxuICAgIHRhZ3M6IFtcIkJ1bmRsZVwiLCBcIldob2xlIFNob3BcIiwgXCJHcmFkaWVudFwiXSxcclxuICAgIHJldmlld3M6IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiSmVtIFRoYW1vc1wiLFxyXG4gICAgICAgIHByb2ZpbGU6XHJcbiAgICAgICAgICBcImh0dHBzOi8vMS5icC5ibG9nc3BvdC5jb20vLTJybXQ1NXA0SmdjL1htU1VnSEdtYWFJL0FBQUFBQUFBUFJ3L3JGLWUxY1J1TEVJN0FuV3ctZ01zTXNFYzFpcmxKdWhXd0NMY0JHQXNZSFEvczE2MDAvTG92ZWx5JTJCRFAlMkJGb3IlMkJXaGF0c2FwcCUyQlByb2ZpbGUlMkIlMkIlMjUyODIzJTI1MjkuanBnXCIsIC8vaWYgdGhlcmUgaXMgbm8gcGhvdG8gdXNlIGFueSBzYW1wbGUgdXNlciBwaG90b1xyXG4gICAgICAgIG1lc3NhZ2U6IFwiUGVyZmVjdFwiLFxyXG4gICAgICAgIHJhdGluZzogNCxcclxuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLCAvL3Nob3VsZCBiZSBpbiBmb3JtYXQgMSBtaW4gYWdvXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIkplbSBUaGFtb3NcIixcclxuICAgICAgICBwcm9maWxlOlxyXG4gICAgICAgICAgXCJodHRwczovLzEuYnAuYmxvZ3Nwb3QuY29tLy0ycm10NTVwNEpnYy9YbVNVZ0hHbWFhSS9BQUFBQUFBQVBSdy9yRi1lMWNSdUxFSTdBbld3LWdNc01zRWMxaXJsSnVoV3dDTGNCR0FzWUhRL3MxNjAwL0xvdmVseSUyQkRQJTJCRm9yJTJCV2hhdHNhcHAlMkJQcm9maWxlJTJCJTJCJTI1MjgyMyUyNTI5LmpwZ1wiLCAvL2lmIHRoZXJlIGlzIG5vIHBob3RvIHVzZSBhbnkgc2FtcGxlIHVzZXIgcGhvdG9cclxuICAgICAgICBtZXNzYWdlOiBcIlBlcmZlY3RcIixcclxuICAgICAgICByYXRpbmc6IDMsXHJcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoKSwgLy9zaG91bGQgYmUgaW4gZm9ybWF0IDEgbWluIGFnb1xyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9O1xyXG4gIC8vIGNvbnN0IHJldHVybkFnZ3JlZ2F0ZSA9ICgpID0+IHtcclxuICAvLyAgIHNhbXBsZS5yZXZpZXdzLnJlZHVjZSgocmV2aWV3LCB0b3RhbCkgPT4ge1xyXG4gIC8vICAgICByZXR1cm4gdG90YWwucmF0aW5nICsgcmV2aWV3LnJhdGluZztcclxuICAvLyAgIH0pIC8gc2FtcGxlLnJldmlld3MubGVuZ3RoO1xyXG4gIC8vIH07XHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGNvbnNvbGUubG9nKHJldHVybkFnZ3JlZ2F0ZSgpKTtcclxuICAvLyB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249XCJjb2x1bW5cIj5cclxuICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICA8SGVhZGVyIHsuLi5wcm9wc30gLz5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxHcmlkXHJcbiAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjEwcHhcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEJyZWFkY3J1bWJzXHJcbiAgICAgICAgICAgIHNlcGFyYXRvcj17PE5hdmlnYXRlTmV4dEljb24gZm9udFNpemU9XCJzbWFsbFwiIC8+fVxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiYnJlYWRjcnVtYlwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMaW5rIGNvbG9yPVwiaW5oZXJpdFwiIGhyZWY9XCIvXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgICAgICAgIHtzYW1wbGUucHJvZHVjdENhdGVnb3J5fVxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICBocmVmPVwiL2dldHRpbmctc3RhcnRlZC9pbnN0YWxsYXRpb24vXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFBob3RvU2hvcFxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L0JyZWFkY3J1bWJzPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHk+U3RhcnRpbmcgQXQgJDY3PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIGNvbnRhaW5lcj5cclxuICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgICBzbT17MTJ9XHJcbiAgICAgICAgICAgIG1kPXsxMn1cclxuICAgICAgICAgICAgbGc9ezh9XHJcbiAgICAgICAgICAgIHhsPXs4fVxyXG4gICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiBcIjAgMjBweFwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJbWFnZUNhcm91c2VsIGltYWdlcz17aW1hZ2VzfSAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgICAgIHNtPXs2fVxyXG4gICAgICAgICAgICBtZD17NX1cclxuICAgICAgICAgICAgeGw9ezR9XHJcbiAgICAgICAgICAgIGxnPXs0fVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogXCIwcHggYXV0b1wiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8UGFwZXI+XHJcbiAgICAgICAgICAgICAgPEJveCBwPXsyfT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiNjAwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHtzYW1wbGUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICB7LyogPFR5cG9ncmFwaHkgc3R5bGU9e3sgZm9udFdlaWdodDogXCI1MDBcIiB9fT5ncmFwaGljczwvVHlwb2dyYXBoeT4gKi99XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwiZmllbGRzZXRcIlxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I9XCJ0cmFuc3BhcmVudFwiXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXHJcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8UmF0aW5nXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE2cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicmVhZC1vbmx5XCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICByZWFkT25seVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxCb3ggc3R5bGU9e3sgY29sb3I6IFwiIzMyYTg4OVwiIH19IHBsPXsyfT5cclxuICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHNhbXBsZS5yZXZpZXdzKS5sZW5ndGh9IFJldmlld1xyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIG14PXsyfT5cclxuICAgICAgICAgICAgICAgIEJ5XHJcbiAgICAgICAgICAgICAgICA8Qm94IHN0eWxlPXt7IGNvbG9yOiBcIiMzMmE4ODlcIiB9fSBwbD17Mn0+XHJcbiAgICAgICAgICAgICAgICAgIFNhbWkgS2FyYWNoaVxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgPEJveCBweD17Mn0+XHJcbiAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIiBweD17Mn0+XHJcbiAgICAgICAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPkxpY2Vuc2UgVHlwZTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIiMzMmE4ODlcIiwgbWFyZ2luTGVmdDogXCI1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgd2hhdFxyXG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgIDxCb3ggc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHtjb3VudCAhPT0gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8UmVtb3ZlSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VifVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiIzMyYTg4OVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPntjb3VudH0gc2VhdDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgPEFkZEljb24gb25DbGljaz17aGFuZGxlQWRkfSBzdHlsZT17eyBjb2xvcjogXCIjMzJhODg5XCIgfX0gLz5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgIDxCb3ggbXg9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGNvbXBvbmVudD1cImZpZWxkc2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxSYWRpb0dyb3VwXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImdlbmRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImdlbmRlcjFcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb219XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIkNvbW1lcmNpYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXs8UmFkaW8gc3R5bGU9e3sgY29sb3I6IFwiIzMyYTg4OVwiIH19IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE2cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI2MDBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbW1lcmNpYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Qm94IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiNjAwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7c2FtcGxlLmNvbW1lcmNpYWxMaWNlbmNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbGlnbkNvbnRlbnQ9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiRXh0ZW5kZWQgQ29tbWVyY2lhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9ezxSYWRpbyBzdHlsZT17eyBjb2xvcjogXCIjMzJhODg5XCIgfX0gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTZweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjYwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRXh0ZW5kZWQgQ29tbWVyY2lhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCb3ggc3R5bGU9e3sgZm9udFdlaWdodDogXCI2MDBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHtzYW1wbGUuZXh0ZW5kZWRDb21tZXJjaWFsTGljZW5jZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICA8L1JhZGlvR3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgIDxCb3ggcHg9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICBtPXsyfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8Qm94PlBlcnNvbmFsIFByb2plY3Q/PC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgIDxCb3ggdmFyaWFudD1cInN1YnRpdGxlMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcIiMzMmE4ODlcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+R2V0IGEgUGVyc29uYWwgTGljZW5zZTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICA8Qm94PiR7c2FtcGxlLnBlcnNvbmFsTGljZW5jZX08L0JveD5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICA8Qm94IG09ezJ9PlxyXG4gICAgICAgICAgICAgICAgPEJveCBteT17MX0+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzMyYTg4OVwiLCBjb2xvcjogXCJ3aGl0ZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgQWRkIHRvIENhcnRcclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgIDxCb3ggbXk9ezN9PlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkICMzMmE4ODlcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMzMmE4ODlcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgQnV5IE5vd1xyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPVwicm93XCI+XHJcbiAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgIHhsPXs4fVxyXG4gICAgICAgICAgICBsZz17OH1cclxuICAgICAgICAgICAgbWQ9ezh9XHJcbiAgICAgICAgICAgIHNtPXsxMn1cclxuICAgICAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3R5bGU9e3sgZm9udFdlaWdodDogXCI2MDBcIiB9fT5cclxuICAgICAgICAgICAgICAgIEFib3V0IHRoZSBQcm9kdWN0XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgQWxsIG15IG5ldyBjb2xsZWN0aW9ucyByZWxhdGVkIHRvIG90aGVyIHRoZSBidW5kbGV7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPnRoaXMgaXMgYSBsaW5rPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8Qm94IG1yPXsyfT5cclxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgICAgICAgIDxwPntodG1sX1BhcnNlcihzYW1wbGUuZGV0YWlscyl9PC9wPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICA8R3JpZCBzcGFjaW5nPXs0fSBpdGVtIHhsPXs0fSBsZz17NH0gbWQ9ezR9IHNtPXsxMn0geHM9ezEyfT5cclxuICAgICAgICAgICAgPEJveCBteD17Mn0+XHJcbiAgICAgICAgICAgICAgPEJveCBtYj17Mn0+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzdHlsZT17eyBmb250V2VpZ2h0OiBcIjYwMFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICBQcm9kdWN0IFNwZWNzXHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxEYXRlUmFuZ2VJY29uIC8+XHJcbiAgICAgICAgICAgICAgICA8Qm94IG1sPXsyfSB3aWR0aD1cIjcwJVwiPlxyXG4gICAgICAgICAgICAgICAgICB7c2FtcGxlLmRhdGV9XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPFN3YXBIb3Jpekljb24gLz5cclxuICAgICAgICAgICAgICAgIDxCb3ggbWw9ezJ9IHdpZHRoPVwiNzAlXCI+XHJcbiAgICAgICAgICAgICAgICAgIHRleHQgaGVyZVxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxJbnNlcnREcml2ZUZpbGVJY29uIC8+XHJcbiAgICAgICAgICAgICAgICA8Qm94IG1sPXsyfSB3aWR0aD1cIjcwJVwiPlxyXG4gICAgICAgICAgICAgICAgICBGaWxlIFNpemUge3NhbXBsZS5maWxlU2l6ZX1cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgIHtzYW1wbGUudmVjdG9yID8gKFxyXG4gICAgICAgICAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPERldmljZUh1Ykljb24gLz5cclxuICAgICAgICAgICAgICAgICAgPEJveCBtbD17Mn0gd2lkdGg9XCI3MCVcIj5cclxuICAgICAgICAgICAgICAgICAgICBWZWN0b3JcclxuICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICBsZz17NH1cclxuICAgICAgICAgICAgeGw9ezR9XHJcbiAgICAgICAgICAgIHNtPXsxMn1cclxuICAgICAgICAgICAgbWQ9ezR9XHJcbiAgICAgICAgICAgIHhzPXsxMn1cclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjUwcHhcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5cclxuICAgICAgICAgICAgICBNZWV0IFRoZSBTaG9wXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPFBhcGVyPlxyXG4gICAgICAgICAgICAgIDxCb3gganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly8xLmJwLmJsb2dzcG90LmNvbS8tMnJtdDU1cDRKZ2MvWG1TVWdIR21hYUkvQUFBQUFBQUFQUncvckYtZTFjUnVMRUk3QW5Xdy1nTXNNc0VjMWlybEp1aFd3Q0xjQkdBc1lIUS9zMTYwMC9Mb3ZlbHklMkJEUCUyQkZvciUyQldoYXRzYXBwJTJCUHJvZmlsZSUyQiUyQiUyNTI4MjMlMjUyOS5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cInByb2ZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNjBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNjBweFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+VGV4dCBoZWxsbzwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIE1vbWVudC5qcyBpcyBhIGxlZ2FjeSBwcm9qZWN0LCBub3cgaW4gbWFpbnRlbmFuY2UgbW9kZS4gSW5cclxuICAgICAgICAgICAgICAgICAgbW9zdCBjYXNlcywgeW91IHNob3VsZCBjaG9vc2UgYSBkaWZmZXJlbnQgbGlicmFyeS5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCI1MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMzMmE4ODlcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgKyBGb2xsb3dcclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjMzJhODg5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMzMmE4ODlcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgTWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICB4bD17MTJ9XHJcbiAgICAgICAgICAgIGxnPXsxMn1cclxuICAgICAgICAgICAgbWQ9ezEyfVxyXG4gICAgICAgICAgICBzbT17MTJ9XHJcbiAgICAgICAgICAgIHhzPXsxMn1cclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwMHB4XCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3NhbXBsZS5yZXZpZXdzLm1hcCgocmV2aWV3KSA9PiAoXHJcbiAgICAgICAgICAgICAgPENvbW1lbnRFeGFtcGxlTWV0YWRhdGFcclxuICAgICAgICAgICAgICAgIGltYWdlPXtyZXZpZXcucHJvZmlsZX1cclxuICAgICAgICAgICAgICAgIG5hbWU9e3Jldmlldy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgcmF0aW5nPXtyZXZpZXcucmF0aW5nfVxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZT17cmV2aWV3Lm1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICBkYXRlPXtyZXZpZXcuZGF0ZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbjogXCIxMDBweCAwcHhcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBzdHlsZT17eyBmb250V2VpZ2h0OiBcIjYwMFwiIH19PlxyXG4gICAgICAgICAgICAgIEtlZXAgRXhwbG9yaW5nXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPEJveCBteT17Mn0+XHJcbiAgICAgICAgICAgICAge3NhbXBsZS50YWdzLm1hcCgodGFnKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPENoaXBcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNjY2UwZmZcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiNXB4IDJweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3RhZ31cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9HcmlkPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==