import React from "react";

const SearchBar = (props) => {
  return (
    <div>
      <input
        value={props.searchTerm}
        onChange={props.handleChangeSearch}
        placeholder={props.placeholder}
      />
    </div>
  );
};
export {SearchBar};
