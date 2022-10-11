import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastday(props) {
  function MaxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function MinTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDate();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="WeatherForecast-temp">
        <span className="WeatherForecast-temp-max">{MaxTemp()}</span>
        <span className="WeatherForecast-temp-min">{MinTemp()}</span>
      </div>
    </div>
  );
}
