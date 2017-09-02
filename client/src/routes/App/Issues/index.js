import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import IssueContainer from "./containers/IssueContainer";

class IssuesRoute extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/issues">
          <p>issues</p>
        </Route>
        <Route path="/issues/:issue" component={IssueContainer} />
      </Switch>
    );
  }
}

export default IssuesRoute;
