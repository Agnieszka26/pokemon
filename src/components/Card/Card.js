import React from "react";
import {useNavigate} from "react-router-dom";
import {
  TypeTitle,
  NameTitle,
  ImagePokemon,
  CardPokemon,
  Tables,
} from "./Card.styles";

const Card = ({pokemon}) => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate(`/Pokemonlist/Detail/${pokemon.id}/${pokemon.name}`);
  };
//console.log(pokemon)
  return (
    <CardPokemon onClick={handleClick}>
      <ImagePokemon>
        <img src={pokemon.sprites.front_default} alt="img" />
      </ImagePokemon>
      <NameTitle>{pokemon.name}</NameTitle>
      <Tables>name</Tables>
      <TypeTitle> {pokemon.types[0].type.name} </TypeTitle>
      <Tables>type</Tables>
    </CardPokemon>
  );
};

export default Card;
