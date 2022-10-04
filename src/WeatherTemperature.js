import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahren(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemp">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |{""}{" "}
          <a href="/" onClick={showFahren}>
            {" "}
            F°
          </a>
        </span>
      </div>
    );
  } else {
    let fahren = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemp">
        <span className="temperature">{Math.round(fahren)}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            {" "}
            °C{" "}
          </a>{" "}
          {""} | F°
        </span>
      </div>
    );
  }
}
