import React from 'react';
import { BMI, Burger, Kalkulator } from '../../assets';
import Button from '../button/Button';

const Layanan = () => {
  return (
    <section id='layanan' className='bg-gray-100 font-Poppins'>
      <div className='container mx-auto py-20 px-4 sm:px-0 sm:py-40'>
        <div className='mb-12 text-center'>
          <h2 className='font-black text-main sm:text-2xl'>LAYANAN</h2>
          <h3 className='mx-auto text-xl font-semibold text-gray-700 sm:text-3xl md:w-[500px] md:text-4xl'>
            Tubuh yang sehat berawal dari sesuatu yang sehat.
          </h3>
        </div>
        <div>
          <div
            data-aos='fade-up'
            className='mb-10 grid items-center justify-center pb-6 text-center shadow-md md:grid-cols-2 md:text-left md:shadow-none'
          >
            <div>
              <img src={Kalkulator} alt='Kalkulator Kalori' className='mx-auto mb-6 w-32 md:w-40' />
            </div>
            <div>
              <h2 className='mb-4 text-2xl font-semibold text-main sm:text-3xl'>Kalkulator Kalori</h2>
              <p className='mb-4 text-sm text-gray-700 sm:text-base'>
                Kalkulator kalori kami adalah alat yang membantu Anda menghitung kebutuhan kalori harian Anda
                berdasarkan usia, tinggi, berat badan, dan tingkat aktivitas fisik. Dengan mengetahui kebutuhan kalori
                Anda, Anda dapat mengontrol asupan kalori Anda dan menjaga berat badan yang sehat.
              </p>
              <Button>Coba Sekarang</Button>
            </div>
          </div>
          <div
            data-aos='fade-up'
            className='mb-10 grid items-center justify-center pb-6 text-center shadow-md md:grid-cols-2 md:text-left md:shadow-none'
          >
            <div className='sm:order-1'>
              <img src={BMI} alt='Kalkulator BMI' className='mx-auto mb-6 w-32 md:w-40' />
            </div>
            <div>
              <h2 className='mb-4 text-2xl font-semibold text-main sm:text-3xl'>Kalkulator BMI</h2>
              <p className='mb-4 text-sm text-gray-700 sm:text-base'>
                Kalkulator BMI kami adalah alat yang membantu Anda mengukur indeks massa tubuh (BMI) Anda. BMI adalah
                ukuran yang digunakan untuk menentukan apakah berat badan Anda sehat untuk tinggi badan Anda.{' '}
              </p>
              <Button>Coba Sekarang</Button>
            </div>
          </div>
          <div
            data-aos='fade-up'
            className='mb-10 grid items-center justify-center pb-6 text-center shadow-md md:grid-cols-2 md:text-left md:shadow-none'
          >
            <div>
              <img src={Burger} alt='Cek Jumlah Kalori Makanan' className='mx-auto mb-6 w-32 md:w-40' />
            </div>
            <div>
              <h2 className='mb-4 text-2xl font-semibold text-main sm:text-3xl'>Cek Jumlah Kalori Makanan</h2>
              <p className='mb-4 text-sm text-gray-700 sm:text-base'>
                Aplikasi Cek Jumlah Kalori Makanan kami adalah alat yang membantu Anda menghitung jumlah kalori yang
                terkandung dalam makanan yang Anda konsumsi. Dengan aplikasi kami, Anda dapat memantau asupan kalori
                Anda secara akurat dan menjaga kesehatan Anda dengan lebih baik.
              </p>
              <Button>Coba Sekarang</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layanan;
