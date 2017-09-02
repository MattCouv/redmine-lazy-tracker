import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Login from "./containers/Login";

const LoginRoute = ({ isLoged, ...rest }) =>
  <Route
    {...rest}
    render={props =>
      !isLoged
        ? <Login {...props} />
        : <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />}
  />;
const mapStateToProps = state => {
  return {
    isLoged: state.auth.isLoged
  };
};
export default connect(mapStateToProps)(LoginRoute);
