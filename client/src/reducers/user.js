export const user = (state = {}, action) => {
  switch (action.type) {
    case "SET_USER": {
      return action.user || state;
    }
    default:
      return state;
  }
};
