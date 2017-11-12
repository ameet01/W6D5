import React from 'react';
//9b989fdfe5aac8208da67b8bc1a6044e

const toQueryString = (obj) => {
  let parts = [];
  for (let i in obj) {
      if (obj.hasOwnProperty(i)) {
          parts.push(`${encodeURIComponent(i)}=${encodeURIComponent(obj[i])}`);
      }
  }
  return parts.join('&');
};

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {weather: null};
    this.getWeatherData = this.getWeatherData.bind(this);
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.getWeatherData);
  }

  getWeatherData(location) {
    let lat = location.coords.latitude;
    let long = location.coords.longitude;
    let url = 'http://api.openweathermap.org/data/2.5/weather?';
    let params = {
      lat: location.coords.latitude,
      lon: location.coords.longitude
    };
    url += toQueryString(params);
    const apiKey = '9b989fdfe5aac8208da67b8bc1a6044e';
    // This is our API key; please use your own!
    url += `&APPID=${apiKey}`;

    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = () => {
      //ready state of DONE means this is complete
      if (xmlhttp.status === 200 && xmlhttp.readyState === XMLHttpRequest.DONE) {
        const data = JSON.parse(xmlhttp.responseText);
        console.log(data);
        this.setState({weather: data});
      }
    };

    xmlhttp.open('GET', url, true);
    xmlhttp.send();
  }

  render() {
    let content = <div></div>;

    if(this.state.weather) {
      content = <div>
                  <p>{this.state.weather.name}</p>
                  <p>{parseInt(this.state.weather.main.temp) * (9/5) - 459.67} degrees</p>
                </div>;
    } else {
      content = <div className='loading'>
        <p>Loading Weather...</p>
      </div>;
    }

    return (
      <div>
        <div className='weather'>
          <h1>Weather</h1>
          {content}
        </div>
      </div>
    );
  }
}

export default Weather;
