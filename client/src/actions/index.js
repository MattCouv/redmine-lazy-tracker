export const login = ({ address, username, password, logged }) => {
  type: "USER_LOGIN", address, username, password, logged;
};
