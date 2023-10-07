import React from "react";
import "./styles.css";

export default function Search() {
  return (
    <div className="box">
      <span className="navbar-toggler-icon"></span>

      <form className="d-flex" id="search-form" role="search">
        <input
          className="form-control me-2"
          id="city-name"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>

        <button
          type="button"
          className="btn btn-success"
          id="current-location-button"
        >
          Current
        </button>
      </form>
      <br />
      <div className="d-flex weather-temperature">
        <img
          src="https://duckduckgo.com/assets/weather/icons/weatherkit/PartlyCloudy.svg"
          alt="partly-sunny"
          id="icon"
        />
      </div>
      <div>
        <strong id="temperature"></strong>
        <span id="units">{"20°C"}</span>
      </div>
      <div className="dateTime">
        <h2 id="date-time">Sunday, 17th September 2023</h2>
      </div>
      <div className="description">
        <h3 id="description">Cloudy</h3>
      </div>
      <div className="place">
        <h4 id="place">London, England</h4>
      </div>
      <div className="row">
        <ul>
          <li>
            Wind: 2<span className="col-2 wind" id="wind"></span> KPH{" "}
          </li>
          <li>
            Humidity: 20<span className="col-2 humidity" id="humidity"></span>%
          </li>
        </ul>
        <br />
        Coded by Amy Brown and{" "}
        <a
          href="https://github.com/AimsLynne/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          open sourced
        </a>{" "}
        on Github
      </div>
    </div>
  );
}
