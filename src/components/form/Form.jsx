import React, { useState } from 'react';
import { Kalkulator } from '../../assets';
import Gender from '../gender/Gender';
import IntensitasAktivitas from '../intensitas-aktivitas/IntensitasAktivitas';
import ParameterTubuh from '../parameter-tubuh/ParameterTubuh';
import Target from '../target/Target';

const Form = () => {
  const [input, setInput] = useState({});

  const handleInput = (e) => {
    e.preventDefault();
    // setInput({
    //   umur,
    //   tinggi,
    //   berat,
    //   gender,
    //   aktivitas,
    //   target,
    // });
    // console.info(input);
  };

  return (
    <section>
      <div className='mb-20 mt-40 flex w-full justify-end overflow-hidden px-4 font-Poppins sm:my-20 md:my-0 md:ml-32 md:h-screen'>
        <div className='container mx-auto grid items-center justify-center gap-y-10 md:h-screen md:grid-cols-2'>
          <div className='flex flex-col items-center justify-center text-center md:px-40'>
            <img src={Kalkulator} alt='Kalkulator' className='mb-9' />
            <h1 className='mb-9 text-6xl font-semibold text-gray-700'>Kalkulator Kalori</h1>
            <p className='text-slate-400'>
              Kalkulator kalori kami adalah alat yang membantu Anda menghitung kebutuhan kalori harian Anda berdasarkan
              usia, tinggi, berat badan, dan tingkat aktivitas fisik. Dengan mengetahui kebutuhan kalori Anda, Anda
              dapat mengontrol asupan kalori Anda dan menjaga berat badan yang sehat.
            </p>
          </div>
          <div className='md:px-32'>
            <form onSubmit={handleInput}>
              <div className='w-full rounded-lg bg-main p-10 text-white'>
                <h2 className='mb-6 text-2xl font-semibold'>Parameter Tubuh</h2>
                <Gender />
                <ParameterTubuh />
                <IntensitasAktivitas />
                <Target />
                <button
                  type='submit'
                  className='w-full rounded bg-white py-3 text-center text-xl text-main hover:bg-darkBlue hover:text-white'
                >
                  Kirim
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
