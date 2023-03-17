import React, { useState } from 'react';
import { FormLayout } from '../../layout';
import TitleRokok from '../title/TitleRokok';
import Swal from 'sweetalert2';
import ResultKalkulatorRokok from '../result/ResultKalkulatorRokok';
import { orangMerokok, kotak, rupiah, kalender } from '../../assets';
import { Rokok } from '../../utils';

const FormKalkulatorRokok = () => {
  const [status, setStatus] = useState(false);
  const [dataInput] = useState([
    { image: rupiah, name: 'harga', text: 'Harga Rokok per Kotak : ', placeholder: 'Rp.20.000' },
    { image: kotak, name: 'isiKotakRokok', text: 'Jumlah Rokok dalam 1 kotak :', placeholder: '18 batang' },
    {
      image: orangMerokok,
      name: 'rokokHarian',
      text: 'Berapa banyak rokok yang Anda hisap dalam sehari?',
      placeholder: '8 batang',
    },
    { image: kalender, name: 'tahun', text: 'Sudah berapa tahun Anda merokok?', placeholder: '2 tahun' },
  ]);
  const [input, setInput] = useState({
    harga: 0,
    isiKotakRokok: 0,
    rokokHarian: 0,
    tahun: 0,
  });

  const [resultData, setResultData] = useState({});

  const handleState = (e) => {
    setInput({ ...input, [e.target.name]: parseInt(e.target.value) });
  };

  const handleInput = (e) => {
    e.preventDefault();

    let timerInterval;
    Swal.fire({
      title: 'loading',
      html: 'Harap Tunggu Sebentar',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      setResultData(Rokok(input));
      if (result.dismiss === Swal.DismissReason.timer) {
        setStatus(true);
        window.location.href = '#ini';
      }
    });
  };
  return (
    <FormLayout>
      {status && resultData ? (
        <ResultKalkulatorRokok status={status} data={resultData} />
      ) : (
        <TitleRokok status={status} />
      )}
      <div className={`${status && ' md:-translate-x-full '} md:px-32`}>
        <form onSubmit={handleInput}>
          <div className='w-full rounded-lg bg-main p-10 text-white'>
            <h1 className='mb-7 text-center text-2xl font-semibold'>Input Data</h1>
            {dataInput &&
              dataInput.map((item, index) => {
                return (
                  <div
                    className='mb-12 flex flex-col items-center justify-between gap-x-1 text-center md:flex-row  md:text-left'
                    key={index}
                  >
                    <div className='flex flex-col items-center gap-x-2 md:flex-row md:gap-x-5'>
                      <img className='h-16 md:h-auto' src={item.image} alt={item.name} />
                      <p>{item.text}</p>
                    </div>
                    <input
                      className='h-12 rounded-lg bg-white p-2 text-center text-slate-700 outline-main md:w-28'
                      type='number'
                      name={item.name}
                      id={item.name}
                      placeholder={item.placeholder}
                      onChange={handleState}
                    />
                  </div>
                );
              })}
            <button
              type='submit'
              className='w-full rounded bg-white py-3 text-center text-xl text-main hover:bg-darkBlue hover:text-white'
            >
              Kirim
            </button>
          </div>
        </form>
      </div>
    </FormLayout>
  );
};

export default FormKalkulatorRokok;
