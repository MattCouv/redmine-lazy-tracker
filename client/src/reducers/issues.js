export const issues = (state = [], action) => {
  switch (action.type) {
    case "SET_ISSUES": {
      return action.issues || state;
    }
    default:
      return state;
  }
};
