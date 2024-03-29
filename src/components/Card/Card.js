import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ContextList } from "../Context/ContextProvider";
import {
  CardPokemon,
  ImagePokemon,
  NameTitle,
  Tables,
  TypeTitle,
} from "./Card.styles";

const Card = ({ pokemon }) => {
  const context = useContext(ContextList);

  const navigate = useNavigate();
  const handleClick = () => {
    context.setId(pokemon.id);
    navigate(`/Pokemonlist/Detail/${pokemon.id}/${pokemon.name}`);
  };

  const { sprites, name, types } = pokemon;
  return (
    <CardPokemon onClick={handleClick}>
      <ImagePokemon>
        <img src={sprites.front_default} alt="img" />
      </ImagePokemon>
      <NameTitle>{name}</NameTitle>
      <Tables>name</Tables>
      <TypeTitle> {types[0].type.name} </TypeTitle>
      <Tables>type</Tables>
    </CardPokemon>
  );
};

export { Card };
