export const setProjects = projects => {
  return {
    type: "SET_PROJECTS",
    projects
  };
};

export const setProjectsById = projects => {
  return {
    type: "SET_PROJECTS_BY_ID",
    projects
  };
};

export const setCurrentProject = id => {
  return dispatch => {
    dispatch({
      type: "SET_CURRENT_PROJECT",
      project: id
    });
  };
};
