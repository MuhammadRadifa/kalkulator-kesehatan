import React from 'react';
import Button from '../button/Button';

const Kontak = () => {
  return (
    <section id='kontak' className='font-Poppins'>
      <div data-aos='fade-up' className='container mx-auto px-4 py-20 sm:px-0 md:py-40'>
        <div>
          <div className='mb-12 text-center'>
            <h2 className='font-black text-main sm:text-2xl'>KONTAK</h2>
            <h3 className='mx-auto text-xl font-semibold text-gray-700 sm:text-3xl md:w-[500px] md:text-4xl'>
              Hubungi Kami
            </h3>
          </div>
          <div className='mx-auto max-w-[800px]'>
            <form action=''>
              <div className='mb-3'>
                <h3 className='font-semibold text-main'>Nama</h3>
                <input type='text' placeholder='Masukkan nama anda' className='w-full rounded bg-slate-200 px-6 py-2' />
              </div>
              <div className='mb-3'>
                <h3 className='font-semibold text-main'>Email</h3>
                <input
                  type='email'
                  placeholder='Masukkan email anda'
                  className='w-full rounded bg-slate-200 px-6 py-2'
                />
              </div>
              <div className='mb-3'>
                <h3 className='font-semibold text-main'>Pesan</h3>
                <textarea
                  className='h-52 w-full resize-none rounded bg-slate-200 p-6'
                  name='pesan'
                  id='pesan'
                  cols='30'
                  rows='10'
                  placeholder='Masukkan pesan anda'
                ></textarea>
              </div>
              <Button className='block w-full text-center'>Kirim</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kontak;
