import React from 'react';
import { HiArrowLongRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { Button, Footer } from '../../components';

const Disclaimer = () => {
  const disclaimers = [
    'Aplikasi kalkulator kesehatan ini tidak dimaksudkan sebagai pengganti nasihat medis profesional.',
    'Aplikasi ini hanya memberikan informasi umum dan tidak dimaksudkan sebagai pengganti diagnosa medis.',
    'Kalkulator kesehatan ini hanya dapat memberikan perkiraan hasil berdasarkan data yang dimasukkan dan tidak dapat diandalkan sepenuhnya.',
    'Anda disarankan untuk selalu berkonsultasi dengan dokter atau profesional kesehatan sebelum melakukan perubahan signifikan pada pola makan atau aktivitas fisik Anda.',
    'Hasil dari kalkulator kesehatan ini tidak boleh dijadikan patokan utama dalam menentukan kondisi kesehatan Anda.',
    'Aplikasi ini tidak bertanggung jawab atas kesalahan pengguna dalam memasukkan data atau penggunaan hasil kalkulator.',
    'Kalkulator kesehatan ini hanya menyediakan informasi umum tentang kondisi kesehatan, dan tidak dapat menggantikan pengobatan medis yang diresepkan oleh dokter atau profesional kesehatan.',
    'Kalkulator kesehatan ini hanya dapat digunakan sebagai alat bantu untuk membantu Anda memahami kondisi kesehatan Anda.',
    'Aplikasi ini tidak dimaksudkan untuk menggantikan pengobatan atau nasihat medis profesional dan tidak boleh digunakan sebagai pengganti dari itu.',
    'Perlu diingat bahwa kalkulator kesehatan ini hanya dapat memberikan perkiraan dan hasil yang diberikan tidak selalu akurat, sehingga Anda harus selalu berkonsultasi dengan dokter atau profesional kesehatan sebelum mengambil keputusan penting terkait kesehatan Anda.',
  ];

  return (
    <>
      <div className='flex min-h-screen md:items-center'>
        <div className='container mx-auto p-8 text-slate-600 md:px-0'>
          <h1 className='mb-10 text-4xl font-semibold md:text-7xl'>Disclaimer</h1>
          <ul>
            {disclaimers &&
              disclaimers.map((disclaimer, index) => {
                return (
                  <li className='mb-4 list-disc text-sm md:text-xl' key={index}>
                    {disclaimer}
                  </li>
                );
              })}
          </ul>
          <Link to={'/'} onClick={() => window.scroll(0, 0)} className='self-end pb-10'>
            <Button className={`group flex items-center gap-3 hover:opacity-90`}>
              Kembali ke Beranda{' '}
              <span className='text-xl font-bold group-hover:translate-x-2'>
                <HiArrowLongRight />
              </span>
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Disclaimer;
