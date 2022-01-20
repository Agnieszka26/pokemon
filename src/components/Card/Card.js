import React from "react";
import {useNavigate} from "react-router-dom";
import {
  TypeTitle,
  NameTitle,
  ImagePokemon,
  CardPokemon,
  Tables,
} from "./Card.styles";

const Card = (props) => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate(`/Pokemonlist/Detail/${props.id}/${props.name}`);
  };

  return (
    <CardPokemon onClick={handleClick}>
      <ImagePokemon>
        <img src={props.image} alt="img" />
      </ImagePokemon>
      <NameTitle>{props.name}</NameTitle>
      <Tables>name</Tables>
      <TypeTitle> {props.baseType} </TypeTitle>
      <Tables>type</Tables>
    </CardPokemon>
  );
};

export default Card;
