import React from "react";
import "./Conversion.css";

export default function Conversion(props) {
  return (
    <h2>
      <span className="current-temperature">{props.celsiusTemp}</span>
      <span className="cf-symbol">
        <a href="/" className="active">
          °C{" "}
        </a>
      </span>
    </h2>
  );
}
