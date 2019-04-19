class UI {
  constructor() {
    this.location = document.querySelector('#w-location');
    this.desc = document.querySelector('#w-desc');
    this.string = document.querySelector('#w-string');
    this.details = document.querySelector('#w-details');
    this.icon= document.querySelector('#w-icon');
    this.humidity = document.querySelector('#w-humidity');
    this.pressure = document.querySelector('#w-pressure');
    this.wind = document.querySelector('#w-wind');
  }

  // Values derived from openweathermap API

  paint(weather) {
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].main;
    this.string.textContent = weather.main.temp;
    this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
    this.wind.textContent = `Wind Speed: ${weather.wind.speed} mph`;
    this.pressure.textContent = `Barometric Pressure: ${weather.main.pressure} mb`;
    
  }
}