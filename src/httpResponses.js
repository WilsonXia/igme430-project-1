const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const css = fs.readFileSync(`${__dirname}/../client/style.css`);
const js = fs.readFileSync(`${__dirname}/../hosted/home.js`);

const demo = fs.readFileSync(`${__dirname}/../demo/demo.html`);
const demoJs = fs.readFileSync(`${__dirname}/../hosted/demo.js`);
const icon = fs.readFileSync(`${__dirname}/../assets/images/pkdex.png`);

const documentation = fs.readFileSync(`${__dirname}/../documentation/documentation.html`);
const docJS = fs.readFileSync(`${__dirname}/../hosted/doc.js`);

const getIndex = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

const getDemo = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(demo);
  response.end();
};

const getDocumentation = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(documentation);
  response.end();
};

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

const getDocJS = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/js' });
  response.write(docJS);
  response.end();
};

const getIcon = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(icon);
  response.end();
};

module.exports = {
  getIndex,
  getDemo,
  getDocumentation,
  getCSS,
  getJS,
  getDemoJS,
  getDocJS,
  getIcon,
};
