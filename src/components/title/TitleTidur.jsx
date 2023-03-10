import React from 'react';
import { BedSleep } from '../../assets';
import { FormTitle } from '../../layout';

const TitleTidur = ({ status }) => {
  return (
    <FormTitle status={status}>
      <img src={BedSleep} alt='Kalkulator' className='mb-9' />
      <h1 className='mb-9 text-6xl font-semibold text-gray-700'>Kalkulator Siklus Tidur</h1>
      <p className='text-slate-400'>
        Kalkulator siklus tidur adalah alat yang digunakan untuk membantu menghitung dan memantau pola tidur seseorang.
        Alat ini biasanya bekerja dengan mengumpulkan data dari pengguna tentang waktu tidur mereka, dan kemudian
        menggunakan algoritma untuk menganalisis data tersebut dan menghasilkan informasi tentang siklus tidur pengguna.
      </p>
    </FormTitle>
  );
};

export default TitleTidur;
