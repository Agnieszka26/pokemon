import { useState } from "react";
import arrow from "../../../Assets/angle-arrow-down.png";
import { MenuLi, MenuUl, MenuA } from "../DropDown/DropDown.styles";
import ListItem from "./ListItem";
//import HandleMoreModals from "./HandleMoreModals";

const DropdownMenuAbility = ({ abilities }) => {
  const [isActive, setIsActive] = useState(false);

  const clickHandler = () => setIsActive(!isActive);

  return (
    <div>
      <button onClick={clickHandler}>
        <span>Abilites</span>
        <img src={arrow} width="10" height="10" alt="arrow" />
      </button>
      {isActive &&
        abilities !== 0 &&
        abilities.map((item, id) => {
          return <ListItem name={item.ability.name} />;
        })}
      {/* <HandleMoreModals /> */}
    </div>
  );
};

export default DropdownMenuAbility;
