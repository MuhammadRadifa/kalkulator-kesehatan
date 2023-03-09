import React from 'react';

const FormLayout = ({ children }) => {
  return (
    <section>
      <div className='mb-20 mt-40 flex w-full items-center justify-end overflow-hidden px-4 font-Poppins sm:my-20 md:my-0 md:h-screen md:pl-40'>
        <div className='container mx-auto grid items-center justify-center gap-y-10 md:h-screen md:grid-cols-2'>
          {children}
        </div>
      </div>
    </section>
  );
};

export default FormLayout;
