import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "CLOUDY",
    "03n": "CLOUDY",
    "04d": "RAIN",
    "04n": "RAIN",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "SLEET",
    "10n": "SLEET",
    "11d": "SNOW",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };

  const defaults = {
    icon: codeMapping[props.icon],
    color: "black",
    size: 130,
    animate: true,
  };

  return (
    <div className="weather-icon">
      <ReactAnimatedWeather
        icon={defaults.icon}
        color={defaults.color}
        size={defaults.size}
        animate={defaults.animate}
      />
    </div>
  );
}
