const quiz = require('./quiz.js');

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
}

window.onload = init;