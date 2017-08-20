import axios from "axios";
import { Component } from "react";
import PropTypes from "prop-types";

class Redmine extends Component {
  genApiConfig = () => {
    const { store } = this.props;
    console.log(store.getState().credentials);
    const { baseURL, username, password } = store.getState().credentials;
    const config = {
      headers: { "X-baseURL": baseURL || "" },
      auth: {
        username: username || "",
        password: password || ""
      }
    };
    console.log(config);
    return config;
  };

  getChildContext() {
    return {
      redmine: {
        getCurrentUser: this.getCurrentUser,
        getProjects: this.getProjects,
        getIssues: this.getIssues
      }
    };
  }
  getCurrentUser = () => {
    return axios
      .get("/api/users/current.json", this.genApiConfig())
      .then(res => res.data)
      .then(data => data.user)
      .catch(error => console.log(error));
  };
  getProjects = () => {
    return axios
      .get("api/projects.json?include=issue_categories", this.genApiConfig())
      .then(res => res.data)
      .then(data => data.projects)
      .catch(error => console.log(error));
  };
  getIssues = () => {
    return axios
      .get("api/issues.json", this.genApiConfig())
      .then(res => res.data)
      .then(data => data.issues)
      .catch(error => console.log(error));
  };
  render() {
    return this.props.children;
  }
}

Redmine.childContextTypes = {
  redmine: PropTypes.object
};

export default Redmine;
