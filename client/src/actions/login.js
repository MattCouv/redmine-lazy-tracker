export const addCredentials = (baseURL, username, password) => {
  return {
    type: "ADD_CREDENTIALS",
    baseURL,
    username,
    password
  };
};
