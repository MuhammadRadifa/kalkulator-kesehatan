import React from 'react';
import { Gelas, Water } from '../../assets';
import { Result } from '../../layout';

const ResultKalkulatorHidrasi = ({ status, data }) => {
  const { liter, mili, gelas } = data;
  const totalGelas = [];
  for (let i = 0; i < gelas; i++) {
    totalGelas.push(<img key={i} src={Gelas} alt='Gelas' className='w-16' />);
  }
  return (
    <Result status={status}>
      <h1 className='mb-9 text-6xl font-semibold text-gray-700'>Hasil Kalkulasi</h1>
      <div className='relative -z-10 mb-10'>
        <img src={Water} alt='Water' className='w-64 md:w-72' />
        <h2 className='absolute bottom-12 left-1/2 -translate-x-1/2 text-4xl font-bold text-white'>{mili} ml</h2>
      </div>
      <p className='mb-10 text-left text-lg font-medium'>
        Jumlah <span className='text-main'>air</span> yang harus diminum: <span className='text-main'>{liter} </span>
        liter/hari atau setara dengan {gelas} gelas.
      </p>
      <div className='flex flex-wrap'>{totalGelas}</div>
    </Result>
  );
};

export default ResultKalkulatorHidrasi;
