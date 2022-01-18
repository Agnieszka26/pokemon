import React from "react";
import {Tile, MovesTileContainer} from "./Moves.styles";
import {useNavigate} from "react-router-dom";
import {useState} from "react/cjs/react.development";
// import Detail from "../Detail/Detail";
// import {
//   TypeTitle,
//   NameTitle,
//   ImagePokemon,
//   CardPokemon,
//   Tables,
// } from "./Card.styles";

const MoveCard = ({move}) => {
  return (
    <>
      <MovesTileContainer>
        {move !== undefined &&
          move.map((item, id) => {
            return <Tile key={id}>{item.move.name}</Tile>;
          })}
      </MovesTileContainer>
    </>
  );
};

export default MoveCard;
