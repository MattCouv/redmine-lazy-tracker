import axios from "axios";
import { setCurrentUser } from "./users/actions/";
import { setCredentials } from "./auth/actions/credentials";
import { isLoading } from "./appActions";
import { login } from "./auth/actions/login";

const loadingWrapper = (dispatch, promise) => {
  dispatch(isLoading(true));
  return promise.then(res => dispatch(isLoading(false)));
};

export const setAuthorization = credentials => {
  const { baseURL, username, password } = credentials;
  axios.defaults.auth = {
    username: username || "",
    password: password || ""
  };
  axios.defaults.headers.common["X-baseURL"] = baseURL || "";
};

export const getCurrentUser = () => {
  return axios.get("/api/users/current.json");
};
