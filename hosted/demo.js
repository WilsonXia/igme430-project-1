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

/***/ "./demo/demo.js":
/*!**********************!*\
  !*** ./demo/demo.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const quiz = __webpack_require__(/*! ./quiz.js */ \"./demo/quiz.js\");\r\n\r\nconst init = () => {\r\n    // Start\r\n    console.log('This is the Demo Page.');\r\n    const questionSlide = document.getElementById('questionSlide');\r\n    const resultsSlide = document.getElementById('resultsSlide');\r\n\r\n    quiz.fetchRandomPokemon();\r\n    console.log(`Answer: ${quiz.answer}`)\r\n    console.log(quiz.wrong)\r\n}\r\n\r\nconst toggleSlides = (slideA, slideB) => {\r\n    slideA.toggle('is-hidden');\r\n    slideB.toggle('is-hidden');\r\n}\r\n\r\nwindow.onload = init;\n\n//# sourceURL=webpack://igme430-project-1/./demo/demo.js?");

/***/ }),

/***/ "./demo/quiz.js":
/*!**********************!*\
  !*** ./demo/quiz.js ***!
  \**********************/
/***/ ((module) => {

eval("let url = \"127.0.0.01:3000/getRandomPokemon\";\r\nlet selectedPokemon;\r\nlet answer;\r\nlet wrong = [];\r\nlet possibleWrongAnswers;\r\nconst PKMN_TYPES = [\r\n    'Fire',\r\n    'Water',\r\n    'Grass',\r\n    'Normal',\r\n    'Fighting',\r\n    'Bug',\r\n    'Flying',\r\n    'Electric',\r\n    'Poison',\r\n    'Rock',\r\n    'Ground',\r\n    'Psychic',\r\n    'Ghost',\r\n    'Ice',\r\n    'Dragon',\r\n    'Steel',\r\n    'Dark',\r\n    'Fairy',\r\n]\r\n\r\nconst fetchRandomPokemon = async () => {\r\n    // Fetch from the API a random Pokemon\r\n    const options = {\r\n        method: 'GET',\r\n        headers: {\r\n          'Accept': 'application/json',\r\n        }\r\n      }\r\n    let response = await fetch(url, options);\r\n    handleResponse(response);\r\n}\r\n\r\nconst handleResponse = async (response) => {\r\n    // Receive the JSON Object and keep\r\n    // name, image, weaknesses\r\n    let resObj = await response.json();\r\n\r\n    let { name, img, type, weaknesses } = resObj.response;\r\n    selectedPokemon = { name, img, type, weaknesses };\r\n    answer = getAnswer();\r\n    setUpWrongAnswers();\r\n}\r\n\r\nconst getAnswer = () => {\r\n    // Returns a weakness from a Pokemon\r\n    let num = Math.random() * selectedPokemon.weaknesses.length;\r\n    num = parseInt(num, 10);\r\n    return selectedPokemon.weaknesses[num];\r\n}\r\n\r\nconst setUpWrongAnswers = () => {\r\n    // filter the weaknesses from types\r\n    possibleWrongAnswers = PKMN_TYPES.filter(\r\n        pkmnType => !selectedPokemon.weaknesses.find(\r\n            weakness => weakness === pkmnType));\r\n    getThreeWrongAnswers();\r\n}\r\n\r\nconst getWrongAnswer = () => {\r\n    // Returns a wrong answer from the possible wrong answers\r\n    let num = Math.random() * wrongAnswers.length;\r\n    num = parseInt(num, 10);\r\n    return possibleWrongAnswers[num];\r\n}\r\n\r\nconst getThreeWrongAnswers = () => {\r\n    // Sets up 3 distinct wrong answers\r\n    wrong = []; // Clear the list\r\n    wrong.push(getWrongAnswer());\r\n    possibleWrongAnswers.filter(e => e !== wrong[0]);\r\n    wrong.push(getWrongAnswer());\r\n    possibleWrongAnswers.filter(e => e !== wrong[1]);\r\n    wrong.push(getWrongAnswer());\r\n}\r\n\r\nmodule.exports = {\r\n    fetchRandomPokemon,\r\n    selectedPokemon,\r\n    answer,\r\n    wrong\r\n}\n\n//# sourceURL=webpack://igme430-project-1/./demo/quiz.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./demo/demo.js");
/******/ 	
/******/ })()
;