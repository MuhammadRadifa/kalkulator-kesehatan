import React from 'react';
import { FormKalkulatorVitamin } from '../../components';
import { Aplikasi } from '../../layout';

const AplikasiVitamin = () => {
  document.title = 'Kalkulator Vitamin';
  return (
    <div>
      <Aplikasi>
        <FormKalkulatorVitamin />
      </Aplikasi>
    </div>
  );
};

export default AplikasiVitamin;
