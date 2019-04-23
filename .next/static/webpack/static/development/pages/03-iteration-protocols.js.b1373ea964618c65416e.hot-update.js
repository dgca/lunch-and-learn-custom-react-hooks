webpackHotUpdate("static/development/pages/03-iteration-protocols.js",{

/***/ "./pages/03-iteration-protocols/index.js":
/*!***********************************************!*\
  !*** ./pages/03-iteration-protocols/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _templates_Wrapper_Wrapper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../templates/Wrapper/Wrapper.react */ "./templates/Wrapper/Wrapper.react.js");
/* harmony import */ var _templates_Content_Content_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../templates/Content/Content.react */ "./templates/Content/Content.react.js");
var _jsxFileName = "/Users/dan/Development/iterables-generators-talk/pages/03-iteration-protocols/index.js";




var content = "\n### The iterator protocol\n\nAn object is an `iterator` when it implements a `next()` method which returns an object with at least one of the following properties:\n\n1. `done`\n  * If `true`, the iterator is past the end of the iterated sequence. I.e. it's done iterating.\n2. `value`\n  * The current value returned by the iterator.\n\n---\n\n### The iterable protocol\n\nAn object is iterable when it implements a `@@iterator` method which returns an object that conforms to the iterator protocol.\n\n";

function Background() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_templates_Wrapper_Wrapper_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_templates_Content_Content_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, "Iteration protocols"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, {
    source: content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Background);

/***/ })

})
//# sourceMappingURL=03-iteration-protocols.js.b1373ea964618c65416e.hot-update.js.map