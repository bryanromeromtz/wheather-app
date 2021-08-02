import React, { Component } from "react";
import WeatherInfo from "./components/WeatherInfo";
import WeatherForm from "./components/WeatherForm";

import { WEATHER_API_KEY } from './keys';

class App extends Component {

  state = {
    temperature: "",
    description: "",
    humidity: "",
    wind_speed: "",
    city: "",
    country: "",
    error: null
  }

  getWeather = async e => {
    e.preventDefault()
    const { city, country } = e.target.elements;
    const cityValue = city.value;
    const countryValue = country.value;

    if (cityValue && countryValue) {
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_API_KEY}&units=metric`;
      const response = await fetch(API_URL);
      const data = await response.json();
      //console.log(data)

      this.setState({
        temperature: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        wind_speed: data.wind.speed,
        city: data.name,
        country: data.sys.country,
        error: null
      })
    } else {
      this.setState({
        error: "Please enter a correct city and country"
      })
    }
  }
  render() {
    return (
      <div>

        <div className="container p-4">
          <div className="container-cloud-sun">
            <div className="container-cloud">
              <div class="weather-icon cloud"></div>
            </div>
            <div className="container-text">
              <h1 class="rainbow-text">Weather by crypto</h1>
            </div>
            <div className="container-sun">
              <div class="weather-icon sun"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mx-auto">
              <WeatherForm
                getWeather={this.getWeather}
              />
              <WeatherInfo {...this.state} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
