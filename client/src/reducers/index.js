import { combineReducers } from "redux";
import { user } from "./user";
import { projects, currentProject, projectsById } from "./projects";
import { issues, issue } from "./issues";
import { auth } from "./auth";

const loading = (state = false, { type }) => {
  switch (type) {
    case "IS_LOADING":
      return true;
    case "NOT_LOADING":
      return false;
    default:
      return state;
  }
};
const RootReducer = combineReducers({
  auth,
  user,
  projectsById,
  projects,
  currentProject,
  issues,
  issue,
  loading
});
export default RootReducer;
