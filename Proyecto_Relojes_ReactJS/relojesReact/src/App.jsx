import React, { useState } from "react";

import "./App.css";
import DigitalClock from "./components/DigitalClock/DigitalClock";
import Countdown from "./components/Countdown/Countdown";
import StopWatch from "./components/StopWatch/StopWatch";

function App() {
  return (
    <div className="app">
      <h1>Practica relojes Jaime Calvo</h1>
      <DigitalClock />
      <Countdown />
      <StopWatch />
      <div className="footer">
        <h3>Jaime Calvo Cuadrado ©2023</h3>
      </div>
    </div>
  );
}

export default App;
