import React from "react";
import FormattedDate from "./FormattedDate";
import "bootstrap/dist/css/bootstrap.css";
import WeatherIcon from "./WeatherIcon";
import "./ShowWeather.css";

export default function ShowWeather(props) {
  return (
    <div className="weather-container">
      <h1>
        <div className="row">
          <div className="col city-name-element">
            {props.headerInfo.cityName}
          </div>
          <FormattedDate />
        </div>
      </h1>
      <div className="row today-weather">
        <div className="row-1 left-side">
          <div className="col">
            <WeatherIcon />
            <img
              src={props.weatherInfo.icon}
              alt={props.weatherInfo.description}
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
                {props.weatherInfo.temperature}
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
                {props.weatherInfo.description}
              </li>
              <li>
                Humidity: <span>{props.weatherInfo.humidity}</span>%
              </li>
              <li>
                Wind: <span>{props.weatherInfo.windSpeed}</span>
                <span> m/s</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
