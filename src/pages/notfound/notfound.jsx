import React from 'react';
import { Medical } from '../../assets';
import { Link } from 'react-router-dom';
import { Button } from '../../components';
import { HiArrowLongRight } from 'react-icons/hi2';

const NotFound = () => {
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center gap-7 overflow-hidden'>
      <p className='text-4xl font-bold text-red-500'>Error!</p>
      <div className='flex gap-4 text-8xl font-bold text-slate-700 md:text-9xl'>
        <p>4</p>
        <img src={Medical} alt='Not Found' className='w-20 animate-bounce md:w-24' />
        <p>4</p>
      </div>
      <p className='text-2xl font-semibold text-slate-700 md:text-4xl'>Halaman Tidak Ditemukan</p>
      <Link to={'/'} className=''>
        <Button className={`group flex items-center gap-3 hover:opacity-90`}>
          ke Beranda{' '}
          <span className='text-xl font-bold group-hover:translate-x-2'>
            <HiArrowLongRight />
          </span>
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
