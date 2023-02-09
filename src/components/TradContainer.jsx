import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/tradcontainer.css";

const Container = () => {
  const [pokemon, setPokemon] = useState([]);
  const [selected, setSelected] = useState();
  const [image, setImage] = useState([]);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/type/fire`).then((res) => {
      setPokemon(res.data.pokemon);
    });
  }, []);

  useEffect(() => {
    axios.get(`${selected}`).then((res) => {
      setImage(res.data.sprites.front_default);
    });
  }, [selected]);

  return (
    <div className="App">
      <h1 className="type">Fire Types!</h1>
      <div className="pokemon">
        {pokemon.map((thisPokemon, index) => {
          return (
            <div
              key={index}
              className="pokemon-names"
              onMouseOver={() => setSelected(thisPokemon.pokemon.url)}
            >
              {
                <img
                  src={image}
                  className="pokemon-image"
                  alt="pokemon-sprite"
                />
              }
              {thisPokemon.pokemon.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Container;
