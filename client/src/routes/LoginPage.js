import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "../components/Form/TextField";
import Button from "../components/Button";
import PropTypes from "prop-types";
import { authentifyUser } from "../actions/authActions";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      isLoading: false,
      auth: this.props.auth || {
        isLoged: false,
        credentials: {}
      }
    };

    if (this.state.auth.isLoged)
      this.props
        .authentifyUser(this.state.auth.credentials)
        .then(res => this.context.router.history.push("/"))
        .catch(err => console.log(err));
  }
  onSubmit = event => {
    event.preventDefault();
    this.props
      .authentifyUser(this.state.auth.credentials)
      .then(res => this.context.router.history.push("/"))
      .catch(err => console.log(err));
  };
  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      auth: Object.assign({}, this.state.auth, {
        credentials: Object.assign({}, this.state.auth.credentials, {
          [name]: value
        })
      })
    });
  };

  render() {
    const { baseURL, username, password } = this.state.auth.credentials;
    return (
      <div className="login-page">
        <h1 className="title">Lazy-Redmine</h1>
        <form onSubmit={this.onSubmit} className="login-form">
          <TextField
            label="Adresse de redmine"
            placeholder="Url"
            name="baseURL"
            value={baseURL}
            onChange={this.handleInputChange}
          />
          <TextField
            label="Identifiant"
            placeholder="Adresse email"
            name="username"
            value={username}
            onChange={this.handleInputChange}
          />
          <TextField
            label="Mot de passe"
            type="password"
            name="password"
            value={password}
            onChange={this.handleInputChange}
          />
          <Button text="Se connecter" />
        </form>
      </div>
    );
  }
}
LoginPage.contextTypes = {
  router: PropTypes.object.isRequired
};
LoginPage.PropTypes = {
  auth: PropTypes.shape({
    isLoged: PropTypes.bool.isRequired,
    credentials: PropTypes.object.isRequired
  }),
  authentifyUser: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps, { authentifyUser })(LoginPage);
