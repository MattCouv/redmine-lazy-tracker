import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import TimeAgo from "components/TimeAgo";

const Issue = ({ issue }) =>
  <li id={"issue_" + issue.id} className="issue">
    <div className="">
      <div className="status">
        {issue.status.name}
      </div>
      <div className="Subject">
        <Link to={`/issues/${issue.id}`}>
          {issue.subject}
        </Link>
      </div>
      <div className="date">
        #{issue.id} ouvert <TimeAgo date={issue.created_on} /> par{" "}
        {issue.author.name} dernière mise à jours{" "}
        <TimeAgo date={issue.updated_on} />
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
