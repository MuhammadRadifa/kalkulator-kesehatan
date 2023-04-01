import React, { useState } from 'react';
import Button from '../button/Button';
import Swal from 'sweetalert2';

const Kontak = () => {
  const [field, setField] = useState({ name: '', email: '', pesan: '' });
  const onChangeHandler = (event) => {
    setField({ ...field, [event.target.name]: event.target.value });
  };

  const onSubmmitHandler = (event) => {
    event.preventDefault();
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'email mu sudah berhasil terkirim',
      showConfirmButton: false,
      timer: 1500,
    }).finally(() => {
      setField({ name: '', email: '', pesan: '' });
    });
  };
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
            <form onSubmit={onSubmmitHandler}>
              <div className='mb-3'>
                <h3 className='font-semibold text-main'>Nama</h3>
                <input
                  type='text'
                  name='name'
                  value={field.name}
                  placeholder='Masukkan nama anda'
                  className='w-full rounded bg-slate-100 px-6 py-2'
                  onChange={onChangeHandler}
                  required
                />
              </div>
              <div className='mb-3'>
                <h3 className='font-semibold text-main'>Email</h3>
                <input
                  type='email'
                  name='email'
                  value={field.email}
                  placeholder='Masukkan email anda'
                  className='w-full rounded bg-slate-100 px-6 py-2'
                  onChange={onChangeHandler}
                  required
                />
              </div>
              <div className='mb-3'>
                <h3 className='font-semibold text-main'>Pesan</h3>
                <textarea
                  className='h-52 w-full resize-none rounded bg-slate-100 p-6'
                  name='pesan'
                  value={field.pesan}
                  id='pesan'
                  cols='30'
                  rows='10'
                  placeholder='Masukkan pesan anda'
                  onChange={onChangeHandler}
                  required
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
