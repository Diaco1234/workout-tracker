import React from 'react';

const Toggle = ({ options, onChange }) => {
  return (
    <div className="toggle">
      {options.map((option, index) => (
        <button key={index} onClick={() => onChange(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default Toggle;
