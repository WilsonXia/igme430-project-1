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

/***/ "./client/client.js":
/*!**************************!*\
  !*** ./client/client.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const utils = __webpack_require__(/*! ./utility.js */ \"./client/utility.js\");\n\nconst init = () => {\n  // Retrieve DOC elements\n  const getPokemonForm = document.querySelector('#getPokemonForm');\n  const addPokemonForm = document.querySelector('#addPokemonForm');\n  // Setup elements\n  addPokemonForm.querySelector('#typeA').innerHTML = utils.generateTypeSelector();\n  addPokemonForm.querySelector('#typeB').innerHTML = utils.generateTypeSelector();\n\n  // Setup events\n  getPokemonForm.addEventListener('submit', (e) => {\n    e.preventDefault();\n    // Read Form data and then fetch it\n    const fName = getPokemonForm.querySelector('#nameField').value;\n    const fID = getPokemonForm.querySelector('#idField').value;\n    const qParameters = `name=${fName}&id=${fID}`;\n    const fMethod = getPokemonForm.querySelector('#methodSelect').value;\n    utils.fetchData(`${getPokemonForm.action}?${qParameters}`, fMethod);\n    return false;\n  });\n  addPokemonForm.addEventListener('submit', (e) => {\n    e.preventDefault();\n    // Read Form data and then fetch it\n    const fName = addPokemonForm.querySelector('#nameField').value;\n    const fTypeA = addPokemonForm.querySelector('#typeA').value;\n    const fTypeB = addPokemonForm.querySelector('#typeB').value;\n    const formData = `name=${fName}&typeA=${fTypeA}&typeB=${fTypeB}`;\n    utils.fetchData(addPokemonForm.action, 'POST', formData);\n    return false;\n  });\n};\n\nwindow.onload = init;\n\n//# sourceURL=webpack://igme430-project-1/./client/client.js?");

/***/ }),

/***/ "./client/utility.js":
/*!***************************!*\
  !*** ./client/utility.js ***!
  \***************************/
/***/ ((module) => {

eval("const PKMN_TYPES = [\r\n    '',\r\n    'Fire',\r\n    'Water',\r\n    'Grass',\r\n    'Normal',\r\n    'Fighting',\r\n    'Bug',\r\n    'Flying',\r\n    'Electric',\r\n    'Poison',\r\n    'Rock',\r\n    'Ground',\r\n    'Psychic',\r\n    'Ghost',\r\n    'Ice',\r\n    'Dragon',\r\n    'Steel',\r\n    'Dark',\r\n    'Fairy',\r\n]\r\n\r\nconst generateTypeSelector = () => {\r\n    let typeSelector = '';\r\n    for (const type of PKMN_TYPES) {\r\n        typeSelector += `<option value='${type}'>${type}</option>`;\r\n    }\r\n    return typeSelector;\r\n}\r\n\r\nconst handleResponse = async (response, method) => {\r\n    const content = document.querySelector('#content');\r\n    switch(response.status){\r\n      case 200:\r\n            content.innerHTML = '<b>Success</b>';\r\n            break;\r\n          case 201:\r\n            content.innerHTML = '<b>New User Created</b>';\r\n            break;\r\n          case 204:\r\n            content.innerHTML = '<b>User Info Updated</b>';\r\n            break;\r\n          case 400:\r\n            content.innerHTML = '<b>Invalid Form Submission</b>';\r\n            break;\r\n          case 404:\r\n            content.innerHTML = '<b>Not Found</b>';\r\n            break;\r\n          default:\r\n            content.innerHTML = '<b>Response Code Not Implemented</b>';\r\n            break;\r\n    }\r\n    content.innerHTML = `<h2>${content.innerHTML}</h2>`;\r\n  \r\n    // Load in JSON\r\n    if (method.toUpperCase() !== 'HEAD') {\r\n      let resObj = await response.json();\r\n      console.log(resObj);\r\n      if (resObj.response) {\r\n        content.innerHTML += `<p>${JSON.stringify(resObj)}</p>`;\r\n      } else if (resObj.message) {\r\n        content.innerHTML += `<p>${resObj.message}</p>`;\r\n      }\r\n    }\r\n  }\r\n  \r\n  const fetchData = async (url, method, data) => {\r\n    const options = {\r\n      method: method,\r\n      headers: {\r\n        'Content-Type': 'application/x-www-form-urlencoded',\r\n        'Accept': 'application/json',\r\n      },\r\n      body: data,\r\n    }\r\n    let response = await fetch(url, options);\r\n    handleResponse(response, method);\r\n  }\r\n\r\nmodule.exports = {\r\n    generateTypeSelector,\r\n    fetchData\r\n}\n\n//# sourceURL=webpack://igme430-project-1/./client/utility.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./client/client.js");
/******/ 	
/******/ })()
;