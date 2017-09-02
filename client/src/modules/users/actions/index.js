import axios from "axios";

export const setCurrentUser = user => {
  return {
    type: "SET_USER",
    user
  };
};

export const getCurrentUser = () => {
  const url = "/api/users/current.json";
  return axios.get(url);
};
