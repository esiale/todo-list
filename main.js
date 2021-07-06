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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --primary: rgb(230, 230, 255);\n    --secondary: rgb(204, 204, 255);\n    --tertiary: rgb(179, 179, 255);\n    --quaternary: rgb(153, 153, 255);\n    --quinary: rgb(128, 128, 255);\n    --senary: rgb(61, 61, 92);\n    --septenary: rgb(240, 240, 245);\n    --dark-red: rgb(153, 0, 0);\n    --red: rgb(204, 0, 0);\n}\n\n* {\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n.wrapper {\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\nheader {\n    min-height: 5%;\n    background-color: var(--secondary);\n    display: flex;\n    align-items: center;\n    border-bottom: 0.15rem var(--tertiary) solid;\n}\n\n.logo {\n    font-size: 1.2rem;\n    margin: 0.5rem;\n    font-family: 'Lobster', cursive;\n    color: var(--quinary);\n}\n\nmain {\n    background-color: var(--primary);\n    flex: 1;\n    overflow: auto;\n}\n\nnav {\n    display: flex;\n    background-color: var(--secondary);\n    width: 100%;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    font-family: 'Titillium Web', sans-serif;\n    color: var(--senary);\n    font-size: 1.3rem;\n    transition: all 0.2s ease-in;\n    overflow: hidden;\n}\n\n.nav-closed {\n    visibility: hidden;\n    max-height: 0;\n}\n\n.nav-open {\n    visibility: visible;\n    max-height: 50%;\n}\n\nnav div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    border-top: 0.13rem var(--primary) solid;\n}\n\n.mobile-nav {\n    min-height: 6%;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    justify-items: center;;\n    align-items: center;\n    border-top: 0.15rem var(--secondary) solid;\n}\n\n.add-button {\n    justify-self: start;\n    margin-left: 1rem;\n}\n\n.material-icons-round.mobile-buttons {\n    color: var(--quinary);\n    font-size: 2rem;\n}\n\n.todo-wrapper {\n    display: flex;\n    flex-direction: column;\n    font-family: 'Lato', sans-serif;\n    color: var(--senary);\n}\n\n.todo-main {\n    background-color: #FFFFFF;\n    width: 100%;\n    display: flex;\n    justify-content: space-between; \n    align-items: center;\n    border-bottom: 0.1rem var(--primary) solid;\n    padding: 0 0.3rem;\n    font-size: 0.9rem;\n    font-weight: 600;\n}\n\n.todo-secondary {\n    background-color: var(--septenary);\n    display: none;\n    visibility: hidden;\n    justify-content: space-between;\n}\n\n.todo-secondary-active {\n    display: flex;\n    visibility: visible;\n}\n\n.todo-secondary p {\n    margin: 0.3rem;\n    font-size: 0.9rem;\n    font-style: italic;\n}\n\n.todo-secondary-icons {\n    display: flex;\n    justify-content: flex-start;\n    margin: 0.4rem;\n}\n\n.todo-secondary-icons span {\n    margin-left: 0.2rem;\n    font-size: 1.8rem;\n}\n\n.todo-main span {\n    margin: 0 0.3rem;\n}\n\n.delete-icon {\n    color: var(--dark-red);\n}\n\n.priority-icon-activated {\n    color: var(--red);\n}\n\n.todo-title {\n    flex-grow: 2;\n    text-align: left;\n}\n\n.todo-date {\n    flex-grow: 1;\n    text-align: center;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;IACI,6BAA6B;IAC7B,+BAA+B;IAC/B,8BAA8B;IAC9B,gCAAgC;IAChC,6BAA6B;IAC7B,yBAAyB;IACzB,+BAA+B;IAC/B,0BAA0B;IAC1B,qBAAqB;AACzB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,8BAA8B;AAClC;;AAEA;IACI,cAAc;IACd,kCAAkC;IAClC,aAAa;IACb,mBAAmB;IACnB,4CAA4C;AAChD;;AAEA;IACI,iBAAiB;IACjB,cAAc;IACd,+BAA+B;IAC/B,qBAAqB;AACzB;;AAEA;IACI,gCAAgC;IAChC,OAAO;IACP,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC,WAAW;IACX,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;IACnB,wCAAwC;IACxC,oBAAoB;IACpB,iBAAiB;IACjB,4BAA4B;IAC5B,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,wCAAwC;AAC5C;;AAEA;IACI,cAAc;IACd,aAAa;IACb,kCAAkC;IAClC,qBAAqB;IACrB,mBAAmB;IACnB,0CAA0C;AAC9C;;AAEA;IACI,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,+BAA+B;IAC/B,oBAAoB;AACxB;;AAEA;IACI,yBAAyB;IACzB,WAAW;IACX,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,0CAA0C;IAC1C,iBAAiB;IACjB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,kCAAkC;IAClC,aAAa;IACb,kBAAkB;IAClB,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,cAAc;AAClB;;AAEA;IACI,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,kBAAkB;AACtB","sourcesContent":[":root {\n    --primary: rgb(230, 230, 255);\n    --secondary: rgb(204, 204, 255);\n    --tertiary: rgb(179, 179, 255);\n    --quaternary: rgb(153, 153, 255);\n    --quinary: rgb(128, 128, 255);\n    --senary: rgb(61, 61, 92);\n    --septenary: rgb(240, 240, 245);\n    --dark-red: rgb(153, 0, 0);\n    --red: rgb(204, 0, 0);\n}\n\n* {\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n.wrapper {\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\nheader {\n    min-height: 5%;\n    background-color: var(--secondary);\n    display: flex;\n    align-items: center;\n    border-bottom: 0.15rem var(--tertiary) solid;\n}\n\n.logo {\n    font-size: 1.2rem;\n    margin: 0.5rem;\n    font-family: 'Lobster', cursive;\n    color: var(--quinary);\n}\n\nmain {\n    background-color: var(--primary);\n    flex: 1;\n    overflow: auto;\n}\n\nnav {\n    display: flex;\n    background-color: var(--secondary);\n    width: 100%;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    font-family: 'Titillium Web', sans-serif;\n    color: var(--senary);\n    font-size: 1.3rem;\n    transition: all 0.2s ease-in;\n    overflow: hidden;\n}\n\n.nav-closed {\n    visibility: hidden;\n    max-height: 0;\n}\n\n.nav-open {\n    visibility: visible;\n    max-height: 50%;\n}\n\nnav div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    border-top: 0.13rem var(--primary) solid;\n}\n\n.mobile-nav {\n    min-height: 6%;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    justify-items: center;;\n    align-items: center;\n    border-top: 0.15rem var(--secondary) solid;\n}\n\n.add-button {\n    justify-self: start;\n    margin-left: 1rem;\n}\n\n.material-icons-round.mobile-buttons {\n    color: var(--quinary);\n    font-size: 2rem;\n}\n\n.todo-wrapper {\n    display: flex;\n    flex-direction: column;\n    font-family: 'Lato', sans-serif;\n    color: var(--senary);\n}\n\n.todo-main {\n    background-color: #FFFFFF;\n    width: 100%;\n    display: flex;\n    justify-content: space-between; \n    align-items: center;\n    border-bottom: 0.1rem var(--primary) solid;\n    padding: 0 0.3rem;\n    font-size: 0.9rem;\n    font-weight: 600;\n}\n\n.todo-secondary {\n    background-color: var(--septenary);\n    display: none;\n    visibility: hidden;\n    justify-content: space-between;\n}\n\n.todo-secondary-active {\n    display: flex;\n    visibility: visible;\n}\n\n.todo-secondary p {\n    margin: 0.3rem;\n    font-size: 0.9rem;\n    font-style: italic;\n}\n\n.todo-secondary-icons {\n    display: flex;\n    justify-content: flex-start;\n    margin: 0.4rem;\n}\n\n.todo-secondary-icons span {\n    margin-left: 0.2rem;\n    font-size: 1.8rem;\n}\n\n.todo-main span {\n    margin: 0 0.3rem;\n}\n\n.delete-icon {\n    color: var(--dark-red);\n}\n\n.priority-icon-activated {\n    color: var(--red);\n}\n\n.todo-title {\n    flex-grow: 2;\n    text-align: left;\n}\n\n.todo-date {\n    flex-grow: 1;\n    text-align: center;\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "syncData": () => (/* binding */ syncData),
/* harmony export */   "setPriority": () => (/* binding */ setPriority)
/* harmony export */ });
let todoStorage = [];

function addTodo(title, desc, dueDate, priority) {
    const newEntry = {
        title: title,
        desc: desc,
        dueDate: dueDate,
        priority: priority,
        isDone: false
    };
    todoStorage.push(newEntry);
    syncData();
}

function syncData() {
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
/* harmony export */   "renderAllTodos": () => (/* binding */ renderAllTodos)
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
        const addNew = document.createElement("div");
        addNew.textContent = "Add New";  
    nav.append(inbox, today, week, projects, addNew);

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
    todoDate.textContent = "12/03/2012";

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
    priorityIcon.addEventListener("click", todoPriority);

    const todoSecondary = document.createElement("div");
    todoSecondary.className = "todo-secondary";
    const todoDesc = document.createElement("p");
    todoDesc.textContent = desc;
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

function todoPriority(e) {
    const thisIndex = this.parentNode.parentNode.parentNode.dataset.index;
    (0,_modules_data__WEBPACK_IMPORTED_MODULE_0__.setPriority)(thisIndex);
    if (this.classList.contains("priority-icon-activated")) {
        this.classList.remove("priority-icon-activated");
    } else {
        this.classList.add("priority-icon-activated");
    }
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




(0,_modules_data__WEBPACK_IMPORTED_MODULE_2__.addTodo)("test test test", "test test test TEST TEST TEST test test test TEST TEST TEST", "12.04/2021", false)

;(0,_modules_data__WEBPACK_IMPORTED_MODULE_2__.syncData)();
(0,_modules_dom__WEBPACK_IMPORTED_MODULE_1__.renderLayout)();
(0,_modules_dom__WEBPACK_IMPORTED_MODULE_1__.renderAllTodos)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZGF0YS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN5SDtBQUM3QjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsaURBQWlELG9DQUFvQyxzQ0FBc0MscUNBQXFDLHVDQUF1QyxvQ0FBb0MsZ0NBQWdDLHNDQUFzQyxpQ0FBaUMsNEJBQTRCLEdBQUcsT0FBTyw2QkFBNkIsR0FBRyxVQUFVLGdCQUFnQixpQkFBaUIsR0FBRyxjQUFjLG9CQUFvQixtQkFBbUIsb0JBQW9CLDZCQUE2QixxQ0FBcUMsR0FBRyxZQUFZLHFCQUFxQix5Q0FBeUMsb0JBQW9CLDBCQUEwQixtREFBbUQsR0FBRyxXQUFXLHdCQUF3QixxQkFBcUIsc0NBQXNDLDRCQUE0QixHQUFHLFVBQVUsdUNBQXVDLGNBQWMscUJBQXFCLEdBQUcsU0FBUyxvQkFBb0IseUNBQXlDLGtCQUFrQiw2QkFBNkIsb0NBQW9DLDBCQUEwQiwrQ0FBK0MsMkJBQTJCLHdCQUF3QixtQ0FBbUMsdUJBQXVCLEdBQUcsaUJBQWlCLHlCQUF5QixvQkFBb0IsR0FBRyxlQUFlLDBCQUEwQixzQkFBc0IsR0FBRyxhQUFhLG9CQUFvQiw4QkFBOEIsMEJBQTBCLGtCQUFrQixtQkFBbUIsK0NBQStDLEdBQUcsaUJBQWlCLHFCQUFxQixvQkFBb0IseUNBQXlDLDZCQUE2QiwwQkFBMEIsaURBQWlELEdBQUcsaUJBQWlCLDBCQUEwQix3QkFBd0IsR0FBRywwQ0FBMEMsNEJBQTRCLHNCQUFzQixHQUFHLG1CQUFtQixvQkFBb0IsNkJBQTZCLHNDQUFzQywyQkFBMkIsR0FBRyxnQkFBZ0IsZ0NBQWdDLGtCQUFrQixvQkFBb0IscUNBQXFDLDJCQUEyQixpREFBaUQsd0JBQXdCLHdCQUF3Qix1QkFBdUIsR0FB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Wiw0REFBYyxHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1wcmltYXJ5OiByZ2IoMjMwLCAyMzAsIDI1NSk7XFxuICAgIC0tc2Vjb25kYXJ5OiByZ2IoMjA0LCAyMDQsIDI1NSk7XFxuICAgIC0tdGVydGlhcnk6IHJnYigxNzksIDE3OSwgMjU1KTtcXG4gICAgLS1xdWF0ZXJuYXJ5OiByZ2IoMTUzLCAxNTMsIDI1NSk7XFxuICAgIC0tcXVpbmFyeTogcmdiKDEyOCwgMTI4LCAyNTUpO1xcbiAgICAtLXNlbmFyeTogcmdiKDYxLCA2MSwgOTIpO1xcbiAgICAtLXNlcHRlbmFyeTogcmdiKDI0MCwgMjQwLCAyNDUpO1xcbiAgICAtLWRhcmstcmVkOiByZ2IoMTUzLCAwLCAwKTtcXG4gICAgLS1yZWQ6IHJnYigyMDQsIDAsIDApO1xcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgbWluLWhlaWdodDogNSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IDAuMTVyZW0gdmFyKC0tdGVydGlhcnkpIHNvbGlkO1xcbn1cXG5cXG4ubG9nbyB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBtYXJnaW46IDAuNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJywgY3Vyc2l2ZTtcXG4gICAgY29sb3I6IHZhcigtLXF1aW5hcnkpO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICAgIGZsZXg6IDE7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG5uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB2YXIoLS1zZW5hcnkpO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLm5hdi1jbG9zZWQge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIG1heC1oZWlnaHQ6IDA7XFxufVxcblxcbi5uYXYtb3BlbiB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIG1heC1oZWlnaHQ6IDUwJTtcXG59XFxuXFxubmF2IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXItdG9wOiAwLjEzcmVtIHZhcigtLXByaW1hcnkpIHNvbGlkO1xcbn1cXG5cXG4ubW9iaWxlLW5hdiB7XFxuICAgIG1pbi1oZWlnaHQ6IDYlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItdG9wOiAwLjE1cmVtIHZhcigtLXNlY29uZGFyeSkgc29saWQ7XFxufVxcblxcbi5hZGQtYnV0dG9uIHtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcblxcbi5tYXRlcmlhbC1pY29ucy1yb3VuZC5tb2JpbGUtYnV0dG9ucyB7XFxuICAgIGNvbG9yOiB2YXIoLS1xdWluYXJ5KTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4udG9kby13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHZhcigtLXNlbmFyeSk7XFxufVxcblxcbi50b2RvLW1haW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMC4xcmVtIHZhcigtLXByaW1hcnkpIHNvbGlkO1xcbiAgICBwYWRkaW5nOiAwIDAuM3JlbTtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi50b2RvLXNlY29uZGFyeSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlcHRlbmFyeSk7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udG9kby1zZWNvbmRhcnktYWN0aXZlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLnRvZG8tc2Vjb25kYXJ5IHAge1xcbiAgICBtYXJnaW46IDAuM3JlbTtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLnRvZG8tc2Vjb25kYXJ5LWljb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBtYXJnaW46IDAuNHJlbTtcXG59XFxuXFxuLnRvZG8tc2Vjb25kYXJ5LWljb25zIHNwYW4ge1xcbiAgICBtYXJnaW4tbGVmdDogMC4ycmVtO1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuLnRvZG8tbWFpbiBzcGFuIHtcXG4gICAgbWFyZ2luOiAwIDAuM3JlbTtcXG59XFxuXFxuLmRlbGV0ZS1pY29uIHtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstcmVkKTtcXG59XFxuXFxuLnByaW9yaXR5LWljb24tYWN0aXZhdGVkIHtcXG4gICAgY29sb3I6IHZhcigtLXJlZCk7XFxufVxcblxcbi50b2RvLXRpdGxlIHtcXG4gICAgZmxleC1ncm93OiAyO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4udG9kby1kYXRlIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksNkJBQTZCO0lBQzdCLCtCQUErQjtJQUMvQiw4QkFBOEI7SUFDOUIsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIsK0JBQStCO0lBQy9CLDBCQUEwQjtJQUMxQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLCtCQUErQjtJQUMvQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsT0FBTztJQUNQLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQix3Q0FBd0M7SUFDeEMsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQiwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLCtCQUErQjtJQUMvQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLDBDQUEwQztJQUMxQyxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tcHJpbWFyeTogcmdiKDIzMCwgMjMwLCAyNTUpO1xcbiAgICAtLXNlY29uZGFyeTogcmdiKDIwNCwgMjA0LCAyNTUpO1xcbiAgICAtLXRlcnRpYXJ5OiByZ2IoMTc5LCAxNzksIDI1NSk7XFxuICAgIC0tcXVhdGVybmFyeTogcmdiKDE1MywgMTUzLCAyNTUpO1xcbiAgICAtLXF1aW5hcnk6IHJnYigxMjgsIDEyOCwgMjU1KTtcXG4gICAgLS1zZW5hcnk6IHJnYig2MSwgNjEsIDkyKTtcXG4gICAgLS1zZXB0ZW5hcnk6IHJnYigyNDAsIDI0MCwgMjQ1KTtcXG4gICAgLS1kYXJrLXJlZDogcmdiKDE1MywgMCwgMCk7XFxuICAgIC0tcmVkOiByZ2IoMjA0LCAwLCAwKTtcXG59XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmhlYWRlciB7XFxuICAgIG1pbi1oZWlnaHQ6IDUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiAwLjE1cmVtIHZhcigtLXRlcnRpYXJ5KSBzb2xpZDtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgbWFyZ2luOiAwLjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnTG9ic3RlcicsIGN1cnNpdmU7XFxuICAgIGNvbG9yOiB2YXIoLS1xdWluYXJ5KTtcXG59XFxuXFxubWFpbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICBmbGV4OiAxO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxubmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogdmFyKC0tc2VuYXJ5KTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5uYXYtY2xvc2VkIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBtYXgtaGVpZ2h0OiAwO1xcbn1cXG5cXG4ubmF2LW9wZW4ge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICBtYXgtaGVpZ2h0OiA1MCU7XFxufVxcblxcbm5hdiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyLXRvcDogMC4xM3JlbSB2YXIoLS1wcmltYXJ5KSBzb2xpZDtcXG59XFxuXFxuLm1vYmlsZS1uYXYge1xcbiAgICBtaW4taGVpZ2h0OiA2JTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyOztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXRvcDogMC4xNXJlbSB2YXIoLS1zZWNvbmRhcnkpIHNvbGlkO1xcbn1cXG5cXG4uYWRkLWJ1dHRvbiB7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4ubWF0ZXJpYWwtaWNvbnMtcm91bmQubW9iaWxlLWJ1dHRvbnMge1xcbiAgICBjb2xvcjogdmFyKC0tcXVpbmFyeSk7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLnRvZG8td3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB2YXIoLS1zZW5hcnkpO1xcbn1cXG5cXG4udG9kby1tYWluIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IDAuMXJlbSB2YXIoLS1wcmltYXJ5KSBzb2xpZDtcXG4gICAgcGFkZGluZzogMCAwLjNyZW07XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4udG9kby1zZWNvbmRhcnkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZXB0ZW5hcnkpO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRvZG8tc2Vjb25kYXJ5LWFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi50b2RvLXNlY29uZGFyeSBwIHtcXG4gICAgbWFyZ2luOiAwLjNyZW07XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi50b2RvLXNlY29uZGFyeS1pY29ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgbWFyZ2luOiAwLjRyZW07XFxufVxcblxcbi50b2RvLXNlY29uZGFyeS1pY29ucyBzcGFuIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuMnJlbTtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxufVxcblxcbi50b2RvLW1haW4gc3BhbiB7XFxuICAgIG1hcmdpbjogMCAwLjNyZW07XFxufVxcblxcbi5kZWxldGUtaWNvbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLXJlZCk7XFxufVxcblxcbi5wcmlvcml0eS1pY29uLWFjdGl2YXRlZCB7XFxuICAgIGNvbG9yOiB2YXIoLS1yZWQpO1xcbn1cXG5cXG4udG9kby10aXRsZSB7XFxuICAgIGZsZXgtZ3JvdzogMjtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLnRvZG8tZGF0ZSB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGdldFRhcmdldCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFRhcmdldC5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBmdW5jdGlvbihjc3MsIHN0eWxlKXtcbiAgICAgIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgfVxuICB9O1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24oc3R5bGUpIHtcbiAgICAgICAgdmFyIG5vbmNlID1cbiAgICAgICAgICB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICAgICAgaWYgKG5vbmNlKSB7XG4gICAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICAgICAgICB9XG4gICAgICB9O1xub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihzdHlsZSl7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChcImhlYWRcIik7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9O1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFyZ2V0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJsZXQgdG9kb1N0b3JhZ2UgPSBbXTtcblxuZnVuY3Rpb24gYWRkVG9kbyh0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICBjb25zdCBuZXdFbnRyeSA9IHtcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBkZXNjOiBkZXNjLFxuICAgICAgICBkdWVEYXRlOiBkdWVEYXRlLFxuICAgICAgICBwcmlvcml0eTogcHJpb3JpdHksXG4gICAgICAgIGlzRG9uZTogZmFsc2VcbiAgICB9O1xuICAgIHRvZG9TdG9yYWdlLnB1c2gobmV3RW50cnkpO1xuICAgIHN5bmNEYXRhKCk7XG59XG5cbmZ1bmN0aW9uIHN5bmNEYXRhKCkge1xuICAgIGlmICghdG9kb1N0b3JhZ2UubGVuZ3RoKSB7XG4gICAgICAgIHRvZG9TdG9yYWdlID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvTG9jYWxcIikpO1xuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9Mb2NhbFwiLCBKU09OLnN0cmluZ2lmeSh0b2RvU3RvcmFnZSkpO1xufVxuXG5mdW5jdGlvbiBzZXRQcmlvcml0eShpbmRleCkge1xuICAgIGlmICh0b2RvU3RvcmFnZVtpbmRleF0ucHJpb3JpdHkgPT09IGZhbHNlKSB7XG4gICAgICAgIHRvZG9TdG9yYWdlW2luZGV4XS5wcmlvcml0eSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdG9kb1N0b3JhZ2VbaW5kZXhdLnByaW9yaXR5ID0gZmFsc2U7XG4gICAgfVxufVxuXG5leHBvcnQge2FkZFRvZG8sIHRvZG9TdG9yYWdlLCBzeW5jRGF0YSwgc2V0UHJpb3JpdHl9XG5cbiIsImltcG9ydCB7dG9kb1N0b3JhZ2UsIHNldFByaW9yaXR5fSBmcm9tIFwiLi4vbW9kdWxlcy9kYXRhXCJcblxuZnVuY3Rpb24gcmVuZGVyTGF5b3V0KCkge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdyYXBwZXIuY2xhc3NOYW1lID0gXCJ3cmFwcGVyXCI7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibG9nb1wiKTtcbiAgICBsb2dvLmNsYXNzTmFtZSA9IFwibG9nb1wiO1xuICAgIGxvZ28udGV4dENvbnRlbnQgPSBcImVzaWFsZSBUb2RvQXBwXCI7XG4gICAgaGVhZGVyLmFwcGVuZChsb2dvKTtcblxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcblxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gICAgbmF2LmNsYXNzTmFtZSA9IFwibmF2LWNsb3NlZFwiO1xuICAgICAgICBjb25zdCBpbmJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGluYm94LnRleHRDb250ZW50ID0gXCJJbmJveFwiO1xuICAgICAgICBjb25zdCB0b2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvZGF5LnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xuICAgICAgICBjb25zdCB3ZWVrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgd2Vlay50ZXh0Q29udGVudCA9IFwiV2Vla1wiO1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3RzLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiOyAgXG4gICAgICAgIGNvbnN0IGFkZE5ldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGFkZE5ldy50ZXh0Q29udGVudCA9IFwiQWRkIE5ld1wiOyAgXG4gICAgbmF2LmFwcGVuZChpbmJveCwgdG9kYXksIHdlZWssIHByb2plY3RzLCBhZGROZXcpO1xuXG4gICAgY29uc3QgbW9iaWxlTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtb2JpbGVOYXYuY2xhc3NOYW1lID0gXCJtb2JpbGUtbmF2XCI7XG5cbiAgICBjb25zdCBoYW1idXJnZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhhbWJ1cmdlckJ1dHRvbi5jbGFzc05hbWUgPSBcImhhbWJ1cmdlci1idXR0b25cIjtcbiAgICBjb25zdCBoYW1iSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGhhbWJJY29uLmNsYXNzTmFtZSA9IFwibWF0ZXJpYWwtaWNvbnMtcm91bmQgbW9iaWxlLWJ1dHRvbnNcIjtcbiAgICBoYW1iSWNvbi50ZXh0Q29udGVudCA9IFwibWVudVwiO1xuICAgIGhhbWJ1cmdlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd05hdik7XG4gICAgaGFtYnVyZ2VyQnV0dG9uLmFwcGVuZChoYW1iSWNvbik7XG4gICAgXG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGRCdXR0b24uY2xhc3NOYW1lID0gXCJhZGQtYnV0dG9uXCI7XG4gICAgY29uc3QgYWRkSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGFkZEljb24uY2xhc3NOYW1lID0gXCJtYXRlcmlhbC1pY29ucy1yb3VuZCBtb2JpbGUtYnV0dG9uc1wiO1xuICAgIGFkZEljb24udGV4dENvbnRlbnQgPSBcImFkZF9jaXJjbGVcIjtcbiAgICBhZGRCdXR0b24uYXBwZW5kKGFkZEljb24pO1xuICAgIG1vYmlsZU5hdi5hcHBlbmQoYWRkQnV0dG9uLCBoYW1idXJnZXJCdXR0b24pO1xuICAgIHdyYXBwZXIuYXBwZW5kKGhlYWRlciwgbWFpbiwgbmF2LCBtb2JpbGVOYXYpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKS5hcHBlbmQod3JhcHBlcik7XG59XG5cbmZ1bmN0aW9uIHNob3dOYXYoKSB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdlwiKTtcblxuICAgIGlmIChuYXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwibmF2LWNsb3NlZFwiKSkge1xuICAgICAgICBuYXYuY2xhc3NOYW1lID0gXCJuYXYtb3BlblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5hdi5jbGFzc05hbWUgPSBcIm5hdi1jbG9zZWRcIjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckFsbFRvZG9zKCkge1xuICAgIGlmICh0b2RvU3RvcmFnZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm5cbiAgICB9IGVsc2Uge1xuICAgICAgICB0b2RvU3RvcmFnZS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICByZW5kZXJUb2RvKGl0ZW0udGl0bGUsIGl0ZW0uZGVzYywgaXRlbS5kdWVEYXRlLCBpbmRleCk7XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIHJlbmRlclRvZG8odGl0bGUsIGRlc2MsIGR1ZURhdGUsIGluZGV4KSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICAgIGNvbnN0IHRvZG9XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RvV3JhcHBlci5jbGFzc05hbWUgPSBcInRvZG8td3JhcHBlclwiO1xuICAgIHRvZG9XcmFwcGVyLmRhdGFzZXQuaW5kZXggPSBpbmRleDtcblxuICAgIGNvbnN0IHRvZG9NYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RvTWFpbi5jbGFzc05hbWUgPSBcInRvZG8tbWFpblwiO1xuXG4gICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgdG9kb1RpdGxlLmNsYXNzTmFtZSA9IFwidG9kby10aXRsZVwiO1xuICAgIGNvbnN0IHRvZG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdG9kb0RhdGUuY2xhc3NOYW1lID0gXCJ0b2RvLWRhdGVcIjtcbiAgICB0b2RvRGF0ZS50ZXh0Q29udGVudCA9IFwiMTIvMDMvMjAxMlwiO1xuXG4gICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGRlbGV0ZUljb24uY2xhc3NOYW1lID0gXCJtYXRlcmlhbC1pY29ucyBkZWxldGUtaWNvblwiO1xuICAgIGRlbGV0ZUljb24udGV4dENvbnRlbnQgPSBcImRlbGV0ZVwiO1xuXG4gICAgY29uc3QgZXhwYW5kTW9yZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBleHBhbmRNb3JlSWNvbi5jbGFzc05hbWUgPSBcIm1hdGVyaWFsLWljb25zXCI7XG4gICAgZXhwYW5kTW9yZUljb24udGV4dENvbnRlbnQgPSBcImV4cGFuZF9tb3JlXCI7XG4gICAgZXhwYW5kTW9yZUljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV4cGFuZFRvZG8pO1xuXG4gICAgY29uc3QgdW5ja2Vja2VkSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHVuY2tlY2tlZEljb24uY2xhc3NOYW1lID0gXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiO1xuICAgIHVuY2tlY2tlZEljb24udGV4dENvbnRlbnQgPSBcInJhZGlvX2J1dHRvbl91bmNoZWNrZWRcIjtcblxuICAgIGNvbnN0IGVkaXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgZWRpdEljb24uY2xhc3NOYW1lID0gXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiO1xuICAgIGVkaXRJY29uLnRleHRDb250ZW50ID0gXCJlZGl0X25vdGVcIjtcblxuICAgIGNvbnN0IHByaW9yaXR5SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHByaW9yaXR5SWNvbi5jbGFzc05hbWUgPSBcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCJcbiAgICBwcmlvcml0eUljb24udGV4dENvbnRlbnQgPSBcInByaW9yaXR5X2hpZ2hcIjtcbiAgICBwcmlvcml0eUljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZG9Qcmlvcml0eSk7XG5cbiAgICBjb25zdCB0b2RvU2Vjb25kYXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2RvU2Vjb25kYXJ5LmNsYXNzTmFtZSA9IFwidG9kby1zZWNvbmRhcnlcIjtcbiAgICBjb25zdCB0b2RvRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRvZG9EZXNjLnRleHRDb250ZW50ID0gZGVzYztcbiAgICBjb25zdCBzZWNvbmRhcnlJY29ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2Vjb25kYXJ5SWNvbnMuY2xhc3NOYW1lID0gXCJ0b2RvLXNlY29uZGFyeS1pY29uc1wiXG4gICAgc2Vjb25kYXJ5SWNvbnMuYXBwZW5kKHByaW9yaXR5SWNvbiwgZWRpdEljb24sIGRlbGV0ZUljb24pO1xuXG4gICAgdG9kb1NlY29uZGFyeS5hcHBlbmQodG9kb0Rlc2MsIHNlY29uZGFyeUljb25zKTtcblxuICAgIHRvZG9NYWluLmFwcGVuZCh1bmNrZWNrZWRJY29uLCB0b2RvVGl0bGUsIHRvZG9EYXRlLCBleHBhbmRNb3JlSWNvbik7XG4gICAgdG9kb1dyYXBwZXIuYXBwZW5kKHRvZG9NYWluLCB0b2RvU2Vjb25kYXJ5KTtcbiAgICBtYWluLmFwcGVuZCh0b2RvV3JhcHBlcik7XG59XG5cbmZ1bmN0aW9uIGV4cGFuZFRvZG8oZSkge1xuICAgIGNvbnN0IHRoaXNTZWNvbmRhcnkgPSB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tc2Vjb25kYXJ5XCIpO1xuXG4gICAgaWYgKHRoaXMudGV4dENvbnRlbnQgPT09IFwiZXhwYW5kX21vcmVcIikge1xuICAgICAgICB0aGlzLnRleHRDb250ZW50ID0gXCJleHBhbmRfbGVzc1wiO1xuXG4gICAgICAgIHRoaXNTZWNvbmRhcnkuY2xhc3NMaXN0LmFkZChcInRvZG8tc2Vjb25kYXJ5LWFjdGl2ZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRleHRDb250ZW50ID0gXCJleHBhbmRfbW9yZVwiO1xuICAgICAgICB0aGlzU2Vjb25kYXJ5LmNsYXNzTGlzdC5yZW1vdmUoXCJ0b2RvLXNlY29uZGFyeS1hY3RpdmVcIik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB0b2RvUHJpb3JpdHkoZSkge1xuICAgIGNvbnN0IHRoaXNJbmRleCA9IHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC5pbmRleDtcbiAgICBzZXRQcmlvcml0eSh0aGlzSW5kZXgpO1xuICAgIGlmICh0aGlzLmNsYXNzTGlzdC5jb250YWlucyhcInByaW9yaXR5LWljb24tYWN0aXZhdGVkXCIpKSB7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShcInByaW9yaXR5LWljb24tYWN0aXZhdGVkXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWljb24tYWN0aXZhdGVkXCIpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtyZW5kZXJMYXlvdXQsIHJlbmRlckFsbFRvZG9zfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlcy9zdHlsZS5jc3NcIlxuaW1wb3J0IHtyZW5kZXJMYXlvdXQsIHJlbmRlckFsbFRvZG9zfSBmcm9tIFwiLi9tb2R1bGVzL2RvbVwiXG5pbXBvcnQge3N5bmNEYXRhLCBhZGRUb2RvfSBmcm9tIFwiLi9tb2R1bGVzL2RhdGFcIlxuXG5hZGRUb2RvKFwidGVzdCB0ZXN0IHRlc3RcIiwgXCJ0ZXN0IHRlc3QgdGVzdCBURVNUIFRFU1QgVEVTVCB0ZXN0IHRlc3QgdGVzdCBURVNUIFRFU1QgVEVTVFwiLCBcIjEyLjA0LzIwMjFcIiwgZmFsc2UpXG5cbnN5bmNEYXRhKCk7XG5yZW5kZXJMYXlvdXQoKTtcbnJlbmRlckFsbFRvZG9zKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==