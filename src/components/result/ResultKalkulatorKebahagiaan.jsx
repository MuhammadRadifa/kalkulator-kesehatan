import React from 'react';
import { Result } from '../../layout';

const ResultKalkulatorKebahagiaan = ({ status, data }) => {
  const { hasil, skor } = data;
  return (
    <Result status={status}>
      <h1 className='mb-9 text-6xl font-semibold text-gray-700'>Hasil Kalkulasi</h1>
      <p className='mb-4 text-2xl font-semibold text-gray-500'>Total Skor Anda : {skor}</p>
      <h2 className='mb-7 text-2xl font-semibold text-gray-500'>
        Tingkat Kebahagian Anda :
        <span className={`${skor >= 20 ? 'text-green-400' : 'text-yellow-400'} block text-4xl`}>{hasil.parameter}</span>
      </h2>
      <img src={hasil.image} alt='Emoji' className='mb-7' />
      <p className='text-gray-500'>{hasil.pesan}</p>
    </Result>
  );
};

export default ResultKalkulatorKebahagiaan;
