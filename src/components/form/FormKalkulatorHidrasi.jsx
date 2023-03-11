import React, { useContext, useState } from 'react';
import Gender from '../gender/Gender';
import ParameterTubuh from '../parameter-tubuh/ParameterTubuh';
import { GlobalContext } from '../../context/GlobalContext';
import Swal from 'sweetalert2';
import { FormLayout } from '../../layout';
import { KebutuhanAir } from '../../utils';
import ResultKalkulatorHidrasi from '../result/ResultKalkulatorHidrasi';
import TitleHidrasi from '../title/TitleHidrasi';

const FormKalkulatorHidrasi = () => {
  const { state } = useContext(GlobalContext);
  const { inputUserCalori } = state;
  const [data, setData] = useState({});
  const [status, setStatus] = useState(false);
  const { berat } = inputUserCalori;

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
      setData(KebutuhanAir(berat));
      if (result.dismiss === Swal.DismissReason.timer) {
        setStatus(true);
        window.location.href = '#ini';
      }
    });
  };

  return (
    <FormLayout>
      {status && data ? <ResultKalkulatorHidrasi status={status} data={data} /> : <TitleHidrasi status={status} />}
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

export default FormKalkulatorHidrasi;
