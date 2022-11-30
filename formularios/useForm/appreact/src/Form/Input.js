import React from "react";

const Input = ({
  id,
  label,
  value,
  type,
  placeholder,
  onChange,
  onBlur,
  error,
}) => {
  return (
    <React.Fragment>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p>{error}</p>}
    </React.Fragment>
  );
};

export default Input;
