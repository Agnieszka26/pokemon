import React from "react";
import { useNavigate } from "react-router-dom";
import {
  TypeTitle,
  NameTitle,
  ImagePokemon,
  CardPokemon,
  Tables,
} from "./Card.styles";

export const Card = ({ pokemon }) => {
  const navigate = useNavigate(); // what is the point in declaring this variable as let? do you predict to change it in the future?
  const handleClick = () => {
    navigate(`/Pokemonlist/Detail/${pokemon.id}/${pokemon.name}`);
  };
  //console.log(pokemon)
  const { sprites, name, types } = pokemon; // added destructuring
  return (
    <CardPokemon onClick={handleClick}>
      <ImagePokemon>
        <img src={sprites.front_default} alt="pokemon-img" />
      </ImagePokemon>
      <NameTitle>{name}</NameTitle>
      <Tables>name</Tables>
      <TypeTitle> {types[0].type.name} </TypeTitle>
      <Tables>type</Tables>
    </CardPokemon>
  );
};
