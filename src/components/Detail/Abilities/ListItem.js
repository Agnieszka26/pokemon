import React, {useState} from "react";
import Modal from "./Modal";
import {Item} from "./ListItem.styles";

export default function ListItem({item}) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleClick = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <>
      <Item onClick={handleClick}>
        {item.name}
        {isModalVisible && <Modal url={item.url} />}
      </Item>
    </>
  );
}
