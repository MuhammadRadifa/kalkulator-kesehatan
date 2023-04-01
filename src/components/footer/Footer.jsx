import React from 'react';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineGithub, AiOutlineInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='relative z-10 bg-main font-Poppins text-white'>
      <div className='container mx-auto px-4 py-20 sm:px-0 sm:py-40'>
        <div className='grid w-full justify-between sm:grid-cols-3'>
          <div className='mb-7'>
            <h1 className='mb-5 text-xl font-semibold sm:mb-10 sm:text-2xl md:text-3xl'>Kalkulator Kesehatan</h1>
            <p className='text-slate-200'>
              Kami adalah tim yang berdedikasi untuk membantu Anda menjaga kesehatan Anda dengan memberikan alat yang
              dapat membantu Anda menghitung berbagai aspek kesehatan Anda. Kalkulator kesehatan kami dirancang untuk
              memberikan informasi yang akurat dan bermanfaat bagi Anda.
            </p>
          </div>
          <div className='mb-7 sm:mx-auto'>
            <h1 className='mb-5 text-xl font-semibold sm:mb-10 sm:text-2xl md:text-3xl'>Company</h1>
            <div className='flex flex-col gap-5 text-slate-200'>
              <a href='#tentang'>Tentang</a>
              <a href='#layanan'>Layanan</a>
              <a href='#kontak'>Kontak</a>
              <a href={'/disclaimer'}>Disclaimer</a>
            </div>
          </div>
          <div className='sm:mx-auto'>
            <h1 className='mb-5 text-xl font-semibold sm:mb-10 sm:text-2xl md:text-3xl'>Ikuti Kami</h1>
            <div className='flex gap-x-3'>
              <FiFacebook className='text-4xl' />
              <AiOutlineGithub className='text-4xl' />
              <AiOutlineInstagram className='text-4xl' />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
