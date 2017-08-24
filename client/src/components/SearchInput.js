import React from "react";
import SearchIcon from "./SearchIcon";

const SearchInput = ({ value, name, onSubmit, placeholder, onChange }) => {
  return (
    <form className="searchInput_form" onSubmit={onSubmit}>
      <button className="searchInput_icon" type="submit">
        <SearchIcon />
      </button>
      <input
        type="text"
        className="searchInput_input"
        value={value}
        onChange={onChange}
        placeholder={placeholder || ""}
      />
    </form>
  );
};

export default SearchInput;
