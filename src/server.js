const http = require('http');
const query = require('querystring');
const httpResponses = require('./httpResponses.js');
const jsonResponses = require('./jsonResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const urlStruct = {
  '/': httpResponses.getIndex,
  '/style.css': httpResponses.getCSS,
  '/client.js': httpResponses.getJS,
  '/getPokemon': jsonResponses.getPokemon,
  '/getPokemonType': jsonResponses.getPokemonType,
  '/getEvolvedPokemon': jsonResponses.getEvolvedPokemon,
  '/getRandomPokemon': jsonResponses.getRandomPokemon,
  '/addPokemon': jsonResponses.addPokemon,
  '/addEvolution': jsonResponses.addEvolution,
  notFound: jsonResponses.notFound,
  index: httpResponses.getIndex,
};

const parseBody = (request, response, handler) => {
  const body = [];
  request.on('error', (err) => {
    console.dir(err);
    response.statusCode = 400;
    response.end();
  });
  request.on('data', (chunk) => {
    body.push(chunk);
  });
  request.on('end', () => {
    const bodyString = Buffer.concat(body).toString();
    request.body = query.parse(bodyString);
    handler(request, response);
  });
};

const onRequest = (request, response) => {
  // Parse URL
  const protocol = request.connection.encrypted ? 'https' : 'http';
  const parsedURL = new URL(request.url, `${protocol}://${request.headers.host}`);
  // Query Params
  request.queryParams = Object.fromEntries(parsedURL.searchParams);
  if (urlStruct[parsedURL.pathname]) {
    // Check if POST
    if (request.method !== 'POST') {
      urlStruct[parsedURL.pathname](request, response);
    } else {
      parseBody(request, response, urlStruct[parsedURL.pathname]);
    }
  } else {
    // default line
    urlStruct.notFound(request, response);
  }
};

http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on: 127.0.0.01:${port}`);
});
