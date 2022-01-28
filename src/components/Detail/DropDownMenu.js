import {useState, useContext, useEffect} from "react";
import {Button, Container} from "../Detail/Abilities/DropdownMenu.styles";
import arrowDown from "../../Assets/angle-arrow-down.png";
import arrowUp from "../../Assets/up-arrow-angle.png";
import ListItem from "./Abilities/ListItem";
import {ContextList} from "../Context/ContextProvider";
//tutaj trzeba żeby było lokalne set state, bo inaczej lipka

const DropdownMenu = ({name, items, accessToAbbility}) => {
  const context = useContext(ContextList);
  const [arrOfItemsToShow, setArrOfItemsToShow] = useState([]);
  const [arrow, setArrow] = useState(arrowUp);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    setArrOfItemsToShow(items);
  }, []);

  const togglingArrows = () => {
    if (arrow === arrowDown) {
      setArrow(arrowUp);
    } else {
      setArrow(arrowDown);
    }
  };

  const clickHandlerArrows = () => {
    setIsActive(!isActive);
    togglingArrows();
  };

  return (
    <Container>
      <Button onClick={clickHandlerArrows}>
        <span style={{margin: "0.25rem"}}> {name} </span>
        <img src={arrow} width="8" height="8" alt="" />
      </Button>
      {isActive &&
        arrOfItemsToShow &&
        arrOfItemsToShow.map((item) => {
          return <ListItem key={item.url} item={item} />;
        })}
    </Container>
  );
};

export default DropdownMenu;
