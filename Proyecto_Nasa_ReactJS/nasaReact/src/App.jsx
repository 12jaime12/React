import React, { useEffect, useState } from "react";
import "./App.css";
import Figure from "./components/Figure";
import axios from "axios";
function App() {
  const today = new Date(Date.now()).toISOString().slice(0, 10);

  const [apod, setApod] = useState({});

  const [date, setDate] = useState(today);

  const NASA_URL = "https://api.nasa.gov/";

  const NASA_API_KEY = "DRQe3BRfoZiL02ckiKqdvrncQCpLiVOCfBbzVV2G";

  useEffect(() => {
    const getApod = async () => {
      const data = await axios.get(
        `${NASA_URL}planetary/apod?date=${date}&api_key=${NASA_API_KEY}`
      );
      setApod(data.data);
    };
    getApod();
  }, [date]);

  const handleInput = (ev) => {
    setDate(ev.target.value.toLocaleString());
  };
  return (
    <div className="App">
      <h1>Foto Astrologica del dia</h1>
      <input type="date" id="photo-date" onChange={handleInput} />
      {date > today ? (
        <h2>Elige una fecha previa a la actual</h2>
      ) : (
        <Figure data={apod} />
      )}
      <div className="footer">
        <h3>Jaime Calvo Cuadrado ©2023</h3>
      </div>
    </div>
  );
}

export default App;
