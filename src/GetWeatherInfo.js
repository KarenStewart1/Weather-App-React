import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import ShowWeather from "./ShowWeather";
import ReactAnimatedWeather from "react-animated-weather";

export default function GetWeatherInfo(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [headerData, setHeaderData] = useState({});
  const [city, SetCity] = useState(props.defaultCity);

  function searchCity() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b278ff04a20f686b021e62fb800cae6e`;
    axios.get(url).then(handleResponse);
    return "Loading...";
  }
  function handleResponse(response) {
    setHeaderData({
      cityName: response.data.name,
      date: new Date(response.data.dt * 1000),
      day: "Monday",
      time: "17:50",
    });
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function updateCity(event) {
    SetCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div>
        <ShowWeather weatherInfo={weatherData} headerInfo={headerData} />
        <form onSubmit={handleSubmit}>
          <div className="row justify-content-md-center search-buttons-bar">
            <div className="col col-lg-4 search-bar">
              <input
                type="search"
                className="enter-city-name form-control shadow-sm"
                placeholder="Enter city name"
                autoFocus="on"
                autoComplete="off"
                onChange={updateCity}
              />
            </div>
            <div className="col-md-auto search-input-button">
              <input
                type="submit"
                value="Search"
                className="search-button shadow-sm"
              />
            </div>
            <div className="col-md-auto">
              <button className="current-location-button shadow-sm">
                Current Location
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  } else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b278ff04a20f686b021e62fb800cae6e`;
    axios.get(url).then(handleResponse);
    return "Loading...";
  }
}
