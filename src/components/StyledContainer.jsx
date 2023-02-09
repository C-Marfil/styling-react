import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const StyledContainer = () => {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/type/grass`).then((res) => {
      setPokemon(res.data.pokemon);
    });
  }, []);

  const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 30px;
    margin-right: 30px;
  `;

  const StyledNames = styled.div`
    margin-left: 20px;
    margin-bottom: 10px;
    padding-top: 10px;
    text-align: center;
    background-color: darkgreen;
    color: white;
    width: 10vw;
    height: 5vh;
    border-radius: 10px;
  `;

  const StyledH1 = styled.h1`
    color: green;
    font-size: 36px;
    align-self: center;
    filter: drop-shadow(40px 10px 4px lightgreen);
    margin-bottom: 60px;
  `;
  return (
    <div>
      <StyledH1>Grass Types!</StyledH1>
      <StyledContainer>
        {pokemon.map((thisPokemon) => {
          return <StyledNames>{thisPokemon.pokemon.name}</StyledNames>;
        })}
      </StyledContainer>
    </div>
  );
};

export default StyledContainer;
