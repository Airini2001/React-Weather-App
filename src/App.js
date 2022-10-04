/** @format */

import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Weather defaultCity='New York' />
        <footer>
          This project was created by{" "}
          <a target='_blank' rel='noopener noreferrer'></a> and is{" "}
          <a href='' target='_blank' rel='noopener noreferrer'>
            open-source on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
