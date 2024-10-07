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
/***/ (() => {

eval("const handleResponse = async (response, method) => {\n  const content = document.querySelector('#content');\n  switch(response.status){\n    case 200:\n          content.innerHTML = '<b>Success</b>';\n          break;\n        case 201:\n          content.innerHTML = '<b>New User Created</b>';\n          break;\n        case 204:\n          content.innerHTML = '<b>User Info Updated</b>';\n          break;\n        case 400:\n          content.innerHTML = '<b>Invalid Form Submission</b>';\n          break;\n        case 404:\n          content.innerHTML = '<b>Not Found</b>';\n          break;\n        default:\n          content.innerHTML = '<b>Response Code Not Implemented</b>';\n          break;\n  }\n\n  // Load in JSON\n  if (method.toUpperCase() !== 'HEAD') {\n    let resObj = await response.json();\n    console.log(resObj);\n    if (resObj.response) {\n      content.innerHTML += `<p>${JSON.stringify(resObj)}</p>`;\n    } else if (resObj.message) {\n      content.innerHTML += `<p>${resObj.message}</p>`;\n    }\n  }\n}\n\nconst fetchData = async (url, method, data) => {\n  const options = {\n    method: method,\n    headers: {\n      'Content-Type': 'application/x-www-form-urlencoded',\n      'Accept': 'application/json',\n    },\n    body: data,\n  }\n  let response = await fetch(url, options);\n  handleResponse(response, method);\n}\n\nconst init = () => {\n  // load\n  console.log('Loaded client');\n  // Retrieve DOC elements\n  const getPokemonForm = document.querySelector('#getPokemonForm');\n  const addPokemonForm = document.querySelector('#addPokemonForm');\n\n  // Setup events\n  getPokemonForm.addEventListener('submit', (e) => {\n    e.preventDefault();\n    // Read Form data and then fetch it\n    const fName = getPokemonForm.querySelector('#nameField').value;\n    const fID = getPokemonForm.querySelector('#idField').value;\n    const qParameters = `name=${fName}&id=${fID}`;\n    const fMethod = getPokemonForm.querySelector('#methodSelect').value;\n    fetchData(`${getPokemonForm.action}?${qParameters}`, fMethod);\n    return false;\n  });\n  addPokemonForm.addEventListener('submit', (e) => {\n    e.preventDefault();\n    // Read Form data and then fetch it\n    const fName = addPokemonForm.querySelector('#nameField').value;\n    const fID = addPokemonForm.querySelector('#idField').value;\n    const fMethod = addPokemonForm.querySelector('#methodSelector').value;\n    const formData = `name=${fName}&id=${fID}`;\n    fetchData(addPokemonForm.action, fMethod, formData);\n    return false;\n  });\n};\n\nwindow.onload = init;\n\n//# sourceURL=webpack://igme430-project-1/./client/client.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./client/client.js"]();
/******/ 	
/******/ })()
;