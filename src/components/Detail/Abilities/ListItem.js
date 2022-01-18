import React, { useState } from "react";
import Modal from "./Modal";

export default function ListItem({ name }) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleClick = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <div onClick={handleClick}>
      {name}
      {isModalVisible && <Modal name={name} />}
    </div>
  );
}
