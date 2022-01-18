import react from "react";

const Modal = ({showModal, setShowModal}) => {
  return <>{showModal ? <div>I AM MODAL </div> : null}</>;
};
export default Modal;
