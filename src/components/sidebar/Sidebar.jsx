import React from 'react';
import { BMI, Burger, Kalkulator } from '../../assets';

const Sidebar = () => {
  return (
    <aside>
      <div className='fixed bottom-0 w-full text-main backdrop-blur-sm md:top-0 md:h-screen md:w-72 md:py-14'>
        <h1 className='mb-11 hidden text-2xl font-bold md:block md:pl-5'>Kalkulator Kesehatan</h1>
        <div className='flex items-center justify-evenly md:grid'>
          <div className='group flex items-center gap-x-4 py-5 hover:bg-main  md:pl-5'>
            <img src={Kalkulator} alt='Kalkulator Kalori' className='w-10' />
            <h2 className='hidden text-lg font-semibold group-hover:text-white md:block'>Kalkulator Kalori</h2>
          </div>
          <div className='group flex items-center gap-x-4 py-5 hover:bg-main  md:pl-5'>
            <img src={BMI} alt='Kalkulator Kalori' className='w-10' />
            <h2 className='hidden text-lg font-semibold group-hover:text-white md:block'>Kalkulator BMI</h2>
          </div>
          <div className='group flex items-center gap-x-4 py-5 hover:bg-main  md:pl-5'>
            <img src={Burger} alt='Kalkulator Kalori' className='w-10' />
            <h2 className='hidden text-lg font-semibold group-hover:text-white md:block'>Cek Jumlah Kalori Makanan</h2>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
