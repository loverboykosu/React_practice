import axios from "axios";
import { useEffect, useState } from "react";

const Sample = () => {
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
      {/* <p>{characters[0].name}</p> */}
      <div className="container">
        <main>
          <div className="card-container">
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
                  />
                  <p>{character.name}</p>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </>
  );
};

export default Sample;
