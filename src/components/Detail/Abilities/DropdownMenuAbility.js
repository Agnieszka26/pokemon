import react, {useEffect} from "react";
import {useState} from "react";
import { Button, Container} from "./DropdownMenu.styles";
import arrowDown from "../../../Assets/angle-arrow-down.png";
import arrowUp from "../../../Assets/up-arrow-angle.png";
import {MenuLi, MenuUl, MenuA} from "../DropDown/DropDown.styles";
import Modal from "./Modal";
//import {CardDetail, CardSmall, SmallText, Bigtext, ImageContainer} from "../Detail.style"
//import HandleMoreModals from "./HandleMoreModals";

const DropdownMenuAbility = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [abilities, setAbilities] = useState(null);
  const [arrow, setArrow] = useState(arrowDown);
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
      setArrow(arrowUp);
    } else {
      setCondition(false);
      setArrow(arrowDown);
    }
  };

  const openModal = (event) => {
    event.preventDefault();
    setShowModal((prew) => !prew);
  };

  // if(condition){
  //   arrow = arrowDown;
  // }else {
  //   arrow = arrowUp;
  // }
  return (
    <Container>
      <Button onClick={onClick}>
        <span style={{margin:"0.25rem"}}>Abilites</span>
        <img src={arrow} width="10" height="10" />
      </Button>
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
    </Container>
  );
};

export default DropdownMenuAbility;
