import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./FiveDayForecast.css";

export default function FiveDayForecast() {
  let forecastDay = "Monday";
  let description = "description";
  let highTemp = Math.round(12);
  let lowTemp = Math.round(2);
  let icon = 

  return (
    <div className="row five-day-forecast">
      <div className="col-2 daily-forecast">
        <span className="day">{forecastDay}]</span>
        <div className="col forecast-description">{description}</div>
        <div className="col">
          <img
            src="images/${forecastDay.weather[0].icon}.png"
                        width="60"
            height="70"
            className="forecast-icons"
          />
          <div className="forecast-temperature">
            {highTemp}° <span className="slash">/</span>
            {lowTemp}°
          </div>
        </div>
      </div>
    </div>
  );
}
