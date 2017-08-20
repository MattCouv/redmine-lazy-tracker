import React from "react";

const TextField = ({ onChange, input }) => {
  const { label, name, value, placeholder, type } = input;
  return (
    <div className="textField">
      <label className="textField_label" htmlFor={name}>
        {label || name}
      </label>
      <input
        id={name}
        type={type || "text"}
        placeholder={placeholder || label}
        name={name}
        value={value}
        className="textField_input"
        onChange={onChange}
      />
    </div>
  );
};

export default TextField;
