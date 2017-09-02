import React, { Component } from "react";
import { connect } from "react-redux";
import SelectFilter from "../components/SelectFilter";
import AppBar from "material-ui/AppBar";
import PropTypes from "prop-types";
// import AppMenuIcon from "./AppMenuIcon";
import IconButton from "material-ui/IconButton";
import ProjectTitle from "../components/ProjectTitle";
import RightMenu from "../components/RightMenu";
import { logoutUser } from "../../../modules/appActions";
import { setCurrentProject } from "../../../modules/projects/actions/";

const styles = {
  fixed: { position: "fixed", top: 0 }
};

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      issue: 0
    };
  }
  // shouldComponentUpdate(nextProps) {
  //   if (
  //     nextProps.projects.projectsAllIds.toString() ==
  //     this.props.projects.projectsAllIds.toString()
  //   ) {
  //     console.log("no rerender projects equals");
  //     return false;
  //   }
  //   return true;
  // }
  onChange = e => {
    const issue = e.target.value;
    console.log(typeof issue);
    if (issue > 0) {
      this.setState({ issue });
    }
  };
  onSubmit = e => {
    e.preventDefault();
    if (this.state.issue > 0) {
      this.context.router.history.push("/issues/" + this.state.issue);
    }
  };
  toggleFilter = e => {
    this.setState({ open: !this.state.open });
  };
  render() {
    const { currentProject, projectsById } = this.props.projects;
    return (
      <div className="navbar">
        <AppBar
          style={styles.fixed}
          title={
            <ProjectTitle
              project={projectsById[currentProject]}
              open={this.state.open}
            />
          }
          onTitleTouchTap={this.toggleFilter}
          iconElementRight={
            <RightMenu
              logout={this.props.logoutUser}
              baseURL={this.props.baseURL}
              onSubmit={this.onSubmit}
              onChange={this.onChange}
            />
          }
        >
          <SelectFilter
            listItems={projectsById}
            open={this.state.open}
            toggle={this.toggleFilter}
            setCurrentProject={this.props.setCurrentProject}
          />
        </AppBar>
      </div>
    );
  }
}
NavBar.contextTypes = {
  router: PropTypes.object.isRequired
};
const mapStateToProps = (state, newProps) => {
  return {
    newProps,
    projects: state.projects,
    baseURL: state.auth.credentials.baseURL
    // loading: state.loading
  };
};
export default connect(mapStateToProps, { logoutUser, setCurrentProject })(
  NavBar
);
