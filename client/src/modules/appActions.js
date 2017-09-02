import axios from "axios";
import { setCredentials } from "./auth/actions/credentials";
import { setCurrentUser } from "./users/actions/";
import { login, logout } from "./auth/actions/login";
import { getCurrentUser } from "./users/actions/";

export const ucfirst = str => {
  const f = str.charAt(0).toUpperCase();
  return f + str.substr(1);
};
export const setAuthorization = credentials => {
  const { baseURL, username, password } = credentials;
  axios.defaults.auth = {
    username: username || "",
    password: password || ""
  };
  axios.defaults.headers.common["X-baseURL"] = baseURL || "";
};

export const logoutUser = () => {
  return dispatch => {
    dispatch(logout());
    dispatch(setCredentials({}));
    dispatch(setCurrentUser({}));
  };
};

export const loginUser = credentials => {
  return dispatch => {
    setAuthorization(credentials);
    return getCurrentUser().then(res => {
      dispatch(login());
      dispatch(setCredentials(credentials));
      dispatch(setCurrentUser(res.data.user));
    });
  };
};

export const isLoading = loading => {
  return { type: loading ? "IS_LOADING" : "NOT_LOADING" };
};
