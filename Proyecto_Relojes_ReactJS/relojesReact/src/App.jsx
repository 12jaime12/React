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
    </div>
  );
}

export default App;
