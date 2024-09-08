class Weather {
  constructor(cityName, description) {
    this.cityName = cityName;
    this.description = description;
    this._temperature = "";
  }

  showWeather(value) {
    this._temperature = value + "C";
  }
}
