const utils = require('./utility.js');

const setUpGetPokemon = (form) => {
    utils.setUpFormSubmit(form, () => {
        const fName = form.querySelector('#nameField').value;
        const fID = form.querySelector('#idField').value;
        const qParameters = `name=${fName}&id=${fID}`;
        const fMethod = form.querySelector('#methodSelect').value;
        utils.fetchData(`${form.action}?${qParameters}`, fMethod);
    });
}

const setUpGetPokemonType = (form) => {
    utils.setUpFormSubmit(form, () => {
        const fTypeA = form.querySelector('#typeA').value;
        const fTypeB = form.querySelector('#typeB').value;
        const qParameters = `typeA=${fTypeA}&typeB=${fTypeB}`;
        const fMethod = form.querySelector('#methodSelect').value;
        utils.fetchData(`${form.action}?${qParameters}`, fMethod);
    });
}

const setUpGetEvolvedPokemon = (form) => {
    utils.setUpFormSubmit(form, () => {
        const fName = form.querySelector('#nameField').value;
        const qParameters = `name=${fName}`;
        const fMethod = form.querySelector('#methodSelect').value;
        utils.fetchData(`${form.action}?${qParameters}`, fMethod);
    });
}

const setUpGetRandomPokemon = (form) => {
    utils.setUpFormSubmit(form, () => {
        const fMethod = form.querySelector('#methodSelect').value;
        utils.fetchData(form.action, fMethod);
    });
}

const setUpAddPokemon = (form) => {
    utils.setUpFormSubmit(form, () => {
        const fName = form.querySelector('#nameField').value;
        const fTypeA = form.querySelector('#typeA').value;
        const fTypeB = form.querySelector('#typeB').value;
        const formData = `name=${fName}&typeA=${fTypeA}&typeB=${fTypeB}`;
        utils.fetchData(form.action, 'POST', formData);
    });
}

const setUpAddEvolution = (form) => {
    utils.setUpFormSubmit(form, () => {
        const fPreEvolution = form.querySelector('#preEvolutionField').value;
        const fEvolution = form.querySelector('#evolutionField').value;
        const formData = `preEvolution=${fPreEvolution}&evolution=${fEvolution}`;
        utils.fetchData(form.action, 'POST', formData);
    });
}

module.exports = {
    setUpGetPokemon,
    setUpGetPokemonType,
    setUpGetEvolvedPokemon,
    setUpGetRandomPokemon,
    setUpAddPokemon,
    setUpAddEvolution
}