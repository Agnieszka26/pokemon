import {useState, useContext} from "react";
import {Button} from "./DropDown.styles";
import arrowDown from "../../../Assets/angle-arrow-down.png";
import arrowUp from "../../../Assets/up-arrow-angle.png";
import {ContextList} from "../../Context/ContextProvider";

const DropdownMenuItems = ({itemsDropdown}) => {
  const [isActive, setIsActive] = useState(false);
  const [arrow, setArrow] = useState(arrowDown);
  const context = useContext(ContextList);

  const items = context.pokemon.held_items;

  const togglingArrows = () => {
    if (arrow === arrowDown) {
      setArrow(arrowUp);
    } else {
      setArrow(arrowDown);
    }
  };

  const clickHandler = () => {
    setIsActive(!isActive);
    togglingArrows();
  };

  return (
    <>
      <Button onClick={clickHandler}>
        <span style={{margin: "0.1rem"}}>Held Items</span>
        <img src={arrow} width="8" height="8" alt="" />
      </Button>
      {isActive &&
        (items.length ? (
          items.map((item, index) => {
            return <p key={index}>{item.item.name}</p>;
          })
        ) : (
          <p>No held Items</p>
        ))}
    </>
  );
};

export default DropdownMenuItems;
