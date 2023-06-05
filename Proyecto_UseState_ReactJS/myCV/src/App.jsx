import { useState } from "react";
import "./App.css";
import { CV } from "./CV/Cv";
import Hero from "./components/Hero/Hero";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import More from "./components/More/More";
import About from "./components/About/About";

const { hero, education, experience, languages, habilities } = CV;

function App() {
  const [showEducation, setShowEducation] = useState(true);
  return (
    <div className="App">
      <Hero hero={hero} />
      <About hero={hero} />
      <button
        className="custom-btn btn-4"
        onClick={() => setShowEducation(true)}
      >
        Education
      </button>
      <button
        className="custom-btn btn-4"
        onClick={() => setShowEducation(false)}
      >
        Experience
      </button>
      <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
      <More languages={languages} habilities={habilities} />
      <div className="footer">
        <h3>Jaime Calvo Cuadrado ©2023</h3>
      </div>
    </div>
  );
}

export default App;
