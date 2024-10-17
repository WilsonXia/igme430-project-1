const quiz = require('./quiz.js');
const hamburger = require(`${__dirname}/../client/hamburger.js`);

let questionSlide, resultsSlide, startSlide;

const init = () => {
    questionSlide = document.getElementById('questionSlide');
    resultsSlide = document.getElementById('resultsSlide');
    startSlide = document.getElementById('startSlide');
    startBtn = document.getElementById('startBtn');
    nextBtn = document.getElementById('nextQuestionBtn');

    // Setup events
    startBtn.addEventListener('click', ()=>{
        quiz.fetchRandomPokemon(questionSlide, resultsSlide);
        quiz.toggleSlides(startSlide, questionSlide);
    });
    
    nextBtn.addEventListener('click', ()=>{
        quiz.fetchRandomPokemon(questionSlide, resultsSlide);
        quiz.toggleSlides(resultsSlide, questionSlide);
    });

    // Setup Hamburger
    hamburger.initHamburger();
}

window.onload = init;