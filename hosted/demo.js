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

eval("const quiz = __webpack_require__(/*! ./quiz.js */ \"./demo/quiz.js\");\r\n\r\nlet questionSlide, resultsSlide, startSlide;\r\n\r\nconst init = () => {\r\n    questionSlide = document.getElementById('questionSlide');\r\n    resultsSlide = document.getElementById('resultsSlide');\r\n    startSlide = document.getElementById('startSlide');\r\n    startBtn = document.getElementById('startBtn');\r\n    nextBtn = document.getElementById('nextQuestionBtn');\r\n\r\n    // Setup events\r\n    startBtn.addEventListener('click', ()=>{\r\n        quiz.fetchRandomPokemon(questionSlide, resultsSlide);\r\n        quiz.toggleSlides(startSlide, questionSlide);\r\n    });\r\n    \r\n    nextBtn.addEventListener('click', ()=>{\r\n        quiz.fetchRandomPokemon(questionSlide, resultsSlide);\r\n        quiz.toggleSlides(resultsSlide, questionSlide);\r\n    });\r\n}\r\n\r\nwindow.onload = init;\n\n//# sourceURL=webpack://igme430-project-1/./demo/demo.js?");

/***/ }),

/***/ "./demo/quiz.js":
/*!**********************!*\
  !*** ./demo/quiz.js ***!
  \**********************/
/***/ ((module) => {

eval("let url = \"/getRandomPokemon\";\r\nlet selectedPokemon;\r\nlet answer;\r\nlet wrong = [];\r\nlet possibleWrongAnswers;\r\nconst PKMN_TYPES = [\r\n    'Fire',\r\n    'Water',\r\n    'Grass',\r\n    'Normal',\r\n    'Fighting',\r\n    'Bug',\r\n    'Flying',\r\n    'Electric',\r\n    'Poison',\r\n    'Rock',\r\n    'Ground',\r\n    'Psychic',\r\n    'Ghost',\r\n    'Ice',\r\n    'Dragon',\r\n    'Steel',\r\n    'Dark',\r\n    'Fairy',\r\n]\r\n\r\nconst fetchRandomPokemon = async (qSlide, rSlide) => {\r\n    // Fetch from the API a random Pokemon\r\n    const options = {\r\n        method: 'GET',\r\n        headers: {\r\n            'Accept': 'application/json',\r\n        }\r\n    }\r\n    let response = await fetch(url, options);\r\n    handleResponse(response, qSlide, rSlide);\r\n}\r\n\r\nconst handleResponse = async (response, qSlide, rSlide) => {\r\n    // Receive the JSON Object and keep\r\n    // name, image, weaknesses\r\n    let resObj = await response.json();\r\n\r\n    let { name, img, type, weaknesses } = resObj.response;\r\n    selectedPokemon = { name, img, type, weaknesses };\r\n    answer = getAnswer();\r\n    setUpWrongAnswers();\r\n\r\n    // Set up the slide's prompts and buttons\r\n    setUpQuestion(qSlide, rSlide);\r\n}\r\n\r\nconst setUpQuestion = (qSlide, rSlide) => {\r\n    const question = qSlide.querySelector('#question');\r\n    question.innerHTML = `What is ${selectedPokemon.name} weak against?`;\r\n    const picture = qSlide.querySelector('#picture');\r\n    picture.src = selectedPokemon.img;\r\n    const buttons = qSlide.querySelector('#interface').children;\r\n    let answerChoice = parseInt(Math.random() * buttons.length);\r\n    for (let button of buttons) {\r\n        if (answerChoice === 0) {\r\n            button.innerHTML = answer;\r\n            button.onclick = () => {\r\n                rSlide.querySelector('#result').innerHTML = 'Correct!';\r\n                rSlide.querySelector('#blurb').innerHTML = `${selectedPokemon.name} is weak against ${answer}`;\r\n                toggleSlides(qSlide, rSlide);\r\n            }\r\n        } else {\r\n            button.innerHTML = wrong.pop();\r\n            button.onclick = () => {\r\n                rSlide.querySelector('#result').innerHTML = 'Wrong...';\r\n                rSlide.querySelector('#blurb').innerHTML = `${selectedPokemon.name} is weak against ${answer}`;\r\n                toggleSlides(qSlide, rSlide);\r\n            }\r\n        }\r\n        answerChoice--;\r\n    }\r\n}\r\n\r\nconst getAnswer = () => {\r\n    // Returns a weakness from a Pokemon\r\n    let num = Math.random() * selectedPokemon.weaknesses.length;\r\n    num = parseInt(num, 10);\r\n    return selectedPokemon.weaknesses[num];\r\n}\r\n\r\nconst setUpWrongAnswers = () => {\r\n    // filter the weaknesses from types\r\n    possibleWrongAnswers = PKMN_TYPES.filter(\r\n        pkmnType => !selectedPokemon.weaknesses.find(\r\n            weakness => weakness === pkmnType));\r\n    getThreeWrongAnswers();\r\n}\r\n\r\nconst getWrongAnswer = () => {\r\n    // Returns a wrong answer from the possible wrong answers\r\n    let num = Math.random() * possibleWrongAnswers.length;\r\n    num = parseInt(num, 10);\r\n    return possibleWrongAnswers[num];\r\n}\r\n\r\nconst getThreeWrongAnswers = () => {\r\n    // Sets up 3 distinct wrong answers\r\n    wrong = []; // Clear the list\r\n    wrong.push(getWrongAnswer());\r\n    possibleWrongAnswers.filter(e => e !== wrong[0]);\r\n    wrong.push(getWrongAnswer());\r\n    possibleWrongAnswers.filter(e => e !== wrong[1]);\r\n    wrong.push(getWrongAnswer());\r\n}\r\n\r\nconst toggleSlides = (slideA, slideB) => {\r\n    slideA.classList.toggle('is-hidden');\r\n    slideB.classList.toggle('is-hidden');\r\n}\r\n\r\nmodule.exports = {\r\n    fetchRandomPokemon,\r\n    toggleSlides,\r\n    selectedPokemon,\r\n    answer,\r\n    wrong\r\n}\n\n//# sourceURL=webpack://igme430-project-1/./demo/quiz.js?");

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