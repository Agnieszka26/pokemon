import { useContext, useState } from "react";
import MoveCard from "./MoveCard";
import { CardMovesContainer, MovesButton } from "./Moves.styles";

import { ContextList } from "../../Context/ContextProvider";

const Moves = () => {
  const [isActive, setIsActive] = useState(false);
  const context = useContext(ContextList);

  const moves = context.pokemon.moves;
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
