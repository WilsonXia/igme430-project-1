let url = "127.0.0.01:3000/getRandomPokemon";
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

const fetchRandomPokemon = async () => {
    // Fetch from the API a random Pokemon
    const options = {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        }
      }
    let response = await fetch(url, options);
    handleResponse(response);
}

const handleResponse = async (response) => {
    // Receive the JSON Object and keep
    // name, image, weaknesses
    let resObj = await response.json();

    let { name, img, type, weaknesses } = resObj.response;
    selectedPokemon = { name, img, type, weaknesses };
    answer = getAnswer();
    setUpWrongAnswers();
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
    let num = Math.random() * wrongAnswers.length;
    num = parseInt(num, 10);
    return possibleWrongAnswers[num];
}

const getThreeWrongAnswers = () => {
    // Sets up 3 distinct wrong answers
    wrong = []; // Clear the list
    wrong.push(getWrongAnswer());
    possibleWrongAnswers.filter(e => e !== wrong[0]);
    wrong.push(getWrongAnswer());
    possibleWrongAnswers.filter(e => e !== wrong[1]);
    wrong.push(getWrongAnswer());
}

module.exports = {
    fetchRandomPokemon,
    selectedPokemon,
    answer,
    wrong
}