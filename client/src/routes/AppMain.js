import React from "react";
import { purple900, pinkA200 } from "material-ui/styles/colors";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import App from "../components/App";
import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: purple900,
    accent1Color: pinkA200
  },
  appBar: {
    height: 50
  }
});

const AppMain = () => {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <App />
    </MuiThemeProvider>
  );
};

export default AppMain;
