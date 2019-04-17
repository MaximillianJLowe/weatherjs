class Weather {
  constructor(city, country) {
    this.apiKey = '761d5e86e4cce5123938597e98c5b4b1';
    this.city = city
    this.country = country;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}&units=metric`);
    
    const responseData = await response.json();

    return responseData;
  }

  // Change Weather Location

  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}