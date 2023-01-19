import { useContext, useEffect, useState } from "react";
import arrowDown from "../../Assets/angle-arrow-down.png";
import arrowUp from "../../Assets/up-arrow-angle.png";
import { ContextList } from "../Context/ContextProvider";
import { Button, Container } from "../Detail/Abilities/DropdownMenu.styles";
import ListItem from "./Abilities/ListItem";
import Modal from "./Abilities/Modal";

const DropdownMenu = ({ name, ability, held_items }) => {
  const context = useContext(ContextList);

  const [arrow, setArrow] = useState(arrowUp);
  const [isActive, setIsActive] = useState(false);
  const [abilities, setAbilities] = useState([]);

  const [itemsToShow, setItemsToShow] = useState([]);
  useEffect(() => {
    setAbilities(ability);
    setItemsToShow(held_items);
  }, [ability, held_items]);

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

  const handleModalClick = () => {
    context.setIsModalVisible(!context.isModalVisible);
  };

  return (
    <Container>
      <Button onClick={clickHandlerArrows}>
        <span style={{ margin: "0.25rem" }}> {name} </span>
        <img src={arrow} width="8" height="8" alt="" />
      </Button>

      {isActive && <ListItem item={itemsToShow} />}
      {isActive &&
        abilities &&
        abilities.map((item) => {
          console.log(item);
          return (
            <div key={item.url}>
              <div onClick={handleModalClick}>
                {item.name}
                {context.isModalVisible && <Modal description={item} />}
              </div>
            </div>
          );
        })}
    </Container>
  );
};

export default DropdownMenu;

{
  /* <div>
{(isActive &&
  ({name} === "Held Items") ?
    (<ListItem item={held_items} />)
    :(abilities &&
        abilities.map((item) => {
        return <ListItem key={item.url} item={item.name} abilities={abilities} />
        }
        )
    )
)}
</div> */
  {
    /* <ListItem
key={item.url}
item={item.name}
abilities={abilities}
/> */
  }
}
