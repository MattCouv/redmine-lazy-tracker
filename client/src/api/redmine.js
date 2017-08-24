import axios from "axios";
import { setCurrentUser } from "../actions/user";
import { setProjects } from "../actions/projects";

export const setAuthorization = credentials => {
  const { baseURL, username, password } = credentials;
  axios.defaults.auth = {
    username: username || "",
    password: password || ""
  };
  axios.defaults.headers.common["X-baseURL"] = baseURL || "";
};

export const getProjects = () => {
  return dispatch => {
    return axios
      .get("api/projects.json?limit=100")
      .then(res => dispatch(setProjects(res.data.projects)));
  };
};
// class Redmine extends Component {
//   genApiConfig = () => {
//     const { baseURL, username, password } = this.props.credentials;
//     const config = {
//       headers: { "X-baseURL": baseURL || "" },
//       auth: {
//         username: username || "",
//         password: password || ""
//       }
//     };
//     return config;
//   };

//   getChildContext() {
//     return {
//       redmine: {
//         getCurrentUser: this.getCurrentUser,
//         getProjects: this.getProjects,
//         getIssues: this.getIssues
//       }
//     };
//   }
//   getCurrentUser = () => {
//     return axios
//       .get("/api/users/current.json", this.genApiConfig())
//       .then(res => res.data)
//       .then(data => this.props.dispatch(setCurrentUser(data.user)))
//       .catch(error => this.props.dispatch(setCurrentUser({})));
//   };
//   getProjects = () => {
//     console.log("coucou");
//     return dispatch => {
//       return axios
//         .get("api/projects.json?limit=100", this.genApiConfig())
//         .then(res => dispatch(setProjects(res.data.projects)))
//         .catch(error => console.log(error));
//     };
//   };
//   getIssues = () => {
//     return axios
//       .get("api/issues.json", this.genApiConfig())
//       .then(res => res.data)
//       .then(data => data.issues)
//       .catch(error => console.log(error));
//   };
//   render() {
//     return this.props.children;
//   }
// }
// Redmine.PropTypes = {
//   credentials: PropTypes.object.isRequired
// };
// Redmine.childContextTypes = {
//   redmine: PropTypes.object
// };

// const mapStateToProps = state => {
//   return {
//     credentials: state.auth.credentials
//   };
// };
// export default connect(mapStateToProps, dispatch => ({ dispatch }))(Redmine);
