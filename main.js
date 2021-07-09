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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --primary: rgb(230, 230, 255);\n    --secondary: rgb(204, 204, 255);\n    --tertiary: rgb(179, 179, 255);\n    --quaternary: rgb(153, 153, 255);\n    --quinary: rgb(128, 128, 255);\n    --senary: rgb(61, 61, 92);\n    --septenary: rgb(240, 240, 245);\n    --dark-red: rgb(153, 0, 0);\n    --red: rgb(204, 0, 0);\n}\n\n* {\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n.wrapper {\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\nheader {\n    order: 1;\n    min-height: 5%;\n    background-color: var(--secondary);\n    display: flex;\n    align-items: center;\n    border-bottom: 0.15rem var(--tertiary) solid;\n}\n\n.logo {\n    font-size: 1.2rem;\n    margin: 0.5rem;\n    font-family: 'Lobster', cursive;\n    color: var(--quinary);\n}\n\nmain {\n    order: 2;\n    background-color: var(--primary);\n    flex: 1;\n    overflow: auto;\n}\n\nnav {\n    order: 3;\n    display: flex;\n    background-color: var(--secondary);\n    width: 100%;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    font-family: 'Titillium Web', sans-serif;\n    color: var(--senary);\n    font-size: 1.3rem;\n    overflow: hidden;\n}\n\n.nav-closed {\n    visibility: hidden;\n    max-height: 0;\n}\n\n.nav-open {\n    visibility: visible;\n    max-height: 100%;\n}\n\nnav div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    border-top: 0.13rem var(--primary) solid;\n}\n\n.nav-projects-tab {\n    visibility: hidden;\n    border: 0;\n    height: 0;\n    display: flex;\n    flex-direction: column;\n}\n\n.nav-projects-tab div {\n    border-top: 0;\n}\n\n.nav-projects-tab-open {\n    visibility: visible;\n    height: 100%;\n}\n\n.nav-projects-new {\n    border: 0;\n    display: flex;\n    flex-direction: column;\n}\n\n.nav-projects-new input[type=text] {\n    width: 80%;\n}\n\n.nav-projects-new button {\n    border: 0;\n    border-radius: 0.5rem;\n    padding: 0.4rem 0.7rem;\n    margin: 0.8rem 0.5rem;\n}\n\n.nav-projects-tab select {\n    width: 80%;\n}\n\n.mobile-nav {\n    order: 5;\n    min-height: 6%;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    justify-items: center;;\n    align-items: center;\n    border-top: 0.15rem var(--secondary) solid;\n}\n\n.add-button {\n    justify-self: start;\n    margin-left: 1rem;\n}\n\n.material-icons-round.mobile-buttons {\n    color: var(--quinary);\n    font-size: 2rem;\n}\n\n.todo-wrapper {\n    display: flex;\n    flex-direction: column;\n    font-family: 'Lato', sans-serif;\n    color: var(--senary);\n}\n\n.todo-main {\n    background-color: #FFFFFF;\n    width: 100%;\n    display: flex;\n    justify-content: space-between; \n    align-items: center;\n    border-bottom: 0.1rem var(--primary) solid;\n    padding: 0 0.3rem;\n    font-size: 0.9rem;\n    font-weight: 600;\n}\n\n.todo-secondary {\n    background-color: var(--septenary);\n    display: none;\n    visibility: hidden;\n    justify-content: space-between;\n}\n\n.todo-secondary-active {\n    display: flex;\n    visibility: visible;\n}\n\n.todo-desc {\n    margin: 0.3rem;\n    font-size: 0.9rem;\n    font-style: italic;\n}\n\n.todo-secondary-icons {\n    display: flex;\n    justify-content: flex-start;\n    margin: 0.4rem;\n}\n\n.todo-secondary-icons span {\n    margin-left: 0.2rem;\n    font-size: 1.8rem;\n}\n\n.todo-main span {\n    margin: 0 0.3rem;\n}\n\n.delete-icon {\n    color: var(--dark-red);\n}\n\n.priority-icon-activated {\n    color: var(--red);\n}\n\n.todo-title {\n    flex-grow: 2;\n    text-align: left;\n    width: calc(100% - 10rem);\n    word-wrap: break-word;\n}\n\n.todo-date {\n    flex-grow: 1;\n    text-align: right;\n}\n\n.todo-desc {\n    width: calc(100% - 8rem);\n    word-wrap: break-word;\n}\n\n.todo-confirm-delete {\n    font-size: 1.1rem;\n    color: var(--red);\n}\n\n.form-wrapper {\n    order: 4;\n    overflow: hidden;\n    font-family: 'Lato', sans-serif;\n    color: var(--senary);\n    background-color: var(--secondary);\n}\n\nform {\n    margin-top: 0.5rem;\n    padding-bottom: 0.5rem;\n}\n\nform > div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 0.5rem;\n}\n\ninput[type=text], input[type=date], select {\n    padding: 0.3rem;\n    border: 0.15rem transparent solid;\n    border-radius: 0.5rem;\n    margin-top: 0.5rem;\n}\n\ninput[type=text] {\n    width: 90%;\n}\n\nselect {\n    background-color: #FFFFFF;\n}\n\n.form-radios * {\n    margin: 0.3rem;\n}\n\n.form-buttons {\n    display: flex;\n    flex-direction: row;\n}\n\n.form-buttons * {\n    margin: 0 0.2rem;\n    border: 0;\n    border-radius: 1rem;\n    padding: 0.3rem 2rem;\n}\n\n.form-wrapper-closed {\n    visibility: hidden;\n    max-height: 0;\n}\n\n.form-wrapper-open {\n    visibility: visible;\n    max-height: 100%;\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --primary: rgb(230, 230, 255);\n    --secondary: rgb(204, 204, 255);\n    --tertiary: rgb(179, 179, 255);\n    --quaternary: rgb(153, 153, 255);\n    --quinary: rgb(128, 128, 255);\n    --senary: rgb(61, 61, 92);\n    --septenary: rgb(240, 240, 245);\n    --dark-red: rgb(153, 0, 0);\n    --red: rgb(204, 0, 0);\n}\n\n* {\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n.wrapper {\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\nheader {\n    order: 1;\n    min-height: 5%;\n    background-color: var(--secondary);\n    display: flex;\n    align-items: center;\n    border-bottom: 0.15rem var(--tertiary) solid;\n}\n\n.logo {\n    font-size: 1.2rem;\n    margin: 0.5rem;\n    font-family: 'Lobster', cursive;\n    color: var(--quinary);\n}\n\nmain {\n    order: 2;\n    background-color: var(--primary);\n    flex: 1;\n    overflow: auto;\n}\n\nnav {\n    order: 3;\n    display: flex;\n    background-color: var(--secondary);\n    width: 100%;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    font-family: 'Titillium Web', sans-serif;\n    color: var(--senary);\n    font-size: 1.3rem;\n    overflow: hidden;\n}\n\n.nav-closed {\n    visibility: hidden;\n    max-height: 0;\n}\n\n.nav-open {\n    visibility: visible;\n    max-height: 100%;\n}\n\nnav div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    border-top: 0.13rem var(--primary) solid;\n}\n\n.nav-projects-tab {\n    visibility: hidden;\n    border: 0;\n    height: 0;\n    display: flex;\n    flex-direction: column;\n}\n\n.nav-projects-tab div {\n    border-top: 0;\n}\n\n.nav-projects-tab-open {\n    visibility: visible;\n    height: 100%;\n}\n\n.nav-projects-new {\n    border: 0;\n    display: flex;\n    flex-direction: column;\n}\n\n.nav-projects-new input[type=text] {\n    width: 80%;\n}\n\n.nav-projects-new button {\n    border: 0;\n    border-radius: 0.5rem;\n    padding: 0.4rem 0.7rem;\n    margin: 0.8rem 0.5rem;\n}\n\n.nav-projects-tab select {\n    width: 80%;\n}\n\n.mobile-nav {\n    order: 5;\n    min-height: 6%;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    justify-items: center;;\n    align-items: center;\n    border-top: 0.15rem var(--secondary) solid;\n}\n\n.add-button {\n    justify-self: start;\n    margin-left: 1rem;\n}\n\n.material-icons-round.mobile-buttons {\n    color: var(--quinary);\n    font-size: 2rem;\n}\n\n.todo-wrapper {\n    display: flex;\n    flex-direction: column;\n    font-family: 'Lato', sans-serif;\n    color: var(--senary);\n}\n\n.todo-main {\n    background-color: #FFFFFF;\n    width: 100%;\n    display: flex;\n    justify-content: space-between; \n    align-items: center;\n    border-bottom: 0.1rem var(--primary) solid;\n    padding: 0 0.3rem;\n    font-size: 0.9rem;\n    font-weight: 600;\n}\n\n.todo-secondary {\n    background-color: var(--septenary);\n    display: none;\n    visibility: hidden;\n    justify-content: space-between;\n}\n\n.todo-secondary-active {\n    display: flex;\n    visibility: visible;\n}\n\n.todo-desc {\n    margin: 0.3rem;\n    font-size: 0.9rem;\n    font-style: italic;\n}\n\n.todo-secondary-icons {\n    display: flex;\n    justify-content: flex-start;\n    margin: 0.4rem;\n}\n\n.todo-secondary-icons span {\n    margin-left: 0.2rem;\n    font-size: 1.8rem;\n}\n\n.todo-main span {\n    margin: 0 0.3rem;\n}\n\n.delete-icon {\n    color: var(--dark-red);\n}\n\n.priority-icon-activated {\n    color: var(--red);\n}\n\n.todo-title {\n    flex-grow: 2;\n    text-align: left;\n    width: calc(100% - 10rem);\n    word-wrap: break-word;\n}\n\n.todo-date {\n    flex-grow: 1;\n    text-align: right;\n}\n\n.todo-desc {\n    width: calc(100% - 8rem);\n    word-wrap: break-word;\n}\n\n.todo-confirm-delete {\n    font-size: 1.1rem;\n    color: var(--red);\n}\n\n.form-wrapper {\n    order: 4;\n    overflow: hidden;\n    font-family: 'Lato', sans-serif;\n    color: var(--senary);\n    background-color: var(--secondary);\n}\n\nform {\n    margin-top: 0.5rem;\n    padding-bottom: 0.5rem;\n}\n\nform > div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 0.5rem;\n}\n\ninput[type=text], input[type=date], select {\n    padding: 0.3rem;\n    border: 0.15rem transparent solid;\n    border-radius: 0.5rem;\n    margin-top: 0.5rem;\n}\n\ninput[type=text] {\n    width: 90%;\n}\n\nselect {\n    background-color: #FFFFFF;\n}\n\n.form-radios * {\n    margin: 0.3rem;\n}\n\n.form-buttons {\n    display: flex;\n    flex-direction: row;\n}\n\n.form-buttons * {\n    margin: 0 0.2rem;\n    border: 0;\n    border-radius: 1rem;\n    padding: 0.3rem 2rem;\n}\n\n.form-wrapper-closed {\n    visibility: hidden;\n    max-height: 0;\n}\n\n.form-wrapper-open {\n    visibility: visible;\n    max-height: 100%;\n}"],"sourceRoot":""}]);
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
/* harmony export */   "deleteTodo": () => (/* binding */ deleteTodo),
/* harmony export */   "editTodo": () => (/* binding */ editTodo),
/* harmony export */   "todoStorage": () => (/* binding */ todoStorage),
/* harmony export */   "todoProjects": () => (/* binding */ todoProjects),
/* harmony export */   "syncData": () => (/* binding */ syncData),
/* harmony export */   "setPriority": () => (/* binding */ setPriority),
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject)
/* harmony export */ });
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/dom */ "./src/modules/dom.js");


let todoStorage = [];
let todoProjects = [];

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
    syncData("todo");
}

function syncData(data) {
    if (data === "todo") {
        if (!todoStorage.length && localStorage.getItem("todoLocal") === null) return

        if (!Array.isArray(todoStorage) || !todoStorage.length) {
            todoStorage = JSON.parse(window.localStorage.getItem("todoLocal"));
        } else {
            window.localStorage.setItem("todoLocal", JSON.stringify(todoStorage));
        }
    }
    if (data === "projects") {
        if (!todoProjects.length && localStorage.getItem("projectsLocal") === null) return

        if (!Array.isArray(todoProjects) || !todoProjects.length) {
            todoProjects = JSON.parse(window.localStorage.getItem("projectsLocal"));
        } else {
            window.localStorage.setItem("projectsLocal", JSON.stringify(todoProjects));
        }
    }
}

function setPriority(index) {
    if (todoStorage[index].priority === false) {
        todoStorage[index].priority = true;
    } else {
        todoStorage[index].priority = false;
    } console.log(todoStorage[index].priority);
    syncData("todo");
}

function deleteTodo(index) {
    todoStorage.splice(index, 1);
    (0,_modules_dom__WEBPACK_IMPORTED_MODULE_0__.renderAllTodos)();
    syncData("todo");
}

function editTodo(title, desc, dueDate, project, priority, index) {
    const editedTodo = new Todo(title, desc, dueDate, project, priority);
    todoStorage.splice(index, 1, editedTodo);
    (0,_modules_dom__WEBPACK_IMPORTED_MODULE_0__.renderAllTodos)();
    syncData("todo");
}

function addProject(project) {
    if (todoProjects.includes(project) || (!/\S/.test(project))) {
        return "error"
    } else {
        todoProjects.push(project);
        syncData("projects");
    }
}

function deleteProject(project) {
    const index = todoProjects.indexOf(project)
    todoProjects.splice(index, 1);
    (0,_modules_dom__WEBPACK_IMPORTED_MODULE_0__.renderProjectOptions)();
    syncData("projects");
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
/* harmony export */   "renderForm": () => (/* binding */ renderForm),
/* harmony export */   "renderProjectOptions": () => (/* binding */ renderProjectOptions)
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
        projects.className = "nav-projects";
        projects.addEventListener("click", showProjectsTab);

        const projectsTab = document.createElement("div");
        projectsTab.className = "nav-projects-tab";
        
    nav.append(inbox, today, week, projects, projectsTab);

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

    renderProjectsTab();
}

function showNav() {
    const nav = document.querySelector("nav");
    const formWrapper = document.querySelector(".form-wrapper");
    
    if (formWrapper.classList.contains("form-wrapper-open")) {
        formWrapper.classList.remove("form-wrapper-open");
        formWrapper.classList.add("form-wrapper-closed");
    }

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
    deleteIcon.addEventListener("click", confirmDelete)

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
    editIcon.addEventListener("click", showEdit);

    const priorityIcon = document.createElement("span");
    priorityIcon.className = "material-icons-outlined"
    priorityIcon.textContent = "priority_high";
    priorityIcon.addEventListener("click", activatePriority);
    if (_modules_data__WEBPACK_IMPORTED_MODULE_0__.todoStorage[index].priority === true) {
        priorityIcon.classList.add("priority-icon-activated");
    }

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
    // todoProjects.forEach(project => {
    //     const newOption = document.createElement("option");
    //     newOption.setAttribute("value", project);
    //     newOption.textContent = project;
    //     projectInput.append(newOption);
    // })

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
    submitButton.setAttribute("id", "submit-button");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("value", "Done")
    submitButton.addEventListener("click", submitForm);

    const cancelButton = document.createElement("input");
    cancelButton.setAttribute("id", "cancel-button")
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
    const submitButton = document.getElementById("submit-button");
    
    if (!/\S/.test(title.value)) {
        title.style.border = "0.15rem var(--red) solid";
    } else {
        title.style.border = "";
    }
    if (!/\S/.test(desc.value)) {
        desc.style.border = "0.15rem var(--red) solid";
    } else {
        desc.style.border = "";
    }
    if (!/\S/.test(date.value)) {
        date.style.border = "0.15rem var(--red) solid";
    } else {
        date.style.border = "";
    }
    if (!/\S/.test(title.value) || !/\S/.test(desc.value) || !/\S/.test(date.value)) {
        return
    } else {
        if (submitButton.value === "Done") {
        (0,_modules_data__WEBPACK_IMPORTED_MODULE_0__.addTodo)(title.value, desc.value, date.value, project.value, JSON.parse(priority.value));
        showForm();
        } else if (submitButton.value === "Edit") {
            (0,_modules_data__WEBPACK_IMPORTED_MODULE_0__.editTodo)(title.value, desc.value, date.value, project.value, JSON.parse(priority.value), submitButton.dataset.editIndex);
            submitButton.value = "Done";
            delete submitButton.dataset.editIndex;
            showForm();
        }
    }
}

function showForm(action, caller) {
    const formWrapper = document.querySelector(".form-wrapper");
    const title = document.getElementById("todo-title");
    const desc =  document.getElementById("todo-desc");
    const date = document.getElementById("todo-date");
    const project = document.getElementById("todo-project");
    const priority = document.querySelectorAll("input[name='todo-priority']");
    const submitButton = document.getElementById("submit-button");
    const addButton = document.querySelector(".add-button");
    const nav = document.querySelector("nav");

    if (formWrapper.classList.contains("form-wrapper-open") && this === addButton && submitButton.value === "Edit") return
    if (nav.classList.contains("nav-open")) {
        nav.classList.remove("nav-open");
        nav.classList.add("nav-closed");
    }

    if (action === "editTodo") {
        const thisIndex = caller.parentNode.parentNode.parentNode.dataset.index;
        title.value = _modules_data__WEBPACK_IMPORTED_MODULE_0__.todoStorage[thisIndex].title;
        desc.value = _modules_data__WEBPACK_IMPORTED_MODULE_0__.todoStorage[thisIndex].desc;
        date.value = _modules_data__WEBPACK_IMPORTED_MODULE_0__.todoStorage[thisIndex].dueDate;
        project.value = _modules_data__WEBPACK_IMPORTED_MODULE_0__.todoStorage[thisIndex].project;
        if (_modules_data__WEBPACK_IMPORTED_MODULE_0__.todoStorage[thisIndex].priority === true) {
            priority[0].checked = true;
            priority[1].checked = false;
        } else {
            priority[0].checked = false;
            priority[1].checked = true;
        }

        submitButton.value = "Edit";
        submitButton.dataset.editIndex = thisIndex;
    } else {
        title.value = "";
        desc.value = "";
        date.value = "";
        project.value = "Default";
        priority.value = true;
        submitButton.value = "Done";
        priority[0].checked = false;
        priority[1].checked = true
    }
    
    if (formWrapper.classList.contains("form-wrapper-closed")) {
        formWrapper.classList.remove("form-wrapper-closed");
        formWrapper.classList.add("form-wrapper-open");
    } else {
        formWrapper.classList.remove("form-wrapper-open");
        formWrapper.classList.add("form-wrapper-closed");
    }
}

function confirmDelete(e) {
    const thisIndex = this.parentNode.parentNode.parentNode.dataset.index;

    if (this.hasAttribute("confirm-delete")) {
        (0,_modules_data__WEBPACK_IMPORTED_MODULE_0__.deleteTodo)(thisIndex);
        return
    }
    const thisDesc = this.parentNode.parentNode.querySelector(".todo-desc");

    thisDesc.classList.add("todo-confirm-delete");
    thisDesc.textContent = "Press again the delete button to confirm!";
    this.setAttribute("confirm-delete", true);

    let clearDeleteTimer = setTimeout(()  => {
    if (thisDesc === undefined) return clearTimeout(clearDeleteTimer)

    thisDesc.classList.remove("todo-confirm-delete");
    thisDesc.textContent = _modules_data__WEBPACK_IMPORTED_MODULE_0__.todoStorage[thisIndex].desc;
    this.removeAttribute("confirm-delete");
    }, 4000)
}

function showEdit(e) {
    const caller = this;
    showForm("editTodo", caller);
}

function renderProjectsTab() {
    const projectsTab = document.querySelector(".nav-projects-tab");
    const nav = document.querySelector("nav");
    
    const newProjectPanel = document.createElement("div");
    newProjectPanel.className = "nav-projects-new";
    const newProjectInput = document.createElement("input");
    newProjectInput.setAttribute("type", "text");
    newProjectInput.setAttribute("name", "new-project-name");
    newProjectInput.setAttribute("id", "new-project-name");
    newProjectInput.placeholder = "Choose name for a new project"

    const newProjectButtons = document.createElement("div");

    const newProjectButton = document.createElement("button");
    newProjectButton.setAttribute("id", "new-project-button");
    newProjectButton.textContent = "Add new project";
    newProjectButton.addEventListener("click", handleNewProject);

    const deleteProjectButton = document.createElement("button");
    deleteProjectButton.setAttribute("id", "delete-project-button");
    deleteProjectButton.textContent = "Delete project";
    deleteProjectButton.addEventListener("click", handleDeleteProject);

    newProjectButtons.append(newProjectButton, deleteProjectButton);
    newProjectPanel.append(newProjectInput, newProjectButtons);

    const selectProject = document.createElement("select");
    selectProject.setAttribute("id", "nav-projects-tab-select")

    // const noProject = document.createElement("option");
    // noProject.value = "test";
    // noProject.textContent = "No project selected";

    // selectProject.append(noProject);
    // todoProjects.forEach(project => {
    //     const newOption = document.createElement("option");
    //     newOption.setAttribute("value", project);
    //     newOption.textContent = project;
    //     selectProject.append(newOption);
    // })
    projectsTab.append(selectProject, newProjectPanel);
    nav.append(projectsTab);
}

function showProjectsTab() {
    const projectsTab = document.querySelector(".nav-projects-tab")
    if (projectsTab.classList.contains("nav-projects-tab-open")) {
        projectsTab.classList.remove("nav-projects-tab-open");
    } else {
        projectsTab.classList.add("nav-projects-tab-open");
    }
}

function renderProjectOptions() {
    const allSelects = document.querySelectorAll("select");
    allSelects.forEach(item => {
        const allOptions = item.querySelectorAll("option");
        for (let i = 0; i < allOptions.length; i++) {
            item.removeChild(allOptions[i])
        }
    });
    allSelects.forEach(item => {
        const noProject = document.createElement("option");
        noProject.setAttribute("value", "none");
        noProject.textContent = "No project selected";    
        item.append(noProject);
        _modules_data__WEBPACK_IMPORTED_MODULE_0__.todoProjects.forEach(project => {
            const newOption = document.createElement("option");
            newOption.setAttribute("value", project);
            newOption.textContent = project;
            item.append(newOption);
        })
    })
}

function handleNewProject(e) {
    const newProjectName = document.getElementById("new-project-name");
    const newProjectButton = document.getElementById("new-project-button");
    if ((0,_modules_data__WEBPACK_IMPORTED_MODULE_0__.addProject)(newProjectName.value) === "error") {
        newProjectName.value = "This project already exists or input is empty!"
    } else {
        newProjectName.value = "Project added!"
        renderProjectOptions();
    }
    newProjectButton.removeEventListener("click", handleNewProject);
    const timeout = setTimeout(() => {
        newProjectName.value = "";
        newProjectButton.addEventListener("click", handleNewProject);
    }, 1000);
}


function handleDeleteProject() {
    const newProjectName = document.getElementById("new-project-name");
    const newProjectButton = document.getElementById("new-project-button");
    const deleteProjectButton = document.getElementById("delete-project-button");
    const selectProject = document.getElementById("nav-projects-tab-select");
    const selectedProject = selectProject.options[selectProject.selectedIndex];

    if (selectedProject.hasAttribute("confirm-delete")) {
        (0,_modules_data__WEBPACK_IMPORTED_MODULE_0__.deleteProject)(selectedProject.value);
        newProjectName.value = "";
        return
    }

    if (selectedProject.value === "none") return

    selectedProject.setAttribute("confirm-delete", true);
    newProjectName.value = "Click twice to delete selected project."
    newProjectButton.removeEventListener("click", handleNewProject);
    const timeout = setTimeout(() => {
        newProjectName.value = "";
        newProjectButton.addEventListener("click", handleNewProject);

        if (selectedProject === undefined) return clearTimeout(timeout);
        selectedProject.removeAttribute("confirm-delete")
    }, 2000);
}



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




(0,_modules_data__WEBPACK_IMPORTED_MODULE_2__.syncData)("todo");
(0,_modules_data__WEBPACK_IMPORTED_MODULE_2__.syncData)("projects");
(0,_modules_dom__WEBPACK_IMPORTED_MODULE_1__.renderLayout)();
(0,_modules_dom__WEBPACK_IMPORTED_MODULE_1__.renderForm)();
(0,_modules_dom__WEBPACK_IMPORTED_MODULE_1__.renderAllTodos)();
(0,_modules_dom__WEBPACK_IMPORTED_MODULE_1__.renderProjectOptions)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZGF0YS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN5SDtBQUM3QjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsaURBQWlELG9DQUFvQyxzQ0FBc0MscUNBQXFDLHVDQUF1QyxvQ0FBb0MsZ0NBQWdDLHNDQUFzQyxpQ0FBaUMsNEJBQTRCLEdBQUcsT0FBTyw2QkFBNkIsR0FBRyxVQUFVLGdCQUFnQixpQkFBaUIsR0FBRyxjQUFjLG9CQUFvQixtQkFBbUIsb0JBQW9CLDZCQUE2QixxQ0FBcUMsR0FBRyxZQUFZLGVBQWUscUJBQXFCLHlDQUF5QyxvQkFBb0IsMEJBQTBCLG1EQUFtRCxHQUFHLFdBQVcsd0JBQXdCLHFCQUFxQixzQ0FBc0MsNEJBQTRCLEdBQUcsVUFBVSxlQUFlLHVDQUF1QyxjQUFjLHFCQUFxQixHQUFHLFNBQVMsZUFBZSxvQkFBb0IseUNBQXlDLGtCQUFrQiw2QkFBNkIsb0NBQW9DLDBCQUEwQiwrQ0FBK0MsMkJBQTJCLHdCQUF3Qix1QkFBdUIsR0FBRyxpQkFBaUIseUJBQXlCLG9CQUFvQixHQUFHLGVBQWUsMEJBQTBCLHVCQUF1QixHQUFHLGFBQWEsb0JBQW9CLDhCQUE4QiwwQkFBMEIsa0JBQWtCLG1CQUFtQiwrQ0FBK0MsR0FBRyx1QkFBdUIseUJBQXlCLGdCQUFnQixnQkFBZ0Isb0JBQW9CLDZCQUE2QixHQUFHLDJCQUEyQixvQkFBb0IsR0FBRyw0QkFBNEIsMEJBQTBCLG1CQUFtQixHQUFHLHVCQUF1QixnQkFBZ0Isb0JBQW9CLDZCQUE2QixHQUFHLHdDQUF3QyxpQkFBaUIsR0FBRyw4QkFBOEIsZ0JBQWdCLDRCQUE0Qiw2QkFBNkIsNEJBQTRCLEdBQUcsOEJBQThCLGlCQUFpQixHQUFHLGlCQUFpQixlQUFlLHFCQUFxQixvQkFBb0IseUNBQXlDLDZCQUE2QiwwQkFBMEIsaURBQWlELEdBQUcsaUJBQWlCLDBCQUEwQix3QkFBd0IsR0FBRywwQ0FBMEMsNEJBQTRCLHNCQUFzQixHQUFHLG1CQUFtQixvQkFBb0IsNkJBQTZCLHNDQUFzQywyQkFBMkIsR0FBRyxnQkFBZ0IsZ0NBQWdDLGtCQUFrQixvQkFBb0IscUNBQXFDLDJCQUEyQixpREFBaUQsd0JBQXdCLHdCQUF3Qix1QkFBdUIsR0FBRyxxQkFBcUIseUNBQXlDLG9CQUFvQix5QkFBeUIscUNBQXFDLEdBQUcsNEJBQTRCLG9CQUFvQiwwQkFBMEIsR0FBRyxnQkFBZ0IscUJBQXFCLHdCQUF3Qix5QkFBeUIsR0FBRywyQkFBMkIsb0JBQW9CLGtDQUFrQyxxQkFBcUIsR0FBRyxnQ0FBZ0MsMEJBQTBCLHdCQUF3QixHQUFHLHFCQUFxQix1QkFBdUIsR0FBRyxrQkFBa0IsNkJBQTZCLEdBQUcsOEJBQThCLHdCQUF3QixHQUFHLGlCQUFpQixtQkFBbUIsdUJBQXVCLGdDQUFnQyw0QkFBNEIsR0FBRyxnQkFBZ0IsbUJBQW1CLHdCQUF3QixHQUFHLGdCQUFnQiwrQkFBK0IsNEJBQTRCLEdBQUcsMEJBQTBCLHdCQUF3Qix3QkFBd0IsR0FBRyxtQkFBbUIsZUFBZSx1QkFBdUIsc0NBQXNDLDJCQUEyQix5Q0FBeUMsR0FBRyxVQUFVLHlCQUF5Qiw2QkFBNkIsR0FBRyxnQkFBZ0Isb0JBQW9CLDZCQUE2QiwwQkFBMEIsOEJBQThCLDRCQUE0QixHQUFHLGdEQUFnRCxzQkFBc0Isd0NBQXdDLDRCQUE0Qix5QkFBeUIsR0FBRyxzQkFBc0IsaUJBQWlCLEdBQUcsWUFBWSxnQ0FBZ0MsR0FBRyxvQkFBb0IscUJBQXFCLEdBQUcsbUJBQW1CLG9CQUFvQiwwQkFBMEIsR0FBRyxxQkFBcUIsdUJBQXVCLGdCQUFnQiwwQkFBMEIsMkJBQTJCLEdBQUcsMEJBQTBCLHlCQUF5QixvQkFBb0IsR0FBRyx3QkFBd0IsMEJBQTBCLHVCQUF1QixHQUFHLE9BQU8sdUZBQXVGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxpQ0FBaUMsb0NBQW9DLHNDQUFzQyxxQ0FBcUMsdUNBQXVDLG9DQUFvQyxnQ0FBZ0Msc0NBQXNDLGlDQUFpQyw0QkFBNEIsR0FBRyxPQUFPLDZCQUE2QixHQUFHLFVBQVUsZ0JBQWdCLGlCQUFpQixHQUFHLGNBQWMsb0JBQW9CLG1CQUFtQixvQkFBb0IsNkJBQTZCLHFDQUFxQyxHQUFHLFlBQVksZUFBZSxxQkFBcUIseUNBQXlDLG9CQUFvQiwwQkFBMEIsbURBQW1ELEdBQUcsV0FBVyx3QkFBd0IscUJBQXFCLHNDQUFzQyw0QkFBNEIsR0FBRyxVQUFVLGVBQWUsdUNBQXVDLGNBQWMscUJBQXFCLEdBQUcsU0FBUyxlQUFlLG9CQUFvQix5Q0FBeUMsa0JBQWtCLDZCQUE2QixvQ0FBb0MsMEJBQTBCLCtDQUErQywyQkFBMkIsd0JBQXdCLHVCQUF1QixHQUFHLGlCQUFpQix5QkFBeUIsb0JBQW9CLEdBQUcsZUFBZSwwQkFBMEIsdUJBQXVCLEdBQUcsYUFBYSxvQkFBb0IsOEJBQThCLDBCQUEwQixrQkFBa0IsbUJBQW1CLCtDQUErQyxHQUFHLHVCQUF1Qix5QkFBeUIsZ0JBQWdCLGdCQUFnQixvQkFBb0IsNkJBQTZCLEdBQUcsMkJBQTJCLG9CQUFvQixHQUFHLDRCQUE0QiwwQkFBMEIsbUJBQW1CLEdBQUcsdUJBQXVCLGdCQUFnQixvQkFBb0IsNkJBQTZCLEdBQUcsd0NBQXdDLGlCQUFpQixHQUFHLDhCQUE4QixnQkFBZ0IsNEJBQTRCLDZCQUE2Qiw0QkFBNEIsR0FBRyw4QkFBOEIsaUJBQWlCLEdBQUcsaUJBQWlCLGVBQWUscUJBQXFCLG9CQUFvQix5Q0FBeUMsNkJBQTZCLDBCQUEwQixpREFBaUQsR0FBRyxpQkFBaUIsMEJBQTBCLHdCQUF3QixHQUFHLDBDQUEwQyw0QkFBNEIsc0JBQXNCLEdBQUcsbUJBQW1CLG9CQUFvQiw2QkFBNkIsc0NBQXNDLDJCQUEyQixHQUFHLGdCQUFnQixnQ0FBZ0Msa0JBQWtCLG9CQUFvQixxQ0FBcUMsMkJBQTJCLGlEQUFpRCx3QkFBd0Isd0JBQXdCLHVCQUF1QixHQUFHLHFCQUFxQix5Q0FBeUMsb0JBQW9CLHlCQUF5QixxQ0FBcUMsR0FBRyw0QkFBNEIsb0JBQW9CLDBCQUEwQixHQUFHLGdCQUFnQixxQkFBcUIsd0JBQXdCLHlCQUF5QixHQUFHLDJCQUEyQixvQkFBb0Isa0NBQWtDLHFCQUFxQixHQUFHLGdDQUFnQywwQkFBMEIsd0JBQXdCLEdBQUcscUJBQXFCLHVCQUF1QixHQUFHLGtCQUFrQiw2QkFBNkIsR0FBRyw4QkFBOEIsd0JBQXdCLEdBQUcsaUJBQWlCLG1CQUFtQix1QkFBdUIsZ0NBQWdDLDRCQUE0QixHQUFHLGdCQUFnQixtQkFBbUIsd0JBQXdCLEdBQUcsZ0JBQWdCLCtCQUErQiw0QkFBNEIsR0FBRywwQkFBMEIsd0JBQXdCLHdCQUF3QixHQUFHLG1CQUFtQixlQUFlLHVCQUF1QixzQ0FBc0MsMkJBQTJCLHlDQUF5QyxHQUFHLFVBQVUseUJBQXlCLDZCQUE2QixHQUFHLGdCQUFnQixvQkFBb0IsNkJBQTZCLDBCQUEwQiw4QkFBOEIsNEJBQTRCLEdBQUcsZ0RBQWdELHNCQUFzQix3Q0FBd0MsNEJBQTRCLHlCQUF5QixHQUFHLHNCQUFzQixpQkFBaUIsR0FBRyxZQUFZLGdDQUFnQyxHQUFHLG9CQUFvQixxQkFBcUIsR0FBRyxtQkFBbUIsb0JBQW9CLDBCQUEwQixHQUFHLHFCQUFxQix1QkFBdUIsZ0JBQWdCLDBCQUEwQiwyQkFBMkIsR0FBRywwQkFBMEIseUJBQXlCLG9CQUFvQixHQUFHLHdCQUF3QiwwQkFBMEIsdUJBQXVCLEdBQUcsbUJBQW1CO0FBQy9xWTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7Ozs7OztBQ2pFYTs7QUFFYixpQ0FBaUMsMkhBQTJIOztBQUU1Siw2QkFBNkIsa0tBQWtLOztBQUUvTCxpREFBaUQsZ0JBQWdCLGdFQUFnRSx3REFBd0QsNkRBQTZELHNEQUFzRCxrSEFBa0g7O0FBRTlaLHNDQUFzQyx1REFBdUQsdUNBQXVDLFNBQVMsT0FBTyxrQkFBa0IsRUFBRSxhQUFhOztBQUVyTCx3Q0FBd0MsOEZBQThGLHdCQUF3QixlQUFlLGVBQWUsZ0JBQWdCLFlBQVksTUFBTSx3QkFBd0IsK0JBQStCLGFBQWEscUJBQXFCLG1DQUFtQyxFQUFFLEVBQUUsY0FBYyxXQUFXLFVBQVUsRUFBRSxVQUFVLE1BQU0saURBQWlELEVBQUUsVUFBVSxrQkFBa0IsRUFBRSxFQUFFLGFBQWE7O0FBRW5mLCtCQUErQixvQ0FBb0M7O0FBRW5FO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQXlGO0FBQ3pGLE1BQTJHO0FBQzNHLE1BQXNHOzs7O0FBSXRHOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUU3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDJGQUFTOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLG1GQUFPOzs7O0FBSWdEO0FBQ3hFLE9BQU8saUVBQWUsbUZBQU8sSUFBSSwwRkFBYyxHQUFHLDBGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUNqRGhFOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFEQUFxRDs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMkI7Ozs7Ozs7Ozs7QUMxQmE7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsd0JBQXdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IsNkJBQTZCO0FBQ2pEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7O0FDaEdhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9DOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsR0FBRzs7QUFFSDs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9Db0U7O0FBRXBFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUFjO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLDREQUFjO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0REFBYztBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtFQUFvQjtBQUN4QjtBQUNBOzs7QUFHbUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUUzRjs7QUFFeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxzREFBVztBQUNuQjtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVULFFBQVEsOERBQW1CO0FBQzNCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBVztBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSwwREFBVztBQUNmO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFFBQVEsc0RBQU87QUFDZjtBQUNBLFNBQVM7QUFDVCxZQUFZLHVEQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0Isc0RBQVc7QUFDakMscUJBQXFCLHNEQUFXO0FBQ2hDLHFCQUFxQixzREFBVztBQUNoQyx3QkFBd0Isc0RBQVc7QUFDbkMsWUFBWSxzREFBVztBQUN2QjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFFBQVEseURBQVU7QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLHNEQUFXO0FBQ3RDO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHVCQUF1QjtBQUM5QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHNEO0FBQ0E7QUFDQSxRQUFRLCtEQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5REFBVTtBQUNsQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSw0REFBYTtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7O1VDMWdCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7QUNOMkI7QUFDaUU7QUFDNUM7O0FBRWhELHVEQUFRO0FBQ1IsdURBQVE7QUFDUiwwREFBWTtBQUNaLHdEQUFVO0FBQ1YsNERBQWM7QUFDZCxrRUFBb0IsRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tcHJpbWFyeTogcmdiKDIzMCwgMjMwLCAyNTUpO1xcbiAgICAtLXNlY29uZGFyeTogcmdiKDIwNCwgMjA0LCAyNTUpO1xcbiAgICAtLXRlcnRpYXJ5OiByZ2IoMTc5LCAxNzksIDI1NSk7XFxuICAgIC0tcXVhdGVybmFyeTogcmdiKDE1MywgMTUzLCAyNTUpO1xcbiAgICAtLXF1aW5hcnk6IHJnYigxMjgsIDEyOCwgMjU1KTtcXG4gICAgLS1zZW5hcnk6IHJnYig2MSwgNjEsIDkyKTtcXG4gICAgLS1zZXB0ZW5hcnk6IHJnYigyNDAsIDI0MCwgMjQ1KTtcXG4gICAgLS1kYXJrLXJlZDogcmdiKDE1MywgMCwgMCk7XFxuICAgIC0tcmVkOiByZ2IoMjA0LCAwLCAwKTtcXG59XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmhlYWRlciB7XFxuICAgIG9yZGVyOiAxO1xcbiAgICBtaW4taGVpZ2h0OiA1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMC4xNXJlbSB2YXIoLS10ZXJ0aWFyeSkgc29saWQ7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIG1hcmdpbjogMC41cmVtO1xcbiAgICBmb250LWZhbWlseTogJ0xvYnN0ZXInLCBjdXJzaXZlO1xcbiAgICBjb2xvcjogdmFyKC0tcXVpbmFyeSk7XFxufVxcblxcbm1haW4ge1xcbiAgICBvcmRlcjogMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICAgIGZsZXg6IDE7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG5uYXYge1xcbiAgICBvcmRlcjogMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogdmFyKC0tc2VuYXJ5KTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5uYXYtY2xvc2VkIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBtYXgtaGVpZ2h0OiAwO1xcbn1cXG5cXG4ubmF2LW9wZW4ge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5uYXYgZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlci10b3A6IDAuMTNyZW0gdmFyKC0tcHJpbWFyeSkgc29saWQ7XFxufVxcblxcbi5uYXYtcHJvamVjdHMtdGFiIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm5hdi1wcm9qZWN0cy10YWIgZGl2IHtcXG4gICAgYm9yZGVyLXRvcDogMDtcXG59XFxuXFxuLm5hdi1wcm9qZWN0cy10YWItb3BlbiB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm5hdi1wcm9qZWN0cy1uZXcge1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5uYXYtcHJvamVjdHMtbmV3IGlucHV0W3R5cGU9dGV4dF0ge1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG5cXG4ubmF2LXByb2plY3RzLW5ldyBidXR0b24ge1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgcGFkZGluZzogMC40cmVtIDAuN3JlbTtcXG4gICAgbWFyZ2luOiAwLjhyZW0gMC41cmVtO1xcbn1cXG5cXG4ubmF2LXByb2plY3RzLXRhYiBzZWxlY3Qge1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG5cXG4ubW9iaWxlLW5hdiB7XFxuICAgIG9yZGVyOiA1O1xcbiAgICBtaW4taGVpZ2h0OiA2JTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyOztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXRvcDogMC4xNXJlbSB2YXIoLS1zZWNvbmRhcnkpIHNvbGlkO1xcbn1cXG5cXG4uYWRkLWJ1dHRvbiB7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4ubWF0ZXJpYWwtaWNvbnMtcm91bmQubW9iaWxlLWJ1dHRvbnMge1xcbiAgICBjb2xvcjogdmFyKC0tcXVpbmFyeSk7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLnRvZG8td3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB2YXIoLS1zZW5hcnkpO1xcbn1cXG5cXG4udG9kby1tYWluIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IDAuMXJlbSB2YXIoLS1wcmltYXJ5KSBzb2xpZDtcXG4gICAgcGFkZGluZzogMCAwLjNyZW07XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4udG9kby1zZWNvbmRhcnkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZXB0ZW5hcnkpO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRvZG8tc2Vjb25kYXJ5LWFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi50b2RvLWRlc2Mge1xcbiAgICBtYXJnaW46IDAuM3JlbTtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLnRvZG8tc2Vjb25kYXJ5LWljb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBtYXJnaW46IDAuNHJlbTtcXG59XFxuXFxuLnRvZG8tc2Vjb25kYXJ5LWljb25zIHNwYW4ge1xcbiAgICBtYXJnaW4tbGVmdDogMC4ycmVtO1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuLnRvZG8tbWFpbiBzcGFuIHtcXG4gICAgbWFyZ2luOiAwIDAuM3JlbTtcXG59XFxuXFxuLmRlbGV0ZS1pY29uIHtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstcmVkKTtcXG59XFxuXFxuLnByaW9yaXR5LWljb24tYWN0aXZhdGVkIHtcXG4gICAgY29sb3I6IHZhcigtLXJlZCk7XFxufVxcblxcbi50b2RvLXRpdGxlIHtcXG4gICAgZmxleC1ncm93OiAyO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTByZW0pO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi50b2RvLWRhdGUge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4udG9kby1kZXNjIHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDhyZW0pO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi50b2RvLWNvbmZpcm0tZGVsZXRlIHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1yZWQpO1xcbn1cXG5cXG4uZm9ybS13cmFwcGVyIHtcXG4gICAgb3JkZXI6IDQ7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB2YXIoLS1zZW5hcnkpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG5mb3JtID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1kYXRlXSwgc2VsZWN0IHtcXG4gICAgcGFkZGluZzogMC4zcmVtO1xcbiAgICBib3JkZXI6IDAuMTVyZW0gdHJhbnNwYXJlbnQgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRdIHtcXG4gICAgd2lkdGg6IDkwJTtcXG59XFxuXFxuc2VsZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG59XFxuXFxuLmZvcm0tcmFkaW9zICoge1xcbiAgICBtYXJnaW46IDAuM3JlbTtcXG59XFxuXFxuLmZvcm0tYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5mb3JtLWJ1dHRvbnMgKiB7XFxuICAgIG1hcmdpbjogMCAwLjJyZW07XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgcGFkZGluZzogMC4zcmVtIDJyZW07XFxufVxcblxcbi5mb3JtLXdyYXBwZXItY2xvc2VkIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBtYXgtaGVpZ2h0OiAwO1xcbn1cXG5cXG4uZm9ybS13cmFwcGVyLW9wZW4ge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDZCQUE2QjtJQUM3QiwrQkFBK0I7SUFDL0IsOEJBQThCO0lBQzlCLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLCtCQUErQjtJQUMvQiwwQkFBMEI7SUFDMUIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVB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c0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUNBQWlDO0lBQ2pDLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tcHJpbWFyeTogcmdiKDIzMCwgMjMwLCAyNTUpO1xcbiAgICAtLXNlY29uZGFyeTogcmdiKDIwNCwgMjA0LCAyNTUpO1xcbiAgICAtLXRlcnRpYXJ5OiByZ2IoMTc5LCAxNzksIDI1NSk7XFxuICAgIC0tcXVhdGVybmFyeTogcmdiKDE1MywgMTUzLCAyNTUpO1xcbiAgICAtLXF1aW5hcnk6IHJnYigxMjgsIDEyOCwgMjU1KTtcXG4gICAgLS1zZW5hcnk6IHJnYig2MSwgNjEsIDkyKTtcXG4gICAgLS1zZXB0ZW5hcnk6IHJnYigyNDAsIDI0MCwgMjQ1KTtcXG4gICAgLS1kYXJrLXJlZDogcmdiKDE1MywgMCwgMCk7XFxuICAgIC0tcmVkOiByZ2IoMjA0LCAwLCAwKTtcXG59XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmhlYWRlciB7XFxuICAgIG9yZGVyOiAxO1xcbiAgICBtaW4taGVpZ2h0OiA1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMC4xNXJlbSB2YXIoLS10ZXJ0aWFyeSkgc29saWQ7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIG1hcmdpbjogMC41cmVtO1xcbiAgICBmb250LWZhbWlseTogJ0xvYnN0ZXInLCBjdXJzaXZlO1xcbiAgICBjb2xvcjogdmFyKC0tcXVpbmFyeSk7XFxufVxcblxcbm1haW4ge1xcbiAgICBvcmRlcjogMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICAgIGZsZXg6IDE7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG5uYXYge1xcbiAgICBvcmRlcjogMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogdmFyKC0tc2VuYXJ5KTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5uYXYtY2xvc2VkIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBtYXgtaGVpZ2h0OiAwO1xcbn1cXG5cXG4ubmF2LW9wZW4ge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5uYXYgZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlci10b3A6IDAuMTNyZW0gdmFyKC0tcHJpbWFyeSkgc29saWQ7XFxufVxcblxcbi5uYXYtcHJvamVjdHMtdGFiIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm5hdi1wcm9qZWN0cy10YWIgZGl2IHtcXG4gICAgYm9yZGVyLXRvcDogMDtcXG59XFxuXFxuLm5hdi1wcm9qZWN0cy10YWItb3BlbiB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm5hdi1wcm9qZWN0cy1uZXcge1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5uYXYtcHJvamVjdHMtbmV3IGlucHV0W3R5cGU9dGV4dF0ge1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG5cXG4ubmF2LXByb2plY3RzLW5ldyBidXR0b24ge1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgcGFkZGluZzogMC40cmVtIDAuN3JlbTtcXG4gICAgbWFyZ2luOiAwLjhyZW0gMC41cmVtO1xcbn1cXG5cXG4ubmF2LXByb2plY3RzLXRhYiBzZWxlY3Qge1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG5cXG4ubW9iaWxlLW5hdiB7XFxuICAgIG9yZGVyOiA1O1xcbiAgICBtaW4taGVpZ2h0OiA2JTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyOztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXRvcDogMC4xNXJlbSB2YXIoLS1zZWNvbmRhcnkpIHNvbGlkO1xcbn1cXG5cXG4uYWRkLWJ1dHRvbiB7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4ubWF0ZXJpYWwtaWNvbnMtcm91bmQubW9iaWxlLWJ1dHRvbnMge1xcbiAgICBjb2xvcjogdmFyKC0tcXVpbmFyeSk7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLnRvZG8td3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB2YXIoLS1zZW5hcnkpO1xcbn1cXG5cXG4udG9kby1tYWluIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IDAuMXJlbSB2YXIoLS1wcmltYXJ5KSBzb2xpZDtcXG4gICAgcGFkZGluZzogMCAwLjNyZW07XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4udG9kby1zZWNvbmRhcnkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZXB0ZW5hcnkpO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRvZG8tc2Vjb25kYXJ5LWFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi50b2RvLWRlc2Mge1xcbiAgICBtYXJnaW46IDAuM3JlbTtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLnRvZG8tc2Vjb25kYXJ5LWljb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBtYXJnaW46IDAuNHJlbTtcXG59XFxuXFxuLnRvZG8tc2Vjb25kYXJ5LWljb25zIHNwYW4ge1xcbiAgICBtYXJnaW4tbGVmdDogMC4ycmVtO1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuLnRvZG8tbWFpbiBzcGFuIHtcXG4gICAgbWFyZ2luOiAwIDAuM3JlbTtcXG59XFxuXFxuLmRlbGV0ZS1pY29uIHtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstcmVkKTtcXG59XFxuXFxuLnByaW9yaXR5LWljb24tYWN0aXZhdGVkIHtcXG4gICAgY29sb3I6IHZhcigtLXJlZCk7XFxufVxcblxcbi50b2RvLXRpdGxlIHtcXG4gICAgZmxleC1ncm93OiAyO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTByZW0pO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi50b2RvLWRhdGUge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4udG9kby1kZXNjIHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDhyZW0pO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi50b2RvLWNvbmZpcm0tZGVsZXRlIHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1yZWQpO1xcbn1cXG5cXG4uZm9ybS13cmFwcGVyIHtcXG4gICAgb3JkZXI6IDQ7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB2YXIoLS1zZW5hcnkpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG5mb3JtID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1kYXRlXSwgc2VsZWN0IHtcXG4gICAgcGFkZGluZzogMC4zcmVtO1xcbiAgICBib3JkZXI6IDAuMTVyZW0gdHJhbnNwYXJlbnQgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRdIHtcXG4gICAgd2lkdGg6IDkwJTtcXG59XFxuXFxuc2VsZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG59XFxuXFxuLmZvcm0tcmFkaW9zICoge1xcbiAgICBtYXJnaW46IDAuM3JlbTtcXG59XFxuXFxuLmZvcm0tYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5mb3JtLWJ1dHRvbnMgKiB7XFxuICAgIG1hcmdpbjogMCAwLjJyZW07XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgcGFkZGluZzogMC4zcmVtIDJyZW07XFxufVxcblxcbi5mb3JtLXdyYXBwZXItY2xvc2VkIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBtYXgtaGVpZ2h0OiAwO1xcbn1cXG5cXG4uZm9ybS13cmFwcGVyLW9wZW4ge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGdldFRhcmdldCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFRhcmdldC5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBmdW5jdGlvbihjc3MsIHN0eWxlKXtcbiAgICAgIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgfVxuICB9O1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24oc3R5bGUpIHtcbiAgICAgICAgdmFyIG5vbmNlID1cbiAgICAgICAgICB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICAgICAgaWYgKG5vbmNlKSB7XG4gICAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICAgICAgICB9XG4gICAgICB9O1xub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihzdHlsZSl7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChcImhlYWRcIik7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9O1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFyZ2V0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJpbXBvcnQge3JlbmRlckFsbFRvZG9zLCByZW5kZXJQcm9qZWN0T3B0aW9uc30gZnJvbSBcIi4uL21vZHVsZXMvZG9tXCI7XG5cbmxldCB0b2RvU3RvcmFnZSA9IFtdO1xubGV0IHRvZG9Qcm9qZWN0cyA9IFtdO1xuXG5jb25zdCBUb2RvID0gZnVuY3Rpb24odGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByb2plY3QsIHByaW9yaXR5KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzYyA9IGRlc2M7XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTsgXG4gICAgdGhpcy5pc0RvbmUgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gYWRkVG9kbyh0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJvamVjdCwgcHJpb3JpdHkpIHtcbiAgICBjb25zdCBuZXdFbnRyeSA9IG5ldyBUb2RvKHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcm9qZWN0LCBwcmlvcml0eSk7XG4gICAgdG9kb1N0b3JhZ2UucHVzaChuZXdFbnRyeSk7XG4gICAgcmVuZGVyQWxsVG9kb3MoKTtcbiAgICBzeW5jRGF0YShcInRvZG9cIik7XG59XG5cbmZ1bmN0aW9uIHN5bmNEYXRhKGRhdGEpIHtcbiAgICBpZiAoZGF0YSA9PT0gXCJ0b2RvXCIpIHtcbiAgICAgICAgaWYgKCF0b2RvU3RvcmFnZS5sZW5ndGggJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvTG9jYWxcIikgPT09IG51bGwpIHJldHVyblxuXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh0b2RvU3RvcmFnZSkgfHwgIXRvZG9TdG9yYWdlLmxlbmd0aCkge1xuICAgICAgICAgICAgdG9kb1N0b3JhZ2UgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9Mb2NhbFwiKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvTG9jYWxcIiwgSlNPTi5zdHJpbmdpZnkodG9kb1N0b3JhZ2UpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZGF0YSA9PT0gXCJwcm9qZWN0c1wiKSB7XG4gICAgICAgIGlmICghdG9kb1Byb2plY3RzLmxlbmd0aCAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzTG9jYWxcIikgPT09IG51bGwpIHJldHVyblxuXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh0b2RvUHJvamVjdHMpIHx8ICF0b2RvUHJvamVjdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0b2RvUHJvamVjdHMgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzTG9jYWxcIikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNMb2NhbFwiLCBKU09OLnN0cmluZ2lmeSh0b2RvUHJvamVjdHMpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gc2V0UHJpb3JpdHkoaW5kZXgpIHtcbiAgICBpZiAodG9kb1N0b3JhZ2VbaW5kZXhdLnByaW9yaXR5ID09PSBmYWxzZSkge1xuICAgICAgICB0b2RvU3RvcmFnZVtpbmRleF0ucHJpb3JpdHkgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRvZG9TdG9yYWdlW2luZGV4XS5wcmlvcml0eSA9IGZhbHNlO1xuICAgIH0gY29uc29sZS5sb2codG9kb1N0b3JhZ2VbaW5kZXhdLnByaW9yaXR5KTtcbiAgICBzeW5jRGF0YShcInRvZG9cIik7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRvZG8oaW5kZXgpIHtcbiAgICB0b2RvU3RvcmFnZS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHJlbmRlckFsbFRvZG9zKCk7XG4gICAgc3luY0RhdGEoXCJ0b2RvXCIpO1xufVxuXG5mdW5jdGlvbiBlZGl0VG9kbyh0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJvamVjdCwgcHJpb3JpdHksIGluZGV4KSB7XG4gICAgY29uc3QgZWRpdGVkVG9kbyA9IG5ldyBUb2RvKHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcm9qZWN0LCBwcmlvcml0eSk7XG4gICAgdG9kb1N0b3JhZ2Uuc3BsaWNlKGluZGV4LCAxLCBlZGl0ZWRUb2RvKTtcbiAgICByZW5kZXJBbGxUb2RvcygpO1xuICAgIHN5bmNEYXRhKFwidG9kb1wiKTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0KSB7XG4gICAgaWYgKHRvZG9Qcm9qZWN0cy5pbmNsdWRlcyhwcm9qZWN0KSB8fCAoIS9cXFMvLnRlc3QocHJvamVjdCkpKSB7XG4gICAgICAgIHJldHVybiBcImVycm9yXCJcbiAgICB9IGVsc2Uge1xuICAgICAgICB0b2RvUHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICAgICAgc3luY0RhdGEoXCJwcm9qZWN0c1wiKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdCkge1xuICAgIGNvbnN0IGluZGV4ID0gdG9kb1Byb2plY3RzLmluZGV4T2YocHJvamVjdClcbiAgICB0b2RvUHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICByZW5kZXJQcm9qZWN0T3B0aW9ucygpO1xuICAgIHN5bmNEYXRhKFwicHJvamVjdHNcIik7XG59XG5cblxuZXhwb3J0IHthZGRUb2RvLCBkZWxldGVUb2RvLCBlZGl0VG9kbywgdG9kb1N0b3JhZ2UsIHRvZG9Qcm9qZWN0cywgc3luY0RhdGEsIHNldFByaW9yaXR5LCBhZGRQcm9qZWN0LCBkZWxldGVQcm9qZWN0fVxuXG4iLCJpbXBvcnQge3RvZG9TdG9yYWdlLCB0b2RvUHJvamVjdHMsIHNldFByaW9yaXR5LCBcbmFkZFRvZG8sIGRlbGV0ZVRvZG8sIGVkaXRUb2RvLCBzeW5jRGF0YSwgYWRkUHJvamVjdCxcbmRlbGV0ZVByb2plY3Rcbn0gZnJvbSBcIi4uL21vZHVsZXMvZGF0YVwiXG5cbmZ1bmN0aW9uIHJlbmRlckxheW91dCgpIHtcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3cmFwcGVyLmNsYXNzTmFtZSA9IFwid3JhcHBlclwiO1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxvZ29cIik7XG4gICAgbG9nby5jbGFzc05hbWUgPSBcImxvZ29cIjtcbiAgICBsb2dvLnRleHRDb250ZW50ID0gXCJlc2lhbGUgVG9kb0FwcFwiO1xuICAgIGhlYWRlci5hcHBlbmQobG9nbyk7XG5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG5cbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIG5hdi5jbGFzc05hbWUgPSBcIm5hdi1jbG9zZWRcIjtcbiAgICAgICAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpbmJveC50ZXh0Q29udGVudCA9IFwiSW5ib3hcIjtcbiAgICAgICAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b2RheS50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcbiAgICAgICAgY29uc3Qgd2VlayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHdlZWsudGV4dENvbnRlbnQgPSBcIldlZWtcIjtcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICAgIHByb2plY3RzLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xuICAgICAgICBwcm9qZWN0cy5jbGFzc05hbWUgPSBcIm5hdi1wcm9qZWN0c1wiO1xuICAgICAgICBwcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd1Byb2plY3RzVGFiKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0c1RhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3RzVGFiLmNsYXNzTmFtZSA9IFwibmF2LXByb2plY3RzLXRhYlwiO1xuICAgICAgICBcbiAgICBuYXYuYXBwZW5kKGluYm94LCB0b2RheSwgd2VlaywgcHJvamVjdHMsIHByb2plY3RzVGFiKTtcblxuICAgIGNvbnN0IG1vYmlsZU5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbW9iaWxlTmF2LmNsYXNzTmFtZSA9IFwibW9iaWxlLW5hdlwiO1xuXG4gICAgY29uc3QgaGFtYnVyZ2VyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoYW1idXJnZXJCdXR0b24uY2xhc3NOYW1lID0gXCJoYW1idXJnZXItYnV0dG9uXCI7XG4gICAgY29uc3QgaGFtYkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBoYW1iSWNvbi5jbGFzc05hbWUgPSBcIm1hdGVyaWFsLWljb25zLXJvdW5kIG1vYmlsZS1idXR0b25zXCI7XG4gICAgaGFtYkljb24udGV4dENvbnRlbnQgPSBcIm1lbnVcIjtcbiAgICBoYW1idXJnZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dOYXYpO1xuICAgIGhhbWJ1cmdlckJ1dHRvbi5hcHBlbmQoaGFtYkljb24pO1xuICAgIFxuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkQnV0dG9uLmNsYXNzTmFtZSA9IFwiYWRkLWJ1dHRvblwiO1xuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0Zvcm0pO1xuXG4gICAgY29uc3QgYWRkSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGFkZEljb24uY2xhc3NOYW1lID0gXCJtYXRlcmlhbC1pY29ucy1yb3VuZCBtb2JpbGUtYnV0dG9uc1wiO1xuICAgIGFkZEljb24udGV4dENvbnRlbnQgPSBcImFkZF9jaXJjbGVcIjtcbiAgICBhZGRCdXR0b24uYXBwZW5kKGFkZEljb24pO1xuICAgIG1vYmlsZU5hdi5hcHBlbmQoYWRkQnV0dG9uLCBoYW1idXJnZXJCdXR0b24pO1xuICAgIHdyYXBwZXIuYXBwZW5kKGhlYWRlciwgbWFpbiwgbmF2LCBtb2JpbGVOYXYpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKS5hcHBlbmQod3JhcHBlcik7XG5cbiAgICByZW5kZXJQcm9qZWN0c1RhYigpO1xufVxuXG5mdW5jdGlvbiBzaG93TmF2KCkge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIik7XG4gICAgY29uc3QgZm9ybVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0td3JhcHBlclwiKTtcbiAgICBcbiAgICBpZiAoZm9ybVdyYXBwZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZm9ybS13cmFwcGVyLW9wZW5cIikpIHtcbiAgICAgICAgZm9ybVdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZShcImZvcm0td3JhcHBlci1vcGVuXCIpO1xuICAgICAgICBmb3JtV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiZm9ybS13cmFwcGVyLWNsb3NlZFwiKTtcbiAgICB9XG5cbiAgICBpZiAobmF2LmNsYXNzTGlzdC5jb250YWlucyhcIm5hdi1jbG9zZWRcIikpIHtcbiAgICAgICAgbmF2LmNsYXNzTmFtZSA9IFwibmF2LW9wZW5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBuYXYuY2xhc3NOYW1lID0gXCJuYXYtY2xvc2VkXCI7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJBbGxUb2RvcygpIHtcbiAgICBpZiAodG9kb1N0b3JhZ2UgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICAgICAgICBjb25zdCBhbGxUb2RvcyA9IG1haW4ucXVlcnlTZWxlY3RvckFsbChcIi50b2RvLXdyYXBwZXJcIik7XG5cbiAgICAgICAgYWxsVG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgICAgIG1haW4ucmVtb3ZlQ2hpbGQodG9kbyk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgdG9kb1N0b3JhZ2UuZm9yRWFjaChmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgcmVuZGVyVG9kbyhpdGVtLnRpdGxlLCBpdGVtLmRlc2MsIGl0ZW0uZHVlRGF0ZSwgaW5kZXgpO1xuICAgICAgICB9KVxuICAgIH1cbn1cblxuXG5mdW5jdGlvbiByZW5kZXJUb2RvKHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBpbmRleCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgICBjb25zdCB0b2RvV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kb1dyYXBwZXIuY2xhc3NOYW1lID0gXCJ0b2RvLXdyYXBwZXJcIjtcbiAgICB0b2RvV3JhcHBlci5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XG5cbiAgICBjb25zdCB0b2RvTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kb01haW4uY2xhc3NOYW1lID0gXCJ0b2RvLW1haW5cIjtcblxuICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgIHRvZG9UaXRsZS5jbGFzc05hbWUgPSBcInRvZG8tdGl0bGVcIjtcbiAgICBjb25zdCB0b2RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRvZG9EYXRlLmNsYXNzTmFtZSA9IFwidG9kby1kYXRlXCI7XG4gICAgdG9kb0RhdGUudGV4dENvbnRlbnQgPSBkdWVEYXRlO1xuXG4gICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGRlbGV0ZUljb24uY2xhc3NOYW1lID0gXCJtYXRlcmlhbC1pY29ucyBkZWxldGUtaWNvblwiO1xuICAgIGRlbGV0ZUljb24udGV4dENvbnRlbnQgPSBcImRlbGV0ZVwiO1xuICAgIGRlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNvbmZpcm1EZWxldGUpXG5cbiAgICBjb25zdCBleHBhbmRNb3JlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGV4cGFuZE1vcmVJY29uLmNsYXNzTmFtZSA9IFwibWF0ZXJpYWwtaWNvbnNcIjtcbiAgICBleHBhbmRNb3JlSWNvbi50ZXh0Q29udGVudCA9IFwiZXhwYW5kX21vcmVcIjtcbiAgICBleHBhbmRNb3JlSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXhwYW5kVG9kbyk7XG5cbiAgICBjb25zdCB1bmNrZWNrZWRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgdW5ja2Vja2VkSWNvbi5jbGFzc05hbWUgPSBcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCI7XG4gICAgdW5ja2Vja2VkSWNvbi50ZXh0Q29udGVudCA9IFwicmFkaW9fYnV0dG9uX3VuY2hlY2tlZFwiO1xuXG4gICAgY29uc3QgZWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBlZGl0SWNvbi5jbGFzc05hbWUgPSBcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCI7XG4gICAgZWRpdEljb24udGV4dENvbnRlbnQgPSBcImVkaXRfbm90ZVwiO1xuICAgIGVkaXRJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93RWRpdCk7XG5cbiAgICBjb25zdCBwcmlvcml0eUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBwcmlvcml0eUljb24uY2xhc3NOYW1lID0gXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiXG4gICAgcHJpb3JpdHlJY29uLnRleHRDb250ZW50ID0gXCJwcmlvcml0eV9oaWdoXCI7XG4gICAgcHJpb3JpdHlJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhY3RpdmF0ZVByaW9yaXR5KTtcbiAgICBpZiAodG9kb1N0b3JhZ2VbaW5kZXhdLnByaW9yaXR5ID09PSB0cnVlKSB7XG4gICAgICAgIHByaW9yaXR5SWNvbi5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktaWNvbi1hY3RpdmF0ZWRcIik7XG4gICAgfVxuXG4gICAgY29uc3QgdG9kb1NlY29uZGFyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kb1NlY29uZGFyeS5jbGFzc05hbWUgPSBcInRvZG8tc2Vjb25kYXJ5XCI7XG4gICAgY29uc3QgdG9kb0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0b2RvRGVzYy50ZXh0Q29udGVudCA9IGRlc2M7XG4gICAgdG9kb0Rlc2MuY2xhc3NOYW1lID0gXCJ0b2RvLWRlc2NcIjtcblxuICAgIGNvbnN0IHNlY29uZGFyeUljb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWNvbmRhcnlJY29ucy5jbGFzc05hbWUgPSBcInRvZG8tc2Vjb25kYXJ5LWljb25zXCJcbiAgICBzZWNvbmRhcnlJY29ucy5hcHBlbmQocHJpb3JpdHlJY29uLCBlZGl0SWNvbiwgZGVsZXRlSWNvbik7XG5cbiAgICB0b2RvU2Vjb25kYXJ5LmFwcGVuZCh0b2RvRGVzYywgc2Vjb25kYXJ5SWNvbnMpO1xuXG4gICAgdG9kb01haW4uYXBwZW5kKHVuY2tlY2tlZEljb24sIHRvZG9UaXRsZSwgdG9kb0RhdGUsIGV4cGFuZE1vcmVJY29uKTtcbiAgICB0b2RvV3JhcHBlci5hcHBlbmQodG9kb01haW4sIHRvZG9TZWNvbmRhcnkpO1xuICAgIG1haW4uYXBwZW5kKHRvZG9XcmFwcGVyKTtcbn1cblxuZnVuY3Rpb24gZXhwYW5kVG9kbyhlKSB7XG4gICAgY29uc3QgdGhpc1NlY29uZGFyeSA9IHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1zZWNvbmRhcnlcIik7XG5cbiAgICBpZiAodGhpcy50ZXh0Q29udGVudCA9PT0gXCJleHBhbmRfbW9yZVwiKSB7XG4gICAgICAgIHRoaXMudGV4dENvbnRlbnQgPSBcImV4cGFuZF9sZXNzXCI7XG5cbiAgICAgICAgdGhpc1NlY29uZGFyeS5jbGFzc0xpc3QuYWRkKFwidG9kby1zZWNvbmRhcnktYWN0aXZlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGV4dENvbnRlbnQgPSBcImV4cGFuZF9tb3JlXCI7XG4gICAgICAgIHRoaXNTZWNvbmRhcnkuY2xhc3NMaXN0LnJlbW92ZShcInRvZG8tc2Vjb25kYXJ5LWFjdGl2ZVwiKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFjdGl2YXRlUHJpb3JpdHkoZSkge1xuICAgIGNvbnN0IHRoaXNJbmRleCA9IHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC5pbmRleDtcbiAgICBzZXRQcmlvcml0eSh0aGlzSW5kZXgpO1xuICAgIGlmICh0aGlzLmNsYXNzTGlzdC5jb250YWlucyhcInByaW9yaXR5LWljb24tYWN0aXZhdGVkXCIpKSB7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShcInByaW9yaXR5LWljb24tYWN0aXZhdGVkXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWljb24tYWN0aXZhdGVkXCIpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyRm9ybSgpIHtcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53cmFwcGVyXCIpO1xuXG4gICAgY29uc3QgZm9ybVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm1XcmFwcGVyLmNsYXNzTmFtZSA9IFwiZm9ybS13cmFwcGVyIGZvcm0td3JhcHBlci1jbG9zZWRcIjtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5cbiAgICBjb25zdCB0aXRsZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0b2RvLXRpdGxlXCIpO1xuICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIkNob29zZSBhIG5ldyB0aXRsZTpcIjtcblxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0b2RvLXRpdGxlXCIpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLXRpdGxlXCIpO1xuXG4gICAgY29uc3QgZGVzY1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGRlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBkZXNjTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidG9kby1kZXNjXCIpO1xuICAgIGRlc2NMYWJlbC50ZXh0Q29udGVudCA9IFwiV3JpdGUgYSBkZXNjcmlwdGlvbiBmb3IgeW91ciBuZXcgVG9kbzpcIjtcblxuICAgIGNvbnN0IGRlc2NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkZXNjSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgZGVzY0lucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0b2RvLWRlc2NcIik7XG4gICAgZGVzY0lucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby1kZXNjXCIpO1xuXG4gICAgY29uc3QgZGF0ZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBkYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidG9kby1kYXRlXCIpO1xuICAgIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiV2hlbiBpcyB0aGlzIFRvZG8gZHVlP1wiO1xuXG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRvZG8tZGF0ZVwiKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLWRhdGVcIik7XG5cbiAgICBjb25zdCBwcm9qZWN0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgcHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHByb2plY3RMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0b2RvLXByb2plY3RcIik7XG4gICAgcHJvamVjdExhYmVsLnRleHRDb250ZW50ID0gXCJBc3NpZ24geW91ciBUb2RvIHRvIGEgcHJvamVjdDpcIjtcblxuICAgIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgcHJvamVjdElucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby1wcm9qZWN0XCIpXG4gICAgLy8gdG9kb1Byb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgLy8gICAgIGNvbnN0IG5ld09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgLy8gICAgIG5ld09wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBwcm9qZWN0KTtcbiAgICAvLyAgICAgbmV3T3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdDtcbiAgICAvLyAgICAgcHJvamVjdElucHV0LmFwcGVuZChuZXdPcHRpb24pO1xuICAgIC8vIH0pXG5cbiAgICBjb25zdCBwcmlvcml0eVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByaW9yaXR5V3JhcHBlci5jbGFzc05hbWUgPSBcImZvcm0tcHJpb3JpdHktd3JhcHBlclwiO1xuICAgIGNvbnN0IHByaW9yaXR5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHByaW9yaXR5VGV4dC50ZXh0Q29udGVudCA9IFwiSXMgdGhpcyBUb2RvIGEgcHJpb3JpdHk/XCI7XG5cbiAgICBjb25zdCBwcmlvcml0eVllc0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHByaW9yaXR5WWVzTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidG9kby1wcmlvcml0eS15ZXNcIik7XG4gICAgcHJpb3JpdHlZZXNMYWJlbC50ZXh0Q29udGVudCA9IFwiWWVzXCI7XG5cbiAgICBjb25zdCBwcmlvcml0eU5vTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgcHJpb3JpdHlOb0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRvZG8tcHJpb3JpdHktbm9cIik7XG4gICAgcHJpb3JpdHlOb0xhYmVsLnRleHRDb250ZW50ID0gXCJOb1wiO1xuXG4gICAgY29uc3QgcHJpb3JpdHlSYWRpb3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByaW9yaXR5UmFkaW9zLmNsYXNzTmFtZSA9IFwiZm9ybS1yYWRpb3NcIjtcblxuICAgIGNvbnN0IHByaW9yaXR5WWVzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgcHJpb3JpdHlZZXNJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XG4gICAgcHJpb3JpdHlZZXNJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidG9kby1wcmlvcml0eVwiKTtcbiAgICBwcmlvcml0eVllc0lucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby1wcmlvcml0eS15ZXNcIik7XG4gICAgcHJpb3JpdHlZZXNJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB0cnVlKTtcblxuICAgIGNvbnN0IHByaW9yaXR5Tm9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBwcmlvcml0eU5vSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xuICAgIHByaW9yaXR5Tm9JbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidG9kby1wcmlvcml0eVwiKTtcbiAgICBwcmlvcml0eU5vSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLXByaW9yaXR5LW5vXCIpO1xuICAgIHByaW9yaXR5Tm9JbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBmYWxzZSk7XG4gICAgcHJpb3JpdHlOb0lucHV0LnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgdHJ1ZSk7XG5cbiAgICBjb25zdCBmb3JtQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybUJ1dHRvbnMuY2xhc3NOYW1lID0gXCJmb3JtLWJ1dHRvbnNcIjtcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3VibWl0LWJ1dHRvblwiKTtcbiAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJEb25lXCIpXG4gICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdWJtaXRGb3JtKTtcblxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjYW5jZWwtYnV0dG9uXCIpXG4gICAgY2FuY2VsQnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gICAgY2FuY2VsQnV0dG9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiQ2FuY2VsXCIpXG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93Rm9ybSk7XG5cbiAgICB0aXRsZVdyYXBwZXIuYXBwZW5kKHRpdGxlTGFiZWwsIHRpdGxlSW5wdXQpO1xuICAgIGRlc2NXcmFwcGVyLmFwcGVuZChkZXNjTGFiZWwsIGRlc2NJbnB1dCk7XG4gICAgZGF0ZVdyYXBwZXIuYXBwZW5kKGRhdGVMYWJlbCwgZGF0ZUlucHV0KTtcbiAgICBwcm9qZWN0V3JhcHBlci5hcHBlbmQocHJvamVjdExhYmVsLCBwcm9qZWN0SW5wdXQpO1xuICAgIGZvcm1CdXR0b25zLmFwcGVuZChzdWJtaXRCdXR0b24sIGNhbmNlbEJ1dHRvbik7XG4gICAgcHJpb3JpdHlSYWRpb3MuYXBwZW5kKHByaW9yaXR5WWVzTGFiZWwsIHByaW9yaXR5WWVzSW5wdXQsIHByaW9yaXR5Tm9MYWJlbCwgcHJpb3JpdHlOb0lucHV0KTtcbiAgICBwcmlvcml0eVdyYXBwZXIuYXBwZW5kKHByaW9yaXR5VGV4dCwgcHJpb3JpdHlSYWRpb3MpO1xuICAgIGZvcm0uYXBwZW5kKHRpdGxlV3JhcHBlciwgZGVzY1dyYXBwZXIsIGRhdGVXcmFwcGVyLCBwcm9qZWN0V3JhcHBlciwgcHJpb3JpdHlXcmFwcGVyLCBmb3JtQnV0dG9ucyk7XG4gICAgZm9ybVdyYXBwZXIuYXBwZW5kKGZvcm0pO1xuICAgIHdyYXBwZXIuYXBwZW5kKGZvcm1XcmFwcGVyKTtcbn1cblxuZnVuY3Rpb24gc3VibWl0Rm9ybShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLXRpdGxlXCIpO1xuICAgIGNvbnN0IGRlc2MgPSAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWRlc2NcIik7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1kYXRlXCIpO1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tcHJvamVjdFwiKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSd0b2RvLXByaW9yaXR5J106Y2hlY2tlZFwiKTtcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdC1idXR0b25cIik7XG4gICAgXG4gICAgaWYgKCEvXFxTLy50ZXN0KHRpdGxlLnZhbHVlKSkge1xuICAgICAgICB0aXRsZS5zdHlsZS5ib3JkZXIgPSBcIjAuMTVyZW0gdmFyKC0tcmVkKSBzb2xpZFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRpdGxlLnN0eWxlLmJvcmRlciA9IFwiXCI7XG4gICAgfVxuICAgIGlmICghL1xcUy8udGVzdChkZXNjLnZhbHVlKSkge1xuICAgICAgICBkZXNjLnN0eWxlLmJvcmRlciA9IFwiMC4xNXJlbSB2YXIoLS1yZWQpIHNvbGlkXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGVzYy5zdHlsZS5ib3JkZXIgPSBcIlwiO1xuICAgIH1cbiAgICBpZiAoIS9cXFMvLnRlc3QoZGF0ZS52YWx1ZSkpIHtcbiAgICAgICAgZGF0ZS5zdHlsZS5ib3JkZXIgPSBcIjAuMTVyZW0gdmFyKC0tcmVkKSBzb2xpZFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGUuc3R5bGUuYm9yZGVyID0gXCJcIjtcbiAgICB9XG4gICAgaWYgKCEvXFxTLy50ZXN0KHRpdGxlLnZhbHVlKSB8fCAhL1xcUy8udGVzdChkZXNjLnZhbHVlKSB8fCAhL1xcUy8udGVzdChkYXRlLnZhbHVlKSkge1xuICAgICAgICByZXR1cm5cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc3VibWl0QnV0dG9uLnZhbHVlID09PSBcIkRvbmVcIikge1xuICAgICAgICBhZGRUb2RvKHRpdGxlLnZhbHVlLCBkZXNjLnZhbHVlLCBkYXRlLnZhbHVlLCBwcm9qZWN0LnZhbHVlLCBKU09OLnBhcnNlKHByaW9yaXR5LnZhbHVlKSk7XG4gICAgICAgIHNob3dGb3JtKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3VibWl0QnV0dG9uLnZhbHVlID09PSBcIkVkaXRcIikge1xuICAgICAgICAgICAgZWRpdFRvZG8odGl0bGUudmFsdWUsIGRlc2MudmFsdWUsIGRhdGUudmFsdWUsIHByb2plY3QudmFsdWUsIEpTT04ucGFyc2UocHJpb3JpdHkudmFsdWUpLCBzdWJtaXRCdXR0b24uZGF0YXNldC5lZGl0SW5kZXgpO1xuICAgICAgICAgICAgc3VibWl0QnV0dG9uLnZhbHVlID0gXCJEb25lXCI7XG4gICAgICAgICAgICBkZWxldGUgc3VibWl0QnV0dG9uLmRhdGFzZXQuZWRpdEluZGV4O1xuICAgICAgICAgICAgc2hvd0Zvcm0oKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gc2hvd0Zvcm0oYWN0aW9uLCBjYWxsZXIpIHtcbiAgICBjb25zdCBmb3JtV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS13cmFwcGVyXCIpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLXRpdGxlXCIpO1xuICAgIGNvbnN0IGRlc2MgPSAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWRlc2NcIik7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1kYXRlXCIpO1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tcHJvamVjdFwiKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFtuYW1lPSd0b2RvLXByaW9yaXR5J11cIik7XG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXQtYnV0dG9uXCIpO1xuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLWJ1dHRvblwiKTtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpO1xuXG4gICAgaWYgKGZvcm1XcmFwcGVyLmNsYXNzTGlzdC5jb250YWlucyhcImZvcm0td3JhcHBlci1vcGVuXCIpICYmIHRoaXMgPT09IGFkZEJ1dHRvbiAmJiBzdWJtaXRCdXR0b24udmFsdWUgPT09IFwiRWRpdFwiKSByZXR1cm5cbiAgICBpZiAobmF2LmNsYXNzTGlzdC5jb250YWlucyhcIm5hdi1vcGVuXCIpKSB7XG4gICAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKFwibmF2LW9wZW5cIik7XG4gICAgICAgIG5hdi5jbGFzc0xpc3QuYWRkKFwibmF2LWNsb3NlZFwiKTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uID09PSBcImVkaXRUb2RvXCIpIHtcbiAgICAgICAgY29uc3QgdGhpc0luZGV4ID0gY2FsbGVyLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmRhdGFzZXQuaW5kZXg7XG4gICAgICAgIHRpdGxlLnZhbHVlID0gdG9kb1N0b3JhZ2VbdGhpc0luZGV4XS50aXRsZTtcbiAgICAgICAgZGVzYy52YWx1ZSA9IHRvZG9TdG9yYWdlW3RoaXNJbmRleF0uZGVzYztcbiAgICAgICAgZGF0ZS52YWx1ZSA9IHRvZG9TdG9yYWdlW3RoaXNJbmRleF0uZHVlRGF0ZTtcbiAgICAgICAgcHJvamVjdC52YWx1ZSA9IHRvZG9TdG9yYWdlW3RoaXNJbmRleF0ucHJvamVjdDtcbiAgICAgICAgaWYgKHRvZG9TdG9yYWdlW3RoaXNJbmRleF0ucHJpb3JpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHByaW9yaXR5WzBdLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgcHJpb3JpdHlbMV0uY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJpb3JpdHlbMF0uY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgcHJpb3JpdHlbMV0uY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBzdWJtaXRCdXR0b24udmFsdWUgPSBcIkVkaXRcIjtcbiAgICAgICAgc3VibWl0QnV0dG9uLmRhdGFzZXQuZWRpdEluZGV4ID0gdGhpc0luZGV4O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRpdGxlLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZGVzYy52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGRhdGUudmFsdWUgPSBcIlwiO1xuICAgICAgICBwcm9qZWN0LnZhbHVlID0gXCJEZWZhdWx0XCI7XG4gICAgICAgIHByaW9yaXR5LnZhbHVlID0gdHJ1ZTtcbiAgICAgICAgc3VibWl0QnV0dG9uLnZhbHVlID0gXCJEb25lXCI7XG4gICAgICAgIHByaW9yaXR5WzBdLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgcHJpb3JpdHlbMV0uY2hlY2tlZCA9IHRydWVcbiAgICB9XG4gICAgXG4gICAgaWYgKGZvcm1XcmFwcGVyLmNsYXNzTGlzdC5jb250YWlucyhcImZvcm0td3JhcHBlci1jbG9zZWRcIikpIHtcbiAgICAgICAgZm9ybVdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZShcImZvcm0td3JhcHBlci1jbG9zZWRcIik7XG4gICAgICAgIGZvcm1XcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLXdyYXBwZXItb3BlblwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3JtV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKFwiZm9ybS13cmFwcGVyLW9wZW5cIik7XG4gICAgICAgIGZvcm1XcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLXdyYXBwZXItY2xvc2VkXCIpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY29uZmlybURlbGV0ZShlKSB7XG4gICAgY29uc3QgdGhpc0luZGV4ID0gdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5kYXRhc2V0LmluZGV4O1xuXG4gICAgaWYgKHRoaXMuaGFzQXR0cmlidXRlKFwiY29uZmlybS1kZWxldGVcIikpIHtcbiAgICAgICAgZGVsZXRlVG9kbyh0aGlzSW5kZXgpO1xuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgdGhpc0Rlc2MgPSB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZGVzY1wiKTtcblxuICAgIHRoaXNEZXNjLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWNvbmZpcm0tZGVsZXRlXCIpO1xuICAgIHRoaXNEZXNjLnRleHRDb250ZW50ID0gXCJQcmVzcyBhZ2FpbiB0aGUgZGVsZXRlIGJ1dHRvbiB0byBjb25maXJtIVwiO1xuICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiY29uZmlybS1kZWxldGVcIiwgdHJ1ZSk7XG5cbiAgICBsZXQgY2xlYXJEZWxldGVUaW1lciA9IHNldFRpbWVvdXQoKCkgID0+IHtcbiAgICBpZiAodGhpc0Rlc2MgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGNsZWFyVGltZW91dChjbGVhckRlbGV0ZVRpbWVyKVxuXG4gICAgdGhpc0Rlc2MuY2xhc3NMaXN0LnJlbW92ZShcInRvZG8tY29uZmlybS1kZWxldGVcIik7XG4gICAgdGhpc0Rlc2MudGV4dENvbnRlbnQgPSB0b2RvU3RvcmFnZVt0aGlzSW5kZXhdLmRlc2M7XG4gICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoXCJjb25maXJtLWRlbGV0ZVwiKTtcbiAgICB9LCA0MDAwKVxufVxuXG5mdW5jdGlvbiBzaG93RWRpdChlKSB7XG4gICAgY29uc3QgY2FsbGVyID0gdGhpcztcbiAgICBzaG93Rm9ybShcImVkaXRUb2RvXCIsIGNhbGxlcik7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RzVGFiKCkge1xuICAgIGNvbnN0IHByb2plY3RzVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtcHJvamVjdHMtdGFiXCIpO1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIik7XG4gICAgXG4gICAgY29uc3QgbmV3UHJvamVjdFBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdQcm9qZWN0UGFuZWwuY2xhc3NOYW1lID0gXCJuYXYtcHJvamVjdHMtbmV3XCI7XG4gICAgY29uc3QgbmV3UHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG5ld1Byb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBuZXdQcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm5ldy1wcm9qZWN0LW5hbWVcIik7XG4gICAgbmV3UHJvamVjdElucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmV3LXByb2plY3QtbmFtZVwiKTtcbiAgICBuZXdQcm9qZWN0SW5wdXQucGxhY2Vob2xkZXIgPSBcIkNob29zZSBuYW1lIGZvciBhIG5ldyBwcm9qZWN0XCJcblxuICAgIGNvbnN0IG5ld1Byb2plY3RCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG5ld1Byb2plY3RCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXctcHJvamVjdC1idXR0b25cIik7XG4gICAgbmV3UHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkIG5ldyBwcm9qZWN0XCI7XG4gICAgbmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlTmV3UHJvamVjdCk7XG5cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVQcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVsZXRlLXByb2plY3QtYnV0dG9uXCIpO1xuICAgIGRlbGV0ZVByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkRlbGV0ZSBwcm9qZWN0XCI7XG4gICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlRGVsZXRlUHJvamVjdCk7XG5cbiAgICBuZXdQcm9qZWN0QnV0dG9ucy5hcHBlbmQobmV3UHJvamVjdEJ1dHRvbiwgZGVsZXRlUHJvamVjdEJ1dHRvbik7XG4gICAgbmV3UHJvamVjdFBhbmVsLmFwcGVuZChuZXdQcm9qZWN0SW5wdXQsIG5ld1Byb2plY3RCdXR0b25zKTtcblxuICAgIGNvbnN0IHNlbGVjdFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIHNlbGVjdFByb2plY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuYXYtcHJvamVjdHMtdGFiLXNlbGVjdFwiKVxuXG4gICAgLy8gY29uc3Qgbm9Qcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAvLyBub1Byb2plY3QudmFsdWUgPSBcInRlc3RcIjtcbiAgICAvLyBub1Byb2plY3QudGV4dENvbnRlbnQgPSBcIk5vIHByb2plY3Qgc2VsZWN0ZWRcIjtcblxuICAgIC8vIHNlbGVjdFByb2plY3QuYXBwZW5kKG5vUHJvamVjdCk7XG4gICAgLy8gdG9kb1Byb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgLy8gICAgIGNvbnN0IG5ld09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgLy8gICAgIG5ld09wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBwcm9qZWN0KTtcbiAgICAvLyAgICAgbmV3T3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdDtcbiAgICAvLyAgICAgc2VsZWN0UHJvamVjdC5hcHBlbmQobmV3T3B0aW9uKTtcbiAgICAvLyB9KVxuICAgIHByb2plY3RzVGFiLmFwcGVuZChzZWxlY3RQcm9qZWN0LCBuZXdQcm9qZWN0UGFuZWwpO1xuICAgIG5hdi5hcHBlbmQocHJvamVjdHNUYWIpO1xufVxuXG5mdW5jdGlvbiBzaG93UHJvamVjdHNUYWIoKSB7XG4gICAgY29uc3QgcHJvamVjdHNUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1wcm9qZWN0cy10YWJcIilcbiAgICBpZiAocHJvamVjdHNUYWIuY2xhc3NMaXN0LmNvbnRhaW5zKFwibmF2LXByb2plY3RzLXRhYi1vcGVuXCIpKSB7XG4gICAgICAgIHByb2plY3RzVGFiLmNsYXNzTGlzdC5yZW1vdmUoXCJuYXYtcHJvamVjdHMtdGFiLW9wZW5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJvamVjdHNUYWIuY2xhc3NMaXN0LmFkZChcIm5hdi1wcm9qZWN0cy10YWItb3BlblwiKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RPcHRpb25zKCkge1xuICAgIGNvbnN0IGFsbFNlbGVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VsZWN0XCIpO1xuICAgIGFsbFNlbGVjdHMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc3QgYWxsT3B0aW9ucyA9IGl0ZW0ucXVlcnlTZWxlY3RvckFsbChcIm9wdGlvblwiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxPcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpdGVtLnJlbW92ZUNoaWxkKGFsbE9wdGlvbnNbaV0pXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBhbGxTZWxlY3RzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IG5vUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG5vUHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIm5vbmVcIik7XG4gICAgICAgIG5vUHJvamVjdC50ZXh0Q29udGVudCA9IFwiTm8gcHJvamVjdCBzZWxlY3RlZFwiOyAgICBcbiAgICAgICAgaXRlbS5hcHBlbmQobm9Qcm9qZWN0KTtcbiAgICAgICAgdG9kb1Byb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgbmV3T3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHByb2plY3QpO1xuICAgICAgICAgICAgbmV3T3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdDtcbiAgICAgICAgICAgIGl0ZW0uYXBwZW5kKG5ld09wdGlvbik7XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gaGFuZGxlTmV3UHJvamVjdChlKSB7XG4gICAgY29uc3QgbmV3UHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1wcm9qZWN0LW5hbWVcIik7XG4gICAgY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXByb2plY3QtYnV0dG9uXCIpO1xuICAgIGlmIChhZGRQcm9qZWN0KG5ld1Byb2plY3ROYW1lLnZhbHVlKSA9PT0gXCJlcnJvclwiKSB7XG4gICAgICAgIG5ld1Byb2plY3ROYW1lLnZhbHVlID0gXCJUaGlzIHByb2plY3QgYWxyZWFkeSBleGlzdHMgb3IgaW5wdXQgaXMgZW1wdHkhXCJcbiAgICB9IGVsc2Uge1xuICAgICAgICBuZXdQcm9qZWN0TmFtZS52YWx1ZSA9IFwiUHJvamVjdCBhZGRlZCFcIlxuICAgICAgICByZW5kZXJQcm9qZWN0T3B0aW9ucygpO1xuICAgIH1cbiAgICBuZXdQcm9qZWN0QnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVOZXdQcm9qZWN0KTtcbiAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG5ld1Byb2plY3ROYW1lLnZhbHVlID0gXCJcIjtcbiAgICAgICAgbmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlTmV3UHJvamVjdCk7XG4gICAgfSwgMTAwMCk7XG59XG5cblxuZnVuY3Rpb24gaGFuZGxlRGVsZXRlUHJvamVjdCgpIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXByb2plY3QtbmFtZVwiKTtcbiAgICBjb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctcHJvamVjdC1idXR0b25cIik7XG4gICAgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVsZXRlLXByb2plY3QtYnV0dG9uXCIpO1xuICAgIGNvbnN0IHNlbGVjdFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdi1wcm9qZWN0cy10YWItc2VsZWN0XCIpO1xuICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IHNlbGVjdFByb2plY3Qub3B0aW9uc1tzZWxlY3RQcm9qZWN0LnNlbGVjdGVkSW5kZXhdO1xuXG4gICAgaWYgKHNlbGVjdGVkUHJvamVjdC5oYXNBdHRyaWJ1dGUoXCJjb25maXJtLWRlbGV0ZVwiKSkge1xuICAgICAgICBkZWxldGVQcm9qZWN0KHNlbGVjdGVkUHJvamVjdC52YWx1ZSk7XG4gICAgICAgIG5ld1Byb2plY3ROYW1lLnZhbHVlID0gXCJcIjtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHNlbGVjdGVkUHJvamVjdC52YWx1ZSA9PT0gXCJub25lXCIpIHJldHVyblxuXG4gICAgc2VsZWN0ZWRQcm9qZWN0LnNldEF0dHJpYnV0ZShcImNvbmZpcm0tZGVsZXRlXCIsIHRydWUpO1xuICAgIG5ld1Byb2plY3ROYW1lLnZhbHVlID0gXCJDbGljayB0d2ljZSB0byBkZWxldGUgc2VsZWN0ZWQgcHJvamVjdC5cIlxuICAgIG5ld1Byb2plY3RCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZU5ld1Byb2plY3QpO1xuICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbmV3UHJvamVjdE5hbWUudmFsdWUgPSBcIlwiO1xuICAgICAgICBuZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVOZXdQcm9qZWN0KTtcblxuICAgICAgICBpZiAoc2VsZWN0ZWRQcm9qZWN0ID09PSB1bmRlZmluZWQpIHJldHVybiBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIHNlbGVjdGVkUHJvamVjdC5yZW1vdmVBdHRyaWJ1dGUoXCJjb25maXJtLWRlbGV0ZVwiKVxuICAgIH0sIDIwMDApO1xufVxuXG5leHBvcnQge3JlbmRlckxheW91dCwgcmVuZGVyQWxsVG9kb3MsIHJlbmRlckZvcm0sIHJlbmRlclByb2plY3RPcHRpb25zfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlcy9zdHlsZS5jc3NcIlxuaW1wb3J0IHtyZW5kZXJMYXlvdXQsIHJlbmRlckFsbFRvZG9zLCByZW5kZXJGb3JtLCByZW5kZXJQcm9qZWN0T3B0aW9uc30gZnJvbSBcIi4vbW9kdWxlcy9kb21cIlxuaW1wb3J0IHtzeW5jRGF0YSwgYWRkVG9kb30gZnJvbSBcIi4vbW9kdWxlcy9kYXRhXCJcblxuc3luY0RhdGEoXCJ0b2RvXCIpO1xuc3luY0RhdGEoXCJwcm9qZWN0c1wiKTtcbnJlbmRlckxheW91dCgpO1xucmVuZGVyRm9ybSgpO1xucmVuZGVyQWxsVG9kb3MoKTtcbnJlbmRlclByb2plY3RPcHRpb25zKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==