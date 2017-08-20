import React, { Component } from "react";
import { addCredentials } from "../actions/login";
import TextField from "../components/Form/TextField";
import Button from "../components/Button";
import { setCurrentUser } from "../actions/user";
import PropTypes from "prop-types";

class Login extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = context.store.getState().credentials || {
      baseURL: "",
      username: "",
      password: ""
    };
  }
  submitForm = event => {
    event.preventDefault();
    const { store } = this.context;
    const { baseURL, username, password } = this.state;
    store.dispatch(addCredentials(baseURL, username, password));
    store.dispatch(this.logUser());
  };

  logUser = () => {
    const { redmine } = this.context;
    return dispatch => {
      return redmine.getCurrentUser().then(user => {
        dispatch(setCurrentUser(user));
      });
    };
  };
  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  render() {
    console.log(this.context.store.getState().credentials);
    return (
      <div className="login-page">
        <h1 className="title">Lazy-Redmine</h1>
        <form onSubmit={this.submitForm} className="login-form">
          <TextField
            input={{
              label: "Adresse de redmine",
              placeholder: "Url",
              name: "baseURL",
              value: this.state.baseURL
            }}
            onChange={this.handleInputChange}
          />
          <TextField
            input={{
              label: "Identifiant",
              placeholder: "Adresse email",
              name: "username",
              value: this.state.username
            }}
            onChange={this.handleInputChange}
          />
          <TextField
            input={{
              label: "Mot de passe",
              type: "password",
              name: "password",
              value: this.state.password
            }}
            onChange={this.handleInputChange}
          />
          <Button text="Se connecté" />
        </form>
      </div>
    );
  }
}

Login.contextTypes = {
  store: PropTypes.object,
  redmine: PropTypes.object
};

export default Login;
