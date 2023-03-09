import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { FormLayout } from '../../layout';
import Kebahagiaan from '../../utils/logic/Kebahagiaan';
import ResultKalkulatorKebahagiaan from '../result/ResultKalkulatorKebahagiaan';
import TitleKebahagiaan from '../title/TitleKebahagiaan';

const FormKalkulatorKebahagiaan = () => {
  const [status, setStatus] = useState(false);
  const [data, setData] = useState({});
  const [state1, setState1] = useState(1);
  const [state2, setState2] = useState(1);
  const [state3, setState3] = useState(1);
  const [state4, setState4] = useState(1);
  const [state5, setState5] = useState(1);
  const optSelect = [];

  for (let i = 0; i < 7; i++) {
    optSelect.push(
      <option key={i} value={i + 1}>
        {i + 1}
      </option>
    );
  }

  const handleState1 = (e) => {
    setState1(parseInt(e.target.value));
  };

  const handleState2 = (e) => {
    setState2(parseInt(e.target.value));
  };

  const handleState3 = (e) => {
    setState3(parseInt(e.target.value));
  };

  const handleState4 = (e) => {
    setState4(parseInt(e.target.value));
  };

  const handleState5 = (e) => {
    setState5(parseInt(e.target.value));
  };

  const handleInput = (e) => {
    e.preventDefault();
    setData(Kebahagiaan(state1, state2, state3, state4, state5));
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
      if (result.dismiss === Swal.DismissReason.timer) {
        setStatus(true);
        window.location.href = '#ini';
      }
    });
  };

  return (
    <FormLayout>
      {status && data ? (
        <ResultKalkulatorKebahagiaan status={status} data={data} />
      ) : (
        <TitleKebahagiaan status={status} />
      )}
      <div className={`${status && ' md:-translate-x-full '} md:px-32`}>
        <form onSubmit={handleInput}>
          <div className='w-full rounded-lg bg-main p-10 text-white'>
            <div className='flex justify-between'>
              <h2 className='mb-6 text-2xl font-semibold'>Pernyataan</h2>
              <h2 className='mb-6 text-2xl font-semibold'>Skor</h2>
            </div>
            <div>
              <ol className='mb-5 grid list-outside list-decimal gap-y-5'>
                <li className='flex items-center justify-between'>
                  <p className='w-2/3'>Dalam sebagian besar aspek, hidup saya mendekati cita-cita saya</p>
                  <select
                    name='state1'
                    id='state1'
                    className='h-12 w-24 rounded-lg bg-white text-center text-gray-400 outline-sky-500'
                    onChange={handleState1}
                  >
                    {optSelect}
                  </select>
                </li>
                <li className='flex items-center justify-between'>
                  <p className='w-2/3'>Secara umum kondisi kehidupan saya sangat baik</p>
                  <select
                    name='state2'
                    id='state2'
                    className='h-12 w-24 rounded-lg bg-white text-center text-gray-400 outline-sky-500'
                    onChange={handleState2}
                  >
                    {optSelect}
                  </select>
                </li>
                <li className='flex items-center justify-between'>
                  <p className='w-2/3'>Saya merasa hidup saya memuaskan</p>
                  <select
                    name='state3'
                    id='state3'
                    className='h-12 w-24 rounded-lg bg-white text-center text-gray-400 outline-sky-500'
                    onChange={handleState3}
                  >
                    {optSelect}
                  </select>
                </li>
                <li className='flex items-center justify-between'>
                  <p className='w-2/3'>
                    Sejauh ini saya telah mendapatkan hal-hal penting yang saya inginkan dalam hidup saya
                  </p>
                  <select
                    name='state4'
                    id='state4'
                    className='h-12 w-24 rounded-lg bg-white text-center text-gray-400 outline-sky-500'
                    onChange={handleState4}
                  >
                    {optSelect}
                  </select>
                </li>
                <li className='flex items-center justify-between'>
                  <p className='w-2/3'>Jika saya dapat menjalani hidup saya lagi, saya tidak akan mengubah apa pun</p>
                  <select
                    name='state5'
                    id='state5'
                    className='h-12 w-24 rounded-lg bg-white text-center text-gray-400 outline-sky-500'
                    onChange={handleState5}
                  >
                    {optSelect}
                  </select>
                </li>
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

export default FormKalkulatorKebahagiaan;
