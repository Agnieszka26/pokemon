import React from "react";
import {TypeTitle, NameTitle, ImagePokemon, CardPokemon} from "./Card.styles";
const Card = (props) => {
  console.log("ile razy");
  return (
    <CardPokemon onClick={() => console.log(props.id)}>
      <ImagePokemon>
        <img src={props.image} alt="img" />
      </ImagePokemon>
      <NameTitle> name: {props.name}</NameTitle>
      <TypeTitle> type:{props.baseType} </TypeTitle>
    </CardPokemon>
  );
};

export default Card;
