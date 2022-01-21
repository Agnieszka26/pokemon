import React from "react";
import {SearchBox} from "./SearchBar.styles";

const SearchBar = (props) => {
  return (
    <div>
      <SearchBox
        value={props.searchTerm}
        onChange={props.handleChangeSearch}
        placeholder={props.placeholder}
      />
    </div>
  );
};
export {SearchBar};
