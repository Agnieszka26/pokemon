import react, {useEffect} from "react";
import {useState} from "react";
import {Button} from "./DropDown.styles";
import arrowDown from "../../../Assets/angle-arrow-down.png";
import arrowUp from "../../../Assets/up-arrow-angle.png";

const DropdownMenuItems = ({itemsDropdown}) => {
  const [isActive, setIsActive] = useState(false);

  const [arrow, setArrow] = useState(arrowDown);

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
    <div>
      <Button onClick={clickHandler}>
        <span style={{margin: "0.1rem"}}>Held Items</span>
        <img src={arrow} width="8" height="8" />
      </Button>
      {isActive &&
        (itemsDropdown.length !== 0 ? (
        
          itemsDropdown.map((item, id) => {
            return <p key={id}>{item.item.name}</p>;
          })
        ) : (
          <p>No held Items</p>
        ))}
    </div>
  );
};

export default DropdownMenuItems;
