import React from 'react';
import { Aplikasi } from '../../layout';
import { FormKalkulatorRokok } from '../../components';

const AplikasiRokok = () => {
  document.title = 'Kalkulator Rokok';
  return (
    <div>
      <Aplikasi>
        <FormKalkulatorRokok />
      </Aplikasi>
    </div>
  );
};

export default AplikasiRokok;
