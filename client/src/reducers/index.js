import { combineReducers } from "redux";
import { user } from "./user";
import { projects } from "./projects";
import { issues } from "./issues";

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
  credentials,
  user,
  projects,
  issues
});
export default RootReducer;
