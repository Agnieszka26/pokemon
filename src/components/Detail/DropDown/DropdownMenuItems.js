import react, { useEffect } from "react";
import { useState } from "react";
import arrow from "../../../Assets/angle-arrow-down.png";
import { MenuLi, MenuUl, MenuA } from "./DropDown.styles";

const DropdownMenuItems = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [heldItems, setHeldItems] = useState(null);
  const [condition, setCondition] = useState(false);
  const onClick = () => setIsActive(!isActive);

  useEffect(() => {
    setHeldItems(props.itemsDropdown);
    checkingConditions();
  });

  const checkingConditions = () => {
    if (isActive === true && heldItems.length !== 0) {
      setCondition(true);
    } else {
      setCondition(false);
    }
  };

  return (
    <div>
      {condition ? (
        Object.values(heldItems).map((item, id) => {
          <div>
            <button onClick={onClick}>
              <span>Held items</span>
              <img src={arrow} width="10" height="10" />
            </button>
            <MenuUl key={id}>
              <MenuLi>
                <MenuA href="#">{item}</MenuA>
              </MenuLi>
            </MenuUl>
          </div>;
        })
      ) : (
        <span>No held items</span>
      )}
    </div>
  );
};

export default DropdownMenuItems;

// {condition &&
//   Object.values(heldItems).map((item, id) => {
//     return (
//       <MenuUl key={id}>
//         <MenuLi>
//           <MenuA href="#">{item}</MenuA>
//         </MenuLi>
//       </MenuUl>
//     );
//   })}
