import React from 'react';
import { Kalkulator } from '../../assets';

const FormTitle = ({ status }) => {
  return (
    <div
      id='ini'
      className={`flex ${
        status && 'order-1 md:order-none md:translate-x-full '
      } flex-col items-center justify-center text-center md:h-full md:px-40`}
    >
      <img src={Kalkulator} alt='Kalkulator' className='mb-9' />
      <h1 className='mb-9 text-6xl font-semibold text-gray-700'>Kalkulator Kalori</h1>
      <p className='text-slate-400'>
        Kalkulator kalori kami adalah alat yang membantu Anda menghitung kebutuhan kalori harian Anda berdasarkan usia,
        tinggi, berat badan, dan tingkat aktivitas fisik. Dengan mengetahui kebutuhan kalori Anda, Anda dapat mengontrol
        asupan kalori Anda dan menjaga berat badan yang sehat.
      </p>
    </div>
  );
};

export default FormTitle;
