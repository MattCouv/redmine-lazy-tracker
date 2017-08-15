import { createStore } from "redux";
import RootReducer from "./../reducers";
import { loadState } from "./LocalStorage";

const persitedState = loadState();
const initialState = {
  isLogged: false,
  credentials: {
    baseURL: "",
    username: "",
    password: ""
  },
  currentUser: {},
  issues: [],
  currentIssue: {},
  projects: [],
  currentProject: {},
  timers: [],
  currentTimer: {},
  options: {}
};
export let store = createStore(
  RootReducer,
  persitedState || initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
