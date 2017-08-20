export const projects = (state = [], action) => {
  switch (action.type) {
    case "SET_PROJECTS": {
      return action.projects || state;
    }
    default:
      return state;
  }
};
