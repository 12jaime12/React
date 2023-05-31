import React from "react";

const More = ({ languages, habilities }) => {
  return (
    <div className="more">
      <div className="languages card">
        <p className="name">✨ {languages.language} ✨</p>
        <p>Writing: {languages.wrlevel}</p>
        <p>Speaking: {languages.wrlevel}</p>
      </div>
      <div className="habilities card">
        {habilities.map((item, index) => {
          return (
            <div key={index}>
              <p>🎨{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default More;
