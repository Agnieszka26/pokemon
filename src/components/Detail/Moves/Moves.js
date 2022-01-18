import {useState} from "react";
import MoveCard from "./MoveCard";
import {MovesButton,CardMovesContainer} from "./Moves.styles";

const Moves = ({moves}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((prevActive) => !prevActive);
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
