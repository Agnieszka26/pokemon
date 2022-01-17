import react, {useEffect} from "react";
import {useState} from "react";
import MoveCard from "./MoveCard";

const Moves = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [condition, setCondition] = useState(false);
  const [move, setMoves] = useState([]);
  const [displayedMoves, setDisplayedMoves] = useState([]);

  useEffect(() => {
    // move !== undefined &&
    //  console.log(props);
    setMoves(props.moves);
  });

  const handleClick = () => {
    setIsActive((prevActive) => !prevActive);
    // if (move !== undefined && move.length !== 0) {
    // setMoves(move.slice(0, 4));
    // }
  };

  const arr = move.slice(0, 4);
  return (
    <div>
      <button onClick={handleClick}>
        <span>Moves</span>
      </button>

      {
        isActive && <MoveCard move={arr} />
        //  <MoveCard move={move} />
        // : (<div></div>)
      }
    </div>
  );
};

export default Moves;

// move.filter((item, id) => {
//     if (id < 4) {
//       setDisplayedMoves(item);
//     }
//   });  <div>cliced</div>
