import { SET_CREDENTIALS } from "../constants";

export const setCredentials = credentials => ({
  type: SET_CREDENTIALS,
  credentials
});
