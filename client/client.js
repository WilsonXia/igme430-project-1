const utils = require('./utility.js');

const init = () => {
  // Retrieve DOC elements
  const getPokemonForm = document.querySelector('#getPokemonForm');
  const addPokemonForm = document.querySelector('#addPokemonForm');
  // Setup elements
  addPokemonForm.querySelector('#typeA').innerHTML = utils.generateTypeSelector();
  addPokemonForm.querySelector('#typeB').innerHTML = utils.generateTypeSelector();

  // Setup events
  getPokemonForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Read Form data and then fetch it
    const fName = getPokemonForm.querySelector('#nameField').value;
    const fID = getPokemonForm.querySelector('#idField').value;
    const qParameters = `name=${fName}&id=${fID}`;
    const fMethod = getPokemonForm.querySelector('#methodSelect').value;
    utils.fetchData(`${getPokemonForm.action}?${qParameters}`, fMethod);
    return false;
  });
  addPokemonForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Read Form data and then fetch it
    const fName = addPokemonForm.querySelector('#nameField').value;
    const fTypeA = addPokemonForm.querySelector('#typeA').value;
    const fTypeB = addPokemonForm.querySelector('#typeB').value;
    const formData = `name=${fName}&typeA=${fTypeA}&typeB=${fTypeB}`;
    utils.fetchData(addPokemonForm.action, 'POST', formData);
    return false;
  });
};

window.onload = init;