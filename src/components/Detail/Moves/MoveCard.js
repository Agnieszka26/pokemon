import React from "react";
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
  //console.log(move);
  return (
    <>
      {move !== undefined &&
        move.map((item, id) => {
          return (
            <ul>
              <ol key={id + 1}>{id + 1} {item.move.name}</ol>
            </ul>
          );

          //  <p key = {id}>{item.move.name}</p>;
          // <ul>
          //   <li key={id + 1}>{item.move.name}</li>;
          // </ul>;
          // console.log(`${id + 1} : ${item.move.name}`);
          // <p>{item.move.name}</p>;
        })}
    </>
  );
};

export default MoveCard;
