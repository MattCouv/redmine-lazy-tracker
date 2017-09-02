import React from "react";
import AppMenuIcon from "./AppMenuIcon";
import SearchInput from "./SearchInput";

const RightMenu = ({ logout, baseURL, onSubmit, onChange }) =>
  <div className="MenuRight">
    <SearchInput
      placeholder="Demande"
      onSubmit={onSubmit}
      onChange={onChange}
    />
    <AppMenuIcon logout={logout} baseURL={baseURL} />
  </div>;

export default RightMenu;
