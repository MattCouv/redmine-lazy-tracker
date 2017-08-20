import React from "react";
import { render } from "react-dom";
import Root from "./components/Root";
import StoreConfigurator from "./components/store";
import throttle from "lodash/throttle";
import { saveState } from "./components/LocalStorage";
import registerServiceWorker from "./registerServiceWorker";

import "./styles/css/index.css";
const store = StoreConfigurator();
store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);
render(<Root store={store} />, document.getElementById("root"));
registerServiceWorker();
