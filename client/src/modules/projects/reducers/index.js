import { combineReducers } from "redux";

import { projectsAllIds, projectsById, currentProject } from "./projects";

export const projects = combineReducers({
  projectsAllIds,
  projectsById,
  currentProject
});
