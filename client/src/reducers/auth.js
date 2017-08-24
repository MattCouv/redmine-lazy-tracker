import { combineReducers } from "redux";
const credentials = (state = {}, action) => {
  switch (action.type) {
    case "SET_CREDENTIALS":
      return action.credentials;
    default:
      return state;
  }
};

const isLoged = (state = false, { type }) => {
  switch (type) {
    case "LOGIN":
      return true;
    case "LOGOUT":
      return false;
    default:
      return state;
  }
};

export const auth = combineReducers({
  isLoged,
  credentials
});
