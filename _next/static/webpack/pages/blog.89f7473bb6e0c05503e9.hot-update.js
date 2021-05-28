self["webpackHotUpdate_N_E"]("pages/blog",{

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
})(["list-style:none;display:flex;cursor:url('https://res.cloudinary.com/instacloneapp/image/upload/t_media_lib_thumb/v1622223328/shivansh.xyz/surprised_tl73ho.png'),auto;li:nth-child(2){margin:0px 20px;}li:nth-child(4){margin:0px 20px;}@media (max-width:768px){display:none;}"]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanMiXSwibmFtZXMiOlsiTmF2Iiwic3R5bGVkIiwiTG9nbyIsInRoZW1lIiwiY29sb3JzIiwiZ3JleURhcmsiLCJNZW51IiwiU29jaWFscyIsIkl0ZW0iLCJJdGVtTGluayIsIk5hdkljb24iLCJMaW5lIiwicHJvcHMiLCJvcGVuIiwiT3ZlcmxheSIsIk92ZXJsYXlNZW51IiwiTmF2YmFyIiwidmFyaWFudCIsInVzZVN0YXRlIiwidG9nZ2xlIiwidG9nZ2xlTmF2IiwibGF1bmNoQ3Jpc3AiLCJzZXRMYXVuY2hDcmlzcCIsIlJlYWN0Iiwid2luZG93IiwiJGNyaXNwIiwiQ1JJU1BfV0VCU0lURV9JRCIsImQiLCJkb2N1bWVudCIsInMiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiYXN5bmMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImFwcGVuZENoaWxkIiwicHVzaCIsImludmVydENvbG9yIiwiaGV4IiwiYnciLCJpbmRleE9mIiwic2xpY2UiLCJsZW5ndGgiLCJFcnJvciIsInIiLCJwYXJzZUludCIsImciLCJiIiwidG9TdHJpbmciLCJwYWRaZXJvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxHQUFHLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLG9IQUFUO0tBQU1ELEc7QUFZTixJQUFNRSxJQUFJLEdBQUdELG9FQUFIO0FBQUE7QUFBQTtBQUFBLG1DQUdDO0FBQUEsTUFBR0UsS0FBSCxRQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLFFBQTVCO0FBQUEsQ0FIRCxDQUFWO01BQU1ILEk7QUFNTixJQUFNSSxJQUFJLEdBQUdMLG9FQUFIO0FBQUE7QUFBQTtBQUFBLHVSQUFWO01BQU1LLEk7QUFlTixJQUFNQyxPQUFPLEdBQUdOLG9FQUFIO0FBQUE7QUFBQTtBQUFBLDZHQUFiO01B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RixRQUFRLENBQUNQLEdBQUcsQ0FBQ0csS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLENBQUQsRUFBa0IsRUFBbEIsQ0FGaEI7O0FBR0EsTUFBSUYsRUFBSixFQUFRO0FBQ0o7QUFDQSxXQUFRSyxDQUFDLEdBQUcsS0FBSixHQUFZRSxDQUFDLEdBQUcsS0FBaEIsR0FBd0JDLENBQUMsR0FBRyxLQUE3QixHQUFzQyxHQUF0QyxHQUNELFNBREMsR0FFRCxTQUZOO0FBR0gsR0FuQnlCLENBb0IxQjs7O0FBQ0FILEdBQUMsR0FBRyxDQUFDLE1BQU1BLENBQVAsRUFBVUksUUFBVixDQUFtQixFQUFuQixDQUFKO0FBQ0FGLEdBQUMsR0FBRyxDQUFDLE1BQU1BLENBQVAsRUFBVUUsUUFBVixDQUFtQixFQUFuQixDQUFKO0FBQ0FELEdBQUMsR0FBRyxDQUFDLE1BQU1BLENBQVAsRUFBVUMsUUFBVixDQUFtQixFQUFuQixDQUFKLENBdkIwQixDQXdCMUI7O0FBQ0EsU0FBTyxNQUFNQyxPQUFPLENBQUNMLENBQUQsQ0FBYixHQUFtQkssT0FBTyxDQUFDSCxDQUFELENBQTFCLEdBQWdDRyxPQUFPLENBQUNGLENBQUQsQ0FBOUM7QUFDSCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9nLjg5Zjc0NzNiYjZlMGMwNTUwM2U5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtjcmVhdGVHbG9iYWxTdHlsZX0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuY29uc3QgTmF2ID0gc3R5bGVkLm5hdmBcclxuICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgbWluLWhlaWdodDogOXZoO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgLy8gYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy52YXJpYW50fTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuXHJcblxyXG5jb25zdCBMb2dvID0gc3R5bGVkLmgxYFxyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgLy8gY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudmFyaWFudD09PScjZmZmJz8oeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuZ3JleURhcms6JyNmZmYnfTtcclxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuZ3JleURhcmt9XHJcbmA7XHJcblxyXG5jb25zdCBNZW51ID0gc3R5bGVkLnVsYFxyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBjdXJzb3I6IHVybCgnaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vaW5zdGFjbG9uZWFwcC9pbWFnZS91cGxvYWQvdF9tZWRpYV9saWJfdGh1bWIvdjE2MjIyMjMzMjgvc2hpdmFuc2gueHl6L3N1cnByaXNlZF90bDczaG8ucG5nJyksIGF1dG87XHJcbiAgbGk6bnRoLWNoaWxkKDIpIHtcclxuICAgIG1hcmdpbjogMHB4IDIwcHg7XHJcbiAgfVxyXG4gIGxpOm50aC1jaGlsZCg0KSB7XHJcbiAgICBtYXJnaW46IDBweCAyMHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuYDtcclxuY29uc3QgU29jaWFscyA9IHN0eWxlZC51bGBcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIGxpOm50aC1jaGlsZCgyKSB7XHJcbiAgICBtYXJnaW46IDBweCAyMHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEl0ZW0gPSBzdHlsZWQubGlgXHJcbmA7XHJcbmNvbnN0IEl0ZW1MaW5rID0gc3R5bGVkLmFgXHJcbiAgLy8gY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudmFyaWFudD09PScjZmZmJz8oeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuZ3JleURhcms6JyNmZmYnfTtcclxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuZ3JleURhcmt9XHJcblxyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuYDtcclxuXHJcbi8vIGNvbnN0IExpbmsgPSBzdHlsZWQuYWBcclxuLy8gICBjb2xvcjogd2hpdGU7XHJcbi8vICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuLy8gICA6aG92ZXIge1xyXG4vLyAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbi8vICAgfVxyXG4vLyBgO1xyXG5cclxuY29uc3QgTmF2SWNvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBMaW5lID0gc3R5bGVkLnNwYW5gXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICB3aWR0aDogMjVweDtcclxuICBoZWlnaHQ6IDNweDtcclxuICBtYXJnaW46IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuNHMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gIDpudGgtY2hpbGQoMikge1xyXG4gICAgd2lkdGg6ICR7cHJvcHMgPT4gKHByb3BzLm9wZW4gPyBcIjQwJVwiIDogXCI3MCVcIil9O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IE92ZXJsYXkgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6ICR7cHJvcHMgPT4gKHByb3BzLm9wZW4gPyBcIjkxdmhcIiA6IDApfTtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgYmFja2dyb3VuZDogIzFjMjAyMjtcclxuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC40cyBlYXNlLWluLW91dDtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IE92ZXJsYXlNZW51ID0gc3R5bGVkLnVsYFxyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDQ1JTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHJcbiAgbGkge1xyXG4gICAgb3BhY2l0eTogJHtwcm9wcyA9PiAocHJvcHMub3BlbiA/IDEgOiAwKX07XHJcbiAgICAvLyBmb250LXNpemU6IDI1cHg7XHJcbiAgICBtYXJnaW46IDUwcHggMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuXHJcbiAgbGk6bnRoLWNoaWxkKDIpIHtcclxuICAgIG1hcmdpbjogNTBweCAwcHg7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBOYXZiYXIgPSAoe3ZhcmlhbnR9KSA9PiB7XHJcbiAgXHJcblxyXG5jb25zdCBbdG9nZ2xlLCB0b2dnbGVOYXZdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5jb25zdCBbbGF1bmNoQ3Jpc3AsIHNldExhdW5jaENyaXNwXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgaWYobGF1bmNoQ3Jpc3A9PT10cnVlKVxyXG4gIHt3aW5kb3cuJGNyaXNwID0gW107XHJcbiAgd2luZG93LkNSSVNQX1dFQlNJVEVfSUQgPSBcImJlYWIxYjJhLTU2NDctNGUxNS05NzliLTlmNDhiYjg4YTEzNlwiO1xyXG4gIChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZCA9IGRvY3VtZW50O1xyXG4gICAgdmFyIHMgPSBkLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcbiAgICBzLnNyYyA9IFwiaHR0cHM6Ly9jbGllbnQuY3Jpc3AuY2hhdC9sLmpzXCI7XHJcbiAgICBzLmFzeW5jID0gMTtcclxuICAgIGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkKHMpO1xyXG4gIH0pKCk7XHJcbiAgd2luZG93LiRjcmlzcC5wdXNoKFtcImRvXCIsIFwiY2hhdDpvcGVuXCJdKTtcclxufVxyXG59LFtsYXVuY2hDcmlzcF0pXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxOYXYgdmFyaWFudD17dmFyaWFudH0+XHJcbiAgICAgICAgPExvZ28gdmFyaWFudD17dmFyaWFudH0+XHJcbiAgICAgICAgICAgIFNoaXZhbnNoIE1laGVuZGlyYXR0YVxyXG4gICAgICAgIDwvTG9nbz5cclxuICAgICAgICA8TWVudT5cclxuICAgICAgICAgIDxJdGVtPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8SXRlbUxpbmsgdmFyaWFudD17dmFyaWFudH0+XHJcbiAgICAgICAgICAgICAgYWJvdXRcclxuICAgICAgICAgICAgPC9JdGVtTGluaz5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9JdGVtPlxyXG4gICAgICAgICAgPEl0ZW0+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXhwZXJpZW5jZVwiPlxyXG4gICAgICAgICAgICA8SXRlbUxpbmsgdmFyaWFudD17dmFyaWFudH0+XHJcbiAgICAgICAgICAgIGV4cGVyaWVuY2VcclxuICAgICAgICAgICAgPC9JdGVtTGluaz5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9JdGVtPlxyXG4gICAgICAgICAgPEl0ZW0+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHNcIj5cclxuICAgICAgICAgICAgPEl0ZW1MaW5rIHZhcmlhbnQ9e3ZhcmlhbnR9PlxyXG4gICAgICAgICAgICBwcm9qZWN0c1xyXG4gICAgICAgICAgICA8L0l0ZW1MaW5rPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICAgICA8SXRlbT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9nXCI+XHJcbiAgICAgICAgICAgIDxJdGVtTGluayB2YXJpYW50PXt2YXJpYW50fT5cclxuICAgICAgICAgICAgYmxvZ1xyXG4gICAgICAgICAgICA8L0l0ZW1MaW5rPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICAgICA8SXRlbSBvbkNsaWNrPXsoKT0+c2V0TGF1bmNoQ3Jpc3AodHJ1ZSl9PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICBjb250YWN0XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC9JdGVtPlxyXG4gICAgICAgIDwvTWVudT5cclxuICAgICAgICA8U29jaWFscz5cclxuICAgICAgICAgIHsvKiA8SXRlbT5cclxuICAgICAgICAgICAgPEl0ZW1MaW5rIHZhcmlhbnQ9e3ZhcmlhbnR9IHRhcmdldD1cIiNcIiBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9pZ29yX2R1bWVuY2ljL1wiPlxyXG4gICAgICAgICAgICAgIEluc3RhZ3JhbVxyXG4gICAgICAgICAgICA8L0l0ZW1MaW5rPlxyXG4gICAgICAgICAgPC9JdGVtPiAqL31cclxuICAgICAgICAgIDxJdGVtPlxyXG4gICAgICAgICAgICA8SXRlbUxpbmsgdmFyaWFudD17dmFyaWFudH0gdGFyZ2V0PVwiI1wiIGhyZWY9XCJodHRwczovL3d3dy5iZWhhbmNlLm5ldC9pZ29yZHVtZW5jaWNcIj5cclxuICAgICAgICAgICAgICBCZWhhbmNlXHJcbiAgICAgICAgICAgIDwvSXRlbUxpbms+XHJcbiAgICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICAgICA8SXRlbT5cclxuICAgICAgICAgICAgPEl0ZW1MaW5rIHZhcmlhbnQ9e3ZhcmlhbnR9IHRhcmdldD1cIiNcIiBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3NoaXZhbnNobWVoZW5kaXJhdHRhL1wiPlxyXG4gICAgICAgICAgICAgIExpbmtlZGluXHJcbiAgICAgICAgICAgIDwvSXRlbUxpbms+XHJcbiAgICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICAgPC9Tb2NpYWxzPlxyXG4gICAgICAgIDxOYXZJY29uIG9uQ2xpY2s9eygpID0+IHRvZ2dsZU5hdighdG9nZ2xlKX0+XHJcbiAgICAgICAgICA8TGluZSBvcGVuPXt0b2dnbGV9IC8+XHJcbiAgICAgICAgICA8TGluZSBvcGVuPXt0b2dnbGV9IC8+XHJcbiAgICAgICAgICA8TGluZSBvcGVuPXt0b2dnbGV9IC8+XHJcbiAgICAgICAgPC9OYXZJY29uPlxyXG4gICAgICA8L05hdj5cclxuICAgICAgPE92ZXJsYXkgb3Blbj17dG9nZ2xlfT5cclxuICAgICAgICA8T3ZlcmxheU1lbnUgb3Blbj17dG9nZ2xlfT5cclxuICAgICAgICAgIDxJdGVtPlxyXG4gICAgICAgICAgICA8TGluayB0YXJnZXQ9XCIjXCIgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vaWdvcl9kdW1lbmNpYy9cIj5cclxuICAgICAgICAgICAgICBJbnN0YWdyYW1cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9JdGVtPlxyXG4gICAgICAgICAgPEl0ZW0+XHJcbiAgICAgICAgICAgIDxMaW5rIHRhcmdldD1cIiNcIiBocmVmPVwiaHR0cHM6Ly93d3cuYmVoYW5jZS5uZXQvaWdvcmR1bWVuY2ljXCI+XHJcbiAgICAgICAgICAgICAgQmVoYW5jZVxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICAgICA8SXRlbT5cclxuICAgICAgICAgICAgPExpbmsgdGFyZ2V0PVwiI1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vSWdvcjE3OFwiPlxyXG4gICAgICAgICAgICAgIEdpdGh1YlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICAgPC9PdmVybGF5TWVudT5cclxuICAgICAgPC9PdmVybGF5PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuXHJcblxyXG5mdW5jdGlvbiBpbnZlcnRDb2xvcihoZXgsIGJ3KSB7XHJcbiAgICBpZiAoaGV4LmluZGV4T2YoJyMnKSA9PT0gMCkge1xyXG4gICAgICAgIGhleCA9IGhleC5zbGljZSgxKTtcclxuICAgIH1cclxuICAgIC8vIGNvbnZlcnQgMy1kaWdpdCBoZXggdG8gNi1kaWdpdHMuXHJcbiAgICBpZiAoaGV4Lmxlbmd0aCA9PT0gMykge1xyXG4gICAgICAgIGhleCA9IGhleFswXSArIGhleFswXSArIGhleFsxXSArIGhleFsxXSArIGhleFsyXSArIGhleFsyXTtcclxuICAgIH1cclxuICAgIGlmIChoZXgubGVuZ3RoICE9PSA2KSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIEhFWCBjb2xvci4nKTtcclxuICAgIH1cclxuICAgIHZhciByID0gcGFyc2VJbnQoaGV4LnNsaWNlKDAsIDIpLCAxNiksXHJcbiAgICAgICAgZyA9IHBhcnNlSW50KGhleC5zbGljZSgyLCA0KSwgMTYpLFxyXG4gICAgICAgIGIgPSBwYXJzZUludChoZXguc2xpY2UoNCwgNiksIDE2KTtcclxuICAgIGlmIChidykge1xyXG4gICAgICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM5NDMwMjMvMTEyNzMxXHJcbiAgICAgICAgcmV0dXJuIChyICogMC4yOTkgKyBnICogMC41ODcgKyBiICogMC4xMTQpID4gMTg2XHJcbiAgICAgICAgICAgID8gJyMwMDAwMDAnXHJcbiAgICAgICAgICAgIDogJyNGRkZGRkYnO1xyXG4gICAgfVxyXG4gICAgLy8gaW52ZXJ0IGNvbG9yIGNvbXBvbmVudHNcclxuICAgIHIgPSAoMjU1IC0gcikudG9TdHJpbmcoMTYpO1xyXG4gICAgZyA9ICgyNTUgLSBnKS50b1N0cmluZygxNik7XHJcbiAgICBiID0gKDI1NSAtIGIpLnRvU3RyaW5nKDE2KTtcclxuICAgIC8vIHBhZCBlYWNoIHdpdGggemVyb3MgYW5kIHJldHVyblxyXG4gICAgcmV0dXJuIFwiI1wiICsgcGFkWmVybyhyKSArIHBhZFplcm8oZykgKyBwYWRaZXJvKGIpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==