import { useEffect, useState } from "react";
import { BackgroundModal, ModalContainer, ModalText } from "./Modals.styles";

const Modal = ({ description }) => {
  const [abilityGer, setAbilityGer] = useState([]);

  useEffect(() => {
    getAbilites();
  }, []);

  const getAbilites = async () => {
    try {
      const response = await fetch(description.url);
      const data = await response.json();
      setAbilityGer(data);
    } catch (error) {
      console.log(error);
    }
  };
  if (abilityGer.effect_entries) {
    console.log(abilityGer.effect_entries[0]);
  }
  return (
    <BackgroundModal>
      <ModalContainer>
        {abilityGer.effect_entries && (
          <ModalText>{abilityGer.effect_entries[0].effect}</ModalText>
        )}
      </ModalContainer>
    </BackgroundModal>
  );
};
export default Modal;
