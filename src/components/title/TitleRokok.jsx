import React from 'react';
import { Smoke } from '../../assets';
import { FormTitle } from '../../layout';

const TitleRokok = ({ status }) => {
  return (
    <FormTitle status={status}>
      <img src={Smoke} alt='Kalkulator' className='mb-9' />
      <h1 className='mb-9 text-5xl font-semibold text-gray-700'>Kalkulator Rokok</h1>
      <p className='p-6 text-sm text-slate-400 md:p-0 md:text-base'>
        Kalkulator rokok adalah alat yang digunakan untuk menghitung biaya atau pengeluaran yang terkait dengan
        kebiasaan merokok. Kalkulator semacam ini dapat membantu seseorang memperkirakan berapa banyak uang yang
        dihabiskan untuk membeli rokok selama periode tertentu dan berapa banyak uang yang dapat dihemat dengan
        menghentikan kebiasaan merokok.
      </p>
    </FormTitle>
  );
};

export default TitleRokok;
