import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import LoginRoute from "./login/";
import AppRoute from "./App/";

const Root = ({ store }) =>
  <Provider store={store}>
    <Router>
      <Switch>
        <LoginRoute exact path="/login" />
        <AppRoute path="/*" />
      </Switch>
    </Router>
  </Provider>;

export default Root;
