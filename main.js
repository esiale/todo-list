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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --primary: rgb(230, 230, 255);\n    --secondary: rgb(204, 204, 255);\n    --tertiary: rgb(179, 179, 255);\n    --quaternary: rgb(153, 153, 255);\n    --quinary: rgb(128, 128, 255);\n    --senary: rgb(61, 61, 92);\n    --septenary: rgb(240, 240, 245);\n    --dark-red: rgb(153, 0, 0);\n    --red: rgb(204, 0, 0);\n}\n\n* {\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n.wrapper {\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\nheader {\n    order: 1;\n    min-height: 5%;\n    background-color: var(--secondary);\n    display: flex;\n    align-items: center;\n    border-bottom: 0.15rem var(--tertiary) solid;\n}\n\n.logo {\n    font-size: 1.2rem;\n    margin: 0.5rem;\n    font-family: 'Lobster', cursive;\n    color: var(--quinary);\n}\n\nmain {\n    order: 2;\n    background-color: var(--primary);\n    flex: 1;\n    overflow: auto;\n}\n\nnav {\n    order: 3;\n    display: flex;\n    background-color: var(--secondary);\n    width: 100%;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    font-family: 'Titillium Web', sans-serif;\n    color: var(--senary);\n    font-size: 1.3rem;\n    transition: all 0.2s ease-in;\n    overflow: hidden;\n}\n\n.nav-closed {\n    visibility: hidden;\n    max-height: 0;\n}\n\n.nav-open {\n    visibility: visible;\n    max-height: 50%;\n}\n\nnav div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    border-top: 0.13rem var(--primary) solid;\n}\n\n.mobile-nav {\n    order: 5;\n    min-height: 6%;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    justify-items: center;;\n    align-items: center;\n    border-top: 0.15rem var(--secondary) solid;\n}\n\n.add-button {\n    justify-self: start;\n    margin-left: 1rem;\n}\n\n.material-icons-round.mobile-buttons {\n    color: var(--quinary);\n    font-size: 2rem;\n}\n\n.todo-wrapper {\n    display: flex;\n    flex-direction: column;\n    font-family: 'Lato', sans-serif;\n    color: var(--senary);\n}\n\n.todo-main {\n    background-color: #FFFFFF;\n    width: 100%;\n    display: flex;\n    justify-content: space-between; \n    align-items: center;\n    border-bottom: 0.1rem var(--primary) solid;\n    padding: 0 0.3rem;\n    font-size: 0.9rem;\n    font-weight: 600;\n}\n\n.todo-secondary {\n    background-color: var(--septenary);\n    display: none;\n    visibility: hidden;\n    justify-content: space-between;\n}\n\n.todo-secondary-active {\n    display: flex;\n    visibility: visible;\n}\n\n.todo-desc {\n    margin: 0.3rem;\n    font-size: 0.9rem;\n    font-style: italic;\n}\n\n.todo-secondary-icons {\n    display: flex;\n    justify-content: flex-start;\n    margin: 0.4rem;\n}\n\n.todo-secondary-icons span {\n    margin-left: 0.2rem;\n    font-size: 1.8rem;\n}\n\n.todo-main span {\n    margin: 0 0.3rem;\n}\n\n.delete-icon {\n    color: var(--dark-red);\n}\n\n.priority-icon-activated {\n    color: var(--red);\n}\n\n.todo-title {\n    flex-grow: 2;\n    text-align: left;\n    width: calc(100% - 10rem);\n    word-wrap: break-word;\n}\n\n.todo-date {\n    flex-grow: 1;\n    text-align: right;\n}\n\n.todo-desc {\n    width: calc(100% - 8rem);\n    word-wrap: break-word;\n}\n\n.todo-confirm-delete {\n    font-size: 1.1rem;\n    color: var(--red);\n}\n\n.form-wrapper {\n    order: 4;\n    overflow: hidden;\n    transition: all 0.2s ease-in;\n    font-family: 'Lato', sans-serif;\n    color: var(--senary);\n    background-color: var(--secondary);\n}\n\nform {\n    margin-top: 0.5rem;\n    padding-bottom: 0.5rem;\n}\n\nform > div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 0.5rem;\n}\n\ninput[type=text], input[type=date], select {\n    padding: 0.3rem;\n    border: 0.15rem transparent solid;\n    border-radius: 0.5rem;\n    margin-top: 0.5rem;\n}\n\ninput[type=text] {\n    width: 90%;\n}\n\nselect {\n    background-color: #FFFFFF;\n}\n\n.form-radios * {\n    margin: 0.3rem;\n}\n\n.form-buttons {\n    display: flex;\n    flex-direction: row;\n}\n\n.form-buttons * {\n    margin: 0 0.2rem;\n    border: 0;\n    border-radius: 1rem;\n    padding: 0.3rem 2rem;\n}\n\n.form-wrapper-closed {\n    visibility: hidden;\n    max-height: 0;\n}\n\n.form-wrapper-open {\n    visibility: visible;\n    max-height: 100%;\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --primary: rgb(230, 230, 255);\n    --secondary: rgb(204, 204, 255);\n    --tertiary: rgb(179, 179, 255);\n    --quaternary: rgb(153, 153, 255);\n    --quinary: rgb(128, 128, 255);\n    --senary: rgb(61, 61, 92);\n    --septenary: rgb(240, 240, 245);\n    --dark-red: rgb(153, 0, 0);\n    --red: rgb(204, 0, 0);\n}\n\n* {\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n.wrapper {\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\nheader {\n    order: 1;\n    min-height: 5%;\n    background-color: var(--secondary);\n    display: flex;\n    align-items: center;\n    border-bottom: 0.15rem var(--tertiary) solid;\n}\n\n.logo {\n    font-size: 1.2rem;\n    margin: 0.5rem;\n    font-family: 'Lobster', cursive;\n    color: var(--quinary);\n}\n\nmain {\n    order: 2;\n    background-color: var(--primary);\n    flex: 1;\n    overflow: auto;\n}\n\nnav {\n    order: 3;\n    display: flex;\n    background-color: var(--secondary);\n    width: 100%;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    font-family: 'Titillium Web', sans-serif;\n    color: var(--senary);\n    font-size: 1.3rem;\n    transition: all 0.2s ease-in;\n    overflow: hidden;\n}\n\n.nav-closed {\n    visibility: hidden;\n    max-height: 0;\n}\n\n.nav-open {\n    visibility: visible;\n    max-height: 50%;\n}\n\nnav div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    border-top: 0.13rem var(--primary) solid;\n}\n\n.mobile-nav {\n    order: 5;\n    min-height: 6%;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    justify-items: center;;\n    align-items: center;\n    border-top: 0.15rem var(--secondary) solid;\n}\n\n.add-button {\n    justify-self: start;\n    margin-left: 1rem;\n}\n\n.material-icons-round.mobile-buttons {\n    color: var(--quinary);\n    font-size: 2rem;\n}\n\n.todo-wrapper {\n    display: flex;\n    flex-direction: column;\n    font-family: 'Lato', sans-serif;\n    color: var(--senary);\n}\n\n.todo-main {\n    background-color: #FFFFFF;\n    width: 100%;\n    display: flex;\n    justify-content: space-between; \n    align-items: center;\n    border-bottom: 0.1rem var(--primary) solid;\n    padding: 0 0.3rem;\n    font-size: 0.9rem;\n    font-weight: 600;\n}\n\n.todo-secondary {\n    background-color: var(--septenary);\n    display: none;\n    visibility: hidden;\n    justify-content: space-between;\n}\n\n.todo-secondary-active {\n    display: flex;\n    visibility: visible;\n}\n\n.todo-desc {\n    margin: 0.3rem;\n    font-size: 0.9rem;\n    font-style: italic;\n}\n\n.todo-secondary-icons {\n    display: flex;\n    justify-content: flex-start;\n    margin: 0.4rem;\n}\n\n.todo-secondary-icons span {\n    margin-left: 0.2rem;\n    font-size: 1.8rem;\n}\n\n.todo-main span {\n    margin: 0 0.3rem;\n}\n\n.delete-icon {\n    color: var(--dark-red);\n}\n\n.priority-icon-activated {\n    color: var(--red);\n}\n\n.todo-title {\n    flex-grow: 2;\n    text-align: left;\n    width: calc(100% - 10rem);\n    word-wrap: break-word;\n}\n\n.todo-date {\n    flex-grow: 1;\n    text-align: right;\n}\n\n.todo-desc {\n    width: calc(100% - 8rem);\n    word-wrap: break-word;\n}\n\n.todo-confirm-delete {\n    font-size: 1.1rem;\n    color: var(--red);\n}\n\n.form-wrapper {\n    order: 4;\n    overflow: hidden;\n    transition: all 0.2s ease-in;\n    font-family: 'Lato', sans-serif;\n    color: var(--senary);\n    background-color: var(--secondary);\n}\n\nform {\n    margin-top: 0.5rem;\n    padding-bottom: 0.5rem;\n}\n\nform > div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 0.5rem;\n}\n\ninput[type=text], input[type=date], select {\n    padding: 0.3rem;\n    border: 0.15rem transparent solid;\n    border-radius: 0.5rem;\n    margin-top: 0.5rem;\n}\n\ninput[type=text] {\n    width: 90%;\n}\n\nselect {\n    background-color: #FFFFFF;\n}\n\n.form-radios * {\n    margin: 0.3rem;\n}\n\n.form-buttons {\n    display: flex;\n    flex-direction: row;\n}\n\n.form-buttons * {\n    margin: 0 0.2rem;\n    border: 0;\n    border-radius: 1rem;\n    padding: 0.3rem 2rem;\n}\n\n.form-wrapper-closed {\n    visibility: hidden;\n    max-height: 0;\n}\n\n.form-wrapper-open {\n    visibility: visible;\n    max-height: 100%;\n}"],"sourceRoot":""}]);
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
    syncData();
}

function syncData() {
    if (!todoStorage.length && !window.localStorage.length) return

    if (!todoStorage.length) {
        todoStorage = JSON.parse(window.localStorage.getItem("todoLocal"));
    }
    window.localStorage.clear();
    window.localStorage.setItem("todoLocal", JSON.stringify(todoStorage));
}

function setPriority(index) {
    if (todoStorage[index].priority === false) {
        todoStorage[index].priority = true;
    } else {
        todoStorage[index].priority = false;
    } console.log(todoStorage[index].priority);
    syncData();
}

function deleteTodo(index) {
    todoStorage.splice(index, 1);
    (0,_modules_dom__WEBPACK_IMPORTED_MODULE_0__.renderAllTodos)();
    syncData();
}

function editTodo(title, desc, dueDate, project, priority, index) {
    const editedTodo = new Todo(title, desc, dueDate, project, priority);
    todoStorage.splice(index, 1, editedTodo);
    (0,_modules_dom__WEBPACK_IMPORTED_MODULE_0__.renderAllTodos)();
    syncData();
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
    const formWrapper = document.querySelector(".form-wrapper");
    
    if (formWrapper.classList.contains("form-wrapper-open")) return

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

    if (formWrapper.classList.contains("form-wrapper-open") && this === addButton && submitButton.value === "Edit") return

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
        console.log(_modules_data__WEBPACK_IMPORTED_MODULE_0__.todoStorage[thisIndex].priority)

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

    setTimeout(()  => {
    thisDesc.classList.remove("todo-confirm-delete");
    thisDesc.textContent = _modules_data__WEBPACK_IMPORTED_MODULE_0__.todoStorage[thisIndex].desc;
    this.removeAttribute("confirm-delete");
    }, 4000)
}

function showEdit(e) {
    const caller = this;
    showForm("editTodo", caller);
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




(0,_modules_data__WEBPACK_IMPORTED_MODULE_2__.syncData)();
(0,_modules_dom__WEBPACK_IMPORTED_MODULE_1__.renderLayout)();
(0,_modules_dom__WEBPACK_IMPORTED_MODULE_1__.renderForm)();
(0,_modules_dom__WEBPACK_IMPORTED_MODULE_1__.renderAllTodos)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZGF0YS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN5SDtBQUM3QjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsaURBQWlELG9DQUFvQyxzQ0FBc0MscUNBQXFDLHVDQUF1QyxvQ0FBb0MsZ0NBQWdDLHNDQUFzQyxpQ0FBaUMsNEJBQTRCLEdBQUcsT0FBTyw2QkFBNkIsR0FBRyxVQUFVLGdCQUFnQixpQkFBaUIsR0FBRyxjQUFjLG9CQUFvQixtQkFBbUIsb0JBQW9CLDZCQUE2QixxQ0FBcUMsR0FBRyxZQUFZLGVBQWUscUJBQXFCLHlDQUF5QyxvQkFBb0IsMEJBQTBCLG1EQUFtRCxHQUFHLFdBQVcsd0JBQXdCLHFCQUFxQixzQ0FBc0MsNEJBQTRCLEdBQUcsVUFBVSxlQUFlLHVDQUF1QyxjQUFjLHFCQUFxQixHQUFHLFNBQVMsZUFBZSxvQkFBb0IseUNBQXlDLGtCQUFrQiw2QkFBNkIsb0NBQW9DLDBCQUEwQiwrQ0FBK0MsMkJBQTJCLHdCQUF3QixtQ0FBbUMsdUJBQXVCLEdBQUcsaUJBQWlCLHlCQUF5QixvQkFBb0IsR0FBRyxlQUFlLDBCQUEwQixzQkFBc0IsR0FBRyxhQUFhLG9CQUFvQiw4QkFBOEIsMEJBQTBCLGtCQUFrQixtQkFBbUIsK0NBQStDLEdBQUcsaUJBQWlCLGVBQWUscUJBQXFCLG9CQUFvQix5Q0FBeUMsNkJBQTZCLDBCQUEwQixpREFBaUQsR0FBRyxpQkFBaUIsMEJBQTBCLHdCQUF3QixHQUFHLDBDQUEwQyw0QkFBNEIsc0JBQXNCLEdBQUcsbUJBQW1CLG9CQUFvQiw2QkFBNkIsc0NBQXNDLDJCQUEyQixHQUFHLGdCQUFnQixnQ0FBZ0Msa0JBQWtCLG9CQUFvQixxQ0FBcUMsMkJBQTJCLGlEQUFpRCx3QkFBd0Isd0JBQXdCLHVCQUF1QixHQUFHLHFCQUFxQix5Q0FBeUMsb0JBQW9CLHlCQUF5QixxQ0FBcUMsR0FBRyw0QkFBNEIsb0JBQW9CLDBCQUEwQixHQUFHLGdCQUFnQixxQkFBcUIsd0JBQXdCLHlCQUF5QixHQUFHLDJCQUEyQixvQkFBb0Isa0NBQWtDLHFCQUFxQixHQUFHLGdDQUFnQywwQkFBMEIsd0JBQXdCLEdBQUcscUJBQXFCLHVCQUF1QixHQUFHLGtCQUFrQiw2QkFBNkIsR0FBRyw4QkFBOEIsd0JBQXdCLEdBQUcsaUJBQWlCLG1CQUFtQix1QkFBdUIsZ0NBQWdDLDRCQUE0QixHQUFHLGdCQUFnQixtQkFBbUIsd0JBQXdCLEdBQUcsZ0JBQWdCLCtCQUErQiw0QkFBNEIsR0FBRywwQkFBMEIsd0JBQXdCLHdCQUF3QixHQUFHLG1CQUFtQixlQUFlLHVCQUF1QixtQ0FBbUMsc0NBQXNDLDJCQUEyQix5Q0FBeUMsR0FBRyxVQUFVLHlCQUF5Qiw2QkFBNkIsR0FBRyxnQkFBZ0Isb0JBQW9CLDZCQUE2QiwwQkFBMEIsOEJBQThCLDRCQUE0QixHQUFHLGdEQUFnRCxzQkFBc0Isd0NBQXdDLDRCQUE0Qix5QkFBeUIsR0FBRyxzQkFBc0IsaUJBQWlCLEdBQUcsWUFBWSxnQ0FBZ0MsR0FBRyxvQkFBb0IscUJBQXFCLEdBQUcsbUJBQW1CLG9CQUFvQiwwQkFBMEIsR0FBRyxxQkFBcUIsdUJBQXVCLGdCQUFnQiwwQkFBMEIsMkJBQTJCLEdBQUcsMEJBQTBCLHlCQUF5QixvQkFBb0IsR0FBRyx3QkFBd0IsMEJBQTBCLHVCQUF1QixHQUFHLE9BQU8sdUZBQXVGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGlDQUFpQyxvQ0FBb0Msc0NBQXNDLHFDQUFxQyx1Q0FBdUMsb0NBQW9DLGdDQUFn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QTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUFjO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksNERBQWM7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUFjO0FBQ2xCO0FBQ0E7OztBQUd3Rjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3REdUI7O0FBRS9HO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLHNEQUFXO0FBQ25CO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQsUUFBUSw4REFBbUI7QUFDM0I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFXO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLDBEQUFXO0FBQ2Y7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksK0RBQW9CO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFFBQVEsc0RBQU87QUFDZjtBQUNBLFNBQVM7QUFDVCxZQUFZLHVEQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixzREFBVztBQUNqQyxxQkFBcUIsc0RBQVc7QUFDaEMscUJBQXFCLHNEQUFXO0FBQ2hDLHdCQUF3QixzREFBVztBQUNuQyxZQUFZLHNEQUFXO0FBQ3ZCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNEQUFXOztBQUUvQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFFBQVEseURBQVU7QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCLHNEQUFXO0FBQ3RDO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQzdYQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7QUNOMkI7QUFDMkM7QUFDdEI7O0FBRWhELHVEQUFRO0FBQ1IsMERBQVk7QUFDWix3REFBVTtBQUNWLDREQUFjLEciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLXByaW1hcnk6IHJnYigyMzAsIDIzMCwgMjU1KTtcXG4gICAgLS1zZWNvbmRhcnk6IHJnYigyMDQsIDIwNCwgMjU1KTtcXG4gICAgLS10ZXJ0aWFyeTogcmdiKDE3OSwgMTc5LCAyNTUpO1xcbiAgICAtLXF1YXRlcm5hcnk6IHJnYigxNTMsIDE1MywgMjU1KTtcXG4gICAgLS1xdWluYXJ5OiByZ2IoMTI4LCAxMjgsIDI1NSk7XFxuICAgIC0tc2VuYXJ5OiByZ2IoNjEsIDYxLCA5Mik7XFxuICAgIC0tc2VwdGVuYXJ5OiByZ2IoMjQwLCAyNDAsIDI0NSk7XFxuICAgIC0tZGFyay1yZWQ6IHJnYigxNTMsIDAsIDApO1xcbiAgICAtLXJlZDogcmdiKDIwNCwgMCwgMCk7XFxufVxcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBvcmRlcjogMTtcXG4gICAgbWluLWhlaWdodDogNSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IDAuMTVyZW0gdmFyKC0tdGVydGlhcnkpIHNvbGlkO1xcbn1cXG5cXG4ubG9nbyB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBtYXJnaW46IDAuNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJywgY3Vyc2l2ZTtcXG4gICAgY29sb3I6IHZhcigtLXF1aW5hcnkpO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgb3JkZXI6IDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgICBmbGV4OiAxO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxubmF2IHtcXG4gICAgb3JkZXI6IDM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHZhcigtLXNlbmFyeSk7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ubmF2LWNsb3NlZCB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgbWF4LWhlaWdodDogMDtcXG59XFxuXFxuLm5hdi1vcGVuIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgbWF4LWhlaWdodDogNTAlO1xcbn1cXG5cXG5uYXYgZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlci10b3A6IDAuMTNyZW0gdmFyKC0tcHJpbWFyeSkgc29saWQ7XFxufVxcblxcbi5tb2JpbGUtbmF2IHtcXG4gICAgb3JkZXI6IDU7XFxuICAgIG1pbi1oZWlnaHQ6IDYlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItdG9wOiAwLjE1cmVtIHZhcigtLXNlY29uZGFyeSkgc29saWQ7XFxufVxcblxcbi5hZGQtYnV0dG9uIHtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcblxcbi5tYXRlcmlhbC1pY29ucy1yb3VuZC5tb2JpbGUtYnV0dG9ucyB7XFxuICAgIGNvbG9yOiB2YXIoLS1xdWluYXJ5KTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4udG9kby13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHZhcigtLXNlbmFyeSk7XFxufVxcblxcbi50b2RvLW1haW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMC4xcmVtIHZhcigtLXByaW1hcnkpIHNvbGlkO1xcbiAgICBwYWRkaW5nOiAwIDAuM3JlbTtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi50b2RvLXNlY29uZGFyeSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlcHRlbmFyeSk7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udG9kby1zZWNvbmRhcnktYWN0aXZlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLnRvZG8tZGVzYyB7XFxuICAgIG1hcmdpbjogMC4zcmVtO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4udG9kby1zZWNvbmRhcnktaWNvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbjogMC40cmVtO1xcbn1cXG5cXG4udG9kby1zZWNvbmRhcnktaWNvbnMgc3BhbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjJyZW07XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG5cXG4udG9kby1tYWluIHNwYW4ge1xcbiAgICBtYXJnaW46IDAgMC4zcmVtO1xcbn1cXG5cXG4uZGVsZXRlLWljb24ge1xcbiAgICBjb2xvcjogdmFyKC0tZGFyay1yZWQpO1xcbn1cXG5cXG4ucHJpb3JpdHktaWNvbi1hY3RpdmF0ZWQge1xcbiAgICBjb2xvcjogdmFyKC0tcmVkKTtcXG59XFxuXFxuLnRvZG8tdGl0bGUge1xcbiAgICBmbGV4LWdyb3c6IDI7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHJlbSk7XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLnRvZG8tZGF0ZSB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi50b2RvLWRlc2Mge1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gOHJlbSk7XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLnRvZG8tY29uZmlybS1kZWxldGUge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgY29sb3I6IHZhcigtLXJlZCk7XFxufVxcblxcbi5mb3JtLXdyYXBwZXIge1xcbiAgICBvcmRlcjogNDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHZhcigtLXNlbmFyeSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxufVxcblxcbmZvcm0ge1xcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxufVxcblxcbmZvcm0gPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPWRhdGVdLCBzZWxlY3Qge1xcbiAgICBwYWRkaW5nOiAwLjNyZW07XFxuICAgIGJvcmRlcjogMC4xNXJlbSB0cmFuc3BhcmVudCBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxufVxcblxcbmlucHV0W3R5cGU9dGV4dF0ge1xcbiAgICB3aWR0aDogOTAlO1xcbn1cXG5cXG5zZWxlY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbn1cXG5cXG4uZm9ybS1yYWRpb3MgKiB7XFxuICAgIG1hcmdpbjogMC4zcmVtO1xcbn1cXG5cXG4uZm9ybS1idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLmZvcm0tYnV0dG9ucyAqIHtcXG4gICAgbWFyZ2luOiAwIDAuMnJlbTtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAwLjNyZW0gMnJlbTtcXG59XFxuXFxuLmZvcm0td3JhcHBlci1jbG9zZWQge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIG1heC1oZWlnaHQ6IDA7XFxufVxcblxcbi5mb3JtLXdyYXBwZXItb3BlbiB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksNkJBQTZCO0lBQzdCLCtCQUErQjtJQUMvQiw4QkFBOEI7SUFDOUIsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIsK0JBQStCO0lBQy9CLDBCQUEwQjtJQUMxQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFFBQVE7SUFDUixjQUFjO0lBQ2Qs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IHtcXG4gICAgLS1wcmltYXJ5OiByZ2IoMjMwLCAyMzAsIDI1NSk7XFxuICAgIC0tc2Vjb25kYXJ5OiByZ2IoMjA0LCAyMDQsIDI1NSk7XFxuICAgIC0tdGVydGlhcnk6IHJnYigxNzksIDE3OSwgMjU1KTtcXG4gICAgLS1xdWF0ZXJuYXJ5OiByZ2IoMTUzLCAxNTMsIDI1NSk7XFxuICAgIC0tcXVpbmFyeTogcmdiKDEyOCwgMTI4LCAyNTUpO1xcbiAgICAtLXNlbmFyeTogcmdiKDYxLCA2MSwgOTIpO1xcbiAgICAtLXNlcHRlbmFyeTogcmdiKDI0MCwgMjQwLCAyNDUpO1xcbiAgICAtLWRhcmstcmVkOiByZ2IoMTUzLCAwLCAwKTtcXG4gICAgLS1yZWQ6IHJnYigyMDQsIDAsIDApO1xcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgb3JkZXI6IDE7XFxuICAgIG1pbi1oZWlnaHQ6IDUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiAwLjE1cmVtIHZhcigtLXRlcnRpYXJ5KSBzb2xpZDtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgbWFyZ2luOiAwLjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnTG9ic3RlcicsIGN1cnNpdmU7XFxuICAgIGNvbG9yOiB2YXIoLS1xdWluYXJ5KTtcXG59XFxuXFxubWFpbiB7XFxuICAgIG9yZGVyOiAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gICAgZmxleDogMTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbm5hdiB7XFxuICAgIG9yZGVyOiAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB2YXIoLS1zZW5hcnkpO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLm5hdi1jbG9zZWQge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIG1heC1oZWlnaHQ6IDA7XFxufVxcblxcbi5uYXYtb3BlbiB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIG1heC1oZWlnaHQ6IDUwJTtcXG59XFxuXFxubmF2IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXItdG9wOiAwLjEzcmVtIHZhcigtLXByaW1hcnkpIHNvbGlkO1xcbn1cXG5cXG4ubW9iaWxlLW5hdiB7XFxuICAgIG9yZGVyOiA1O1xcbiAgICBtaW4taGVpZ2h0OiA2JTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyOztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXRvcDogMC4xNXJlbSB2YXIoLS1zZWNvbmRhcnkpIHNvbGlkO1xcbn1cXG5cXG4uYWRkLWJ1dHRvbiB7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4ubWF0ZXJpYWwtaWNvbnMtcm91bmQubW9iaWxlLWJ1dHRvbnMge1xcbiAgICBjb2xvcjogdmFyKC0tcXVpbmFyeSk7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLnRvZG8td3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB2YXIoLS1zZW5hcnkpO1xcbn1cXG5cXG4udG9kby1tYWluIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IDAuMXJlbSB2YXIoLS1wcmltYXJ5KSBzb2xpZDtcXG4gICAgcGFkZGluZzogMCAwLjNyZW07XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4udG9kby1zZWNvbmRhcnkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZXB0ZW5hcnkpO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRvZG8tc2Vjb25kYXJ5LWFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi50b2RvLWRlc2Mge1xcbiAgICBtYXJnaW46IDAuM3JlbTtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLnRvZG8tc2Vjb25kYXJ5LWljb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBtYXJnaW46IDAuNHJlbTtcXG59XFxuXFxuLnRvZG8tc2Vjb25kYXJ5LWljb25zIHNwYW4ge1xcbiAgICBtYXJnaW4tbGVmdDogMC4ycmVtO1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuLnRvZG8tbWFpbiBzcGFuIHtcXG4gICAgbWFyZ2luOiAwIDAuM3JlbTtcXG59XFxuXFxuLmRlbGV0ZS1pY29uIHtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstcmVkKTtcXG59XFxuXFxuLnByaW9yaXR5LWljb24tYWN0aXZhdGVkIHtcXG4gICAgY29sb3I6IHZhcigtLXJlZCk7XFxufVxcblxcbi50b2RvLXRpdGxlIHtcXG4gICAgZmxleC1ncm93OiAyO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTByZW0pO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi50b2RvLWRhdGUge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4udG9kby1kZXNjIHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDhyZW0pO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi50b2RvLWNvbmZpcm0tZGVsZXRlIHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1yZWQpO1xcbn1cXG5cXG4uZm9ybS13cmFwcGVyIHtcXG4gICAgb3JkZXI6IDQ7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB2YXIoLS1zZW5hcnkpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG5mb3JtID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1kYXRlXSwgc2VsZWN0IHtcXG4gICAgcGFkZGluZzogMC4zcmVtO1xcbiAgICBib3JkZXI6IDAuMTVyZW0gdHJhbnNwYXJlbnQgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRdIHtcXG4gICAgd2lkdGg6IDkwJTtcXG59XFxuXFxuc2VsZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG59XFxuXFxuLmZvcm0tcmFkaW9zICoge1xcbiAgICBtYXJnaW46IDAuM3JlbTtcXG59XFxuXFxuLmZvcm0tYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5mb3JtLWJ1dHRvbnMgKiB7XFxuICAgIG1hcmdpbjogMCAwLjJyZW07XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgcGFkZGluZzogMC4zcmVtIDJyZW07XFxufVxcblxcbi5mb3JtLXdyYXBwZXItY2xvc2VkIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBtYXgtaGVpZ2h0OiAwO1xcbn1cXG5cXG4uZm9ybS13cmFwcGVyLW9wZW4ge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGdldFRhcmdldCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFRhcmdldC5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBmdW5jdGlvbihjc3MsIHN0eWxlKXtcbiAgICAgIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgfVxuICB9O1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24oc3R5bGUpIHtcbiAgICAgICAgdmFyIG5vbmNlID1cbiAgICAgICAgICB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICAgICAgaWYgKG5vbmNlKSB7XG4gICAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICAgICAgICB9XG4gICAgICB9O1xub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihzdHlsZSl7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChcImhlYWRcIik7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9O1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFyZ2V0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJpbXBvcnQge3JlbmRlckFsbFRvZG9zfSBmcm9tIFwiLi4vbW9kdWxlcy9kb21cIjtcblxubGV0IHRvZG9TdG9yYWdlID0gW107XG5jb25zdCB0b2RvUHJvamVjdHMgPSBbXCJEZWZhdWx0XCJdO1xuXG5jb25zdCBUb2RvID0gZnVuY3Rpb24odGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByb2plY3QsIHByaW9yaXR5KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzYyA9IGRlc2M7XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTsgXG4gICAgdGhpcy5pc0RvbmUgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gYWRkVG9kbyh0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJvamVjdCwgcHJpb3JpdHkpIHtcbiAgICBjb25zdCBuZXdFbnRyeSA9IG5ldyBUb2RvKHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcm9qZWN0LCBwcmlvcml0eSk7XG4gICAgdG9kb1N0b3JhZ2UucHVzaChuZXdFbnRyeSk7XG4gICAgcmVuZGVyQWxsVG9kb3MoKTtcbiAgICBzeW5jRGF0YSgpO1xufVxuXG5mdW5jdGlvbiBzeW5jRGF0YSgpIHtcbiAgICBpZiAoIXRvZG9TdG9yYWdlLmxlbmd0aCAmJiAhd2luZG93LmxvY2FsU3RvcmFnZS5sZW5ndGgpIHJldHVyblxuXG4gICAgaWYgKCF0b2RvU3RvcmFnZS5sZW5ndGgpIHtcbiAgICAgICAgdG9kb1N0b3JhZ2UgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9Mb2NhbFwiKSk7XG4gICAgfVxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvTG9jYWxcIiwgSlNPTi5zdHJpbmdpZnkodG9kb1N0b3JhZ2UpKTtcbn1cblxuZnVuY3Rpb24gc2V0UHJpb3JpdHkoaW5kZXgpIHtcbiAgICBpZiAodG9kb1N0b3JhZ2VbaW5kZXhdLnByaW9yaXR5ID09PSBmYWxzZSkge1xuICAgICAgICB0b2RvU3RvcmFnZVtpbmRleF0ucHJpb3JpdHkgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRvZG9TdG9yYWdlW2luZGV4XS5wcmlvcml0eSA9IGZhbHNlO1xuICAgIH0gY29uc29sZS5sb2codG9kb1N0b3JhZ2VbaW5kZXhdLnByaW9yaXR5KTtcbiAgICBzeW5jRGF0YSgpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVUb2RvKGluZGV4KSB7XG4gICAgdG9kb1N0b3JhZ2Uuc3BsaWNlKGluZGV4LCAxKTtcbiAgICByZW5kZXJBbGxUb2RvcygpO1xuICAgIHN5bmNEYXRhKCk7XG59XG5cbmZ1bmN0aW9uIGVkaXRUb2RvKHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcm9qZWN0LCBwcmlvcml0eSwgaW5kZXgpIHtcbiAgICBjb25zdCBlZGl0ZWRUb2RvID0gbmV3IFRvZG8odGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByb2plY3QsIHByaW9yaXR5KTtcbiAgICB0b2RvU3RvcmFnZS5zcGxpY2UoaW5kZXgsIDEsIGVkaXRlZFRvZG8pO1xuICAgIHJlbmRlckFsbFRvZG9zKCk7XG4gICAgc3luY0RhdGEoKTtcbn1cblxuXG5leHBvcnQge2FkZFRvZG8sIGRlbGV0ZVRvZG8sIGVkaXRUb2RvLCB0b2RvU3RvcmFnZSwgdG9kb1Byb2plY3RzLCBzeW5jRGF0YSwgc2V0UHJpb3JpdHl9XG5cbiIsImltcG9ydCB7dG9kb1N0b3JhZ2UsIHRvZG9Qcm9qZWN0cywgc2V0UHJpb3JpdHksIGFkZFRvZG8sIGRlbGV0ZVRvZG8sIGVkaXRUb2RvLCBzeW5jRGF0YX0gZnJvbSBcIi4uL21vZHVsZXMvZGF0YVwiXG5cbmZ1bmN0aW9uIHJlbmRlckxheW91dCgpIHtcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3cmFwcGVyLmNsYXNzTmFtZSA9IFwid3JhcHBlclwiO1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxvZ29cIik7XG4gICAgbG9nby5jbGFzc05hbWUgPSBcImxvZ29cIjtcbiAgICBsb2dvLnRleHRDb250ZW50ID0gXCJlc2lhbGUgVG9kb0FwcFwiO1xuICAgIGhlYWRlci5hcHBlbmQobG9nbyk7XG5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG5cbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIG5hdi5jbGFzc05hbWUgPSBcIm5hdi1jbG9zZWRcIjtcbiAgICAgICAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpbmJveC50ZXh0Q29udGVudCA9IFwiSW5ib3hcIjtcbiAgICAgICAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b2RheS50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcbiAgICAgICAgY29uc3Qgd2VlayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHdlZWsudGV4dENvbnRlbnQgPSBcIldlZWtcIjtcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9qZWN0cy50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjsgIFxuICAgIG5hdi5hcHBlbmQoaW5ib3gsIHRvZGF5LCB3ZWVrLCBwcm9qZWN0cyk7XG5cbiAgICBjb25zdCBtb2JpbGVOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1vYmlsZU5hdi5jbGFzc05hbWUgPSBcIm1vYmlsZS1uYXZcIjtcblxuICAgIGNvbnN0IGhhbWJ1cmdlckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGFtYnVyZ2VyQnV0dG9uLmNsYXNzTmFtZSA9IFwiaGFtYnVyZ2VyLWJ1dHRvblwiO1xuICAgIGNvbnN0IGhhbWJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgaGFtYkljb24uY2xhc3NOYW1lID0gXCJtYXRlcmlhbC1pY29ucy1yb3VuZCBtb2JpbGUtYnV0dG9uc1wiO1xuICAgIGhhbWJJY29uLnRleHRDb250ZW50ID0gXCJtZW51XCI7XG4gICAgaGFtYnVyZ2VyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93TmF2KTtcbiAgICBoYW1idXJnZXJCdXR0b24uYXBwZW5kKGhhbWJJY29uKTtcbiAgICBcbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZEJ1dHRvbi5jbGFzc05hbWUgPSBcImFkZC1idXR0b25cIjtcbiAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dGb3JtKTtcblxuICAgIGNvbnN0IGFkZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBhZGRJY29uLmNsYXNzTmFtZSA9IFwibWF0ZXJpYWwtaWNvbnMtcm91bmQgbW9iaWxlLWJ1dHRvbnNcIjtcbiAgICBhZGRJY29uLnRleHRDb250ZW50ID0gXCJhZGRfY2lyY2xlXCI7XG4gICAgYWRkQnV0dG9uLmFwcGVuZChhZGRJY29uKTtcbiAgICBtb2JpbGVOYXYuYXBwZW5kKGFkZEJ1dHRvbiwgaGFtYnVyZ2VyQnV0dG9uKTtcbiAgICB3cmFwcGVyLmFwcGVuZChoZWFkZXIsIG1haW4sIG5hdiwgbW9iaWxlTmF2KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYXBwZW5kKHdyYXBwZXIpO1xufVxuXG5mdW5jdGlvbiBzaG93TmF2KCkge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIik7XG4gICAgY29uc3QgZm9ybVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0td3JhcHBlclwiKTtcbiAgICBcbiAgICBpZiAoZm9ybVdyYXBwZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZm9ybS13cmFwcGVyLW9wZW5cIikpIHJldHVyblxuXG4gICAgaWYgKG5hdi5jbGFzc0xpc3QuY29udGFpbnMoXCJuYXYtY2xvc2VkXCIpKSB7XG4gICAgICAgIG5hdi5jbGFzc05hbWUgPSBcIm5hdi1vcGVuXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmF2LmNsYXNzTmFtZSA9IFwibmF2LWNsb3NlZFwiO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyQWxsVG9kb3MoKSB7XG4gICAgaWYgKHRvZG9TdG9yYWdlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVyblxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgICAgICAgY29uc3QgYWxsVG9kb3MgPSBtYWluLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9kby13cmFwcGVyXCIpO1xuXG4gICAgICAgIGFsbFRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgICAgICBtYWluLnJlbW92ZUNoaWxkKHRvZG8pO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRvZG9TdG9yYWdlLmZvckVhY2goZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHJlbmRlclRvZG8oaXRlbS50aXRsZSwgaXRlbS5kZXNjLCBpdGVtLmR1ZURhdGUsIGluZGV4KTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gcmVuZGVyVG9kbyh0aXRsZSwgZGVzYywgZHVlRGF0ZSwgaW5kZXgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgY29uc3QgdG9kb1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZG9XcmFwcGVyLmNsYXNzTmFtZSA9IFwidG9kby13cmFwcGVyXCI7XG4gICAgdG9kb1dyYXBwZXIuZGF0YXNldC5pbmRleCA9IGluZGV4O1xuXG4gICAgY29uc3QgdG9kb01haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZG9NYWluLmNsYXNzTmFtZSA9IFwidG9kby1tYWluXCI7XG5cbiAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICB0b2RvVGl0bGUuY2xhc3NOYW1lID0gXCJ0b2RvLXRpdGxlXCI7XG4gICAgY29uc3QgdG9kb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0b2RvRGF0ZS5jbGFzc05hbWUgPSBcInRvZG8tZGF0ZVwiO1xuICAgIHRvZG9EYXRlLnRleHRDb250ZW50ID0gZHVlRGF0ZTtcblxuICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBkZWxldGVJY29uLmNsYXNzTmFtZSA9IFwibWF0ZXJpYWwtaWNvbnMgZGVsZXRlLWljb25cIjtcbiAgICBkZWxldGVJY29uLnRleHRDb250ZW50ID0gXCJkZWxldGVcIjtcbiAgICBkZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjb25maXJtRGVsZXRlKVxuXG4gICAgY29uc3QgZXhwYW5kTW9yZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBleHBhbmRNb3JlSWNvbi5jbGFzc05hbWUgPSBcIm1hdGVyaWFsLWljb25zXCI7XG4gICAgZXhwYW5kTW9yZUljb24udGV4dENvbnRlbnQgPSBcImV4cGFuZF9tb3JlXCI7XG4gICAgZXhwYW5kTW9yZUljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV4cGFuZFRvZG8pO1xuXG4gICAgY29uc3QgdW5ja2Vja2VkSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHVuY2tlY2tlZEljb24uY2xhc3NOYW1lID0gXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiO1xuICAgIHVuY2tlY2tlZEljb24udGV4dENvbnRlbnQgPSBcInJhZGlvX2J1dHRvbl91bmNoZWNrZWRcIjtcblxuICAgIGNvbnN0IGVkaXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgZWRpdEljb24uY2xhc3NOYW1lID0gXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiO1xuICAgIGVkaXRJY29uLnRleHRDb250ZW50ID0gXCJlZGl0X25vdGVcIjtcbiAgICBlZGl0SWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0VkaXQpO1xuXG4gICAgY29uc3QgcHJpb3JpdHlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgcHJpb3JpdHlJY29uLmNsYXNzTmFtZSA9IFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIlxuICAgIHByaW9yaXR5SWNvbi50ZXh0Q29udGVudCA9IFwicHJpb3JpdHlfaGlnaFwiO1xuICAgIHByaW9yaXR5SWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWN0aXZhdGVQcmlvcml0eSk7XG4gICAgaWYgKHRvZG9TdG9yYWdlW2luZGV4XS5wcmlvcml0eSA9PT0gdHJ1ZSkge1xuICAgICAgICBwcmlvcml0eUljb24uY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWljb24tYWN0aXZhdGVkXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHRvZG9TZWNvbmRhcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZG9TZWNvbmRhcnkuY2xhc3NOYW1lID0gXCJ0b2RvLXNlY29uZGFyeVwiO1xuICAgIGNvbnN0IHRvZG9EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdG9kb0Rlc2MudGV4dENvbnRlbnQgPSBkZXNjO1xuICAgIHRvZG9EZXNjLmNsYXNzTmFtZSA9IFwidG9kby1kZXNjXCI7XG5cbiAgICBjb25zdCBzZWNvbmRhcnlJY29ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2Vjb25kYXJ5SWNvbnMuY2xhc3NOYW1lID0gXCJ0b2RvLXNlY29uZGFyeS1pY29uc1wiXG4gICAgc2Vjb25kYXJ5SWNvbnMuYXBwZW5kKHByaW9yaXR5SWNvbiwgZWRpdEljb24sIGRlbGV0ZUljb24pO1xuXG4gICAgdG9kb1NlY29uZGFyeS5hcHBlbmQodG9kb0Rlc2MsIHNlY29uZGFyeUljb25zKTtcblxuICAgIHRvZG9NYWluLmFwcGVuZCh1bmNrZWNrZWRJY29uLCB0b2RvVGl0bGUsIHRvZG9EYXRlLCBleHBhbmRNb3JlSWNvbik7XG4gICAgdG9kb1dyYXBwZXIuYXBwZW5kKHRvZG9NYWluLCB0b2RvU2Vjb25kYXJ5KTtcbiAgICBtYWluLmFwcGVuZCh0b2RvV3JhcHBlcik7XG59XG5cbmZ1bmN0aW9uIGV4cGFuZFRvZG8oZSkge1xuICAgIGNvbnN0IHRoaXNTZWNvbmRhcnkgPSB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tc2Vjb25kYXJ5XCIpO1xuXG4gICAgaWYgKHRoaXMudGV4dENvbnRlbnQgPT09IFwiZXhwYW5kX21vcmVcIikge1xuICAgICAgICB0aGlzLnRleHRDb250ZW50ID0gXCJleHBhbmRfbGVzc1wiO1xuXG4gICAgICAgIHRoaXNTZWNvbmRhcnkuY2xhc3NMaXN0LmFkZChcInRvZG8tc2Vjb25kYXJ5LWFjdGl2ZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRleHRDb250ZW50ID0gXCJleHBhbmRfbW9yZVwiO1xuICAgICAgICB0aGlzU2Vjb25kYXJ5LmNsYXNzTGlzdC5yZW1vdmUoXCJ0b2RvLXNlY29uZGFyeS1hY3RpdmVcIik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZVByaW9yaXR5KGUpIHtcbiAgICBjb25zdCB0aGlzSW5kZXggPSB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmRhdGFzZXQuaW5kZXg7XG4gICAgc2V0UHJpb3JpdHkodGhpc0luZGV4KTtcbiAgICBpZiAodGhpcy5jbGFzc0xpc3QuY29udGFpbnMoXCJwcmlvcml0eS1pY29uLWFjdGl2YXRlZFwiKSkge1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoXCJwcmlvcml0eS1pY29uLWFjdGl2YXRlZFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1pY29uLWFjdGl2YXRlZFwiKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckZvcm0oKSB7XG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud3JhcHBlclwiKTtcblxuICAgIGNvbnN0IGZvcm1XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtV3JhcHBlci5jbGFzc05hbWUgPSBcImZvcm0td3JhcHBlciBmb3JtLXdyYXBwZXItY2xvc2VkXCI7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXG4gICAgY29uc3QgdGl0bGVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidG9kby10aXRsZVwiKTtcbiAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJDaG9vc2UgYSBuZXcgdGl0bGU6XCI7XG5cbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidG9kby10aXRsZVwiKTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby10aXRsZVwiKTtcblxuICAgIGNvbnN0IGRlc2NXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBkZXNjTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgZGVzY0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRvZG8tZGVzY1wiKTtcbiAgICBkZXNjTGFiZWwudGV4dENvbnRlbnQgPSBcIldyaXRlIGEgZGVzY3JpcHRpb24gZm9yIHlvdXIgbmV3IFRvZG86XCI7XG5cbiAgICBjb25zdCBkZXNjSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZGVzY0lucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIGRlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidG9kby1kZXNjXCIpO1xuICAgIGRlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tZGVzY1wiKTtcblxuICAgIGNvbnN0IGRhdGVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgZGF0ZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRvZG8tZGF0ZVwiKTtcbiAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIldoZW4gaXMgdGhpcyBUb2RvIGR1ZT9cIjtcblxuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0b2RvLWRhdGVcIik7XG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby1kYXRlXCIpO1xuXG4gICAgY29uc3QgcHJvamVjdFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHByb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBwcm9qZWN0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidG9kby1wcm9qZWN0XCIpO1xuICAgIHByb2plY3RMYWJlbC50ZXh0Q29udGVudCA9IFwiQXNzaWduIHlvdXIgVG9kbyB0byBhIHByb2plY3Q6XCI7XG5cbiAgICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIHByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tcHJvamVjdFwiKVxuICAgIHRvZG9Qcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBjb25zdCBuZXdPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBuZXdPcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgcHJvamVjdCk7XG4gICAgICAgIG5ld09wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3Q7XG4gICAgICAgIHByb2plY3RJbnB1dC5hcHBlbmQobmV3T3B0aW9uKTtcbiAgICB9KVxuXG4gICAgY29uc3QgcHJpb3JpdHlXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcmlvcml0eVdyYXBwZXIuY2xhc3NOYW1lID0gXCJmb3JtLXByaW9yaXR5LXdyYXBwZXJcIjtcbiAgICBjb25zdCBwcmlvcml0eVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwcmlvcml0eVRleHQudGV4dENvbnRlbnQgPSBcIklzIHRoaXMgVG9kbyBhIHByaW9yaXR5P1wiO1xuXG4gICAgY29uc3QgcHJpb3JpdHlZZXNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBwcmlvcml0eVllc0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRvZG8tcHJpb3JpdHkteWVzXCIpO1xuICAgIHByaW9yaXR5WWVzTGFiZWwudGV4dENvbnRlbnQgPSBcIlllc1wiO1xuXG4gICAgY29uc3QgcHJpb3JpdHlOb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHByaW9yaXR5Tm9MYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0b2RvLXByaW9yaXR5LW5vXCIpO1xuICAgIHByaW9yaXR5Tm9MYWJlbC50ZXh0Q29udGVudCA9IFwiTm9cIjtcblxuICAgIGNvbnN0IHByaW9yaXR5UmFkaW9zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcmlvcml0eVJhZGlvcy5jbGFzc05hbWUgPSBcImZvcm0tcmFkaW9zXCI7XG5cbiAgICBjb25zdCBwcmlvcml0eVllc0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHByaW9yaXR5WWVzSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xuICAgIHByaW9yaXR5WWVzSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRvZG8tcHJpb3JpdHlcIik7XG4gICAgcHJpb3JpdHlZZXNJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tcHJpb3JpdHkteWVzXCIpO1xuICAgIHByaW9yaXR5WWVzSW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgdHJ1ZSk7XG5cbiAgICBjb25zdCBwcmlvcml0eU5vSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgcHJpb3JpdHlOb0lucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcbiAgICBwcmlvcml0eU5vSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRvZG8tcHJpb3JpdHlcIik7XG4gICAgcHJpb3JpdHlOb0lucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby1wcmlvcml0eS1ub1wiKTtcbiAgICBwcmlvcml0eU5vSW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgZmFsc2UpO1xuICAgIHByaW9yaXR5Tm9JbnB1dC5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIHRydWUpO1xuXG4gICAgY29uc3QgZm9ybUJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm1CdXR0b25zLmNsYXNzTmFtZSA9IFwiZm9ybS1idXR0b25zXCI7XG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN1Ym1pdC1idXR0b25cIik7XG4gICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiRG9uZVwiKVxuICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3VibWl0Rm9ybSk7XG5cbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY2FuY2VsQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2FuY2VsLWJ1dHRvblwiKVxuICAgIGNhbmNlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICAgIGNhbmNlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkNhbmNlbFwiKVxuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0Zvcm0pO1xuXG4gICAgdGl0bGVXcmFwcGVyLmFwcGVuZCh0aXRsZUxhYmVsLCB0aXRsZUlucHV0KTtcbiAgICBkZXNjV3JhcHBlci5hcHBlbmQoZGVzY0xhYmVsLCBkZXNjSW5wdXQpO1xuICAgIGRhdGVXcmFwcGVyLmFwcGVuZChkYXRlTGFiZWwsIGRhdGVJbnB1dCk7XG4gICAgcHJvamVjdFdyYXBwZXIuYXBwZW5kKHByb2plY3RMYWJlbCwgcHJvamVjdElucHV0KTtcbiAgICBmb3JtQnV0dG9ucy5hcHBlbmQoc3VibWl0QnV0dG9uLCBjYW5jZWxCdXR0b24pO1xuICAgIHByaW9yaXR5UmFkaW9zLmFwcGVuZChwcmlvcml0eVllc0xhYmVsLCBwcmlvcml0eVllc0lucHV0LCBwcmlvcml0eU5vTGFiZWwsIHByaW9yaXR5Tm9JbnB1dCk7XG4gICAgcHJpb3JpdHlXcmFwcGVyLmFwcGVuZChwcmlvcml0eVRleHQsIHByaW9yaXR5UmFkaW9zKTtcbiAgICBmb3JtLmFwcGVuZCh0aXRsZVdyYXBwZXIsIGRlc2NXcmFwcGVyLCBkYXRlV3JhcHBlciwgcHJvamVjdFdyYXBwZXIsIHByaW9yaXR5V3JhcHBlciwgZm9ybUJ1dHRvbnMpO1xuICAgIGZvcm1XcmFwcGVyLmFwcGVuZChmb3JtKTtcbiAgICB3cmFwcGVyLmFwcGVuZChmb3JtV3JhcHBlcik7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdEZvcm0oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby10aXRsZVwiKTtcbiAgICBjb25zdCBkZXNjID0gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1kZXNjXCIpO1xuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tZGF0ZVwiKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLXByb2plY3RcIik7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT0ndG9kby1wcmlvcml0eSddOmNoZWNrZWRcIik7XG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXQtYnV0dG9uXCIpO1xuICAgIFxuICAgIGlmICh0aXRsZS52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICB0aXRsZS5zdHlsZS5ib3JkZXIgPSBcIjAuMTVyZW0gdmFyKC0tcmVkKSBzb2xpZFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRpdGxlLnN0eWxlLmJvcmRlciA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChkZXNjLnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgIGRlc2Muc3R5bGUuYm9yZGVyID0gXCIwLjE1cmVtIHZhcigtLXJlZCkgc29saWRcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkZXNjLnN0eWxlLmJvcmRlciA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChkYXRlLnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgIGRhdGUuc3R5bGUuYm9yZGVyID0gXCIwLjE1cmVtIHZhcigtLXJlZCkgc29saWRcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkYXRlLnN0eWxlLmJvcmRlciA9IFwiXCI7XG4gICAgfVxuICAgIGlmIChkYXRlLnZhbHVlID09PSBcIlwiIHx8IGRlc2MudmFsdWUgPT09IFwiXCIgfHwgZGF0ZS52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICByZXR1cm5cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc3VibWl0QnV0dG9uLnZhbHVlID09PSBcIkRvbmVcIikge1xuICAgICAgICBhZGRUb2RvKHRpdGxlLnZhbHVlLCBkZXNjLnZhbHVlLCBkYXRlLnZhbHVlLCBwcm9qZWN0LnZhbHVlLCBKU09OLnBhcnNlKHByaW9yaXR5LnZhbHVlKSk7XG4gICAgICAgIHNob3dGb3JtKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3VibWl0QnV0dG9uLnZhbHVlID09PSBcIkVkaXRcIikge1xuICAgICAgICAgICAgZWRpdFRvZG8odGl0bGUudmFsdWUsIGRlc2MudmFsdWUsIGRhdGUudmFsdWUsIHByb2plY3QudmFsdWUsIEpTT04ucGFyc2UocHJpb3JpdHkudmFsdWUpLCBzdWJtaXRCdXR0b24uZGF0YXNldC5lZGl0SW5kZXgpO1xuICAgICAgICAgICAgc3VibWl0QnV0dG9uLnZhbHVlID0gXCJEb25lXCI7XG4gICAgICAgICAgICBkZWxldGUgc3VibWl0QnV0dG9uLmRhdGFzZXQuZWRpdEluZGV4O1xuICAgICAgICAgICAgc2hvd0Zvcm0oKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gc2hvd0Zvcm0oYWN0aW9uLCBjYWxsZXIpIHtcbiAgICBjb25zdCBmb3JtV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS13cmFwcGVyXCIpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLXRpdGxlXCIpO1xuICAgIGNvbnN0IGRlc2MgPSAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWRlc2NcIik7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1kYXRlXCIpO1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tcHJvamVjdFwiKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFtuYW1lPSd0b2RvLXByaW9yaXR5J11cIik7XG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXQtYnV0dG9uXCIpO1xuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLWJ1dHRvblwiKTtcblxuICAgIGlmIChmb3JtV3JhcHBlci5jbGFzc0xpc3QuY29udGFpbnMoXCJmb3JtLXdyYXBwZXItb3BlblwiKSAmJiB0aGlzID09PSBhZGRCdXR0b24gJiYgc3VibWl0QnV0dG9uLnZhbHVlID09PSBcIkVkaXRcIikgcmV0dXJuXG5cbiAgICBpZiAoYWN0aW9uID09PSBcImVkaXRUb2RvXCIpIHtcbiAgICAgICAgY29uc3QgdGhpc0luZGV4ID0gY2FsbGVyLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmRhdGFzZXQuaW5kZXg7XG4gICAgICAgIHRpdGxlLnZhbHVlID0gdG9kb1N0b3JhZ2VbdGhpc0luZGV4XS50aXRsZTtcbiAgICAgICAgZGVzYy52YWx1ZSA9IHRvZG9TdG9yYWdlW3RoaXNJbmRleF0uZGVzYztcbiAgICAgICAgZGF0ZS52YWx1ZSA9IHRvZG9TdG9yYWdlW3RoaXNJbmRleF0uZHVlRGF0ZTtcbiAgICAgICAgcHJvamVjdC52YWx1ZSA9IHRvZG9TdG9yYWdlW3RoaXNJbmRleF0ucHJvamVjdDtcbiAgICAgICAgaWYgKHRvZG9TdG9yYWdlW3RoaXNJbmRleF0ucHJpb3JpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHByaW9yaXR5WzBdLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgcHJpb3JpdHlbMV0uY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJpb3JpdHlbMF0uY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgcHJpb3JpdHlbMV0uY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2codG9kb1N0b3JhZ2VbdGhpc0luZGV4XS5wcmlvcml0eSlcblxuICAgICAgICBzdWJtaXRCdXR0b24udmFsdWUgPSBcIkVkaXRcIjtcbiAgICAgICAgc3VibWl0QnV0dG9uLmRhdGFzZXQuZWRpdEluZGV4ID0gdGhpc0luZGV4O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRpdGxlLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZGVzYy52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGRhdGUudmFsdWUgPSBcIlwiO1xuICAgICAgICBwcm9qZWN0LnZhbHVlID0gXCJEZWZhdWx0XCI7XG4gICAgICAgIHByaW9yaXR5LnZhbHVlID0gdHJ1ZTtcbiAgICAgICAgc3VibWl0QnV0dG9uLnZhbHVlID0gXCJEb25lXCI7XG4gICAgICAgIHByaW9yaXR5WzBdLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgcHJpb3JpdHlbMV0uY2hlY2tlZCA9IHRydWVcbiAgICB9XG4gICAgXG4gICAgaWYgKGZvcm1XcmFwcGVyLmNsYXNzTGlzdC5jb250YWlucyhcImZvcm0td3JhcHBlci1jbG9zZWRcIikpIHtcbiAgICAgICAgZm9ybVdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZShcImZvcm0td3JhcHBlci1jbG9zZWRcIik7XG4gICAgICAgIGZvcm1XcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLXdyYXBwZXItb3BlblwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3JtV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKFwiZm9ybS13cmFwcGVyLW9wZW5cIik7XG4gICAgICAgIGZvcm1XcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLXdyYXBwZXItY2xvc2VkXCIpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY29uZmlybURlbGV0ZShlKSB7XG4gICAgY29uc3QgdGhpc0luZGV4ID0gdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5kYXRhc2V0LmluZGV4O1xuXG4gICAgaWYgKHRoaXMuaGFzQXR0cmlidXRlKFwiY29uZmlybS1kZWxldGVcIikpIHtcbiAgICAgICAgZGVsZXRlVG9kbyh0aGlzSW5kZXgpO1xuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgdGhpc0Rlc2MgPSB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tZGVzY1wiKTtcblxuICAgIHRoaXNEZXNjLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWNvbmZpcm0tZGVsZXRlXCIpO1xuICAgIHRoaXNEZXNjLnRleHRDb250ZW50ID0gXCJQcmVzcyBhZ2FpbiB0aGUgZGVsZXRlIGJ1dHRvbiB0byBjb25maXJtIVwiO1xuICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiY29uZmlybS1kZWxldGVcIiwgdHJ1ZSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpICA9PiB7XG4gICAgdGhpc0Rlc2MuY2xhc3NMaXN0LnJlbW92ZShcInRvZG8tY29uZmlybS1kZWxldGVcIik7XG4gICAgdGhpc0Rlc2MudGV4dENvbnRlbnQgPSB0b2RvU3RvcmFnZVt0aGlzSW5kZXhdLmRlc2M7XG4gICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoXCJjb25maXJtLWRlbGV0ZVwiKTtcbiAgICB9LCA0MDAwKVxufVxuXG5mdW5jdGlvbiBzaG93RWRpdChlKSB7XG4gICAgY29uc3QgY2FsbGVyID0gdGhpcztcbiAgICBzaG93Rm9ybShcImVkaXRUb2RvXCIsIGNhbGxlcik7XG59XG5cbmV4cG9ydCB7cmVuZGVyTGF5b3V0LCByZW5kZXJBbGxUb2RvcywgcmVuZGVyRm9ybX0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZXMvc3R5bGUuY3NzXCJcbmltcG9ydCB7cmVuZGVyTGF5b3V0LCByZW5kZXJBbGxUb2RvcywgcmVuZGVyRm9ybX0gZnJvbSBcIi4vbW9kdWxlcy9kb21cIlxuaW1wb3J0IHtzeW5jRGF0YSwgYWRkVG9kb30gZnJvbSBcIi4vbW9kdWxlcy9kYXRhXCJcblxuc3luY0RhdGEoKTtcbnJlbmRlckxheW91dCgpO1xucmVuZGVyRm9ybSgpO1xucmVuZGVyQWxsVG9kb3MoKTsiXSwic291cmNlUm9vdCI6IiJ9