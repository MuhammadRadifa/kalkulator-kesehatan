import React from 'react';
import { FormKalkulatorDepresi } from '../../components';
import { Aplikasi } from '../../layout';

const AplikasiDepresi = () => {
  document.title = 'Kalkulator Depresi';
  return (
    <div>
      <Aplikasi>
        <FormKalkulatorDepresi />
      </Aplikasi>
    </div>
  );
};

export default AplikasiDepresi;
