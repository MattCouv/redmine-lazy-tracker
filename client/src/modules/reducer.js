import { combineReducers } from "redux";
import { user } from "./users/reducers/";
import { projects } from "./projects/reducers/";
import { auth } from "./auth/reducers/";
import { issues, issue } from "./issues/reducers/";

const loading = (state = false, { type }) => {
  switch (type) {
    case "IS_LOADING":
      return true;
    case "NOT_LOADING":
      return false;
    default:
      return state;
  }
};

const RootReducer = combineReducers({
  auth,
  user,
  projects,
  loading,
  issues,
  issue
});
export default RootReducer;
