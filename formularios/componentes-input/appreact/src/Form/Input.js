import React from "react";

const Input = ({ id, label, setValue, ...props }) => {
  return (
    <React.Fragment>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        name={id}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    </React.Fragment>
  );
};

export default Input;
