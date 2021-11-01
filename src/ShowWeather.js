import React from "react";
import FormattedDate from "./FormattedDate";
import "bootstrap/dist/css/bootstrap.css";
import WeatherIcon from "./WeatherIcon";
import Conversion from "./Conversion";
import "./ShowWeather.css";

export default function ShowWeather(props) {
  return (
    <div className="weather-container">
      <h1>
        <div className="row">
          <div className="col city-name-element">
            {props.weatherInfo.cityName}
          </div>
          <FormattedDate />
        </div>
      </h1>
      <div className="row today-weather">
        <div className="col left-side current-weather-icon">
          <WeatherIcon icon={props.weatherInfo.icon} size={160} />
        </div>

        <div className="col right-side">
          <Conversion celsiusTemp={props.weatherInfo.temperature} />{" "}
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
  );
}
