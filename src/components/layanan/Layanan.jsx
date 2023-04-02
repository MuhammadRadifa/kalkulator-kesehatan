import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HiArrowLongRight } from 'react-icons/hi2';
import Button from '../button/Button';
import { GlobalContext } from '../../context/GlobalContext';

const Layanan = () => {
  const { dataAplikasi } = useContext(GlobalContext);
  return (
    <section id='layanan' className='bg-gray-50 font-Poppins'>
      <div className='container mx-auto py-20 px-4 sm:px-0 sm:py-40'>
        <div className='mb-12 text-center'>
          <h2 className='font-black text-main sm:text-2xl'>LAYANAN</h2>
          <h3 className='mx-auto text-xl font-semibold text-gray-700 sm:text-3xl md:w-[500px] md:text-4xl'>
            Tubuh yang sehat berawal dari sesuatu yang sehat.
          </h3>
        </div>
        <div className='flex flex-wrap justify-around'>
          {dataAplikasi &&
            dataAplikasi.map((element, index) => {
              return (
                <div key={index} className={`mb-6 w-full md:w-1/3 md:p-10`} data-aos='fade-up'>
                  <div
                    className={`${element.color} grid h-full rounded-lg border-t-8 bg-white p-10 text-slate-600 shadow-md`}
                  >
                    <div>
                      <img src={element.icon} alt='Kalkulator' className='mx-auto w-28 md:mx-0 md:mb-0' />
                      <h2 className='my-4 text-xl font-semibold md:text-3xl'>{element.title}</h2>
                      <p className='mb-4 text-sm md:text-base'>{element.desc}</p>
                    </div>
                    <a href={element.path} className='self-end'>
                      <Button className={`group flex items-center gap-3 hover:opacity-90`}>
                        Coba Sekarang{' '}
                        <span className='text-xl font-bold group-hover:translate-x-2'>
                          <HiArrowLongRight />
                        </span>
                      </Button>
                    </a>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Layanan;
