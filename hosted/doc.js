/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./client/hamburger.js":
/*!*****************************!*\
  !*** ./client/hamburger.js ***!
  \*****************************/
/***/ ((module) => {

eval("const initHamburger = () => { \r\n    // mobile menu\r\n    const burgerIcon = document.querySelector('#burger');\r\n    const navbarMenu = document.querySelector('#nav-links');\r\n\r\n    burgerIcon.addEventListener('click', () => {\r\n        navbarMenu.classList.toggle('is-active');\r\n    });\r\n}\r\n\r\nmodule.exports = {\r\n    initHamburger\r\n}\n\n//# sourceURL=webpack://igme430-project-1/./client/hamburger.js?");

/***/ }),

/***/ "./documentation/doc.js":
/*!******************************!*\
  !*** ./documentation/doc.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const hamburger = __webpack_require__(/*! ./client/hamburger.js */ \"./client/hamburger.js\");\r\n\r\nconst init = () => {\r\n    hamburger.initHamburger();\r\n}\r\n\r\nwindow.onload = init;\n\n//# sourceURL=webpack://igme430-project-1/./documentation/doc.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./documentation/doc.js");
/******/ 	
/******/ })()
;