const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const css = fs.readFileSync(`${__dirname}/../client/style.css`);
const js = fs.readFileSync(`${__dirname}/../hosted/home.js`);

const demo = fs.readFileSync(`${__dirname}/../demo/demo.html`);
const demoJs = fs.readFileSync(`${__dirname}/../hosted/demo.js`); 

const getIndex = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

const getDemo = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(demo);
  response.end();
}

const getCSS = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/css' });
  response.write(css);
  response.end();
};

const getJS = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/js' });
  response.write(js);
  response.end();
};

const getDemoJS = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/js' });
  response.write(demoJs);
  response.end();
};

module.exports = {
  getIndex,
  getDemo,
  getCSS,
  getJS,
  getDemoJS
};
