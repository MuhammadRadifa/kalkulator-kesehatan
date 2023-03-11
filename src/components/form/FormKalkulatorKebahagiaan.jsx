import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { FormLayout } from '../../layout';
import { Kebahagiaan } from '../../utils';
import ResultKalkulatorKebahagiaan from '../result/ResultKalkulatorKebahagiaan';
import TitleKebahagiaan from '../title/TitleKebahagiaan';

const FormKalkulatorKebahagiaan = () => {
  const [status, setStatus] = useState(false);
  const [data, setData] = useState({});
  const [dataSkor, setDataSkor] = useState({
    state1: 1,
    state2: 1,
    state3: 1,
    state4: 1,
    state5: 1,
  });
  const text = [
    'Dalam sebagian besar aspek, hidup saya mendekati cita-cita saya',
    'Secara umum kondisi kehidupan saya sangat baik',
    'Saya merasa hidup saya memuaskan',
    'Sejauh ini saya telah mendapatkan hal-hal penting yang saya inginkan dalam hidup saya',
    'Jika saya dapat menjalani hidup saya lagi, saya tidak akan mengubah apa pun',
  ];
  const optSelect = [];

  for (let i = 0; i < 7; i++) {
    optSelect.push(
      <option key={i} value={i + 1}>
        {i + 1}
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
      setData(Kebahagiaan(dataSkor));
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
                {text &&
                  text.map((element, index) => {
                    return (
                      <li className='flex items-center justify-between' key={index}>
                        <p className='w-2/3'>{element}</p>
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

export default FormKalkulatorKebahagiaan;
