import React from "react";
import "./App.css";

const App = () => {
  const [characterList, setCharacterList] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      let data = await fetch(`https://rickandmortyapi.com/api/character/`).then(
        (res) => res.json()
      );
      const charactersFilter = data.results.filter(
        (character) => character.status === "Alive"
      );
      setCharacterList(charactersFilter);
    })();
  }, []);

  return (
    <>
      <h1>Rick and Morty</h1>
      <div className="gallery">
        {characterList.map((character) => (
          <div key={character.id}>
            <img src={character.image} alt={character.name} />
            <h2>name: {character.name}</h2>
            <p>origin: {character.origin.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
