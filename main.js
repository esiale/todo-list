/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --primary: rgb(230, 230, 255);\n    --secondary: rgb(204, 204, 255);\n    --tertiary: rgb(179, 179, 255);\n    --quaternary: rgb(153, 153, 255);\n    --quinary: rgb(128, 128, 255);\n    --senary: rgb(61, 61, 92);\n    --septenary: rgb(240, 240, 245);\n    --dark-red: rgb(153, 0, 0);\n    --red: rgb(204, 0, 0);\n}\n\n* {\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n.wrapper {\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\nheader {\n    order: 1;\n    min-height: 5%;\n    background-color: var(--secondary);\n    display: flex;\n    align-items: center;\n    border-bottom: 0.15rem var(--tertiary) solid;\n}\n\n.logo {\n    font-size: 1.2rem;\n    margin: 0.5rem;\n    font-family: 'Lobster', cursive;\n    color: var(--quinary);\n}\n\nmain {\n    order: 2;\n    background-color: var(--primary);\n    flex: 1;\n    overflow: auto;\n}\n\nnav {\n    order: 3;\n    display: flex;\n    background-color: var(--secondary);\n    width: 100%;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    font-family: 'Titillium Web', sans-serif;\n    color: var(--senary);\n    font-size: 1.3rem;\n    transition: all 0.2s ease-in;\n    overflow: hidden;\n}\n\n.nav-closed {\n    visibility: hidden;\n    max-height: 0;\n}\n\n.nav-open {\n    visibility: visible;\n    max-height: 50%;\n}\n\nnav div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    border-top: 0.13rem var(--primary) solid;\n}\n\n.mobile-nav {\n    order: 5;\n    min-height: 6%;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    justify-items: center;;\n    align-items: center;\n    border-top: 0.15rem var(--secondary) solid;\n}\n\n.add-button {\n    justify-self: start;\n    margin-left: 1rem;\n}\n\n.material-icons-round.mobile-buttons {\n    color: var(--quinary);\n    font-size: 2rem;\n}\n\n.todo-wrapper {\n    display: flex;\n    flex-direction: column;\n    font-family: 'Lato', sans-serif;\n    color: var(--senary);\n}\n\n.todo-main {\n    background-color: #FFFFFF;\n    width: 100%;\n    display: flex;\n    justify-content: space-between; \n    align-items: center;\n    border-bottom: 0.1rem var(--primary) solid;\n    padding: 0 0.3rem;\n    font-size: 0.9rem;\n    font-weight: 600;\n}\n\n.todo-secondary {\n    background-color: var(--septenary);\n    display: none;\n    visibility: hidden;\n    justify-content: space-between;\n}\n\n.todo-secondary-active {\n    display: flex;\n    visibility: visible;\n}\n\n.todo-secondary p {\n    margin: 0.3rem;\n    font-size: 0.9rem;\n    font-style: italic;\n}\n\n.todo-secondary-icons {\n    display: flex;\n    justify-content: flex-start;\n    margin: 0.4rem;\n}\n\n.todo-secondary-icons span {\n    margin-left: 0.2rem;\n    font-size: 1.8rem;\n}\n\n.todo-main span {\n    margin: 0 0.3rem;\n}\n\n.delete-icon {\n    color: var(--dark-red);\n}\n\n.priority-icon-activated {\n    color: var(--red);\n}\n\n.todo-title {\n    flex-grow: 2;\n    text-align: left;\n    width: calc(100% - 10rem);\n    word-wrap: break-word;\n}\n\n.todo-date {\n    flex-grow: 1;\n    text-align: right;\n}\n\n.todo-desc {\n    width: calc(100% - 8rem);\n    word-wrap: break-word;\n}\n\n.form-wrapper {\n    order: 4;\n    overflow: hidden;\n    transition: all 0.2s ease-in;\n    font-family: 'Lato', sans-serif;\n    color: var(--senary);\n    background-color: var(--secondary);\n}\n\nform {\n    margin-top: 0.5rem;\n    padding-bottom: 0.5rem;\n}\n\nform > div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 0.5rem;\n}\n\ninput[type=text], input[type=date], select {\n    padding: 0.3rem;\n    border: 0.15rem transparent solid;\n    border-radius: 0.5rem;\n    margin-top: 0.5rem;\n}\n\ninput[type=text] {\n    width: 90%;\n}\n\nselect {\n    background-color: #FFFFFF;\n}\n\n.form-radios * {\n    margin: 0.3rem;\n}\n\n.form-buttons {\n    display: flex;\n    flex-direction: row;\n}\n\n.form-buttons * {\n    margin: 0 0.2rem;\n    border: 0;\n    border-radius: 1rem;\n    padding: 0.3rem 2rem;\n}\n\n.form-wrapper-closed {\n    visibility: hidden;\n    max-height: 0;\n}\n\n.form-wrapper-open {\n    visibility: visible;\n    max-height: 100%;\n}\n\n/* .confirm-delete {\n    top: 0; \n    bottom: 0;\n    left: 0; \n    right: 0;\n    margin: auto;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    position: absolute;\n    background-color: var(--tertiary);\n    font-size: 1.3rem;\n    border-radius: 1rem;\n    width: 20rem;\n    padding: 0.5rem;\n    font-family: 'Lato', sans-serif;\n}\n\n.confirm-delete-text {\n    text-align: center;\n}\n\n.confirm-delete-text * {\n    margin-bottom: 0.6rem;\n}\n\n.confirm-delete-text div:nth-child(2) {\n    max-width: 20rem;\n    font-size: 1rem;\n    font-style: italic;\n    word-wrap: break-word;\n}\n\n.confirm-delete-buttons {\n    margin: 0.5rem;\n}\n\n.confirm-delete-buttons button {\n    margin: 0 0.5rem;\n    border: 0;\n    border-radius: 1rem;\n    padding: 0.3rem 2rem;\n    font-family: 'Titillium Web', sans-serif;\n    font-size: 1.1rem;\n} */", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --primary: rgb(230, 230, 255);\n    --secondary: rgb(204, 204, 255);\n    --tertiary: rgb(179, 179, 255);\n    --quaternary: rgb(153, 153, 255);\n    --quinary: rgb(128, 128, 255);\n    --senary: rgb(61, 61, 92);\n    --septenary: rgb(240, 240, 245);\n    --dark-red: rgb(153, 0, 0);\n    --red: rgb(204, 0, 0);\n}\n\n* {\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n.wrapper {\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\nheader {\n    order: 1;\n    min-height: 5%;\n    background-color: var(--secondary);\n    display: flex;\n    align-items: center;\n    border-bottom: 0.15rem var(--tertiary) solid;\n}\n\n.logo {\n    font-size: 1.2rem;\n    margin: 0.5rem;\n    font-family: 'Lobster', cursive;\n    color: var(--quinary);\n}\n\nmain {\n    order: 2;\n    background-color: var(--primary);\n    flex: 1;\n    overflow: auto;\n}\n\nnav {\n    order: 3;\n    display: flex;\n    background-color: var(--secondary);\n    width: 100%;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    font-family: 'Titillium Web', sans-serif;\n    color: var(--senary);\n    font-size: 1.3rem;\n    transition: all 0.2s ease-in;\n    overflow: hidden;\n}\n\n.nav-closed {\n    visibility: hidden;\n    max-height: 0;\n}\n\n.nav-open {\n    visibility: visible;\n    max-height: 50%;\n}\n\nnav div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    border-top: 0.13rem var(--primary) solid;\n}\n\n.mobile-nav {\n    order: 5;\n    min-height: 6%;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    justify-items: center;;\n    align-items: center;\n    border-top: 0.15rem var(--secondary) solid;\n}\n\n.add-button {\n    justify-self: start;\n    margin-left: 1rem;\n}\n\n.material-icons-round.mobile-buttons {\n    color: var(--quinary);\n    font-size: 2rem;\n}\n\n.todo-wrapper {\n    display: flex;\n    flex-direction: column;\n    font-family: 'Lato', sans-serif;\n    color: var(--senary);\n}\n\n.todo-main {\n    background-color: #FFFFFF;\n    width: 100%;\n    display: flex;\n    justify-content: space-between; \n    align-items: center;\n    border-bottom: 0.1rem var(--primary) solid;\n    padding: 0 0.3rem;\n    font-size: 0.9rem;\n    font-weight: 600;\n}\n\n.todo-secondary {\n    background-color: var(--septenary);\n    display: none;\n    visibility: hidden;\n    justify-content: space-between;\n}\n\n.todo-secondary-active {\n    display: flex;\n    visibility: visible;\n}\n\n.todo-secondary p {\n    margin: 0.3rem;\n    font-size: 0.9rem;\n    font-style: italic;\n}\n\n.todo-secondary-icons {\n    display: flex;\n    justify-content: flex-start;\n    margin: 0.4rem;\n}\n\n.todo-secondary-icons span {\n    margin-left: 0.2rem;\n    font-size: 1.8rem;\n}\n\n.todo-main span {\n    margin: 0 0.3rem;\n}\n\n.delete-icon {\n    color: var(--dark-red);\n}\n\n.priority-icon-activated {\n    color: var(--red);\n}\n\n.todo-title {\n    flex-grow: 2;\n    text-align: left;\n    width: calc(100% - 10rem);\n    word-wrap: break-word;\n}\n\n.todo-date {\n    flex-grow: 1;\n    text-align: right;\n}\n\n.todo-desc {\n    width: calc(100% - 8rem);\n    word-wrap: break-word;\n}\n\n.form-wrapper {\n    order: 4;\n    overflow: hidden;\n    transition: all 0.2s ease-in;\n    font-family: 'Lato', sans-serif;\n    color: var(--senary);\n    background-color: var(--secondary);\n}\n\nform {\n    margin-top: 0.5rem;\n    padding-bottom: 0.5rem;\n}\n\nform > div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 0.5rem;\n}\n\ninput[type=text], input[type=date], select {\n    padding: 0.3rem;\n    border: 0.15rem transparent solid;\n    border-radius: 0.5rem;\n    margin-top: 0.5rem;\n}\n\ninput[type=text] {\n    width: 90%;\n}\n\nselect {\n    background-color: #FFFFFF;\n}\n\n.form-radios * {\n    margin: 0.3rem;\n}\n\n.form-buttons {\n    display: flex;\n    flex-direction: row;\n}\n\n.form-buttons * {\n    margin: 0 0.2rem;\n    border: 0;\n    border-radius: 1rem;\n    padding: 0.3rem 2rem;\n}\n\n.form-wrapper-closed {\n    visibility: hidden;\n    max-height: 0;\n}\n\n.form-wrapper-open {\n    visibility: visible;\n    max-height: 100%;\n}\n\n/* .confirm-delete {\n    top: 0; \n    bottom: 0;\n    left: 0; \n    right: 0;\n    margin: auto;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    position: absolute;\n    background-color: var(--tertiary);\n    font-size: 1.3rem;\n    border-radius: 1rem;\n    width: 20rem;\n    padding: 0.5rem;\n    font-family: 'Lato', sans-serif;\n}\n\n.confirm-delete-text {\n    text-align: center;\n}\n\n.confirm-delete-text * {\n    margin-bottom: 0.6rem;\n}\n\n.confirm-delete-text div:nth-child(2) {\n    max-width: 20rem;\n    font-size: 1rem;\n    font-style: italic;\n    word-wrap: break-word;\n}\n\n.confirm-delete-buttons {\n    margin: 0.5rem;\n}\n\n.confirm-delete-buttons button {\n    margin: 0 0.5rem;\n    border: 0;\n    border-radius: 1rem;\n    padding: 0.3rem 2rem;\n    font-family: 'Titillium Web', sans-serif;\n    font-size: 1.1rem;\n} */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/getTarget.js */ "./node_modules/style-loader/dist/runtime/getTarget.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = function(css, style){
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
      while (style.firstChild) {
        style.removeChild(style.firstChild);
      }

      style.appendChild(document.createTextNode(css));
    }
  };
options.setAttributes = function(style) {
        var nonce =
           true ? __webpack_require__.nc : 0;

        if (nonce) {
          style.setAttribute("nonce", nonce);
        }
      };
options.insert = function(style){
    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()("head");

    if (!target) {
      throw new Error(
        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
      );
    }

    target.appendChild(style);
  };
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}

module.exports = getTarget;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./src/modules/data.js":
/*!*****************************!*\
  !*** ./src/modules/data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTodo": () => (/* binding */ addTodo),
/* harmony export */   "todoStorage": () => (/* binding */ todoStorage),
/* harmony export */   "todoProjects": () => (/* binding */ todoProjects),
/* harmony export */   "syncData": () => (/* binding */ syncData),
/* harmony export */   "setPriority": () => (/* binding */ setPriority)
/* harmony export */ });
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/dom */ "./src/modules/dom.js");


let todoStorage = [];
const todoProjects = ["Default"];

const Todo = function(title, desc, dueDate, project, priority) {
    this.title = title;
    this.desc = desc;
    this.dueDate = dueDate;
    this.project = project;
    this.priority = priority; 
    this.isDone = false;
}

function addTodo(title, desc, dueDate, project, priority) {
    const newEntry = new Todo(title, desc, dueDate, project, priority);
    todoStorage.push(newEntry);
    (0,_modules_dom__WEBPACK_IMPORTED_MODULE_0__.renderAllTodos)();
}

function syncData() {
    if (!todoStorage.length && !window.localStorage.length) return

    if (!todoStorage.length) {
        todoStorage = JSON.parse(window.localStorage.getItem("todoLocal"));
        return
    }
    window.localStorage.clear();
    window.localStorage.setItem("todoLocal", JSON.stringify(todoStorage));
}

function setPriority(index) {
    if (todoStorage[index].priority === false) {
        todoStorage[index].priority = true;
    } else {
        todoStorage[index].priority = false;
    }
}





/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderLayout": () => (/* binding */ renderLayout),
/* harmony export */   "renderAllTodos": () => (/* binding */ renderAllTodos),
/* harmony export */   "renderForm": () => (/* binding */ renderForm)
/* harmony export */ });
/* harmony import */ var _modules_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/data */ "./src/modules/data.js");


function renderLayout() {
    const wrapper = document.createElement("div");
    wrapper.className = "wrapper";

    const header = document.createElement("header");
    const logo = document.createElement("logo");
    logo.className = "logo";
    logo.textContent = "esiale TodoApp";
    header.append(logo);

    const main = document.createElement("main");

    const nav = document.createElement("nav");
    nav.className = "nav-closed";
        const inbox = document.createElement("div");
        inbox.textContent = "Inbox";
        const today = document.createElement("div");
        today.textContent = "Today";
        const week = document.createElement("div");
        week.textContent = "Week";
        const projects = document.createElement("div");
        projects.textContent = "Projects";  
    nav.append(inbox, today, week, projects);

    const mobileNav = document.createElement("div");
    mobileNav.className = "mobile-nav";

    const hamburgerButton = document.createElement("div");
    hamburgerButton.className = "hamburger-button";
    const hambIcon = document.createElement("span");
    hambIcon.className = "material-icons-round mobile-buttons";
    hambIcon.textContent = "menu";
    hamburgerButton.addEventListener("click", showNav);
    hamburgerButton.append(hambIcon);
    
    const addButton = document.createElement("div");
    addButton.className = "add-button";
    addButton.addEventListener("click", showForm);

    const addIcon = document.createElement("span");
    addIcon.className = "material-icons-round mobile-buttons";
    addIcon.textContent = "add_circle";
    addButton.append(addIcon);
    mobileNav.append(addButton, hamburgerButton);
    wrapper.append(header, main, nav, mobileNav);
    document.querySelector("#content").append(wrapper);
}

function showNav() {
    const nav = document.querySelector("nav");

    if (nav.classList.contains("nav-closed")) {
        nav.className = "nav-open";
    } else {
        nav.className = "nav-closed";
    }
}

function renderAllTodos() {
    if (_modules_data__WEBPACK_IMPORTED_MODULE_0__.todoStorage === null) {
        return
    } else {
        const main = document.querySelector("main");
        const allTodos = main.querySelectorAll(".todo-wrapper");

        allTodos.forEach(todo => {
            main.removeChild(todo);
        })

        _modules_data__WEBPACK_IMPORTED_MODULE_0__.todoStorage.forEach(function(item, index) {
            renderTodo(item.title, item.desc, item.dueDate, index);
        })
    }
}


function renderTodo(title, desc, dueDate, index) {
    const main = document.querySelector("main");
    const todoWrapper = document.createElement("div");
    todoWrapper.className = "todo-wrapper";
    todoWrapper.dataset.index = index;

    const todoMain = document.createElement("div");
    todoMain.className = "todo-main";

    const todoTitle = document.createElement("p");
    todoTitle.textContent = title;
    todoTitle.className = "todo-title";
    const todoDate = document.createElement("p");
    todoDate.className = "todo-date";
    todoDate.textContent = dueDate;

    const deleteIcon = document.createElement("span");
    deleteIcon.className = "material-icons delete-icon";
    deleteIcon.textContent = "delete";

    const expandMoreIcon = document.createElement("span");
    expandMoreIcon.className = "material-icons";
    expandMoreIcon.textContent = "expand_more";
    expandMoreIcon.addEventListener("click", expandTodo);

    const unckeckedIcon = document.createElement("span");
    unckeckedIcon.className = "material-icons-outlined";
    unckeckedIcon.textContent = "radio_button_unchecked";

    const editIcon = document.createElement("span");
    editIcon.className = "material-icons-outlined";
    editIcon.textContent = "edit_note";

    const priorityIcon = document.createElement("span");
    priorityIcon.className = "material-icons-outlined"
    priorityIcon.textContent = "priority_high";
    priorityIcon.addEventListener("click", activatePriority);

    const todoSecondary = document.createElement("div");
    todoSecondary.className = "todo-secondary";
    const todoDesc = document.createElement("p");
    todoDesc.textContent = desc;
    todoDesc.className = "todo-desc";

    const secondaryIcons = document.createElement("div");
    secondaryIcons.className = "todo-secondary-icons"
    secondaryIcons.append(priorityIcon, editIcon, deleteIcon);

    todoSecondary.append(todoDesc, secondaryIcons);

    todoMain.append(unckeckedIcon, todoTitle, todoDate, expandMoreIcon);
    todoWrapper.append(todoMain, todoSecondary);
    main.append(todoWrapper);
}

function expandTodo(e) {
    const thisSecondary = this.parentNode.parentNode.querySelector(".todo-secondary");

    if (this.textContent === "expand_more") {
        this.textContent = "expand_less";

        thisSecondary.classList.add("todo-secondary-active");
    } else {
        this.textContent = "expand_more";
        thisSecondary.classList.remove("todo-secondary-active");
    }
}

function activatePriority(e) {
    const thisIndex = this.parentNode.parentNode.parentNode.dataset.index;
    (0,_modules_data__WEBPACK_IMPORTED_MODULE_0__.setPriority)(thisIndex);
    if (this.classList.contains("priority-icon-activated")) {
        this.classList.remove("priority-icon-activated");
    } else {
        this.classList.add("priority-icon-activated");
    }
}

function renderForm() {
    const wrapper = document.querySelector(".wrapper");

    const formWrapper = document.createElement("div");
    formWrapper.className = "form-wrapper form-wrapper-closed";
    const form = document.createElement("form");

    const titleWrapper = document.createElement("div");
    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "todo-title");
    titleLabel.textContent = "Choose a new title:";

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("name", "todo-title");
    titleInput.setAttribute("id", "todo-title");

    const descWrapper = document.createElement("div");
    const descLabel = document.createElement("label");
    descLabel.setAttribute("for", "todo-desc");
    descLabel.textContent = "Write a description for your new Todo:";

    const descInput = document.createElement("input");
    descInput.setAttribute("type", "text");
    descInput.setAttribute("name", "todo-desc");
    descInput.setAttribute("id", "todo-desc");

    const dateWrapper = document.createElement("div");
    const dateLabel = document.createElement("label");
    dateLabel.setAttribute("for", "todo-date");
    dateLabel.textContent = "When is this Todo due?";

    const dateInput = document.createElement("input");
    dateInput.setAttribute("type", "date");
    dateInput.setAttribute("name", "todo-date");
    dateInput.setAttribute("id", "todo-date");

    const projectWrapper = document.createElement("div");
    const projectLabel = document.createElement("label");
    projectLabel.setAttribute("for", "todo-project");
    projectLabel.textContent = "Assign your Todo to a project:";

    const projectInput = document.createElement("select");
    projectInput.setAttribute("id", "todo-project")
    _modules_data__WEBPACK_IMPORTED_MODULE_0__.todoProjects.forEach(project => {
        const newOption = document.createElement("option");
        newOption.setAttribute("value", project);
        newOption.textContent = project;
        projectInput.append(newOption);
    })

    const priorityWrapper = document.createElement("div");
    priorityWrapper.className = "form-priority-wrapper";
    const priorityText = document.createElement("p");
    priorityText.textContent = "Is this Todo a priority?";

    const priorityYesLabel = document.createElement("label");
    priorityYesLabel.setAttribute("for", "todo-priority-yes");
    priorityYesLabel.textContent = "Yes";

    const priorityNoLabel = document.createElement("label");
    priorityNoLabel.setAttribute("for", "todo-priority-no");
    priorityNoLabel.textContent = "No";

    const priorityRadios = document.createElement("div");
    priorityRadios.className = "form-radios";

    const priorityYesInput = document.createElement("input");
    priorityYesInput.setAttribute("type", "radio");
    priorityYesInput.setAttribute("name", "todo-priority");
    priorityYesInput.setAttribute("id", "todo-priority-yes");
    priorityYesInput.setAttribute("value", true);

    const priorityNoInput = document.createElement("input");
    priorityNoInput.setAttribute("type", "radio");
    priorityNoInput.setAttribute("name", "todo-priority");
    priorityNoInput.setAttribute("id", "todo-priority-no");
    priorityNoInput.setAttribute("value", false);
    priorityNoInput.setAttribute("checked", true);

    const formButtons = document.createElement("div");
    formButtons.className = "form-buttons";
    const submitButton = document.createElement("input");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("value", "Done")
    submitButton.addEventListener("click", submitForm);

    const cancelButton = document.createElement("input");
    cancelButton.setAttribute("type", "button");
    cancelButton.setAttribute("value", "Cancel")
    cancelButton.addEventListener("click", showForm);

    titleWrapper.append(titleLabel, titleInput);
    descWrapper.append(descLabel, descInput);
    dateWrapper.append(dateLabel, dateInput);
    projectWrapper.append(projectLabel, projectInput);
    formButtons.append(submitButton, cancelButton);
    priorityRadios.append(priorityYesLabel, priorityYesInput, priorityNoLabel, priorityNoInput);
    priorityWrapper.append(priorityText, priorityRadios);
    form.append(titleWrapper, descWrapper, dateWrapper, projectWrapper, priorityWrapper, formButtons);
    formWrapper.append(form);
    wrapper.append(formWrapper);
}

function submitForm(e) {
    e.preventDefault();
    const title = document.getElementById("todo-title");
    const desc =  document.getElementById("todo-desc");
    const date = document.getElementById("todo-date");
    const project = document.getElementById("todo-project");
    const priority = document.querySelector("input[name='todo-priority']:checked");
    
    if (title.value === "") {
        title.style.border = "0.15rem var(--red) solid";
    } else {
        title.style.border = "";
    }
    if (desc.value === "") {
        desc.style.border = "0.15rem var(--red) solid";
    } else {
        desc.style.border = "";
    }
    if (date.value === "") {
        date.style.border = "0.15rem var(--red) solid";
    } else {
        date.style.border = "";
    }
    if (date.value === "" || desc.value === "" || date.value === "") {
        return
    } else {
        (0,_modules_data__WEBPACK_IMPORTED_MODULE_0__.addTodo)(title.value, desc.value, date.value, project.value, priority.value);
        showForm();
    }
}

function showForm() {
    const formWrapper = document.querySelector(".form-wrapper");
    if (formWrapper.classList.contains("form-wrapper-closed")) {
        formWrapper.classList.remove("form-wrapper-closed");
        formWrapper.classList.add("form-wrapper-open");
    } else {
        formWrapper.classList.remove("form-wrapper-open");
        formWrapper.classList.add("form-wrapper-closed");
    }
}

// function confirmDelete() {
//     const thisIndex = this.parentNode.parentNode.parentNode.dataset.index;

//     const confirmDelete = document.createElement("div");
//     confirmDelete.className = "confirm-delete";

//     const confirmDeleteText = document.createElement("div");
//     confirmDeleteText.className = "confirm-delete-text";

//     const confirmDeleteButtons = document.createElement("div");
//     confirmDeleteButtons.className = "confirm-delete-buttons";

//     const deleteMessage = document.createElement("div");
//     deleteMessage.textContent = "Confirm if you want to delete:"
//     const todoTitle = document.createElement("div");
//     todoTitle.textContent = todoStorage[thisIndex].title;

//     const yesButton = document.createElement("button");
//     yesButton.textContent = "Yes";
//     const noButton = document.createElement("button");
//     noButton.textContent = "No";

//     confirmDeleteText.append(deleteMessage, todoTitle);
//     confirmDeleteButtons.append(yesButton, noButton);

//     confirmDelete.append(confirmDeleteText, confirmDeleteButtons);
//     overlay.append(confirmDelete);
//     body.append(overlay);
// }



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dom */ "./src/modules/dom.js");
/* harmony import */ var _modules_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/data */ "./src/modules/data.js");




(0,_modules_data__WEBPACK_IMPORTED_MODULE_2__.syncData)();
(0,_modules_dom__WEBPACK_IMPORTED_MODULE_1__.renderLayout)();
(0,_modules_dom__WEBPACK_IMPORTED_MODULE_1__.renderForm)();
(0,_modules_dom__WEBPACK_IMPORTED_MODULE_1__.renderAllTodos)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZGF0YS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN5SDtBQUM3QjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsaURBQWlELG9DQUFvQyxzQ0FBc0MscUNBQXFDLHVDQUF1QyxvQ0FBb0MsZ0NBQWdDLHNDQUFzQyxpQ0FBaUMsNEJBQTRCLEdBQUcsT0FBTyw2QkFBNkIsR0FBRyxVQUFVLGdCQUFnQixpQkFBaUIsR0FBRyxjQUFjLG9CQUFvQixtQkFBbUIsb0JBQW9CLDZCQUE2QixxQ0FBcUMsR0FBRyxZQUFZLGVBQWUscUJBQXFCLHlDQUF5QyxvQkFBb0IsMEJBQTBCLG1EQUFtRCxHQUFHLFdBQVcsd0JBQXdCLHFCQUFxQixzQ0FBc0MsNEJBQTRCLEdBQUcsVUFBVSxlQUFlLHVDQUF1QyxjQUFjLHFCQUFxQixHQUFHLFNBQVMsZUFBZSxvQkFBb0IseUNBQXlDLGtCQUFrQiw2QkFBNkIsb0NBQW9DLDBCQUEwQiwrQ0FBK0MsMkJBQTJCLHdCQUF3QixtQ0FBbUMsdUJBQXVCLEdBQUcsaUJBQWlCLHlCQUF5QixvQkFBb0IsR0FBRyxlQUFlLDBCQUEwQixzQkFBc0IsR0FBRyxhQUFhLG9CQUFvQiw4QkFBOEIsMEJBQTBCLGtCQUFrQixtQkFBbUIsK0NBQStDLEdBQUcsaUJBQWlCLGVBQWUscUJBQXFCLG9CQUFvQix5Q0FBeUMsNkJBQTZCLDBCQUEwQixpREFBaUQsR0FBRyxpQkFBaUIsMEJBQTBCLHdCQUF3QixHQUFHLDBDQUEwQyw0QkFBNEIsc0JBQXNCLEdBQUcsbUJBQW1CLG9CQUFvQiw2QkFBNkIsc0NBQXNDLDJCQUEyQixHQUFHLGdCQUFnQixnQ0FBZ0Msa0JBQWtCLG9CQUFvQixxQ0FBcUMsMkJBQTJCLGlEQUFpRCx3QkFBd0Isd0JBQXdCLHVCQUF1QixHQUFHLHFCQUFxQix5Q0FBeUMsb0JBQW9CLHlCQUF5QixxQ0FBcUMsR0FBRyw0QkFBNEIsb0JBQW9CLDBCQUEwQixHQUFHLHVCQUF1QixxQkFBcUIsd0JBQXdCLHlCQUF5QixHQUFHLDJCQUEyQixvQkFBb0Isa0NBQWtDLHFCQUFxQixHQUFHLGdDQUFnQywwQkFBMEIsd0JBQXdCLEdBQUcscUJBQXFCLHVCQUF1QixHQUFHLGtCQUFrQiw2QkFBNkIsR0FBRyw4QkFBOEIsd0JBQXdCLEdBQUcsaUJBQWlCLG1CQUFtQix1QkFBdUIsZ0NBQWdDLDRCQUE0QixHQUFHLGdCQUFnQixtQkFBbUIsd0JBQXdCLEdBQUcsZ0JBQWdCLCtCQUErQiw0QkFBNEIsR0FBRyxtQkFBbUIsZUFBZSx1QkFBdUIsbUNBQW1DLHNDQUFzQywyQkFBMkIseUNBQXlDLEdBQUcsVUFBVSx5QkFBeUIsNkJBQTZCLEdBQUcsZ0JBQWdCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLDhCQUE4Qiw0QkFBNEIsR0FBRyxnREFBZ0Qsc0JBQXNCLHdDQUF3Qyw0QkFBNEIseUJBQXlCLEdBQUcsc0JBQXNCLGlCQUFpQixHQUFHLFlBQVksZ0NBQWdDLEdBQUcsb0JBQW9CLHFCQUFxQixHQUFHLG1CQUFtQixvQkFBb0IsMEJBQTBCLEdBQUcscUJBQXFCLHVCQUF1QixnQkFBZ0IsMEJBQTBCLDJCQUEyQixHQUFHLDBCQUEwQix5QkFBeUIsb0JBQW9CLEdBQUcsd0JBQXdCLDBCQUEwQix1QkFBdUIsR0FBRyx3QkFBd0IsYUFBYSxpQkFBaUIsY0FBYyxnQkFBZ0IsbUJBQW1CLHNCQUFzQiw2QkFBNkIscUNBQXFDLDBCQUEwQix5QkFBeUIsd0NBQXdDLHdCQUF3QiwwQkFBMEIsbUJBQW1CLHNCQUFzQixzQ0FBc0MsR0FBRywwQkFBMEIseUJBQXlCLEdBQUcsNEJBQTRCLDRCQUE0QixHQUFHLDJDQUEyQyx1QkFBdUIsc0JBQXNCLHlCQUF5Qiw0QkFBNEIsR0FBRyw2QkFBNkIscUJBQXFCLEdBQUcsb0NBQW9DLHVCQUF1QixnQkFBZ0IsMEJBQTBCLDJCQUEyQiwrQ0FBK0Msd0JBQXdCLEdBQUcsVUFBVSx1RkFBdUYsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFB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QUNBLFFBQVEsc0RBQVc7QUFDbkI7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVCxRQUFRLDhEQUFtQjtBQUMzQjtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSwwREFBVztBQUNmO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLCtEQUFvQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsUUFBUSxzREFBTztBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUMxVUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7O0FDTjJCO0FBQzJDO0FBQ3RCOztBQUVoRCx1REFBUTtBQUNSLDBEQUFZO0FBQ1osd0RBQVU7QUFDViw0REFBYyxHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1wcmltYXJ5OiByZ2IoMjMwLCAyMzAsIDI1NSk7XFxuICAgIC0tc2Vjb25kYXJ5OiByZ2IoMjA0LCAyMDQsIDI1NSk7XFxuICAgIC0tdGVydGlhcnk6IHJnYigxNzksIDE3OSwgMjU1KTtcXG4gICAgLS1xdWF0ZXJuYXJ5OiByZ2IoMTUzLCAxNTMsIDI1NSk7XFxuICAgIC0tcXVpbmFyeTogcmdiKDEyOCwgMTI4LCAyNTUpO1xcbiAgICAtLXNlbmFyeTogcmdiKDYxLCA2MSwgOTIpO1xcbiAgICAtLXNlcHRlbmFyeTogcmdiKDI0MCwgMjQwLCAyNDUpO1xcbiAgICAtLWRhcmstcmVkOiByZ2IoMTUzLCAwLCAwKTtcXG4gICAgLS1yZWQ6IHJnYigyMDQsIDAsIDApO1xcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgb3JkZXI6IDE7XFxuICAgIG1pbi1oZWlnaHQ6IDUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiAwLjE1cmVtIHZhcigtLXRlcnRpYXJ5KSBzb2xpZDtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgbWFyZ2luOiAwLjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnTG9ic3RlcicsIGN1cnNpdmU7XFxuICAgIGNvbG9yOiB2YXIoLS1xdWluYXJ5KTtcXG59XFxuXFxubWFpbiB7XFxuICAgIG9yZGVyOiAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgZmxleDogMTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbm5hdiB7XFxuICAgIG9yZGVyOiAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB2YXIoLS1zZW5hcnkpO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLm5hdi1jbG9zZWQge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIG1heC1oZWlnaHQ6IDA7XFxufVxcblxcbi5uYXYtb3BlbiB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIG1heC1oZWlnaHQ6IDUwJTtcXG59XFxuXFxubmF2IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXItdG9wOiAwLjEzcmVtIHZhcigtLXByaW1hcnkpIHNvbGlkO1xcbn1cXG5cXG4ubW9iaWxlLW5hdiB7XFxuICAgIG9yZGVyOiA1O1xcbiAgICBtaW4taGVpZ2h0OiA2JTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyOztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXRvcDogMC4xNXJlbSB2YXIoLS1zZWNvbmRhcnkpIHNvbGlkO1xcbn1cXG5cXG4uYWRkLWJ1dHRvbiB7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4ubWF0ZXJpYWwtaWNvbnMtcm91bmQubW9iaWxlLWJ1dHRvbnMge1xcbiAgICBjb2xvcjogdmFyKC0tcXVpbmFyeSk7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLnRvZG8td3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB2YXIoLS1zZW5hcnkpO1xcbn1cXG5cXG4udG9kby1tYWluIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IDAuMXJlbSB2YXIoLS1wcmltYXJ5KSBzb2xpZDtcXG4gICAgcGFkZGluZzogMCAwLjNyZW07XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4udG9kby1zZWNvbmRhcnkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZXB0ZW5hcnkpO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRvZG8tc2Vjb25kYXJ5LWFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi50b2RvLXNlY29uZGFyeSBwIHtcXG4gICAgbWFyZ2luOiAwLjNyZW07XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi50b2RvLXNlY29uZGFyeS1pY29ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgbWFyZ2luOiAwLjRyZW07XFxufVxcblxcbi50b2RvLXNlY29uZGFyeS1pY29ucyBzcGFuIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuMnJlbTtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxufVxcblxcbi50b2RvLW1haW4gc3BhbiB7XFxuICAgIG1hcmdpbjogMCAwLjNyZW07XFxufVxcblxcbi5kZWxldGUtaWNvbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLXJlZCk7XFxufVxcblxcbi5wcmlvcml0eS1pY29uLWFjdGl2YXRlZCB7XFxuICAgIGNvbG9yOiB2YXIoLS1yZWQpO1xcbn1cXG5cXG4udG9kby10aXRsZSB7XFxuICAgIGZsZXgtZ3JvdzogMjtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcmVtKTtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4udG9kby1kYXRlIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLnRvZG8tZGVzYyB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA4cmVtKTtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4uZm9ybS13cmFwcGVyIHtcXG4gICAgb3JkZXI6IDQ7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB2YXIoLS1zZW5hcnkpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG5mb3JtID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1kYXRlXSwgc2VsZWN0IHtcXG4gICAgcGFkZGluZzogMC4zcmVtO1xcbiAgICBib3JkZXI6IDAuMTVyZW0gdHJhbnNwYXJlbnQgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRdIHtcXG4gICAgd2lkdGg6IDkwJTtcXG59XFxuXFxuc2VsZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG59XFxuXFxuLmZvcm0tcmFkaW9zICoge1xcbiAgICBtYXJnaW46IDAuM3JlbTtcXG59XFxuXFxuLmZvcm0tYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5mb3JtLWJ1dHRvbnMgKiB7XFxuICAgIG1hcmdpbjogMCAwLjJyZW07XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgcGFkZGluZzogMC4zcmVtIDJyZW07XFxufVxcblxcbi5mb3JtLXdyYXBwZXItY2xvc2VkIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBtYXgtaGVpZ2h0OiAwO1xcbn1cXG5cXG4uZm9ybS13cmFwcGVyLW9wZW4ge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4vKiAuY29uZmlybS1kZWxldGUge1xcbiAgICB0b3A6IDA7IFxcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7IFxcbiAgICByaWdodDogMDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnkpO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgd2lkdGg6IDIwcmVtO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5jb25maXJtLWRlbGV0ZS10ZXh0IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY29uZmlybS1kZWxldGUtdGV4dCAqIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC42cmVtO1xcbn1cXG5cXG4uY29uZmlybS1kZWxldGUtdGV4dCBkaXY6bnRoLWNoaWxkKDIpIHtcXG4gICAgbWF4LXdpZHRoOiAyMHJlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLmNvbmZpcm0tZGVsZXRlLWJ1dHRvbnMge1xcbiAgICBtYXJnaW46IDAuNXJlbTtcXG59XFxuXFxuLmNvbmZpcm0tZGVsZXRlLWJ1dHRvbnMgYnV0dG9uIHtcXG4gICAgbWFyZ2luOiAwIDAuNXJlbTtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAwLjNyZW0gMnJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxufSAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksNkJBQTZCO0lBQzdCLCtCQUErQjtJQUMvQiw4QkFBOEI7SUFDOUIsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIsK0JBQStCO0lBQy9CLDBCQUEwQjtJQUMxQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFFBQVE7SUFDUixjQUFjO0lBQ2Qsa0NBQWtDO0lBQ2xDLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCwrQkFBK0I7SUFDL0IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksUUFBUTtJQUNSLGdDQUFnQztJQUNoQyxPQUFPO0lBQ1AsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFFBQVE7SUFDUixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQix3Q0FBd0M7SUFDeEMsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksUUFBUTtJQUNSLGNBQWM7SUFDZCxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwrQkFBK0I7SUFDL0Isb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQiwwQ0FBMEM7SUFDMUMsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsZ0JBQWdCO0lBQ2hCLDRCQUE0QjtJQUM1QiwrQkFBK0I7SUFDL0Isb0JBQW9CO0lBQ3BCLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlDQUFpQztJQUNqQyxxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E4Q0dcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLXByaW1hcnk6IHJnYigyMzAsIDIzMCwgMjU1KTtcXG4gICAgLS1zZWNvbmRhcnk6IHJnYigyMDQsIDIwNCwgMjU1KTtcXG4gICAgLS10ZXJ0aWFyeTogcmdiKDE3OSwgMTc5LCAyNTUpO1xcbiAgICAtLXF1YXRlcm5hcnk6IHJnYigxNTMsIDE1MywgMjU1KTtcXG4gICAgLS1xdWluYXJ5OiByZ2IoMTI4LCAxMjgsIDI1NSk7XFxuICAgIC0tc2VuYXJ5OiByZ2IoNjEsIDYxLCA5Mik7XFxuICAgIC0tc2VwdGVuYXJ5OiByZ2IoMjQwLCAyNDAsIDI0NSk7XFxuICAgIC0tZGFyay1yZWQ6IHJnYigxNTMsIDAsIDApO1xcbiAgICAtLXJlZDogcmdiKDIwNCwgMCwgMCk7XFxufVxcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBvcmRlcjogMTtcXG4gICAgbWluLWhlaWdodDogNSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IDAuMTVyZW0gdmFyKC0tdGVydGlhcnkpIHNvbGlkO1xcbn1cXG5cXG4ubG9nbyB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBtYXJnaW46IDAuNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJywgY3Vyc2l2ZTtcXG4gICAgY29sb3I6IHZhcigtLXF1aW5hcnkpO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgb3JkZXI6IDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICBmbGV4OiAxO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxubmF2IHtcXG4gICAgb3JkZXI6IDM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHZhcigtLXNlbmFyeSk7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ubmF2LWNsb3NlZCB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgbWF4LWhlaWdodDogMDtcXG59XFxuXFxuLm5hdi1vcGVuIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgbWF4LWhlaWdodDogNTAlO1xcbn1cXG5cXG5uYXYgZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlci10b3A6IDAuMTNyZW0gdmFyKC0tcHJpbWFyeSkgc29saWQ7XFxufVxcblxcbi5tb2JpbGUtbmF2IHtcXG4gICAgb3JkZXI6IDU7XFxuICAgIG1pbi1oZWlnaHQ6IDYlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItdG9wOiAwLjE1cmVtIHZhcigtLXNlY29uZGFyeSkgc29saWQ7XFxufVxcblxcbi5hZGQtYnV0dG9uIHtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcblxcbi5tYXRlcmlhbC1pY29ucy1yb3VuZC5tb2JpbGUtYnV0dG9ucyB7XFxuICAgIGNvbG9yOiB2YXIoLS1xdWluYXJ5KTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4udG9kby13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHZhcigtLXNlbmFyeSk7XFxufVxcblxcbi50b2RvLW1haW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMC4xcmVtIHZhcigtLXByaW1hcnkpIHNvbGlkO1xcbiAgICBwYWRkaW5nOiAwIDAuM3JlbTtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi50b2RvLXNlY29uZGFyeSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlcHRlbmFyeSk7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udG9kby1zZWNvbmRhcnktYWN0aXZlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLnRvZG8tc2Vjb25kYXJ5IHAge1xcbiAgICBtYXJnaW46IDAuM3JlbTtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLnRvZG8tc2Vjb25kYXJ5LWljb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBtYXJnaW46IDAuNHJlbTtcXG59XFxuXFxuLnRvZG8tc2Vjb25kYXJ5LWljb25zIHNwYW4ge1xcbiAgICBtYXJnaW4tbGVmdDogMC4ycmVtO1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuLnRvZG8tbWFpbiBzcGFuIHtcXG4gICAgbWFyZ2luOiAwIDAuM3JlbTtcXG59XFxuXFxuLmRlbGV0ZS1pY29uIHtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstcmVkKTtcXG59XFxuXFxuLnByaW9yaXR5LWljb24tYWN0aXZhdGVkIHtcXG4gICAgY29sb3I6IHZhcigtLXJlZCk7XFxufVxcblxcbi50b2RvLXRpdGxlIHtcXG4gICAgZmxleC1ncm93OiAyO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTByZW0pO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi50b2RvLWRhdGUge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4udG9kby1kZXNjIHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDhyZW0pO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi5mb3JtLXdyYXBwZXIge1xcbiAgICBvcmRlcjogNDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHZhcigtLXNlbmFyeSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxufVxcblxcbmZvcm0ge1xcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxufVxcblxcbmZvcm0gPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPWRhdGVdLCBzZWxlY3Qge1xcbiAgICBwYWRkaW5nOiAwLjNyZW07XFxuICAgIGJvcmRlcjogMC4xNXJlbSB0cmFuc3BhcmVudCBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxufVxcblxcbmlucHV0W3R5cGU9dGV4dF0ge1xcbiAgICB3aWR0aDogOTAlO1xcbn1cXG5cXG5zZWxlY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbn1cXG5cXG4uZm9ybS1yYWRpb3MgKiB7XFxuICAgIG1hcmdpbjogMC4zcmVtO1xcbn1cXG5cXG4uZm9ybS1idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLmZvcm0tYnV0dG9ucyAqIHtcXG4gICAgbWFyZ2luOiAwIDAuMnJlbTtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAwLjNyZW0gMnJlbTtcXG59XFxuXFxuLmZvcm0td3JhcHBlci1jbG9zZWQge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIG1heC1oZWlnaHQ6IDA7XFxufVxcblxcbi5mb3JtLXdyYXBwZXItb3BlbiB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi8qIC5jb25maXJtLWRlbGV0ZSB7XFxuICAgIHRvcDogMDsgXFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDsgXFxuICAgIHJpZ2h0OiAwO1xcbiAgICBtYXJnaW46IGF1dG87XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeSk7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICB3aWR0aDogMjByZW07XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmNvbmZpcm0tZGVsZXRlLXRleHQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jb25maXJtLWRlbGV0ZS10ZXh0ICoge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjZyZW07XFxufVxcblxcbi5jb25maXJtLWRlbGV0ZS10ZXh0IGRpdjpudGgtY2hpbGQoMikge1xcbiAgICBtYXgtd2lkdGg6IDIwcmVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4uY29uZmlybS1kZWxldGUtYnV0dG9ucyB7XFxuICAgIG1hcmdpbjogMC41cmVtO1xcbn1cXG5cXG4uY29uZmlybS1kZWxldGUtYnV0dG9ucyBidXR0b24ge1xcbiAgICBtYXJnaW46IDAgMC41cmVtO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIHBhZGRpbmc6IDAuM3JlbSAycmVtO1xcbiAgICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG59ICovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBnZXRUYXJnZXQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRUYXJnZXQuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gZnVuY3Rpb24oY3NzLCBzdHlsZSl7XG4gICAgICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICAgIH1cbiAgfTtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IGZ1bmN0aW9uKHN0eWxlKSB7XG4gICAgICAgIHZhciBub25jZSA9XG4gICAgICAgICAgdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgICAgIGlmIChub25jZSkge1xuICAgICAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oc3R5bGUpe1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoXCJoZWFkXCIpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFRhcmdldDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiaW1wb3J0IHtyZW5kZXJBbGxUb2Rvc30gZnJvbSBcIi4uL21vZHVsZXMvZG9tXCI7XG5cbmxldCB0b2RvU3RvcmFnZSA9IFtdO1xuY29uc3QgdG9kb1Byb2plY3RzID0gW1wiRGVmYXVsdFwiXTtcblxuY29uc3QgVG9kbyA9IGZ1bmN0aW9uKHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcm9qZWN0LCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2MgPSBkZXNjO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7IFxuICAgIHRoaXMuaXNEb25lID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGFkZFRvZG8odGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByb2plY3QsIHByaW9yaXR5KSB7XG4gICAgY29uc3QgbmV3RW50cnkgPSBuZXcgVG9kbyh0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJvamVjdCwgcHJpb3JpdHkpO1xuICAgIHRvZG9TdG9yYWdlLnB1c2gobmV3RW50cnkpO1xuICAgIHJlbmRlckFsbFRvZG9zKCk7XG59XG5cbmZ1bmN0aW9uIHN5bmNEYXRhKCkge1xuICAgIGlmICghdG9kb1N0b3JhZ2UubGVuZ3RoICYmICF3aW5kb3cubG9jYWxTdG9yYWdlLmxlbmd0aCkgcmV0dXJuXG5cbiAgICBpZiAoIXRvZG9TdG9yYWdlLmxlbmd0aCkge1xuICAgICAgICB0b2RvU3RvcmFnZSA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0xvY2FsXCIpKTtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvTG9jYWxcIiwgSlNPTi5zdHJpbmdpZnkodG9kb1N0b3JhZ2UpKTtcbn1cblxuZnVuY3Rpb24gc2V0UHJpb3JpdHkoaW5kZXgpIHtcbiAgICBpZiAodG9kb1N0b3JhZ2VbaW5kZXhdLnByaW9yaXR5ID09PSBmYWxzZSkge1xuICAgICAgICB0b2RvU3RvcmFnZVtpbmRleF0ucHJpb3JpdHkgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRvZG9TdG9yYWdlW2luZGV4XS5wcmlvcml0eSA9IGZhbHNlO1xuICAgIH1cbn1cblxuZXhwb3J0IHthZGRUb2RvLCB0b2RvU3RvcmFnZSwgdG9kb1Byb2plY3RzLCBzeW5jRGF0YSwgc2V0UHJpb3JpdHl9XG5cbiIsImltcG9ydCB7dG9kb1N0b3JhZ2UsIHRvZG9Qcm9qZWN0cywgc2V0UHJpb3JpdHksIGFkZFRvZG8sIHN5bmNEYXRhfSBmcm9tIFwiLi4vbW9kdWxlcy9kYXRhXCJcblxuZnVuY3Rpb24gcmVuZGVyTGF5b3V0KCkge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdyYXBwZXIuY2xhc3NOYW1lID0gXCJ3cmFwcGVyXCI7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibG9nb1wiKTtcbiAgICBsb2dvLmNsYXNzTmFtZSA9IFwibG9nb1wiO1xuICAgIGxvZ28udGV4dENvbnRlbnQgPSBcImVzaWFsZSBUb2RvQXBwXCI7XG4gICAgaGVhZGVyLmFwcGVuZChsb2dvKTtcblxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcblxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gICAgbmF2LmNsYXNzTmFtZSA9IFwibmF2LWNsb3NlZFwiO1xuICAgICAgICBjb25zdCBpbmJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGluYm94LnRleHRDb250ZW50ID0gXCJJbmJveFwiO1xuICAgICAgICBjb25zdCB0b2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvZGF5LnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xuICAgICAgICBjb25zdCB3ZWVrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgd2Vlay50ZXh0Q29udGVudCA9IFwiV2Vla1wiO1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3RzLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiOyAgXG4gICAgbmF2LmFwcGVuZChpbmJveCwgdG9kYXksIHdlZWssIHByb2plY3RzKTtcblxuICAgIGNvbnN0IG1vYmlsZU5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbW9iaWxlTmF2LmNsYXNzTmFtZSA9IFwibW9iaWxlLW5hdlwiO1xuXG4gICAgY29uc3QgaGFtYnVyZ2VyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoYW1idXJnZXJCdXR0b24uY2xhc3NOYW1lID0gXCJoYW1idXJnZXItYnV0dG9uXCI7XG4gICAgY29uc3QgaGFtYkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBoYW1iSWNvbi5jbGFzc05hbWUgPSBcIm1hdGVyaWFsLWljb25zLXJvdW5kIG1vYmlsZS1idXR0b25zXCI7XG4gICAgaGFtYkljb24udGV4dENvbnRlbnQgPSBcIm1lbnVcIjtcbiAgICBoYW1idXJnZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dOYXYpO1xuICAgIGhhbWJ1cmdlckJ1dHRvbi5hcHBlbmQoaGFtYkljb24pO1xuICAgIFxuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkQnV0dG9uLmNsYXNzTmFtZSA9IFwiYWRkLWJ1dHRvblwiO1xuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0Zvcm0pO1xuXG4gICAgY29uc3QgYWRkSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGFkZEljb24uY2xhc3NOYW1lID0gXCJtYXRlcmlhbC1pY29ucy1yb3VuZCBtb2JpbGUtYnV0dG9uc1wiO1xuICAgIGFkZEljb24udGV4dENvbnRlbnQgPSBcImFkZF9jaXJjbGVcIjtcbiAgICBhZGRCdXR0b24uYXBwZW5kKGFkZEljb24pO1xuICAgIG1vYmlsZU5hdi5hcHBlbmQoYWRkQnV0dG9uLCBoYW1idXJnZXJCdXR0b24pO1xuICAgIHdyYXBwZXIuYXBwZW5kKGhlYWRlciwgbWFpbiwgbmF2LCBtb2JpbGVOYXYpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKS5hcHBlbmQod3JhcHBlcik7XG59XG5cbmZ1bmN0aW9uIHNob3dOYXYoKSB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdlwiKTtcblxuICAgIGlmIChuYXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwibmF2LWNsb3NlZFwiKSkge1xuICAgICAgICBuYXYuY2xhc3NOYW1lID0gXCJuYXYtb3BlblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5hdi5jbGFzc05hbWUgPSBcIm5hdi1jbG9zZWRcIjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckFsbFRvZG9zKCkge1xuICAgIGlmICh0b2RvU3RvcmFnZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm5cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgICAgIGNvbnN0IGFsbFRvZG9zID0gbWFpbi5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvZG8td3JhcHBlclwiKTtcblxuICAgICAgICBhbGxUb2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICAgICAgbWFpbi5yZW1vdmVDaGlsZCh0b2RvKTtcbiAgICAgICAgfSlcblxuICAgICAgICB0b2RvU3RvcmFnZS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICByZW5kZXJUb2RvKGl0ZW0udGl0bGUsIGl0ZW0uZGVzYywgaXRlbS5kdWVEYXRlLCBpbmRleCk7XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIHJlbmRlclRvZG8odGl0bGUsIGRlc2MsIGR1ZURhdGUsIGluZGV4KSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICAgIGNvbnN0IHRvZG9XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RvV3JhcHBlci5jbGFzc05hbWUgPSBcInRvZG8td3JhcHBlclwiO1xuICAgIHRvZG9XcmFwcGVyLmRhdGFzZXQuaW5kZXggPSBpbmRleDtcblxuICAgIGNvbnN0IHRvZG9NYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RvTWFpbi5jbGFzc05hbWUgPSBcInRvZG8tbWFpblwiO1xuXG4gICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgdG9kb1RpdGxlLmNsYXNzTmFtZSA9IFwidG9kby10aXRsZVwiO1xuICAgIGNvbnN0IHRvZG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdG9kb0RhdGUuY2xhc3NOYW1lID0gXCJ0b2RvLWRhdGVcIjtcbiAgICB0b2RvRGF0ZS50ZXh0Q29udGVudCA9IGR1ZURhdGU7XG5cbiAgICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgZGVsZXRlSWNvbi5jbGFzc05hbWUgPSBcIm1hdGVyaWFsLWljb25zIGRlbGV0ZS1pY29uXCI7XG4gICAgZGVsZXRlSWNvbi50ZXh0Q29udGVudCA9IFwiZGVsZXRlXCI7XG5cbiAgICBjb25zdCBleHBhbmRNb3JlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGV4cGFuZE1vcmVJY29uLmNsYXNzTmFtZSA9IFwibWF0ZXJpYWwtaWNvbnNcIjtcbiAgICBleHBhbmRNb3JlSWNvbi50ZXh0Q29udGVudCA9IFwiZXhwYW5kX21vcmVcIjtcbiAgICBleHBhbmRNb3JlSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXhwYW5kVG9kbyk7XG5cbiAgICBjb25zdCB1bmNrZWNrZWRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgdW5ja2Vja2VkSWNvbi5jbGFzc05hbWUgPSBcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCI7XG4gICAgdW5ja2Vja2VkSWNvbi50ZXh0Q29udGVudCA9IFwicmFkaW9fYnV0dG9uX3VuY2hlY2tlZFwiO1xuXG4gICAgY29uc3QgZWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBlZGl0SWNvbi5jbGFzc05hbWUgPSBcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCI7XG4gICAgZWRpdEljb24udGV4dENvbnRlbnQgPSBcImVkaXRfbm90ZVwiO1xuXG4gICAgY29uc3QgcHJpb3JpdHlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgcHJpb3JpdHlJY29uLmNsYXNzTmFtZSA9IFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIlxuICAgIHByaW9yaXR5SWNvbi50ZXh0Q29udGVudCA9IFwicHJpb3JpdHlfaGlnaFwiO1xuICAgIHByaW9yaXR5SWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWN0aXZhdGVQcmlvcml0eSk7XG5cbiAgICBjb25zdCB0b2RvU2Vjb25kYXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RvU2Vjb25kYXJ5LmNsYXNzTmFtZSA9IFwidG9kby1zZWNvbmRhcnlcIjtcbiAgICBjb25zdCB0b2RvRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRvZG9EZXNjLnRleHRDb250ZW50ID0gZGVzYztcbiAgICB0b2RvRGVzYy5jbGFzc05hbWUgPSBcInRvZG8tZGVzY1wiO1xuXG4gICAgY29uc3Qgc2Vjb25kYXJ5SWNvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNlY29uZGFyeUljb25zLmNsYXNzTmFtZSA9IFwidG9kby1zZWNvbmRhcnktaWNvbnNcIlxuICAgIHNlY29uZGFyeUljb25zLmFwcGVuZChwcmlvcml0eUljb24sIGVkaXRJY29uLCBkZWxldGVJY29uKTtcblxuICAgIHRvZG9TZWNvbmRhcnkuYXBwZW5kKHRvZG9EZXNjLCBzZWNvbmRhcnlJY29ucyk7XG5cbiAgICB0b2RvTWFpbi5hcHBlbmQodW5ja2Vja2VkSWNvbiwgdG9kb1RpdGxlLCB0b2RvRGF0ZSwgZXhwYW5kTW9yZUljb24pO1xuICAgIHRvZG9XcmFwcGVyLmFwcGVuZCh0b2RvTWFpbiwgdG9kb1NlY29uZGFyeSk7XG4gICAgbWFpbi5hcHBlbmQodG9kb1dyYXBwZXIpO1xufVxuXG5mdW5jdGlvbiBleHBhbmRUb2RvKGUpIHtcbiAgICBjb25zdCB0aGlzU2Vjb25kYXJ5ID0gdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihcIi50b2RvLXNlY29uZGFyeVwiKTtcblxuICAgIGlmICh0aGlzLnRleHRDb250ZW50ID09PSBcImV4cGFuZF9tb3JlXCIpIHtcbiAgICAgICAgdGhpcy50ZXh0Q29udGVudCA9IFwiZXhwYW5kX2xlc3NcIjtcblxuICAgICAgICB0aGlzU2Vjb25kYXJ5LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXNlY29uZGFyeS1hY3RpdmVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50ZXh0Q29udGVudCA9IFwiZXhwYW5kX21vcmVcIjtcbiAgICAgICAgdGhpc1NlY29uZGFyeS5jbGFzc0xpc3QucmVtb3ZlKFwidG9kby1zZWNvbmRhcnktYWN0aXZlXCIpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYWN0aXZhdGVQcmlvcml0eShlKSB7XG4gICAgY29uc3QgdGhpc0luZGV4ID0gdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5kYXRhc2V0LmluZGV4O1xuICAgIHNldFByaW9yaXR5KHRoaXNJbmRleCk7XG4gICAgaWYgKHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKFwicHJpb3JpdHktaWNvbi1hY3RpdmF0ZWRcIikpIHtcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwicHJpb3JpdHktaWNvbi1hY3RpdmF0ZWRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktaWNvbi1hY3RpdmF0ZWRcIik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJGb3JtKCkge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndyYXBwZXJcIik7XG5cbiAgICBjb25zdCBmb3JtV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybVdyYXBwZXIuY2xhc3NOYW1lID0gXCJmb3JtLXdyYXBwZXIgZm9ybS13cmFwcGVyLWNsb3NlZFwiO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblxuICAgIGNvbnN0IHRpdGxlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRvZG8tdGl0bGVcIik7XG4gICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiQ2hvb3NlIGEgbmV3IHRpdGxlOlwiO1xuXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRvZG8tdGl0bGVcIik7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tdGl0bGVcIik7XG5cbiAgICBjb25zdCBkZXNjV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZGVzY0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGRlc2NMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0b2RvLWRlc2NcIik7XG4gICAgZGVzY0xhYmVsLnRleHRDb250ZW50ID0gXCJXcml0ZSBhIGRlc2NyaXB0aW9uIGZvciB5b3VyIG5ldyBUb2RvOlwiO1xuXG4gICAgY29uc3QgZGVzY0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGRlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBkZXNjSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRvZG8tZGVzY1wiKTtcbiAgICBkZXNjSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLWRlc2NcIik7XG5cbiAgICBjb25zdCBkYXRlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGRhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0b2RvLWRhdGVcIik7XG4gICAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJXaGVuIGlzIHRoaXMgVG9kbyBkdWU/XCI7XG5cbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidG9kby1kYXRlXCIpO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tZGF0ZVwiKTtcblxuICAgIGNvbnN0IHByb2plY3RXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBwcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgcHJvamVjdExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRvZG8tcHJvamVjdFwiKTtcbiAgICBwcm9qZWN0TGFiZWwudGV4dENvbnRlbnQgPSBcIkFzc2lnbiB5b3VyIFRvZG8gdG8gYSBwcm9qZWN0OlwiO1xuXG4gICAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBwcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLXByb2plY3RcIilcbiAgICB0b2RvUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgY29uc3QgbmV3T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgbmV3T3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHByb2plY3QpO1xuICAgICAgICBuZXdPcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0O1xuICAgICAgICBwcm9qZWN0SW5wdXQuYXBwZW5kKG5ld09wdGlvbik7XG4gICAgfSlcblxuICAgIGNvbnN0IHByaW9yaXR5V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJpb3JpdHlXcmFwcGVyLmNsYXNzTmFtZSA9IFwiZm9ybS1wcmlvcml0eS13cmFwcGVyXCI7XG4gICAgY29uc3QgcHJpb3JpdHlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJpb3JpdHlUZXh0LnRleHRDb250ZW50ID0gXCJJcyB0aGlzIFRvZG8gYSBwcmlvcml0eT9cIjtcblxuICAgIGNvbnN0IHByaW9yaXR5WWVzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgcHJpb3JpdHlZZXNMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0b2RvLXByaW9yaXR5LXllc1wiKTtcbiAgICBwcmlvcml0eVllc0xhYmVsLnRleHRDb250ZW50ID0gXCJZZXNcIjtcblxuICAgIGNvbnN0IHByaW9yaXR5Tm9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBwcmlvcml0eU5vTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidG9kby1wcmlvcml0eS1ub1wiKTtcbiAgICBwcmlvcml0eU5vTGFiZWwudGV4dENvbnRlbnQgPSBcIk5vXCI7XG5cbiAgICBjb25zdCBwcmlvcml0eVJhZGlvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJpb3JpdHlSYWRpb3MuY2xhc3NOYW1lID0gXCJmb3JtLXJhZGlvc1wiO1xuXG4gICAgY29uc3QgcHJpb3JpdHlZZXNJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBwcmlvcml0eVllc0lucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcbiAgICBwcmlvcml0eVllc0lucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0b2RvLXByaW9yaXR5XCIpO1xuICAgIHByaW9yaXR5WWVzSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLXByaW9yaXR5LXllc1wiKTtcbiAgICBwcmlvcml0eVllc0lucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHRydWUpO1xuXG4gICAgY29uc3QgcHJpb3JpdHlOb0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHByaW9yaXR5Tm9JbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XG4gICAgcHJpb3JpdHlOb0lucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0b2RvLXByaW9yaXR5XCIpO1xuICAgIHByaW9yaXR5Tm9JbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tcHJpb3JpdHktbm9cIik7XG4gICAgcHJpb3JpdHlOb0lucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGZhbHNlKTtcbiAgICBwcmlvcml0eU5vSW5wdXQuc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCB0cnVlKTtcblxuICAgIGNvbnN0IGZvcm1CdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtQnV0dG9ucy5jbGFzc05hbWUgPSBcImZvcm0tYnV0dG9uc1wiO1xuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJEb25lXCIpXG4gICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdWJtaXRGb3JtKTtcblxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgICBjYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJDYW5jZWxcIilcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dGb3JtKTtcblxuICAgIHRpdGxlV3JhcHBlci5hcHBlbmQodGl0bGVMYWJlbCwgdGl0bGVJbnB1dCk7XG4gICAgZGVzY1dyYXBwZXIuYXBwZW5kKGRlc2NMYWJlbCwgZGVzY0lucHV0KTtcbiAgICBkYXRlV3JhcHBlci5hcHBlbmQoZGF0ZUxhYmVsLCBkYXRlSW5wdXQpO1xuICAgIHByb2plY3RXcmFwcGVyLmFwcGVuZChwcm9qZWN0TGFiZWwsIHByb2plY3RJbnB1dCk7XG4gICAgZm9ybUJ1dHRvbnMuYXBwZW5kKHN1Ym1pdEJ1dHRvbiwgY2FuY2VsQnV0dG9uKTtcbiAgICBwcmlvcml0eVJhZGlvcy5hcHBlbmQocHJpb3JpdHlZZXNMYWJlbCwgcHJpb3JpdHlZZXNJbnB1dCwgcHJpb3JpdHlOb0xhYmVsLCBwcmlvcml0eU5vSW5wdXQpO1xuICAgIHByaW9yaXR5V3JhcHBlci5hcHBlbmQocHJpb3JpdHlUZXh0LCBwcmlvcml0eVJhZGlvcyk7XG4gICAgZm9ybS5hcHBlbmQodGl0bGVXcmFwcGVyLCBkZXNjV3JhcHBlciwgZGF0ZVdyYXBwZXIsIHByb2plY3RXcmFwcGVyLCBwcmlvcml0eVdyYXBwZXIsIGZvcm1CdXR0b25zKTtcbiAgICBmb3JtV3JhcHBlci5hcHBlbmQoZm9ybSk7XG4gICAgd3JhcHBlci5hcHBlbmQoZm9ybVdyYXBwZXIpO1xufVxuXG5mdW5jdGlvbiBzdWJtaXRGb3JtKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tdGl0bGVcIik7XG4gICAgY29uc3QgZGVzYyA9ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tZGVzY1wiKTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWRhdGVcIik7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1wcm9qZWN0XCIpO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J3RvZG8tcHJpb3JpdHknXTpjaGVja2VkXCIpO1xuICAgIFxuICAgIGlmICh0aXRsZS52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICB0aXRsZS5zdHlsZS5ib3JkZXIgPSBcIjAuMTVyZW0gdmFyKC0tcmVkKSBzb2xpZFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRpdGxlLnN0eWxlLmJvcmRlciA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChkZXNjLnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgIGRlc2Muc3R5bGUuYm9yZGVyID0gXCIwLjE1cmVtIHZhcigtLXJlZCkgc29saWRcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkZXNjLnN0eWxlLmJvcmRlciA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChkYXRlLnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgIGRhdGUuc3R5bGUuYm9yZGVyID0gXCIwLjE1cmVtIHZhcigtLXJlZCkgc29saWRcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkYXRlLnN0eWxlLmJvcmRlciA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChkYXRlLnZhbHVlID09PSBcIlwiIHx8IGRlc2MudmFsdWUgPT09IFwiXCIgfHwgZGF0ZS52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICByZXR1cm5cbiAgICB9IGVsc2Uge1xuICAgICAgICBhZGRUb2RvKHRpdGxlLnZhbHVlLCBkZXNjLnZhbHVlLCBkYXRlLnZhbHVlLCBwcm9qZWN0LnZhbHVlLCBwcmlvcml0eS52YWx1ZSk7XG4gICAgICAgIHNob3dGb3JtKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzaG93Rm9ybSgpIHtcbiAgICBjb25zdCBmb3JtV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS13cmFwcGVyXCIpO1xuICAgIGlmIChmb3JtV3JhcHBlci5jbGFzc0xpc3QuY29udGFpbnMoXCJmb3JtLXdyYXBwZXItY2xvc2VkXCIpKSB7XG4gICAgICAgIGZvcm1XcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJmb3JtLXdyYXBwZXItY2xvc2VkXCIpO1xuICAgICAgICBmb3JtV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiZm9ybS13cmFwcGVyLW9wZW5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm9ybVdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZShcImZvcm0td3JhcHBlci1vcGVuXCIpO1xuICAgICAgICBmb3JtV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiZm9ybS13cmFwcGVyLWNsb3NlZFwiKTtcbiAgICB9XG59XG5cbi8vIGZ1bmN0aW9uIGNvbmZpcm1EZWxldGUoKSB7XG4vLyAgICAgY29uc3QgdGhpc0luZGV4ID0gdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5kYXRhc2V0LmluZGV4O1xuXG4vLyAgICAgY29uc3QgY29uZmlybURlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgICAgY29uZmlybURlbGV0ZS5jbGFzc05hbWUgPSBcImNvbmZpcm0tZGVsZXRlXCI7XG5cbi8vICAgICBjb25zdCBjb25maXJtRGVsZXRlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgICAgY29uZmlybURlbGV0ZVRleHQuY2xhc3NOYW1lID0gXCJjb25maXJtLWRlbGV0ZS10ZXh0XCI7XG5cbi8vICAgICBjb25zdCBjb25maXJtRGVsZXRlQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgICAgY29uZmlybURlbGV0ZUJ1dHRvbnMuY2xhc3NOYW1lID0gXCJjb25maXJtLWRlbGV0ZS1idXR0b25zXCI7XG5cbi8vICAgICBjb25zdCBkZWxldGVNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vICAgICBkZWxldGVNZXNzYWdlLnRleHRDb250ZW50ID0gXCJDb25maXJtIGlmIHlvdSB3YW50IHRvIGRlbGV0ZTpcIlxuLy8gICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgICAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gdG9kb1N0b3JhZ2VbdGhpc0luZGV4XS50aXRsZTtcblxuLy8gICAgIGNvbnN0IHllc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4vLyAgICAgeWVzQnV0dG9uLnRleHRDb250ZW50ID0gXCJZZXNcIjtcbi8vICAgICBjb25zdCBub0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4vLyAgICAgbm9CdXR0b24udGV4dENvbnRlbnQgPSBcIk5vXCI7XG5cbi8vICAgICBjb25maXJtRGVsZXRlVGV4dC5hcHBlbmQoZGVsZXRlTWVzc2FnZSwgdG9kb1RpdGxlKTtcbi8vICAgICBjb25maXJtRGVsZXRlQnV0dG9ucy5hcHBlbmQoeWVzQnV0dG9uLCBub0J1dHRvbik7XG5cbi8vICAgICBjb25maXJtRGVsZXRlLmFwcGVuZChjb25maXJtRGVsZXRlVGV4dCwgY29uZmlybURlbGV0ZUJ1dHRvbnMpO1xuLy8gICAgIG92ZXJsYXkuYXBwZW5kKGNvbmZpcm1EZWxldGUpO1xuLy8gICAgIGJvZHkuYXBwZW5kKG92ZXJsYXkpO1xuLy8gfVxuXG5leHBvcnQge3JlbmRlckxheW91dCwgcmVuZGVyQWxsVG9kb3MsIHJlbmRlckZvcm19IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGVzL3N0eWxlLmNzc1wiXG5pbXBvcnQge3JlbmRlckxheW91dCwgcmVuZGVyQWxsVG9kb3MsIHJlbmRlckZvcm19IGZyb20gXCIuL21vZHVsZXMvZG9tXCJcbmltcG9ydCB7c3luY0RhdGEsIGFkZFRvZG99IGZyb20gXCIuL21vZHVsZXMvZGF0YVwiXG5cbnN5bmNEYXRhKCk7XG5yZW5kZXJMYXlvdXQoKTtcbnJlbmRlckZvcm0oKTtcbnJlbmRlckFsbFRvZG9zKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==