const PKMN_TYPES = [
  '',
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

const setUpTypeSelectors = (form) => {
  form.querySelector('#typeA').innerHTML = generateTypeSelector();
  form.querySelector('#typeB').innerHTML = generateTypeSelector();
}

const generateTypeSelector = () => {
  let typeSelector = '';
  for (const type of PKMN_TYPES) {
    typeSelector += `<option value='${type}'>${type}</option>`;
  }
  return typeSelector;
}

const handleResponse = async (response, method) => {
  const content = document.querySelector('#content');
  switch (response.status) {
    case 200:
      content.innerHTML = 'Success';
      break;
    case 201:
      content.innerHTML = 'New User Created';
      break;
    case 204:
      content.innerHTML = 'User Info Updated';
      break;
    case 400:
      content.innerHTML = 'Invalid Form Submission';
      break;
    case 404:
      content.innerHTML = 'Not Found';
      break;
    default:
      content.innerHTML = 'Response Code Not Implemented';
      break;
  }
  content.innerHTML = `<h2 class="subtitle">${content.innerHTML}</h2>`;

  // Load in JSON
  if (method.toUpperCase() !== 'HEAD' && response.status !== 204 ) {
    let resObj = await response.json();
    console.log(resObj);
    if (resObj.response) {
      content.innerHTML += `<p class="box wrap">${JSON.stringify(resObj)}</p>`;
    } else if (resObj.message) {
      content.innerHTML += `<p class="box wrap">${resObj.message}</p>`;
    }
  }
}

const fetchData = async (url, method, data) => {
  const options = {
    method: method,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
    },
    body: data,
  }
  let response = await fetch(url, options);
  handleResponse(response, method);
}

const setUpFormSubmit = (form, constructData) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    constructData(form);
    return false;
  })
}

module.exports = {
  setUpTypeSelectors,
  setUpFormSubmit,
  fetchData
}