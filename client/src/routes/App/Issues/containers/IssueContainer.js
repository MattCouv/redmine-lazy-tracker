import React, { Component } from "react";
import { connect } from "react-redux";
import { getIssue } from "../../../../modules/issues/actions/";
import { ucfirst } from "../../../../modules/appActions";
import Textile from "../components/Textile";
import IssueHeader from "../components/IssueHeader";
import frenchStrings from "react-timeago/lib/language-strings/fr";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
import TimeAgo from "react-timeago";

const formatter = buildFormatter(frenchStrings);
class IssueContainer extends Component {
  componentDidMount() {
    this.props.getIssue(this.props.match.params.issue);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.issue != this.props.match.params.issue) {
      this.props.getIssue(nextProps.match.params.issue);
    }
  }

  render() {
    const { issue, baseURL } = this.props;
    return (
      <div className="issuePage">
        <main className="issue-content">
          <IssueHeader issue={issue} baseURL={baseURL} />
          <div className="issue-description">
            <h1>
              {issue.subject}
            </h1>
            <div className="description">
              <Textile text={issue.description} />
            </div>
          </div>
          <div className="discussion-timeline">
            {issue.journals.map(journal => {
              return (
                <div key={journal.id} className="timeline-comment-wrapper">
                  <div className="avatar-parent-child timeline-comment-avatar">
                    <a href="/timdorr">
                      <img
                        alt="@timdorr"
                        className="avatar rounded-1"
                        height="44"
                        src={
                          this.props.baseURL +
                          "/account/get_avatar/" +
                          journal.user.id
                        }
                        width="44"
                      />
                    </a>
                  </div>
                  <div className="timeline-comment">
                    <div className="timeline-comment-header">
                      <h3 className="timeline-comment-header-text">
                        <strong>{journal.user.name}</strong> à commenté il y a {" "}
                        {
                          <TimeAgo
                            date={journal.created_on}
                            formatter={formatter}
                          />
                        }
                      </h3>
                    </div>
                    <div className="comment-body">
                      <Textile text={journal.notes} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    issue: state.issue,
    baseURL: state.auth.credentials.baseURL
  };
};

export default connect(mapStateToProps, {
  getIssue
})(IssueContainer);
// withRouter(IssueContainer);
