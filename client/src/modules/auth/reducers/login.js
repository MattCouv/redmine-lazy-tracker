import { LOGIN, LOGOUT } from "../constants";

export const isLoged = (state = false, { type }) => {
  switch (type) {
    case LOGIN:
      return true;
    case LOGOUT:
      return false;
    default:
      return state;
  }
};
