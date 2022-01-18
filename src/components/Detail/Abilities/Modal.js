import {useState, useEffect} from "react";
import {BackgroundModal, ModalContainer, ModalText} from "./Modals.styles";
//import {useEffect} from "react/cjs/react.development";

const Modal = ({url}) => {
  const [ability, setAbility] = useState([]);

  const getAbilites = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      await setAbility(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAbilites();
  }, []);

  if (ability.effect_entries !== undefined) {
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
