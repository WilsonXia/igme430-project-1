const pkmnData = require('./pokedex.json');

const handleResponse = (request, response, code, data) => {
  // Assume JSON
  const stringData = JSON.stringify(data);
  const options = {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(stringData, 'utf8'),
  };

  response.writeHead(code, options);
  if (request.method !== 'HEAD') {
    response.write(stringData);
  }
  response.end();
};

const retrievePKMN = (name) => {
  // Given the name is the exact name
  const entry = pkmnData.filter((pkmn) => pkmn.name === name);
  return entry ? entry[0] : entry;
};

const getPokemon = (request, response) => {
  // Gets Pokemon based on name or ID
  // Returns the first pokemon otherwise
  let data;
  // Build Data based on query parameters
  const qName = request.queryParams.name;
  const qID = request.queryParams.id;
  if (qName) {
    // Find the pokemon that has the inputted name
    data = pkmnData.filter((entry) => entry.name.includes(qName));
  } else if (qID) {
    // Find the pokemon that has the ID
    data = pkmnData.filter((entry) => entry.id === qID);
  } else {
    // Load id 1
    data = pkmnData.filter((entry) => entry.id === 1);
  }
  data = { response: data };
  // Handle Reponse
  handleResponse(request, response, 200, data);
};

const getPokemonType = (request, response) => {
  // Gets Pokemon within the types
  let data;
  const checkType = (entry, qType) => {
    if (entry.type[0] !== qType) {
      if (!entry.type[1]) {
        return false;
      }
      return entry.type[1] === qType;
    }
    return true;
  };
  // Build Data based on query Parameters
  const qTypeA = request.queryParams.typeA;
  const qTypeB = request.queryParams.typeB;
  if (!qTypeA && !qTypeB) {
    // If no params given, default to normal type
    data = pkmnData.filter((entry) => checkType(entry, 'Normal'));
  } else if (qTypeA) {
    // Apply first filter
    data = pkmnData.filter((entry) => checkType(entry, qTypeA));
    // Apply second filter if applicable
    if (qTypeB) {
      data = data.filter((entry) => checkType(entry, qTypeB));
    }
  } else {
    // Apply just the second filter
    data = pkmnData.filter((entry) => checkType(entry, qTypeB));
  }
  data = { response: data };
  handleResponse(request, response, 200, data);
};

const getEvolvedPokemon = (request, response) => {
  // Gets the data for the next evolution of the pokemon requested
  let data = [];
  let rootData;
  // Build Data based on params
  const qName = request.queryParams.name;
  if (qName) {
    // First get the pre-evolution pokemon (the roots)
    rootData = pkmnData.filter((entry) => entry.name.includes(qName))
      // Then get the names of their next evolution if they exist
      .map((entry) => {
        if (entry.next_evolution) {
          // Check if evolution exists
          return entry.next_evolution[0].name;
        }
        return null;
      });
    // Using these names, get the exact pokemon from pkmnData
    data = rootData.map((nextEvo) => pkmnData.filter((entry) => entry.name === nextEvo)[0])
      .filter((entry) => entry);
  }
  data = { response: data };
  handleResponse(request, response, 200, data);
};

const getRandomPokemon = (request, response) => {
  // Gets a random pokemon from the dataset, followed by amount
  const randomIndex = parseInt(Math.random() * pkmnData.length, 10);
  console.log(`Index chosen: ${randomIndex}`);
  let data = pkmnData[randomIndex];
  data = { response: data };
  handleResponse(request, response, 200, data);
};

const notFound = (request, response) => {
  const data = {
    message: 'This page was not found',
    id: 'notFound',
  };
  handleResponse(request, response, 404, data);
};

const addPokemon = (request, response) => {
  // POST a pokemon given a name and typing
  // Also tag it as a custom Pokemon
  const data = { message: 'A Name and Type are required to create a Pokemon' };
  // Destructuring
  const { name, typeA, typeB } = request.body;
  if (!name || !typeA) {
    // Throw error
    data.id = 'missingFields';
    handleResponse(request, response, 400, data);
  } else {
    let code = 204;
    if (!retrievePKMN(name)) {
      // Create the PKMN
      code = 201;
      pkmnData.push({
        name, id: pkmnData.length + 1, num: `${pkmnData.length + 1}`, isCustom: true,
      });
      data.message = `${name} created successfully!`;
    }
    // Update typing
    retrievePKMN(name).type = [typeA];
    if (typeB) {
      retrievePKMN(name).type.push(typeB);
    }
    if (code === 201) {
      handleResponse(request, response, code, data);
    } else {
      handleResponse(request, response, code, {});
    }
  }
};

const addEvolution = (request, response) => {
  // POST update an evolution list given an EXISTING Pokemon
  const data = { message: 'An Pre-Evolution and a Evolution are required.' };
  // Destructuring
  const { preEvolution, evolution } = request.body;
  if (!preEvolution || !evolution) {
    // Throw error
    data.id = 'missingParams';
    handleResponse(request, response, 400, data);
  } else {
    let code = 204;
    const preEvoData = retrievePKMN(preEvolution);
    const evoData = retrievePKMN(evolution);
    if (!preEvoData) {
      // Throw error
      code = 400;
      data.id = 'preEvoNotFound';
      data.message = 'The inputted Pre-evolution must already exist in the database.';
    } else if (!evoData) {
      // Throw another error
      code = 400;
      data.id = 'evoNotFound';
      data.message = 'The inputted Evolution must already exist in the database.';
    } else {
      // Update the next Evolution list depending on whether it exists or not
      const nextEvolution = { num: evoData.num, name: `${evoData.name}` };
      if(preEvoData.next_evolution){
        preEvoData.next_evolution.push(nextEvolution);
      } else {
        preEvoData.next_evolution = [nextEvolution];
      }
    }
    if (code === 400) {
      handleResponse(request, response, code, data);
    } else {
      handleResponse(request, response, code, {});
    }
  }
};

module.exports = {
  getPokemon,
  getPokemonType,
  getEvolvedPokemon,
  getRandomPokemon,
  addPokemon,
  addEvolution,
  notFound,
};
