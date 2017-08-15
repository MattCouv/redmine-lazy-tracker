import { combineReducers } from "redux";

const credentials = (
  state = {
    baseURL: "",
    username: "",
    password: ""
  },
  action
) => {
  switch (action.type) {
    case "ADD_CREDENTIALS": {
      return {
        baseURL: action.baseURL || state.baseURL,
        username: action.username || state.username,
        password: action.password || state.password
      };
    }
    default:
      return state;
  }
};

const RootReducer = combineReducers({
  credentials
});
export default RootReducer;
