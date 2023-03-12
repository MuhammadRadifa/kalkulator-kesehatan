import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { WakeUp } from '../../assets';
import { FormLayout } from '../../layout';
import { Tidur } from '../../utils';
import ResultKalkulatorTidur from '../result/ResultKalkulatorTidur';
import TitleTidur from '../title/TitleTidur';

const FormKalkulatorTidur = () => {
  const [status, setStatus] = useState(false);
  const [data, setData] = useState({});
  const [dataTidur, setDataTidur] = useState({
    jam: '00',
    menit: '00',
  });
  const waktu = ['jam', 'menit'];

  const optSelectJam = [];
  const optSelectMenit = [];

  for (let i = 0; i < 24; i++) {
    optSelectJam.push(
      <option key={i} value={i}>
        {i < 10 ? `0${i}` : i}
      </option>
    );
  }

  for (let i = 0; i < 60; i += 5) {
    optSelectMenit.push(
      <option key={i} value={i}>
        {i < 10 ? `0${i}` : i}
      </option>
    );
  }

  const handleState = (e) => {
    setDataTidur({ ...dataTidur, [e.target.name]: parseInt(e.target.value) });
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
      setData(Tidur(dataTidur));
      if (result.dismiss === Swal.DismissReason.timer) {
        setStatus(true);
        window.location.href = '#ini';
      }
    });
  };

  return (
    <div>
      <FormLayout>
        {status && data ? (
          <ResultKalkulatorTidur status={status} data={data} jamTidur={dataTidur} />
        ) : (
          <TitleTidur status={status} />
        )}
        <div className={`${status && ' md:-translate-x-full '} md:px-32`}>
          <form onSubmit={handleInput}>
            <div className='w-full rounded-lg bg-main p-10 text-white'>
              <img src={WakeUp} alt='Wake Up' className='mx-auto mb-9' />
              <h1 className='mb-11 text-center text-3xl font-medium'>
                Saya ingin bangun <span className='block'>pada waktu...</span>
              </h1>
              <div className='mb-11 flex justify-center gap-x-5'>
                {waktu &&
                  waktu.map((w) => {
                    return (
                      <label htmlFor={w} key={w}>
                        <p className='text-center text-xl font-medium capitalize'>{w}</p>
                        <select
                          name={w}
                          id={w}
                          onChange={handleState}
                          className='rounded-lg bg-white px-7 py-3 text-lg text-main'
                        >
                          {w == 'jam' ? optSelectJam : optSelectMenit}
                        </select>
                      </label>
                    );
                  })}
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
    </div>
  );
};

export default FormKalkulatorTidur;
