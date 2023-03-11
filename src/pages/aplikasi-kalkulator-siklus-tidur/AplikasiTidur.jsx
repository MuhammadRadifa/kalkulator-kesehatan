import React from 'react';
import { FormKalkulatorTidur } from '../../components';
import { Aplikasi } from '../../layout';

const AplikasiTidur = () => {
  document.title = 'Kalkulator Siklus Tidur';
  return (
    <div>
      <Aplikasi>
        <FormKalkulatorTidur />
      </Aplikasi>
    </div>
  );
};

export default AplikasiTidur;
