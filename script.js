searchButton.addEventListener("click", searchWeather);

function searchWeather() {
  loadingText.style.display = "block";
  weatherBox.style.display = "none";
  const cityName = searchCity.value;
  if (cityName.trim().length === 0) {
    return alert("Please enter a city Name");
  }
  const http = new XMLHttpRequest();
  const apiKey = "bfffe9a23746392d4c351ee746bf0b33";
  const url =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&units=metric&appid=" +
    apiKey;
  const method = "GET";

  http.open(method, url);
  http.onreadystatechange = function () {
    if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
      const data = JSON.parse(http.responseText);
      const weatherData = new Weather(
        cityName,
        data.weather[0].description.toUpperCase()
      );
      weatherData.showWeather(data.main.temp);
      updateWeather(weatherData);
    } else if (http.readyState === XMLHttpRequest.DONE) {
      alert("Oops, something went wrong :(");
    }
  };
  http.send();
}

function updateWeather(weatherData) {
  weatherCity.textContent = weatherData.cityName;
  weatherDescription.textContent = weatherData.description;
  weatherTemperature.textContent = weatherData._temperature;

  weatherBox.style.display = "block";
  loadingText.style.display = "none";
}
