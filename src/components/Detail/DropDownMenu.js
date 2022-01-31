import {useState, useContext, useEffect} from "react";
import {Button, Container} from "../Detail/Abilities/DropdownMenu.styles";
import arrowDown from "../../Assets/angle-arrow-down.png";
import arrowUp from "../../Assets/up-arrow-angle.png";
import ListItem from "./Abilities/ListItem";
import {ContextList} from "../Context/ContextProvider";
import Modal from "./Abilities/Modal";
//tutaj trzeba żeby było lokalne set state, bo inaczej lipka

const DropdownMenu = ({name, ability, held_items}) => {
  const context = useContext(ContextList);
  // //const [itemsToShow, setItemsToShow] = useState("");
  const [arrow, setArrow] = useState(arrowUp);
  const [isActive, setIsActive] = useState(false);
  const [abilities, setAbilities] = useState([]);
  const [abilityURL, setAbilityURL] = useState("");

  const [itemsToShow, setItemsToShow] = useState([]);
  useEffect(() => {
    // setAbilityURL(ability.url);
    // setItemsToShow(held_items);
    setAbilities(ability);
    setItemsToShow(held_items);
    // getAbilites();
  }, []);

  const togglingArrows = () => {
    if (arrow === arrowDown) {
      setArrow(arrowUp);
    } else {
      setArrow(arrowDown);
    }
  };

  const clickHandlerArrows = () => {
    setIsActive(!isActive);
    togglingArrows();
  };

  // const getAbilites = async () => {
  //   try {
  //     const response = await fetch(abilityURL);
  //     const data = await response.json();
  //     context.setAbilityGer(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleModalClick = () => {
    // getAbilites();
    context.setIsModalVisible(!context.isModalVisible);
  };
  //name, abilities, held_items
  // console.log(name, abilities, itemsToShow);
  return (
    <Container>
      <Button onClick={clickHandlerArrows}>
        <span style={{margin: "0.25rem"}}> {name} </span>
        <img src={arrow} width="8" height="8" alt="" />
      </Button>

      {/* {{name} === "Held Items" && */}
      {isActive && <ListItem item={itemsToShow} />}

      {/* {{name} === "Ability" && */}
      {isActive &&
        abilities &&
        abilities.map((item) => {
          console.log(item);
          return (
            <div key={item.url}>
              <div onClick={handleModalClick}>
                {item.name}
                {context.isModalVisible && <Modal description={item} />}
              </div>{" "}
            </div>
          );
        })}
    </Container>
  );
};

export default DropdownMenu;

{
  /* <div>
{(isActive &&
  ({name} === "Held Items") ?
    (<ListItem item={held_items} />)
    :(abilities &&
        abilities.map((item) => {
        return <ListItem key={item.url} item={item.name} abilities={abilities} />
        }
        )
    )
)}
</div> */
  {
    /* <ListItem
key={item.url}
item={item.name}
abilities={abilities}
/> */
  }
}
