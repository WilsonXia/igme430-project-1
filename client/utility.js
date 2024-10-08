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

const generateTypeSelector = () => {
    let typeSelector = '';
    for (const type of PKMN_TYPES) {
        typeSelector += `<option value='${type}'>${type}</option>`;
    }
    return typeSelector;
}

const handleResponse = async (response, method) => {
    const content = document.querySelector('#content');
    switch(response.status){
      case 200:
            content.innerHTML = '<b>Success</b>';
            break;
          case 201:
            content.innerHTML = '<b>New User Created</b>';
            break;
          case 204:
            content.innerHTML = '<b>User Info Updated</b>';
            break;
          case 400:
            content.innerHTML = '<b>Invalid Form Submission</b>';
            break;
          case 404:
            content.innerHTML = '<b>Not Found</b>';
            break;
          default:
            content.innerHTML = '<b>Response Code Not Implemented</b>';
            break;
    }
    content.innerHTML = `<h2>${content.innerHTML}</h2>`;
  
    // Load in JSON
    if (method.toUpperCase() !== 'HEAD') {
      let resObj = await response.json();
      console.log(resObj);
      if (resObj.response) {
        content.innerHTML += `<p>${JSON.stringify(resObj)}</p>`;
      } else if (resObj.message) {
        content.innerHTML += `<p>${resObj.message}</p>`;
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

module.exports = {
    generateTypeSelector,
    fetchData
}