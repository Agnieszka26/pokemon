import {useContext} from "react";
import {BackgroundModal, ModalContainer, ModalText} from "./Modals.styles";
import {ContextList} from "../../Context/ContextProvider";

const Modal = () => {
  const context = useContext(ContextList);

  return (
    <BackgroundModal>
      <ModalContainer>
        {context.abilityGer.effect_entries && (
          <ModalText>{context.abilityGer.effect_entries[0].effect}</ModalText>
        )}
      </ModalContainer>
    </BackgroundModal>
  );
};
export default Modal;
