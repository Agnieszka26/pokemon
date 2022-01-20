import {useState, useEffect} from "react";
import {BackgroundModal, ModalContainer, ModalText} from "./Modals.styles";

const Modal = ({url}) => {
  const [ability, setAbility] = useState([]);

  useEffect(() => {
    getAbilites();
  }, []);

  const getAbilites = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setAbility(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!ability.effect_entries.length) {
    setAbility(ability.effect_entries[0].effect);
  }

  return (
    <BackgroundModal>
      <ModalContainer>
        <ModalText> {ability} </ModalText>
      </ModalContainer>
    </BackgroundModal>
  );
};
export default Modal;
