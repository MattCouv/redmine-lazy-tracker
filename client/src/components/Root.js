import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Provider } from "react-redux";
import Redmine from "../api/Redmine";

import NotFound from "../routes/NotFound";
import Login from "../routes/Login";
import App from "./App";

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) =>
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />}
  />;

const Root = ({ store }) =>
  <Provider store={store}>
    <Redmine store={store}>
      <Router>
        <Switch>
          <PrivateRoute
            exact
            path="/"
            isAuthenticated={store.getState().user}
            component={App}
          />
          <Route path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Redmine>
  </Provider>;

export default Root;
