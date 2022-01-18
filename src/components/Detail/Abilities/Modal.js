import react from "react";

const Modal = ({showModal, setShowModal, name}) => {
  return <>{showModal ? <div>{name}</div> : null}</>;
};
export default Modal;
