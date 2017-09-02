import React from "react";
import PropTypes from "prop-types";
import TextField from "./TextField";
import Button from "./Button";

const Form = ({ title, credentials, onSubmit, handleInputChange }) =>
  <div className="login-page">
    <h1 className="title">
      {title}
    </h1>
    <form onSubmit={onSubmit} className="login-form">
      <TextField
        label="Adresse de redmine"
        placeholder="Url"
        name="baseURL"
        value={credentials.baseURL}
        onChange={handleInputChange}
      />
      <TextField
        label="Identifiant"
        placeholder="Adresse email"
        name="username"
        value={credentials.username}
        onChange={handleInputChange}
      />
      <TextField
        label="Mot de passe"
        type="password"
        name="password"
        value={credentials.password}
        onChange={handleInputChange}
      />
      <Button text="Se connecter" />
    </form>
  </div>;

Form.PropTypes = {
  title: PropTypes.string.isRequired,
  credentials: PropTypes.shape({
    baseURL: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
  }),
  onSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired
};

export default Form;
