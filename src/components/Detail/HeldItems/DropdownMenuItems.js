import { useContext} from "react";
import {ContextList} from "../../Context/ContextProvider";
import DropdownMenu from "../DropDownMenu";

const DropdownMenuItems = () => {
  const name = "Held Items";
  const context = useContext(ContextList);
  const items = context.pokemon.held_items.map((item) => {
    return item;
  });

  


  return(
   (items[0]) ? (
    <DropdownMenu name={name} held_items={items[0].item.name} />
   ):(<div>No Held Items</div>)
   );

};

export default DropdownMenuItems;
