import React from "react";

const Button = ({ text, input }) => {
  return (
    <button type={input || "submit"} className="button">
      {text}
    </button>
  );
};

export default Button;
