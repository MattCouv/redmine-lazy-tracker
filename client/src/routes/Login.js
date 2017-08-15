import React, { Component } from "react";
import { addCredentials } from "../actions/login";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    return (
      <form onSubmit={this.submitForm}>
        <input
          placeholder="Enter address"
          name="baseURL"
          value={this.state.baseURL}
          onChange={this.handleInputChange}
        />
        <br />
        <input
          placeholder="Enter your Username"
          name="username"
          value={this.state.username}
          onChange={this.handleInputChange}
        />
        <br />
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    );
  }
}

Login.contextTypes = {
  store: React.PropTypes.object
};

export default Login;
