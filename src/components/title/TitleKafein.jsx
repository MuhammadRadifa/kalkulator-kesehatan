import React from 'react';
import { Kafein } from '../../assets';
import { FormTitle } from '../../layout';

const TitleKafein = () => {
  return (
    <FormTitle>
      <img src={Kafein} alt='Kalkulator' className='mb-9' />
      <h1 className='mb-9 text-5xl font-semibold text-gray-700'>Kalkulator Kafein</h1>
      <p className='text-slate-400'>
        Kalkulator kafein adalah aplikasi yang membantu pengguna menghitung jumlah kafein yang mereka konsumsi dari
        minuman seperti kopi, teh, minuman energi, dan lain sebagainya.
      </p>
    </FormTitle>
  );
};

export default TitleKafein;
