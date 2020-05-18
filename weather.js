class Weather {
  constructor(city, country) {
    this.apiKey = 'a4b3864907be7b678cf56c57b5dfd8';
    this.city = city;
    this.state = country;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}&units=metric`)

    const responseData = await response.json();
    //console.log(responseData);

    return responseData;
  }

  // Change weather location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}

