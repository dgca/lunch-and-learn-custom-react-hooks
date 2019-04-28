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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _wrapper_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./wrapper.scss */ "./templates/Wrapper/wrapper.scss");
/* harmony import */ var _wrapper_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_wrapper_scss__WEBPACK_IMPORTED_MODULE_13__);







var _jsxFileName = "/Users/dan/Development/iterables-generators-talk/templates/Wrapper/Wrapper.react.js";








var routes = ['/', '/01-about', '/02-background', '/03-iteration-protocols', '/04-iterator', '/05-iterable', '/06-generator-intro', '/07-generator-function', '/08-generator-function-simpler', '/09-segue-into-practicality', '/10-an-incrementing-counter', '/11-co', '/12-augmenting-classes', '/13-linked-list', '/14-adding-iterability', '/15-an-interesting-side-effect', '/16-adding-hofs-to-our-class', '/17-async-intro', '/18-basic-async-generator', '/19-fetching-multiple-pages', '/20-fin'];
var Navigation = Object(next_router__WEBPACK_IMPORTED_MODULE_11__["withRouter"])(
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(_class2, _React$Component);

  function _class2() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _class2);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_class2)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleKeyNavigation", function (e) {
      if (e.key === 'ArrowLeft') {
        _this.navigateToRoute(_this.getPrevRoute());
      } else if (e.key === 'ArrowRight') {
        _this.navigateToRoute(_this.getNextRoute());
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_class2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      global.document.addEventListener('keyup', this.handleKeyNavigation);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      global.document.removeEventListener('keyup', this.handleKeyNavigation);
    }
  }, {
    key: "navigateToRoute",
    value: function navigateToRoute(route) {
      if (!route) {
        return;
      }

      next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push(route);
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
      var PrevComponent = prevRoute ? next_link__WEBPACK_IMPORTED_MODULE_9___default.a : 'div';
      var NextComponent = nextRoute ? next_link__WEBPACK_IMPORTED_MODULE_9___default.a : 'div';
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(PrevComponent, {
        href: prevRoute,
        ref: this.prevRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        role: "img",
        "aria-label": "previous slide",
        "data-disabled": !prevRoute,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "\uD83D\uDC48")), "\xA0", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "current-page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, /\/(\d+)/.exec(router.pathname) && /\/(\d+)/.exec(router.pathname)[1]), "\xA0", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(NextComponent, {
        href: nextRoute,
        ref: this.nextRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        role: "img",
        "aria-label": "next-slide",
        "data-disabled": !nextRoute,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "\uD83D\uDC49")));
    }
  }]);

  return _class2;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component));

function Wrapper(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://use.fontawesome.com/releases/v5.8.1/css/all.css",
    integrity: "sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf",
    crossOrigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "wrapper ".concat(className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, children), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Navigation, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }));
}

Wrapper.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string
};
Wrapper.defaultProps = {
  className: ''
};
/* harmony default export */ __webpack_exports__["default"] = (Wrapper);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=index.js.2df02a2fde221d3a6921.hot-update.js.map