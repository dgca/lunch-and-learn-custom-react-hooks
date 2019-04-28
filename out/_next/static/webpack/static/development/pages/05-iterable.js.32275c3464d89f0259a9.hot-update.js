webpackHotUpdate("static/development/pages/05-iterable.js",{

/***/ "./templates/Content/Content.react.js":
/*!********************************************!*\
  !*** ./templates/Content/Content.react.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _content_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content.scss */ "./templates/Content/content.scss");
/* harmony import */ var _content_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_content_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/dan/Development/iterables-generators-talk/templates/Content/Content.react.js";




function Content(_ref) {
  var title = _ref.title,
      children = _ref.children,
      iframe = _ref.iframe;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('content', {
      'content--centered': !children
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, title), children && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content__children",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, children), iframe && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    src: iframe,
    title: "CodePen",
    className: "content__iframe",
    onLoad: function onLoad(e) {
      debugger;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ })

})
//# sourceMappingURL=05-iterable.js.32275c3464d89f0259a9.hot-update.js.map