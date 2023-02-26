import React from 'react';

const FormTitle = ({ status, children }) => {
  return (
    <div
      id='ini'
      className={`flex ${
        status && 'order-1 md:order-none md:translate-x-full '
      } flex-col items-center justify-center text-center md:h-full md:px-40`}
    >
      {children}
    </div>
  );
};

export default FormTitle;
