import React from "react";
import {useNavigate} from "react-router-dom";
import Detail from "../Detail/Detail";
import {TypeTitle, NameTitle, ImagePokemon, CardPokemon} from "./Card.styles";

const Card = (props) => {
  // console.log("ile razy");
  let navigate = useNavigate();
  function handleClick() {
    navigate(`Detail/${props.id}/${props.name}`);
  }
  return (
    <CardPokemon onClick={() => handleClick()}>
      <ImagePokemon>
        <img src={props.image} alt="img" />
      </ImagePokemon>
      <NameTitle> name: {props.name}</NameTitle>
      <TypeTitle> type: {props.baseType} </TypeTitle>
    </CardPokemon>
  );
};

export default Card;
