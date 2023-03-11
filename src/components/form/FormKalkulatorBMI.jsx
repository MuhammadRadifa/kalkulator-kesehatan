import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { GlobalContext } from '../../context/GlobalContext';
import { FormLayout } from '../../layout';
import BMI from '../../utils/logic/BMI';
import Gender from '../gender/Gender';
import ParameterTubuh from '../parameter-tubuh/ParameterTubuh';
import ResultKalkulatorBMI from '../result/ResultKalkulatorBMI';
import TitleBMI from '../title/TitleBMI';

const FormKalkulatorBMI = () => {
  const { state } = useContext(GlobalContext);
  const { inputUserCalori } = state;
  const [data, setData] = useState({});
  const [status, setStatus] = useState(false);
  const { berat, tinggi, gender } = inputUserCalori;

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
      setData(BMI(berat, tinggi, gender));
      if (result.dismiss === Swal.DismissReason.timer) {
        setStatus(true);
        window.location.href = '#ini';
      }
    });
  };
  return (
    <div>
      <FormLayout>
        {status && data ? <ResultKalkulatorBMI status={status} data={data} /> : <TitleBMI status={status} />}
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
    </div>
  );
};

export default FormKalkulatorBMI;
