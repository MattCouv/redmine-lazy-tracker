import React, { Component } from "react";
import { connect } from "react-redux";

import SearchInput from "./SearchInput";
import SelectFilter from "./SelectFilter";
import AppBar from "material-ui/AppBar";
import PropTypes from "prop-types";
import AppMenuIcon from "./AppMenuIcon";
import IconButton from "material-ui/IconButton";
import NavigationExpandMore from "material-ui/svg-icons/navigation/expand-more";
import NavigationExpandLess from "material-ui/svg-icons/navigation/expand-less";
import { getCurrentProject } from "../actions/projects";

const styles = {
  fixed: { position: "fixed", top: 0 },
  title: {
    cursor: "pointer",
    display: "flex"
  }
};

const MenuRight = ({ logout, baseURL }) =>
  <div className="MenuRight">
    <SearchInput placeholder="Demande" />
    <AppMenuIcon logout={logout} baseURL={baseURL} />
  </div>;

const ProjectTitle = ({ title, open }) =>
  <span style={styles.title}>
    <span>
      {title}
    </span>
    <IconButton>
      {!open
        ? <NavigationExpandMore color="white" />
        : <NavigationExpandLess color="white" />}
    </IconButton>
  </span>;

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggleFilter = e => {
    this.setState({ open: !this.state.open });
  };
  render() {
    return (
      <div className="navbar">
        <AppBar
          style={styles.fixed}
          title={
            <ProjectTitle
              title={this.props.projectName || "Aucun projet"}
              open={this.state.open}
            />
          }
          onTitleTouchTap={this.toggleFilter}
          iconElementRight={
            <MenuRight
              logout={this.props.logout}
              baseURL={this.props.baseURL}
            />
          }
        />
        <SelectFilter
          listItems={this.props.projects}
          open={this.state.open}
          toggle={this.toggleFilter}
          setCurrentProject={this.props.setCurrentProject}
        />
      </div>
    );
  }
}
export default NavBar;
