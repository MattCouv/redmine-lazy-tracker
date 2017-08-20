export const addCredentials = (baseURL, username, password) => {
  return {
    type: "ADD_CREDENTIALS",
    baseURL,
    username,
    password
  };
};

export const setUser = user => {
  return {
    type: "SET_USER",
    user
  };
};
