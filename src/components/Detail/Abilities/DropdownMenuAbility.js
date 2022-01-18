import react, {useEffect} from "react";
import {useState} from "react";
import arrow from "../../../Assets/angle-arrow-down.png";
import {MenuLi, MenuUl, MenuA} from "../DropDown/DropDown.styles";
import Modal from "./Modal";

const DropdownMenuAbility = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [abilities, setAbilities] = useState(null);
  const [condition, setCondition] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const onClick = () => setIsActive(!isActive);

  useEffect(() => {
    setAbilities(props.itemsDropdown);
    checkingConditions();
  });

  const checkingConditions = () => {
    if (isActive === true && abilities.length !== 0) {
      setCondition(true);
    } else {
      setCondition(false);
    }
  };

  const openModal = () => {
    setShowModal((prew) => !prew);
  };

  return (
    <div>
      <button onClick={onClick}>
        <span>Abilites</span>
        <img src={arrow} width="10" height="10" />
      </button>
      {condition &&
        Object.values(abilities).map((item, id) => {
          return (
            <MenuUl key={id}>
              <MenuLi>
                <MenuA onClick={openModal} href="#">
                  {item.ability.name}
                </MenuA>
                <Modal showModal={showModal} setShowModal={setShowModal} />
              </MenuLi>
            </MenuUl>
          );
        })}
    </div>
  );
};

export default DropdownMenuAbility;
