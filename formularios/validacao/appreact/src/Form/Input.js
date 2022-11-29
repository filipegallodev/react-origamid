import React from "react";

const Input = ({ id, label, onChange, ...props }) => {
  return (
    <React.Fragment>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} name={id} onChange={onChange} {...props} />
    </React.Fragment>
  );
};

export default Input;
