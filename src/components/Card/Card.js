import React from "react";
import {useNavigate} from "react-router-dom";
import {useState} from "react/cjs/react.development";
import {
  TypeTitle,
  NameTitle,
  ImagePokemon,
  CardPokemon,
  Tables,
} from "./Card.styles";

const Card = (props) => {
  // console.log("ile razy");
  const [pokemonDetaliURL, setPokemonDetaliURL] = useState(null);
  let navigate = useNavigate();
  function handleClick() {
    navigate(`Detail/${props.id}/${props.name}`);
    setPokemonDetaliURL(`${props.url}`);
    console.log(pokemonDetaliURL);
  }

  return (
    <CardPokemon onClick={() => handleClick()}>
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
