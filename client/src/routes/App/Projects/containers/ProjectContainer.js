import React, { Component } from "react";
import { connect } from "react-redux";
import { getProjectIssues } from "modules/issues/actions/";
import { getProject } from "modules/projects/actions/";
import Issues from "../components/Issues";
import { isLoading } from "modules/appActions";
import ReactPaginate from "react-paginate";

class ProjectContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: [],
      offset: 0,
      limit: 10
    };
  }
  componentDidMount() {
    const { project } = this.props.match.params;
    this.loadProject(project);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.project != this.props.match.params.project) {
      this.loadProject(nextProps.match.params.project);
    }
  }

  loadProject = project => {
    return this.props.getProject(project).then(res =>
      this.props
        .getProjectIssues(project)
        .then(res =>
          this.setState({
            issues: res.data.issues,
            pageCount: Math.ceil(res.data.total_count / res.data.limit)
          })
        )
        .then(res => this.props.isLoading(false))
    );
  };
  handlePageClick = data => {
    let selected = data.selected;
    let offset = Math.ceil(selected * this.state.limit);
    this.props.isLoading(true);
    this.props
      .getProjectIssues(this.props.projects.currentProject, {
        offset,
        limit: this.state.limit
      })
      .then(res =>
        this.setState({
          issues: res.data.issues,
          pageCount: Math.ceil(res.data.total_count / res.data.limit)
        })
      )
      .then(res => this.props.isLoading(false));
  };
  render() {
    return (
      <div>
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={<a href="">...</a>}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
        <Issues issues={this.state.issues} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    projects: state.projects
  };
};
export default connect(mapStateToProps, {
  getProjectIssues,
  getProject,
  isLoading
})(ProjectContainer);
