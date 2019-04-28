webpackHotUpdate("static/development/pages/index.js",{

/***/ "./templates/Wrapper/Wrapper.react.js":
/*!********************************************!*\
  !*** ./templates/Wrapper/Wrapper.react.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wrapper_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./wrapper.scss */ "./templates/Wrapper/wrapper.scss");
/* harmony import */ var _wrapper_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wrapper_scss__WEBPACK_IMPORTED_MODULE_11__);





var _jsxFileName = "/Users/dan/Development/iterables-generators-talk/templates/Wrapper/Wrapper.react.js";



 // import Router from 'next/router';




var routes = ['/', '/01-about', '/02-background', '/03-iteration-protocols', '/04-iterator', '/05-iterable', '/06-generator-intro', '/07-generator-function', '/08-generator-function-simpler', '/09-segue-into-practicality', '/10-an-incrementing-counter', '/11-co', '/12-augmenting-classes', '/13-linked-list', '/14-adding-iterability', '/15-an-interesting-side-effect', '/16-adding-hofs-to-our-class', '/17-async-intro', '/18-basic-async-generator', '/19-fetching-multiple-pages', '/20-fin'];
var Navigation = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(_class, _React$Component);

  function _class() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _class);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_class).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_class, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      global.document.addEventListener('keyup', function (e) {
        var x = _this;
        debugger;
      });
    }
  }, {
    key: "getPrevRoute",
    value: function getPrevRoute() {
      var routeIndex = routes.indexOf(this.props.router.pathname);
      return routes[routeIndex - 1];
    }
  }, {
    key: "getNextRoute",
    value: function getNextRoute() {
      var routeIndex = routes.indexOf(this.props.router.pathname);
      return routes[routeIndex + 1];
    }
  }, {
    key: "render",
    value: function render() {
      var router = this.props.router;
      var prevRoute = this.getPrevRoute();
      var nextRoute = this.getNextRoute();
      var PrevComponent = prevRoute ? next_link__WEBPACK_IMPORTED_MODULE_7___default.a : 'div';
      var NextComponent = nextRoute ? next_link__WEBPACK_IMPORTED_MODULE_7___default.a : 'div';
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(PrevComponent, {
        href: prevRoute,
        ref: this.prevRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        role: "img",
        "aria-label": "previous slide",
        "data-disabled": !prevRoute,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "\uD83D\uDC48")), "\xA0", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "current-page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, /\/(\d+)/.exec(router.pathname) && /\/(\d+)/.exec(router.pathname)[1]), "\xA0", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(NextComponent, {
        href: nextRoute,
        ref: this.nextRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        role: "img",
        "aria-label": "next-slide",
        "data-disabled": !nextRoute,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "\uD83D\uDC49")));
    }
  }]);

  return _class;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component));

function Wrapper(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://use.fontawesome.com/releases/v5.8.1/css/all.css",
    integrity: "sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf",
    crossOrigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "wrapper ".concat(className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, children), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Navigation, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }));
}

Wrapper.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string
};
Wrapper.defaultProps = {
  className: ''
};
/* harmony default export */ __webpack_exports__["default"] = (Wrapper);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=index.js.6e537b1b7c9b955bcccf.hot-update.js.map