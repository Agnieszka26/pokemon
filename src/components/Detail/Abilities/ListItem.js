import React, {useContext} from "react";
import Modal from "./Modal";
import {Item} from "./ListItem.styles";
import {ContextList} from "../../Context/ContextProvider";

export default function ListItem({item}) {
  const context = useContext(ContextList);
  const handleModalClick = () => {
    getAbilites();
    context.setIsModalVisible(!context.isModalVisible);
  };

  const getAbilites = async () => {
    try {
      const response = await fetch(item.url);
      const data = await response.json();
      context.setAbilityGer(data);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <Item
      // onClick={handleModalClick}
      >
        {item.name}
        {/* {context.isModalVisible && <Modal description={context.abilityGer} />} */}
      </Item>
    </>
  );
}
