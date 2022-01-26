import {useState, useContext} from "react";
import {Button, Container} from "./DropdownMenu.styles";
import arrowDown from "../../../Assets/angle-arrow-down.png";
import arrowUp from "../../../Assets/up-arrow-angle.png";
import ListItem from "./ListItem";
import {ContextList} from "../../Context/ContextProvider";

const DropdownMenuAbility = ({itemsDropdown}) => {
  const [isActive, setIsActive] = useState(false);
  const [arrow, setArrow] = useState(arrowDown);
  const context = useContext(ContextList);
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
    <Container>
      <Button onClick={clickHandler}>
        <span style={{margin: "0.25rem"}}> Abilites </span>
        <img src={arrow} width="8" height="8" alt="" />
      </Button>
      {isActive &&
        context.pokemon.abilities &&
        context.pokemon.abilities.map((id) => {
          return <ListItem key={id} />;
        })}
    </Container>
  );
};

export default DropdownMenuAbility;
