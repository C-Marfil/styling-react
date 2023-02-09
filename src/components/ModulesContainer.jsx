import { useState, useEffect } from "react";
import axios from "axios";
import css from "../styles/modulescontainer.module.css";

const ModulesContainer = () => {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/type/water`).then((res) => {
      setPokemon(res.data.pokemon);
    });
  }, []);
  return (
    <div>
      <h1 className={css["type"]}>Water Types!</h1>
      <div className={css["pokemon"]}>
        {pokemon.map((thisPokemon) => {
          return <div className={css["name"]}>{thisPokemon.pokemon.name}</div>;
        })}
      </div>
    </div>
  );
};

export default ModulesContainer;
