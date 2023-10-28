export const fetchCountries = (name) => {
  return fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
        return data;
      })
      .catch(error => {
          console.error('There has been a problem with your fetch operation:', error);
      });
};



