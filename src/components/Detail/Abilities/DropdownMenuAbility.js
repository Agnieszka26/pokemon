import {useState, useContext} from "react";
import {Button, Container} from "./DropdownMenu.styles";
import arrowDown from "../../../Assets/angle-arrow-down.png";
import arrowUp from "../../../Assets/up-arrow-angle.png";
import ListItem from "./ListItem";
import {ContextList} from "../../Context/ContextProvider";
import Modal from "./Modal";

const DropdownMenuAbility = () => {
  const handleModalClick = () => {
    context.setIsModalVisible(!context.isModalVisible);
  };

  const context = useContext(ContextList);

  const togglingArrows = () => {
    if (context.arrow === arrowDown) {
      context.setArrow(arrowUp);
    } else {
      context.setArrow(arrowDown);
    }
  };
  //console.log(context.pokemon.abilities);
  const clickHandlerArrows = () => {
    context.setIsActive(!context.isActive);
    togglingArrows();
  };

  return (
    <Container>
      <Button onClick={clickHandlerArrows}>
        <span style={{margin: "0.25rem"}}> Abilites </span>
        <img src={context.arrow} width="8" height="8" alt="" />
      </Button>
      {context.isActive &&
        context.pokemon.abilities &&
        context.pokemon.abilities.map((item) => {
          return <ListItem key={item.ability.url} item={[(item.ability.name), (item.ability.url)]} />;
        })}
    </Container>
  );
};

export default DropdownMenuAbility;
