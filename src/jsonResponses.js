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
    .filter(entry => entry);
  }
  data = { response: data };
  handleResponse(request, response, 200, data);
};
const getRandomPokemon = (request, response) => {
  // Gets a random pokemon from the dataset, followed by amount
  const randomIndex = Math.random * pkmnData.length;
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

// const addUser = (request, response) => {
//   const data = {
//     message: 'Name and Age are both required.',
//   };
//   // Destructuring
//   const { name, age } = request.body;
//   // Check if they exist
//   if (!name || !age) {
//     // If they dont, throw the error
//     data.id = 'missingFields';
//     handleResponse(request, response, 400, data);
//   } else {
//     // They both exist, so check if updating or adding
//     let code = 204;
//     if (!users[name]) {
//       // Create the user and add them to the list
//       users[name] = { name };
//       data.message = 'Created Successfully';
//       code = 201;
//     }
//     // Update the age
//     users[name].age = age;
//     if (code === 201) {
//       handleResponse(request, response, code, data);
//     } else {
//       handleResponse(request, response, code, {});
//     }
//   }
// };

module.exports = {
  getPokemon,
  getPokemonType,
  getEvolvedPokemon,
  getRandomPokemon,
  notFound,
  //   addUser,
};
