const axios = require('axios');

function fetchCountries(name) {
  return axios.get('https://restcountries.com/#api-endpoints-v3-name', {
    params: {
      name,
      fields: 'name.official,capital,population,flags.svg,languages',
    },
  });
}

module.exports = fetchCountries;