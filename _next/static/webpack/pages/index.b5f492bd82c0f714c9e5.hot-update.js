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
})(["list-style:none;display:flex;cursor:url('https://res.cloudinary.com/instacloneapp/image/upload/v1622223328/shivansh.xyz/surprised_tl73ho.png');li:nth-child(2){margin:0px 20px;}li:nth-child(4){margin:0px 20px;}@media (max-width:768px){display:none;}"]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanMiXSwibmFtZXMiOlsiTmF2Iiwic3R5bGVkIiwiTG9nbyIsInRoZW1lIiwiY29sb3JzIiwiZ3JleURhcmsiLCJNZW51IiwiU29jaWFscyIsIkl0ZW0iLCJJdGVtTGluayIsIk5hdkljb24iLCJMaW5lIiwicHJvcHMiLCJvcGVuIiwiT3ZlcmxheSIsIk92ZXJsYXlNZW51IiwiTmF2YmFyIiwidmFyaWFudCIsInVzZVN0YXRlIiwidG9nZ2xlIiwidG9nZ2xlTmF2IiwibGF1bmNoQ3Jpc3AiLCJzZXRMYXVuY2hDcmlzcCIsIlJlYWN0Iiwid2luZG93IiwiJGNyaXNwIiwiQ1JJU1BfV0VCU0lURV9JRCIsImQiLCJkb2N1bWVudCIsInMiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiYXN5bmMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImFwcGVuZENoaWxkIiwicHVzaCIsImludmVydENvbG9yIiwiaGV4IiwiYnciLCJpbmRleE9mIiwic2xpY2UiLCJsZW5ndGgiLCJFcnJvciIsInIiLCJwYXJzZUludCIsImciLCJiIiwidG9TdHJpbmciLCJwYWRaZXJvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxHQUFHLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLG9IQUFUO0tBQU1ELEc7QUFZTixJQUFNRSxJQUFJLEdBQUdELG9FQUFIO0FBQUE7QUFBQTtBQUFBLG1DQUdDO0FBQUEsTUFBR0UsS0FBSCxRQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLFFBQTVCO0FBQUEsQ0FIRCxDQUFWO01BQU1ILEk7QUFNTixJQUFNSSxJQUFJLEdBQUdMLG9FQUFIO0FBQUE7QUFBQTtBQUFBLGdRQUFWO01BQU1LLEk7QUFlTixJQUFNQyxPQUFPLEdBQUdOLG9FQUFIO0FBQUE7QUFBQTtBQUFBLDZHQUFiO01B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RixRQUFRLENBQUNQLEdBQUcsQ0FBQ0csS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLENBQUQsRUFBa0IsRUFBbEIsQ0FGaEI7O0FBR0EsTUFBSUYsRUFBSixFQUFRO0FBQ0o7QUFDQSxXQUFRSyxDQUFDLEdBQUcsS0FBSixHQUFZRSxDQUFDLEdBQUcsS0FBaEIsR0FBd0JDLENBQUMsR0FBRyxLQUE3QixHQUFzQyxHQUF0QyxHQUNELFNBREMsR0FFRCxTQUZOO0FBR0gsR0FuQnlCLENBb0IxQjs7O0FBQ0FILEdBQUMsR0FBRyxDQUFDLE1BQU1BLENBQVAsRUFBVUksUUFBVixDQUFtQixFQUFuQixDQUFKO0FBQ0FGLEdBQUMsR0FBRyxDQUFDLE1BQU1BLENBQVAsRUFBVUUsUUFBVixDQUFtQixFQUFuQixDQUFKO0FBQ0FELEdBQUMsR0FBRyxDQUFDLE1BQU1BLENBQVAsRUFBVUMsUUFBVixDQUFtQixFQUFuQixDQUFKLENBdkIwQixDQXdCMUI7O0FBQ0EsU0FBTyxNQUFNQyxPQUFPLENBQUNMLENBQUQsQ0FBYixHQUFtQkssT0FBTyxDQUFDSCxDQUFELENBQTFCLEdBQWdDRyxPQUFPLENBQUNGLENBQUQsQ0FBOUM7QUFDSCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iNWY0OTJiZDgyYzBmNzE0YzllNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7Y3JlYXRlR2xvYmFsU3R5bGV9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmNvbnN0IE5hdiA9IHN0eWxlZC5uYXZgXHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDl2aDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIC8vIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudmFyaWFudH07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcblxyXG5cclxuY29uc3QgTG9nbyA9IHN0eWxlZC5oMWBcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIC8vIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnZhcmlhbnQ9PT0nI2ZmZic/KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmdyZXlEYXJrOicjZmZmJ307XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmdyZXlEYXJrfVxyXG5gO1xyXG5cclxuY29uc3QgTWVudSA9IHN0eWxlZC51bGBcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgY3Vyc29yOiB1cmwoJ2h0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2luc3RhY2xvbmVhcHAvaW1hZ2UvdXBsb2FkL3YxNjIyMjIzMzI4L3NoaXZhbnNoLnh5ei9zdXJwcmlzZWRfdGw3M2hvLnBuZycpO1xyXG4gIGxpOm50aC1jaGlsZCgyKSB7XHJcbiAgICBtYXJnaW46IDBweCAyMHB4O1xyXG4gIH1cclxuICBsaTpudGgtY2hpbGQoNCkge1xyXG4gICAgbWFyZ2luOiAwcHggMjBweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbmA7XHJcbmNvbnN0IFNvY2lhbHMgPSBzdHlsZWQudWxgXHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICBsaTpudGgtY2hpbGQoMikge1xyXG4gICAgbWFyZ2luOiAwcHggMjBweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBJdGVtID0gc3R5bGVkLmxpYFxyXG5gO1xyXG5jb25zdCBJdGVtTGluayA9IHN0eWxlZC5hYFxyXG4gIC8vIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnZhcmlhbnQ9PT0nI2ZmZic/KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmdyZXlEYXJrOicjZmZmJ307XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmdyZXlEYXJrfVxyXG5cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbmA7XHJcblxyXG4vLyBjb25zdCBMaW5rID0gc3R5bGVkLmFgXHJcbi8vICAgY29sb3I6IHdoaXRlO1xyXG4vLyAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbi8vICAgOmhvdmVyIHtcclxuLy8gICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4vLyAgIH1cclxuLy8gYDtcclxuXHJcbmNvbnN0IE5hdkljb24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgTGluZSA9IHN0eWxlZC5zcGFuYFxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGVhc2UtaW4tb3V0O1xyXG5cclxuICA6bnRoLWNoaWxkKDIpIHtcclxuICAgIHdpZHRoOiAke3Byb3BzID0+IChwcm9wcy5vcGVuID8gXCI0MCVcIiA6IFwiNzAlXCIpfTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBPdmVybGF5ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAke3Byb3BzID0+IChwcm9wcy5vcGVuID8gXCI5MXZoXCIgOiAwKX07XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGJhY2tncm91bmQ6ICMxYzIwMjI7XHJcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuNHMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBPdmVybGF5TWVudSA9IHN0eWxlZC51bGBcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA0NSU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblxyXG4gIGxpIHtcclxuICAgIG9wYWNpdHk6ICR7cHJvcHMgPT4gKHByb3BzLm9wZW4gPyAxIDogMCl9O1xyXG4gICAgLy8gZm9udC1zaXplOiAyNXB4O1xyXG4gICAgbWFyZ2luOiA1MHB4IDBweDtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gIGxpOm50aC1jaGlsZCgyKSB7XHJcbiAgICBtYXJnaW46IDUwcHggMHB4O1xyXG4gIH1cclxuYDtcclxuY29uc3QgTmF2YmFyID0gKHt2YXJpYW50fSkgPT4ge1xyXG4gIFxyXG5cclxuY29uc3QgW3RvZ2dsZSwgdG9nZ2xlTmF2XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuY29uc3QgW2xhdW5jaENyaXNwLCBzZXRMYXVuY2hDcmlzcF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gIGlmKGxhdW5jaENyaXNwPT09dHJ1ZSlcclxuICB7d2luZG93LiRjcmlzcCA9IFtdO1xyXG4gIHdpbmRvdy5DUklTUF9XRUJTSVRFX0lEID0gXCJiZWFiMWIyYS01NjQ3LTRlMTUtOTc5Yi05ZjQ4YmI4OGExMzZcIjtcclxuICAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGQgPSBkb2N1bWVudDtcclxuICAgIHZhciBzID0gZC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG4gICAgcy5zcmMgPSBcImh0dHBzOi8vY2xpZW50LmNyaXNwLmNoYXQvbC5qc1wiO1xyXG4gICAgcy5hc3luYyA9IDE7XHJcbiAgICBkLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXS5hcHBlbmRDaGlsZChzKTtcclxuICB9KSgpO1xyXG4gIHdpbmRvdy4kY3Jpc3AucHVzaChbXCJkb1wiLCBcImNoYXQ6b3BlblwiXSk7XHJcbn1cclxufSxbbGF1bmNoQ3Jpc3BdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TmF2IHZhcmlhbnQ9e3ZhcmlhbnR9PlxyXG4gICAgICAgIDxMb2dvIHZhcmlhbnQ9e3ZhcmlhbnR9PlxyXG4gICAgICAgICAgICBTaGl2YW5zaCBNZWhlbmRpcmF0dGFcclxuICAgICAgICA8L0xvZ28+XHJcbiAgICAgICAgPE1lbnU+XHJcbiAgICAgICAgICA8SXRlbT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPEl0ZW1MaW5rIHZhcmlhbnQ9e3ZhcmlhbnR9PlxyXG4gICAgICAgICAgICAgIGFib3V0XHJcbiAgICAgICAgICAgIDwvSXRlbUxpbms+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvSXRlbT5cclxuICAgICAgICAgIDxJdGVtPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2V4cGVyaWVuY2VcIj5cclxuICAgICAgICAgICAgPEl0ZW1MaW5rIHZhcmlhbnQ9e3ZhcmlhbnR9PlxyXG4gICAgICAgICAgICBleHBlcmllbmNlXHJcbiAgICAgICAgICAgIDwvSXRlbUxpbms+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvSXRlbT5cclxuICAgICAgICAgIDxJdGVtPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzXCI+XHJcbiAgICAgICAgICAgIDxJdGVtTGluayB2YXJpYW50PXt2YXJpYW50fT5cclxuICAgICAgICAgICAgcHJvamVjdHNcclxuICAgICAgICAgICAgPC9JdGVtTGluaz5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9JdGVtPlxyXG4gICAgICAgICAgPEl0ZW0+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYmxvZ1wiPlxyXG4gICAgICAgICAgICA8SXRlbUxpbmsgdmFyaWFudD17dmFyaWFudH0+XHJcbiAgICAgICAgICAgIGJsb2dcclxuICAgICAgICAgICAgPC9JdGVtTGluaz5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9JdGVtPlxyXG4gICAgICAgICAgPEl0ZW0gb25DbGljaz17KCk9PnNldExhdW5jaENyaXNwKHRydWUpfT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgY29udGFjdFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIDwvSXRlbT5cclxuICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgPFNvY2lhbHM+XHJcbiAgICAgICAgICB7LyogPEl0ZW0+XHJcbiAgICAgICAgICAgIDxJdGVtTGluayB2YXJpYW50PXt2YXJpYW50fSB0YXJnZXQ9XCIjXCIgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vaWdvcl9kdW1lbmNpYy9cIj5cclxuICAgICAgICAgICAgICBJbnN0YWdyYW1cclxuICAgICAgICAgICAgPC9JdGVtTGluaz5cclxuICAgICAgICAgIDwvSXRlbT4gKi99XHJcbiAgICAgICAgICA8SXRlbT5cclxuICAgICAgICAgICAgPEl0ZW1MaW5rIHZhcmlhbnQ9e3ZhcmlhbnR9IHRhcmdldD1cIiNcIiBocmVmPVwiaHR0cHM6Ly93d3cuYmVoYW5jZS5uZXQvaWdvcmR1bWVuY2ljXCI+XHJcbiAgICAgICAgICAgICAgQmVoYW5jZVxyXG4gICAgICAgICAgICA8L0l0ZW1MaW5rPlxyXG4gICAgICAgICAgPC9JdGVtPlxyXG4gICAgICAgICAgPEl0ZW0+XHJcbiAgICAgICAgICAgIDxJdGVtTGluayB2YXJpYW50PXt2YXJpYW50fSB0YXJnZXQ9XCIjXCIgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9zaGl2YW5zaG1laGVuZGlyYXR0YS9cIj5cclxuICAgICAgICAgICAgICBMaW5rZWRpblxyXG4gICAgICAgICAgICA8L0l0ZW1MaW5rPlxyXG4gICAgICAgICAgPC9JdGVtPlxyXG4gICAgICAgIDwvU29jaWFscz5cclxuICAgICAgICA8TmF2SWNvbiBvbkNsaWNrPXsoKSA9PiB0b2dnbGVOYXYoIXRvZ2dsZSl9PlxyXG4gICAgICAgICAgPExpbmUgb3Blbj17dG9nZ2xlfSAvPlxyXG4gICAgICAgICAgPExpbmUgb3Blbj17dG9nZ2xlfSAvPlxyXG4gICAgICAgICAgPExpbmUgb3Blbj17dG9nZ2xlfSAvPlxyXG4gICAgICAgIDwvTmF2SWNvbj5cclxuICAgICAgPC9OYXY+XHJcbiAgICAgIDxPdmVybGF5IG9wZW49e3RvZ2dsZX0+XHJcbiAgICAgICAgPE92ZXJsYXlNZW51IG9wZW49e3RvZ2dsZX0+XHJcbiAgICAgICAgICA8SXRlbT5cclxuICAgICAgICAgICAgPExpbmsgdGFyZ2V0PVwiI1wiIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2lnb3JfZHVtZW5jaWMvXCI+XHJcbiAgICAgICAgICAgICAgSW5zdGFncmFtXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvSXRlbT5cclxuICAgICAgICAgIDxJdGVtPlxyXG4gICAgICAgICAgICA8TGluayB0YXJnZXQ9XCIjXCIgaHJlZj1cImh0dHBzOi8vd3d3LmJlaGFuY2UubmV0L2lnb3JkdW1lbmNpY1wiPlxyXG4gICAgICAgICAgICAgIEJlaGFuY2VcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9JdGVtPlxyXG4gICAgICAgICAgPEl0ZW0+XHJcbiAgICAgICAgICAgIDxMaW5rIHRhcmdldD1cIiNcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0lnb3IxNzhcIj5cclxuICAgICAgICAgICAgICBHaXRodWJcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9JdGVtPlxyXG4gICAgICAgIDwvT3ZlcmxheU1lbnU+XHJcbiAgICAgIDwvT3ZlcmxheT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcblxyXG5cclxuZnVuY3Rpb24gaW52ZXJ0Q29sb3IoaGV4LCBidykge1xyXG4gICAgaWYgKGhleC5pbmRleE9mKCcjJykgPT09IDApIHtcclxuICAgICAgICBoZXggPSBoZXguc2xpY2UoMSk7XHJcbiAgICB9XHJcbiAgICAvLyBjb252ZXJ0IDMtZGlnaXQgaGV4IHRvIDYtZGlnaXRzLlxyXG4gICAgaWYgKGhleC5sZW5ndGggPT09IDMpIHtcclxuICAgICAgICBoZXggPSBoZXhbMF0gKyBoZXhbMF0gKyBoZXhbMV0gKyBoZXhbMV0gKyBoZXhbMl0gKyBoZXhbMl07XHJcbiAgICB9XHJcbiAgICBpZiAoaGV4Lmxlbmd0aCAhPT0gNikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBIRVggY29sb3IuJyk7XHJcbiAgICB9XHJcbiAgICB2YXIgciA9IHBhcnNlSW50KGhleC5zbGljZSgwLCAyKSwgMTYpLFxyXG4gICAgICAgIGcgPSBwYXJzZUludChoZXguc2xpY2UoMiwgNCksIDE2KSxcclxuICAgICAgICBiID0gcGFyc2VJbnQoaGV4LnNsaWNlKDQsIDYpLCAxNik7XHJcbiAgICBpZiAoYncpIHtcclxuICAgICAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zOTQzMDIzLzExMjczMVxyXG4gICAgICAgIHJldHVybiAociAqIDAuMjk5ICsgZyAqIDAuNTg3ICsgYiAqIDAuMTE0KSA+IDE4NlxyXG4gICAgICAgICAgICA/ICcjMDAwMDAwJ1xyXG4gICAgICAgICAgICA6ICcjRkZGRkZGJztcclxuICAgIH1cclxuICAgIC8vIGludmVydCBjb2xvciBjb21wb25lbnRzXHJcbiAgICByID0gKDI1NSAtIHIpLnRvU3RyaW5nKDE2KTtcclxuICAgIGcgPSAoMjU1IC0gZykudG9TdHJpbmcoMTYpO1xyXG4gICAgYiA9ICgyNTUgLSBiKS50b1N0cmluZygxNik7XHJcbiAgICAvLyBwYWQgZWFjaCB3aXRoIHplcm9zIGFuZCByZXR1cm5cclxuICAgIHJldHVybiBcIiNcIiArIHBhZFplcm8ocikgKyBwYWRaZXJvKGcpICsgcGFkWmVybyhiKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=