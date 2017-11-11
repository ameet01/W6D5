import React from 'react';
//9b989fdfe5aac8208da67b8bc1a6044e

class Weather extends React.Component {
  constructor() {
    super();
    this.latitude = null;
    this.longitude = null;
    this.state = {city: "", temperature: 0};
    this.getWeatherData = this.getWeatherData.bind(this);
    this.getInfo = this.getInfo.bind(this);
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition((pos) => {
      this.latitude = pos.coords.latitude;
      this.longitude = pos.coords.longitude;
      this.setState({city, temperature}, this.getInfo);
    });
  }

  getInfo() {
    let weatherData = this.getWeatherData();
    this.city = weatherData.name;
    this.temperature = parseInt(weatherData.temp) * (9/5) - 459.67;
  }
  
  getWeatherData() {
    const request = new XMLHttpRequest();
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${this.latitude}&lon=${this.longitude}&APPID=9b989fdfe5aac8208da67b8bc1a6044e`;
    request.open('GET', url, true);
    request.onload = (e) => {
      if (request.status >= 200 && request.status < 400) {
        console.log(request.responseText);
      } else {
        console.error(request.statusText);
      }
    };
    request.send();
  }

  render() {
    return (
      <div>
        <p>{this.state.city}</p>
        <p>{this.state.temperature}</p>
      </div>
    );
  }
}

export default Weather;
