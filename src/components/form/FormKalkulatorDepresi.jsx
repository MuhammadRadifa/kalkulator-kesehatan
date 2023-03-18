import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { FormLayout } from '../../layout';
import { Depresi } from '../../utils';
import ResultKalkulatorDepresi from '../result/ResultKalkulatorDepresi';
import TitleDepresi from '../title/TitleDepresi';

const FormKalkulatorDepresi = () => {
  const [status, setStatus] = useState(false);
  const [data, setData] = useState({});
  const [dataSkor, setDataSkor] = useState({
    state1: 0,
    state2: 0,
    state3: 0,
    state4: 0,
    state5: 0,
    state6: 0,
    state7: 0,
  });
  const text = [
    'Sedih, kecewa, atau putus asa',
    'Hilang semangat atau minat pada kegiatan biasa',
    'Gelisah, cemas, atau khawatir',
    'Lelah dan tidak bertenaga',
    'Masalah tidur',
    'Merasa tidak berharga atau bersalah',
    'Berpikir untuk tidak ingin hidup atau menyakiti diri sendiri',
  ];
  const optSelect = [];

  for (let i = 0; i < 4; i++) {
    optSelect.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  const handleState = (e) => {
    setDataSkor({ ...dataSkor, [e.target.name]: parseInt(e.target.value) });
  };

  const handleInput = (e) => {
    e.preventDefault();
    let timerInterval;
    Swal.fire({
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
      setData(Depresi(dataSkor));
      if (result.dismiss === Swal.DismissReason.timer) {
        setStatus(true);
        window.location.href = '#ini';
      }
    });
  };

  return (
    <FormLayout>
      {status && data ? <ResultKalkulatorDepresi status={status} data={data} /> : <TitleDepresi status={status} />}
      <div className={`${status && ' md:-translate-x-full '} md:px-32`}>
        <form onSubmit={handleInput}>
          <div className='w-full rounded-lg bg-main p-10 text-white'>
            <div className='flex justify-between'>
              <h2 className='mb-6 text-2xl font-semibold'>Pernyataan</h2>
              <h2 className='mb-6 text-2xl font-semibold'>Skor</h2>
            </div>
            <div>
              <ol className='mb-5 grid list-outside list-decimal gap-y-5'>
                {text &&
                  text.map((element, index) => {
                    return (
                      <li className='flex items-center justify-between' key={index}>
                        <p className='mr-2 w-2/3 text-lg'>{element}</p>
                        <select
                          name={`state${index + 1}`}
                          id={`state${index + 1}`}
                          className='h-12 w-24 rounded-lg bg-white text-center text-gray-400 outline-sky-500'
                          onChange={handleState}
                        >
                          {optSelect}
                        </select>
                      </li>
                    );
                  })}
              </ol>
            </div>
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

export default FormKalkulatorDepresi;
