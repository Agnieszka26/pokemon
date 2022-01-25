import React, {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {CardProvider, CardContext} from "./CardContextProvider";
import {
  ContextCardList,
  ContextCardListProvider,
} from "../CardList.js/ContextCardListProvider";
import {
  TypeTitle,
  NameTitle,
  ImagePokemon,
  CardPokemon,
  Tables,
} from "./Card.styles";

const Card = ({pokemon}) => {
  const context = useContext(ContextCardList);
  const contextCard = useContext(CardContext );
   console.log(contextCard);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/Pokemonlist/Detail/${pokemon.id}/${pokemon.name}`);
  };
 // console.log(pokemon);
  //const {sprites, name, types} = pokemon;
  return (
    <CardPokemon onClick={handleClick}>
      {/* <ImagePokemon>
        <img src={sprites.front_default} alt="img" />
      </ImagePokemon>
      <NameTitle>{name}</NameTitle>
      <Tables>name</Tables>
      <TypeTitle> {types[0].type.name} </TypeTitle>
      <Tables>type</Tables> */}
    </CardPokemon>
  );
};

export {Card};
