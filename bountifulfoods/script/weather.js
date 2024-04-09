//Temperature
fetch('https://api.openweathermap.org/data/2.5/weather?lat=33.15&lon=-117.35&appid=13ab5a66f99f190dc9cdc5906e24c2bb')
  .then(response => {
    // Check if the response is successful
    // Parse the JSON data returned by the API
    return response.json();
  })
  .then(data => {
    // Work with the JSON data here
    console.log(data);
    const weather = document.getElementById("temp");
    weather.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="weatherpicture">
    <h3>Today's Temperature:</h3>
    <p>${Math.round((data.main.temp - 273.15) * 9/5 + 32)}°F 
    - ${data.weather[0].main}</p>`
  })

//Temperature for the next 3 days
  fetch('https://api.openweathermap.org/data/2.5/forecast?lat=33.15&lon=-117.35&appid=13ab5a66f99f190dc9cdc5906e24c2bb')
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
    <p>${Math.round((data.list[1].main.temp - 273.15) * 9/5 + 32)}°F - ${data.list[1].weather[0].main}</p>
    <p>${Math.round((data.list[2].main.temp - 273.15) * 9/5 + 32)}°F - ${data.list[2].weather[0].main}</p>
    <p>${Math.round((data.list[3].main.temp - 273.15) * 9/5 + 32)}°F - ${data.list[3].weather[0].main}</p>`
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('There was a problem with the fetch operation:', error);
  });