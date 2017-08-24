export const credentials = (state = {}, action) => {
  switch (action.type) {
    case "SET_CREDENTIALS": {
      return action.credentials;
    }
    default:
      return state;
  }
};
