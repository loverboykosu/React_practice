import axios from "axios";
import { useEffect, useState } from "react";
import "../CSS/naruto.css";
import { HiH1 } from "react-icons/hi2";

const Naruto = () => {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const limit = 20;
  useEffect(() => {
    fetchCharacters(page);
  }, []);

  //fetch characters function
  const fetchCharacters = async (page) => {
    console.log("fetch : ", page);
    const apiUrl = "https://narutodb.xyz/api/character";
    setIsLoading(true);
    const result = await axios.get(apiUrl, { params: { page } });
    setCharacters(result.data.characters);
    console.log(characters.length);
    setIsLoading(false);
  };

  const previousPage = async () => {
    const previousPage = page - 1;
    await fetchCharacters(previousPage);
    setPage(previousPage);
  };
  const nextPage = async () => {
    const nextPage = page + 1;
    await fetchCharacters(nextPage);
    setPage(nextPage);
  };
  return (
    <>
      <div className="container">
        {isLoading ? (
          <div>Now loading ...</div>
        ) : (
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
                      <p>Jutsu : {character.jutsu}</p>
                      <p>Debut : {character.debut?.appears ?? "なし"}</p>
                      <p>
                        Affiliation :{" "}
                        {character.personal?.affiliation ?? "なし"}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="pager">
              <button
                disabled={page === 1}
                className="prev"
                onClick={previousPage}
              >
                Previous
              </button>
              <span className="page-number">{page}</span>
              <button
                disabled={limit > characters.length}
                className="next"
                onClick={nextPage}
              >
                Next
              </button>
            </div>
          </main>
        )}
      </div>
    </>
  );
};

export default Naruto;
