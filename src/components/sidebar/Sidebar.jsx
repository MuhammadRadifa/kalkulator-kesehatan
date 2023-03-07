import React from 'react';
import { Link } from 'react-router-dom';
import { BMI, Hidration, Kalkulator } from '../../assets';
import { AiFillHome } from 'react-icons/ai';

const Sidebar = () => {
  return (
    <aside>
      <div className='fixed bottom-0 w-full bg-white text-main backdrop-blur-sm md:top-0 md:h-screen md:w-64 md:bg-transparent md:py-14'>
        <Link to={'/home'}>
          <h1 className='mb-11 hidden text-2xl font-bold md:block md:pl-5'>Kalkulator Kesehatan</h1>
        </Link>
        <div className='flex w-full items-center justify-evenly md:grid  md:justify-center'>
          <Link to={'/home'}>
            <AiFillHome className='rounded-full bg-main p-1 text-[40px] text-white md:hidden' />
          </Link>
          <Link to={'/kalkulator-kalori'}>
            <div className='group flex items-center gap-x-4 py-5 hover:bg-main md:px-5'>
              <img src={Kalkulator} alt='Kalkulator Kalori' className='w-10' />
              <h2 className='hidden text-lg font-semibold group-hover:text-white md:block'>Kalkulator Kalori</h2>
            </div>
          </Link>
          <Link to={'/kalkulator-bmi'}>
            <div className='group flex items-center gap-x-4 py-5 hover:bg-main md:px-5'>
              <img src={BMI} alt='Kalkulator Kalori' className='w-10' />
              <h2 className='hidden text-lg font-semibold group-hover:text-white md:block'>Kalkulator BMI</h2>
            </div>
          </Link>
          <Link to={'/kalkulator-hidrasi'}>
            <div className='group flex items-center gap-x-4 py-5 hover:bg-main md:px-5'>
              <img src={Hidration} alt='Kalkulator Kalori' className='w-10' />
              <h2 className='hidden text-lg font-semibold group-hover:text-white md:block'>Kalkulator Hidrasi</h2>
            </div>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
