const axios = require('axios');

function fetchCountries(name) {
  return axios.get(`https://restcountries.com/v3.1/name/${name}`, {
    params: {
      name,
      fields: 'name.official,capital,population,flags.svg,languages',
    },
  });
}

module.exports = fetchCountries;