import React from "react";
import PropTypes from "prop-types";

const Issue = ({ issue }) =>
  <li id={"issue_" + issue.id} className="issue">
    <div className="">
      <div className="status">
        {issue.status.name}
      </div>
      <div className="Subject">
        {issue.subject}
      </div>
      <div className="date">
        #{issue.id} ouvert ... par {issue.author.name} dernière mise à jours{" "}
        {issue.updated_on}
      </div>
    </div>
  </li>;

Issue.propTypes = {
  issue: PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: PropTypes.shape({
      name: PropTypes.string.isRequired
    }),
    subject: PropTypes.string.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired
    }),
    updated_on: PropTypes.string.isRequired
  }).isRequired
};

export default Issue;

// <li id={"issue_" + issue.id} className="issue" data-id={issue.id}>

//   </li>;
