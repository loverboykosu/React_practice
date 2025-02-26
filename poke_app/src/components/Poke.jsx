import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
const Poke = () => {
  const [pokeList, setPokeList] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  useEffect(() => {
    fetchPoke();
  }, []);
  const fetchPoke = async () => {
    const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
    const result = await axios.get(apiUrl);
    const pokeLists = result.data.results.map((item) => {
      // console.log(item);
      return item.name;
    });
    setPokeList(pokeLists);
    setIsLoad(true);
  };
  return (
    <>
      <div className="bg-black">
        <h1 className="text-white text-center p-5 text-2xl">Poke app</h1>
      </div>
      <h2>{isLoad ? pokeList : ""}</h2>
    </>
  );
};

export default Poke;
