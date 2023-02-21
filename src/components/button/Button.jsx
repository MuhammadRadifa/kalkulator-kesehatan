import React from 'react';

const Button = ({ children, className }) => {
  return (
    <button type='submit' className={`${className} rounded bg-main px-4 py-2 font-semibold text-white shadow-md`}>
      {children}
    </button>
  );
};

export default Button;
