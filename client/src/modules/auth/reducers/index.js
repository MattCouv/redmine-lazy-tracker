import { combineReducers } from "redux";
import { credentials } from "./credentials";
import { isLoged } from "./login";

export const auth = combineReducers({
  isLoged,
  credentials
});
