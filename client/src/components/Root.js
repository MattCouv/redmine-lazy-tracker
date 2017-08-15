import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Provider } from "react-redux";

import NotFound from "../routes/NotFound";
import Login from "../routes/Login";
import Issues from "../routes/Issues";

let isAuthenticated = true;
const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) =>
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />}
  />;

const Root = ({ store }) =>
  <Provider store={store}>
    <Router>
      <Switch>
        <PrivateRoute
          exact
          path="/"
          isAuthenticated={store.getState().isLogged}
          component={Issues}
        />
        <Route path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>;

export default Root;
