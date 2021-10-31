import React, { useState } from "react";
import "./Conversion.css";

export default function Conversion(props) {
  let [unitCelsius, setUnitCelsius] = useState("active");
  let [unitFahrenheit, setUnitFahrenheit] = useState("inactive");
  let [currentTemperature, setCurrentTemperature] = useState(props.celsiusTemp);

  function showCelsius(event) {
    event.preventDefault();
    setUnitCelsius("active");
    setUnitFahrenheit("inactive");
    setCurrentTemperature(props.celsiusTemp);
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnitCelsius("inactive");
    setUnitFahrenheit("active");
    setCurrentTemperature(Math.round((props.celsiusTemp * 9) / 5 + 32));
  }
  return (
    <h2>
      <span className="current-temperature">{currentTemperature}</span>
      <span className="cf-symbol">
        <a href="/" className={unitCelsius} onClick={showCelsius}>
          °C{" "}
        </a>
        |
        <a href="/" className={unitFahrenheit} onClick={showFahrenheit}>
          °F
        </a>{" "}
      </span>
    </h2>
  );
}
