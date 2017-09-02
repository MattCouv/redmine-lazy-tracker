import {
  SET_PROJECTS,
  SET_PROJECTS_BY_ID,
  SET_CURRENT_PROJECT
} from "../constants";

export const projects = (state = {}, action) => {
  switch (action.type) {
    case SET_PROJECTS: {
      return action.projects;
    }
    default:
      return state;
  }
};

export const projectsById = (state = [], action) => {
  switch (action.type) {
    case SET_PROJECTS_BY_ID:
      return action.projects;
    default:
      return state;
  }
};

export const currentProject = (state = 0, action) => {
  switch (action.type) {
    case SET_CURRENT_PROJECT:
      return action.project;
    default:
      return state;
  }
};
