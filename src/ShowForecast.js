import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import WeatherIcon from "./WeatherIcon";
import "./ShowForecast.css";

export default function ShowForecast(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dateNumber = new Date(props.data[0].dt * 1000);
  let date = days[dateNumber.getDay()];
  let description = props.data[0].weather[0].description;
  let maxTemp = Math.round(props.data[0].temp.max);
  let minTemp = Math.round(props.data[0].temp.min);
  return (
    <div className="row five-day-forecast">
      <div className="col-2 daily-forecast">
        <span className="day">{date}</span>
        <div className="forecast-description">{description}</div>
        <WeatherIcon icon="01d" size={80} />
        <div className="forecast-temperature">
          {maxTemp}°<span className="slash"> / </span>
          {minTemp}°
        </div>
      </div>
    </div>
  );
}
