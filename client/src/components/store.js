import { createStore, applyMiddleware, compose } from "redux";
import RootReducer from "./../reducers";
import { loadState } from "./LocalStorage";
import thunk from "redux-thunk";

const StoreConfigurator = () => {
  const persitedState = loadState();
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const initialState = {
    isLogged: false,
    credentials: {
      baseURL: "",
      username: "",
      password: ""
    },
    user: {},
    issues: [],
    currentIssue: {},
    projects: [],
    project: {},
    timers: [],
    timer: {},
    options: {}
  };
  return createStore(
    RootReducer,
    persitedState || initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
};
export default StoreConfigurator;
