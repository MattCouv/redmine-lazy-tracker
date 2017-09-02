import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import App from "./containers/App";

const AppRoute = ({ component: Component, isLoged, ...rest }) =>
  <Route
    {...rest}
    render={props =>
      isLoged
        ? <App {...props} />
        : <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />}
  />;
const mapStateToProps = state => {
  return {
    isLoged: state.auth.isLoged
  };
};
export default connect(mapStateToProps)(AppRoute);
