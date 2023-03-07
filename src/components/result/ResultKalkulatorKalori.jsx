import React from 'react';
import { Karbo, Lemak, Protein } from '../../assets';
import { Result } from '../../layout';

const ResultKalkulatorKalori = ({ data, status }) => {
  const { totalCalorie, Makro, formula } = data;
  return (
    <Result status={status}>
      <h1 className='mb-9 text-6xl font-semibold text-gray-700'>Hasil Kalkulasi</h1>
      <div className='mb-9 h-48 w-48 rounded-full bg-gradient-to-br from-sky-300 to-blue-900 p-5'>
        <div className='flex h-full w-full flex-col items-center justify-center gap-2 rounded-full bg-white'>
          <p className='text-xl'>Total</p>
          <h3 className='text-4xl font-bold'>{totalCalorie}</h3>
          <p className='text-xl'>Kalori</p>
        </div>
      </div>
      <div>
        <h2 className='mb-4 text-left'>Makro/Konsumsi Harian</h2>
        <div className='grid grid-cols-3 gap-4'>
          <div className='flex flex-col items-center justify-center rounded-md border border-main p-4'>
            <img src={Protein} alt='Protein' className='mb-3' />
            <h3 className='text-2xl font-bold'>{Makro.protein} g</h3>
            <p className='text-gray-400'>Protein</p>
          </div>
          <div className='flex flex-col items-center justify-center rounded-md border border-main p-4'>
            <img src={Karbo} alt='Protein' className='mb-3' />
            <h3 className='text-2xl font-bold'>{Makro.karbohidrat} g</h3>
            <p className='text-gray-400'>Karbohidrat</p>
          </div>
          <div className='flex flex-col items-center justify-center rounded-md border border-main p-4'>
            <img src={Lemak} alt='Protein' className='mb-3' />
            <h3 className='text-2xl font-bold'>{Makro.lemak} g</h3>
            <p className='text-gray-400'>Lemak</p>
          </div>
        </div>
        <h2 className='my-4 text-left text-xl font-semibold text-gray-700'>Formula kami untuk anda</h2>
        <div className='flex flex-col items-center gap-4 md:flex-row'>
          <p className='text-left text-sm text-gray-500'>
            {formula.desc}{' '}
            <span className='block text-sm text-main underline decoration-main'>Cek jumlah kalori makanan disini</span>
          </p>
          <img src={formula.diagram} alt='Formula' />
        </div>
      </div>
    </Result>
  );
};

export default ResultKalkulatorKalori;
