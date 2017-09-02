import React from "react";
import Timer from "../components/Timer";
import TimeAgo from "components/TimeAgo";

const status = {
  3: {
    background: "#1aaa55"
  }
};
const IssueHeader = ({ issue, baseURL }) => {
  return (
    <header className="issue-header">
      <div style={status[issue.status.id]} className="status-box">
        <span>
          {issue.status.name}
        </span>
      </div>
      <strong>Demande #{issue.id}</strong>&nbsp;ouvert&nbsp;
      {<TimeAgo date={issue.created_on} />}&nbsp;par&nbsp;
      <strong>
        <img
          alt="@timdorr"
          className="avatar rounded-1"
          height="20"
          src={baseURL + "/account/get_avatar/" + issue.author.id}
          width="20"
        />
        {issue.author.name}
      </strong>
      <Timer />
    </header>
  );
};
export default IssueHeader;
