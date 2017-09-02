import { createStore, applyMiddleware, compose } from "redux";
import RootReducer from "./reducer";
import { loadState } from "./LocalStorage";
import thunk from "redux-thunk";
import { enableBatching } from "redux-batched-actions";

const StoreConfigurator = () => {
  const persitedState = loadState();
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    enableBatching(RootReducer),
    persitedState,
    composeEnhancers(applyMiddleware(thunk))
  );
};
export default StoreConfigurator;
