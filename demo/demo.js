const quiz = require('./quiz.js');

const init = () => {
    // Start
    console.log('This is the Demo Page.');
    const questionSlide = document.getElementById('questionSlide');
    const resultsSlide = document.getElementById('resultsSlide');

    quiz.fetchRandomPokemon();
    console.log(`Answer: ${quiz.answer}`)
    console.log(quiz.wrong)
}

const toggleSlides = (slideA, slideB) => {
    slideA.toggle('is-hidden');
    slideB.toggle('is-hidden');
}

window.onload = init;