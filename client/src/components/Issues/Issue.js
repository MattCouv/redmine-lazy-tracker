import React from "react";
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

export default Issue;

// <li id={"issue_" + issue.id} className="issue" data-id={issue.id}>

//   </li>;
