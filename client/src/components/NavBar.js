import React, { Component } from "react";
import SearchInput from "./SearchInput";
import SelectFilter from "./SelectFilter";
import PropTypes from "prop-types";

class NavBar extends Component {
  render() {
    const state = this.context.store.getState();
    return (
      <nav className="navbar">
        <ul className="navbar_menu">
          <li className="flex_item navbar_menu_items">
            <button className="navbar_menu_toggle" />
          </li>
          <li className="flex_item navbar_menu_items">
            <SearchInput />
          </li>
        </ul>
      </nav>
    );
  }
}

NavBar.contextTypes = {
  store: PropTypes.object,
  redmine: PropTypes.object
};

export default NavBar;
