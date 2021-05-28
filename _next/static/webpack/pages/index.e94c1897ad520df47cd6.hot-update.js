self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Admin\\Documents\\personal-website\\shivanshmehendiratta\\components\\Navbar.js",
    _this = undefined,
    _s = $RefreshSig$();





var Nav = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.nav.withConfig({
  displayName: "Navbar__Nav",
  componentId: "zy1rtz-0"
})(["padding:0 20px;min-height:9vh;background:#fff;display:flex;justify-content:space-between;align-items:center;"]);
_c = Nav;
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.h1.withConfig({
  displayName: "Navbar__Logo",
  componentId: "zy1rtz-1"
})(["font-weight:400;color:", ""], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.greyDark;
});
_c2 = Logo;
var Menu = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.ul.withConfig({
  displayName: "Navbar__Menu",
  componentId: "zy1rtz-2"
})(["list-style:none;display:flex;cursor:url('https://res.cloudinary.com/instacloneapp/image/upload/c_fit,h_32,w_32/v1622223328/shivansh.xyz/surprised_tl73ho.png'),auto;li:nth-child(2){margin:0px 20px;}li:nth-child(4){margin:0px 20px;}@media (max-width:768px){display:none;}"]);
_c3 = Menu;
var Socials = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.ul.withConfig({
  displayName: "Navbar__Socials",
  componentId: "zy1rtz-3"
})(["list-style:none;display:flex;li:nth-child(2){margin:0px 20px;}@media (max-width:768px){display:none;}"]);
_c4 = Socials;
var Item = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.li.withConfig({
  displayName: "Navbar__Item",
  componentId: "zy1rtz-4"
})([""]);
_c5 = Item;
var ItemLink = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.a.withConfig({
  displayName: "Navbar__ItemLink",
  componentId: "zy1rtz-5"
})(["color:", " cursor:pointer;"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.greyDark;
}); // const Link = styled.a`
//   color: white;
//   text-decoration: none;
//   :hover {
//     text-decoration: underline;
//   }
// `;

_c6 = ItemLink;
var NavIcon = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.button.withConfig({
  displayName: "Navbar__NavIcon",
  componentId: "zy1rtz-6"
})(["background:none;cursor:pointer;border:none;outline:none;@media (min-width:769px){display:none;}"]);
_c7 = NavIcon;
var Line = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.span.withConfig({
  displayName: "Navbar__Line",
  componentId: "zy1rtz-7"
})(["display:block;border-radius:50px;width:25px;height:3px;margin:5px;background-color:#fff;transition:width 0.4s ease-in-out;:nth-child(2){width:", ";}"], function (props) {
  return props.open ? "40%" : "70%";
});
_c8 = Line;
var Overlay = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "Navbar__Overlay",
  componentId: "zy1rtz-8"
})(["position:absolute;height:", ";width:100vw;background:#1c2022;transition:height 0.4s ease-in-out;@media (min-width:769px){display:none;}"], function (props) {
  return props.open ? "91vh" : 0;
});
_c9 = Overlay;
var OverlayMenu = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.ul.withConfig({
  displayName: "Navbar__OverlayMenu",
  componentId: "zy1rtz-9"
})(["list-style:none;position:absolute;left:50%;top:45%;transform:translate(-50%,-50%);li{opacity:", ";margin:50px 0px;transition:opacity 0.4s ease-in-out;}li:nth-child(2){margin:50px 0px;}"], function (props) {
  return props.open ? 1 : 0;
});
_c10 = OverlayMenu;

var Navbar = function Navbar(_ref3) {
  _s();

  var variant = _ref3.variant;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      toggle = _useState[0],
      toggleNav = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      launchCrisp = _useState2[0],
      setLaunchCrisp = _useState2[1];

  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function () {
    if (launchCrisp === true) {
      window.$crisp = [];
      window.CRISP_WEBSITE_ID = "beab1b2a-5647-4e15-979b-9f48bb88a136";

      (function () {
        var d = document;
        var s = d.createElement("script");
        s.src = "https://client.crisp.chat/l.js";
        s.async = 1;
        d.getElementsByTagName("head")[0].appendChild(s);
      })();

      window.$crisp.push(["do", "chat:open"]);
    }
  }, [launchCrisp]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Nav, {
      variant: variant,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Logo, {
        variant: variant,
        children: "Shivansh Mehendiratta"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Menu, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ItemLink, {
              variant: variant,
              children: "about"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/experience",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ItemLink, {
              variant: variant,
              children: "experience"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/projects",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ItemLink, {
              variant: variant,
              children: "projects"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/blog",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ItemLink, {
              variant: variant,
              children: "blog"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {
          onClick: function onClick() {
            return setLaunchCrisp(true);
          },
          children: "contact"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Socials, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ItemLink, {
            variant: variant,
            target: "#",
            href: "https://www.behance.net/igordumencic",
            children: "Behance"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ItemLink, {
            variant: variant,
            target: "#",
            href: "https://www.linkedin.com/in/shivanshmehendiratta/",
            children: "Linkedin"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavIcon, {
        onClick: function onClick() {
          return toggleNav(!toggle);
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Line, {
          open: toggle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Line, {
          open: toggle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Line, {
          open: toggle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Overlay, {
      open: toggle,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(OverlayMenu, {
        open: toggle,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            target: "#",
            href: "https://www.instagram.com/igor_dumencic/",
            children: "Instagram"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            target: "#",
            href: "https://www.behance.net/igordumencic",
            children: "Behance"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            target: "#",
            href: "https://github.com/Igor178",
            children: "Github"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Navbar, "78egygbBrDvh6hP6k0cUgTCKtl0=");

_c11 = Navbar;
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

function invertColor(hex, bw) {
  if (hex.indexOf('#') === 0) {
    hex = hex.slice(1);
  } // convert 3-digit hex to 6-digits.


  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  if (hex.length !== 6) {
    throw new Error('Invalid HEX color.');
  }

  var r = parseInt(hex.slice(0, 2), 16),
      g = parseInt(hex.slice(2, 4), 16),
      b = parseInt(hex.slice(4, 6), 16);

  if (bw) {
    // http://stackoverflow.com/a/3943023/112731
    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#000000' : '#FFFFFF';
  } // invert color components


  r = (255 - r).toString(16);
  g = (255 - g).toString(16);
  b = (255 - b).toString(16); // pad each with zeros and return

  return "#" + padZero(r) + padZero(g) + padZero(b);
}

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;

$RefreshReg$(_c, "Nav");
$RefreshReg$(_c2, "Logo");
$RefreshReg$(_c3, "Menu");
$RefreshReg$(_c4, "Socials");
$RefreshReg$(_c5, "Item");
$RefreshReg$(_c6, "ItemLink");
$RefreshReg$(_c7, "NavIcon");
$RefreshReg$(_c8, "Line");
$RefreshReg$(_c9, "Overlay");
$RefreshReg$(_c10, "OverlayMenu");
$RefreshReg$(_c11, "Navbar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanMiXSwibmFtZXMiOlsiTmF2Iiwic3R5bGVkIiwiTG9nbyIsInRoZW1lIiwiY29sb3JzIiwiZ3JleURhcmsiLCJNZW51IiwiU29jaWFscyIsIkl0ZW0iLCJJdGVtTGluayIsIk5hdkljb24iLCJMaW5lIiwicHJvcHMiLCJvcGVuIiwiT3ZlcmxheSIsIk92ZXJsYXlNZW51IiwiTmF2YmFyIiwidmFyaWFudCIsInVzZVN0YXRlIiwidG9nZ2xlIiwidG9nZ2xlTmF2IiwibGF1bmNoQ3Jpc3AiLCJzZXRMYXVuY2hDcmlzcCIsIlJlYWN0Iiwid2luZG93IiwiJGNyaXNwIiwiQ1JJU1BfV0VCU0lURV9JRCIsImQiLCJkb2N1bWVudCIsInMiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiYXN5bmMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImFwcGVuZENoaWxkIiwicHVzaCIsImludmVydENvbG9yIiwiaGV4IiwiYnciLCJpbmRleE9mIiwic2xpY2UiLCJsZW5ndGgiLCJFcnJvciIsInIiLCJwYXJzZUludCIsImciLCJiIiwidG9TdHJpbmciLCJwYWRaZXJvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxHQUFHLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLG9IQUFUO0tBQU1ELEc7QUFZTixJQUFNRSxJQUFJLEdBQUdELG9FQUFIO0FBQUE7QUFBQTtBQUFBLG1DQUdDO0FBQUEsTUFBR0UsS0FBSCxRQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLFFBQTVCO0FBQUEsQ0FIRCxDQUFWO01BQU1ILEk7QUFNTixJQUFNSSxJQUFJLEdBQUdMLG9FQUFIO0FBQUE7QUFBQTtBQUFBLHFSQUFWO01BQU1LLEk7QUFlTixJQUFNQyxPQUFPLEdBQUdOLG9FQUFIO0FBQUE7QUFBQTtBQUFBLDZHQUFiO01B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RixRQUFRLENBQUNQLEdBQUcsQ0FBQ0csS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLENBQUQsRUFBa0IsRUFBbEIsQ0FGaEI7O0FBR0EsTUFBSUYsRUFBSixFQUFRO0FBQ0o7QUFDQSxXQUFRSyxDQUFDLEdBQUcsS0FBSixHQUFZRSxDQUFDLEdBQUcsS0FBaEIsR0FBd0JDLENBQUMsR0FBRyxLQUE3QixHQUFzQyxHQUF0QyxHQUNELFNBREMsR0FFRCxTQUZOO0FBR0gsR0FuQnlCLENBb0IxQjs7O0FBQ0FILEdBQUMsR0FBRyxDQUFDLE1BQU1BLENBQVAsRUFBVUksUUFBVixDQUFtQixFQUFuQixDQUFKO0FBQ0FGLEdBQUMsR0FBRyxDQUFDLE1BQU1BLENBQVAsRUFBVUUsUUFBVixDQUFtQixFQUFuQixDQUFKO0FBQ0FELEdBQUMsR0FBRyxDQUFDLE1BQU1BLENBQVAsRUFBVUMsUUFBVixDQUFtQixFQUFuQixDQUFKLENBdkIwQixDQXdCMUI7O0FBQ0EsU0FBTyxNQUFNQyxPQUFPLENBQUNMLENBQUQsQ0FBYixHQUFtQkssT0FBTyxDQUFDSCxDQUFELENBQTFCLEdBQWdDRyxPQUFPLENBQUNGLENBQUQsQ0FBOUM7QUFDSCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lOTRjMTg5N2FkNTIwZGY0N2NkNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7Y3JlYXRlR2xvYmFsU3R5bGV9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmNvbnN0IE5hdiA9IHN0eWxlZC5uYXZgXHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDl2aDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIC8vIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudmFyaWFudH07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcblxyXG5cclxuY29uc3QgTG9nbyA9IHN0eWxlZC5oMWBcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIC8vIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnZhcmlhbnQ9PT0nI2ZmZic/KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmdyZXlEYXJrOicjZmZmJ307XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmdyZXlEYXJrfVxyXG5gO1xyXG5cclxuY29uc3QgTWVudSA9IHN0eWxlZC51bGBcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgY3Vyc29yOiB1cmwoJ2h0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2luc3RhY2xvbmVhcHAvaW1hZ2UvdXBsb2FkL2NfZml0LGhfMzIsd18zMi92MTYyMjIyMzMyOC9zaGl2YW5zaC54eXovc3VycHJpc2VkX3RsNzNoby5wbmcnKSwgYXV0bztcclxuICBsaTpudGgtY2hpbGQoMikge1xyXG4gICAgbWFyZ2luOiAwcHggMjBweDtcclxuICB9XHJcbiAgbGk6bnRoLWNoaWxkKDQpIHtcclxuICAgIG1hcmdpbjogMHB4IDIwcHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBTb2NpYWxzID0gc3R5bGVkLnVsYFxyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgbGk6bnRoLWNoaWxkKDIpIHtcclxuICAgIG1hcmdpbjogMHB4IDIwcHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSXRlbSA9IHN0eWxlZC5saWBcclxuYDtcclxuY29uc3QgSXRlbUxpbmsgPSBzdHlsZWQuYWBcclxuICAvLyBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy52YXJpYW50PT09JyNmZmYnPyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ncmV5RGFyazonI2ZmZid9O1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ncmV5RGFya31cclxuXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5gO1xyXG5cclxuLy8gY29uc3QgTGluayA9IHN0eWxlZC5hYFxyXG4vLyAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4vLyAgIDpob3ZlciB7XHJcbi8vICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuLy8gICB9XHJcbi8vIGA7XHJcblxyXG5jb25zdCBOYXZJY29uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IExpbmUgPSBzdHlsZWQuc3BhbmBcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogM3B4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggMC40cyBlYXNlLWluLW91dDtcclxuXHJcbiAgOm50aC1jaGlsZCgyKSB7XHJcbiAgICB3aWR0aDogJHtwcm9wcyA9PiAocHJvcHMub3BlbiA/IFwiNDAlXCIgOiBcIjcwJVwiKX07XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgT3ZlcmxheSA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogJHtwcm9wcyA9PiAocHJvcHMub3BlbiA/IFwiOTF2aFwiIDogMCl9O1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBiYWNrZ3JvdW5kOiAjMWMyMDIyO1xyXG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjRzIGVhc2UtaW4tb3V0O1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgT3ZlcmxheU1lbnUgPSBzdHlsZWQudWxgXHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogNDUlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cclxuICBsaSB7XHJcbiAgICBvcGFjaXR5OiAke3Byb3BzID0+IChwcm9wcy5vcGVuID8gMSA6IDApfTtcclxuICAgIC8vIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIG1hcmdpbjogNTBweCAwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICBsaTpudGgtY2hpbGQoMikge1xyXG4gICAgbWFyZ2luOiA1MHB4IDBweDtcclxuICB9XHJcbmA7XHJcbmNvbnN0IE5hdmJhciA9ICh7dmFyaWFudH0pID0+IHtcclxuICBcclxuXHJcbmNvbnN0IFt0b2dnbGUsIHRvZ2dsZU5hdl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbmNvbnN0IFtsYXVuY2hDcmlzcCwgc2V0TGF1bmNoQ3Jpc3BdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5SZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICBpZihsYXVuY2hDcmlzcD09PXRydWUpXHJcbiAge3dpbmRvdy4kY3Jpc3AgPSBbXTtcclxuICB3aW5kb3cuQ1JJU1BfV0VCU0lURV9JRCA9IFwiYmVhYjFiMmEtNTY0Ny00ZTE1LTk3OWItOWY0OGJiODhhMTM2XCI7XHJcbiAgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBkID0gZG9jdW1lbnQ7XHJcbiAgICB2YXIgcyA9IGQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuICAgIHMuc3JjID0gXCJodHRwczovL2NsaWVudC5jcmlzcC5jaGF0L2wuanNcIjtcclxuICAgIHMuYXN5bmMgPSAxO1xyXG4gICAgZC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQocyk7XHJcbiAgfSkoKTtcclxuICB3aW5kb3cuJGNyaXNwLnB1c2goW1wiZG9cIiwgXCJjaGF0Om9wZW5cIl0pO1xyXG59XHJcbn0sW2xhdW5jaENyaXNwXSlcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE5hdiB2YXJpYW50PXt2YXJpYW50fT5cclxuICAgICAgICA8TG9nbyB2YXJpYW50PXt2YXJpYW50fT5cclxuICAgICAgICAgICAgU2hpdmFuc2ggTWVoZW5kaXJhdHRhXHJcbiAgICAgICAgPC9Mb2dvPlxyXG4gICAgICAgIDxNZW51PlxyXG4gICAgICAgICAgPEl0ZW0+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxJdGVtTGluayB2YXJpYW50PXt2YXJpYW50fT5cclxuICAgICAgICAgICAgICBhYm91dFxyXG4gICAgICAgICAgICA8L0l0ZW1MaW5rPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICAgICA8SXRlbT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9leHBlcmllbmNlXCI+XHJcbiAgICAgICAgICAgIDxJdGVtTGluayB2YXJpYW50PXt2YXJpYW50fT5cclxuICAgICAgICAgICAgZXhwZXJpZW5jZVxyXG4gICAgICAgICAgICA8L0l0ZW1MaW5rPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICAgICA8SXRlbT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0c1wiPlxyXG4gICAgICAgICAgICA8SXRlbUxpbmsgdmFyaWFudD17dmFyaWFudH0+XHJcbiAgICAgICAgICAgIHByb2plY3RzXHJcbiAgICAgICAgICAgIDwvSXRlbUxpbms+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvSXRlbT5cclxuICAgICAgICAgIDxJdGVtPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2Jsb2dcIj5cclxuICAgICAgICAgICAgPEl0ZW1MaW5rIHZhcmlhbnQ9e3ZhcmlhbnR9PlxyXG4gICAgICAgICAgICBibG9nXHJcbiAgICAgICAgICAgIDwvSXRlbUxpbms+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvSXRlbT5cclxuICAgICAgICAgIDxJdGVtIG9uQ2xpY2s9eygpPT5zZXRMYXVuY2hDcmlzcCh0cnVlKX0+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGNvbnRhY3RcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICAgPC9NZW51PlxyXG4gICAgICAgIDxTb2NpYWxzPlxyXG4gICAgICAgICAgey8qIDxJdGVtPlxyXG4gICAgICAgICAgICA8SXRlbUxpbmsgdmFyaWFudD17dmFyaWFudH0gdGFyZ2V0PVwiI1wiIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2lnb3JfZHVtZW5jaWMvXCI+XHJcbiAgICAgICAgICAgICAgSW5zdGFncmFtXHJcbiAgICAgICAgICAgIDwvSXRlbUxpbms+XHJcbiAgICAgICAgICA8L0l0ZW0+ICovfVxyXG4gICAgICAgICAgPEl0ZW0+XHJcbiAgICAgICAgICAgIDxJdGVtTGluayB2YXJpYW50PXt2YXJpYW50fSB0YXJnZXQ9XCIjXCIgaHJlZj1cImh0dHBzOi8vd3d3LmJlaGFuY2UubmV0L2lnb3JkdW1lbmNpY1wiPlxyXG4gICAgICAgICAgICAgIEJlaGFuY2VcclxuICAgICAgICAgICAgPC9JdGVtTGluaz5cclxuICAgICAgICAgIDwvSXRlbT5cclxuICAgICAgICAgIDxJdGVtPlxyXG4gICAgICAgICAgICA8SXRlbUxpbmsgdmFyaWFudD17dmFyaWFudH0gdGFyZ2V0PVwiI1wiIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vc2hpdmFuc2htZWhlbmRpcmF0dGEvXCI+XHJcbiAgICAgICAgICAgICAgTGlua2VkaW5cclxuICAgICAgICAgICAgPC9JdGVtTGluaz5cclxuICAgICAgICAgIDwvSXRlbT5cclxuICAgICAgICA8L1NvY2lhbHM+XHJcbiAgICAgICAgPE5hdkljb24gb25DbGljaz17KCkgPT4gdG9nZ2xlTmF2KCF0b2dnbGUpfT5cclxuICAgICAgICAgIDxMaW5lIG9wZW49e3RvZ2dsZX0gLz5cclxuICAgICAgICAgIDxMaW5lIG9wZW49e3RvZ2dsZX0gLz5cclxuICAgICAgICAgIDxMaW5lIG9wZW49e3RvZ2dsZX0gLz5cclxuICAgICAgICA8L05hdkljb24+XHJcbiAgICAgIDwvTmF2PlxyXG4gICAgICA8T3ZlcmxheSBvcGVuPXt0b2dnbGV9PlxyXG4gICAgICAgIDxPdmVybGF5TWVudSBvcGVuPXt0b2dnbGV9PlxyXG4gICAgICAgICAgPEl0ZW0+XHJcbiAgICAgICAgICAgIDxMaW5rIHRhcmdldD1cIiNcIiBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9pZ29yX2R1bWVuY2ljL1wiPlxyXG4gICAgICAgICAgICAgIEluc3RhZ3JhbVxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICAgICA8SXRlbT5cclxuICAgICAgICAgICAgPExpbmsgdGFyZ2V0PVwiI1wiIGhyZWY9XCJodHRwczovL3d3dy5iZWhhbmNlLm5ldC9pZ29yZHVtZW5jaWNcIj5cclxuICAgICAgICAgICAgICBCZWhhbmNlXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvSXRlbT5cclxuICAgICAgICAgIDxJdGVtPlxyXG4gICAgICAgICAgICA8TGluayB0YXJnZXQ9XCIjXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9JZ29yMTc4XCI+XHJcbiAgICAgICAgICAgICAgR2l0aHViXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvSXRlbT5cclxuICAgICAgICA8L092ZXJsYXlNZW51PlxyXG4gICAgICA8L092ZXJsYXk+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGludmVydENvbG9yKGhleCwgYncpIHtcclxuICAgIGlmIChoZXguaW5kZXhPZignIycpID09PSAwKSB7XHJcbiAgICAgICAgaGV4ID0gaGV4LnNsaWNlKDEpO1xyXG4gICAgfVxyXG4gICAgLy8gY29udmVydCAzLWRpZ2l0IGhleCB0byA2LWRpZ2l0cy5cclxuICAgIGlmIChoZXgubGVuZ3RoID09PSAzKSB7XHJcbiAgICAgICAgaGV4ID0gaGV4WzBdICsgaGV4WzBdICsgaGV4WzFdICsgaGV4WzFdICsgaGV4WzJdICsgaGV4WzJdO1xyXG4gICAgfVxyXG4gICAgaWYgKGhleC5sZW5ndGggIT09IDYpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgSEVYIGNvbG9yLicpO1xyXG4gICAgfVxyXG4gICAgdmFyIHIgPSBwYXJzZUludChoZXguc2xpY2UoMCwgMiksIDE2KSxcclxuICAgICAgICBnID0gcGFyc2VJbnQoaGV4LnNsaWNlKDIsIDQpLCAxNiksXHJcbiAgICAgICAgYiA9IHBhcnNlSW50KGhleC5zbGljZSg0LCA2KSwgMTYpO1xyXG4gICAgaWYgKGJ3KSB7XHJcbiAgICAgICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzk0MzAyMy8xMTI3MzFcclxuICAgICAgICByZXR1cm4gKHIgKiAwLjI5OSArIGcgKiAwLjU4NyArIGIgKiAwLjExNCkgPiAxODZcclxuICAgICAgICAgICAgPyAnIzAwMDAwMCdcclxuICAgICAgICAgICAgOiAnI0ZGRkZGRic7XHJcbiAgICB9XHJcbiAgICAvLyBpbnZlcnQgY29sb3IgY29tcG9uZW50c1xyXG4gICAgciA9ICgyNTUgLSByKS50b1N0cmluZygxNik7XHJcbiAgICBnID0gKDI1NSAtIGcpLnRvU3RyaW5nKDE2KTtcclxuICAgIGIgPSAoMjU1IC0gYikudG9TdHJpbmcoMTYpO1xyXG4gICAgLy8gcGFkIGVhY2ggd2l0aCB6ZXJvcyBhbmQgcmV0dXJuXHJcbiAgICByZXR1cm4gXCIjXCIgKyBwYWRaZXJvKHIpICsgcGFkWmVybyhnKSArIHBhZFplcm8oYik7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9