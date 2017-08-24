import React from "react";

const TextField = ({ onChange, label, name, value, type, placeholder }) => {
  return (
    <div className="textField">
      <label className="textField_label" htmlFor={name}>
        {label || name}
      </label>
      <input
        id={name}
        type={type || "text"}
        name={name}
        placeholder={placeholder}
        value={value || ""}
        className="textField_input"
        onChange={onChange}
      />
    </div>
  );
};

export default TextField;
