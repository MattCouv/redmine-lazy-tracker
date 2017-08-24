import React from "react";
import { render } from "react-dom";
import Root from "./routes/Root";
import StoreConfigurator from "./components/store";
import throttle from "lodash/throttle";
import { saveState } from "./components/LocalStorage";
import registerServiceWorker from "./registerServiceWorker";
import { setAuthorization } from "./api/Redmine";

import "./styles/css/index.css";
const store = StoreConfigurator();
store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);
setAuthorization(store.getState().auth.credentials);
render(<Root store={store} />, document.getElementById("root"));
registerServiceWorker();
