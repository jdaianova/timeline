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

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TemplateMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TemplateMessage */ \"./src/components/TemplateMessage.js\");\n/* harmony import */ var _ValidateUserCoords__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ValidateUserCoords */ \"./src/components/ValidateUserCoords.js\");\n\n\nvar inputText = document.querySelector(\".input-text\");\nvar enterMessageBtn = document.querySelector(\".btn-enter-message\");\nvar popup = document.querySelector(\".popup-enter-location\");\nvar popupInputCoords = document.querySelector(\".popup-input\");\nvar popupBtnOk = document.querySelector(\".btn-popup-input-ok\");\nvar popupBtnCancel = document.querySelector(\".btn-popup-input-cancel\");\nvar formatNotification = document.querySelector(\".format-notification\");\n\n// const addMessage = async function () {\n//   if (!inputText.value) return;\n//   TemplateMessage(inputText.value, await getLocation());\n//   inputText.value = \"\";\n// };\n// enterMessageBtn.addEventListener(\"click\", addMessage);\n\n//functions of getting current coordinates\n// function getCoords() {\n//   return new Promise((resolve) => {\n//     if (navigator.geolocation) {\n//       navigator.geolocation.getCurrentPosition(\n//         ({ coords }) => resolve(coords),\n//         () => {\n//           popup.classList.remove(\"invisible\");\n//           popupBtnOk.addEventListener(\"click\", () => {\n//             console.log(popupInputCoords.value);\n//             popup.classList.add(\"invisible\");\n//             TemplateMessage(inputText.value, popupInputCoords.value);\n//           });\n//         }\n//       );\n//     }\n//   });\n// }\n\n// async function getLocation() {\n//   const { latitude, longitude } = await getCoords();\n//   return latitude.toFixed(5) + \" \" + longitude.toFixed(5);\n// }\n\nfunction addMessage() {\n  if (navigator.geolocation) {\n    navigator.geolocation.getCurrentPosition(function (position) {\n      var _position$coords = position.coords,\n        latitude = _position$coords.latitude,\n        longitude = _position$coords.longitude;\n      (0,_TemplateMessage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(inputText.value, latitude + \" \" + longitude);\n      inputText.value = \"\";\n    }, function () {\n      popup.classList.remove(\"invisible\");\n      formatNotification.textContent = \"\";\n      popupBtnOk.addEventListener(\"click\", function () {\n        if ((0,_ValidateUserCoords__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(popupInputCoords.value)) {\n          popup.classList.add(\"invisible\");\n          (0,_TemplateMessage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(inputText.value, popupInputCoords.value);\n          inputText.value = \"\";\n          popupInputCoords.value = \"\";\n          formatNotification.textContent = \"\";\n        } else {\n          formatNotification.textContent = \"coordinates is not valid\";\n          popupInputCoords.addEventListener(\"focus\", function () {\n            formatNotification.textContent = \"\";\n          });\n        }\n      });\n      popupBtnCancel.addEventListener(\"click\", function () {\n        if (!inputText.value) {\n          return;\n        }\n        (0,_TemplateMessage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(inputText.value, \"unknown\");\n        popup.classList.add(\"invisible\");\n        inputText.value = \"\";\n        popupInputCoords.value = \"\";\n      });\n    });\n  }\n}\nenterMessageBtn.addEventListener(\"click\", function () {\n  if (inputText.value) {\n    addMessage();\n  }\n});\n\n//# sourceURL=webpack://dashboard/./src/components/App.js?");

/***/ }),

/***/ "./src/components/GetCurrentTime.js":
/*!******************************************!*\
  !*** ./src/components/GetCurrentTime.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//function of getting current time\nfunction GetCurrentTime() {\n  var now = new Date();\n  var result = now.toLocaleString();\n  result = result.replace(new RegExp(\"/\", \"g\"), \".\");\n  result = result.replace(new RegExp(\",\", \"g\"), \"\");\n  result = result.substring(0, 16);\n  return result;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GetCurrentTime());\n\n//# sourceURL=webpack://dashboard/./src/components/GetCurrentTime.js?");

/***/ }),

/***/ "./src/components/TemplateMessage.js":
/*!*******************************************!*\
  !*** ./src/components/TemplateMessage.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ templateMessage)\n/* harmony export */ });\n/* harmony import */ var _GetCurrentTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GetCurrentTime */ \"./src/components/GetCurrentTime.js\");\n\nvar chat = document.querySelector(\".chat\");\nfunction templateMessage(content, coords) {\n  var newMessage = document.createElement(\"div\");\n  newMessage.classList.add(\"message\");\n  newMessage.innerHTML = \"\\n      <div class=\\\"message-time\\\">\".concat(_GetCurrentTime__WEBPACK_IMPORTED_MODULE_0__[\"default\"], \"</div>\\n      <div class=\\\"message-content\\\">\").concat(content, \"</div>\\n      <div class=\\\"message-location\\\">\\n        <div class=\\\"icon-geo\\\"></div>\\n        <p class=\\\"message-location-coords\\\">\").concat(coords, \"</p>\\n      </div>\");\n  chat.appendChild(newMessage);\n  chat.scrollTop = -chat.scrollHeight;\n}\n\n//# sourceURL=webpack://dashboard/./src/components/TemplateMessage.js?");

/***/ }),

/***/ "./src/components/ValidateUserCoords.js":
/*!**********************************************!*\
  !*** ./src/components/ValidateUserCoords.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ValidateUserCoords)\n/* harmony export */ });\nfunction ValidateUserCoords(str) {\n  return /\\[-{0,}([\\d]+\\.[\\d]{4,}),\\s-{0,}([\\d]+\\.[\\d]{4,})\\]/.test(str);\n}\n\n//# sourceURL=webpack://dashboard/./src/components/ValidateUserCoords.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App */ \"./src/components/App.js\");\n\n\n\n\n//# sourceURL=webpack://dashboard/./src/index.js?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/enter.png */ \"./src/images/enter.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mic.svg */ \"./src/images/mic.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/video.png */ \"./src/images/video.png\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar code = \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n\\n<head>\\n    <meta charset=\\\"UTF-8\\\">\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n    <title>Timeline</title>\\n</head>\\n\\n<body>\\n\\n    <div class=\\\"container\\\">\\n\\n        <div class=\\\"chat\\\">\\n            <!-- <div class=\\\"message\\\">\\n                <div class=\\\"message-time\\\">15.03.20 08:40</div>\\n                <div class=\\\"message-content\\\">dsjdhf sdfjsdjf skdjf sdf skdjf</div>\\n                <div class=\\\"message-location\\\">\\n                    <div class=\\\"icon-geo\\\"></div>\\n                    <p class=\\\"message-location-coords\\\">[51.50851, −0.12572]</p>\\n                </div>\\n            </div> -->\\n        </div>\\n\\n        <div class=\\\"input-field\\\">\\n            <input type=\\\"text\\\" class=\\\"input-text\\\" placeholder=\\\"enter your message...\\\">\\n            <button class=\\\"btn-enter-message\\\">\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"enter\\\" width=\\\"25px\\\">\\n            </button>\\n            <button class=\\\"btn-input-voice\\\">\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" alt=\\\"mic\\\" width=\\\"25px\\\">\\n            </button>\\n            <button class=\\\"btn-input-video\\\">\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" alt=\\\"cam\\\" width=\\\"25px\\\">\\n            </button>\\n        </div>\\n\\n        <div class=\\\"popup-enter-location invisible\\\">\\n            <div>\\n                <p class=\\\"user-denied-geolocation\\\">User denied Geolocation.</p>\\n                <p>Enter your location, please</p>\\n                <p class=\\\"popup-requered-format\\\">requered format: [00.00000, 00.00000]</p>\\n                <input class=\\\"popup-input\\\" type=\\\"text\\\" placeholder=\\\"[51.50851, -0.12572]\\\">\\n                \\n                <div>\\n                    <button class=\\\"btn-popup-input-ok\\\">ok</button>\\n                    <button class=\\\"btn-popup-input-cancel\\\">don't want</button>\\n                </div>\\n                <div class=\\\"format-notification\\\"></div>\\n            </div>\\n\\n        </div>\\n\\n    </div>\\n\\n</body>\\n\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://dashboard/./src/index.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://dashboard/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://dashboard/./src/style.css?");

/***/ }),

/***/ "./src/images/enter.png":
/*!******************************!*\
  !*** ./src/images/enter.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/enter.png\";\n\n//# sourceURL=webpack://dashboard/./src/images/enter.png?");

/***/ }),

/***/ "./src/images/mic.svg":
/*!****************************!*\
  !*** ./src/images/mic.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/mic.svg\";\n\n//# sourceURL=webpack://dashboard/./src/images/mic.svg?");

/***/ }),

/***/ "./src/images/video.png":
/*!******************************!*\
  !*** ./src/images/video.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/video.png\";\n\n//# sourceURL=webpack://dashboard/./src/images/video.png?");

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
/******/ 			// no module.id needed
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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