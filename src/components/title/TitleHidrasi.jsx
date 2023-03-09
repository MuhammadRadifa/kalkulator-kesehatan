import React from 'react';
import { Hidration } from '../../assets';
import { FormTitle } from '../../layout';

const TitleHidrasi = ({ status }) => {
  return (
    <FormTitle status={status}>
      <img src={Hidration} alt='Kalkulator' className='mb-9' />
      <h1 className='mb-9 text-6xl font-semibold text-gray-700'>Kalkulator Hidrasi</h1>
      <p className='text-slate-400'>
        Kalkulator hidrasi kami membantu Anda memperkirakan jumlah air yang dibutuhkan setiap hari berdasarkan berat
        badan. Ini membantu menjaga keseimbangan elektrolit dan mencegah dehidrasi, serta meningkatkan kinerja organ dan
        kesehatan secara keseluruhan.
      </p>
    </FormTitle>
  );
};

export default TitleHidrasi;
