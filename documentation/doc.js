const hamburger = require(`${__dirname}/../client/hamburger.js`);

const init = () => {
    hamburger.initHamburger();
}

window.onload = init;