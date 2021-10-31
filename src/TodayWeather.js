import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import "bootstrap/dist/css/bootstrap.css";
import "./TodayWeather.css";
import axios from "axios";

export default function TodayWeather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [headerData, setHeaderData] = useState({});

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

  if (weatherData.ready) {
    return (
      <div className="card-body">
        <h1>
          <div className="row">
            <div className="col city-name-element">{headerData.cityName}</div>
            <FormattedDate />
          </div>
        </h1>
        <div className="row today-weather">
          <div className="row-1 left-side">
            <div className="col">
              <img
                src={weatherData.icon}
                alt={weatherData.description}
                className="weather-icon"
                width="170"
                height="120"
              />
            </div>
          </div>
          <div className="row-1 right-side">
            <div className="col">
              <h2>
                <span className="current-temperature">
                  {weatherData.temperature}
                </span>
                <span className="cf-symbol">
                  <a href="/" className="active">
                    °C{" "}
                  </a>
                  |
                  <a href="/" className="inactive">
                    °F
                  </a>
                </span>
              </h2>
              <ul>
                <li className="col today-weather-description">
                  {weatherData.description}
                </li>
                <li>
                  Humidity: <span>{weatherData.humidity}</span>%
                </li>
                <li>
                  Wind: <span>{weatherData.windSpeed}</span>
                  <span> m/s</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=metric&appid=b278ff04a20f686b021e62fb800cae6e`;
    axios.get(url).then(handleResponse);
    return "Loading...";
  }
}
