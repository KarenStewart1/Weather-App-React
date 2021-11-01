import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./FiveDayForecast.css";
import axios from "axios";
import ShowForecast from "./ShowForecast";

export default function FiveDayForecast(props) {
  const [forecastData, setForecastData] = useState(null);
  const [ready, setReady] = useState(false);
  function handleForecastResponse(response) {
    setForecastData(response.data.daily);
    setReady(true);
    return null;
  }
  if (ready) {
    return (
      <div className="row five-day-forecast">
        {forecastData.map(function (dailyForecast, index) {
          if (index < 5) {
            return (
              <div className="col-2 daily-forecast" key={index}>
                <ShowForecast data={dailyForecast} />
              </div>
            );
          }
        })}
      </div>
    );
  } else {
    let lon = props.data.lon;
    let lat = props.data.lat;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&units=metric&appid=b278ff04a20f686b021e62fb800cae6e`;
    axios.get(url).then(handleForecastResponse);
    console.log(url);
    return null;
  }
}
