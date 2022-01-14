import react, {useEffect} from "react";
import {useState} from "react";
import arrow from "../../../Assets/angle-arrow-down.png";
import {MenuLi, MenuUl, MenuA} from "./DropDown.styles";

const DropdownMenu = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [abilities, setAbilities] = useState(null);
  const [condition, setCondition] = useState(false);
  const onClick = () => setIsActive(!isActive);

  useEffect(() => {
    setAbilities(props.itemsDropdown);
    checkingConditions();
    //console.log(abilities);
    //   itemsDropdow.forEach((element) => {
    //     console.log(element);
    //  });
  });

  const checkingConditions = () => {
    if (isActive === true && abilities.length !== 0) {
      setCondition(true);
      //console.log(abilities);
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
        abilities.map((item) => {
          console.log(item);
          // return (
          //   <MenuUl>
          //     <MenuLi>
          //       <MenuA href="#">{{item}}</MenuA>
          //     </MenuLi>
          //   </MenuUl>
          // );
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

export default DropdownMenu;
