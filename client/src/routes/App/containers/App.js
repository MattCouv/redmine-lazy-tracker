import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { grey50, grey900 } from "material-ui/styles/colors";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import injectTapEventPlugin from "react-tap-event-plugin";
import NavBar from "./NavBar";
import IssuesRoute from "../Issues/";
import ProjectsRoute from "../Projects/";
import PropTypes from "prop-types";
import { getProjects, getIssue } from "modules/projects/actions/";
import LoadingContent from "../components/LoadingContent";
// import { getCurrentProject, setCurrentProject } from "../actions/projects";

injectTapEventPlugin();
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: grey50,
    textColor: grey900
  },
  appBar: {
    textColor: grey900,
    height: 50,
    boxShadow:
      "rgba(0, 0, 0, 0.12) 0px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 0px"
  }
});

class App extends Component {
  componentDidMount() {
    this.props.getProjects();
  }
  render() {
    // const projectName = "Aucun Projet";
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="app-containers">
          <NavBar />
          <div className="app-body">
            <LoadingContent loading={this.props.loading} />
            <Switch>
              <Route exact path="/">
                <p>Home Page</p>
              </Route>
              <Route path="/issues" component={IssuesRoute} />
              <Route path="/projects" component={ProjectsRoute} />
            </Switch>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    loading: state.loading
  };
};
export default connect(mapStateToProps, {
  getProjects
  // setCurrentProject,
  // logoutUser,
  // getIssue,
  // isLoading
})(App);
