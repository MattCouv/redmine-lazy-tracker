import Axios from "axios";
import { setCurrentUser } from "./user";
import { setAuthorization } from "../api/Redmine";

export const setCredentials = credentials => ({
  type: "SET_CREDENTIALS",
  credentials
});
export const login = () => ({
  type: "LOGIN"
});
export const logout = () => ({
  type: "LOGOUT"
});
export const authentifyUser = credentials => {
  return dispatch => {
    setAuthorization(credentials);
    return Axios.get("/api/users/current.json").then(res => {
      dispatch(login());
      dispatch(setCredentials(credentials));
      dispatch(setCurrentUser(res.data.user));
    });
  };
};

export const logoutUser = () => {
  return dispatch => {
    dispatch(logout());
    dispatch(setCredentials({}));
    dispatch(setCurrentUser({}));
  };
};
