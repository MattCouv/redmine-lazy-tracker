export const issues = (state = [], action) => {
  switch (action.type) {
    case "SET_ISSUES": {
      return action.issues || state;
    }
    default:
      return state;
  }
};

export const issue = (state = {}, action) => {
  switch (action.type) {
    case "SET_ISSUE":
      return action.issue;
    default:
      return state;
  }
};
