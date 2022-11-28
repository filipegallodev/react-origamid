import React from "react";

const Radio = ({ options, value, setValue, ...props }) => {
  return (
    <React.Fragment>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            value={option}
            checked={value === option}
            onChange={({ target }) => setValue(target.value)}
            {...props}
          />
          {option}
        </label>
      ))}
    </React.Fragment>
  );
};

export default Radio;
