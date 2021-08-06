self["webpackHotUpdate_N_E"]("pages/singleproduct",{

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
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          display: "flex",
          border: "1px solid black",
          margin: "0px"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          width: "40px",
          height: "40px",
          src: image,
          alt: "avatar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__.default, {
          component: "fieldset",
          borderColor: "transparent",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            style: {
              fontSize: "10px",
              marginLeft: "2px"
            },
            children: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_4__.default, {
              style: {
                fontSize: "15px"
              },
              name: "read-only",
              value: value,
              readOnly: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        style: {
          border: "1px solid black"
        },
        children: message
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2luZ2xlcHJvZHVjdC9Db21tZW50U2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJDb21tZW50U2VjdGlvbiIsImltYWdlIiwibmFtZSIsInJhdGluZyIsIm1lc3NhZ2UiLCJkYXRlIiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwidXNlRWZmZWN0IiwiZGlzcGxheSIsImJvcmRlciIsIm1hcmdpbiIsImZvbnRTaXplIiwibWFyZ2luTGVmdCIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUE0QztBQUFBOztBQUFBLE1BQXpDQyxLQUF5QyxRQUF6Q0EsS0FBeUM7QUFBQSxNQUFsQ0MsSUFBa0MsUUFBbENBLElBQWtDO0FBQUEsTUFBNUJDLE1BQTRCLFFBQTVCQSxNQUE0QjtBQUFBLE1BQXBCQyxPQUFvQixRQUFwQkEsT0FBb0I7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEsa0JBQ3ZDQywrQ0FBUSxDQUFDSCxNQUFELENBRCtCO0FBQUEsTUFDMURJLEtBRDBEO0FBQUEsTUFDbkRDLFFBRG1EOztBQUVqRUMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2RELFlBQVEsQ0FBQ0wsTUFBRCxDQUFSO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUdBLHNCQUNFLDhEQUFDLG1EQUFEO0FBQUEsMkJBQ0U7QUFBQSw4QkFDRTtBQUNFLGFBQUssRUFBRTtBQUNMTyxpQkFBTyxFQUFFLE1BREo7QUFFTEMsZ0JBQU0sRUFBRSxpQkFGSDtBQUdMQyxnQkFBTSxFQUFFO0FBSEgsU0FEVDtBQUFBLGdDQU9FO0FBQUssZUFBSyxFQUFDLE1BQVg7QUFBa0IsZ0JBQU0sRUFBQyxNQUF6QjtBQUFnQyxhQUFHLEVBQUVYLEtBQXJDO0FBQTRDLGFBQUcsRUFBQztBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGLGVBUUUsOERBQUMsMERBQUQ7QUFBSyxtQkFBUyxFQUFDLFVBQWY7QUFBMEIscUJBQVcsRUFBQyxhQUF0QztBQUFBLGtDQUNFO0FBQUEsc0JBQU9DO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQU0saUJBQUssRUFBRTtBQUFFVyxzQkFBUSxFQUFFLE1BQVo7QUFBb0JDLHdCQUFVLEVBQUU7QUFBaEMsYUFBYjtBQUFBLHNCQUNHVCxJQUFJLENBQUNVLFdBQUwsS0FDQyxHQURELElBRUVWLElBQUksQ0FBQ1csUUFBTCxLQUFrQixDQUZwQixJQUdDLEdBSEQsR0FJQ1gsSUFBSSxDQUFDWSxPQUFMO0FBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQVNFO0FBQUEsbUNBQ0UsOERBQUMsNERBQUQ7QUFDRSxtQkFBSyxFQUFFO0FBQUVKLHdCQUFRLEVBQUU7QUFBWixlQURUO0FBRUUsa0JBQUksRUFBQyxXQUZQO0FBR0UsbUJBQUssRUFBRU4sS0FIVDtBQUlFLHNCQUFRO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBNEJFO0FBQUcsYUFBSyxFQUFFO0FBQUVJLGdCQUFNLEVBQUU7QUFBVixTQUFWO0FBQUEsa0JBQTBDUDtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBNUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWtDRCxDQXZDRDs7R0FBTUosYzs7S0FBQUEsYztBQXlDTiwrREFBZUEsY0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaW5nbGVwcm9kdWN0LjM4YzdkOWZkMTZkMmEwNGVlM2ZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmlkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBSYXRpbmcgZnJvbSBcIkBtYXRlcmlhbC11aS9sYWIvUmF0aW5nXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcbmltcG9ydCBCb3ggZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTbWFydHBob25lT3V0bGluZWQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcblxyXG5jb25zdCBDb21tZW50U2VjdGlvbiA9ICh7IGltYWdlLCBuYW1lLCByYXRpbmcsIG1lc3NhZ2UsIGRhdGUgfSkgPT4ge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUocmF0aW5nKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0VmFsdWUocmF0aW5nKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGJsYWNrXCIsXHJcbiAgICAgICAgICAgIG1hcmdpbjogXCIwcHhcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGltZyB3aWR0aD1cIjQwcHhcIiBoZWlnaHQ9XCI0MHB4XCIgc3JjPXtpbWFnZX0gYWx0PVwiYXZhdGFyXCIgLz5cclxuICAgICAgICAgIDxCb3ggY29tcG9uZW50PVwiZmllbGRzZXRcIiBib3JkZXJDb2xvcj1cInRyYW5zcGFyZW50XCI+XHJcbiAgICAgICAgICAgIDxzcGFuPntuYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMTBweFwiLCBtYXJnaW5MZWZ0OiBcIjJweFwiIH19PlxyXG4gICAgICAgICAgICAgIHtkYXRlLmdldEZ1bGxZZWFyKCkgK1xyXG4gICAgICAgICAgICAgICAgXCItXCIgK1xyXG4gICAgICAgICAgICAgICAgKGRhdGUuZ2V0TW9udGgoKSArIDEpICtcclxuICAgICAgICAgICAgICAgIFwiLVwiICtcclxuICAgICAgICAgICAgICAgIGRhdGUuZ2V0RGF0ZSgpfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIDxSYXRpbmdcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInJlYWQtb25seVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICByZWFkT25seVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxwIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWQgYmxhY2tcIiB9fT57bWVzc2FnZX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9HcmlkPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50U2VjdGlvbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==