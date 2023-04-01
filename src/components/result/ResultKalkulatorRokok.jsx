import React from 'react';
import { Result } from '../../layout';

const ResultKalkulatorRokok = ({ status, data }) => {
  const { result, totalBiaya } = data;
  return (
    <Result status={status}>
      <div className='text-left text-gray-600'>
        <h1 className='mb-9 text-6xl font-semibold text-gray-700'>Hasil Kalkulasi</h1>
        <h2 className='mb-4 text-2xl font-medium text-gray-700'>Total Biaya Rokok :</h2>
        <div className='mb-8 w-full text-left'>
          <div className='flex w-full gap-2 md:grid md:grid-cols-3 md:justify-between '>
            <p className='flex w-1/2 justify-between text-xl font-medium md:col-span-2 md:block md:w-auto'>
              Biaya Mingguan <span>:</span>
            </p>
            <p className='text-xl font-bold '>{convert(totalBiaya.mingguan)}</p>
          </div>
          <div className='flex w-full gap-2 md:grid md:grid-cols-3 md:justify-between'>
            <p className='flex w-1/2 justify-between text-xl font-medium md:col-span-2 md:block md:w-auto'>
              Biaya Bulanan <span>:</span>{' '}
            </p>
            <p className='text-xl font-bold '>{convert(totalBiaya.bulanan)}</p>
          </div>
          <div className='flex w-full gap-2 md:grid md:grid-cols-3 md:justify-between'>
            <p className='flex w-1/2 justify-between text-xl font-medium md:col-span-2 md:block md:w-auto'>
              Biaya Tahunan <span>:</span>{' '}
            </p>
            <p className='text-xl font-bold '>{convert(totalBiaya.tahunan)}</p>
          </div>
        </div>
        <h2 className='mb-5 text-2xl font-medium text-gray-700'>Total Rokok yang dihisap :</h2>
        <p className='mb-8 text-xl font-medium'>
          <span className='mr-2 font-bold text-red-500'>{result.totalRokok}</span>
          Batang Rokok
        </p>
        <h2 className='mb-4 text-2xl font-medium text-gray-700'>Kategori :</h2>
        {result.tingkatan == 'ringan' && <p className='mb-5 text-xl font-semibold text-yellow-500'>{result.desc}</p>}
        {result.tingkatan == 'sedang' && <p className='mb-5 text-xl font-semibold text-orange-500'>{result.desc}</p>}
        {result.tingkatan == 'berat' && <p className='mb-5 text-xl font-semibold text-red-500'>{result.desc}</p>}
        <ul className='text-xl font-medium'>
          {result.diagnosa &&
            result.diagnosa.map((item, index) => {
              return (
                <li className='mb-3 text-justify indent-4' key={index}>
                  {item}
                </li>
              );
            })}
        </ul>
      </div>
    </Result>
  );
};

const convert = (number) => {
  let tempNum = String(Math.floor(number)).split('').reverse();
  let rupiah = '';

  for (let i = 0; i < tempNum.length; i++) {
    if ((i + 1) % 3 == 0 && i != tempNum.length - 1) {
      tempNum[i] = `.${tempNum[i]}`;
    }
  }
  rupiah = `Rp. ${tempNum.reverse().join('')}`;
  return rupiah;
};

export default ResultKalkulatorRokok;
