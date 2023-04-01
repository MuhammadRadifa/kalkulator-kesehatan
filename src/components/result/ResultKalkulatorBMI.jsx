import React from 'react';
import { Link } from 'react-router-dom';
import { ColorMan, ColorWoman } from '../../assets';
import { Result } from '../../layout';
import Button from '../button/Button';

const ResultKalkulatorBMI = ({ status, data }) => {
  const { total, hasil, tinggi, berat, gender } = data;
  return (
    <Result status={status}>
      <h1 className='mb-9 text-6xl font-semibold text-gray-700'>Hasil Kalkulasi</h1>
      <img src={gender == 'pria' ? ColorMan : ColorWoman} alt='Image Gender' className='mb-9' />
      <p className='mb-4 text-xl text-gray-400'>Hasil kalkulasi anda</p>
      {hasil.title}
      <div className='my-4 flex items-center gap-20'>
        <p className='text-gray-500'>
          Tinggi Badan : <span className='font-semibold text-gray-600'>{tinggi * 100}</span> cm
        </p>
        <p className='text-gray-500'>
          Berat Badan : <span className='font-semibold text-gray-600'>{berat}</span> kg
        </p>
      </div>
      <img src={hasil.imageParameter} alt='Parameter' />
      <div className='my-4 text-left'>
        <p>BMI Kamu : {total}</p>
        {hasil.pesan}
        <p className='my-4'>Gunakan kalkulator kalori untuk mengetahui kebutuhan kalori anda setiap harinya.</p>
        <Link to={'/kalkulator-kalori'}>
          <Button>Kalkulator Kalori</Button>
        </Link>
      </div>
    </Result>
  );
};

export default ResultKalkulatorBMI;
