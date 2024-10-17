let url = "/getRandomPokemon";
let selectedPokemon;
let answer;
let wrong = [];
let possibleWrongAnswers;
const PKMN_TYPES = [
    'Fire',
    'Water',
    'Grass',
    'Normal',
    'Fighting',
    'Bug',
    'Flying',
    'Electric',
    'Poison',
    'Rock',
    'Ground',
    'Psychic',
    'Ghost',
    'Ice',
    'Dragon',
    'Steel',
    'Dark',
    'Fairy',
]

const fetchRandomPokemon = async (qSlide, rSlide) => {
    // Fetch from the API a random Pokemon
    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        }
    }
    let response = await fetch(url, options);
    handleResponse(response, qSlide, rSlide);
}

const handleResponse = async (response, qSlide, rSlide) => {
    // Receive the JSON Object and keep
    // name, image, weaknesses
    let resObj = await response.json();

    let { name, img, type, weaknesses } = resObj.response;
    selectedPokemon = { name, img, type, weaknesses };
    answer = getAnswer();
    setUpWrongAnswers();

    // Set up the slide's prompts and buttons
    setUpQuestion(qSlide, rSlide);
}

const setUpQuestion = (qSlide, rSlide) => {
    const question = qSlide.querySelector('#question');
    question.innerHTML = `What is <strong>${selectedPokemon.name}</strong> weak against?`;
    const picture = qSlide.querySelector('#picture');
    picture.src = selectedPokemon.img;
    const buttons = qSlide.querySelector('#interface').children;
    let answerChoice = parseInt(Math.random() * buttons.length);
    for (let button of buttons) {
        if (answerChoice === 0) {
            button.innerHTML = answer;
            button.onclick = () => {
                rSlide.querySelector('#result').innerHTML = 'Correct!';
                rSlide.querySelector('#blurb').innerHTML = `${selectedPokemon.name} is weak against ${answer}`;
                toggleSlides(qSlide, rSlide);
            }
        } else {
            button.innerHTML = wrong.pop();
            button.onclick = () => {
                rSlide.querySelector('#result').innerHTML = 'Wrong...';
                rSlide.querySelector('#blurb').innerHTML = `${selectedPokemon.name} is weak against ${answer}`;
                toggleSlides(qSlide, rSlide);
            }
        }
        answerChoice--;
    }
}

const getAnswer = () => {
    // Returns a weakness from a Pokemon
    let num = Math.random() * selectedPokemon.weaknesses.length;
    num = parseInt(num, 10);
    return selectedPokemon.weaknesses[num];
}

const setUpWrongAnswers = () => {
    // filter the weaknesses from types
    possibleWrongAnswers = PKMN_TYPES.filter(
        pkmnType => !selectedPokemon.weaknesses.find(
            weakness => weakness === pkmnType));
    getThreeWrongAnswers();
}

const getWrongAnswer = () => {
    // Returns a wrong answer from the possible wrong answers
    let num = Math.random() * possibleWrongAnswers.length;
    num = parseInt(num, 10);
    return possibleWrongAnswers[num];
}

const getThreeWrongAnswers = () => {
    // Sets up 3 distinct wrong answers
    wrong = []; // Clear the list
    wrong.push(getWrongAnswer());
    // Filter out the wrong answers
    possibleWrongAnswers = possibleWrongAnswers.filter(type => !wrong.includes(type));
    wrong.push(getWrongAnswer());
    possibleWrongAnswers = possibleWrongAnswers.filter(type => !wrong.includes(type));
    wrong.push(getWrongAnswer());
}

const toggleSlides = (slideA, slideB) => {
    slideA.classList.toggle('is-hidden');
    slideB.classList.toggle('is-hidden');
}

module.exports = {
    fetchRandomPokemon,
    toggleSlides,
    selectedPokemon,
    answer,
    wrong
}