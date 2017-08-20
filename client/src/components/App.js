import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import NavBar from "../components/NavBar";
import { setIssues } from "../actions/issues";
import IssuesContainer from "../routes/IssuesContainer";

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.context.store.dispatch(this.getIssues());
  }
  getIssues = () => {
    const { redmine } = this.context;
    return dispatch => {
      return redmine.getIssues().then(issues => {
        console.log(issues);
        dispatch(setIssues(issues));
      });
    };
  };
  render() {
    return (
      <div className="app-containers">
        <NavBar />
        <div className="app-body">
          <Switch>
            <Route exact path="/" component={IssuesContainer} />
            <Route path="/issues" component={IssuesContainer} />
          </Switch>
        </div>
      </div>
    );
  }
}

App.contextTypes = {
  store: PropTypes.object,
  redmine: PropTypes.object
};

export default App;
