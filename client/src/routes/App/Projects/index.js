import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import ProjectContainer from "./containers/ProjectContainer";

class ProjectsRoute extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/projects">
          <p>Projects</p>
        </Route>
        <Route path="/projects/:project" component={ProjectContainer} />
      </Switch>
    );
  }
}

export default ProjectsRoute;
