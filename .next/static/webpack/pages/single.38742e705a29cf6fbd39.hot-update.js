self["webpackHotUpdate_N_E"]("pages/single",{

/***/ "./src/components/singleproduct/CommentSection.js":
/*!********************************************************!*\
  !*** ./src/components/singleproduct/CommentSection.js ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/lab/Rating */ "./node_modules/@material-ui/lab/esm/Rating/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\client work\\src\\components\\singleproduct\\CommentSection.js",
    _this = undefined,
    _s = $RefreshSig$();








var CommentSection = function CommentSection(_ref) {
  _s();

  var image = _ref.image,
      name = _ref.name,
      rating = _ref.rating,
      message = _ref.message,
      date = _ref.date;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(rating),
      value = _useState[0],
      setValue = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setValue(rating);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
    xl: 12,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        display: "flex"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        width: "50px",
        height: "50px",
        src: image,
        alt: "avatar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__.default, {
        component: "fieldset",
        borderColor: "transparent",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          style: {
            fontSize: "10px",
            marginLeft: "15px"
          },
          children: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_4__.default, {
            style: {
              fontSize: "13px"
            },
            name: "read-only",
            value: value,
            readOnly: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, _this);
};

_s(CommentSection, "xN9JABLnTn85C1FPD4mlH1kEEpw=");

_c = CommentSection;
/* harmony default export */ __webpack_exports__["default"] = (CommentSection);

var _c;

$RefreshReg$(_c, "CommentSection");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2luZ2xlcHJvZHVjdC9Db21tZW50U2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJDb21tZW50U2VjdGlvbiIsImltYWdlIiwibmFtZSIsInJhdGluZyIsIm1lc3NhZ2UiLCJkYXRlIiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwidXNlRWZmZWN0IiwiZGlzcGxheSIsImZvbnRTaXplIiwibWFyZ2luTGVmdCIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUE0QztBQUFBOztBQUFBLE1BQXpDQyxLQUF5QyxRQUF6Q0EsS0FBeUM7QUFBQSxNQUFsQ0MsSUFBa0MsUUFBbENBLElBQWtDO0FBQUEsTUFBNUJDLE1BQTRCLFFBQTVCQSxNQUE0QjtBQUFBLE1BQXBCQyxPQUFvQixRQUFwQkEsT0FBb0I7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEsa0JBQ3ZDQywrQ0FBUSxDQUFDSCxNQUFELENBRCtCO0FBQUEsTUFDMURJLEtBRDBEO0FBQUEsTUFDbkRDLFFBRG1EOztBQUVqRUMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2RELFlBQVEsQ0FBQ0wsTUFBRCxDQUFSO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUdBLHNCQUNFLDhEQUFDLG1EQUFEO0FBQU0sTUFBRSxFQUFFLEVBQVY7QUFBQSw0QkFDRTtBQUNFLFdBQUssRUFBRTtBQUNMTyxlQUFPLEVBQUU7QUFESixPQURUO0FBQUEsOEJBS0U7QUFBSyxhQUFLLEVBQUMsTUFBWDtBQUFrQixjQUFNLEVBQUMsTUFBekI7QUFBZ0MsV0FBRyxFQUFFVCxLQUFyQztBQUE0QyxXQUFHLEVBQUM7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGLGVBTUUsOERBQUMsMERBQUQ7QUFBSyxpQkFBUyxFQUFDLFVBQWY7QUFBMEIsbUJBQVcsRUFBQyxhQUF0QztBQUFBLGdDQUNFO0FBQUEsb0JBQU9DO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQU0sZUFBSyxFQUFFO0FBQUVTLG9CQUFRLEVBQUUsTUFBWjtBQUFvQkMsc0JBQVUsRUFBRTtBQUFoQyxXQUFiO0FBQUEsb0JBQ0dQLElBQUksQ0FBQ1EsV0FBTCxLQUNDLEdBREQsSUFFRVIsSUFBSSxDQUFDUyxRQUFMLEtBQWtCLENBRnBCLElBR0MsR0FIRCxHQUlDVCxJQUFJLENBQUNVLE9BQUw7QUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBU0U7QUFBQSxpQ0FDRSw4REFBQyw0REFBRDtBQUNFLGlCQUFLLEVBQUU7QUFBRUosc0JBQVEsRUFBRTtBQUFaLGFBRFQ7QUFFRSxnQkFBSSxFQUFDLFdBRlA7QUFHRSxpQkFBSyxFQUFFSixLQUhUO0FBSUUsb0JBQVE7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQTBCRTtBQUFBLGdCQUFJSDtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUExQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE4QkQsQ0FuQ0Q7O0dBQU1KLGM7O0tBQUFBLGM7QUFxQ04sK0RBQWVBLGNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2luZ2xlLjM4NzQyZTcwNWEyOWNmNmZiZDM5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmlkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBSYXRpbmcgZnJvbSBcIkBtYXRlcmlhbC11aS9sYWIvUmF0aW5nXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcbmltcG9ydCBCb3ggZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTbWFydHBob25lT3V0bGluZWQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcblxyXG5jb25zdCBDb21tZW50U2VjdGlvbiA9ICh7IGltYWdlLCBuYW1lLCByYXRpbmcsIG1lc3NhZ2UsIGRhdGUgfSkgPT4ge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUocmF0aW5nKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0VmFsdWUocmF0aW5nKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkIHhsPXsxMn0+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxpbWcgd2lkdGg9XCI1MHB4XCIgaGVpZ2h0PVwiNTBweFwiIHNyYz17aW1hZ2V9IGFsdD1cImF2YXRhclwiIC8+XHJcbiAgICAgICAgPEJveCBjb21wb25lbnQ9XCJmaWVsZHNldFwiIGJvcmRlckNvbG9yPVwidHJhbnNwYXJlbnRcIj5cclxuICAgICAgICAgIDxzcGFuPntuYW1lfTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEwcHhcIiwgbWFyZ2luTGVmdDogXCIxNXB4XCIgfX0+XHJcbiAgICAgICAgICAgIHtkYXRlLmdldEZ1bGxZZWFyKCkgK1xyXG4gICAgICAgICAgICAgIFwiLVwiICtcclxuICAgICAgICAgICAgICAoZGF0ZS5nZXRNb250aCgpICsgMSkgK1xyXG4gICAgICAgICAgICAgIFwiLVwiICtcclxuICAgICAgICAgICAgICBkYXRlLmdldERhdGUoKX1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8UmF0aW5nXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IFwiMTNweFwiIH19XHJcbiAgICAgICAgICAgICAgbmFtZT1cInJlYWQtb25seVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8cD57bWVzc2FnZX08L3A+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRTZWN0aW9uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9