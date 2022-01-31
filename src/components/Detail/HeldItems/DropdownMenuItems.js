import {useState, useContext} from "react";
import {Button} from "./DropDown.styles";
import arrowDown from "../../../Assets/angle-arrow-down.png";
import arrowUp from "../../../Assets/up-arrow-angle.png";
import {ContextList} from "../../Context/ContextProvider";
import DropdownMenu from "../DropDownMenu";

const DropdownMenuItems = () => {
  const name = "Held Items";
  const context = useContext(ContextList);
  const items = context.pokemon.held_items.map((item) => {
    return item;
  });

  // const getAbilites = async () => {
  //   try {
  //     const response = await fetch(items.url);
  //     const data = await response.json();
  //     context.setAbilityGer(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  //console.log(items[0].item.name);



  return(
   (items[0]) ? (
    <DropdownMenu name={name} held_items={items[0].item.name} />
   ):(<div>No Held Items</div>)
   );

};

export default DropdownMenuItems;
