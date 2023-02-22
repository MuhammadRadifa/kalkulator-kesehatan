import React from 'react';
import { FormKalkulatorKalori } from '../../components';
import { Aplikasi } from '../../layout';

const AplikasiKalori = () => {
  document.title = 'Kalkulator Kalori';
  return (
    <div>
      <Aplikasi>
        <FormKalkulatorKalori />
      </Aplikasi>
    </div>
  );
};

export default AplikasiKalori;
