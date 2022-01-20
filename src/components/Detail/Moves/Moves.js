import {useState} from "react";
import MoveCard from "./MoveCard";
import {MovesButton, CardMovesContainer} from "./Moves.styles";
import hamburger from "../../../Assets/line.png";
import tile from "../../../Assets/tile.png";

const Moves = ({moves}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(() => !isActive);

  };

  const arr = moves.slice(0, 4);

  return (
    <>
      <CardMovesContainer>
        <MovesButton onClick={handleClick}>
          <span>Moves</span>
        </MovesButton>

        {isActive && <MoveCard move={arr} />}
      </CardMovesContainer>
    </>
  );
};

export default Moves;
