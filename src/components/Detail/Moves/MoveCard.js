import React, {useState} from "react";
import {Tile, MovesTileContainer, ListItemMoves} from "./Moves.styles";
import hamburger from "../../../Assets/line.png";
import tile from "../../../Assets/tile.png";

const MoveCard = ({move}) => {
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
      <button onClick={handleActive}>
        <img src={imageButton} width="12" height="12" alt="" />
      </button>
      <MovesTileContainer>
        {move.length &&
          move.map((item, id) => {
            if (!isActive) {
              return <Tile key={id}>{item.move.name}</Tile>;
            } else {
              return (
                <ul style={{display: "flex"}}>
                  <ListItemMoves key={id}>{item.move.name}</ListItemMoves>
                </ul>
              );
            }
          })}
          {/*      // niekoniecznie ul */}
      </MovesTileContainer>
    </>
  );
};

export default MoveCard;
