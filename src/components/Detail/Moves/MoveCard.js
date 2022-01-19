import React from "react";
import {Tile, MovesTileContainer} from "./Moves.styles";

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
