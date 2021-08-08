self["webpackHotUpdate_N_E"]("pages/single",{

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
  original: "https://youtu.be/_l4M-T5vFsQ",
  thumbnail: "https://youtu.be/_l4M-T5vFsQ"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2luZ2xlcHJvZHVjdC9JbWFnZUNhcm91c2VsLmpzIl0sIm5hbWVzIjpbIl9JTUFHRVMiLCJvcmlnaW5hbCIsInRodW1ibmFpbCIsIlJlYWN0SW1hZ2VHYWxsZXJ5VGVzdCIsInByb3BzIiwic3RhdGUiLCJpdGVtcyIsIlJlYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHLENBQ2Q7QUFDRUMsVUFBUSxFQUFFLHlDQURaO0FBRUVDLFdBQVMsRUFBRTtBQUZiLENBRGMsRUFLZDtBQUNFRCxVQUFRLEVBQUUseUNBRFo7QUFFRUMsV0FBUyxFQUFFO0FBRmIsQ0FMYyxFQVNkO0FBQ0VELFVBQVEsRUFBRSx5Q0FEWjtBQUVFQyxXQUFTLEVBQUU7QUFGYixDQVRjLEVBYWQ7QUFDRUQsVUFBUSxFQUFFLHlDQURaO0FBRUVDLFdBQVMsRUFBRTtBQUZiLENBYmMsRUFpQmQ7QUFDRUQsVUFBUSxFQUFFLHlDQURaO0FBRUVDLFdBQVMsRUFBRTtBQUZiLENBakJjLEVBcUJkO0FBQ0VELFVBQVEsRUFBRSx5Q0FEWjtBQUVFQyxXQUFTLEVBQUU7QUFGYixDQXJCYyxFQXlCZDtBQUNFRCxVQUFRLEVBQUUseUNBRFo7QUFFRUMsV0FBUyxFQUFFO0FBRmIsQ0F6QmMsRUE2QmQ7QUFDRUQsVUFBUSxFQUFFLDhCQURaO0FBRUVDLFdBQVMsRUFBRTtBQUZiLENBN0JjLEVBaUNkO0FBQ0VELFVBQVEsRUFBRSx5Q0FEWjtBQUVFQyxXQUFTLEVBQUU7QUFGYixDQWpDYyxDQUFoQjs7SUF1Q01DLHFCOzs7OztBQUNKLGlDQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFdBQUssRUFBRTtBQURJLEtBQWI7QUFGaUI7QUFLbEI7Ozs7NkJBRVE7QUFDUCwwQkFDRTtBQUFBLCtCQUNFLDhEQUFDLDREQUFEO0FBQ0UsaUJBQU8sRUFBRSxLQURYO0FBRUUsd0JBQWMsRUFBRSxLQUZsQjtBQUdFLDhCQUFvQixFQUFFLEtBSHhCO0FBSUUsd0JBQWMsRUFBRSxJQUpsQjtBQUtFLGVBQUssRUFBRU47QUFMVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBV0Q7Ozs7RUFwQmlDTyx3RDs7QUFzQnBDLCtEQUFlSixxQkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaW5nbGUuNWMyY2UwMDZhZDcwMTU2MTE2ZTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IHsgX0lNQUdFUyB9IGZyb20gXCIuLi9kYXRhL2RhdGFcIjtcclxuaW1wb3J0IEltYWdlR2FsbGVyeSBmcm9tIFwicmVhY3QtaW1hZ2UtZ2FsbGVyeVwiO1xyXG5pbXBvcnQgXCJyZWFjdC1pbWFnZS1nYWxsZXJ5L3N0eWxlcy9jc3MvaW1hZ2UtZ2FsbGVyeS5jc3NcIjtcclxuXHJcbmNvbnN0IF9JTUFHRVMgPSBbXHJcbiAge1xyXG4gICAgb3JpZ2luYWw6IFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzEwMTgvMTAwMC82MDAvXCIsXHJcbiAgICB0aHVtYm5haWw6IFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzEwMTgvMjUwLzE1MC9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG9yaWdpbmFsOiBcImh0dHBzOi8vcGljc3VtLnBob3Rvcy9pZC8xMDE1LzEwMDAvNjAwL1wiLFxyXG4gICAgdGh1bWJuYWlsOiBcImh0dHBzOi8vcGljc3VtLnBob3Rvcy9pZC8xMDE1LzI1MC8xNTAvXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBvcmlnaW5hbDogXCJodHRwczovL3BpY3N1bS5waG90b3MvaWQvMTAxOS8xMDAwLzYwMC9cIixcclxuICAgIHRodW1ibmFpbDogXCJodHRwczovL3BpY3N1bS5waG90b3MvaWQvMTAxOS8yNTAvMTUwL1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgb3JpZ2luYWw6IFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzEwMTgvMTAwMC82MDAvXCIsXHJcbiAgICB0aHVtYm5haWw6IFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzEwMTgvMjUwLzE1MC9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG9yaWdpbmFsOiBcImh0dHBzOi8vcGljc3VtLnBob3Rvcy9pZC8xMDE1LzEwMDAvNjAwL1wiLFxyXG4gICAgdGh1bWJuYWlsOiBcImh0dHBzOi8vcGljc3VtLnBob3Rvcy9pZC8xMDE1LzI1MC8xNTAvXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBvcmlnaW5hbDogXCJodHRwczovL3BpY3N1bS5waG90b3MvaWQvMTAxOS8xMDAwLzYwMC9cIixcclxuICAgIHRodW1ibmFpbDogXCJodHRwczovL3BpY3N1bS5waG90b3MvaWQvMTAxOS8yNTAvMTUwL1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgb3JpZ2luYWw6IFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzEwMTgvMTAwMC82MDAvXCIsXHJcbiAgICB0aHVtYm5haWw6IFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzEwMTgvMjUwLzE1MC9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG9yaWdpbmFsOiBcImh0dHBzOi8veW91dHUuYmUvX2w0TS1UNXZGc1FcIixcclxuICAgIHRodW1ibmFpbDogXCJodHRwczovL3lvdXR1LmJlL19sNE0tVDV2RnNRXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBvcmlnaW5hbDogXCJodHRwczovL3BpY3N1bS5waG90b3MvaWQvMTAxOS8xMDAwLzYwMC9cIixcclxuICAgIHRodW1ibmFpbDogXCJodHRwczovL3BpY3N1bS5waG90b3MvaWQvMTAxOS8yNTAvMTUwL1wiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jbGFzcyBSZWFjdEltYWdlR2FsbGVyeVRlc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpdGVtczogW10sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8SW1hZ2VHYWxsZXJ5XHJcbiAgICAgICAgICBzaG93TmF2PXtmYWxzZX1cclxuICAgICAgICAgIHNob3dQbGF5QnV0dG9uPXtmYWxzZX1cclxuICAgICAgICAgIHNob3dGdWxsc2NyZWVuQnV0dG9uPXtmYWxzZX1cclxuICAgICAgICAgIHNob3dUaHVtYm5haWxzPXt0cnVlfVxyXG4gICAgICAgICAgaXRlbXM9e19JTUFHRVN9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdEltYWdlR2FsbGVyeVRlc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=