fetch('https://api.openweathermap.org/data/2.5/forecast?lat=34.00&lon=-117.81&appid=13ab5a66f99f190dc9cdc5906e24c2bb')
  .then(response => {
    // Check if the response is successful
    // Parse the JSON data returned by the API
    return response.json();
  })
  .then(data => {
    // Work with the JSON data here
    console.log(data);
    const weather = document.getElementById("descrip");
    weather.innerHTML = `
    <h3>Next Three Days:</h3>
    <p>Sunday: ${Math.round((data.list[1].main.temp - 273.15) * 9/5 + 32)}°F - ${data.list[1].weather[0].main}</p>
    <p>Monday: ${Math.round((data.list[2].main.temp - 273.15) * 9/5 + 32)}°F - ${data.list[2].weather[0].main}</p>
    <p>Tuesday: ${Math.round((data.list[3].main.temp - 273.15) * 9/5 + 32)}°F - ${data.list[3].weather[0].main}</p>`
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('There was a problem with the fetch operation:', error);
  });