import React, { Component } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Provider } from "react-redux";

import NotFound from "./NotFound";
import LoginPage from "./LoginPage";
import AppMain from "./AppMain";

class PrivateRoute extends Component {
  render() {
    if (this.props.isAuthenticated) {
      return <AppMain />;
    } else {
      return <Redirect to="/login" />;
    }
  }
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isLoged
  };
};
PrivateRoute = connect(mapStateToProps)(PrivateRoute);

const Root = ({ store }) =>
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route exact path="/" component={PrivateRoute} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>;

export default Root;
