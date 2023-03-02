import React from 'react';
import { BMI } from '../../assets';
import { FormTitle } from '../../layout';

const TitleBMI = ({ status }) => {
  return (
    <FormTitle status={status}>
      <img src={BMI} alt='Kalkulator' className='mb-9' />
      <h1 className='mb-9 text-6xl font-semibold text-gray-700'>Kalkulator BMI</h1>
      <p className='text-slate-400'>
        Kalkulator BMI kami adalah alat yang membantu Anda mengukur indeks massa tubuh (BMI) Anda. BMI adalah ukuran
        yang digunakan untuk menentukan apakah berat badan Anda sehat untuk tinggi badan Anda.
      </p>
    </FormTitle>
  );
};

export default TitleBMI;
