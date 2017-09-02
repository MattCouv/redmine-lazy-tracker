import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loginUser } from "../../../modules/appActions";
import Form from "../components/Form";

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
  }

  onSubmit = event => {
    event.preventDefault();
    this.props
      .loginUser(this.state.auth.credentials)
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
    const title = "Lazy-Redmine";
    return (
      <Form
        title={title}
        onSubmit={this.onSubmit}
        handleInputChange={this.handleInputChange}
        credentials={this.state.auth.credentials}
      />
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
  loginUser: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps, { loginUser })(LoginPage);
