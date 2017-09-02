import React from "react";
import Issue from "./Issue";

const Issues = ({ issues }) => {
  return (
    <ul className="issues-list">
      {issues.map(issue => {
        return <Issue key={issue.id} issue={issue} />;
      })}
    </ul>
  );
};

export default Issues;
