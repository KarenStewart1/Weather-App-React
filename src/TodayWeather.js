import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./TodayWeather.css";
import axios from "axios";

export default function TodayWeather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [headerData, setHeaderData] = useState({});

  function handleResponse(response) {
    setHeaderData({
      cityName: `${response.data.name}`,
      date: "17 Nov 1989",
      day: "Monday",
      time: "17:50",
    });
    setWeatherData({
      temperature: `${Math.round(response.data.main.temp)}`,
      humidity: `${response.data.main.humidity}`,
      windSpeed: `${response.data.wind.speed}`,
      description: `${response.data.weather[0].description}`,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });

    setReady(true);
  }

  if (ready) {
    return (
      <div className="card-body">
        <h1>
          <div className="row">
            <div className="col city-name-element">{headerData.cityName}</div>
            <div className="col calender-day">
              <span>{headerData.date}</span>
              <div className="col day-and-time">
                {headerData.day}
                {headerData.time}
              </div>
            </div>
          </div>
        </h1>
        <div className="row today-weather">
          <div className="row-1 left-side">
            <div className="col">
              <img
                src={weatherData.icon}
                alt="weather-icon"
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
    let city = "London";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b278ff04a20f686b021e62fb800cae6e`;
    axios.get(url).then(handleResponse);
    return "hi";
  }
}
