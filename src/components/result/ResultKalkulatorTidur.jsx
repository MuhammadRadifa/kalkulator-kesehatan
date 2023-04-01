import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { Result } from '../../layout';

const ResultKalkulatorTidur = ({ status, data, jamTidur }) => {
  const { handler } = useContext(GlobalContext);
  const { twoDigits } = handler;
  const { jam, menit } = jamTidur;

  return (
    <Result status={status}>
      <div className='text-left'>
        <h1 className='mb-9 text-center text-6xl font-semibold text-gray-700'>Hasil Kalkulasi</h1>
        <p className='mb-11 text-xl'>
          Untuk bangun di jam{' '}
          <span className='font-medium'>
            {twoDigits(jam)} : {twoDigits(menit)}
          </span>
          , kamu sebaiknya pergi tidur pada jam:
        </p>
        <div>
          {data &&
            data.map((d, index) => {
              return (
                <div key={index} className='relative mb-4 rounded-lg bg-slate-100 p-6'>
                  {index === 0 && (
                    <p className='absolute top-4 right-4 text-lg font-semibold text-yellow-400'>
                      Disarankan<span className='text-pink-500'>*</span>
                    </p>
                  )}
                  <p className='text-2xl font-semibold text-main'>{d.jamWaktu}</p>
                  <p className='text-slate-500'>
                    {d.durasi} jam tidur, {d.siklus} siklus tidur
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </Result>
  );
};

export default ResultKalkulatorTidur;
