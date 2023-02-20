import React from 'react';

const Button = ({ children, className }) => {
  return (
    <a href='#' className={`${className} rounded bg-main px-4 py-2 font-semibold text-white shadow-md`}>
      {children}
    </a>
  );
};

export default Button;
