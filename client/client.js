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

const init = () => {
  // load
  console.log('Loaded client');
  // Retrieve DOC elements
  const getPokemonForm = document.querySelector('#getPokemonForm');
  const addPokemonForm = document.querySelector('#addPokemonForm');

  // Setup events
  getPokemonForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Read Form data and then fetch it
    const fName = getPokemonForm.querySelector('#nameField').value;
    const fID = getPokemonForm.querySelector('#idField').value;
    const qParameters = `name=${fName}&id=${fID}`;
    const fMethod = getPokemonForm.querySelector('#methodSelect').value;
    fetchData(`${getPokemonForm.action}?${qParameters}`, fMethod);
    return false;
  });
  addPokemonForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Read Form data and then fetch it
    const fName = addPokemonForm.querySelector('#nameField').value;
    const fID = addPokemonForm.querySelector('#idField').value;
    const fMethod = addPokemonForm.querySelector('#methodSelector').value;
    const formData = `name=${fName}&id=${fID}`;
    fetchData(addPokemonForm.action, fMethod, formData);
    return false;
  });
};

window.onload = init;