import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const [isScroll, setIsScroll] = useState(false);

  window.addEventListener('scroll', () => {
    window.scrollY > 0 ? setIsScroll(true) : setIsScroll(false);
  });

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className='font-Poppins'>
      <div
        data-aos='fade-down'
        className={`${
          isScroll ? 'shadow-md backdrop-blur-sm' : ''
        } fixed left-0 top-0 right-0 z-10 mx-auto grid w-full grid-cols-3 items-center justify-between py-3 px-4 sm:px-44`}
      >
        <div className='col-span-2'>
          <h1 className='text-xl font-bold text-main'>Kalkulator Kesehatan</h1>
        </div>
        <div
          className={`absolute ${
            nav ? '-top-[1000px]' : 'top-0 text-4xl'
          }  left-0 flex h-screen w-full flex-col items-center justify-center gap-y-12 bg-white bg-opacity-75 font-medium text-gray-700 duration-500 ease-in-out sm:static sm:h-0 sm:w-auto sm:flex-row sm:justify-between`}
        >
          <a
            href='#tentang'
            className='relative after:absolute after:bottom-0 after:left-0 after:w-full after:origin-left after:scale-0 after:border-b-2 after:border-main after:duration-300 after:ease-in-out hover:after:scale-100'
          >
            Tentang
          </a>
          <a
            href='#layanan'
            className='relative after:absolute after:bottom-0 after:left-0 after:w-full after:origin-left after:scale-0 after:border-b-2 after:border-main after:duration-300 after:ease-in-out hover:after:scale-100'
          >
            Layanan
          </a>
          <a
            href='#kontak'
            className='relative after:absolute after:bottom-0 after:left-0 after:w-full after:origin-left after:scale-0 after:border-b-2 after:border-main after:duration-300 after:ease-in-out hover:after:scale-100'
          >
            Kontak
          </a>
        </div>
        <div className='justify-self-end'>
          <button onClick={handleNav} className='relative z-10 sm:hidden'>
            {nav ? <AiOutlineMenu /> : <AiOutlineClose />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
