import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Header.css";

export default function Header() {
  let headerData = {
    cityName: "Amsterdam",
    date: "17 Nov 1989",
    day: "Monday",
    time: "17:50",
  };
  return (
    <h1>
      <div className="row">
        <div className="col city-name-element">{headerData.cityName}</div>
        <div className="col calender-day">
          <span>{headerData.date}</span>
          <div className="col day-and-time">
            {headerData.day}
            {headerData.time}
          </div>
        </div>
      </div>
    </h1>
  );
}
