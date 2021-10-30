import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./TodayWeather.css";

export default function TodayWeather() {
  let weatherData = {
    currentTemp: 18,
    humidity: 80,
    windSpeed: 5,
    weatherDescription: "Sunny",
  };
  return (
    <div className="row today-weather">
      <div className="row-1 left-side">
        <div className="col">
          <img
            src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
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
              {weatherData.currentTemp}
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
              {weatherData.weatherDescription}
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
  );
}
