import React from "react";
import { render } from "react-dom";
import Root from "./components/Root";
import { store } from "./components/store";
import throttle from "lodash/throttle";
import { saveState } from "./components/LocalStorage";
import registerServiceWorker from "./registerServiceWorker";

import "./styles/css/index.css";

store.subscribe(
  throttle(() => {
    saveState({
      credential: store.getState().credential
    });
  }, 1000)
);
render(<Root store={store} />, document.getElementById("root"));
registerServiceWorker();
