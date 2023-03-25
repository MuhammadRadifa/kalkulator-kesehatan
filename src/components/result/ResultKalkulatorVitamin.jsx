import React from 'react';
import { Result } from '../../layout';

const ResultKalkulatorVitamin = ({ data, status }) => {
  const { kategori, result } = data;
  return (
    <Result status={status}>
      <h1 className='mb-9 text-6xl font-semibold text-gray-700'>Hasil Kalkulasi</h1>
      <p className='md:text-x mb-9 text-lg font-medium text-slate-600'>
        Kebutuhan vitamin <span className='italic'>{kategori}</span> per hari
      </p>
      <div className='grid grid-cols-2 gap-5 md:gap-10'>
        {result &&
          result.map((item, index) => {
            return (
              <div key={index} className={`rounded-lg ${'border-' + item.color} border-t-8 p-10 shadow-md`}>
                <p className='mb-4 text-3xl font-semibold text-slate-600'>
                  {item.deskripsi} <span className='block text-lg text-slate-400 md:inline'>{item.satuan}</span>
                </p>
                <p className={`font-medium ${'text-' + item.color}`}>{item.nama}</p>
              </div>
            );
          })}
      </div>
    </Result>
  );
};

export default ResultKalkulatorVitamin;
