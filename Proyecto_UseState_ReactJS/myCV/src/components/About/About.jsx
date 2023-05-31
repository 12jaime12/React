import React from "react";
import Education from "../Education/Education";
import "./About.css";

const About = ({ hero }) => {
  return (
    <div className="about">
      <div className="card">
        {hero.aboutMe.map((item, index) => {
          return (
            <div key={index}>
              <p>{item.info}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
