import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { GlobalContext } from '../../context/GlobalContext';
import { FormLayout } from '../../layout';
import Vitamin from '../../utils/logic/vitamin';
import Gender from '../gender/Gender';
import ParameterTubuh from '../parameter-tubuh/ParameterTubuh';
import ResultKalkulatorVitamin from '../result/ResultKalkulatorVitamin';
import TitleVitamin from '../title/TitleVitamin';

const FormKalkulatorVitamin = () => {
  const { state } = useContext(GlobalContext);
  const { inputUserCalori } = state;
  const [data, setData] = useState({});
  const [status, setStatus] = useState(false);

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
      setData(Vitamin(inputUserCalori));
      if (result.dismiss === Swal.DismissReason.timer) {
        setStatus(true);
        window.location.href = '#ini';
      }
    });
  };

  return (
    <FormLayout>
      {status && data ? <ResultKalkulatorVitamin status={status} data={data} /> : <TitleVitamin status={status} />}
      <div className={`${status && ' md:-translate-x-full '} md:px-32`}>
        <form onSubmit={handleInput}>
          <div className='w-full rounded-lg bg-main p-10 text-white'>
            <h2 className='mb-6 text-2xl font-semibold'>Parameter Tubuh</h2>
            <Gender content={'bmi'} />
            <ParameterTubuh />
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

export default FormKalkulatorVitamin;
