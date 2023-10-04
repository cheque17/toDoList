/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\nhtml, body {\n  height: 100%;\n}\n\n\narticle,aside,details,figcaption,figure,\nfooter,header,hgroup,menu,nav,section { \n    display:block;\n}\n\n* {\n\tlist-style: none;\n  text-decoration: none;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nheader {\n\theight: 10vh;\n\ttext-align: start;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tbox-sizing: border-box;\n\tpadding-left: 3vh;\n\tfont-size: 5vh;\n\tbackground-color: aquamarine;\n}\n\n.general-content {\n\tbackground-color: aliceblue;\n\theight: 85vh;\n\twidth: 100%;\n\tdisplay: flex;\n}\n\n.general-content .sidebar{\n\tbackground: rgb(129, 209, 255);\n\twidth: 15vw;\n\theight: 100%;\n\tpadding: 3vh 0 0 4vh;\n\ttransition: all 0.5s ease;\n\tposition: relative;\n}\n\n.sidebar h2 {\n\tfont-size: 3vh;\n}\n\n.sidebar hr {\n\tmargin: 1vh 0 2vh;\n\tcolor: black;\n\twidth: 80%;\n}\n\n.sidebar ul {\n\toverflow: auto;\n\tmax-height: 65vh;\n}\n\nul li {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n}\n\nul li:nth-child(n+2) {\n\tmargin-top: 1vh;\n}\n\nul li .sdbar-icon,\nul li .options-icon {\n\theight: 3vh;\n\twidth: 3vh;\n\tobject-fit: cover;\n}\n\nul li .project-name,\n.add-button-container,\n.del-button-container {\n\tcursor: grab;\n}\n\n.general-content .sidebar .add-button-container, \n.general-content .project-container .add-button-container {\n\tposition: absolute;\n\tbottom: 2vh;\n\tright: 2vh;\n}\n\n.project-container .del-button-container {\n\tposition: absolute;\n\tbottom: 2vh;\n\tleft: 2vh;\n}\n\n.general-content .sidebar .add-button-container .add-img,\n.general-content .project-container .add-button-container .add-img,\n.project-container .del-button-container .del-img {\n object-fit: contain;\n width: 4vh;\n}\n\n.general-content .project-container {\n\theight: 100%;\n\twidth: 100%;\n\tbackground-color: rgb(191, 199, 120);\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: flex-start;\n\tpadding-top: 4vh;\n\tposition: relative;\n}\n\n\n.project-container .project-information {\n\tbox-sizing: border-box;\n\tborder: 1px black solid;\n\tpadding: 5px 2vh 8px;\n\twidth: 92%;\n\tmargin-bottom: 3vw;\n}\n\n.project-container  h2 {\n\ttext-align: center;\n  font-size: 4vh;\n}\n\n.project-container .list-display {\n\tborder: 1px solid black;\n\twidth: 90%;\n\tpadding: 1vh 0;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tmax-height: 53vh;\n\toverflow: auto;\n}\n\n.project-container .list-display .todo-container:nth-child(n + 2) {\n\tmargin-top: 1vh;\n}\t\n\n.project-container .list-display .todo-container {\n\tborder: 1px solid black;\n\tpadding: 5px 2vh 8px;\n\twidth: 80%;\n\tdisplay: flex;\n\tjustify-content: space-evenly;\n}\n\n.project-container .list-display .todo-container div {\n\twidth: 85%;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\n.project-container .list-display .todo-container button {\n\tpadding: 1vh;\n}\n\nfooter {\n\theight: 5vh;\n\tbackground-color: blanchedalmond;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n\n.collecter-container,\n.delete-card-container {\n\tborder: 1px black solid;\n\tpadding: 1vh 5vh;\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\tmargin: auto;\n\tbackground-color: aliceblue;\n\twidth: 20vw;\n}\n\n.delete-card-container {\n\twidth: 30vw;\n}\n\n.collecter-container div:first-child,\n.delete-card-container p:first-child {\n\tmargin-top: 3vh;\n}\n\n.delete-card-container p:first-child {\n\tfont-weight: 600;\n\tfont-size: 3vh;\n}\n\n.collecter-container div,\n.delete-card-container .cancel-continue-container {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tmargin-bottom: 2vh;\n}\n\n.delete-card-container p:nth-child(2){\n\tmargin-top: 2vh;\n}\n\n.delete-card-container .cancel-continue-container{\n\tjustify-content: space-around;\n\tmargin-top: 3vh;\n}\n\n.collecter-container div #exit-button {\n\tborder: 1px solid black;\n\tborder-radius: 50%; \n\tpadding: 2px 7px; \n\tfont-size: 14px;  \n\tposition: absolute; \n\ttop: 5px; \n\tright: 5px;\n}\n\n.collecter-container div:last-child {\n\tjustify-content: center;\n}\n\n.collecter-container div button,\n.delete-card-container div button {\n\tpadding: 1vh 1vh;\n\tborder-radius: 7px;\n\tborder: 1px black solid;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolist/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todolist/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/DOM-manipulation.js":
/*!*********************************!*\
  !*** ./src/DOM-manipulation.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createFullProjectDisplay: () => (/* binding */ createFullProjectDisplay),\n/* harmony export */   createFullSideBar: () => (/* binding */ createFullSideBar),\n/* harmony export */   detachElement: () => (/* binding */ detachElement),\n/* harmony export */   updateSidebarList: () => (/* binding */ updateSidebarList),\n/* harmony export */   updateTodoList: () => (/* binding */ updateTodoList)\n/* harmony export */ });\n/* harmony import */ var _menu_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.png */ \"./src/menu.png\");\n/* harmony import */ var _more_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./more.png */ \"./src/more.png\");\n/* harmony import */ var _add_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add.png */ \"./src/add.png\");\n/* harmony import */ var _delete_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delete.png */ \"./src/delete.png\");\n\n\n\n\n\nfunction createSidebar () {\n  const generalContent = document.querySelector('.general-content');\n\n  const sideBar = document.createElement('div');\n  sideBar.setAttribute('class', 'sidebar');\n\n  generalContent.appendChild(sideBar);\n\n  const sectionName = document.createElement('h2');\n  sectionName.textContent = 'Projects';\n  \n  sideBar.appendChild(sectionName);\n\n  const separationBar = document.createElement('hr');\n  sideBar.appendChild(separationBar);\n\n  const listedProjects = document.createElement('ul');\n  listedProjects.setAttribute('id', 'projects-list');\n\n  sideBar.appendChild(listedProjects);\n};\n\nfunction displayProjects (projectsArray) {\n  const list = document.querySelector('#projects-list');\n  \n  for (let i=0; i<projectsArray.length; i++) {\n    let project = document.createElement('li');\n    project.setAttribute('class', 'list-project');\n    \n    const myProjIcon = new Image();\n    myProjIcon.setAttribute('class', 'sdbar-icon')\n    myProjIcon.src = _menu_png__WEBPACK_IMPORTED_MODULE_0__;\n\n    let projectTitle = document.createElement('span');\n    projectTitle.setAttribute('class', 'project-name');\n    projectTitle.textContent = projectsArray[i].projectName;\n\n    const myOptIcon = new Image();\n    myOptIcon.setAttribute('class', 'options-icon');\n    myOptIcon.src = _more_png__WEBPACK_IMPORTED_MODULE_1__;\n\n    project.appendChild(myProjIcon);\n    project.appendChild(projectTitle);\n    project.appendChild(myOptIcon);\n    list.appendChild(project);\n  }\n};\n\nfunction createAddButton (area) {\n  const buttonContainer = document.createElement('div');\n  buttonContainer.setAttribute('class', 'add-button-container');\n  \n  const addImg = new Image();\n  addImg.setAttribute('class', 'add-img');\n  addImg.src = _add_png__WEBPACK_IMPORTED_MODULE_2__;\n\n  buttonContainer.appendChild(addImg);\n\n  if (area === 'sidebar'){\n    let sideBar = document.querySelector('.sidebar');\n    buttonContainer.setAttribute('id', 'add-project')\n    sideBar.appendChild(buttonContainer)\n  } else {\n    let project = document.querySelector('.project-container');\n    buttonContainer.setAttribute('id', 'add-task');\n    addImg.setAttribute('id', 'task-img-btt');\n    project.appendChild(buttonContainer);\n  }\n};\n\nfunction createFullSideBar (projectsArray) {\n  createSidebar();\n  displayProjects(projectsArray);\n  createAddButton('sidebar');\n}\n\nfunction updateSidebarList (projectsArray,) {\n  const projectCollection = document.querySelectorAll('.list-project');\n  for (let i= 0; i<projectCollection.length; i++){\n    projectCollection[i].remove()\n  }\n  displayProjects(projectsArray)\n};\n\n\nfunction createDeleteButton (area) {\n  const buttonContainer = document.createElement('div');\n  buttonContainer.setAttribute('class', 'del-button-container');\n\n  const delImg = new Image();\n  delImg.setAttribute('class', 'del-img');\n  delImg.src= _delete_png__WEBPACK_IMPORTED_MODULE_3__;\n\n  buttonContainer.appendChild(delImg);\n\n  if (area === 'project'){\n    let project = document.querySelector('.project-container');\n    buttonContainer.setAttribute('id','delete-project');\n    delImg.setAttribute('id', 'project-del-img');\n    project.appendChild(buttonContainer);\n  } else {\n    let taskDisplay = document.querySelector('.todo-container');\n    buttonContainer.setAttribute('id', 'delete-task');\n    delImg.setAttribute('id', 'task-del-img');\n    taskDisplay.appendChild(buttonContainer);\n    console.log(taskDisplay)\n  }\n};\n\n\nfunction createProjectContainer (projectObject) {\n  const generalWrapper = document.querySelector('.general-content');\n\n  const projectContainer = document.createElement('div')\n  projectContainer.setAttribute('class', 'project-container');\n\n  generalWrapper.appendChild(projectContainer);\n\n  const projectInformation = document.createElement('div')\n  projectInformation.setAttribute('class', 'project-information');\n  \n  projectContainer.appendChild(projectInformation)\n\n  const projectTitle = document.createElement('h2');\n  projectTitle.setAttribute('class', 'project-title');\n  projectTitle.innerText = projectObject.projectName;\n\n  projectInformation.appendChild(projectTitle);\n  \n  const projectDescription = document.createElement('p');\n  projectDescription.setAttribute('class', 'description');\n  projectDescription.innerText = projectObject.description;\n\n  projectInformation.appendChild(projectDescription);\n\n  const listName = document.createElement('h2');\n  listName.setAttribute('class', 'list-name');\n  listName.innerText = 'Tasks';\n\n  projectContainer.appendChild(listName);\n\n  const toDoListContainer = document.createElement('div');\n  toDoListContainer.setAttribute('class', 'list-display');\n  projectContainer.appendChild(toDoListContainer);\n};\n\n\nfunction createTodoDisplay (tasksArray) {\n  let toDoList = document.querySelector('.list-display');\n  for (let i=0; i<tasksArray.length; i++) {\n    let taskContainer = document.createElement('div');\n    taskContainer.setAttribute('class', 'todo-container');\n\n    const nameDescriptionContainer = document.createElement('div');\n\n    taskContainer.appendChild(nameDescriptionContainer);\n\n    let todoTitle = document.createElement('p');\n    todoTitle.setAttribute('class', 'todo-title');\n    todoTitle.innerText = tasksArray[i].title;\n\n    nameDescriptionContainer.appendChild(todoTitle);\n\n    let todoDueDate = document.createElement('p');\n    todoDueDate.setAttribute('class', 'todo-duedate');\n    todoDueDate.innerText = tasksArray[i].dueDate;\n\n    nameDescriptionContainer.appendChild(todoDueDate);\n\n    const expandButton = document.createElement('button');\n    expandButton.setAttribute('id',`todo-task-${i}`);\n    expandButton.setAttribute('class', 'expand-button');\n    expandButton.innerText = 'Expand';\n\n    taskContainer.appendChild(expandButton);\n\n    toDoList.appendChild(taskContainer);\n  }\n};\n\n\nfunction createFullProjectDisplay (projectObject) {\n  createProjectContainer(projectObject);\n  createTodoDisplay(projectObject.getTasks());\n  createAddButton('project');\n  createDeleteButton('project');\n};\n\n\nfunction updateTodoList (previousTodoNumber, tasksArray ) {\n  let todoCollection = document.querySelectorAll('.todo-container');\n  for (let i = 0; i < previousTodoNumber; i++){\n    todoCollection[i].remove();\n  }\n  createTodoDisplay(tasksArray);\n}\n\n\nfunction detachElement (parentContainer, childElement) {\n  const generalWrapper = document.querySelector(`${parentContainer}`);\n  const removedElement = document.querySelector(`${childElement}`);\n\n  generalWrapper.removeChild(removedElement);\n}\n\n\n\n\n//# sourceURL=webpack://todolist/./src/DOM-manipulation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _toDoCreation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDoCreation */ \"./src/toDoCreation.js\");\n/* harmony import */ var _DOM_manipulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM-manipulation */ \"./src/DOM-manipulation.js\");\n/* harmony import */ var _pop_up_DOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pop-up-DOM */ \"./src/pop-up-DOM.js\");\n\n\n\n\n\n\n\nconst projects = [];\n \nconst addProject = (name, description) =>{\n  projects.push((0,_toDoCreation__WEBPACK_IMPORTED_MODULE_1__.createProject)(name, description));\n}\n\n//Projects created just for testing\n\naddProject('Default project', 'This is just a random description to get things working and so on. Typing more rubbish to get a longer description. So let\\' keep typing abit more just because, I don\\'t want to have a small description. Lalalalala, lalalalala.');\naddProject('Extra Test', 'From the moment I understood the weakness of my flesh it disgusted me. I craved the strenght and certainty of steel. Aspired to the purity of the blessed machine. ')\naddProject('Third project', 'your kind cling to your flesh as though it will not decay and wither. One day the crude biomass you call the temple will fail you. And you will beg my kind to save you, but I\\'m already saved. For the blessed machine is inmortal. Even im death I serve the great omnisia');\n\nprojects[0].addTask('Do laundry', \"Wash my drawers and socks ASAP\", '19/10/2023', 'high');\nprojects[0].addTask('Do the cooking', \"Cook an ommelet\", '19/10/2023', 'high')\nprojects[1].addTask('Clean my room', 'Fold my clothes, clean pc, take out trash', '21/4/24', 'low');\nprojects[2].addTask('Third stuff to do', 'Fold my clothes, clean pc, take out trash', '21/4/24', 'low');\n\n\n(0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_2__.createFullSideBar)(projects);\n(0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_2__.createFullProjectDisplay)(projects[0]);\n\n\nlet projectShown = 0;\n//This event listener makes the side bar options work and the variable keeps track of the project displayed\ndocument.querySelector('#projects-list').addEventListener('click', (e)=>{\n  if(e.target.className === 'project-name'){\n    let projTitl = e.target.innerText;\n    for (let i=0; i<projects.length; i++){\n      if (projects[i].projectName == projTitl) {\n        (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_2__.detachElement)('.general-content', '.project-container');\n        (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_2__.createFullProjectDisplay)(projects[i]);\n        projectShown = i;\n      }\n    }\n  }\n});\n\nlet popUpDisplayed;\n\n//These event listeners make the add buttons work and the variable avoids more than one pop up to be displayed at once.\n\ndocument.querySelector('#add-project').addEventListener('click', ()=>{\n  if (popUpDisplayed) {\n    return\n  }\n  (0,_pop_up_DOM__WEBPACK_IMPORTED_MODULE_3__.createAddProjectCard)()\n  popUpDisplayed = 1;  \n});\n\ndocument.getElementsByTagName('body')[0].addEventListener('click', (e)=> {\n  if(e.target.id === 'task-img-btt'){\n    if(popUpDisplayed) {\n      return\n    }\n    (0,_pop_up_DOM__WEBPACK_IMPORTED_MODULE_3__.createAddTodoCard)();\n    popUpDisplayed = 1;\n  }\n\n});\n\ndocument.querySelector('.general-content').addEventListener('click', (e)=> {\n  if (e.target.id === 'project-del-img'){\n    if(popUpDisplayed) {\n      return\n    }\n    (0,_pop_up_DOM__WEBPACK_IMPORTED_MODULE_3__.createDeleteCard)();\n    popUpDisplayed = 1;\n  }\n});\n\n\n//This event listener controls the functioning of the delete card\n\ndocument.getElementsByTagName('body')[0].addEventListener('click', (e)=> {\n  if (e.target.id === 'cancel-button'){\n    (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_2__.detachElement)('#test', '.delete-card-container')\n    popUpDisplayed = 0;\n  } else if (e.target.id === 'continue-button'){\n    (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_2__.detachElement)('.general-content','.project-container')\n    projects.splice(projectShown, 1);\n    (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_2__.createFullProjectDisplay)(projects[0]);\n    projectShown = 0;\n    (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_2__.updateSidebarList)(projects);\n    (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_2__.detachElement)('#test', '.delete-card-container')\n    popUpDisplayed = 0;\n  }\n});\n\n//This event listener controls the functioning of the add pop up for both projects and tasks.\n\ndocument.getElementsByTagName('body')[0].addEventListener('click', (e)=> {\n  if(e.target.id === 'exit-button'){\n    (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_2__.detachElement)('#test', '.collecter-container')\n    popUpDisplayed = 0\n  } else if (e.target.id === 'submit-project'){\n    if (document.querySelector('#new-pr-name').value && document.querySelector('#new-pr-description').value ) {\n      addProject(document.querySelector('#new-pr-name').value, document.querySelector('#new-pr-description').value);\n      (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_2__.detachElement)('#test', '.collecter-container');\n      (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_2__.updateSidebarList)(projects)\n      popUpDisplayed = 0;\n    } else {\n      alert('All the fields should be filled for a project to be created.')\n    }    \n  } else if (e.target.id === 'submit-todo'){\n    let todoName = document.querySelector('#new-task-title');\n    let todoDx = document.querySelector('#new-task-description');\n    let todoDate = document.querySelector('#new-task-date');\n    let todoPriority = document.querySelector('#new-task-priority');\n    if (todoName.value && todoDx.value && todoDate.value){\n      const previousTodoNumber = projects[projectShown].getTasks().length;\n      projects[projectShown].addTask(todoName.value, todoDx.value, todoDate.value, todoPriority.value);\n      (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_2__.detachElement)('#test', '.collecter-container');\n      popUpDisplayed = 0;\n      (0,_DOM_manipulation__WEBPACK_IMPORTED_MODULE_2__.updateTodoList)(previousTodoNumber, projects[projectShown].getTasks())\n    } else {\n      alert('Title, description and date should be filled for a todo to be added.')\n    }\n  }\n});\n\n//This event triggers the expand buttons\n\ndocument.querySelector('.general-content').addEventListener('click', (e)=> {\n  if (e.target.className === 'expand-button'){\n    let taskNumber = e.target.id.slice(-1);\n    //projects[projectShown].getTasks()[taskNumber].title = 'Do nothing';\n    (0,_pop_up_DOM__WEBPACK_IMPORTED_MODULE_3__.showFullTodoDetails)(projects[projectShown].getTasks()[taskNumber]);\n    //console.log(projects[projectShown].getTasks()[0])\n    //console.log(projects[0].getTasks())\n    \n  }\n});\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/pop-up-DOM.js":
/*!***************************!*\
  !*** ./src/pop-up-DOM.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createAddProjectCard: () => (/* binding */ createAddProjectCard),\n/* harmony export */   createAddTodoCard: () => (/* binding */ createAddTodoCard),\n/* harmony export */   createDeleteCard: () => (/* binding */ createDeleteCard),\n/* harmony export */   showFullTodoDetails: () => (/* binding */ showFullTodoDetails)\n/* harmony export */ });\nconst createPopUpFrame = (use)=>{\n  const body = document.getElementsByTagName('body')[0];\n  \n  const popUpContainer = document.createElement('div');\n  if(use === 'collecter'){\n    popUpContainer.setAttribute('class', 'collecter-container');\n  } else if (use === 'delete-confirmation') {\n    popUpContainer.setAttribute('class', 'delete-card-container');\n  } else {\n    popUpContainer.setAttribute('class','details-container');\n  }\n\n  body.appendChild(popUpContainer)\n};\n\n\nconst createInfoRetriever = (infoRequested, inputId, inputType = 'text')=>{\n  const container = document.querySelector('.collecter-container');\n\n  const questionContainer = document.createElement('div');\n\n  const question = document.createElement('label');\n  question.innerText = infoRequested;\n  question.setAttribute('class', 'question');\n\n  const answerInput = document.createElement('input');\n  answerInput.setAttribute('class', 'answer');\n  answerInput.setAttribute('id', `${inputId}`)\n\n  if (inputType !== 'text') {\n    answerInput.setAttribute('type', `${inputType}`)\n  }\n\n  questionContainer.appendChild(question);\n  questionContainer.appendChild(answerInput)\n  container.appendChild(questionContainer)\n};\n\nconst createButton = function(buttonText, id) {\n  const container = document.querySelector('.collecter-container');\n  const buttonDiv = document.createElement('div');\n\n  const neededButton = document.createElement('button');\n  neededButton.setAttribute('type', 'button');\n  neededButton.setAttribute('id', `${id}`)\n  neededButton.innerText = buttonText; \n\n  buttonDiv.appendChild(neededButton);\n  container.appendChild(buttonDiv);\n\n};\n\n\nfunction createAddProjectCard () {\n  createPopUpFrame('collecter');\n  createButton('x', 'exit-button')\n  createInfoRetriever('Name:', 'new-pr-name');\n  createInfoRetriever('Description:', 'new-pr-description')\n  createButton('Submit', 'submit-project')\n};\n\nfunction createAddTodoCard () {\n  createPopUpFrame('collecter');\n  createButton('x', 'exit-button')\n  createInfoRetriever('Title:','new-task-title');\n  createInfoRetriever('Description', 'new-task-description');\n  createInfoRetriever('Due Date', 'new-task-date', 'date');\n  createInfoRetriever('Priority', 'new-task-priority')\n  createButton('Submit', 'submit-todo')\n};\n\nconst createDeletePopUpContent = (deleteTarget)=> {\n  const container = document.querySelector('.delete-card-container');\n  \n  const bigAttentionSeeker = document.createElement('p');\n  bigAttentionSeeker.innerText = 'Hey, are you sure you want to continue?';\n\n  container.appendChild(bigAttentionSeeker);\n\n  const confirmationQuestion = document.createElement('p');\n  confirmationQuestion.setAttribute('class', 'confirmation-question');\n\n  if (deleteTarget === 'project'){\n    confirmationQuestion.innerText = 'If you press confirm, this project and all its tasks will be deleted. Are you sure you want to continue?'\n  } else {\n    confirmationQuestion.innerText = 'If you press confirm, this task and all its details will be deleted. Are you sure you want to continue?'\n  }\n\n  container.appendChild(confirmationQuestion);\n\n  const decisionButtonsContainer = document.createElement('div');\n  decisionButtonsContainer.setAttribute('class', 'cancel-continue-container');\n\n  container.appendChild(decisionButtonsContainer);\n\n  const cancelButton = document.createElement('button');\n  cancelButton.setAttribute('type', 'button');\n  cancelButton.setAttribute('class', 'delete-decision');\n  cancelButton.setAttribute('id', 'cancel-button');\n  cancelButton.innerText = 'Cancel'\n\n  decisionButtonsContainer.appendChild(cancelButton);\n  \n  const continueButton = document.createElement('button');\n  continueButton.setAttribute('type','button');\n  continueButton.setAttribute('class','delete-decision');\n  continueButton.setAttribute('id', 'continue-button');\n  continueButton.innerText = 'Continue';\n\n  decisionButtonsContainer.appendChild(continueButton);\n};\n\nfunction createDeleteCard () {\n  createPopUpFrame('delete-confirmation');\n  createDeletePopUpContent('project');\n};\n\nconst createDetailsCard = (projectTodoObject)=>{\n  const popUpContainer = document.querySelector('.details-container');\n\n  //const exitDiv = document.createElement('div');\n  const exitButton = document.createElement('button');\n  exitButton.setAttribute('type', 'button');\n  exitButton.setAttribute('id', 'exit-details');\n\n  popUpContainer.appendChild(exitButton);\n\n  const titleDiv = document.createElement('div');\n  \n  popUpContainer.appendChild(titleDiv);\n\n  const todoTitle = document.createElement('h3');\n  todoTitle.innerText = projectTodoObject.title;\n\n  titleDiv.appendChild(todoTitle);\n\n  const descriptionDiv = document.createElement('div');\n\n  popUpContainer.appendChild(descriptionDiv);\n\n  const description = document.createElement('p');\n  description.innerText = projectTodoObject.description;\n\n  descriptionDiv.appendChild(description);\n\n  const dueDateDiv = document.createElement('div');\n\n  popUpContainer.appendChild(dueDateDiv);\n\n  const todoDueDate = document.createElement('p');\n  todoDueDate.innerText = projectTodoObject.dueDate;\n\n  dueDateDiv.appendChild(todoDueDate);\n\n  console.log(projectTodoObject.dueDate)\n\n};\n\nfunction showFullTodoDetails (projectTodoObject) {\n  createPopUpFrame('details');\n  createDetailsCard(projectTodoObject);\n};\n\n\n\n//# sourceURL=webpack://todolist/./src/pop-up-DOM.js?");

/***/ }),

/***/ "./src/toDoCreation.js":
/*!*****************************!*\
  !*** ./src/toDoCreation.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProject: () => (/* binding */ createProject),\n/* harmony export */   createToDo: () => (/* binding */ createToDo)\n/* harmony export */ });\nconst createProject = (function(projectName, description) {\n\n  const creationDate = new Date();\n\n  const tasks = []\n\n  const addTask = (title, description, dueDate, priority)=> {\n    tasks.push(createToDo(title, description, dueDate, priority))\n  }\n\n  const getTasks = () => tasks;\n\n\n  return {projectName, description, creationDate, addTask, getTasks, tasks}\n});\n\n\n\nconst createToDo = (function (title, description, dueDate, priority) {\n\n  return { title, description, dueDate, priority}\n});\n\n\n\n//# sourceURL=webpack://todolist/./src/toDoCreation.js?");

/***/ }),

/***/ "./src/add.png":
/*!*********************!*\
  !*** ./src/add.png ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b050b31320e8994b2d6f.png\";\n\n//# sourceURL=webpack://todolist/./src/add.png?");

/***/ }),

/***/ "./src/delete.png":
/*!************************!*\
  !*** ./src/delete.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c0bdcb92a37c243e9e1c.png\";\n\n//# sourceURL=webpack://todolist/./src/delete.png?");

/***/ }),

/***/ "./src/menu.png":
/*!**********************!*\
  !*** ./src/menu.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c288ebf347c09c816056.png\";\n\n//# sourceURL=webpack://todolist/./src/menu.png?");

/***/ }),

/***/ "./src/more.png":
/*!**********************!*\
  !*** ./src/more.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5063f57af2d15569c3c2.png\";\n\n//# sourceURL=webpack://todolist/./src/more.png?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;