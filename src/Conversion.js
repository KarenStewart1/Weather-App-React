import React, { useState } from "react";
import "./Conversion.css";

export default function Conversion() {
  let [unitCelsius, setUnitCelsius] = useState("active");
  let [unitFahrenheit, setUnitFahrenheit] = useState("inactive");

  function showCelsius(event) {
    event.preventDefault();
    setUnitCelsius("active");
    setUnitFahrenheit("inactive");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnitCelsius("inactive");
    setUnitFahrenheit("active");
  }
  return (
    <span className="cf-symbol">
      <a href="/" className={unitCelsius} onClick={showCelsius}>
        °C{" "}
      </a>
      |
      <a href="/" className={unitFahrenheit} onClick={showFahrenheit}>
        °F
      </a>{" "}
    </span>
  );
}
