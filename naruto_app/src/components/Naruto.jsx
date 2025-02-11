import axios from "axios";
import { useEffect, useState } from "react";
import "../CSS/naruto.css";

const Naruto = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetchCharacters();
  }, []);

  //fetch characters function
  const fetchCharacters = async () => {
    const apiUrl = "https://narutodb.xyz/api/character";
    const result = await axios.get(apiUrl);
    setCharacters(result.data.characters);
    console.log(result);
  };

  return (
    <>
      <div className="container">
        <main>
          <div className="cards-container">
            {characters.map((character) => {
              return (
                <div className="card" key={character.id}>
                  <img
                    src={
                      character.images[0] != null
                        ? character.images[0]
                        : "dummy.png"
                    }
                    alt="character"
                    className="card-image"
                  />
                  <div className="card-content">
                    <p>Name : {character.name}</p>
                    <p>{character.jutsu}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </>
  );
};

export default Naruto;
