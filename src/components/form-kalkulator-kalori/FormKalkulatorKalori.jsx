import React, { useContext, useState } from 'react';
import Gender from '../gender/Gender';
import IntensitasAktivitas from '../intensitas-aktivitas/IntensitasAktivitas';
import ParameterTubuh from '../parameter-tubuh/ParameterTubuh';
import Target from '../target/Target';
import { GlobalContext } from '../../context/GlobalContext';
import Calories from '../../utils/logic/Calories';
import Swal from 'sweetalert2';
import FormTitle from '../form-title/FormTitle';
import ResultKalkulatorKalori from '../result-kalkulator-kalori/ResultKalkulatorKalori';
import { FormLayout } from '../../layout';

const FormKalkulatorKalori = () => {
  const { state } = useContext(GlobalContext);
  const { inputUserCalori } = state;
  const [data, setData] = useState({});
  const [status, setStatus] = useState(false);

  const handleInput = (e) => {
    e.preventDefault();
    setData(Calories(inputUserCalori));
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
      if (result.dismiss === Swal.DismissReason.timer) {
        setStatus(true);
        window.location.href = '#ini';
      }
    });
  };

  return (
    <FormLayout>
      {status && data ? <ResultKalkulatorKalori status={status} data={data} /> : <FormTitle status={status} />}
      <div className={`${status && ' md:-translate-x-full '} md:px-32`}>
        <form onSubmit={handleInput}>
          <div className='w-full rounded-lg bg-main p-10 text-white'>
            <h2 className='mb-6 text-2xl font-semibold'>Parameter Tubuh</h2>
            <Gender />
            <ParameterTubuh />
            <IntensitasAktivitas />
            <Target />
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

export default FormKalkulatorKalori;
