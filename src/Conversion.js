import React, { useState } from "react";
import "./Conversion.css";

export default function Conversion(props) {
  let [unit, setUnit] = useState("celsius");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  if (unit === "celsius") {
    return (
      <h2>
        <span className="current-temperature">{props.celsiusTemp}</span>
        <span className="cf-symbol">
          <a href="/" className="active" onClick={showCelsius}>
            °C{" "}
          </a>
          |
          <a href="/" className="inactive" onClick={showFahrenheit}>
            °F
          </a>{" "}
        </span>
      </h2>
    );
  } else {
    let fahrenheitTemp = Math.round((props.celsiusTemp * 9) / 5 + 32);
    return (
      <h2>
        <span className="current-temperature">{fahrenheitTemp}</span>
        <span className="cf-symbol">
          <a href="/" className="inactive" onClick={showCelsius}>
            °C{" "}
          </a>
          |
          <a href="/" className="active" onClick={showFahrenheit}>
            °F
          </a>{" "}
        </span>
      </h2>
    );
  }
}
