import react, {useEffect} from "react";
import {useState} from "react";
import arrow from "../../../Assets/angle-arrow-down.png";
import {MenuLi, MenuUl, MenuA} from "../DropDown/DropDown.styles";
import Modal from "./Modal";
//import HandleMoreModals from "./HandleMoreModals";

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

  const openModal = (event) => {
    event.preventDefault();
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
            <MenuUl>
              <MenuLi key={id}>
                <MenuA onClick={openModal} href="#">
                  {item.ability.name}
                </MenuA>
                <Modal
                  key={id}
                  showModal={showModal}
                  setShowModal={setShowModal}
                  name={item.ability.name}
                />
              </MenuLi>
            </MenuUl>
          );
        })}
      {/* <HandleMoreModals /> */}
    </div>
  );
};

export default DropdownMenuAbility;
