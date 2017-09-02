import React from "react";
import { render } from "react-dom";
import Root from "./routes/";
import StoreConfigurator from "./modules/store";
import throttle from "lodash/throttle";
import { saveState } from "./modules/LocalStorage";
import registerServiceWorker from "./registerServiceWorker";
import { setAuthorization } from "./modules/appActions";

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
