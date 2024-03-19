fetch('https://api.openweathermap.org/data/2.5/weather?lat=34.00&lon=-117.81&appid=13ab5a66f99f190dc9cdc5906e24c2bb')
  .then(response => {
    // Check if the response is successful
    // Parse the JSON data returned by the API
    return response.json();
  })
  .then(data => {
    // Work with the JSON data here
    console.log(data);
    const weather = document.getElementById("temp");
    weather.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
    <h3>Today's Temperature:</h3>
    <p>${Math.round((data.main.temp - 273.15) * 9/5 + 32)}°F 
    - ${data.weather[0].main}</p>`
  })
