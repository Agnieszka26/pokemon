import React, {useState, useContext} from "react";
import Modal from "./Modal";
import {Item} from "./ListItem.styles";
import {ContextList} from "../../Context/ContextProvider";

export default function ListItem() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const context = useContext(ContextList);
  const handleClick = () => {
    setIsModalVisible(!isModalVisible);
  };
  // console.log(context.pokemon.abilities);
  //console.log(context.pokemon.abilities.ability.name);
  return (
    <>
      {context.pokemon.abilities &&
        context.pokemon.abilities.map((a) => {
          <Item onClick={handleClick}>
            coco
            {/* {a.ability.name}
            {isModalVisible && <Modal />} */}
          </Item>;
          // <Item onClick={handleClick}>
          //   {context.pokemon.abilities.abil.ability.name}
          //   {isModalVisible && <Modal />}
          // </Item>;
        })}
    </>
  );
}
