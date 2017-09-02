import {
  SET_PROJECTS_BY_ID,
  SET_PROJECTS_ALL_IDS,
  SET_CURRENT_PROJECT,
  UPDATE_PROJECTS
} from "../constants";

export const projectsById = (state = {}, action) => {
  switch (action.type) {
    case SET_PROJECTS_BY_ID: {
      return action.projects;
    }
    case UPDATE_PROJECTS: {
      const { project } = action;
      return {
        ...state,
        [project.id]: project
      };
    }
    default:
      return state;
  }
};

export const projectsAllIds = (state = [], action) => {
  switch (action.type) {
    case SET_PROJECTS_ALL_IDS:
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
