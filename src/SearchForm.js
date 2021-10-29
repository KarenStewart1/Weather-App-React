import React from "react";
import "./SearchForm.css";

export default function SearchForm() {
  return (
    <form>
      <div className="row justify-content-md-center search-buttons-bar">
        <div className="col col-lg-4 search-bar">
          <input
            type="search"
            className="enter-city-name form-control shadow-sm"
            placeholder="Enter city name"
            autocomplete="off"
          />
        </div>
        <div className="col-md-auto search-input-button">
          <input
            type="submit"
            value="Search"
            className="search-button shadow-sm"
          />
        </div>
        <div className="col-md-auto">
          <button className="current-location-button shadow-sm">
            Current Location
          </button>
        </div>
      </div>
    </form>
  );
}
