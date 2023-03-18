import React from 'react';
import { Result } from '../../layout';

const ResultKalkulatorDepresi = ({ data, status }) => {
  const { skor, hasil } = data;
  return (
    <Result status={status}>
      <h1 className='mb-9 text-6xl font-semibold text-gray-700'>Hasil Kalkulasi</h1>
      <p className='mb-4 text-2xl font-semibold text-gray-500'>Total Skor Anda : {skor}</p>
      <h2 className='mb-7 text-2xl font-semibold text-gray-500'>
        Tingkat Depresi Anda :
        <span className={`${skor >= 4 ? 'text-yellow-400' : 'text-green-400'} block text-4xl`}>{hasil.diagnosa}</span>
      </h2>
      <img src={hasil.image} alt='Emoji' className='mb-7 w-72' />
      <p className='text-gray-500'>{hasil.desc}</p>
    </Result>
  );
};

export default ResultKalkulatorDepresi;
