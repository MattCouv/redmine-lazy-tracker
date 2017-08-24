export const projects = (state = [], action) => {
  switch (action.type) {
    case "SET_PROJECTS": {
      return action.projects || state;
    }
    default:
      return state;
  }
};

export const currentProject = (state = 0, action) => {
  switch (action.type) {
    case "SET_CURRENT_PROJECT":
      return action.project;
    default:
      return state;
  }
};
