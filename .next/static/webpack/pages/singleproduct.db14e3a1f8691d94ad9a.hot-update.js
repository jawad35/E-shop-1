self["webpackHotUpdate_N_E"]("pages/singleproduct",{

/***/ "./src/components/singleproduct/ImageCarousel.js":
/*!*******************************************************!*\
  !*** ./src/components/singleproduct/ImageCarousel.js ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_client_work_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_client_work_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_client_work_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_client_work_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_client_work_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-image-gallery */ "./node_modules/react-image-gallery/build/image-gallery.js");
/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_image_gallery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_image_gallery_styles_css_image_gallery_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-image-gallery/styles/css/image-gallery.css */ "./node_modules/react-image-gallery/styles/css/image-gallery.css");
/* harmony import */ var react_image_gallery_styles_css_image_gallery_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_image_gallery_styles_css_image_gallery_css__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "D:\\client work\\src\\components\\singleproduct\\ImageCarousel.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,D_client_work_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,D_client_work_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,D_client_work_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

 // import { _IMAGES } from "../data/data";



var _IMAGES = [{
  original: "https://picsum.photos/id/1018/1000/600/",
  thumbnail: "https://picsum.photos/id/1018/250/150/"
}, {
  original: "https://picsum.photos/id/1015/1000/600/",
  thumbnail: "https://picsum.photos/id/1015/250/150/"
}, {
  original: "https://picsum.photos/id/1019/1000/600/",
  thumbnail: "https://picsum.photos/id/1019/250/150/"
}, {
  original: "https://picsum.photos/id/1018/1000/600/",
  thumbnail: "https://picsum.photos/id/1018/250/150/"
}, {
  original: "https://picsum.photos/id/1015/1000/600/",
  thumbnail: "https://picsum.photos/id/1015/250/150/"
}, {
  original: "https://picsum.photos/id/1019/1000/600/",
  thumbnail: "https://picsum.photos/id/1019/250/150/"
}, {
  original: "https://picsum.photos/id/1018/1000/600/",
  thumbnail: "https://picsum.photos/id/1018/250/150/"
}, {
  original: "https://picsum.photos/id/1015/1000/600/",
  thumbnail: "https://picsum.photos/id/1015/250/150/"
}, {
  original: "https://picsum.photos/id/1019/1000/600/",
  thumbnail: "https://picsum.photos/id/1019/250/150/"
}];

var ReactImageGalleryTest = /*#__PURE__*/function (_React$Component) {
  (0,D_client_work_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(ReactImageGalleryTest, _React$Component);

  var _super = _createSuper(ReactImageGalleryTest);

  function ReactImageGalleryTest(props) {
    var _this;

    (0,D_client_work_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, ReactImageGalleryTest);

    _this = _super.call(this, props);
    _this.state = {
      items: []
    };
    return _this;
  }

  (0,D_client_work_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(ReactImageGalleryTest, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_image_gallery__WEBPACK_IMPORTED_MODULE_7___default()), {
          showNav: false,
          showPlayButton: false,
          showFullscreenButton: false,
          showThumbnails: true,
          items: _IMAGES
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 7
      }, this);
    }
  }]);

  return ReactImageGalleryTest;
}((react__WEBPACK_IMPORTED_MODULE_6___default().Component));

/* harmony default export */ __webpack_exports__["default"] = (ReactImageGalleryTest);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2luZ2xlcHJvZHVjdC9JbWFnZUNhcm91c2VsLmpzIl0sIm5hbWVzIjpbIl9JTUFHRVMiLCJvcmlnaW5hbCIsInRodW1ibmFpbCIsIlJlYWN0SW1hZ2VHYWxsZXJ5VGVzdCIsInByb3BzIiwic3RhdGUiLCJpdGVtcyIsIlJlYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHLENBQ2Q7QUFDRUMsVUFBUSxFQUFFLHlDQURaO0FBRUVDLFdBQVMsRUFBRTtBQUZiLENBRGMsRUFLZDtBQUNFRCxVQUFRLEVBQUUseUNBRFo7QUFFRUMsV0FBUyxFQUFFO0FBRmIsQ0FMYyxFQVNkO0FBQ0VELFVBQVEsRUFBRSx5Q0FEWjtBQUVFQyxXQUFTLEVBQUU7QUFGYixDQVRjLEVBYWQ7QUFDRUQsVUFBUSxFQUFFLHlDQURaO0FBRUVDLFdBQVMsRUFBRTtBQUZiLENBYmMsRUFpQmQ7QUFDRUQsVUFBUSxFQUFFLHlDQURaO0FBRUVDLFdBQVMsRUFBRTtBQUZiLENBakJjLEVBcUJkO0FBQ0VELFVBQVEsRUFBRSx5Q0FEWjtBQUVFQyxXQUFTLEVBQUU7QUFGYixDQXJCYyxFQXlCZDtBQUNFRCxVQUFRLEVBQUUseUNBRFo7QUFFRUMsV0FBUyxFQUFFO0FBRmIsQ0F6QmMsRUE2QmQ7QUFDRUQsVUFBUSxFQUFFLHlDQURaO0FBRUVDLFdBQVMsRUFBRTtBQUZiLENBN0JjLEVBaUNkO0FBQ0VELFVBQVEsRUFBRSx5Q0FEWjtBQUVFQyxXQUFTLEVBQUU7QUFGYixDQWpDYyxDQUFoQjs7SUF1Q01DLHFCOzs7OztBQUNKLGlDQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFdBQUssRUFBRTtBQURJLEtBQWI7QUFGaUI7QUFLbEI7Ozs7NkJBRVE7QUFDUCwwQkFDRTtBQUFBLCtCQUNFLDhEQUFDLDREQUFEO0FBQ0UsaUJBQU8sRUFBRSxLQURYO0FBRUUsd0JBQWMsRUFBRSxLQUZsQjtBQUdFLDhCQUFvQixFQUFFLEtBSHhCO0FBSUUsd0JBQWMsRUFBRSxJQUpsQjtBQUtFLGVBQUssRUFBRU47QUFMVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBV0Q7Ozs7RUFwQmlDTyx3RDs7QUFzQnBDLCtEQUFlSixxQkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaW5nbGVwcm9kdWN0LmRiMTRlM2ExZjg2OTFkOTRhZDlhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCB7IF9JTUFHRVMgfSBmcm9tIFwiLi4vZGF0YS9kYXRhXCI7XHJcbmltcG9ydCBJbWFnZUdhbGxlcnkgZnJvbSBcInJlYWN0LWltYWdlLWdhbGxlcnlcIjtcclxuaW1wb3J0IFwicmVhY3QtaW1hZ2UtZ2FsbGVyeS9zdHlsZXMvY3NzL2ltYWdlLWdhbGxlcnkuY3NzXCI7XHJcblxyXG5jb25zdCBfSU1BR0VTID0gW1xyXG4gIHtcclxuICAgIG9yaWdpbmFsOiBcImh0dHBzOi8vcGljc3VtLnBob3Rvcy9pZC8xMDE4LzEwMDAvNjAwL1wiLFxyXG4gICAgdGh1bWJuYWlsOiBcImh0dHBzOi8vcGljc3VtLnBob3Rvcy9pZC8xMDE4LzI1MC8xNTAvXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBvcmlnaW5hbDogXCJodHRwczovL3BpY3N1bS5waG90b3MvaWQvMTAxNS8xMDAwLzYwMC9cIixcclxuICAgIHRodW1ibmFpbDogXCJodHRwczovL3BpY3N1bS5waG90b3MvaWQvMTAxNS8yNTAvMTUwL1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgb3JpZ2luYWw6IFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzEwMTkvMTAwMC82MDAvXCIsXHJcbiAgICB0aHVtYm5haWw6IFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzEwMTkvMjUwLzE1MC9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG9yaWdpbmFsOiBcImh0dHBzOi8vcGljc3VtLnBob3Rvcy9pZC8xMDE4LzEwMDAvNjAwL1wiLFxyXG4gICAgdGh1bWJuYWlsOiBcImh0dHBzOi8vcGljc3VtLnBob3Rvcy9pZC8xMDE4LzI1MC8xNTAvXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBvcmlnaW5hbDogXCJodHRwczovL3BpY3N1bS5waG90b3MvaWQvMTAxNS8xMDAwLzYwMC9cIixcclxuICAgIHRodW1ibmFpbDogXCJodHRwczovL3BpY3N1bS5waG90b3MvaWQvMTAxNS8yNTAvMTUwL1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgb3JpZ2luYWw6IFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzEwMTkvMTAwMC82MDAvXCIsXHJcbiAgICB0aHVtYm5haWw6IFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzEwMTkvMjUwLzE1MC9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG9yaWdpbmFsOiBcImh0dHBzOi8vcGljc3VtLnBob3Rvcy9pZC8xMDE4LzEwMDAvNjAwL1wiLFxyXG4gICAgdGh1bWJuYWlsOiBcImh0dHBzOi8vcGljc3VtLnBob3Rvcy9pZC8xMDE4LzI1MC8xNTAvXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBvcmlnaW5hbDogXCJodHRwczovL3BpY3N1bS5waG90b3MvaWQvMTAxNS8xMDAwLzYwMC9cIixcclxuICAgIHRodW1ibmFpbDogXCJodHRwczovL3BpY3N1bS5waG90b3MvaWQvMTAxNS8yNTAvMTUwL1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgb3JpZ2luYWw6IFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzEwMTkvMTAwMC82MDAvXCIsXHJcbiAgICB0aHVtYm5haWw6IFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzEwMTkvMjUwLzE1MC9cIixcclxuICB9LFxyXG5dO1xyXG5cclxuY2xhc3MgUmVhY3RJbWFnZUdhbGxlcnlUZXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaXRlbXM6IFtdLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEltYWdlR2FsbGVyeVxyXG4gICAgICAgICAgc2hvd05hdj17ZmFsc2V9XHJcbiAgICAgICAgICBzaG93UGxheUJ1dHRvbj17ZmFsc2V9XHJcbiAgICAgICAgICBzaG93RnVsbHNjcmVlbkJ1dHRvbj17ZmFsc2V9XHJcbiAgICAgICAgICBzaG93VGh1bWJuYWlscz17dHJ1ZX1cclxuICAgICAgICAgIGl0ZW1zPXtfSU1BR0VTfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3RJbWFnZUdhbGxlcnlUZXN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9