const utils = require('./utility.js');
const formSetup = require('./formSetup.js');
const hamburger = require('./hamburger.js');

const init = () => {
  // Retrieve DOC elements
  const getPokemonForm = document.querySelector('#getPokemonForm');
  const getPokemonTypeForm = document.querySelector('#getPokemonTypeForm');
  const getEvolvedPokemonForm = document.querySelector('#getEvolvedPokemonForm');
  const getRandomPokemonForm = document.querySelector('#getRandomPokemonForm');
  const addPokemonForm = document.querySelector('#addPokemonForm');
  const addEvolutionForm = document.querySelector('#addEvolutionForm');
  // Setup elements
  utils.setUpTypeSelectors(addPokemonForm);
  utils.setUpTypeSelectors(getPokemonTypeForm);
  // Setup Sumission events
  formSetup.setUpGetPokemon(getPokemonForm);
  formSetup.setUpGetPokemonType(getPokemonTypeForm);
  formSetup.setUpGetEvolvedPokemon(getEvolvedPokemonForm);
  formSetup.setUpGetRandomPokemon(getRandomPokemonForm);
  formSetup.setUpAddPokemon(addPokemonForm);
  formSetup.setUpAddEvolution(addEvolutionForm);
  // Setup hamburger
  hamburger.initHamburger();
};

window.onload = init;