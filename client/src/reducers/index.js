import { combineReducers } from "redux";
import { user } from "./user";
import { projects, currentProject } from "./projects";
import { issues } from "./issues";
import { auth } from "./auth";

const RootReducer = combineReducers({
  auth,
  user,
  projects,
  currentProject,
  issues
});
export default RootReducer;
