import { useContext } from "react";
import { ContextList } from "../../Context/ContextProvider";
import DropdownMenu from "../DropDownMenu";

const DropdownMenuAbility = () => {
  const context = useContext(ContextList);
  const name = "Ability";
  const items = context.pokemon.abilities.map((item) => {
    return item.ability;
  });
  return <DropdownMenu name={name} ability={items} />;
};

export default DropdownMenuAbility;
