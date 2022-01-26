import {useState, useEffect, useContext} from "react";
import {BackgroundModal, ModalContainer, ModalText} from "./Modals.styles";
import {ContextList} from "../../Context/ContextProvider";

const Modal = () => {
  const [ability, setAbility] = useState([]);
 const context = useContext(ContextList);
 const url = context.pokemon.abilities.ability.url
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

  if (ability.effect_entries) {
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
