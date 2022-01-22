import React from "react";
import { SearchBox } from "./SearchBar.styles";

const SearchBar = ({ searchTerm, handleChangeSearch, placeholder }) => {
  //added destructuring here
  return (
    <div>
      <SearchBox
        value={searchTerm}
        onChange={handleChangeSearch}
        placeholder={placeholder}
      />
    </div>
  );
};
export { SearchBar };
