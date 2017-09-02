import React from "react";
import ActionSearch from "material-ui/svg-icons/action/search";

const style = {
  position: "absolute",
  height: "30px",
  width: "30px",
  padding: "5px",
  zIndex: 3
};
const SearchInput = ({ value, name, onSubmit, placeholder, onChange }) =>
  <form className="searchInput_form" onSubmit={onSubmit}>
    <ActionSearch style={style} />
    <input
      type="text"
      className="searchInput_input"
      value={value}
      onChange={onChange}
      placeholder={placeholder || ""}
    />
  </form>;

export default SearchInput;
