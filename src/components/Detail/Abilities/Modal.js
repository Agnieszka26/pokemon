import { useEffect, useState } from "react";
import { BackgroundModal, ModalContainer, ModalText } from "./Modals.styles";

const Modal = ({ description }) => {
  const [abilityGer, setAbilityGer] = useState([]);

  if (abilityGer.effect_entries) {
    console.log(abilityGer.effect_entries[0]);
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(description.url);
      setAbilityGer(response);
    }
    fetchData();
  }, [description.url]);
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
