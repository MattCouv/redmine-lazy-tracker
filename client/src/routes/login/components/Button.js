import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, input }) => {
  return (
    <button type={input || "submit"} className="button">
      {text}
    </button>
  );
};

Button.PropTypes = {
  text: PropTypes.string.isRequired,
  input: PropTypes.string
};

export default Button;
