import React, { Component } from "react";
import PropTypes from "prop-types";
import Issues from "../components/Issues/Issues";

class IssuesContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      issues: this.context.store.getState().issues,
      limit: 0
    };
  }
  render() {
    return <Issues issues={this.state.issues} />;
  }
}

IssuesContainer.contextTypes = {
  store: PropTypes.object
};

export default IssuesContainer;
