import React from 'react';
import { FormKalkulatorKafein } from '../../components';
import { Aplikasi } from '../../layout';

const AplikasiKafein = () => {
  document.title = 'Kalkulator Kafein';
  return (
    <div>
      <Aplikasi>
        <FormKalkulatorKafein />
      </Aplikasi>
    </div>
  );
};

export default AplikasiKafein;
