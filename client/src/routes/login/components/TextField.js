import React from "react";
import PropTypes from "prop-types";

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

TextField.PropTypes = {
  onChange: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string
};

export default TextField;
