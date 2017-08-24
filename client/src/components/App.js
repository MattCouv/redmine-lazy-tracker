import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import IssuesContainer from "../routes/IssuesContainer";
import PropTypes from "prop-types";
import { getProjects } from "../api/Redmine";
import { getCurrentProject } from "../actions/projects";
import { logoutUser } from "../actions/authActions";

class App extends Component {
  componentDidMount() {
    this.props.getProjects();
  }
  render() {
    const currentProject = getCurrentProject(
      this.props.projects,
      this.props.currentProject
    );

    const projectName = currentProject.name || "Aucun Projet";

    return (
      <div className="app-containers">
        <NavBar
          projects={this.props.projects}
          projectName={projectName}
          setCurrentProject={this.props.setCurrentProject}
          logout={this.props.logoutUser}
          baseURL={this.props.baseURL}
        />
        <div className="app-body">coucou</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    projects: state.projects,
    currentProject: state.currentProject,
    baseURL: state.auth.credentials.baseURL
  };
};

const setCurrentProject = id => {
  return dispatch => {
    dispatch({
      type: "SET_CURRENT_PROJECT",
      project: id
    });
  };
};

export default connect(mapStateToProps, {
  getProjects,
  setCurrentProject,
  logoutUser
})(App);
