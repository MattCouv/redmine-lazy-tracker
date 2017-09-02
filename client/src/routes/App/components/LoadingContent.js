import React from "react";
import CircularProgress from "material-ui/CircularProgress";

const LoadingContent = ({ loading }) => {
  return loading
    ? <div className="loading-screen">
        <div className="modal" />
        <div className="spinner">
          <CircularProgress color="#000" />
        </div>
      </div>
    : null;
};

export default LoadingContent;
