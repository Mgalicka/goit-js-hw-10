module.exports = function fetchCountries(name) {
  return fetchCountries(name)
    .then(countries => {
      
      console.log('Kraje:', countries);
   
      return countries;
    })
    .catch(error => {
     
      console.error('Błąd:', error);
      throw error;
    });
};