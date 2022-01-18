import react, {useEffect} from "react";
import {useState} from "react";
import {Button, Container} from "./DropdownMenu.styles";
import arrowDown from "../../../Assets/angle-arrow-down.png";
import arrowUp from "../../../Assets/up-arrow-angle.png";
import {MenuLi, MenuUl, MenuA} from "../DropDown/DropDown.styles";
import ListItem from "./ListItem";
import Modal from "./Modal";

const DropdownMenuAbility = ({itemsDropdown}) => {
  const [isActive, setIsActive] = useState(false);
  
  const [arrow, setArrow] = useState(arrowDown);
  
  const togglingArrows = () =>{
    if( arrow === arrowDown ){
      setArrow(arrowUp)
    }else{
      setArrow(arrowDown);
    }
  }
  
  const clickHandler = () => {
    setIsActive(!isActive);
    togglingArrows();
  };


  return (
    <Container>
      <Button onClick={clickHandler}>
        <span style={{margin: "0.25rem"}}>Abilites</span>
        <img src={arrow} width="10" height="10" />
      </Button>
      {isActive &&
        itemsDropdown.length !== 0 &&
        itemsDropdown.map((item, id) => {
          return <ListItem key={id} item={item.ability} />;
        })}
    </Container>
  );
};

export default DropdownMenuAbility;
