import React, { useState } from "react";
import hamburger from "../../../Assets/line.png";
import tile from "../../../Assets/tile.png";
import {
  ButonChangeTileToList,
  ListItemMoves,
  MovesTileContainer,
  Tile,
} from "./Moves.styles";

const MoveCard = ({ move }) => {
  const [isActive, setIsActive] = useState(false);
  const [imageButton, setImageButton] = useState(hamburger);
  const handleActive = () => {
    setIsActive(() => !isActive);
    togglingImageButton();
  };

  const togglingImageButton = () => {
    if (imageButton === hamburger) {
      setImageButton(tile);
    } else {
      setImageButton(hamburger);
    }
  };

  return (
    <>
      <ButonChangeTileToList onClick={handleActive}>
        <img src={imageButton} width="12" height="12" alt="" />
      </ButonChangeTileToList>
      <MovesTileContainer>
        {move.length &&
          move.map((item, id) => {
            if (!isActive) {
              return <Tile key={id}>{item.move.name}</Tile>;
            } else {
              return (
                <div style={{ display: "flex" }}>
                  <ListItemMoves key={id}>{item.move.name}</ListItemMoves>
                </div>
              );
            }
          })}
      </MovesTileContainer>
    </>
  );
};

export default MoveCard;
