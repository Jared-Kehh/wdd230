fetch('http://api.openweathermap.org/geo/1.0/direct?q=Diamond-Bar,06,+1&appid=13ab5a66f99f190dc9cdc5906e24c2bb')
  .then(response => {
    // Check if the response is successful
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the JSON data returned by the API
    return response.json();
  })
  .then(data => {
    // Work with the JSON data here
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('There was a problem with the fetch operation:', error);
  });

  const weather = document.querySelector(".weather");

  const weatherdiv = document.createElement('div');
  weatherdiv.innerHTML = `
  <p>${weather.temperature}</p>
  `
