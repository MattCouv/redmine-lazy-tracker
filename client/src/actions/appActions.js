export const isLoading = loading => {
  return dispatch => {
    dispatch({ type: loading ? "IS_LOADING" : "NOT_LOADING" });
  };
};
