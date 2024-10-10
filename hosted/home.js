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

eval("const utils = __webpack_require__(/*! ./utility.js */ \"./client/utility.js\");\nconst formSetup = __webpack_require__(/*! ./formSetup.js */ \"./client/formSetup.js\");\n\nconst init = () => {\n  // Retrieve DOC elements\n  const getPokemonForm = document.querySelector('#getPokemonForm');\n  const getPokemonTypeForm = document.querySelector('#getPokemonTypeForm');\n  const getEvolvedPokemonForm = document.querySelector('#getEvolvedPokemonForm');\n  const getRandomPokemonForm = document.querySelector('#getRandomPokemonForm');\n  const addPokemonForm = document.querySelector('#addPokemonForm');\n  const addEvolutionForm = document.querySelector('#addEvolutionForm');\n  // Setup elements\n  utils.setUpTypeSelectors(addPokemonForm);\n  utils.setUpTypeSelectors(getPokemonTypeForm);\n  // Setup Sumission events\n  formSetup.setUpGetPokemon(getPokemonForm);\n  formSetup.setUpGetPokemonType(getPokemonTypeForm);\n  formSetup.setUpGetEvolvedPokemon(getEvolvedPokemonForm);\n  formSetup.setUpGetRandomPokemon(getRandomPokemonForm);\n  formSetup.setUpAddPokemon(addPokemonForm);\n  formSetup.setUpAddEvolution(addEvolutionForm);\n};\n\nwindow.onload = init;\n\n//# sourceURL=webpack://igme430-project-1/./client/client.js?");

/***/ }),

/***/ "./client/formSetup.js":
/*!*****************************!*\
  !*** ./client/formSetup.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const utils = __webpack_require__(/*! ./utility.js */ \"./client/utility.js\");\r\n\r\nconst setUpGetPokemon = (form) => {\r\n    utils.setUpFormSubmit(form, () => {\r\n        const fName = form.querySelector('#nameField').value;\r\n        const fID = form.querySelector('#idField').value;\r\n        const qParameters = `name=${fName}&id=${fID}`;\r\n        const fMethod = form.querySelector('#methodSelect').value;\r\n        utils.fetchData(`${form.action}?${qParameters}`, fMethod);\r\n    });\r\n}\r\n\r\nconst setUpGetPokemonType = (form) => {\r\n    utils.setUpFormSubmit(form, () => {\r\n        const fTypeA = form.querySelector('#typeA').value;\r\n        const fTypeB = form.querySelector('#typeB').value;\r\n        const qParameters = `typeA=${fTypeA}&typeB=${fTypeB}`;\r\n        const fMethod = form.querySelector('#methodSelect').value;\r\n        utils.fetchData(`${form.action}?${qParameters}`, fMethod);\r\n    });\r\n}\r\n\r\nconst setUpGetEvolvedPokemon = (form) => {\r\n    utils.setUpFormSubmit(form, () => {\r\n        const fName = form.querySelector('#nameField').value;\r\n        const qParameters = `name=${fName}`;\r\n        const fMethod = form.querySelector('#methodSelect').value;\r\n        utils.fetchData(`${form.action}?${qParameters}`, fMethod);\r\n    });\r\n}\r\n\r\nconst setUpGetRandomPokemon = (form) => {\r\n    utils.setUpFormSubmit(form, () => {\r\n        const fMethod = form.querySelector('#methodSelect').value;\r\n        utils.fetchData(form.action, fMethod);\r\n    });\r\n}\r\n\r\nconst setUpAddPokemon = (form) => {\r\n    utils.setUpFormSubmit(form, () => {\r\n        const fName = form.querySelector('#nameField').value;\r\n        const fTypeA = form.querySelector('#typeA').value;\r\n        const fTypeB = form.querySelector('#typeB').value;\r\n        const formData = `name=${fName}&typeA=${fTypeA}&typeB=${fTypeB}`;\r\n        utils.fetchData(form.action, 'POST', formData);\r\n    });\r\n}\r\n\r\nconst setUpAddEvolution = (form) => {\r\n    utils.setUpFormSubmit(form, () => {\r\n        const fPreEvolution = form.querySelector('#preEvolutionField').value;\r\n        const fEvolution = form.querySelector('#evolutionField').value;\r\n        const formData = `preEvolution=${fPreEvolution}&evolution=${fEvolution}`;\r\n        utils.fetchData(form.action, 'POST', formData);\r\n    });\r\n}\r\n\r\nmodule.exports = {\r\n    setUpGetPokemon,\r\n    setUpGetPokemonType,\r\n    setUpGetEvolvedPokemon,\r\n    setUpGetRandomPokemon,\r\n    setUpAddPokemon,\r\n    setUpAddEvolution\r\n}\n\n//# sourceURL=webpack://igme430-project-1/./client/formSetup.js?");

/***/ }),

/***/ "./client/utility.js":
/*!***************************!*\
  !*** ./client/utility.js ***!
  \***************************/
/***/ ((module) => {

eval("const PKMN_TYPES = [\r\n  '',\r\n  'Fire',\r\n  'Water',\r\n  'Grass',\r\n  'Normal',\r\n  'Fighting',\r\n  'Bug',\r\n  'Flying',\r\n  'Electric',\r\n  'Poison',\r\n  'Rock',\r\n  'Ground',\r\n  'Psychic',\r\n  'Ghost',\r\n  'Ice',\r\n  'Dragon',\r\n  'Steel',\r\n  'Dark',\r\n  'Fairy',\r\n]\r\n\r\nconst setUpTypeSelectors = (form) => {\r\n  form.querySelector('#typeA').innerHTML = generateTypeSelector();\r\n  form.querySelector('#typeB').innerHTML = generateTypeSelector();\r\n}\r\n\r\nconst generateTypeSelector = () => {\r\n  let typeSelector = '';\r\n  for (const type of PKMN_TYPES) {\r\n    typeSelector += `<option value='${type}'>${type}</option>`;\r\n  }\r\n  return typeSelector;\r\n}\r\n\r\nconst handleResponse = async (response, method) => {\r\n  const content = document.querySelector('#content');\r\n  switch (response.status) {\r\n    case 200:\r\n      content.innerHTML = '<b>Success</b>';\r\n      break;\r\n    case 201:\r\n      content.innerHTML = '<b>New User Created</b>';\r\n      break;\r\n    case 204:\r\n      content.innerHTML = '<b>User Info Updated</b>';\r\n      break;\r\n    case 400:\r\n      content.innerHTML = '<b>Invalid Form Submission</b>';\r\n      break;\r\n    case 404:\r\n      content.innerHTML = '<b>Not Found</b>';\r\n      break;\r\n    default:\r\n      content.innerHTML = '<b>Response Code Not Implemented</b>';\r\n      break;\r\n  }\r\n  content.innerHTML = `<h2>${content.innerHTML}</h2>`;\r\n\r\n  // Load in JSON\r\n  if (method.toUpperCase() !== 'HEAD' && response.status !== 204 ) {\r\n    let resObj = await response.json();\r\n    console.log(resObj);\r\n    if (resObj.response) {\r\n      content.innerHTML += `<p>${JSON.stringify(resObj)}</p>`;\r\n    } else if (resObj.message) {\r\n      content.innerHTML += `<p>${resObj.message}</p>`;\r\n    }\r\n  }\r\n}\r\n\r\nconst fetchData = async (url, method, data) => {\r\n  const options = {\r\n    method: method,\r\n    headers: {\r\n      'Content-Type': 'application/x-www-form-urlencoded',\r\n      'Accept': 'application/json',\r\n    },\r\n    body: data,\r\n  }\r\n  let response = await fetch(url, options);\r\n  handleResponse(response, method);\r\n}\r\n\r\nconst setUpFormSubmit = (form, constructData) => {\r\n  form.addEventListener('submit', (e) => {\r\n    e.preventDefault();\r\n    constructData(form);\r\n    return false;\r\n  })\r\n}\r\n\r\nmodule.exports = {\r\n  setUpTypeSelectors,\r\n  setUpFormSubmit,\r\n  fetchData\r\n}\n\n//# sourceURL=webpack://igme430-project-1/./client/utility.js?");

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