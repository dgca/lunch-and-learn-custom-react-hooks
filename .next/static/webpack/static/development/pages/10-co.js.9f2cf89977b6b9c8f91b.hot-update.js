webpackHotUpdate("static/development/pages/10-co.js",{

/***/ "./templates/Wrapper/Wrapper.react.js":
/*!********************************************!*\
  !*** ./templates/Wrapper/Wrapper.react.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wrapper_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wrapper.scss */ "./templates/Wrapper/wrapper.scss");
/* harmony import */ var _wrapper_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wrapper_scss__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/dan/Development/iterables-generators-talk/templates/Wrapper/Wrapper.react.js";







var routes = ['/', '/01-about', '/02-background', '/03-iteration-protocols', '/04-iterator', '/05-iterable', '/06-generator-intro', '/07-generator-function', '/08-generator-function-simpler', '/09-segue-into-practicality', '/10-an-incrementing-counter', '/11-co', '/12-augmenting-your-classes'];
var Navigation = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(function (props) {
  var routeIndex = routes.indexOf(props.router.pathname);
  var prevRoute = routes[routeIndex - 1];
  var PrevComponent = prevRoute ? next_link__WEBPACK_IMPORTED_MODULE_2___default.a : 'div';
  var nextRoute = routes[routeIndex + 1];
  var NextComponent = nextRoute ? next_link__WEBPACK_IMPORTED_MODULE_2___default.a : 'div';
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navigation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PrevComponent, {
    href: prevRoute,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    role: "img",
    "aria-label": "previous slide",
    "data-disabled": !prevRoute,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "\uD83D\uDC48")), "\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NextComponent, {
    href: nextRoute,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    role: "img",
    "aria-label": "next-slide",
    "data-disabled": !nextRoute,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "\uD83D\uDC49")));
});

function Wrapper(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://use.fontawesome.com/releases/v5.8.1/css/all.css",
    integrity: "sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf",
    crossOrigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapper ".concat(className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Navigation, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }));
}

Wrapper.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Wrapper.defaultProps = {
  className: ''
};
/* harmony default export */ __webpack_exports__["default"] = (Wrapper);

/***/ })

})
//# sourceMappingURL=10-co.js.9f2cf89977b6b9c8f91b.hot-update.js.map