import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { GlobalContext } from '../../context/GlobalContext';

const Sidebar = () => {
  const { dataAplikasi } = useContext(GlobalContext);

  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <aside className='font-Poppins'>
      <div
        className={`fixed left-0 top-0 right-0 z-50 mx-auto grid w-full grid-cols-3 items-center justify-between px-4 py-3 md:mx-0 md:w-72 md:grid-cols-1 md:bg-transparent md:px-0 md:backdrop-blur-md lg:mix-blend-screen`}
      >
        <div className='col-span-2 md:py-10'>
          <Link to={'/'} onClick={() => window.scroll(0, 0)}>
            <h1 className='border-white stroke-white text-xl font-bold text-main md:pl-5'>Kalkulator Kesehatan</h1>
          </Link>
        </div>
        <div
          className={`absolute ${
            nav ? '-top-[1000px]' : 'top-0 text-4xl'
          }  left-0 grid h-screen w-full grid-cols-3 items-center justify-center bg-white bg-opacity-75 font-medium text-gray-700 duration-500 ease-in-out sm:static md:flex md:flex-col md:items-stretch md:justify-start md:bg-transparent `}
        >
          {dataAplikasi &&
            dataAplikasi.map((element, index) => {
              return (
                <Link to={element.path} onClick={() => window.scroll(0, 0)} key={index}>
                  <div className='group flex items-center gap-x-4 py-4 hover:bg-main md:px-5 md:pl-4'>
                    <img src={element.icon} alt='Kalkulator Kalori' className='mx-auto w-20 md:mx-0 md:w-10' />
                    <h2 className='hidden text-lg font-semibold group-hover:text-white md:block'>{element.title}</h2>
                  </div>
                </Link>
              );
            })}
        </div>
        <div className='justify-self-end'>
          <button onClick={handleNav} className='relative z-10 sm:hidden'>
            {nav ? <AiOutlineMenu /> : <AiOutlineClose />}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
