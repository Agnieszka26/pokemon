import react, {useEffect} from "react";
import {useState} from "react";
import arrow from "../../../Assets/angle-arrow-down.png";
import {MenuLi, MenuUl, MenuA} from "./DropDown.styles";

const DropdownMenuAbility = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [abilities, setAbilities] = useState(null);
  const [condition, setCondition] = useState(false);
  const onClick = () => setIsActive(!isActive);

  useEffect(() => {
    setAbilities(props.itemsDropdown);
    checkingConditions();
  });

  const checkingConditions = () => {
    if (isActive === true && abilities.length !== 0) {
      setCondition(true);
    } else {
      setCondition(false);
    }
  };
  // checkingConditions();

  // console.log(props.itemsDropdown.length && props.itemsDropdown === undefined);
  //  if( props.itemsDropdown.length !== 0 ){
  //   console.log(props.itemsDropdown);
  //  }

  return (
    <div>
      <button onClick={onClick}>
        <span>Abilites</span>
        <img src={arrow} width="10" height="10" />
      </button>
      {condition &&
        Object.values(abilities).map((item, id) => {
          return (
            <MenuUl key={id}>
              <MenuLi>
                <MenuA href="#">{item.ability.name}</MenuA>
              </MenuLi>
            </MenuUl>
          );
        })}
      {/* {condition  ? (
        <MenuUl>
          <MenuLi>
            <MenuA href="#">Messages</MenuA>
          </MenuLi>
          <MenuLi>
            <MenuA href="#">Trips</MenuA>
          </MenuLi>
          <MenuLi>
            <MenuA href="#">Saved</MenuA>
          </MenuLi>
        </MenuUl>
      ) : (
        <div></div>
      )} */}
    </div>
  );
};

export default DropdownMenuAbility;
