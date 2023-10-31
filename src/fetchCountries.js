function fetchCountries(name) {
  const url = `https://restcountries.com/v3.1/name/${name}`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Country not found');
      }
      return response.json();
    })
    .then(countries => { 
    })
    .catch(error => {
      
      console.error('Błąd:', error);
      throw error; 
    });
}

module.exports = fetchCountries;