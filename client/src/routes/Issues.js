import React, { Component } from "react";
import Issue from "../components/Issues/Issue";
import Axios from "axios";
export default class Issues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: [],
      limit: 0
    };
    Axios.get("/api/issues")
      .then(res => res.data)
      .then(resp => {
        this.setState({ issues: resp.issues });
      })
      .catch(error => console.log("error"));
  }
  render() {
    const issues = this.state.issues.map(issue => {
      return <Issue key={issue.id} issue={issue} />;
    });
    console.log(issues);

    return (
      <ul>
        {this.state.issues.map(issue => <Issue key={issue.id} issue={issue} />)}
      </ul>
    );
  }
}
